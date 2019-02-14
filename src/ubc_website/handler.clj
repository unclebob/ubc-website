(ns ubc-website.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]])
  (:use [ubc-website.views :as views]))

(defroutes app-routes
  (GET "/" [] (views/front-page))
  (route/not-found "Not Found"))

(def app
  (wrap-defaults app-routes site-defaults))
