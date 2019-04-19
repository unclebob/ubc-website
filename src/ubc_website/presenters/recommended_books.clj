(ns ubc-website.presenters.recommended-books
  (:require
    [ubc-website.presenters.util :refer [markdown]]))

(defn present-book [book]
  (update book :description markdown))


