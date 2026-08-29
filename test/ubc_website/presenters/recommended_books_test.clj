(ns ubc-website.presenters.recommended-books-test
  (:require [clojure.test :refer [deftest testing is]]
            [ubc-website.presenters.recommended-books :as p]))

(deftest test-informit-cover
  (testing "builds the InformIT cover URL used on the home page"
    (is (= "https://www.informit.com/ShowCover.aspx?isbn=9780201633610&type=f"
           (p/informit-cover "9780201633610")))))

(deftest test-present-book
  (testing "keeps amazon url and explicit cover, and markdowns description"
    (let [presented (p/present-book {:title "Title"
                                     :url "https://www.amazon.com/dp/0201633612"
                                     :cover "https://example.com/cover.jpg"
                                     :description "_italic_"})]
      (is (= "https://www.amazon.com/dp/0201633612" (:url presented)))
      (is (= "https://example.com/cover.jpg" (:cover presented)))
      (is (vector? (:description presented)))))

  (testing "falls back to InformIT cover from isbn when cover is omitted"
    (let [presented (p/present-book {:isbn "9780201633610"
                                     :description "plain"})]
      (is (= (p/informit-cover "9780201633610") (:cover presented))))))
