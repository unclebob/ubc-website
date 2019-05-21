(ns ubc-website.interactors.notification-registration
  (:require [ring.util.response :refer [redirect response]]
            [clojure.string :refer [trim blank? join]]
            [ubc-website.views.notifications :as view]
            [ubc-website.interactors.sidebar :refer [get-sidebar-data]]
            [ubc-website.views.page-utils :refer [page-template]]))

(defn validate-name [name]
  (when (blank? name)
    "Please enter your name."))

(defn validate-email [email]
  (when (blank? email)
    "Please enter your email address."))

(defn register [name email]
  (let [registration (str name "," email "\n")]
    (spit "registrations" registration :append true)
    (-> (redirect "/products")
        (assoc :session {:message (str "Registration of " email " successful.")}))))

(defn validate-registration [name email]
  (let [name-error (validate-name name)
        email-error (validate-email email)
        errors (if (nil? name-error) [] [name-error])
        errors (if (nil? email-error) errors (conj errors email-error))]
    errors))

(defn redirect-arguments [name email]
  (str (when-not (blank? name) (str "?name=" name))
       (when-not (blank? email) (str "?email=" email))))

(defn exec [name email]
  (let [name (trim name)
        email (trim email)
        errors (validate-registration name email)]
    (if (zero? (count errors))
      (register name email)
      (-> (redirect (str "/register" (redirect-arguments name email)))
          (assoc :session {:message (clojure.string/join "\n" errors)})))))

(defn registration-page [name email session]
  (let [page-data (get-sidebar-data)
        page-data (assoc page-data :message (:message session))]
    (-> (response (page-template (view/registration-form name email) page-data))
        (assoc-in [:session :message] nil))))

