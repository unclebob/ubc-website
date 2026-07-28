(ns ubc-website.views.home
  (:use [hiccup core page])
  (:require
    [ubc-website.presenters.util :refer [add-hiccup]]
    [ubc-website.views.page-utils :refer [page-template]]))

(def books
  [{:title "Clean Code, 2nd ed."
    :isbn "9780135398579"
    :url "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0135398576"}
   {:title "Clean Architecture"
    :isbn "9780134494166"
    :url "https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164"}
   {:title "Functional Design"
    :isbn "9780138176396"
    :url "https://www.amazon.com/Functional-Design-Principles-Patterns-Practices/dp/0138176396"}
   {:title "We, Programmers"
    :isbn "9780135344262"
    :url "https://www.amazon.com/We-Programmers-Chronicle-Coders-Robert/dp/0135344263"}
   {:title "Clean Agile"
    :isbn "9780135781869"
    :url "https://www.amazon.com/Clean-Agile-Basics-Robert-Martin/dp/0135781868"}
   {:title "Clean Craftsmanship"
    :isbn "9780136915713"
    :url "https://www.amazon.com/Clean-Craftsmanship-Disciplines-Standards-Ethics/dp/013691571X"}
   {:title "The Clean Coder"
    :isbn "9780137081073"
    :url "https://www.amazon.com/Clean-Coder-Conduct-Professional-Programmers/dp/0137081073"}
   {:title "Agile Software Development: Principles, Patterns, and Practices"
    :isbn "9780135974445"
    :url "https://www.amazon.com/Software-Development-Principles-Patterns-Practices/dp/0135974445"}])

(defn cover-url [isbn]
  (str "https://www.informit.com/ShowCover.aspx?isbn=" isbn "&type=f"))

(defn format-book [{:keys [title isbn url]}]
  [:a.book-palette-link {:href url}
   [:img.book-cover {:src (cover-url isbn) :alt title}]])

(defn show []
  (page-template
    (add-hiccup [:div#home-page]
                [[:div#book-palette
                  (map format-book books)]])
    {:canonical-home true}))
