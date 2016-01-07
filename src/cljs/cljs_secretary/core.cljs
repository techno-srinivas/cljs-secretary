(ns cljs-secretary.core
  (:require [goog.events :as events]
            [goog.dom :as dom]
            [bouncer.core :as b]
            [bouncer.validators :as v]
            [secretary.core :as secretary :refer-macros[defroute]]
            ))
(defroute "/users/:id" {:as params}
  (js/console.log (str "User: " (:id params))))
(secretary/dispatch! "/users/gf3")
