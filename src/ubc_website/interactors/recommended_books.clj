(ns ubc-website.interactors.recommended-books
  (:require
    [ubc-website.views.recommended-books :as recommended-books]
    [ubc-website.interactors.sidebar :refer [get-sidebar-data]]
    [me.raynes.fs :as fs]))

(defn book-file->book [book-file]
  (let [book-string (slurp book-file)
        book (read-string book-string)]
    book))

(defn get-books [directory]
  (let [book-files (sort (fs/list-dir directory))
        books (map book-file->book book-files)]
    books))

(defn exec []
  (let [sidebar-data (get-sidebar-data)
        books (get-books "resources/public/books")
        front-page-data (assoc sidebar-data :books books)]
    (recommended-books/show front-page-data)))
