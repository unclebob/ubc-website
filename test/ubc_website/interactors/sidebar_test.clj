(ns ubc-website.interactors.sidebar-test
  (:require [clojure.test :refer [use-fixtures
                                  deftest
                                  testing
                                  is]]
            [ubc-website.interactors.sidebar :as sidebar]
            [ubc-website.interactors.test-util :refer [directory clear-directory]]
            [clj-time.core :as t]
            [clj-time.format :as t-fmt]
            ))

(def today (t/date-time 2019 3 1))
(def yesterday (t/minus today (t/days 1)))
(def future-delta (t/days 3))

(defn create-event [date suffix description]
  (let [time-format (t-fmt/formatter "yyyyMMdd")
        event-name (str (t-fmt/unparse time-format date) "_" suffix)]
    (spit (str directory "/" event-name) description)
    )
  )

(deftest testGetEvents
  (testing "no events"
    (clear-directory)
    (let [events (sidebar/get-events directory today future-delta)]
      (is (= events [])))
    )

  (testing "one current event"
    (clear-directory)
    (create-event today "suffix" "description")
    (let [events (sidebar/get-events directory today future-delta)]
      (is (= events [{:date today :description "description"}]))))

  (testing "don't get past events"
    (clear-directory)
    (create-event yesterday "y-suffix" "y-description")
    (create-event today "t-suffix" "t-description")
    (let [events (sidebar/get-events directory today future-delta)]
      (is (= events [{:date today :description "t-description"}]))))

  (testing "don't get events too far in future"
    (clear-directory)
    (create-event today "t-suffix" "t-description")
    (create-event (t/plus today future-delta) "f-suffix" "f-description")
    (let [events (sidebar/get-events directory today future-delta)]
      (is (= events [{:date today :description "t-description"}]))))
  )

(deftest articles
  (testing "no articles"
    (is (= [] (sidebar/parse-feed "<feed><title>title</title></feed>"))))

  (testing "one article"
    (is (= [{:title "title" :link "link" :date "date"}]
           (sidebar/parse-feed
             "<feed>
               <Title>title</Title>
               <entry>
               <title><![CDATA[title]]></title>
               <id>link</id>
               <updated>date</updated>
               </entry>
               </feed>"))))
  )