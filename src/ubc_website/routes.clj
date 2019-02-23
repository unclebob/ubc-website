(ns ubc-website.routes
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.reload :refer [wrap-reload]]
            [ubc-website.interactors.front-page :as front-page]))

(defroutes
  app-routes
  (GET "/" [] (front-page/exec))
  (route/resources "/")
  (route/not-found "Not Found"))

(defn app []
  (wrap-reload app-routes))
