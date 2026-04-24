(ns ubc-website.main
  (:require [org.httpkit.server :refer [run-server]]
            [ubc-website.routes :refer [app]]))

(def default-port 3000)

(defn parse-port [port]
  (Integer/parseInt (or port (System/getenv "PORT") (str default-port))))

(defn -main [& [port]]
  (let [port (parse-port port)]
    (run-server (app) {:port port})
    (println (str "Server started on http://localhost:" port))
    @(promise)))
