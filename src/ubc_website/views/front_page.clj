(ns ubc-website.views.front-page
  (:use [hiccup core page]))

(defn show []
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
     [:div#products "products"]
     [:div#sidebar "sidebar"]
     ]))