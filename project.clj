(defproject ubc-website "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [compojure "1.6.1"]
                 [ring "1.7.1"]
                 [hiccup "1.0.5"]
                 [markdown-to-hiccup "0.6.2"]
                 [http-kit "2.3.0"]]
  :plugins [[lein-ring "0.12.4"]]
  :ring {:handler ubc-website.handler/app}
  :profiles
  {:dev
   [{:plugins [[com.jakemccrary/lein-test-refresh "0.23.0"]]}
    {:dependencies [[javax.servlet/servlet-api "2.5"]
                    [ring/ring-mock "0.3.2"]]}]})
