(ns ubc-website.presenters.product-page
  (:require
    [ubc-website.presenters.util :refer [markdown]]
    [clj-time.format :as t-fmt]))

(defn present-product [product]
  (update product :product-description markdown))

(def event-date-formatter (t-fmt/formatter "d MMM, yyyy (E)"))

(defn format-event-date [date]
  (t-fmt/unparse event-date-formatter date))

(defn present-event [event]
  [:div.event
   [:p.event (format-event-date (:date event))]
   [:div.event-description (markdown (:description event))]])

(defn present-events [events]
  (vec (map present-event events)))



