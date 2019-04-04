(ns ubc-website.interactors.front-page
  (:require
    [ubc-website.views.front-page :as front-page]
    [me.raynes.fs :as fs]
    [clj-time.core :as t]
    [clj-time.format :as t-fmt]))

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

(def event-formatter (t-fmt/formatter "yyyyMMdd"))

(defn event-file->date [event-file]
  (let [event-name (first (clojure.string/split (fs/name event-file) #"_"))
        date (t-fmt/parse event-formatter event-name)]
    date))

(defn event-file->event [event-file]
  (let [event-description (slurp event-file)
        date (event-file->date event-file)]
    {:date date :description event-description})
  )

(defn unexpired? [today event-file]
  (let [date (event-file->date event-file)]
    (or (t/equal? date today)
        (t/after? date today))))

(defn current? [cutoff-date event-file]
  (let [date (event-file->date event-file)]
    (t/before? date cutoff-date)))

(defn get-events [directory date cutoff]
  (let [event-files (fs/list-dir directory)
        unexpired-files (filter (partial unexpired? date) event-files)
        cutoff-date (t/plus date cutoff)
        current-files (filter (partial current? cutoff-date) unexpired-files)
        events (map event-file->event current-files)]
    events))

(defn book-file->book [book-file]
  (let [book-string (slurp book-file)
        book (read-string book-string)]
    book))


(defn get-books [directory]
  (let [book-files (sort (fs/list-dir directory))
        books (map book-file->book book-files)]
    books))

(defn exec []
  (let [today (t/today-at-midnight)
        categories (get-categories "resources/public/categories")
        events (get-events "resources/public/events" today (t/months 3))
        books (get-books "resources/public/books")
        front-page-data {:categories categories
                         :events events
                         :books books}]
    (front-page/show front-page-data)))
