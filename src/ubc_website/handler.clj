(ns ubc-website.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]))

(defn front-page []
  "Hello World")

(defroutes app-routes
  (GET "/" [] (front-page))
  (route/not-found "Not Found"))

(def app
  (wrap-defaults app-routes site-defaults))
