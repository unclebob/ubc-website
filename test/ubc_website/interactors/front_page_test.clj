(ns ubc-website.interactors.front-page-test
  (:require [clojure.test :refer [use-fixtures
                                  deftest
                                  testing
                                  is]]
            [clojure.spec.alpha :as s]
            [ubc-website.entities.products :as products]
            [ubc-website.interactors.front-page :as fp]
            [me.raynes.fs :as fs]
            [clj-time.core :as t]
            [clj-time.format :as t-fmt]
            ))

(def directory "FrontPageInteractor-Test")

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

(deftest test-get-categories
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

(def today (t/date-time 2019 3 1))
(def yesterday (t/minus today (t/days 1)))
(def future-delta (t/days 3))

(defn create-event [date suffix description]
  (let [time-format (t-fmt/formatter "yyyyMMdd")
        event-name (str (t-fmt/unparse time-format date) "_" suffix)]
    (spit (str directory "/" event-name) description)
    )
  )

(deftest testGetEvents
  (testing "no events"
    (clear-directory)
    (let [events (fp/get-events directory today future-delta)]
      (is (= events [])))
    )

  (testing "one current event"
    (clear-directory)
    (create-event today "suffix" "description")
    (let [events (fp/get-events directory today future-delta)]
      (is (= events [{:date today :description "description"}]))))

  (testing "don't get past events"
    (clear-directory)
    (create-event yesterday "y-suffix" "y-description")
    (create-event today "t-suffix" "t-description")
    (let [events (fp/get-events directory today future-delta)]
      (is (= events [{:date today :description "t-description"}]))))

  (testing "don't get events too far in future"
    (clear-directory)
    (create-event today "t-suffix" "t-description")
    (create-event (t/plus today future-delta) "f-suffix" "f-description")
    (let [events (fp/get-events directory today future-delta)]
      (is (= events [{:date today :description "t-description"}]))))
  )
