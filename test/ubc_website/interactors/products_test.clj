(ns ubc-website.interactors.products-test
  (:require [clojure.test :refer [deftest testing is]]
            [ubc-website.interactors.products :refer [get-products]]
            [ubc-website.Gateways.fileGateway :refer [fileGateway]]))

(deftype mockFileGateway []
  fileGateway
  (file-names [this])
  (file-contents [this file-name]))

(deftest test-product
  (testing "no products found"
    (let [gateway (->mockFileGateway)]
      ())
    ))
