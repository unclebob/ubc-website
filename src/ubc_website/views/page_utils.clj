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
    [:li [:a {:href "https://x.com/unclebobmartin/status/2081334541667410312"} "2026-07-26 -- 20X"]]
    [:li [:a {:href "https://x.com/unclebobmartin/status/2057064795241676838"} "2026-05-20 -- Tubes on Pegs"]]
    [:li [:a {:href "https://x.com/unclebobmartin/status/2052002463452958899"} "2026-05-06 -- Disengage from the Syntax"]]
    [:li [:a {:href "https://x.com/unclebobmartin/status/2046578685080220074"} "2026-04-21 -- Quicksilver"]]
    [:li [:a {:href "https://x.com/unclebobmartin/status/2046206145597972849"} "2026-04-20 -- AI Out-Codes You; Deal with It"]]
    [:li [:a {:href "https://x.com/unclebobmartin/status/1999825947726340531"} "2025-12-13 -- Truly Bizarre Failure Modes"]]
    [:li [:a {:href "https://x.com/unclebobmartin/status/1982432101665484900"} "2025-10-26 -- SOLID Up Front"]]
    [:li [:a {:href "https://x.com/unclebobmartin/status/1947270222005879240"} "2025-07-21 -- Casey Muratori's Talk at the Better Software Conference"]]
    [:li [:a {:href "https://x.com/unclebobmartin/status/1930572242099769507"} "2025-06-05 -- Agile"]]
    [:li [:a {:href "https://x.com/unclebobmartin/status/1929854761626436092"} "2025-06-03 -- Testing Discipline"]]
    [:li [:a {:href "https://x.com/unclebobmartin/status/1923334334171197549"} "2025-05-16 -- Vibe Coding"]]
    [:li [:a {:href "https://x.com/unclebobmartin/status/1922961635011944714"} "2025-05-15 -- Bad Code"]]
    [:li [:a {:href "https://x.com/unclebobmartin/status/1922611747401216416"} "2025-05-14 -- Code Reviews"]]
    [:li [:a {:href "https://x.com/unclebobmartin/status/1921895270322786438"} "2025-05-12 -- Micro Services"]]
    [:li [:a {:href "https://x.com/unclebobmartin/status/1921175033809961469"} "2025-05-10 -- Design Patterns Will Destroy You as a Programmer"]]
    [:li [:a {:href "https://x.com/unclebobmartin/status/1920794352214741335"} "2025-05-09 -- Write Your Damned Tests"]]
    [:li [:a {:href "https://x.com/unclebobmartin/status/1920433782563254776"} "2025-05-08 -- Types"]]
    [:li [:a {:href "https://x.com/unclebobmartin/status/1919367681339273347"} "2025-05-05 -- Scrum"]]
    [:li [:a {:href "https://x.com/unclebobmartin/status/1918276572760486249"} "2025-05-02 -- OOP"]]
    [:li [:a {:href "https://x.com/unclebobmartin/status/1917912012526702945"} "2025-05-01 -- ORMs"]]
    [:li [:a {:href "https://x.com/unclebobmartin/status/1917558113177108537"} "2025-04-30 -- SQL"]]]])

(defn page-template [content {:keys [message canonical-home]}]
  (html5
    [:head
     [:meta {:charset "UTF-8"}]
     [:meta {:name "viewport"
             :content "width=device-width, initial-scale=1"}]
     [:title "UBC"]
     (when canonical-home
       [:script canonical-home-script])
     (include-css "/css/style.css?v=20260729-7")]
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
