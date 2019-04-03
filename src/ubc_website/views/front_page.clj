(ns ubc-website.views.front-page
  (:use [hiccup core page])
  (:require
    [ubc-website.presenters.front-page :as p]
    [ubc-website.presenters.util :refer [add-hiccup]]))

;link from publish.twitter.com
(def embedded-twitter-feed "<a class=\"twitter-timeline\" data-width=\"400\" data-height=\"400\" data-theme=\"light\" href=\"https://twitter.com/unclebobmartin?ref_src=twsrc%5Etfw\">Tweets by unclebobmartin</a> <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>")

(defn format-book [book-ref]
  [[:div.book
   [:p.book "Book"]]])

(defn format-books [book-refs]
  (vec (map format-book book-refs)))

(defn show [{:keys [categories events books]}]
  (html5
    [:head
     [:title "UBC"]
     (include-css "/css/style.css")]
    [:body
     [:div#header
      [:img#logo {:src "/images/cleancodelogo.png"
                  :align "left"}]
      [:a {:href "/files/about.md"}
       [:img#caricature {:src "/images/BobCaricature.jpg"
                        :align "right"}]]
      [:p#ubc "Uncle Bob Martin"]
      [:p#ubc-subtitle "Programmer, Speaker, Teacher"]]
     (add-hiccup [:div#products] (p/present-product-categories categories))
     [:div#sidebar
     (add-hiccup [:p.sidebar-title "Up Comming Events"]
                 (p/present-events events))
     (add-hiccup [:p.sidebar-title "Uncle Bob's Tweets"]
                 embedded-twitter-feed)
     (add-hiccup [:p.sidebar-title "Recommended Books"]
                 (format-books books))

     ]]))