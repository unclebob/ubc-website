(ns ubc-website.test-runner
  (:require [clojure.test :as test]
            [ubc-website.interactors.notification-registration-test]
            [ubc-website.interactors.product-page-test]
            [ubc-website.interactors.recommended-books-test]
            [ubc-website.interactors.sidebar-test]
            [ubc-website.main-test]
            [ubc-website.presenters.testutil]))

(def test-namespaces
  ['ubc-website.interactors.notification-registration-test
   'ubc-website.interactors.product-page-test
   'ubc-website.interactors.recommended-books-test
   'ubc-website.interactors.sidebar-test
   'ubc-website.main-test
   'ubc-website.presenters.testutil])

(defn -main []
  (let [{:keys [fail error]} (apply test/run-tests test-namespaces)]
    (System/exit (if (zero? (+ fail error)) 0 1))))
