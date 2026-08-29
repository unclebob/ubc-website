(ns ubc-website.views.recommended-books
  (:use [hiccup core page])
  (:require
    [ubc-website.presenters.util :refer [add-hiccup]]
    [ubc-website.views.page-utils :refer [page-template]]
    [ubc-website.presenters.recommended-books :as p]))

(defn format-book [book]
  (let [{:keys [title author publisher date description url cover]} (p/present-book book)
        title-el (if url
                   [:a.book-title-link {:href url} title]
                   title)
        cover-el (when cover
                   (let [thumb [:img.book-thumbnail {:src cover :alt title}]]
                     (if url
                       [:a.book-cover-link {:href url} thumb]
                       thumb)))]
    [:div.book
     [:div.book-title-bar
      [:p.book-title title-el]
      cover-el]
     [:p.book-author author]
     [:p.book-publication (str publisher ", " date)]
     [:hr]
     [:div.book-description description]]))

(defn format-books [books]
  (vec (map format-book books)))

(defn show [page-data]
  (let [books (:books page-data)]
    (page-template
      (add-hiccup [:div#products]
                  (format-books books))
      page-data)))
