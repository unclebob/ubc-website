(ns ubc-website.interactors.recommended-books-test
  (:require [clojure.test :refer [use-fixtures
                                  deftest
                                  testing
                                  is]]
            [ubc-website.interactors.recommended-books :as books]
            [ubc-website.interactors.test-util :refer [directory clear-directory]]
            ))

(defn create-book [file-name book-data]
  (spit (str directory "/" file-name) book-data)
  )

(deftest testGetBooks
  (testing "no books"
    (clear-directory)
    (let [books (books/get-books directory)]
      (is (= [] books))))

  (testing "one book"
    (clear-directory)
    (let [book {:title "Title"
                :author "Author"
                :publisher "Publisher"
                :date "Date"
                :isbn "9780201633610"
                :url "https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612"
                :cover "https://www.informit.com/ShowCover.aspx?isbn=9780201633610&type=f"
                :description "Description"}]
      (create-book "b1" book)
      (is (= [book] (books/get-books directory)))))

  (testing "production books all have amazon urls and covers"
    (let [books (books/get-books "resources/public/books")]
      (is (= 16 (count books)))
      (doseq [book books]
        (is (string? (:url book)))
        (is (.startsWith (:url book) "https://www.amazon.com/"))
        (is (not (.contains (:url book) "tag=")))
        (is (string? (:cover book)))
        (is (pos? (count (:cover book)))))))

  )
