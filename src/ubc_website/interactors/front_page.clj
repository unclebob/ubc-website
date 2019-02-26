(ns ubc-website.interactors.front-page
  (:require
    [ubc-website.views.front-page :as front-page]
    [me.raynes.fs :as fs]))

(defn strip-name [name]
  (let [parts (clojure.string/split (fs/name name) #"_")]
    (second parts)))

(defn make-product [name description]
  {:product-name name :product-description description})

(defn make-products [directory]
  (let [product-files (sort (fs/list-dir directory))
        descriptions (map slurp product-files)
        product-names (map strip-name product-files)
        products (map make-product product-names descriptions)]
    products))

(defn make-category [directory]
  (let [category-name (strip-name directory)]
    {:product-category category-name
     :products (make-products directory)}))

(defn get-categories [directory]
  (let [files (fs/list-dir directory)
        directories (sort (filter fs/directory? files))
        categories (map make-category directories)]
    categories))

(defn exec []
  (let [front-page-categories (get-categories "resources/public/categories")]
    (println front-page-categories)
    (front-page/show {:categories front-page-categories})))
