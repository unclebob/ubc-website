(ns ubc-website.interactors.zorch
  (:use [hiccup core page])
  (:require
    [ubc-website.presenters.util :refer [markdown]]))

(declare display-file)

(defn exec [key]
  (cond
    (nil? key)
    (display-file "nilkey")

    (= "" key)
    (display-file "badkey")

    (.exists (clojure.java.io/file (str "resources/zorch/" (.toLowerCase key))))
    (display-file key)

    :else
    (display-file "badkey")
    ))

(defn display-file [file]
  (let [text (slurp (str "resources/zorch/" file))
        content (markdown text)]

    (html5
      [:head
       [:meta {:charset "UTF-8"}]
       [:title "ZORCH!"]
       (include-css "/css/style.css")]
      [:body
       [:div#header
        [:p#ubc "ZORCH"]]
       [:div#content-area
        [:div content]
        ]])
    ))
