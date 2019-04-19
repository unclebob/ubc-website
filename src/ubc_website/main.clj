(ns ubc-website.main
  (:require [compojure.core :refer :all]
            [org.httpkit.server :refer [run-server]]
            [ubc-website.routes :refer [app]]
            ))


(defn -main []
  (run-server (app) {:port 3000})
  )