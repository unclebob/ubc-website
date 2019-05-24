(ns ubc-website.views.notifications
  (:use [hiccup core page])
  (:require
    [ubc-website.presenters.util :refer [add-hiccup markdown]]))


(defn registration-form [name email]
  [:div
   [:div.page-content
    (markdown (slurp "resources/public/files/register.md"))
    ]
   [:div.form
    [:h1.form "Register for Notifications"]
    [:form {:action "postregistration" :method "post"}
     "Name: " [:input.form {:type "text" :name "name" :value name :size "30"}] [:br]
     "Email: " [:input.form {:type "email" :name "email" :value email :size "30"}] [:br]
     [:input.submit {:type "submit" :value "Register"}]]
    ]])