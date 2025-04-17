// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('spacewar.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('spacewar.ui.complex');
goog.require('spacewar.ui.view_frame');
goog.require('spacewar.ui.protocols');
goog.require('spacewar.ui.messages');
goog.require('spacewar.game_logic.config');
goog.require('spacewar.game_logic.ship');
goog.require('spacewar.game_logic.stars');
goog.require('spacewar.game_logic.klingons');
goog.require('spacewar.game_logic.bases');
goog.require('spacewar.game_logic.shots');
goog.require('spacewar.game_logic.explosions');
goog.require('spacewar.game_logic.clouds');
goog.require('spacewar.game_logic.romulans');
goog.require('spacewar.util');
goog.require('cljs.spec.alpha');
goog.require('clojure.edn');
cljs.core.enable_console_print_BANG_.call(null);
spacewar.core.version = "20250417";
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.core","update-time","spacewar.core/update-time",-1768149888),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.core","transport-check-time","spacewar.core/transport-check-time",-1628913827),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.core","shots","spacewar.core/shots",-1142964452),new cljs.core.Keyword("spacewar.game-logic.shots","shots","spacewar.game-logic.shots/shots",567599081),new cljs.core.Keyword("spacewar.game-logic.shots","shots","spacewar.game-logic.shots/shots",567599081));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.core","ms","spacewar.core/ms",-1594014312),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.core","text","spacewar.core/text",1718415362),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.core","duration","spacewar.core/duration",1424261623),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.core","message","spacewar.core/message",-384412215),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.core","text","spacewar.core/text",1718415362),new cljs.core.Keyword("spacewar.core","duration","spacewar.core/duration",1424261623)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.core","text","spacewar.core/text",1718415362),new cljs.core.Keyword("spacewar.core","duration","spacewar.core/duration",1424261623)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__565){
return cljs.core.map_QMARK_.call(null,G__565);
}),(function (G__565){
return cljs.core.contains_QMARK_.call(null,G__565,new cljs.core.Keyword(null,"text","text",-1790561697));
}),(function (G__565){
return cljs.core.contains_QMARK_.call(null,G__565,new cljs.core.Keyword(null,"duration","duration",1444101068));
})], null),(function (G__565){
return ((cljs.core.map_QMARK_.call(null,G__565)) && (((cljs.core.contains_QMARK_.call(null,G__565,new cljs.core.Keyword(null,"text","text",-1790561697))) && (cljs.core.contains_QMARK_.call(null,G__565,new cljs.core.Keyword(null,"duration","duration",1444101068))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.core","text","spacewar.core/text",1718415362),new cljs.core.Keyword("spacewar.core","duration","spacewar.core/duration",1424261623)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"duration","duration",1444101068)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"text","text",-1790561697))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"duration","duration",1444101068)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.core","game-over-timer","spacewar.core/game-over-timer",326130841),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.core","minutes","spacewar.core/minutes",1433869363),new cljs.core.Symbol("cljs.core","integer?","cljs.core/integer?",1710697810,null),cljs.core.integer_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.core","version","spacewar.core/version",422787477),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.core","deaths","spacewar.core/deaths",1497976790),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.core","klingons-killed","spacewar.core/klingons-killed",408606817),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.core","romulans-killed","spacewar.core/romulans-killed",-1618845275),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.core","transport-routes","spacewar.core/transport-routes",1007280514),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),cljs.core.set_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.core","world","spacewar.core/world",-414244258),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.game-logic.explosions","explosions","spacewar.game-logic.explosions/explosions",-932660267),new cljs.core.Keyword("spacewar.game-logic.klingons","klingons","spacewar.game-logic.klingons/klingons",-1208279209),new cljs.core.Keyword("spacewar.game-logic.ship","ship","spacewar.game-logic.ship/ship",1001576798),new cljs.core.Keyword("spacewar.game-logic.stars","stars","spacewar.game-logic.stars/stars",1975574583),new cljs.core.Keyword("spacewar.game-logic.bases","bases","spacewar.game-logic.bases/bases",1982657311),new cljs.core.Keyword("spacewar.game-logic.bases","transports","spacewar.game-logic.bases/transports",1755219882),new cljs.core.Keyword("spacewar.game-logic.clouds","clouds","spacewar.game-logic.clouds/clouds",-924713794),new cljs.core.Keyword("spacewar.game-logic.romulans","romulans","spacewar.game-logic.romulans/romulans",-843081646),new cljs.core.Keyword("spacewar.core","shots","spacewar.core/shots",-1142964452),new cljs.core.Keyword("spacewar.core","update-time","spacewar.core/update-time",-1768149888),new cljs.core.Keyword("spacewar.core","transport-check-time","spacewar.core/transport-check-time",-1628913827),new cljs.core.Keyword("spacewar.core","ms","spacewar.core/ms",-1594014312),new cljs.core.Keyword("spacewar.core","game-over-timer","spacewar.core/game-over-timer",326130841),new cljs.core.Keyword("spacewar.core","minutes","spacewar.core/minutes",1433869363),new cljs.core.Keyword("spacewar.core","version","spacewar.core/version",422787477),new cljs.core.Keyword("spacewar.core","deaths","spacewar.core/deaths",1497976790),new cljs.core.Keyword("spacewar.core","klingons-killed","spacewar.core/klingons-killed",408606817),new cljs.core.Keyword("spacewar.core","romulans-killed","spacewar.core/romulans-killed",-1618845275),new cljs.core.Keyword("spacewar.core","transport-routes","spacewar.core/transport-routes",1007280514)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.game-logic.explosions","explosions","spacewar.game-logic.explosions/explosions",-932660267),new cljs.core.Keyword("spacewar.game-logic.klingons","klingons","spacewar.game-logic.klingons/klingons",-1208279209),new cljs.core.Keyword("spacewar.game-logic.ship","ship","spacewar.game-logic.ship/ship",1001576798),new cljs.core.Keyword("spacewar.game-logic.stars","stars","spacewar.game-logic.stars/stars",1975574583),new cljs.core.Keyword("spacewar.game-logic.bases","bases","spacewar.game-logic.bases/bases",1982657311),new cljs.core.Keyword("spacewar.game-logic.bases","transports","spacewar.game-logic.bases/transports",1755219882),new cljs.core.Keyword("spacewar.game-logic.clouds","clouds","spacewar.game-logic.clouds/clouds",-924713794),new cljs.core.Keyword("spacewar.game-logic.romulans","romulans","spacewar.game-logic.romulans/romulans",-843081646),new cljs.core.Keyword("spacewar.core","shots","spacewar.core/shots",-1142964452),new cljs.core.Keyword("spacewar.core","update-time","spacewar.core/update-time",-1768149888),new cljs.core.Keyword("spacewar.core","transport-check-time","spacewar.core/transport-check-time",-1628913827),new cljs.core.Keyword("spacewar.core","ms","spacewar.core/ms",-1594014312),new cljs.core.Keyword("spacewar.core","game-over-timer","spacewar.core/game-over-timer",326130841),new cljs.core.Keyword("spacewar.core","minutes","spacewar.core/minutes",1433869363),new cljs.core.Keyword("spacewar.core","version","spacewar.core/version",422787477),new cljs.core.Keyword("spacewar.core","deaths","spacewar.core/deaths",1497976790),new cljs.core.Keyword("spacewar.core","klingons-killed","spacewar.core/klingons-killed",408606817),new cljs.core.Keyword("spacewar.core","romulans-killed","spacewar.core/romulans-killed",-1618845275),new cljs.core.Keyword("spacewar.core","transport-routes","spacewar.core/transport-routes",1007280514)], null),null,null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__566){
return cljs.core.map_QMARK_.call(null,G__566);
}),(function (G__566){
return cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"explosions","explosions",-1941460974));
}),(function (G__566){
return cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"klingons","klingons",-1228954811));
}),(function (G__566){
return cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"ship","ship",197863473));
}),(function (G__566){
return cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"stars","stars",-556837771));
}),(function (G__566){
return cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"bases","bases",-1036892420));
}),(function (G__566){
return cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"transports","transports",1151421269));
}),(function (G__566){
return cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"clouds","clouds",-632461223));
}),(function (G__566){
return cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"romulans","romulans",1249513588));
}),(function (G__566){
return cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"shots","shots",-1155689265));
}),(function (G__566){
return cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"update-time","update-time",-1745455895));
}),(function (G__566){
return cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"transport-check-time","transport-check-time",-1607264910));
}),(function (G__566){
return cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"ms","ms",-1152709733));
}),(function (G__566){
return cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"game-over-timer","game-over-timer",321758852));
}),(function (G__566){
return cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
}),(function (G__566){
return cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"version","version",425292698));
}),(function (G__566){
return cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"deaths","deaths",1477907113));
}),(function (G__566){
return cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"klingons-killed","klingons-killed",424443456));
}),(function (G__566){
return cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"romulans-killed","romulans-killed",-1598579846));
}),(function (G__566){
return cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"transport-routes","transport-routes",1028896693));
})], null),(function (G__566){
return ((cljs.core.map_QMARK_.call(null,G__566)) && (((cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"explosions","explosions",-1941460974))) && (((cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"klingons","klingons",-1228954811))) && (((cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"ship","ship",197863473))) && (((cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"stars","stars",-556837771))) && (((cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"bases","bases",-1036892420))) && (((cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"transports","transports",1151421269))) && (((cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"clouds","clouds",-632461223))) && (((cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"romulans","romulans",1249513588))) && (((cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"shots","shots",-1155689265))) && (((cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"update-time","update-time",-1745455895))) && (((cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"transport-check-time","transport-check-time",-1607264910))) && (((cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"ms","ms",-1152709733))) && (((cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"game-over-timer","game-over-timer",321758852))) && (((cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"minutes","minutes",1319166394))) && (((cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"version","version",425292698))) && (((cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"deaths","deaths",1477907113))) && (((cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"klingons-killed","klingons-killed",424443456))) && (((cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"romulans-killed","romulans-killed",-1598579846))) && (cljs.core.contains_QMARK_.call(null,G__566,new cljs.core.Keyword(null,"transport-routes","transport-routes",1028896693))))))))))))))))))))))))))))))))))))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.game-logic.explosions","explosions","spacewar.game-logic.explosions/explosions",-932660267),new cljs.core.Keyword("spacewar.game-logic.klingons","klingons","spacewar.game-logic.klingons/klingons",-1208279209),new cljs.core.Keyword("spacewar.game-logic.ship","ship","spacewar.game-logic.ship/ship",1001576798),new cljs.core.Keyword("spacewar.game-logic.stars","stars","spacewar.game-logic.stars/stars",1975574583),new cljs.core.Keyword("spacewar.game-logic.bases","bases","spacewar.game-logic.bases/bases",1982657311),new cljs.core.Keyword("spacewar.game-logic.bases","transports","spacewar.game-logic.bases/transports",1755219882),new cljs.core.Keyword("spacewar.game-logic.clouds","clouds","spacewar.game-logic.clouds/clouds",-924713794),new cljs.core.Keyword("spacewar.game-logic.romulans","romulans","spacewar.game-logic.romulans/romulans",-843081646),new cljs.core.Keyword("spacewar.core","shots","spacewar.core/shots",-1142964452),new cljs.core.Keyword("spacewar.core","update-time","spacewar.core/update-time",-1768149888),new cljs.core.Keyword("spacewar.core","transport-check-time","spacewar.core/transport-check-time",-1628913827),new cljs.core.Keyword("spacewar.core","ms","spacewar.core/ms",-1594014312),new cljs.core.Keyword("spacewar.core","game-over-timer","spacewar.core/game-over-timer",326130841),new cljs.core.Keyword("spacewar.core","minutes","spacewar.core/minutes",1433869363),new cljs.core.Keyword("spacewar.core","version","spacewar.core/version",422787477),new cljs.core.Keyword("spacewar.core","deaths","spacewar.core/deaths",1497976790),new cljs.core.Keyword("spacewar.core","klingons-killed","spacewar.core/klingons-killed",408606817),new cljs.core.Keyword("spacewar.core","romulans-killed","spacewar.core/romulans-killed",-1618845275),new cljs.core.Keyword("spacewar.core","transport-routes","spacewar.core/transport-routes",1007280514)], null),null,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"explosions","explosions",-1941460974),new cljs.core.Keyword(null,"klingons","klingons",-1228954811),new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword(null,"stars","stars",-556837771),new cljs.core.Keyword(null,"bases","bases",-1036892420),new cljs.core.Keyword(null,"transports","transports",1151421269),new cljs.core.Keyword(null,"clouds","clouds",-632461223),new cljs.core.Keyword(null,"romulans","romulans",1249513588),new cljs.core.Keyword(null,"shots","shots",-1155689265),new cljs.core.Keyword(null,"update-time","update-time",-1745455895),new cljs.core.Keyword(null,"transport-check-time","transport-check-time",-1607264910),new cljs.core.Keyword(null,"ms","ms",-1152709733),new cljs.core.Keyword(null,"game-over-timer","game-over-timer",321758852),new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"deaths","deaths",1477907113),new cljs.core.Keyword(null,"klingons-killed","klingons-killed",424443456),new cljs.core.Keyword(null,"romulans-killed","romulans-killed",-1598579846),new cljs.core.Keyword(null,"transport-routes","transport-routes",1028896693)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"explosions","explosions",-1941460974))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"klingons","klingons",-1228954811))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"ship","ship",197863473))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"stars","stars",-556837771))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"bases","bases",-1036892420))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"transports","transports",1151421269))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"clouds","clouds",-632461223))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"romulans","romulans",1249513588))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"shots","shots",-1155689265))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"update-time","update-time",-1745455895))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"transport-check-time","transport-check-time",-1607264910))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"ms","ms",-1152709733))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"game-over-timer","game-over-timer",321758852))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"minutes","minutes",1319166394))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"version","version",425292698))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"deaths","deaths",1477907113))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"klingons-killed","klingons-killed",424443456))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"romulans-killed","romulans-killed",-1598579846))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"transport-routes","transport-routes",1028896693)))], null),null])));
spacewar.core.add_base = (function spacewar$core$add_base(world,base){
return cljs.core.update.call(null,spacewar.game_logic.ship.add_transport_routes_to.call(null,world,base),new cljs.core.Keyword(null,"bases","bases",-1036892420),cljs.core.conj,base);
});
spacewar.core.make_initial_world = (function spacewar$core$make_initial_world(){
var ship = spacewar.game_logic.ship.initialize.call(null);
var stars = spacewar.game_logic.stars.initialize.call(null);
var bases = spacewar.game_logic.bases.make_random_bases.call(null,stars);
var world = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"klingons-killed","klingons-killed",424443456),new cljs.core.Keyword(null,"game-over-timer","game-over-timer",321758852),new cljs.core.Keyword(null,"klingons","klingons",-1228954811),new cljs.core.Keyword(null,"update-time","update-time",-1745455895),new cljs.core.Keyword(null,"deaths","deaths",1477907113),new cljs.core.Keyword(null,"shots","shots",-1155689265),new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword(null,"explosions","explosions",-1941460974),new cljs.core.Keyword(null,"transport-check-time","transport-check-time",-1607264910),new cljs.core.Keyword(null,"romulans","romulans",1249513588),new cljs.core.Keyword(null,"stars","stars",-556837771),new cljs.core.Keyword(null,"transports","transports",1151421269),new cljs.core.Keyword(null,"transport-routes","transport-routes",1028896693),new cljs.core.Keyword(null,"clouds","clouds",-632461223),new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"romulans-killed","romulans-killed",-1598579846),new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"ms","ms",-1152709733),new cljs.core.Keyword(null,"bases","bases",-1036892420)],[(0),(0),spacewar.game_logic.klingons.initialize.call(null),(0),(0),cljs.core.PersistentVector.EMPTY,ship,cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,stars,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentVector.EMPTY,(0),(0),spacewar.core.version,(0),cljs.core.PersistentVector.EMPTY]);
var world__$1 = cljs.core.reduce.call(null,(function (p1__567_SHARP_,p2__568_SHARP_){
return spacewar.core.add_base.call(null,p1__567_SHARP_,p2__568_SHARP_);
}),world,bases);
spacewar.ui.view_frame.clear_messages_BANG_.call(null);

spacewar.ui.messages.send_message.call(null,new cljs.core.Keyword(null,"welcome","welcome",-578152123));

spacewar.ui.messages.send_message.call(null,new cljs.core.Keyword(null,"save-federation","save-federation",259371559));

return world__$1;
});
spacewar.core.game_saved_QMARK_ = (function spacewar$core$game_saved_QMARK_(){
var and__5000__auto__ = (typeof localStorage !== 'undefined');
if(and__5000__auto__){
return localStorage.getItem("spacewar.world");
} else {
return and__5000__auto__;
}
});
spacewar.core.setup = (function spacewar$core$setup(){
var vmargin = (30);
var hmargin = (5);
var saved_QMARK_ = spacewar.core.game_saved_QMARK_.call(null);
var world = (cljs.core.truth_(saved_QMARK_)?clojure.edn.read_string.call(null,localStorage.getItem("spacewar.world")):spacewar.core.make_initial_world.call(null));
var world__$1 = (cljs.core.truth_((function (){var and__5000__auto__ = saved_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.call(null,spacewar.core.version,new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(world));
} else {
return and__5000__auto__;
}
})())?(function (){
spacewar.ui.messages.send_message.call(null,new cljs.core.Keyword(null,"old-game","old-game",841081006));

return world;
})()
:(function (){
spacewar.ui.messages.send_message.call(null,new cljs.core.Keyword(null,"new-version","new-version",-172869195));

return spacewar.core.make_initial_world.call(null);
})()
);
quil.core.frame_rate.call(null,spacewar.game_logic.config.frame_rate);

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"rgb","rgb",1432123467));

quil.core.background.call(null,(200),(200),(200));

quil.core.ellipse_mode.call(null,new cljs.core.Keyword(null,"corner","corner",1296717125));

quil.core.rect_mode.call(null,new cljs.core.Keyword(null,"corner","corner",1296717125));

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"state","state",-1988618099),spacewar.ui.protocols.setup.call(null,spacewar.ui.complex.__GT_complex.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),hmargin,new cljs.core.Keyword(null,"y","y",-1757859776),vmargin,new cljs.core.Keyword(null,"w","w",354169001),(quil.core.width.call(null) - ((2) * hmargin)),new cljs.core.Keyword(null,"h","h",1109658740),(quil.core.height.call(null) - ((2) * vmargin))], null))),new cljs.core.Keyword(null,"world","world",-418292623),world__$1,new cljs.core.Keyword(null,"base-time","base-time",-528100572),new cljs.core.Keyword(null,"update-time","update-time",-1745455895).cljs$core$IFn$_invoke$arity$1(world__$1),new cljs.core.Keyword(null,"fonts","fonts",1683167295),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lcars","lcars",2100113880),"Helvetica-Bold",new cljs.core.Keyword(null,"lcars-small","lcars-small",620623076),"Helvetica",new cljs.core.Keyword(null,"messages","messages",345434482),"Bank Gothic"], null),new cljs.core.Keyword(null,"frame-times","frame-times",-805452633),cljs.core.PersistentVector.EMPTY], null);
});
spacewar.core.debug_position_ship_handler = (function spacewar$core$debug_position_ship_handler(event,world){
cljs.core.println.call(null,"debug-position-ship-handler",new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(event));

var ship = new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(world);
var vec__569 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(event);
var x = cljs.core.nth.call(null,vec__569,(0),null);
var y = cljs.core.nth.call(null,vec__569,(1),null);
var ship__$1 = cljs.core.assoc.call(null,ship,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y);
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"ship","ship",197863473),ship__$1);
});
spacewar.core.debug_dilithium_cloud_handler = (function spacewar$core$debug_dilithium_cloud_handler(event,world){
cljs.core.println.call(null,event);

var vec__572 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(event);
var x = cljs.core.nth.call(null,vec__572,(0),null);
var y = cljs.core.nth.call(null,vec__572,(1),null);
var clouds = new cljs.core.Keyword(null,"clouds","clouds",-632461223).cljs$core$IFn$_invoke$arity$1(world);
var cloud = spacewar.game_logic.clouds.make_cloud.call(null,x,y,spacewar.game_logic.config.klingon_debris);
var clouds__$1 = cljs.core.conj.call(null,clouds,cloud);
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"clouds","clouds",-632461223),clouds__$1);
});
spacewar.core.debug_resupply_ship = (function spacewar$core$debug_resupply_ship(_,world){
var ship = new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(world);
var ship__$1 = cljs.core.assoc.call(null,ship,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),spacewar.game_logic.config.ship_antimatter,new cljs.core.Keyword(null,"dilithium","dilithium",1152933090),spacewar.game_logic.config.ship_dilithium,new cljs.core.Keyword(null,"torpedos","torpedos",344905121),spacewar.game_logic.config.ship_torpedos,new cljs.core.Keyword(null,"kinetics","kinetics",-707133266),spacewar.game_logic.config.ship_kinetics,new cljs.core.Keyword(null,"shields","shields",-295786721),spacewar.game_logic.config.ship_shields,new cljs.core.Keyword(null,"core-temp","core-temp",715877178),(0),new cljs.core.Keyword(null,"hull-damage","hull-damage",-536688766),(0),new cljs.core.Keyword(null,"weapons-damage","weapons-damage",1275474500),(0),new cljs.core.Keyword(null,"life-support-damage","life-support-damage",1212244818),(0),new cljs.core.Keyword(null,"warp-damage","warp-damage",-1651122162),(0),new cljs.core.Keyword(null,"impulse-damage","impulse-damage",2036309966),(0),new cljs.core.Keyword(null,"sensor-damage","sensor-damage",-1401969345),(0));
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"ship","ship",197863473),ship__$1);
});
spacewar.core.debug_add_klingon = (function spacewar$core$debug_add_klingon(event,world){
cljs.core.println.call(null,event);

var vec__575 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(event);
var x = cljs.core.nth.call(null,vec__575,(0),null);
var y = cljs.core.nth.call(null,vec__575,(1),null);
var klingons = new cljs.core.Keyword(null,"klingons","klingons",-1228954811).cljs$core$IFn$_invoke$arity$1(world);
var klingon = spacewar.game_logic.klingons.make_klingon.call(null,x,y);
var klingon__$1 = cljs.core.update.call(null,klingon,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),cljs.core._SLASH_,(2));
var klingons__$1 = cljs.core.conj.call(null,klingons,klingon__$1);
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"klingons","klingons",-1228954811),klingons__$1);
});
spacewar.core.debug_add_kamikazee_klingon = (function spacewar$core$debug_add_kamikazee_klingon(event,world){
cljs.core.println.call(null,event);

var vec__578 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(event);
var x = cljs.core.nth.call(null,vec__578,(0),null);
var y = cljs.core.nth.call(null,vec__578,(1),null);
var klingons = new cljs.core.Keyword(null,"klingons","klingons",-1228954811).cljs$core$IFn$_invoke$arity$1(world);
var klingon = spacewar.game_logic.klingons.make_klingon.call(null,x,y);
var klingon__$1 = cljs.core.update.call(null,klingon,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),cljs.core._SLASH_,(2));
var klingon__$2 = cljs.core.assoc.call(null,klingon__$1,new cljs.core.Keyword(null,"battle-state","battle-state",186465083),new cljs.core.Keyword(null,"kamikazee","kamikazee",1682650476));
var klingons__$1 = cljs.core.conj.call(null,klingons,klingon__$2);
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"klingons","klingons",-1228954811),klingons__$1);
});
spacewar.core.debug_new_klingon_from_praxis = (function spacewar$core$debug_new_klingon_from_praxis(event,world){
cljs.core.println.call(null,event);

return spacewar.game_logic.klingons.new_klingon_from_praxis.call(null,world);
});
spacewar.core.debug_add_romulan = (function spacewar$core$debug_add_romulan(event,world){
cljs.core.println.call(null,event);

var vec__581 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(event);
var x = cljs.core.nth.call(null,vec__581,(0),null);
var y = cljs.core.nth.call(null,vec__581,(1),null);
var romulans = new cljs.core.Keyword(null,"romulans","romulans",1249513588).cljs$core$IFn$_invoke$arity$1(world);
var romulan = spacewar.game_logic.romulans.make_romulan.call(null,x,y);
var romulans__$1 = cljs.core.conj.call(null,romulans,romulan);
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"romulans","romulans",1249513588),romulans__$1);
});
spacewar.core.new_game = (function spacewar$core$new_game(event,world){
return spacewar.core.make_initial_world.call(null);
});
spacewar.core.debug_corbomite_device_installed = (function spacewar$core$debug_corbomite_device_installed(event,world){
var ship = new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(world);
var ship__$1 = cljs.core.assoc.call(null,ship,new cljs.core.Keyword(null,"corbomite-device-installed","corbomite-device-installed",-2093492516),true);
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"ship","ship",197863473),ship__$1);
});
spacewar.core.debug_explosion = (function spacewar$core$debug_explosion(event,world){
var vec__584 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(event);
var x = cljs.core.nth.call(null,vec__584,(0),null);
var y = cljs.core.nth.call(null,vec__584,(1),null);
var explosion = spacewar.game_logic.explosions.__GT_explosion.call(null,new cljs.core.Keyword(null,"corbomite-device","corbomite-device",-829250405),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null));
var explosions = new cljs.core.Keyword(null,"explosions","explosions",-1941460974).cljs$core$IFn$_invoke$arity$1(world);
var explosions__$1 = cljs.core.conj.call(null,explosions,explosion);
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"explosions","explosions",-1941460974),explosions__$1);
});
spacewar.core.debug_add_pulsar = (function spacewar$core$debug_add_pulsar(event,world){
var vec__587 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(event);
var x = cljs.core.nth.call(null,vec__587,(0),null);
var y = cljs.core.nth.call(null,vec__587,(1),null);
var pulsar = spacewar.game_logic.stars.make_pulsar.call(null);
var pulsar__$1 = cljs.core.assoc.call(null,pulsar,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y);
var stars = new cljs.core.Keyword(null,"stars","stars",-556837771).cljs$core$IFn$_invoke$arity$1(world);
var stars__$1 = cljs.core.conj.call(null,stars,pulsar__$1);
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"stars","stars",-556837771),stars__$1);
});
spacewar.core.debug_klingon_stats = (function spacewar$core$debug_klingon_stats(_event,world){
cljs.core.swap_BANG_.call(null,spacewar.game_logic.config.klingon_stats,cljs.core.not);

return world;
});
spacewar.core.process_game_events = (function spacewar$core$process_game_events(events,world){
var vec__590 = spacewar.util.handle_event.call(null,new cljs.core.Keyword(null,"new-game","new-game",167241648),spacewar.core.new_game,spacewar.util.handle_event.call(null,new cljs.core.Keyword(null,"debug-klingon-stats","debug-klingon-stats",239832412),spacewar.core.debug_klingon_stats,spacewar.util.handle_event.call(null,new cljs.core.Keyword(null,"debug-add-pulsar","debug-add-pulsar",1124578906),spacewar.core.debug_add_pulsar,spacewar.util.handle_event.call(null,new cljs.core.Keyword(null,"debug-explosion","debug-explosion",211194527),spacewar.core.debug_explosion,spacewar.util.handle_event.call(null,new cljs.core.Keyword(null,"debug-corbomite-device-installed","debug-corbomite-device-installed",247596390),spacewar.core.debug_corbomite_device_installed,spacewar.util.handle_event.call(null,new cljs.core.Keyword(null,"debug-new-klingon-from-praxis","debug-new-klingon-from-praxis",1326159196),spacewar.core.debug_new_klingon_from_praxis,spacewar.util.handle_event.call(null,new cljs.core.Keyword(null,"debug-add-romulan","debug-add-romulan",458420770),spacewar.core.debug_add_romulan,spacewar.util.handle_event.call(null,new cljs.core.Keyword(null,"debug-add-kamikazee-klingon","debug-add-kamikazee-klingon",-1479498603),spacewar.core.debug_add_kamikazee_klingon,spacewar.util.handle_event.call(null,new cljs.core.Keyword(null,"debug-add-klingon","debug-add-klingon",-1401441744),spacewar.core.debug_add_klingon,spacewar.util.handle_event.call(null,new cljs.core.Keyword(null,"debug-resupply-ship","debug-resupply-ship",1653705279),spacewar.core.debug_resupply_ship,spacewar.util.handle_event.call(null,new cljs.core.Keyword(null,"debug-dilithium-cloud","debug-dilithium-cloud",-454177713),spacewar.core.debug_dilithium_cloud_handler,spacewar.util.handle_event.call(null,new cljs.core.Keyword(null,"debug-position-ship","debug-position-ship",1001388142),spacewar.core.debug_position_ship_handler,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [events,world], null)))))))))))));
var _ = cljs.core.nth.call(null,vec__590,(0),null);
var world__$1 = cljs.core.nth.call(null,vec__590,(1),null);
return world__$1;
});
spacewar.core.process_events = (function spacewar$core$process_events(events,world){
var world__$1 = spacewar.game_logic.ship.process_events.call(null,events,world);
var world__$2 = spacewar.core.process_game_events.call(null,events,world__$1);
var world__$3 = spacewar.game_logic.shots.process_events.call(null,events,world__$2);
return world__$3;
});
spacewar.core.ship_explosion = (function spacewar$core$ship_explosion(ship){
return spacewar.game_logic.explosions.__GT_explosion.call(null,new cljs.core.Keyword(null,"ship","ship",197863473),ship);
});
spacewar.core.game_won = (function spacewar$core$game_won(_ms,world){
if((cljs.core.count.call(null,new cljs.core.Keyword(null,"klingons","klingons",-1228954811).cljs$core$IFn$_invoke$arity$1(world)) === (0))){
spacewar.ui.messages.send_message.call(null,new cljs.core.Keyword(null,"you-win","you-win",-2086190249));
} else {
}

return world;
});
spacewar.core.game_over = (function spacewar$core$game_over(_ms,p__593){
var map__594 = p__593;
var map__594__$1 = cljs.core.__destructure_map.call(null,map__594);
var world = map__594__$1;
var ship = cljs.core.get.call(null,map__594__$1,new cljs.core.Keyword(null,"ship","ship",197863473));
var game_over_timer = cljs.core.get.call(null,map__594__$1,new cljs.core.Keyword(null,"game-over-timer","game-over-timer",321758852));
var explosions = cljs.core.get.call(null,map__594__$1,new cljs.core.Keyword(null,"explosions","explosions",-1941460974));
var deaths = cljs.core.get.call(null,map__594__$1,new cljs.core.Keyword(null,"deaths","deaths",1477907113));
if(cljs.core.truth_(new cljs.core.Keyword(null,"destroyed","destroyed",-427566535).cljs$core$IFn$_invoke$arity$1(ship))){
var explosions__$1 = (((game_over_timer === (0)))?cljs.core.conj.call(null,explosions,spacewar.core.ship_explosion.call(null,ship)):explosions);
var _ = (((game_over_timer === (0)))?spacewar.ui.messages.send_message.call(null,new cljs.core.Keyword(null,"you-died","you-died",1067868118)):null);
var done_QMARK_ = (((game_over_timer > (0))) && (cljs.core.empty_QMARK_.call(null,explosions__$1)));
var game_over_timer__$1 = ((done_QMARK_)?(0):(1));
var ship__$1 = ((done_QMARK_)?spacewar.game_logic.ship.reincarnate.call(null):ship);
var deaths__$1 = ((done_QMARK_)?(deaths + (1)):deaths);
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"game-over-timer","game-over-timer",321758852),game_over_timer__$1,new cljs.core.Keyword(null,"explosions","explosions",-1941460974),explosions__$1,new cljs.core.Keyword(null,"ship","ship",197863473),ship__$1,new cljs.core.Keyword(null,"deaths","deaths",1477907113),deaths__$1);
} else {
return world;
}
});
spacewar.core.valid_world_QMARK_ = (function spacewar$core$valid_world_QMARK_(world){
var valid = cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("spacewar.core","world","spacewar.core/world",-414244258),world);
if((!(valid))){
cljs.core.println.call(null,cljs.spec.alpha.explain_str.call(null,new cljs.core.Keyword("spacewar.core","world","spacewar.core/world",-414244258),world));
} else {
}

return valid;
});
spacewar.core.update_world = (function spacewar$core$update_world(ms,world){
return spacewar.ui.view_frame.update_messages.call(null,ms,spacewar.game_logic.romulans.update_romulans.call(null,ms,spacewar.game_logic.bases.update_bases.call(null,ms,spacewar.game_logic.klingons.update_klingons.call(null,ms,spacewar.game_logic.clouds.update_clouds.call(null,ms,spacewar.game_logic.explosions.update_explosions.call(null,ms,spacewar.game_logic.shots.update_shots.call(null,ms,spacewar.game_logic.ship.update_ship.call(null,ms,spacewar.core.game_over.call(null,ms,spacewar.core.game_won.call(null,ms,world))))))))));
});
spacewar.core.update_world_per_second = (function spacewar$core$update_world_per_second(world){
spacewar.ui.messages.add_messages_BANG_.call(null,world);

return spacewar.game_logic.romulans.update_romulans_per_second.call(null,spacewar.game_logic.klingons.update_klingons_per_second.call(null,world));
});
spacewar.core.increment_minutes = (function spacewar$core$increment_minutes(world){
var minutes = cljs.core.get.call(null,world,new cljs.core.Keyword(null,"minutes","minutes",1319166394),(0));
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"minutes","minutes",1319166394),(minutes + (1)));
});
spacewar.core.update_world_per_minute = (function spacewar$core$update_world_per_minute(world){
return spacewar.game_logic.klingons.update_klingons_per_minute.call(null,spacewar.core.increment_minutes.call(null,world));
});
spacewar.core.add_frame_time = (function spacewar$core$add_frame_time(frame_time,context){
var frame_times = cljs.core.conj.call(null,new cljs.core.Keyword(null,"frame-times","frame-times",-805452633).cljs$core$IFn$_invoke$arity$1(context),frame_time);
var frame_times__$1 = (((cljs.core.count.call(null,frame_times) > (10)))?cljs.core.vec.call(null,cljs.core.rest.call(null,frame_times)):frame_times);
return cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"frame-times","frame-times",-805452633),frame_times__$1);
});
spacewar.core.frames_per_second = (function spacewar$core$frames_per_second(frame_times){
if(cljs.core.empty_QMARK_.call(null,frame_times)){
return (0);
} else {
var sum = cljs.core.reduce.call(null,cljs.core._PLUS_,frame_times);
var mean = (sum / cljs.core.count.call(null,frame_times));
var fps = ((1000) / mean);
return fps;
}
});
spacewar.core.update_state = (function spacewar$core$update_state(context){
var map__595 = context;
var map__595__$1 = cljs.core.__destructure_map.call(null,map__595);
var world = cljs.core.get.call(null,map__595__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var base_time = cljs.core.get.call(null,map__595__$1,new cljs.core.Keyword(null,"base-time","base-time",-528100572));
var time = (base_time + quil.core.millis.call(null));
var last_update_time = new cljs.core.Keyword(null,"update-time","update-time",-1745455895).cljs$core$IFn$_invoke$arity$1(world);
var ms = (time - last_update_time);
var new_game_QMARK_ = (ms > (500));
var last_update_time__$1 = ((new_game_QMARK_)?time:last_update_time);
var ms__$1 = (time - last_update_time__$1);
var ms__$2 = (function (){var x__5087__auto__ = (1);
var y__5088__auto__ = ms__$1;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var context__$1 = spacewar.core.add_frame_time.call(null,ms__$2,context);
var frame_times = new cljs.core.Keyword(null,"frame-times","frame-times",-805452633).cljs$core$IFn$_invoke$arity$1(context__$1);
var fps = spacewar.core.frames_per_second.call(null,frame_times);
var complex = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(context__$1);
var world__$1 = cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"update-time","update-time",-1745455895),time,new cljs.core.Keyword(null,"ms","ms",-1152709733),ms__$2,new cljs.core.Keyword(null,"fps","fps",683533296),fps);
var vec__596 = spacewar.ui.protocols.update_state.call(null,complex,world__$1);
var complex__$1 = cljs.core.nth.call(null,vec__596,(0),null);
var events = cljs.core.nth.call(null,vec__596,(1),null);
var events__$1 = cljs.core.flatten.call(null,events);
var world__$2 = spacewar.core.process_events.call(null,events__$1,world__$1);
var world__$3 = spacewar.core.update_world.call(null,ms__$2,world__$2);
var new_second_QMARK_ = cljs.core.not_EQ_.call(null,((time / (1000)) | (0)),((last_update_time__$1 / (1000)) | (0)));
var new_minute_QMARK_ = cljs.core.not_EQ_.call(null,((time / (60000)) | (0)),((last_update_time__$1 / (60000)) | (0)));
var new_save_QMARK_ = cljs.core.not_EQ_.call(null,((time / (5000)) | (0)),((last_update_time__$1 / (5000)) | (0)));
var world__$4 = ((new_second_QMARK_)?spacewar.core.update_world_per_second.call(null,world__$3):world__$3);
var world__$5 = ((new_minute_QMARK_)?spacewar.core.update_world_per_minute.call(null,world__$4):world__$4);
if(new_save_QMARK_){
if((typeof localStorage !== 'undefined')){
localStorage.setItem("spacewar.world",world__$5);
} else {
}
} else {
}

return cljs.core.assoc.call(null,context__$1,new cljs.core.Keyword(null,"state","state",-1988618099),complex__$1,new cljs.core.Keyword(null,"world","world",-418292623),world__$5);
});
spacewar.core.draw_state = (function spacewar$core$draw_state(p__599){
var map__600 = p__599;
var map__600__$1 = cljs.core.__destructure_map.call(null,map__600);
var state = cljs.core.get.call(null,map__600__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
quil.core.fill.call(null,(200),(200),(200));

quil.core.rect_mode.call(null,new cljs.core.Keyword(null,"corner","corner",1296717125));

quil.core.no_stroke.call(null);

quil.core.rect.call(null,(0),(0),quil.core.width.call(null),quil.core.height.call(null));

return spacewar.ui.protocols.draw.call(null,state);
});
spacewar.core._main = (function spacewar$core$_main(){
var size = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__5087__auto__ = (document.body.scrollWidth - (20));
var y__5088__auto__ = (900);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})(),(function (){var x__5087__auto__ = (window.innerHeight - (25));
var y__5088__auto__ = (700);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})()], null);
spacewar.core.space_war = (function spacewar$core$_main_$_space_war(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"space-war",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,spacewar.core.update_state))?(function() { 
var G__601__delegate = function (args){
return cljs.core.apply.call(null,spacewar.core.update_state,args);
};
var G__601 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__602__i = 0, G__602__a = new Array(arguments.length -  0);
while (G__602__i < G__602__a.length) {G__602__a[G__602__i] = arguments[G__602__i + 0]; ++G__602__i;}
  args = new cljs.core.IndexedSeq(G__602__a,0,null);
} 
return G__601__delegate.call(this,args);};
G__601.cljs$lang$maxFixedArity = 0;
G__601.cljs$lang$applyTo = (function (arglist__603){
var args = cljs.core.seq(arglist__603);
return G__601__delegate(args);
});
G__601.cljs$core$IFn$_invoke$arity$variadic = G__601__delegate;
return G__601;
})()
:spacewar.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),((cljs.core.fn_QMARK_.call(null,size))?(function() { 
var G__604__delegate = function (args){
return cljs.core.apply.call(null,size,args);
};
var G__604 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__605__i = 0, G__605__a = new Array(arguments.length -  0);
while (G__605__i < G__605__a.length) {G__605__a[G__605__i] = arguments[G__605__i + 0]; ++G__605__i;}
  args = new cljs.core.IndexedSeq(G__605__a,0,null);
} 
return G__604__delegate.call(this,args);};
G__604.cljs$lang$maxFixedArity = 0;
G__604.cljs$lang$applyTo = (function (arglist__606){
var args = cljs.core.seq(arglist__606);
return G__604__delegate(args);
});
G__604.cljs$core$IFn$_invoke$arity$variadic = G__604__delegate;
return G__604;
})()
:size),new cljs.core.Keyword(null,"title","title",636505583),"Space War",new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,spacewar.core.setup))?(function() { 
var G__607__delegate = function (args){
return cljs.core.apply.call(null,spacewar.core.setup,args);
};
var G__607 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__608__i = 0, G__608__a = new Array(arguments.length -  0);
while (G__608__i < G__608__a.length) {G__608__a[G__608__i] = arguments[G__608__i + 0]; ++G__608__i;}
  args = new cljs.core.IndexedSeq(G__608__a,0,null);
} 
return G__607__delegate.call(this,args);};
G__607.cljs$lang$maxFixedArity = 0;
G__607.cljs$lang$applyTo = (function (arglist__609){
var args = cljs.core.seq(arglist__609);
return G__607__delegate(args);
});
G__607.cljs$core$IFn$_invoke$arity$variadic = G__607__delegate;
return G__607;
})()
:spacewar.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,spacewar.core.draw_state))?(function() { 
var G__610__delegate = function (args){
return cljs.core.apply.call(null,spacewar.core.draw_state,args);
};
var G__610 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__611__i = 0, G__611__a = new Array(arguments.length -  0);
while (G__611__i < G__611__a.length) {G__611__a[G__611__i] = arguments[G__611__i + 0]; ++G__611__i;}
  args = new cljs.core.IndexedSeq(G__611__a,0,null);
} 
return G__610__delegate.call(this,args);};
G__610.cljs$lang$maxFixedArity = 0;
G__610.cljs$lang$applyTo = (function (arglist__612){
var args = cljs.core.seq(arglist__612);
return G__610__delegate(args);
});
G__610.cljs$core$IFn$_invoke$arity$variadic = G__610__delegate;
return G__610;
})()
:spacewar.core.draw_state));
});
goog.exportSymbol('spacewar.core.space_war', spacewar.core.space_war);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__424__425__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__424__425__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),spacewar.core.space_war,new cljs.core.Keyword(null,"host-id","host-id",742376279),"space-war"], null));
}
});
goog.exportSymbol('spacewar.core._main', spacewar.core._main);

//# sourceMappingURL=core.js.map
