(ns ubc-website.interactors.front-page
  (:require
    [ubc-website.views.front-page :as front-page]))

(defn exec []
  (front-page/show))
