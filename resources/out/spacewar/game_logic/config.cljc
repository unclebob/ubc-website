(ns spacewar.game-logic.config)

(def frame-rate #?(:clj 20 :cljs 30))
(def klingon-stats (atom false))

(def spectral-classes [:o :b :a :f :g :k :m :pulsar])
(def drag-factor 0.005)
(def rotation-rate 0.02)                                    ; degrees per millisecond.
(def impulse-thrust 0.0001)                                 ; per millisecond per power.
(def impulse-power 0.01)
(def warp-power 0.01)
(def warp-leap 20000)                                       ;spacial coordinates.
(def warp-charge-rate 2)
(def warp-threshold 2000)
(def ship-shields 1000)
(def ship-shields-threshold (/ ship-shields 4))
(def ship-antimatter 100000)
(def ship-dilithium 1000)
(def ship-dilithium-consumption 0.0005)
(def ship-shield-recharge-rate 0.01)
(def ship-shield-recharge-cost 5)
(def ship-docking-distance 2000)
(def ship-deploy-distance 5000)
(def ship-kinetics 2000)
(def ship-torpedos 100)
(def ship-repair-capacity 0.005)
(def antimatter-to-heat 0.01)
(def dilithium-heat-dissipation 0.00005)
(def passive-heat-dissipation 0.0000005)
(def corbomite-warp-factor-boost 3)

(def max-shots-by-type {:none 0 :phaser 4 :torpedo 5 :kinetic 30})
(def min-spread 2)
(def max-spread 20)

(def phaser-range 60000)
(def phaser-velocity 70)                                    ;per ms
(def phaser-proximity 5000)
(def phaser-damage 100)
(def phaser-power 1000)

(def torpedo-range 150000)
(def torpedo-velocity 10)
(def torpedo-proximity 2000)
(def torpedo-damage 150)
(def torpedo-power 200)

(def kinetic-range 200000)
(def kinetic-velocity 8)
(def kinetic-proximity 500)
(def kinetic-damage 50)
(def kinetic-power 20)

(def number-of-stars 500)
(def number-of-klingons 20)
(def tactical-range 200000)
(def strategic-range 1000000)

(def known-space-x 18000000)
(def known-space-y 10000000)

(def klingon-shields 200)
(def klingon-antimatter 100000)
(def klingon-shield-recharge-rate 0.01)
(def klingon-shield-recharge-cost 10)
(def klingon-tactical-range 100000)                         ;engage in battle if nearer than this.
(def klingon-evasion-limit 50000)                           ;advance if farther than this.
(def klingon-battle-state-transition-age 20000)
(def klingon-battle-states [:advancing
                            :retreating
                            :flank-left
                            :flank-right])

(def klingon-evasion-trajectories {:flank-left 90
                                   :flank-right 270
                                   :advancing 30
                                   :retreating 210
                                   :no-battle 0
                                   :kamikazee 0})

(def klingon-kamikazee-thrust-factor 4)
(def klingon-kamikazee-probability 0.004)
(def klingon-kamikazee-shield-depletion (* klingon-shield-recharge-rate 1.5))
(def kamikazee-shot-velocity-factor 4)

(def klingon-antimatter-runaway-threshold (* 0.2 klingon-antimatter))
(def klingon-antimatter-kamikazee-threshold (* 0.1 klingon-antimatter))
(def klingon-cruise-thrust 0.01)
(def klingon-tactical-thrust 0.001)
(def klingon-thrust-time 20)                                ;in minutes
(def klingon-thrust-time-ms (* klingon-thrust-time 60 1000)) ;100% antimatter
(def klingon-thrust-antimatter (/ klingon-antimatter klingon-thrust-time-ms))
(def klingon-drag 0.9995)
(def klingon-debris 1000)
(def klingon-docking-distance 10000)
(def klingon-pct-refueling-target 0.65)

(def klingon-kinetic-range 200000)
(def klingon-kinetic-firing-distance 150000)
(def klingon-kinetics 100)
(def klingon-torpedos 20)
(def klingon-kinetic-threshold 1000)
(def klingon-kinetic-velocity 6.0)
(def klingon-kinetic-proximity 1000)
(def klingon-kinetic-damage 50)
(def klingon-kinetic-power 100)

(def klingon-torpedo-production-rate (/ 2 60 1000))         ;two per minute
(def klingon-kinetic-production-rate (/ 10 60 1000))        ;ten per minute
(def klingon-torpedo-antimatter-cost (/ 1000 60 1000))      ;1000 per minute
(def klingon-torpedo-antimatter-threshold (/ klingon-antimatter 5)) ;no production if under 20%

(def klingon-range-for-antimatter-production 10000)
(def klingon-antimatter-production-rate {:o 0.4
                                         :b 0.32
                                         :a 0.24
                                         :f 0.2
                                         :g 0.16
                                         :k 0.025
                                         :m 0.01})

(def klingon-phaser-power 200)
(def klingon-phaser-firing-distance 30000)
(def klingon-phaser-threshold 1000)
(def klingon-phaser-velocity 10)
(def klingon-phaser-damage 100)
(def klingon-phaser-proximity 1000)
(def klingon-phaser-range 30000)

(def klingon-torpedo-power 200)
(def klingon-torpedo-firing-distance 60000)
(def klingon-torpedo-threshold 1000)
(def klingon-torpedo-velocity 5)
(def klingon-torpedo-damage 150)
(def klingon-torpedo-proximity 2000)
(def klingon-torpedo-range 100000)

(def klingon-odds-to-change-mission 0.1) ;per minute

(def minutes-till-full-klingon-invasion (* 1 60))

(def romulan-invisible-time 3000)
(def romulan-appearing-time 2000)
(def romulan-visible-time 2000)
(def romulan-firing-time 2000)
(def romulan-fading-time 2000)
(def romulan-appear-odds-per-second 0.001)
(def romulan-appear-distance 40000)
(def romulan-blast-velocity 80)
(def romulan-blast-range 1000000)
(def romulan-blast-damage (* 1.5 ship-shields))

(def transport-range 1500000)
(def transport-ready 10000)
(def antimatter-cargo-size 20000)
(def dilithium-cargo-size 200)
(def transport-check-period 1000)
(def transport-velocity 20)
(def transport-delivery-range 2000)

(def base-maturity-age 60000)
(def base-deployment-antimatter 30000)
(def base-deployment-dilithium 300)
(def base-antimatter-maximum (* 1.5 ship-antimatter))
(def base-dilithium-maximum (* 1.5 ship-dilithium))
(def base-kinetics-maximum (* 1.5 ship-kinetics))
(def base-torpedos-maximum (* 1.5 ship-torpedos))
(def base-routes-limit 2)

(def antimatter-factory-production-rate 0.2)
(def antimatter-factory-sufficient-antimatter (* base-antimatter-maximum 0.8))
(def antimatter-factory-antimatter-reserve (* 0.5 ship-antimatter))
(def antimatter-factory-sufficient-dilithium (* base-dilithium-maximum 0.8))
(def antimatter-factory-dilithium-reserve (* 0.5 ship-dilithium))

(def dilithium-factory-production-rate 0.002)
(def dilithium-factory-dilithium-antimatter-cost 100)
(def dilithium-factory-sufficient-antimatter (* base-antimatter-maximum 0.8))
(def dilithium-factory-antimatter-reserve (* 0.5 ship-antimatter))
(def dilithium-factory-sufficient-dilithium base-dilithium-maximum)
(def dilithium-factory-dilithium-reserve (* 0.5 ship-dilithium))

(def weapon-factory-torpedo-production-rate 0.0002)
(def weapon-factory-kinetic-production-rate 0.005)
(def weapon-factory-torpedo-antimatter-cost 500)
(def weapon-factory-kinetic-antimatter-cost 50)
(def weapon-factory-torpedo-dilithium-cost 30)

(def weapon-factory-sufficient-antimatter (/ base-antimatter-maximum 2))
(def weapon-factory-antimatter-reserve (* 0.5 ship-antimatter))
(def weapon-factory-sufficient-dilithium (/ base-dilithium-maximum 2))
(def weapon-factory-dilithium-reserve (* 0.5 ship-dilithium))

(def corbomite-factory-production-rate 0.00005)
(def corbomite-maximum 100)
(def corbomite-factory-antimatter-cost 10000)
(def corbomite-factory-dilithium-cost 100)

(def corbomite-factory-sufficient-antimatter (* 0.5 base-antimatter-maximum))
(def corbomite-factory-antimatter-reserve base-antimatter-maximum)
(def corbomite-factory-sufficient-dilithium (* 0.5 base-dilithium-maximum))
(def corbomite-factory-dilithium-reserve base-dilithium-maximum)

(def cloud-decay-rate 0.999988)
(def dilithium-harvest-range 3000)
(def dilithium-harvest-rate 0.05)
