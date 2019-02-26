(ns ubc-website.presenters.front-page-test
  (:require [clojure.test :refer :all]
            [clojure.spec.alpha :as s]
            [ubc-website.entities.products :as products]
            [ubc-website.presenters.front-page :as front-page]
            [ubc-website.presenters.testutil :refer [all-vectors?]]
            [ubc-website.presenters.util :refer [markdown]]))

(defn check-presentation [categories expected-presentation]
  (let [valid (s/explain-data ::products/categories categories)
        presentation (front-page/present-product-categories categories)]
    (is (nil? valid))
    (is (all-vectors? presentation))
    (is (= presentation expected-presentation))))

(deftest front-page-presenter
  (testing "no products"
    (check-presentation [] []))

  (testing "one product category"
    (check-presentation
      [{:product-category "Category" :products []}]
      [[:div.product-category
        [:p.product-category "Category"]]]))

  (testing "one product in one category"
    (check-presentation
      [{:product-category "Category"
        :products [{:product-name "Product"
                    :product-description "Description"}]}]
      [[:div.product-category
        [:p.product-category "Category"]
        [:div.product
         [:p.product-name "Product"]
         [:div.product-description (markdown "Description")]]]]))

  (testing "two products in one category"
    (check-presentation
      [{:product-category "Category"
        :products [{:product-name "Product1"
                    :product-description "Description1"}
                   {:product-name "Product2"
                    :product-description "Description2"}]}]
      [[:div.product-category
        [:p.product-category "Category"]
        [:div.product
         [:p.product-name "Product1"]
         [:div.product-description (markdown "Description1")]]
        [:div.product
         [:p.product-name "Product2"]
         [:div.product-description (markdown "Description2")]]]]))

  (testing "two products in each of two categories"
    (check-presentation
      [{:product-category "Category1"
        :products [{:product-name "Product1"
                    :product-description "Description1"}
                   {:product-name "Product2"
                    :product-description "Description2"}]}
       {:product-category "Category2"
        :products [{:product-name "Product3"
                    :product-description "Description3"}
                   {:product-name "Product4"
                    :product-description "Description4"}]}]
      [[:div.product-category
        [:p.product-category "Category1"]
        [:div.product
         [:p.product-name "Product1"]
         [:div.product-description (markdown "Description1")]]
        [:div.product
         [:p.product-name "Product2"]
         [:div.product-description (markdown "Description2")]]]
       [:div.product-category
        [:p.product-category "Category2"]
        [:div.product
         [:p.product-name "Product3"]
         [:div.product-description (markdown "Description3")]]
        [:div.product
         [:p.product-name "Product4"]
         [:div.product-description (markdown "Description4")]]]]))

  )
