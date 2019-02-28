(ns ubc-website.routes
  (:use [hiccup core page])
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.reload :refer [wrap-reload]]
            [ubc-website.interactors.front-page :as front-page]
            [markdown-to-hiccup.core :as m]))

(defroutes
  app-routes
  (GET "/" [] (front-page/exec))

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
