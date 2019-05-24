(ns ubc-website.views.user-groups
  (:use [hiccup core page])
  (:require
    [ubc-website.presenters.util :refer [add-hiccup markdown]]))

(defn show []
  [:div
   [:div.page-content
    (markdown (slurp "resources/public/files/user-groups.md"))
    ]]
  )
