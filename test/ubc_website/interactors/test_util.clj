(ns ubc-website.interactors.test-util
  (:require [me.raynes.fs :as fs]))

(def directory "FrontPageInteractor-Test")

(defn clear-directory []
  (fs/delete-dir directory)
  (fs/mkdir directory)
  )