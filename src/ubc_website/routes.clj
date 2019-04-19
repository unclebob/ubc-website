(ns ubc-website.routes
  (:use [hiccup core page])
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.util.response :refer [redirect]]
            [ubc-website.interactors.product-page :as product-page]
            [ubc-website.interactors.recommended-books :as recommended-books]
            [markdown-to-hiccup.core :as m]))

(defroutes
  app-routes
  (GET "/" [] (redirect "/products"))
  (GET "/products" [] (product-page/exec))
  (GET "/books" [] (recommended-books/exec))

  (route/resources "/")
  (route/not-found "Not Found"))

(defn wrap-print-request [handler]
  (fn [request]
    (let [response (handler request)]
      (println request)
      (println "----")
      (println response)
      (println "====")
      response)))

(defn md-uri->html [uri]
  (let [markdown (slurp (str "resources/public" uri))
        hiccup (-> markdown m/md->hiccup m/component)]
    (html5
      [:head
       [:title "UBC"]
       (include-css "/css/style.css")]
      hiccup)))

(defn wrap-markdown [handler]
  (fn [request]
    (let [uri (:uri request)
          isMarkdown? (.endsWith uri ".md")
          response (if isMarkdown?
                     {:status 200
                      :body (md-uri->html uri)}
                     (handler request))]
      response)))

(defn app []
  (-> app-routes wrap-reload wrap-markdown))
