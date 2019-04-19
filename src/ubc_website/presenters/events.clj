(ns ubc-website.presenters.events
  (:require
    [ubc-website.presenters.util :refer [markdown]]
    [clj-time.format :as t-fmt]))

(def event-date-presenter (t-fmt/formatter "d MMM, yyyy (E)"))

(defn present-event-date [date]
  (t-fmt/unparse event-date-presenter date))

(defn present-event [event]
  {:date (present-event-date (:date event))
   :description (markdown (:description event))})


