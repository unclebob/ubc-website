(ns ubc-website.views
  (:use [hiccup core page]
        [ubc-website.interactors.products :only [get-products]]
        [ubc-website.interactors.sidebar :only [sidebar]]))

(defn products []
  (html (get-products)))

(defn front-page []
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
     [:div#products (products)]
     [:div#sidebar (sidebar)]
     ]))