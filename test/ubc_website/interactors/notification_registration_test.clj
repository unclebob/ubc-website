(ns ubc-website.interactors.notification-registration-test
  (:require [clojure.test :refer [use-fixtures
                                  deftest
                                  testing
                                  is]]
            [ubc-website.interactors.notification-registration :as r]))

(deftest validation-and-redirection
  (testing "validate-registration succeeds"
    (is (= [] (r/validate-registration "name" "email"))))

  (testing "validate-registration bad name"
    (doseq [name [nil "" " "]]
      (let [errors (r/validate-registration name "email")]
        (is (= 1 (count errors))))))

  (testing "validate-registration bad email"
    (doseq [email [nil "" " "]]
      (let [errors (r/validate-registration "name" email)]
        (is (= 1 (count errors))))))

  (testing "validation-registration bad name and email"
    (let [errors (r/validate-registration "" "")]
      (is (= 2 (count errors)))))

  (testing "redirect-arguments all valid"
    (let [args (r/redirect-arguments "name" "email")]
      (is (= args "?name=name?email=email"))))

  (testing "redirect-arguments bad name"
    (let [args (r/redirect-arguments "" "email")]
          (is (= args "?email=email"))))

  (testing "redirect-arguments bad email"
    (let [args (r/redirect-arguments "name" "")]
          (is (= args "?name=name"))))

  (testing "redirect-arguments bad name and email"
    (let [args (r/redirect-arguments "" "")]
          (is (= args ""))))

  )
