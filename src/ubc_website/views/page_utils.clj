(ns ubc-website.views.page-utils
  (:use [hiccup core page])
  (:require
    [ubc-website.presenters.util :refer [add-hiccup]]))

(def canonical-home-script
  "if (/^\\/products\\/?$/.test(window.location.pathname)) { window.history.replaceState(null, '', '/'); }")

(def x-widget-loader
  "!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],t=window.twttr||{};if(d.getElementById(id))return t;js=d.createElement(s);js.id=id;js.src='https://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);t._e=[];t.ready=function(f){t._e.push(f);};return window.twttr=t;}(document,'script','twitter-wjs');")

(defn x-feed []
  [:div.x-feed
   [:p.sidebar-title "Latest on X"]
   [:a.twitter-timeline {:data-width "400"
                         :data-height "600"
                         :data-tweet-limit "5"
                         :data-theme "light"
                         :href "https://twitter.com/unclebobmartin?ref_src=twsrc%5Etfw"}
    "Posts by @unclebobmartin"]
   [:script x-widget-loader]])

(defn page-template [content {:keys [message canonical-home]}]
  (html5
    [:head
     [:meta {:charset "UTF-8"}]
     [:title "UBC"]
     (when canonical-home
       [:script canonical-home-script])
     (include-css "/css/style.css?v=20260728-6")]
    [:body
     [:div#header
      [:a {:href "/"}
       [:img#logo {:src "/images/cleancodelogo.png"
                   :align "left"}]]
      [:a {:href "/files/about.md"}
       [:img#caricature {:src "/images/BobCaricature.jpg"
                         :align "right"}]]
      [:p#ubc "Uncle Bob Martin"]
      [:p#ubc-subtitle "Programmer, Speaker, Teacher, Retired (mostly)"]]
     [:div#tabs
      [:a.tab {:href "/files/contact.md"} "Contact"]
      [:a.tab {:href "books"} "Recommended Books"]
      [:a.tab {:href "http://blog.cleancoder.com"} "Blogs"]
      [:a.tab {:href "https://blog.cleancoder.com/craftsman-series"} "Craftsman-series"]
      [:a.tab {:href "http://butunclebob.com"} "Ancient Blogs"]
      [:a.tab {:href "https://sites.google.com/site/unclebobconsultingllc/uncle-bob-consulting-llc/articles"} "Old Articles"]
      [:a.tab {:href "/a-little-clojure"} "A Little Clojure"]
      [:span.tab-break]
      [:a.tab {:href "/space-war"} "Space War!"]


      ]
     (when-not (nil? message) [:div#message message])
     [:div#content-area
     content]
     [:div#sidebar
      (x-feed)

      ]]))
