(ns ubc-website.views.page-utils
  (:use [hiccup core page])
  (:require
    [ubc-website.presenters.util :refer [add-hiccup]]))

;link from publish.twitter.com
(def embedded-twitter-feed "<a class=\"twitter-timeline\" data-width=\"400\" data-tweet-limit=\"5\" data-theme=\"light\" href=\"https://twitter.com/unclebobmartin?ref_src=twsrc%5Etfw\">Posts by unclebobmartin</a> <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>")

(def canonical-home-script
  "if (/^\\/products\\/?$/.test(window.location.pathname)) { window.history.replaceState(null, '', '/'); }")

(defn page-template [content {:keys [message canonical-home]}]
  (html5
    [:head
     [:meta {:charset "UTF-8"}]
     [:title "UBC"]
     (when canonical-home
       [:script canonical-home-script])
     (include-css "/css/style.css")]
    [:body
     [:div#header
      [:a {:href "/"}
       [:img#logo {:src "/images/cleancodelogo.png"
                   :align "left"}]]
      [:a {:href "/files/about.md"}
       [:img#caricature {:src "/images/BobCaricature.jpg"
                         :align "right"}]]
      [:p#ubc "Uncle Bob Martin"]
      [:p#ubc-subtitle "Programmer, Speaker, Teacher"]]
     [:div#tabs
      [:a.tab {:href "/files/contact.md"} "Contact"]
      [:a.tab {:href "books"} "Recommended Books"]
      [:a.tab {:href "http://blog.cleancoder.com"} "Blogs"]
      [:a.tab {:href "https://blog.cleancoder.com/craftsman-series"} "Craftsman-series"]
      [:a.tab {:href "http://butunclebob.com"} "Ancient Blogs"]
      [:a.tab {:href "https://sites.google.com/site/unclebobconsultingllc/uncle-bob-consulting-llc/articles"} "Old Articles"]
      [:a.tab {:href "/a-little-clojure"} "A Little Clojure"]
      [:a.tab {:href "/space-war"} "Space War!"]


      ]
     (when-not (nil? message) [:div#message message])
     [:div#content-area
     content]
     [:div#sidebar
      (add-hiccup [:p.sidebar-title "Latest on X"]
                  embedded-twitter-feed)

      ]]))
