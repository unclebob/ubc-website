(ns ubc-website.interactors.front-page
  (:require
    [ubc-website.views.front-page :as front-page]))

(def mock-front-page-data
  {:categories
   [{:product-category "Category1"
     :products [{:product-name "Product1"
                 :product-description "Description _1_"}
                {:product-name "Product2"
                 :product-description "Description 2"}]}
    {:product-category "Category2"
     :products [{:product-name "Product3"
                 :product-description "Description 3"}
                {:product-name "Product4"
                 :product-description "Description 4"}]}]})

(defn exec []
  (let [front-page-data mock-front-page-data]
    (front-page/show front-page-data)))
