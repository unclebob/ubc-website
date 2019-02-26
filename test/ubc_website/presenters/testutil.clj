(ns ubc-website.presenters.testutil
  (:require [clojure.test :refer :all]))

(defn all-vectors? [hiccup]
  (if (not (vector? hiccup))
    false
    (loop [vector hiccup]
      (if (empty? vector)
        true
        (let [x (first vector)]
          (cond
            (vector? x) (recur x)
            (seq? x) false
            :else (recur (rest vector))))))))

(deftest test-all-vectors
  (testing "empty vector"
    (is (all-vectors? [])))

  (testing "empty list"
    (is (not (all-vectors? '()))))

  (testing "simple primitive"
    (is (all-vectors? [:x])))

  (testing "nested vectors"
    (is (all-vectors? [[]])))

  (testing "nested vectors with primitives"
    (is (all-vectors? [:x [:y :z]])))

  (testing "nested list in vectors"
    (is (not (all-vectors? [:x [:y '()]]))))

  )