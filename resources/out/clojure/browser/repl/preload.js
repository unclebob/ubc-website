// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('clojure.browser.repl.preload');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
if((typeof clojure !== 'undefined') && (typeof clojure.browser !== 'undefined') && (typeof clojure.browser.repl !== 'undefined') && (typeof clojure.browser.repl.preload !== 'undefined') && (typeof clojure.browser.repl.preload.conn !== 'undefined')){
} else {
clojure.browser.repl.preload.conn = clojure.browser.repl.connect.call(null,["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.browser.repl.HOST),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.browser.repl.PORT),"/repl"].join(''));
}

//# sourceMappingURL=preload.js.map
