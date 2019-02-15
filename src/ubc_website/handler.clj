(ns ubc-website.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [org.httpkit.server :refer [run-server]]
            [ring.middleware.reload :refer [wrap-reload]]
            [ubc-website.views :as views]))

(defroutes app-routes
  (GET "/" [] (views/front-page))
  (route/not-found "Not Found"))

(def app
  (wrap-reload app-routes))


(defn -main []
  (run-server app {:port 3000})
)