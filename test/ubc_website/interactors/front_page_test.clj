(ns ubc-website.interactors.front-page-test
  (:require [clojure.test :refer [use-fixtures
                                  deftest
                                  testing
                                  is]]
            [clojure.spec.alpha :as s]
            [ubc-website.entities.products :as products]
            [ubc-website.interactors.front-page :as fp]
            [me.raynes.fs :as fs]
            ))

(def directory "Categories-Test")

(defn clear-directory []
  (fs/delete-dir directory)
  (fs/mkdir directory)
  )

(defn create-category [category]
  (let [category-directory (str directory "/" category)]
    (fs/mkdir category-directory)))

(defn create-product [category product description]
  (let [product-file (str directory "/" category "/" product)]
    (spit product-file description)))

(defn check-categories [directory expected]
  (let [categories (fp/get-categories directory)
        valid (s/explain-data ::products/categories categories)]
    (is (nil? valid))
    (is (= expected categories))))

(deftest test-get-products
  (clear-directory)
  (testing "no Categories Directory"
    (check-categories directory []))

  (testing "one category with no products"
    (clear-directory)
    (create-category "001_Category")
    (check-categories directory [{:product-category "Category"
                                  :products []}]))

  (testing "two categories with no products"
    (clear-directory)
    (create-category "002_Category2")
    (create-category "001_Category1")
    (check-categories directory [{:product-category "Category1" :products []}
            {:product-category "Category2" :products []}]))

  (testing "one category one product"
    (clear-directory)
    (create-category "001_Category")
    (create-product "001_Category" "001_Product" "Description")
    (check-categories directory [{:product-category "Category"
             :products [{:product-name "Product"
                         :product-description "Description"}]}]))

  (testing "two categories three products"
    (clear-directory)
    (create-category "001_C1")
    (create-category "002_C2")
    (create-product "001_C1" "001_P1" "D1")
    (create-product "002_C2" "002_P2" "D2")
    (create-product "002_C2" "003_P3" "D3")
    (check-categories directory [{:product-category "C1"
             :products [{:product-name "P1"
                         :product-description "D1"}]}
            {:product-category "C2"
             :products [{:product-name "P2"
                         :product-description "D2"}
                        {:product-name "P3"
                         :product-description "D3"}]}])))
