(ns ubc-website.main
  (:require [compojure.core :refer :all]
            [org.httpkit.server :refer [run-server]]
            [ubc-website.routes :refer [app]]
            [ubc-website.Gateways.fileGateway :refer [fileGateway]]))


(defn -main []
  (run-server (app) {:port 3000})
)