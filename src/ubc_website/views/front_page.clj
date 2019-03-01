(ns ubc-website.views.front-page
  (:use [hiccup core page])
  (:require
    [ubc-website.presenters.front-page :as p]
    [ubc-website.presenters.util :refer [add-hiccup]]))

(defn show [{:keys [categories events]}]
  (html5
    [:head
     [:title "UBC"]
     (include-css "/css/style.css")]
    [:body
     [:div#header
      [:img#logo {:src "/images/cleancodelogo.png"
                  :align "left"}]
      [:img#caricature {:src "/images/BobCaricature.jpg"
                        :align "right"}]
      [:p#ubc "Uncle Bob Martin"]
      [:p#ubc-subtitle "Software Speaker and Teacher"]]
     (add-hiccup [:div#products] (p/present-product-categories categories))
     (add-hiccup [:div#sidebar [:p#event-title "Up Comming Events"]]
                 (p/present-events events))
     ]))