// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('spacewar.game_logic.world');
goog.require('cljs.core');
spacewar.game_logic.world.add_message = (function spacewar$game_logic$world$add_message(world,message,duration){
var messages = new cljs.core.Keyword(null,"messages","messages",345434482).cljs$core$IFn$_invoke$arity$1(world);
var message__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),message,new cljs.core.Keyword(null,"duration","duration",1444101068),duration], null);
var messages__$1 = cljs.core.conj.call(null,messages,message__$1);
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"messages","messages",345434482),messages__$1);
});

//# sourceMappingURL=world.js.map
