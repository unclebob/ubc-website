(ns ubc-website.views.page-utils
  (:use [hiccup core page])
  (:require
    [ubc-website.presenters.util :refer [add-hiccup]]))

(def canonical-home-script
  "if (/^\\/products\\/?$/.test(window.location.pathname)) { window.history.replaceState(null, '', '/'); }")

(defn morning-bathrobe-rant []
  [:div.morning-bathrobe-rant
   [:p.sidebar-title "Morning Bathrobe Rant"]
   [:img.morning-bathrobe-rant-image
    {:src "/images/morning-bathrobe-rant.jpg"
     :alt "Morning Bathrobe Rant"}]])

(defn page-template [content {:keys [message canonical-home]}]
  (html5
    [:head
     [:meta {:charset "UTF-8"}]
     [:title "UBC"]
     (when canonical-home
       [:script canonical-home-script])
     (include-css "/css/style.css?v=20260729-1")]
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
      [:a.tab {:href "/missile-command"} "Missile Command!"]


      ]
     (when-not (nil? message) [:div#message message])
     [:div#content-area
     content]
     [:div#sidebar
      (morning-bathrobe-rant)

      ]]))
