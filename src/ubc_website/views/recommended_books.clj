(ns ubc-website.views.recommended-books
  (:use [hiccup core page])
  (:require
    [ubc-website.presenters.util :refer [add-hiccup]]
    [ubc-website.views.page-utils :refer [page-template]]
    [ubc-website.presenters.recommended-books :as p]))

(defn format-book [book]
  (let [presented-book (p/present-book book)]
    [:div.book
     [:p.book-title (:title presented-book)]
     [:p.book-author (:author presented-book)]
     [:p.book-publication (str (:publisher presented-book) ", " (:date presented-book))]
     [:hr]
     [:div.book-description (:description presented-book)]]))

(defn format-books [books]
  (vec (map format-book books)))

(defn show [page-data]
  (let [books (:books page-data)]
    (page-template
      (add-hiccup [:div#products]
                  (format-books books))
      page-data)))

