(ns ubc-website.views.page-utils
  (:use [hiccup core page])
  (:require
    [ubc-website.presenters.util :refer [add-hiccup]]))

(def canonical-home-script
  "if (/^\\/products\\/?$/.test(window.location.pathname)) { window.history.replaceState(null, '', '/'); }")

(defn morning-bathrobe-rant []
  [:div.morning-bathrobe-rant
   [:p.sidebar-title "Morning Bathrobe Rants"]
   [:img.morning-bathrobe-rant-image
    {:src "/images/morning-bathrobe-rant.jpg"
     :alt "Morning Bathrobe Rants"}]
   [:ul.morning-bathrobe-rant-links
    [:li [:a {:href "https://x.com/unclebobmartin/status/2081334541667410312"} "2026-07-26 20X"]]
    [:li [:a {:href "https://x.com/unclebobmartin/status/2057064795241676838"} "2026-05-20 tubes on pegs"]]
    [:li [:a {:href "https://x.com/unclebobmartin/status/2046578685080220074"} "2026-04-21 Quicksilver"]]
    [:li [:a {:href "https://x.com/unclebobmartin/status/2046206145597972849"} "2026-04-20 AI out-codes you; deal with it"]]
    [:li [:a {:href "https://x.com/unclebobmartin/status/1999825947726340531"} "2025-12-13 Truly Bizarre Failure Modes"]]
    [:li [:a {:href "https://x.com/unclebobmartin/status/1982432101665484900"} "2025-10-26 SOLID up front"]]
    [:li [:a {:href "https://x.com/unclebobmartin/status/1930572242099769507"} "2025-06-05 agile"]]
    [:li [:a {:href "https://x.com/unclebobmartin/status/1929854761626436092"} "2025-06-03 testing discipline"]]
    [:li [:a {:href "https://x.com/unclebobmartin/status/1921895270322786438"} "2025-05-12 Micro Services"]]
    [:li [:a {:href "https://x.com/unclebobmartin/status/1920794352214741335"} "2025-05-09 Write your damned tests"]]
    [:li [:a {:href "https://x.com/unclebobmartin/status/1920433782563254776"} "2025-05-08 Types"]]
    [:li [:a {:href "https://x.com/unclebobmartin/status/1918276572760486249"} "2025-05-02 OOP"]]
    [:li [:a {:href "https://x.com/unclebobmartin/status/1917558113177108537"} "2025-04-30 about SQL"]]]])

(defn page-template [content {:keys [message canonical-home]}]
  (html5
    [:head
     [:meta {:charset "UTF-8"}]
     [:title "UBC"]
     (when canonical-home
       [:script canonical-home-script])
     (include-css "/css/style.css?v=20260729-3")]
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
