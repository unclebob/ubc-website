(ns ubc-website.presenters.util
  (:require
    [markdown-to-hiccup.core :as m]))

(defn add-hiccup [body part]
  (-> body (concat part) vec))

(defn markdown [s]
  (m/component (m/md->hiccup s)))