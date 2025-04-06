(ns ubc-website.views.page-utils
  (:use [hiccup core page])
  (:require
    [ubc-website.presenters.events :as events]
    [ubc-website.presenters.articles :as articles]

    [ubc-website.presenters.util :refer [add-hiccup]]))

(defn format-event [event]
  (let [presentation (events/present-event event)]
    [:div.event
     [:p.event (:date presentation)]
     [:div.event-description (:description presentation)]]))

(defn format-events [events]
  (vec (map format-event events)))

(defn format-article [{:keys [link title date]}]
  [:div.article
   [:a.article-title {:href link} title]
   [:p.article-date date]])

(defn format-articles [articles]
  (map format-article (articles/present-articles articles)))

;link from publish.twitter.com
(def embedded-twitter-feed "<a class=\"twitter-timeline\" data-width=\"400\" data-height=\"400\" data-theme=\"light\" href=\"https://twitter.com/unclebobmartin?ref_src=twsrc%5Etfw\">Tweets by unclebobmartin</a> <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>")

(defn page-template [content {:keys [message events articles]}]
  (html5
    [:head
     [:meta {:charset "UTF-8"}]
     [:title "UBC"]
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
      [:a.tab {:href "products"} "Classes & Talks"]
      [:a.tab {:href "user-groups"} "Invite Me!"]
      [:a.tab {:href "register"} "Subscribe"]
      [:a.tab {:href "/files/contact.md"} "Contact"]
      [:br] [:br]
      [:a.tab {:href "books"} "Recommended Books"]
      [:a.tab {:href "http://blog.cleancoder.com"} "Blogs"]
      [:a.tab {:href "http://butunclebob.com"} "Ancient Blogs"]
      [:a.tab {:href "https://sites.google.com/site/unclebobconsultingllc/uncle-bob-consulting-llc/articles"} "Old Articles"]
      [:a.tab {:href "https://sites.google.com/site/unclebobconsultingllc/uncle-bob-consulting-llc/clean-coder-gear"} "Clean Code Gear"]
      [:a.tab {:href "/a-little-clojure"} "A Little Clojure"]
      [:a.tab {:href "http://github.com/unclebob/spacewar"} "Space War!" ]


      ]
     (when-not (nil? message) [:div#message message])
     [:div#content-area
     content]
     [:div#sidebar
      (add-hiccup [:p.sidebar-title "Upcoming Events"]
                  (format-events events))
      (add-hiccup [:p.sidebar-title "Uncle Bob's Tweets"]
                  embedded-twitter-feed)
      (add-hiccup [:p.sidebar-title "Recent Articles"]
                  (format-articles articles))

      ]]))