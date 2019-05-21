(ns ubc-website.interactors.product-page
  (:require
    [ubc-website.views.product-page :as product-page]
    [ubc-website.interactors.sidebar :refer [get-sidebar-data]]
    [ring.util.response :refer [response]]
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

(defn exec [session]
  (let [categories (get-categories "resources/public/categories")
        sidebar-data (get-sidebar-data)
        front-page-data (assoc sidebar-data :categories categories
                                            :message (:message session))]
    (-> (response (product-page/show front-page-data))
        (assoc-in [:session :message] nil))))
