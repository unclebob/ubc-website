(ns ubc-website.views.home
  (:use [hiccup core page])
  (:require
    [ubc-website.presenters.util :refer [add-hiccup]]
    [ubc-website.views.page-utils :refer [page-template]]))

(def books
  [{:title "Clean Code, 2nd ed."
    :url "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0135398576"}
   {:title "Clean Architecture"
    :url "https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164"}
   {:title "Functional Design"
    :url "https://www.amazon.com/Functional-Design-Principles-Patterns-Practices/dp/0138176396"}
   {:title "We, Programmers"
    :url "https://www.amazon.com/We-Programmers-Chronicle-Coders-Robert/dp/0135344263"}
   {:title "Clean Agile"
    :url "https://www.amazon.com/Clean-Agile-Basics-Robert-Martin/dp/0135781868"}
   {:title "The Clean Coder"
    :url "https://www.amazon.com/Clean-Coder-Conduct-Professional-Programmers/dp/0137081073"}
   {:title "Agile Software Development: Principles, Patterns, and Practices"
    :url "https://www.amazon.com/Software-Development-Principles-Patterns-Practices/dp/0135974445"}])

(defn format-book [{:keys [title url]}]
  [:a.book-palette-link {:href url}
   [:span.book-palette-title title]
   [:span.book-palette-source "Amazon"]])

(defn show []
  (page-template
    (add-hiccup [:div#book-palette]
                (map format-book books))
    {}))
