(ns ubc-website.main-test
  (:require [clojure.test :refer [deftest testing is]]
            [ring.mock.request :as mock]
            [ubc-website.routes :refer [app]]))

(deftest test-app
  (testing "main route"
    (let [response ((app) (mock/request :get "/"))]
      (is (= (:status response) 302))))

  (testing "not-found route"
    (let [response ((app) (mock/request :get "/invalid"))]
      (is (= (:status response) 404)))))
