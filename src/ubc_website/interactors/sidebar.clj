(ns ubc-website.interactors.sidebar
  (:require
      [me.raynes.fs :as fs]
      [clj-time.core :as t]
      [clj-time.format :as t-fmt]
      [clojure.xml :as xml]))

(def event-formatter (t-fmt/formatter "yyyyMMdd"))

(defn event-file->date [event-file]
  (let [event-name (first (clojure.string/split (fs/name event-file) #"_"))
        date (t-fmt/parse event-formatter event-name)]
    date))

(defn event-file->event [event-file]
  (let [event-description (slurp event-file)
        date (event-file->date event-file)]
    {:date date :description event-description})
  )

(defn unexpired? [today event-file]
  (let [date (event-file->date event-file)]
    (or (t/equal? date today)
        (t/after? date today))))

(defn current? [cutoff-date event-file]
  (let [date (event-file->date event-file)]
    (t/before? date cutoff-date)))

(defn get-events [directory date cutoff]
  (let [event-files (fs/list-dir directory)
        unexpired-files (filter (partial unexpired? date) event-files)
        cutoff-date (t/plus date cutoff)
        current-files (filter (partial current? cutoff-date) unexpired-files)
        events (map event-file->event current-files)]
    events))

(defn get-articles []
  ;[{:link "link" :title "title" :date "date"}]
  (let [atom-xml (slurp "http://blog.cleancoder.com/atom.xml")
        atom-bytes (java.io.ByteArrayInputStream. (.getBytes atom-xml))
        atom (xml/parse atom-bytes)])
  )

(defn get-sidebar-data []
  {:events (get-events "resources/public/events"
                       (t/today-at-midnight)
                       (t/months 3))
   :articles (get-articles)})