(ns ubc-website.views.front-page
  (:use [hiccup core page])
    (:require [ubc-website.presenters.front-page :as p]))

(defn show [{:keys [categories] :as front-page-data}]
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
     (vec (concat [:div#products] (p/present-product-categories categories)))
     [:div#sidebar "sidebar"]
     ]))