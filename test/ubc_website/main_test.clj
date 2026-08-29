(ns ubc-website.main-test
  (:require [clojure.test :refer [deftest testing is]]
            [ring.mock.request :as mock]
            [ubc-website.routes :refer [app]]))

(deftest test-app
  (testing "main route"
    (let [response ((app) (mock/request :get "/"))]
      (is (= (:status response) 200))
      (is (.contains (:body response) "width=device-width, initial-scale=1"))
      (is (.contains (:body response) "/css/style.css?v=20260829-1"))
      (is (.contains (:body response) "Clean Code, 2nd ed."))
      (is (.contains (:body response) "Agile Software Development: Principles, Patterns, and Practices"))
      (is (.contains (:body response) "Morning Bathrobe Rants"))
      (is (.contains (:body response) "/images/morning-bathrobe-rant.jpg"))
      (is (.contains (:body response) "2026-07-26 -- 20X"))
      (is (.contains (:body response) "2026-05-06 -- Disengage from the Syntax"))
      (is (.contains (:body response) "2025-07-21 -- Casey Muratori's Talk at the Better Software Conference"))
      (is (.contains (:body response) "2025-05-16 -- Vibe Coding"))
      (is (.contains (:body response) "2025-05-01 -- ORMs"))
      (is (.contains (:body response) "2025-04-30 -- SQL"))
      (is (not (.contains (:body response) "Latest on X")))))

  (testing "recommended books route includes amazon links and cover thumbnails"
    (let [response ((app) (mock/request :get "/books"))
          body (:body response)]
      (is (= (:status response) 200))
      (is (.contains body "/css/style.css?v=20260829-1"))
      (is (.contains body "book-title-bar"))
      (is (.contains body "book-thumbnail"))
      (is (.contains body "Extreme Programming Explained (1st ed.)"))
      (is (.contains body "https://www.amazon.com/Extreme-Programming-Explained-Embrace-Change/dp/0201616416"))
      (is (.contains body "Object Oriented Software Construction"))
      (is (.contains body "https://www.amazon.com/Object-Oriented-Software-Construction-Prentice-Hall-International/dp/0136290493"))
      (is (.contains body "Tidy First?"))
      (is (.contains body "https://www.amazon.com/Tidy-First-Personal-Exercise-Empirical/dp/1098151240"))
      (is (.contains body "Structure and Interpretation of Computer Programs (SICP)"))
      (is (.contains body "https://www.amazon.com/Structure-Interpretation-Computer-Programs-Engineering/dp/0262011530"))
      (is (.contains body "The Annotated Turing"))
      (is (.contains body "https://www.amazon.com/Annotated-Turing-Through-Historic-Computability/dp/0470229055"))
      (is (.contains body "A Philosophy of Software Design"))
      (is (.contains body "https://www.amazon.com/Philosophy-Software-Design-2nd/dp/173210221X"))
      (is (.contains body "https://images-na.ssl-images-amazon.com/images/P/173210221X.01._SX200_.jpg"))))

  (testing "products route shows front page"
    (let [response ((app) (mock/request :get "/products"))]
      (is (= (:status response) 200))
      (is (.contains (:body response) "Clean Code, 2nd ed."))))

  (testing "missile command route"
    (let [response ((app) (mock/request :get "/missile-command"))]
      (is (= (:status response) 200))
      (is (.contains (:body response) "Missile Command"))
      (is (.contains (:body response) "/missile-command/js/main.js"))))

  (testing "missile command javascript route"
    (let [response ((app) (mock/request :get "/missile-command/js/main.js"))]
      (is (= (:status response) 200))
      (is (= (get-in response [:headers "Content-Type"])
             "application/javascript"))
      (is (.contains (:body response) "missile_command.browser.main.run"))))

  (testing "missile command sound route"
    (let [response ((app) (mock/request :get "/sounds/launch.wav"))]
      (is (= (:status response) 200))
      (is (pos? (.length ^java.io.File (:body response))))))

  (testing "resume route"
    (let [response ((app) (mock/request :get "/files/about.md"))]
      (is (= (:status response) 200))
      (is (.contains (:body response) "markdown-page"))
      (is (.contains (:body response) "/css/style.css?v=20260829-2"))
      (is (.contains (:body response) "Robert C. Martin"))
      (is (.contains (:body response) "Agile Manifesto"))
      (is (.contains (:body response) "Outboard Marine Corporation"))
      (is (.contains (:body response) "IBM System/7 shop-floor control"))
      (is (.contains (:body response) "Craft Dispatch System"))
      (is (.contains (:body response) "Teradyne Central/Telecommunications Division"))
      (is (.contains (:body response) "4-TEL distributed telephone testing"))
      (is (.contains (:body response) "8085 COLT migration"))
      (is (.contains (:body response) "EEPROM/ROM vectoring"))
      (is (.contains (:body response) "Clean Coders Inc."))))

  (testing "morning bathrobe rant image route"
    (let [response ((app) (mock/request :get "/images/morning-bathrobe-rant.jpg"))]
      (is (= (:status response) 200))
      (is (pos? (.length ^java.io.File (:body response))))))

  (testing "not-found route"
    (let [response ((app) (mock/request :get "/invalid"))]
      (is (= (:status response) 404)))))
