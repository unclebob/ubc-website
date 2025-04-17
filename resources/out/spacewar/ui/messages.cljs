(ns spacewar.ui.messages
  (:require [spacewar.game-logic.config :as glc]
            [spacewar.ui.view-frame :as view-frame]))

(def last-ship (atom nil))

(defn- msg
  ([text]
   (view-frame/add-message! text 5000))
  ([text duration]
   (view-frame/add-message! text duration)))

(defn- shield-message [ship]
  (let [shields (:shields ship)
        old-shields (:shields @last-ship)
        pct-diff (abs (/ (- shields old-shields) glc/ship-shields))
        pct-shields (/ shields glc/ship-shields)]
    (when (> pct-diff 0.1)
      (cond
        (< pct-shields 0.2) (msg "Shields buckling!")
        (< pct-shields 0.5) (msg "50% shields!")
        (< pct-shields 0.8) (msg "Shields Holding!")))))

(defn add-messages! [world]
  (shield-message (:ship world))
  (reset! last-ship (:ship world))
  )