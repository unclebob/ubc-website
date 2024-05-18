(ns ubc-website.routes
  (:use [hiccup core page])
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.middleware.params :refer [wrap-params]]
            [ring.middleware.session :refer [wrap-session]]
            [ring.util.response :refer [redirect]]
            [ubc-website.interactors.product-page :as product-page]
            [ubc-website.interactors.recommended-books :as recommended-books]
            [ubc-website.interactors.notification-registration :as register]
            [ubc-website.interactors.user-groups :as user-groups]
            [ubc-website.interactors.zorch :as zorch]
            [markdown-to-hiccup.core :as m]))

(defn serve [file]
  (slurp file))

(defroutes
  app-routes
  (GET "/" [] (redirect "/products"))
  (GET "/products" [:as {session :session}] (product-page/exec session))
  (GET "/books" [] (recommended-books/exec))
  (GET "/register" [:as {session :session} name email]
    (register/registration-page name email session))
  (POST "/postregistration" [name email] (register/exec name email))
  (GET "/user-groups" [] (user-groups/exec))
  (GET "/a-little-clojure" [] (serve "resources/files/aLittleClojure.html"))
  (GET "/zorch" [key] (zorch/exec key))

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
  (let [markdown (slurp (str "resources" uri))
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
  (-> app-routes wrap-reload wrap-markdown wrap-params wrap-session))


;{:remote-addr "0:0:0:0:0:0:0:1",
; :params {"name" "hi", "email" "em"},
; :route-params {},
; :headers {"origin" "http://localhost:3000", "host" "localhost:3000", "user-agent" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36", "content-type" "application/x-www-form-urlencoded", "cookie" "ring-session=7ff5993d-6c96-49e1-9653-bc9372e25155", "content-length" "16", "referer" "http://localhost:3000/register", "connection" "keep-alive", "upgrade-insecure-requests" "1", "accept" "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3", "accept-language" "en-US,en;q=0.9", "accept-encoding" "gzip, deflate, br", "cache-control" "max-age=0"},
; :async-channel #object[org.httpkit.server.AsyncChannel 0x31b062a3 "/0:0:0:0:0:0:0:1:3000<->/0:0:0:0:0:0:0:1:58967"],
; :server-port 3000,
; :content-length 16,
; :form-params {"name" "hi", "email" "em"},
; :compojure/route [:post "/postregistration"],
; :websocket? false,
; :query-params {},
; :content-type "application/x-www-form-urlencoded",
; :character-encoding "utf8",
; :uri "/postregistration",
; :server-name "localhost",
; :query-string nil,
; :body #object[org.httpkit.BytesInputStream 0x1b196625 "BytesInputStream[len=16]"],
; :scheme :http,
; :request-method :post}