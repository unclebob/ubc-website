(ns ubc-website.presenters.recommended-books
  (:require
    [ubc-website.presenters.util :refer [markdown]]))

(defn informit-cover [isbn]
  (str "https://www.informit.com/ShowCover.aspx?isbn=" isbn "&type=f"))

(defn present-book [book]
  (let [cover (or (:cover book)
                  (when-let [isbn (:isbn book)]
                    (informit-cover isbn)))]
    (-> book
        (update :description markdown)
        (assoc :cover cover))))
