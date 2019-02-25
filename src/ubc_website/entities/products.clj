(ns ubc-website.entities.products
  (:require
    [clojure.spec.alpha :as s]))

(s/def ::product-description string?)
(s/def ::product-name string?)
(s/def ::product (s/keys :req-un [::product-name ::product-description]))
(s/def ::products (s/coll-of ::product))
(s/def ::product-category string?)
(s/def ::products-in-category (s/keys :req-un [::product-category ::products]))
(s/def ::categories (s/coll-of ::products-in-category))
