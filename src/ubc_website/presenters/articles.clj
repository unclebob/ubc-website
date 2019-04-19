(ns ubc-website.presenters.articles
  (:require
    [ubc-website.presenters.util :refer [markdown]]
    [clj-time.format :as t-fmt]))

(def article-date-presenter (t-fmt/formatter "d MMM, yyyy"))

(defn present-article-date [date]
  (t-fmt/unparse article-date-presenter (t-fmt/parse date)))

(defn present-article [article]
  (update article :date present-article-date))

(defn present-articles [articles]
  (map present-article articles))



