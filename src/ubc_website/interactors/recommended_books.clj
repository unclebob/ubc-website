(ns ubc-website.interactors.recommended-books
  (:require
    [ubc-website.views.recommended-books :as recommended-books]
    [ubc-website.interactors.sidebar :refer [get-events]]
    [me.raynes.fs :as fs]
    [clj-time.core :as t]))

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
        events (get-events "resources/public/events" today (t/months 3))
        books (get-books "resources/public/books")
        front-page-data {:events events
                         :books books}]
    (recommended-books/show front-page-data)))
