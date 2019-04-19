(ns ubc-website.presenters.product-page
  (:require
    [ubc-website.presenters.util :refer [markdown]]))

(defn present-product [product]
  (update product :product-description markdown))


