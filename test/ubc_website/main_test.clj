(ns ubc-website.main-test
  (:require [clojure.test :refer [deftest testing is]]
            [ring.mock.request :as mock]
            [ubc-website.routes :refer [app]]))

(deftest test-app
  (testing "main route"
    (let [response ((app) (mock/request :get "/"))]
      (is (= (:status response) 200))
      (is (.contains (:body response) "Clean Code, 2nd ed."))
      (is (.contains (:body response) "Agile Software Development: Principles, Patterns, and Practices"))))

  (testing "products route shows front page"
    (let [response ((app) (mock/request :get "/products"))]
      (is (= (:status response) 200))
      (is (.contains (:body response) "Clean Code, 2nd ed."))))

  (testing "not-found route"
    (let [response ((app) (mock/request :get "/invalid"))]
      (is (= (:status response) 404)))))
