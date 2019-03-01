(ns ubc-website.presenters.front-page
  (:require
    [ubc-website.presenters.util :refer [markdown]]
    [clj-time.format :as t-fmt]))

(defn present-product [product]
  [:div.product
   [:p.product-name (:product-name product)]
   [:div.product-description (markdown (:product-description product))]])

(defn present-product-category [category]
  (let [product-presentations (map present-product (:products category))]
    (vec
      (concat [:div.product-category
               [:p.product-category (:product-category category)]]
              (vec product-presentations)))))

(defn present-product-categories [categories]
  (let [presented-categories (map present-product-category categories)]
    (vec presented-categories)))

(def event-date-formatter (t-fmt/formatter "d MMM, yyyy (E)"))

(defn format-event-date [date]
  (t-fmt/unparse event-date-formatter date))

(defn present-event [event]
  [:div.event
   [:p.event (format-event-date (:date event))]
   [:div.event-description (markdown (:description event))]])

(defn present-events [events]
  (vec (map present-event events)))
