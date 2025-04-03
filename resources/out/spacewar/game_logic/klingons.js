// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('spacewar.game_logic.klingons');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('quil.core');
goog.require('spacewar.game_logic.clouds');
goog.require('spacewar.game_logic.config');
goog.require('spacewar.game_logic.explosions');
goog.require('spacewar.game_logic.hit');
goog.require('spacewar.game_logic.shots');
goog.require('spacewar.geometry');
goog.require('spacewar.util');
goog.require('spacewar.vector');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.klingons","x","spacewar.game-logic.klingons/x",1867827467),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.klingons","y","spacewar.game-logic.klingons/y",-1770677182),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.klingons","shields","spacewar.game-logic.klingons/shields",-265872595),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.klingons","antimatter","spacewar.game-logic.klingons/antimatter",-1063953150),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.klingons","kinetics","spacewar.game-logic.klingons/kinetics",-710636480),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.klingons","torpedos","spacewar.game-logic.klingons/torpedos",332878227),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.klingons","weapon-charge","spacewar.game-logic.klingons/weapon-charge",17992020),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.klingons","velocity","spacewar.game-logic.klingons/velocity",-570552149),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.number_QMARK_,cljs.core.number_QMARK_], null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.klingons","thrust","spacewar.game-logic.klingons/thrust",707892870),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.number_QMARK_,cljs.core.number_QMARK_], null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.klingons","battle-state-age","spacewar.game-logic.klingons/battle-state-age",1288039786),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.klingons","battle-state","spacewar.game-logic.klingons/battle-state",200658773),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"flank-right","flank-right",-2113025306),"null",new cljs.core.Keyword(null,"kamikazee","kamikazee",1682650476),"null",new cljs.core.Keyword(null,"retreating","retreating",939624530),"null",new cljs.core.Keyword(null,"advancing","advancing",21793874),"null",new cljs.core.Keyword(null,"no-battle","no-battle",-1425286057),"null",new cljs.core.Keyword(null,"flank-left","flank-left",-1509458594),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"flank-right","flank-right",-2113025306),null,new cljs.core.Keyword(null,"kamikazee","kamikazee",1682650476),null,new cljs.core.Keyword(null,"retreating","retreating",939624530),null,new cljs.core.Keyword(null,"advancing","advancing",21793874),null,new cljs.core.Keyword(null,"no-battle","no-battle",-1425286057),null,new cljs.core.Keyword(null,"flank-left","flank-left",-1509458594),null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.klingons","cruise-state","spacewar.game-logic.klingons/cruise-state",-1836495028),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mission","mission",1740288522),"null",new cljs.core.Keyword(null,"patrol","patrol",-1378804753),"null",new cljs.core.Keyword(null,"refuel","refuel",184033462),"null",new cljs.core.Keyword(null,"guard","guard",-873147811),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mission","mission",1740288522),null,new cljs.core.Keyword(null,"patrol","patrol",-1378804753),null,new cljs.core.Keyword(null,"refuel","refuel",184033462),null,new cljs.core.Keyword(null,"guard","guard",-873147811),null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.klingons","mission","spacewar.game-logic.klingons/mission",1761814056),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"seek-and-destroy","seek-and-destroy",-1082537405),"null",new cljs.core.Keyword(null,"blockade","blockade",-469589591),"null",new cljs.core.Keyword(null,"escape-corbomite","escape-corbomite",-646606924),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"seek-and-destroy","seek-and-destroy",-1082537405),null,new cljs.core.Keyword(null,"blockade","blockade",-469589591),null,new cljs.core.Keyword(null,"escape-corbomite","escape-corbomite",-646606924),null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.klingons","klingon","spacewar.game-logic.klingons/klingon",-217109258),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.game-logic.klingons","x","spacewar.game-logic.klingons/x",1867827467),new cljs.core.Keyword("spacewar.game-logic.klingons","y","spacewar.game-logic.klingons/y",-1770677182),new cljs.core.Keyword("spacewar.game-logic.klingons","shields","spacewar.game-logic.klingons/shields",-265872595),new cljs.core.Keyword("spacewar.game-logic.klingons","antimatter","spacewar.game-logic.klingons/antimatter",-1063953150),new cljs.core.Keyword("spacewar.game-logic.klingons","kinetics","spacewar.game-logic.klingons/kinetics",-710636480),new cljs.core.Keyword("spacewar.game-logic.klingons","torpedos","spacewar.game-logic.klingons/torpedos",332878227),new cljs.core.Keyword("spacewar.game-logic.klingons","weapon-charge","spacewar.game-logic.klingons/weapon-charge",17992020),new cljs.core.Keyword("spacewar.game-logic.klingons","velocity","spacewar.game-logic.klingons/velocity",-570552149),new cljs.core.Keyword("spacewar.game-logic.klingons","thrust","spacewar.game-logic.klingons/thrust",707892870),new cljs.core.Keyword("spacewar.game-logic.klingons","battle-state-age","spacewar.game-logic.klingons/battle-state-age",1288039786),new cljs.core.Keyword("spacewar.game-logic.klingons","battle-state","spacewar.game-logic.klingons/battle-state",200658773),new cljs.core.Keyword("spacewar.game-logic.klingons","cruise-state","spacewar.game-logic.klingons/cruise-state",-1836495028),new cljs.core.Keyword("spacewar.game-logic.klingons","mission","spacewar.game-logic.klingons/mission",1761814056)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.game-logic.hit","hit","spacewar.game-logic.hit/hit",1970463858)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.game-logic.klingons","x","spacewar.game-logic.klingons/x",1867827467),new cljs.core.Keyword("spacewar.game-logic.klingons","y","spacewar.game-logic.klingons/y",-1770677182),new cljs.core.Keyword("spacewar.game-logic.klingons","shields","spacewar.game-logic.klingons/shields",-265872595),new cljs.core.Keyword("spacewar.game-logic.klingons","antimatter","spacewar.game-logic.klingons/antimatter",-1063953150),new cljs.core.Keyword("spacewar.game-logic.klingons","kinetics","spacewar.game-logic.klingons/kinetics",-710636480),new cljs.core.Keyword("spacewar.game-logic.klingons","torpedos","spacewar.game-logic.klingons/torpedos",332878227),new cljs.core.Keyword("spacewar.game-logic.klingons","weapon-charge","spacewar.game-logic.klingons/weapon-charge",17992020),new cljs.core.Keyword("spacewar.game-logic.klingons","velocity","spacewar.game-logic.klingons/velocity",-570552149),new cljs.core.Keyword("spacewar.game-logic.klingons","thrust","spacewar.game-logic.klingons/thrust",707892870),new cljs.core.Keyword("spacewar.game-logic.klingons","battle-state-age","spacewar.game-logic.klingons/battle-state-age",1288039786),new cljs.core.Keyword("spacewar.game-logic.klingons","battle-state","spacewar.game-logic.klingons/battle-state",200658773),new cljs.core.Keyword("spacewar.game-logic.klingons","cruise-state","spacewar.game-logic.klingons/cruise-state",-1836495028),new cljs.core.Keyword("spacewar.game-logic.klingons","mission","spacewar.game-logic.klingons/mission",1761814056)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.game-logic.hit","hit","spacewar.game-logic.hit/hit",1970463858)], null),null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__1728){
return cljs.core.map_QMARK_.call(null,G__1728);
}),(function (G__1728){
return cljs.core.contains_QMARK_.call(null,G__1728,new cljs.core.Keyword(null,"x","x",2099068185));
}),(function (G__1728){
return cljs.core.contains_QMARK_.call(null,G__1728,new cljs.core.Keyword(null,"y","y",-1757859776));
}),(function (G__1728){
return cljs.core.contains_QMARK_.call(null,G__1728,new cljs.core.Keyword(null,"shields","shields",-295786721));
}),(function (G__1728){
return cljs.core.contains_QMARK_.call(null,G__1728,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000));
}),(function (G__1728){
return cljs.core.contains_QMARK_.call(null,G__1728,new cljs.core.Keyword(null,"kinetics","kinetics",-707133266));
}),(function (G__1728){
return cljs.core.contains_QMARK_.call(null,G__1728,new cljs.core.Keyword(null,"torpedos","torpedos",344905121));
}),(function (G__1728){
return cljs.core.contains_QMARK_.call(null,G__1728,new cljs.core.Keyword(null,"weapon-charge","weapon-charge",55258446));
}),(function (G__1728){
return cljs.core.contains_QMARK_.call(null,G__1728,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
}),(function (G__1728){
return cljs.core.contains_QMARK_.call(null,G__1728,new cljs.core.Keyword(null,"thrust","thrust",651754168));
}),(function (G__1728){
return cljs.core.contains_QMARK_.call(null,G__1728,new cljs.core.Keyword(null,"battle-state-age","battle-state-age",1309571432));
}),(function (G__1728){
return cljs.core.contains_QMARK_.call(null,G__1728,new cljs.core.Keyword(null,"battle-state","battle-state",186465083));
}),(function (G__1728){
return cljs.core.contains_QMARK_.call(null,G__1728,new cljs.core.Keyword(null,"cruise-state","cruise-state",-1815030882));
}),(function (G__1728){
return cljs.core.contains_QMARK_.call(null,G__1728,new cljs.core.Keyword(null,"mission","mission",1740288522));
})], null),(function (G__1728){
return ((cljs.core.map_QMARK_.call(null,G__1728)) && (((cljs.core.contains_QMARK_.call(null,G__1728,new cljs.core.Keyword(null,"x","x",2099068185))) && (((cljs.core.contains_QMARK_.call(null,G__1728,new cljs.core.Keyword(null,"y","y",-1757859776))) && (((cljs.core.contains_QMARK_.call(null,G__1728,new cljs.core.Keyword(null,"shields","shields",-295786721))) && (((cljs.core.contains_QMARK_.call(null,G__1728,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000))) && (((cljs.core.contains_QMARK_.call(null,G__1728,new cljs.core.Keyword(null,"kinetics","kinetics",-707133266))) && (((cljs.core.contains_QMARK_.call(null,G__1728,new cljs.core.Keyword(null,"torpedos","torpedos",344905121))) && (((cljs.core.contains_QMARK_.call(null,G__1728,new cljs.core.Keyword(null,"weapon-charge","weapon-charge",55258446))) && (((cljs.core.contains_QMARK_.call(null,G__1728,new cljs.core.Keyword(null,"velocity","velocity",-581524355))) && (((cljs.core.contains_QMARK_.call(null,G__1728,new cljs.core.Keyword(null,"thrust","thrust",651754168))) && (((cljs.core.contains_QMARK_.call(null,G__1728,new cljs.core.Keyword(null,"battle-state-age","battle-state-age",1309571432))) && (((cljs.core.contains_QMARK_.call(null,G__1728,new cljs.core.Keyword(null,"battle-state","battle-state",186465083))) && (((cljs.core.contains_QMARK_.call(null,G__1728,new cljs.core.Keyword(null,"cruise-state","cruise-state",-1815030882))) && (cljs.core.contains_QMARK_.call(null,G__1728,new cljs.core.Keyword(null,"mission","mission",1740288522))))))))))))))))))))))))))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hit","hit",1909257382)], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.game-logic.klingons","x","spacewar.game-logic.klingons/x",1867827467),new cljs.core.Keyword("spacewar.game-logic.klingons","y","spacewar.game-logic.klingons/y",-1770677182),new cljs.core.Keyword("spacewar.game-logic.klingons","shields","spacewar.game-logic.klingons/shields",-265872595),new cljs.core.Keyword("spacewar.game-logic.klingons","antimatter","spacewar.game-logic.klingons/antimatter",-1063953150),new cljs.core.Keyword("spacewar.game-logic.klingons","kinetics","spacewar.game-logic.klingons/kinetics",-710636480),new cljs.core.Keyword("spacewar.game-logic.klingons","torpedos","spacewar.game-logic.klingons/torpedos",332878227),new cljs.core.Keyword("spacewar.game-logic.klingons","weapon-charge","spacewar.game-logic.klingons/weapon-charge",17992020),new cljs.core.Keyword("spacewar.game-logic.klingons","velocity","spacewar.game-logic.klingons/velocity",-570552149),new cljs.core.Keyword("spacewar.game-logic.klingons","thrust","spacewar.game-logic.klingons/thrust",707892870),new cljs.core.Keyword("spacewar.game-logic.klingons","battle-state-age","spacewar.game-logic.klingons/battle-state-age",1288039786),new cljs.core.Keyword("spacewar.game-logic.klingons","battle-state","spacewar.game-logic.klingons/battle-state",200658773),new cljs.core.Keyword("spacewar.game-logic.klingons","cruise-state","spacewar.game-logic.klingons/cruise-state",-1836495028),new cljs.core.Keyword("spacewar.game-logic.klingons","mission","spacewar.game-logic.klingons/mission",1761814056)], null),null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"shields","shields",-295786721),new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),new cljs.core.Keyword(null,"kinetics","kinetics",-707133266),new cljs.core.Keyword(null,"torpedos","torpedos",344905121),new cljs.core.Keyword(null,"weapon-charge","weapon-charge",55258446),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.Keyword(null,"thrust","thrust",651754168),new cljs.core.Keyword(null,"battle-state-age","battle-state-age",1309571432),new cljs.core.Keyword(null,"battle-state","battle-state",186465083),new cljs.core.Keyword(null,"cruise-state","cruise-state",-1815030882),new cljs.core.Keyword(null,"mission","mission",1740288522)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.game-logic.hit","hit","spacewar.game-logic.hit/hit",1970463858)], null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"x","x",2099068185))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"y","y",-1757859776))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"shields","shields",-295786721))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"kinetics","kinetics",-707133266))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"torpedos","torpedos",344905121))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"weapon-charge","weapon-charge",55258446))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"velocity","velocity",-581524355))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"thrust","thrust",651754168))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"battle-state-age","battle-state-age",1309571432))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"battle-state","battle-state",186465083))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"cruise-state","cruise-state",-1815030882))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"mission","mission",1740288522)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.klingons","klingons","spacewar.game-logic.klingons/klingons",-1208279209),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("spacewar.game-logic.klingons","klingon","spacewar.game-logic.klingons/klingon",-217109258)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.klingons","klingon","spacewar.game-logic.klingons/klingon",-217109258),new cljs.core.Keyword("spacewar.game-logic.klingons","klingon","spacewar.game-logic.klingons/klingon",-217109258),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("spacewar.game-logic.klingons","klingon","spacewar.game-logic.klingons/klingon",-217109258)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__1729){
return cljs.core.coll_QMARK_.call(null,G__1729);
})], null),null));
spacewar.game_logic.klingons.cruise_fsm = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patrol","patrol",-1378804753),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"low-antimatter","low-antimatter",-550197054),new cljs.core.Keyword(null,"refuel","refuel",184033462),new cljs.core.Keyword(null,"low-torpedo","low-torpedo",-1869667544),new cljs.core.Keyword(null,"patrol","patrol",-1378804753),new cljs.core.Keyword(null,"capable","capable",691367294),new cljs.core.Keyword(null,"guard","guard",-873147811),new cljs.core.Keyword(null,"well-supplied","well-supplied",-2116769797),new cljs.core.Keyword(null,"mission","mission",1740288522)], null),new cljs.core.Keyword(null,"refuel","refuel",184033462),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"low-antimatter","low-antimatter",-550197054),new cljs.core.Keyword(null,"refuel","refuel",184033462),new cljs.core.Keyword(null,"low-torpedo","low-torpedo",-1869667544),new cljs.core.Keyword(null,"patrol","patrol",-1378804753),new cljs.core.Keyword(null,"capable","capable",691367294),new cljs.core.Keyword(null,"guard","guard",-873147811),new cljs.core.Keyword(null,"well-supplied","well-supplied",-2116769797),new cljs.core.Keyword(null,"mission","mission",1740288522)], null),new cljs.core.Keyword(null,"guard","guard",-873147811),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"low-antimatter","low-antimatter",-550197054),new cljs.core.Keyword(null,"refuel","refuel",184033462),new cljs.core.Keyword(null,"low-torpedo","low-torpedo",-1869667544),new cljs.core.Keyword(null,"guard","guard",-873147811),new cljs.core.Keyword(null,"capable","capable",691367294),new cljs.core.Keyword(null,"guard","guard",-873147811),new cljs.core.Keyword(null,"well-supplied","well-supplied",-2116769797),new cljs.core.Keyword(null,"mission","mission",1740288522)], null),new cljs.core.Keyword(null,"mission","mission",1740288522),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"low-antimatter","low-antimatter",-550197054),new cljs.core.Keyword(null,"refuel","refuel",184033462),new cljs.core.Keyword(null,"low-torpedo","low-torpedo",-1869667544),new cljs.core.Keyword(null,"guard","guard",-873147811),new cljs.core.Keyword(null,"capable","capable",691367294),new cljs.core.Keyword(null,"refuel","refuel",184033462),new cljs.core.Keyword(null,"well-supplied","well-supplied",-2116769797),new cljs.core.Keyword(null,"mission","mission",1740288522)], null)], null);
spacewar.game_logic.klingons.super_state = (function spacewar$game_logic$klingons$super_state(klingon,ship){
var distance = spacewar.geometry.distance.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ship)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(klingon),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(klingon)], null));
if((distance < spacewar.game_logic.config.klingon_tactical_range)){
return new cljs.core.Keyword(null,"battle","battle",1332424968);
} else {
return new cljs.core.Keyword(null,"cruise","cruise",213469540);
}
});
spacewar.game_logic.klingons.random_mission = (function spacewar$game_logic$klingons$random_mission(){
if((0.5 < cljs.core.rand.call(null))){
return new cljs.core.Keyword(null,"seek-and-destroy","seek-and-destroy",-1082537405);
} else {
return new cljs.core.Keyword(null,"blockade","blockade",-469589591);
}
});
spacewar.game_logic.klingons.make_random_klingon = (function spacewar$game_logic$klingons$make_random_klingon(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"torpedos","torpedos",344905121),new cljs.core.Keyword(null,"battle-state-age","battle-state-age",1309571432),new cljs.core.Keyword(null,"mission","mission",1740288522),new cljs.core.Keyword(null,"kinetics","kinetics",-707133266),new cljs.core.Keyword(null,"weapon-charge","weapon-charge",55258446),new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),new cljs.core.Keyword(null,"thrust","thrust",651754168),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"battle-state","battle-state",186465083),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.Keyword(null,"cruise-state","cruise-state",-1815030882),new cljs.core.Keyword(null,"shields","shields",-295786721)],[(cljs.core.rand.call(null,spacewar.game_logic.config.known_space_y) | (0)),cljs.core.rand.call(null,spacewar.game_logic.config.klingon_torpedos),(0),spacewar.game_logic.klingons.random_mission.call(null),cljs.core.rand.call(null,spacewar.game_logic.config.klingon_kinetics),(0),cljs.core.rand.call(null,spacewar.game_logic.config.klingon_antimatter),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(cljs.core.rand.call(null,spacewar.game_logic.config.known_space_x) | (0)),new cljs.core.Keyword(null,"no-battle","no-battle",-1425286057),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((2) - cljs.core.rand.call(null,(4))),((2) - cljs.core.rand.call(null,(4)))], null),new cljs.core.Keyword(null,"patrol","patrol",-1378804753),spacewar.game_logic.config.klingon_shields]);
});
spacewar.game_logic.klingons.make_klingon = (function spacewar$game_logic$klingons$make_klingon(x,y){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"torpedos","torpedos",344905121),new cljs.core.Keyword(null,"battle-state-age","battle-state-age",1309571432),new cljs.core.Keyword(null,"mission","mission",1740288522),new cljs.core.Keyword(null,"kinetics","kinetics",-707133266),new cljs.core.Keyword(null,"weapon-charge","weapon-charge",55258446),new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),new cljs.core.Keyword(null,"thrust","thrust",651754168),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"battle-state","battle-state",186465083),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.Keyword(null,"cruise-state","cruise-state",-1815030882),new cljs.core.Keyword(null,"shields","shields",-295786721)],[y,spacewar.game_logic.config.klingon_torpedos,(0),spacewar.game_logic.klingons.random_mission.call(null),spacewar.game_logic.config.klingon_kinetics,(0),spacewar.game_logic.config.klingon_antimatter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),x,new cljs.core.Keyword(null,"no-battle","no-battle",-1425286057),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"patrol","patrol",-1378804753),spacewar.game_logic.config.klingon_shields]);
});
spacewar.game_logic.klingons.new_klingon_from_praxis = (function spacewar$game_logic$klingons$new_klingon_from_praxis(world){
var klingons = new cljs.core.Keyword(null,"klingons","klingons",-1228954811).cljs$core$IFn$_invoke$arity$1(world);
var klingon = spacewar.game_logic.klingons.make_klingon.call(null,cljs.core.rand_int.call(null,spacewar.game_logic.config.known_space_x),(0));
var klingon__$1 = cljs.core.assoc.call(null,klingon,new cljs.core.Keyword(null,"mission","mission",1740288522),spacewar.game_logic.klingons.random_mission.call(null),new cljs.core.Keyword(null,"cruise-state","cruise-state",-1815030882),new cljs.core.Keyword(null,"mission","mission",1740288522),new cljs.core.Keyword(null,"thrust","thrust",651754168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),spacewar.game_logic.config.klingon_cruise_thrust], null),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),spacewar.game_logic.config.klingon_antimatter,new cljs.core.Keyword(null,"torpedos","torpedos",344905121),spacewar.game_logic.config.klingon_torpedos,new cljs.core.Keyword(null,"kinetics","kinetics",-707133266),spacewar.game_logic.config.klingon_kinetics);
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"klingons","klingons",-1228954811),cljs.core.conj.call(null,klingons,klingon__$1));
});
spacewar.game_logic.klingons.initialize = (function spacewar$game_logic$klingons$initialize(){
return cljs.core.repeatedly.call(null,spacewar.game_logic.config.number_of_klingons,spacewar.game_logic.klingons.make_random_klingon);
});
spacewar.game_logic.klingons.damage_by_phasers = (function spacewar$game_logic$klingons$damage_by_phasers(hit){
var ranges = new cljs.core.Keyword(null,"damage","damage",970520018).cljs$core$IFn$_invoke$arity$1(hit);
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__1730_SHARP_){
return (spacewar.game_logic.config.phaser_damage * ((1) - (p1__1730_SHARP_ / spacewar.game_logic.config.phaser_range)));
}),ranges));
});
spacewar.game_logic.klingons.hit_damage = (function spacewar$game_logic$klingons$hit_damage(hit){
var pred__1731 = cljs.core._EQ_;
var expr__1732 = new cljs.core.Keyword(null,"weapon","weapon",-504830232).cljs$core$IFn$_invoke$arity$1(hit);
if(cljs.core.truth_(pred__1731.call(null,new cljs.core.Keyword(null,"torpedo","torpedo",275681140),expr__1732))){
return new cljs.core.Keyword(null,"damage","damage",970520018).cljs$core$IFn$_invoke$arity$1(hit);
} else {
if(cljs.core.truth_(pred__1731.call(null,new cljs.core.Keyword(null,"kinetic","kinetic",-451191810),expr__1732))){
return new cljs.core.Keyword(null,"damage","damage",970520018).cljs$core$IFn$_invoke$arity$1(hit);
} else {
if(cljs.core.truth_(pred__1731.call(null,new cljs.core.Keyword(null,"phaser","phaser",-1448421666),expr__1732))){
return spacewar.game_logic.klingons.damage_by_phasers.call(null,hit);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__1732)].join('')));
}
}
}
});
spacewar.game_logic.klingons.hit_klingon = (function spacewar$game_logic$klingons$hit_klingon(klingon){
var map__1734 = klingon;
var map__1734__$1 = cljs.core.__destructure_map.call(null,map__1734);
var shields = cljs.core.get.call(null,map__1734__$1,new cljs.core.Keyword(null,"shields","shields",-295786721));
var hit = cljs.core.get.call(null,map__1734__$1,new cljs.core.Keyword(null,"hit","hit",1909257382));
var battle_state_age = cljs.core.get.call(null,map__1734__$1,new cljs.core.Keyword(null,"battle-state-age","battle-state-age",1309571432));
var klingon__$1 = cljs.core.dissoc.call(null,klingon,new cljs.core.Keyword(null,"hit","hit",1909257382));
var shields__$1 = (((!((hit == null))))?(shields - spacewar.game_logic.klingons.hit_damage.call(null,hit)):shields);
var battle_state_age__$1 = (((!((hit == null))))?(spacewar.game_logic.config.klingon_battle_state_transition_age + (1)):battle_state_age);
return cljs.core.assoc.call(null,klingon__$1,new cljs.core.Keyword(null,"shields","shields",-295786721),shields__$1,new cljs.core.Keyword(null,"battle-state-age","battle-state-age",1309571432),battle_state_age__$1);
});
spacewar.game_logic.klingons.klingon_destruction = (function spacewar$game_logic$klingons$klingon_destruction(klingons){
if(cljs.core.empty_QMARK_.call(null,klingons)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.map.call(null,(function (p1__1735_SHARP_){
return spacewar.game_logic.explosions.__GT_explosion.call(null,new cljs.core.Keyword(null,"klingon","klingon",-229621540),p1__1735_SHARP_);
}),klingons);
}
});
spacewar.game_logic.klingons.recharge_shield = (function spacewar$game_logic$klingons$recharge_shield(ms,klingon){
var map__1736 = klingon;
var map__1736__$1 = cljs.core.__destructure_map.call(null,map__1736);
var antimatter = cljs.core.get.call(null,map__1736__$1,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000));
var shields = cljs.core.get.call(null,map__1736__$1,new cljs.core.Keyword(null,"shields","shields",-295786721));
var shield_deficit = (spacewar.game_logic.config.klingon_shields - shields);
var max_charge = (ms * spacewar.game_logic.config.klingon_shield_recharge_rate);
var real_charge = (function (){var x__5090__auto__ = (function (){var x__5090__auto__ = shield_deficit;
var y__5091__auto__ = max_charge;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var y__5091__auto__ = (antimatter / spacewar.game_logic.config.klingon_shield_recharge_cost);
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var antimatter__$1 = (antimatter - (spacewar.game_logic.config.klingon_shield_recharge_cost * real_charge));
var shields__$1 = (shields + real_charge);
return cljs.core.assoc.call(null,klingon,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),antimatter__$1,new cljs.core.Keyword(null,"shields","shields",-295786721),shields__$1);
});
spacewar.game_logic.klingons.recharge_shields = (function spacewar$game_logic$klingons$recharge_shields(ms,klingons){
return cljs.core.map.call(null,(function (p1__1737_SHARP_){
return spacewar.game_logic.klingons.recharge_shield.call(null,ms,p1__1737_SHARP_);
}),klingons);
});
spacewar.game_logic.klingons.klingon_debris_cloud = (function spacewar$game_logic$klingons$klingon_debris_cloud(klingon){
return spacewar.game_logic.clouds.make_cloud.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(klingon),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(klingon),(cljs.core.rand.call(null,(1)) * spacewar.game_logic.config.klingon_debris));
});
spacewar.game_logic.klingons.klingon_debris_clouds = (function spacewar$game_logic$klingons$klingon_debris_clouds(dead_klingons){
return cljs.core.map.call(null,spacewar.game_logic.klingons.klingon_debris_cloud,dead_klingons);
});
spacewar.game_logic.klingons.update_kamikazee = (function spacewar$game_logic$klingons$update_kamikazee(ms,klingon){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"kamikazee","kamikazee",1682650476),new cljs.core.Keyword(null,"battle-state","battle-state",186465083).cljs$core$IFn$_invoke$arity$1(klingon))){
return cljs.core.update.call(null,klingon,new cljs.core.Keyword(null,"shields","shields",-295786721),cljs.core._,(ms * spacewar.game_logic.config.klingon_kamikazee_shield_depletion));
} else {
return klingon;
}
});
spacewar.game_logic.klingons.destroyed_klingon_QMARK_ = (function spacewar$game_logic$klingons$destroyed_klingon_QMARK_(klingon){
return (new cljs.core.Keyword(null,"shields","shields",-295786721).cljs$core$IFn$_invoke$arity$1(klingon) <= (0));
});
spacewar.game_logic.klingons.update_klingon_defense = (function spacewar$game_logic$klingons$update_klingon_defense(ms,p__1739){
var map__1740 = p__1739;
var map__1740__$1 = cljs.core.__destructure_map.call(null,map__1740);
var world = map__1740__$1;
var klingons = cljs.core.get.call(null,map__1740__$1,new cljs.core.Keyword(null,"klingons","klingons",-1228954811));
var klingons_killed = cljs.core.get.call(null,map__1740__$1,new cljs.core.Keyword(null,"klingons-killed","klingons-killed",424443456));
var explosions = cljs.core.get.call(null,map__1740__$1,new cljs.core.Keyword(null,"explosions","explosions",-1941460974));
var clouds = cljs.core.get.call(null,map__1740__$1,new cljs.core.Keyword(null,"clouds","clouds",-632461223));
var klingons__$1 = cljs.core.map.call(null,spacewar.game_logic.klingons.hit_klingon,klingons);
var klingons__$2 = cljs.core.map.call(null,(function (p1__1738_SHARP_){
return spacewar.game_logic.klingons.update_kamikazee.call(null,ms,p1__1738_SHARP_);
}),klingons__$1);
var vec__1741 = cljs.core.split_with.call(null,spacewar.game_logic.klingons.destroyed_klingon_QMARK_,klingons__$2);
var dead = cljs.core.nth.call(null,vec__1741,(0),null);
var alive = cljs.core.nth.call(null,vec__1741,(1),null);
var klingons_killed__$1 = (klingons_killed + cljs.core.count.call(null,dead));
var klingons__$3 = spacewar.game_logic.klingons.recharge_shields.call(null,ms,alive);
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"klingons","klingons",-1228954811),klingons__$3,new cljs.core.Keyword(null,"klingons-killed","klingons-killed",424443456),klingons_killed__$1,new cljs.core.Keyword(null,"explosions","explosions",-1941460974),cljs.core.concat.call(null,explosions,spacewar.game_logic.klingons.klingon_destruction.call(null,dead)),new cljs.core.Keyword(null,"clouds","clouds",-632461223),cljs.core.concat.call(null,clouds,spacewar.game_logic.klingons.klingon_debris_clouds.call(null,dead)));
});
spacewar.game_logic.klingons.charge_weapons = (function spacewar$game_logic$klingons$charge_weapons(ms,klingons,ship){
var iter__5480__auto__ = (function spacewar$game_logic$klingons$charge_weapons_$_iter__1744(s__1745){
return (new cljs.core.LazySeq(null,(function (){
var s__1745__$1 = s__1745;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__1745__$1);
if(temp__5804__auto__){
var s__1745__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1745__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__1745__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__1747 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__1746 = (0);
while(true){
if((i__1746 < size__5479__auto__)){
var klingon = cljs.core._nth.call(null,c__5478__auto__,i__1746);
cljs.core.chunk_append.call(null,b__1747,(((spacewar.game_logic.config.klingon_kinetic_firing_distance > spacewar.geometry.distance.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ship)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(klingon),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(klingon)], null))))?(function (){var efficiency = (new cljs.core.Keyword(null,"shields","shields",-295786721).cljs$core$IFn$_invoke$arity$1(klingon) / spacewar.game_logic.config.klingon_shields);
var charge_increment = (ms * efficiency);
return cljs.core.update.call(null,klingon,new cljs.core.Keyword(null,"weapon-charge","weapon-charge",55258446),cljs.core._PLUS_,charge_increment);
})():klingon));

var G__1748 = (i__1746 + (1));
i__1746 = G__1748;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1747),spacewar$game_logic$klingons$charge_weapons_$_iter__1744.call(null,cljs.core.chunk_rest.call(null,s__1745__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1747),null);
}
} else {
var klingon = cljs.core.first.call(null,s__1745__$2);
return cljs.core.cons.call(null,(((spacewar.game_logic.config.klingon_kinetic_firing_distance > spacewar.geometry.distance.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ship)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(klingon),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(klingon)], null))))?(function (){var efficiency = (new cljs.core.Keyword(null,"shields","shields",-295786721).cljs$core$IFn$_invoke$arity$1(klingon) / spacewar.game_logic.config.klingon_shields);
var charge_increment = (ms * efficiency);
return cljs.core.update.call(null,klingon,new cljs.core.Keyword(null,"weapon-charge","weapon-charge",55258446),cljs.core._PLUS_,charge_increment);
})():klingon),spacewar$game_logic$klingons$charge_weapons_$_iter__1744.call(null,cljs.core.rest.call(null,s__1745__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,klingons);
});
spacewar.game_logic.klingons.firing_solution = (function spacewar$game_logic$klingons$firing_solution(klingon,ship,shot_velocity){
var ax = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(klingon);
var ay = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(klingon);
var bx = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship);
var by = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ship);
var vec__1749 = new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(ship);
var ux = cljs.core.nth.call(null,vec__1749,(0),null);
var uy = cljs.core.nth.call(null,vec__1749,(1),null);
var vmag = shot_velocity;
var abx = (bx - ax);
var aby = (by - ay);
var abmag = quil.core.sqrt.call(null,((abx * abx) + (aby * aby)));
var abx__$1 = (abx / abmag);
var aby__$1 = (aby / abmag);
var udotab = ((abx__$1 * ux) + (aby__$1 * uy));
var ujx = (udotab * abx__$1);
var ujy = (udotab * aby__$1);
var uix = (ux - ujx);
var uiy = (uy - ujy);
var vix = uix;
var viy = uiy;
var vimag = quil.core.sqrt.call(null,((vix * vix) + (viy * viy)));
var vjmag = quil.core.sqrt.call(null,((vmag * vmag) + (vimag * vimag)));
var vjx = (abx__$1 * vjmag);
var vjy = (aby__$1 * vjmag);
var vx = (vjx + vix);
var vy = (vjy + viy);
return spacewar.geometry.angle_degrees.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vx,vy], null));
});
spacewar.game_logic.klingons.ready_to_fire_kinetic_QMARK_ = (function spacewar$game_logic$klingons$ready_to_fire_kinetic_QMARK_(klingon){
return (((klingon.call(null,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000)) > spacewar.game_logic.config.klingon_kinetic_power)) && ((((new cljs.core.Keyword(null,"kinetics","kinetics",-707133266).cljs$core$IFn$_invoke$arity$1(klingon) > (0))) && ((spacewar.game_logic.config.klingon_kinetic_threshold <= new cljs.core.Keyword(null,"weapon-charge","weapon-charge",55258446).cljs$core$IFn$_invoke$arity$1(klingon))))));
});
spacewar.game_logic.klingons.ready_to_fire_phaser_QMARK_ = (function spacewar$game_logic$klingons$ready_to_fire_phaser_QMARK_(klingon,ship){
var ship_pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ship)], null);
var klingon_pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(klingon),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(klingon)], null);
var dist = spacewar.geometry.distance.call(null,ship_pos,klingon_pos);
return (((dist < spacewar.game_logic.config.klingon_phaser_firing_distance)) && ((((new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000).cljs$core$IFn$_invoke$arity$1(klingon) > spacewar.game_logic.config.klingon_phaser_power)) && ((spacewar.game_logic.config.klingon_phaser_threshold <= new cljs.core.Keyword(null,"weapon-charge","weapon-charge",55258446).cljs$core$IFn$_invoke$arity$1(klingon))))));
});
spacewar.game_logic.klingons.turning_QMARK_ = (function spacewar$game_logic$klingons$turning_QMARK_(ship){
var heading = new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(ship);
var heading_setting = new cljs.core.Keyword(null,"heading-setting","heading-setting",634943).cljs$core$IFn$_invoke$arity$1(ship);
var diff = quil.core.abs.call(null,(heading - heading_setting));
return (diff > 0.5);
});
spacewar.game_logic.klingons.warping_QMARK_ = (function spacewar$game_logic$klingons$warping_QMARK_(ship){
return (new cljs.core.Keyword(null,"warp","warp",-931589598).cljs$core$IFn$_invoke$arity$1(ship) > (0));
});
spacewar.game_logic.klingons.ready_to_fire_torpedo_QMARK_ = (function spacewar$game_logic$klingons$ready_to_fire_torpedo_QMARK_(klingon,ship){
var ship_pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ship)], null);
var klingon_pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(klingon),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(klingon)], null);
var dist = spacewar.geometry.distance.call(null,ship_pos,klingon_pos);
return (((!(spacewar.game_logic.klingons.warping_QMARK_.call(null,ship)))) && ((((!(spacewar.game_logic.klingons.turning_QMARK_.call(null,ship)))) && (((((new cljs.core.Keyword(null,"torpedos","torpedos",344905121).cljs$core$IFn$_invoke$arity$1(klingon) | (0)) > (0))) && ((((dist < spacewar.game_logic.config.klingon_torpedo_firing_distance)) && ((((new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000).cljs$core$IFn$_invoke$arity$1(klingon) > spacewar.game_logic.config.klingon_torpedo_power)) && ((spacewar.game_logic.config.klingon_torpedo_threshold <= new cljs.core.Keyword(null,"weapon-charge","weapon-charge",55258446).cljs$core$IFn$_invoke$arity$1(klingon))))))))))));
});

/**
 * @interface
 */
spacewar.game_logic.klingons.klingon_weapon = function(){};

var spacewar$game_logic$klingons$klingon_weapon$weapon_velocity$dyn_1752 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (spacewar.game_logic.klingons.weapon_velocity[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$);
} else {
var m__5349__auto__ = (spacewar.game_logic.klingons.weapon_velocity["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"klingon-weapon.weapon-velocity",this$);
}
}
});
spacewar.game_logic.klingons.weapon_velocity = (function spacewar$game_logic$klingons$weapon_velocity(this$){
if((((!((this$ == null)))) && ((!((this$.spacewar$game_logic$klingons$klingon_weapon$weapon_velocity$arity$1 == null)))))){
return this$.spacewar$game_logic$klingons$klingon_weapon$weapon_velocity$arity$1(this$);
} else {
return spacewar$game_logic$klingons$klingon_weapon$weapon_velocity$dyn_1752.call(null,this$);
}
});

var spacewar$game_logic$klingons$klingon_weapon$weapon_threshold$dyn_1753 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (spacewar.game_logic.klingons.weapon_threshold[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$);
} else {
var m__5349__auto__ = (spacewar.game_logic.klingons.weapon_threshold["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"klingon-weapon.weapon-threshold",this$);
}
}
});
spacewar.game_logic.klingons.weapon_threshold = (function spacewar$game_logic$klingons$weapon_threshold(this$){
if((((!((this$ == null)))) && ((!((this$.spacewar$game_logic$klingons$klingon_weapon$weapon_threshold$arity$1 == null)))))){
return this$.spacewar$game_logic$klingons$klingon_weapon$weapon_threshold$arity$1(this$);
} else {
return spacewar$game_logic$klingons$klingon_weapon$weapon_threshold$dyn_1753.call(null,this$);
}
});

var spacewar$game_logic$klingons$klingon_weapon$weapon_power$dyn_1754 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (spacewar.game_logic.klingons.weapon_power[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$);
} else {
var m__5349__auto__ = (spacewar.game_logic.klingons.weapon_power["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"klingon-weapon.weapon-power",this$);
}
}
});
spacewar.game_logic.klingons.weapon_power = (function spacewar$game_logic$klingons$weapon_power(this$){
if((((!((this$ == null)))) && ((!((this$.spacewar$game_logic$klingons$klingon_weapon$weapon_power$arity$1 == null)))))){
return this$.spacewar$game_logic$klingons$klingon_weapon$weapon_power$arity$1(this$);
} else {
return spacewar$game_logic$klingons$klingon_weapon$weapon_power$dyn_1754.call(null,this$);
}
});

var spacewar$game_logic$klingons$klingon_weapon$weapon_inventory$dyn_1755 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (spacewar.game_logic.klingons.weapon_inventory[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$);
} else {
var m__5349__auto__ = (spacewar.game_logic.klingons.weapon_inventory["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"klingon-weapon.weapon-inventory",this$);
}
}
});
spacewar.game_logic.klingons.weapon_inventory = (function spacewar$game_logic$klingons$weapon_inventory(this$){
if((((!((this$ == null)))) && ((!((this$.spacewar$game_logic$klingons$klingon_weapon$weapon_inventory$arity$1 == null)))))){
return this$.spacewar$game_logic$klingons$klingon_weapon$weapon_inventory$arity$1(this$);
} else {
return spacewar$game_logic$klingons$klingon_weapon$weapon_inventory$dyn_1755.call(null,this$);
}
});

var spacewar$game_logic$klingons$klingon_weapon$weapon_type$dyn_1756 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (spacewar.game_logic.klingons.weapon_type[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$);
} else {
var m__5349__auto__ = (spacewar.game_logic.klingons.weapon_type["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"klingon-weapon.weapon-type",this$);
}
}
});
spacewar.game_logic.klingons.weapon_type = (function spacewar$game_logic$klingons$weapon_type(this$){
if((((!((this$ == null)))) && ((!((this$.spacewar$game_logic$klingons$klingon_weapon$weapon_type$arity$1 == null)))))){
return this$.spacewar$game_logic$klingons$klingon_weapon$weapon_type$arity$1(this$);
} else {
return spacewar$game_logic$klingons$klingon_weapon$weapon_type$dyn_1756.call(null,this$);
}
});


/**
* @constructor
 * @implements {spacewar.game_logic.klingons.klingon_weapon}
*/
spacewar.game_logic.klingons.klingon_kinetic = (function (){
});
(spacewar.game_logic.klingons.klingon_kinetic.prototype.spacewar$game_logic$klingons$klingon_weapon$ = cljs.core.PROTOCOL_SENTINEL);

(spacewar.game_logic.klingons.klingon_kinetic.prototype.spacewar$game_logic$klingons$klingon_weapon$weapon_velocity$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return spacewar.game_logic.config.klingon_kinetic_velocity;
}));

(spacewar.game_logic.klingons.klingon_kinetic.prototype.spacewar$game_logic$klingons$klingon_weapon$weapon_threshold$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return spacewar.game_logic.config.klingon_kinetic_threshold;
}));

(spacewar.game_logic.klingons.klingon_kinetic.prototype.spacewar$game_logic$klingons$klingon_weapon$weapon_power$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return spacewar.game_logic.config.klingon_kinetic_power;
}));

(spacewar.game_logic.klingons.klingon_kinetic.prototype.spacewar$game_logic$klingons$klingon_weapon$weapon_inventory$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"kinetics","kinetics",-707133266);
}));

(spacewar.game_logic.klingons.klingon_kinetic.prototype.spacewar$game_logic$klingons$klingon_weapon$weapon_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"klingon-kinetic","klingon-kinetic",844180079);
}));

(spacewar.game_logic.klingons.klingon_kinetic.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(spacewar.game_logic.klingons.klingon_kinetic.cljs$lang$type = true);

(spacewar.game_logic.klingons.klingon_kinetic.cljs$lang$ctorStr = "spacewar.game-logic.klingons/klingon-kinetic");

(spacewar.game_logic.klingons.klingon_kinetic.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"spacewar.game-logic.klingons/klingon-kinetic");
}));

/**
 * Positional factory function for spacewar.game-logic.klingons/klingon-kinetic.
 */
spacewar.game_logic.klingons.__GT_klingon_kinetic = (function spacewar$game_logic$klingons$__GT_klingon_kinetic(){
return (new spacewar.game_logic.klingons.klingon_kinetic());
});


/**
* @constructor
 * @implements {spacewar.game_logic.klingons.klingon_weapon}
*/
spacewar.game_logic.klingons.klingon_phaser = (function (){
});
(spacewar.game_logic.klingons.klingon_phaser.prototype.spacewar$game_logic$klingons$klingon_weapon$ = cljs.core.PROTOCOL_SENTINEL);

(spacewar.game_logic.klingons.klingon_phaser.prototype.spacewar$game_logic$klingons$klingon_weapon$weapon_velocity$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return spacewar.game_logic.config.klingon_phaser_velocity;
}));

(spacewar.game_logic.klingons.klingon_phaser.prototype.spacewar$game_logic$klingons$klingon_weapon$weapon_threshold$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return spacewar.game_logic.config.klingon_phaser_threshold;
}));

(spacewar.game_logic.klingons.klingon_phaser.prototype.spacewar$game_logic$klingons$klingon_weapon$weapon_power$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return spacewar.game_logic.config.klingon_phaser_power;
}));

(spacewar.game_logic.klingons.klingon_phaser.prototype.spacewar$game_logic$klingons$klingon_weapon$weapon_inventory$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(spacewar.game_logic.klingons.klingon_phaser.prototype.spacewar$game_logic$klingons$klingon_weapon$weapon_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"klingon-phaser","klingon-phaser",-1316039597);
}));

(spacewar.game_logic.klingons.klingon_phaser.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(spacewar.game_logic.klingons.klingon_phaser.cljs$lang$type = true);

(spacewar.game_logic.klingons.klingon_phaser.cljs$lang$ctorStr = "spacewar.game-logic.klingons/klingon-phaser");

(spacewar.game_logic.klingons.klingon_phaser.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"spacewar.game-logic.klingons/klingon-phaser");
}));

/**
 * Positional factory function for spacewar.game-logic.klingons/klingon-phaser.
 */
spacewar.game_logic.klingons.__GT_klingon_phaser = (function spacewar$game_logic$klingons$__GT_klingon_phaser(){
return (new spacewar.game_logic.klingons.klingon_phaser());
});


/**
* @constructor
 * @implements {spacewar.game_logic.klingons.klingon_weapon}
*/
spacewar.game_logic.klingons.klingon_torpedo = (function (){
});
(spacewar.game_logic.klingons.klingon_torpedo.prototype.spacewar$game_logic$klingons$klingon_weapon$ = cljs.core.PROTOCOL_SENTINEL);

(spacewar.game_logic.klingons.klingon_torpedo.prototype.spacewar$game_logic$klingons$klingon_weapon$weapon_velocity$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return spacewar.game_logic.config.klingon_torpedo_velocity;
}));

(spacewar.game_logic.klingons.klingon_torpedo.prototype.spacewar$game_logic$klingons$klingon_weapon$weapon_threshold$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return spacewar.game_logic.config.klingon_torpedo_threshold;
}));

(spacewar.game_logic.klingons.klingon_torpedo.prototype.spacewar$game_logic$klingons$klingon_weapon$weapon_power$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return spacewar.game_logic.config.klingon_torpedo_power;
}));

(spacewar.game_logic.klingons.klingon_torpedo.prototype.spacewar$game_logic$klingons$klingon_weapon$weapon_inventory$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"torpedos","torpedos",344905121);
}));

(spacewar.game_logic.klingons.klingon_torpedo.prototype.spacewar$game_logic$klingons$klingon_weapon$weapon_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"klingon-torpedo","klingon-torpedo",-403411893);
}));

(spacewar.game_logic.klingons.klingon_torpedo.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(spacewar.game_logic.klingons.klingon_torpedo.cljs$lang$type = true);

(spacewar.game_logic.klingons.klingon_torpedo.cljs$lang$ctorStr = "spacewar.game-logic.klingons/klingon-torpedo");

(spacewar.game_logic.klingons.klingon_torpedo.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"spacewar.game-logic.klingons/klingon-torpedo");
}));

/**
 * Positional factory function for spacewar.game-logic.klingons/klingon-torpedo.
 */
spacewar.game_logic.klingons.__GT_klingon_torpedo = (function spacewar$game_logic$klingons$__GT_klingon_torpedo(){
return (new spacewar.game_logic.klingons.klingon_torpedo());
});

spacewar.game_logic.klingons.fire_shot = (function spacewar$game_logic$klingons$fire_shot(klingon,ship,weapon){
var shot_velocity = spacewar.game_logic.klingons.weapon_velocity.call(null,weapon);
var kamikazee_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"kamikazee","kamikazee",1682650476),new cljs.core.Keyword(null,"battle-state","battle-state",186465083).cljs$core$IFn$_invoke$arity$1(klingon));
var shot_velocity__$1 = ((kamikazee_QMARK_)?(spacewar.game_logic.config.kamikazee_shot_velocity_factor * shot_velocity):shot_velocity);
var shot = spacewar.game_logic.shots.__GT_shot.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(klingon),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(klingon),spacewar.game_logic.klingons.firing_solution.call(null,klingon,ship,shot_velocity__$1),spacewar.game_logic.klingons.weapon_type.call(null,weapon));
return cljs.core.assoc.call(null,shot,new cljs.core.Keyword(null,"kamikazee","kamikazee",1682650476),kamikazee_QMARK_);
});
spacewar.game_logic.klingons.apply_weapon_costs = (function spacewar$game_logic$klingons$apply_weapon_costs(klingon,weapon){
var klingon__$1 = cljs.core.update.call(null,cljs.core.update.call(null,klingon,new cljs.core.Keyword(null,"weapon-charge","weapon-charge",55258446),cljs.core._,spacewar.game_logic.klingons.weapon_threshold.call(null,weapon)),new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),cljs.core._,spacewar.game_logic.klingons.weapon_power.call(null,weapon));
var inventory = spacewar.game_logic.klingons.weapon_inventory.call(null,weapon);
if(cljs.core.truth_(inventory)){
return cljs.core.update.call(null,klingon__$1,inventory,cljs.core.dec);
} else {
return klingon__$1;
}
});
spacewar.game_logic.klingons.fire_charged_weapons = (function spacewar$game_logic$klingons$fire_charged_weapons(klingons,ship){
var klingons__$1 = klingons;
var shots = cljs.core.PersistentVector.EMPTY;
var fired_klingons = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,klingons__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fired_klingons,shots], null);
} else {
var klingon = cljs.core.first.call(null,klingons__$1);
var weapon = ((spacewar.game_logic.klingons.ready_to_fire_torpedo_QMARK_.call(null,klingon,ship))?spacewar.game_logic.klingons.__GT_klingon_torpedo.call(null):((spacewar.game_logic.klingons.ready_to_fire_phaser_QMARK_.call(null,klingon,ship))?spacewar.game_logic.klingons.__GT_klingon_phaser.call(null):((spacewar.game_logic.klingons.ready_to_fire_kinetic_QMARK_.call(null,klingon))?spacewar.game_logic.klingons.__GT_klingon_kinetic.call(null):null
)));
if(cljs.core.truth_(weapon)){
var G__1757 = cljs.core.rest.call(null,klingons__$1);
var G__1758 = cljs.core.conj.call(null,shots,spacewar.game_logic.klingons.fire_shot.call(null,klingon,ship,weapon));
var G__1759 = cljs.core.conj.call(null,fired_klingons,spacewar.game_logic.klingons.apply_weapon_costs.call(null,klingon,weapon));
klingons__$1 = G__1757;
shots = G__1758;
fired_klingons = G__1759;
continue;
} else {
var G__1760 = cljs.core.rest.call(null,klingons__$1);
var G__1761 = shots;
var G__1762 = cljs.core.conj.call(null,fired_klingons,klingon);
klingons__$1 = G__1760;
shots = G__1761;
fired_klingons = G__1762;
continue;
}
}
break;
}
});
spacewar.game_logic.klingons.delay_shooting_QMARK_ = (function spacewar$game_logic$klingons$delay_shooting_QMARK_(){
return ((95) > cljs.core.rand.call(null,(100)));
});
spacewar.game_logic.klingons.update_klingon_offense = (function spacewar$game_logic$klingons$update_klingon_offense(ms,world){
if((new cljs.core.Keyword(null,"game-over-timer","game-over-timer",321758852).cljs$core$IFn$_invoke$arity$1(world) > (0))){
return world;
} else {
var map__1763 = world;
var map__1763__$1 = cljs.core.__destructure_map.call(null,map__1763);
var klingons = cljs.core.get.call(null,map__1763__$1,new cljs.core.Keyword(null,"klingons","klingons",-1228954811));
var ship = cljs.core.get.call(null,map__1763__$1,new cljs.core.Keyword(null,"ship","ship",197863473));
var shots = cljs.core.get.call(null,map__1763__$1,new cljs.core.Keyword(null,"shots","shots",-1155689265));
var klingons__$1 = spacewar.game_logic.klingons.charge_weapons.call(null,ms,klingons,ship);
var vec__1764 = ((spacewar.game_logic.klingons.delay_shooting_QMARK_.call(null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klingons__$1,cljs.core.PersistentVector.EMPTY], null):spacewar.game_logic.klingons.fire_charged_weapons.call(null,klingons__$1,ship));
var klingons__$2 = cljs.core.nth.call(null,vec__1764,(0),null);
var new_shots = cljs.core.nth.call(null,vec__1764,(1),null);
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"klingons","klingons",-1228954811),klingons__$2,new cljs.core.Keyword(null,"shots","shots",-1155689265),cljs.core.concat.call(null,shots,new_shots));
}
});
spacewar.game_logic.klingons.thrust_if_battle = (function spacewar$game_logic$klingons$thrust_if_battle(ship,klingon){
var battle_state = new cljs.core.Keyword(null,"battle-state","battle-state",186465083).cljs$core$IFn$_invoke$arity$1(klingon);
var ship_pos = spacewar.util.pos.call(null,ship);
var klingon_pos = spacewar.util.pos.call(null,klingon);
var dist = spacewar.geometry.distance.call(null,ship_pos,klingon_pos);
var degrees = ((cljs.core._EQ_.call(null,ship_pos,klingon_pos))?(0):spacewar.geometry.angle_degrees.call(null,klingon_pos,ship_pos));
var degrees__$1 = (degrees + battle_state.call(null,spacewar.game_logic.config.klingon_evasion_trajectories));
var radians = spacewar.geometry.__GT_radians.call(null,degrees__$1);
var efficiency = (new cljs.core.Keyword(null,"shields","shields",-295786721).cljs$core$IFn$_invoke$arity$1(klingon) / spacewar.game_logic.config.klingon_shields);
var efficiency__$1 = (((2) / (3)) + (efficiency / (3)));
var effective_thrust = (function (){var x__5090__auto__ = klingon.call(null,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000));
var y__5091__auto__ = (spacewar.game_logic.config.klingon_tactical_thrust * efficiency__$1);
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var thrust = spacewar.vector.from_angular.call(null,effective_thrust,radians);
var thrust__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"kamikazee","kamikazee",1682650476),new cljs.core.Keyword(null,"battle-state","battle-state",186465083).cljs$core$IFn$_invoke$arity$1(klingon)))?spacewar.vector.scale.call(null,spacewar.game_logic.config.klingon_kamikazee_thrust_factor,thrust):thrust);
if((spacewar.game_logic.config.klingon_tactical_range < dist)){
return klingon;
} else {
return cljs.core.assoc.call(null,klingon,new cljs.core.Keyword(null,"thrust","thrust",651754168),thrust__$1);
}
});
spacewar.game_logic.klingons.accelerate_klingon = (function spacewar$game_logic$klingons$accelerate_klingon(ms,klingon){
var map__1767 = klingon;
var map__1767__$1 = cljs.core.__destructure_map.call(null,map__1767);
var thrust = cljs.core.get.call(null,map__1767__$1,new cljs.core.Keyword(null,"thrust","thrust",651754168));
var velocity = cljs.core.get.call(null,map__1767__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
var antimatter = cljs.core.get.call(null,map__1767__$1,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000));
if(cljs.core._EQ_.call(null,thrust,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null))){
return klingon;
} else {
var available_antimatter = (function (){var x__5090__auto__ = spacewar.game_logic.config.klingon_antimatter;
var y__5091__auto__ = antimatter;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var full_thrust_antimatter = (ms * spacewar.game_logic.config.klingon_thrust_antimatter);
var thrusting_antimatter = (function (){var x__5090__auto__ = available_antimatter;
var y__5091__auto__ = full_thrust_antimatter;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var efficiency = (thrusting_antimatter / full_thrust_antimatter);
var thrust__$1 = spacewar.vector.scale.call(null,efficiency,thrust);
var acc = spacewar.vector.scale.call(null,ms,thrust__$1);
var velocity__$1 = spacewar.vector.add.call(null,acc,velocity);
var antimatter__$1 = (antimatter - thrusting_antimatter);
return cljs.core.assoc.call(null,klingon,new cljs.core.Keyword(null,"velocity","velocity",-581524355),velocity__$1,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),antimatter__$1);
}
});
spacewar.game_logic.klingons.move_klingon = (function spacewar$game_logic$klingons$move_klingon(ms,klingon){
var map__1768 = klingon;
var map__1768__$1 = cljs.core.__destructure_map.call(null,map__1768);
var x = cljs.core.get.call(null,map__1768__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__1768__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var velocity = cljs.core.get.call(null,map__1768__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
var delta_v = spacewar.vector.scale.call(null,ms,velocity);
var pos = spacewar.vector.add.call(null,delta_v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
return cljs.core.assoc.call(null,klingon,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.first.call(null,pos),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.second.call(null,pos));
});
spacewar.game_logic.klingons.calc_drag = (function spacewar$game_logic$klingons$calc_drag(ms){
return Math.pow(spacewar.game_logic.config.klingon_drag,ms);
});
spacewar.game_logic.klingons.drag_klingon = (function spacewar$game_logic$klingons$drag_klingon(ms,klingon){
var drag_factor = spacewar.game_logic.klingons.calc_drag.call(null,ms);
return cljs.core.update.call(null,klingon,new cljs.core.Keyword(null,"velocity","velocity",-581524355),(function (p1__1769_SHARP_){
return spacewar.vector.scale.call(null,drag_factor,p1__1769_SHARP_);
}));
});
spacewar.game_logic.klingons.full_retreat = (function spacewar$game_logic$klingons$full_retreat(klingon){
return cljs.core.assoc.call(null,klingon,new cljs.core.Keyword(null,"thrust","thrust",651754168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(- spacewar.game_logic.config.klingon_cruise_thrust)], null));
});
spacewar.game_logic.klingons.update_klingon_motion = (function spacewar$game_logic$klingons$update_klingon_motion(ms,world){
var ship = new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(world);
var klingons = new cljs.core.Keyword(null,"klingons","klingons",-1228954811).cljs$core$IFn$_invoke$arity$1(world);
var klingons__$1 = cljs.core.map.call(null,(function (p1__1770_SHARP_){
return spacewar.game_logic.klingons.thrust_if_battle.call(null,ship,p1__1770_SHARP_);
}),klingons);
var klingons__$2 = cljs.core.map.call(null,(function (p1__1771_SHARP_){
return spacewar.game_logic.klingons.accelerate_klingon.call(null,ms,p1__1771_SHARP_);
}),klingons__$1);
var klingons__$3 = cljs.core.map.call(null,(function (p1__1772_SHARP_){
return spacewar.game_logic.klingons.move_klingon.call(null,ms,p1__1772_SHARP_);
}),klingons__$2);
var klingons__$4 = cljs.core.map.call(null,(function (p1__1773_SHARP_){
return spacewar.game_logic.klingons.drag_klingon.call(null,ms,p1__1773_SHARP_);
}),klingons__$3);
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"klingons","klingons",-1228954811),klingons__$4);
});
spacewar.game_logic.klingons.find_thefts = (function spacewar$game_logic$klingons$find_thefts(klingons,bases){
var iter__5480__auto__ = (function spacewar$game_logic$klingons$find_thefts_$_iter__1774(s__1775){
return (new cljs.core.LazySeq(null,(function (){
var s__1775__$1 = s__1775;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__1775__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var klingon = cljs.core.first.call(null,xs__6360__auto__);
var iterys__5476__auto__ = ((function (s__1775__$1,klingon,xs__6360__auto__,temp__5804__auto__){
return (function spacewar$game_logic$klingons$find_thefts_$_iter__1774_$_iter__1776(s__1777){
return (new cljs.core.LazySeq(null,((function (s__1775__$1,klingon,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__1777__$1 = s__1777;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__1777__$1);
if(temp__5804__auto____$1){
var s__1777__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1777__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__1777__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__1779 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__1778 = (0);
while(true){
if((i__1778 < size__5479__auto__)){
var base = cljs.core._nth.call(null,c__5478__auto__,i__1778);
if((spacewar.geometry.distance.call(null,spacewar.util.pos.call(null,klingon),spacewar.util.pos.call(null,base)) < spacewar.game_logic.config.klingon_docking_distance)){
cljs.core.chunk_append.call(null,b__1779,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klingon,base], null));

var G__1780 = (i__1778 + (1));
i__1778 = G__1780;
continue;
} else {
var G__1781 = (i__1778 + (1));
i__1778 = G__1781;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1779),spacewar$game_logic$klingons$find_thefts_$_iter__1774_$_iter__1776.call(null,cljs.core.chunk_rest.call(null,s__1777__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1779),null);
}
} else {
var base = cljs.core.first.call(null,s__1777__$2);
if((spacewar.geometry.distance.call(null,spacewar.util.pos.call(null,klingon),spacewar.util.pos.call(null,base)) < spacewar.game_logic.config.klingon_docking_distance)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klingon,base], null),spacewar$game_logic$klingons$find_thefts_$_iter__1774_$_iter__1776.call(null,cljs.core.rest.call(null,s__1777__$2)));
} else {
var G__1782 = cljs.core.rest.call(null,s__1777__$2);
s__1777__$1 = G__1782;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__1775__$1,klingon,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__1775__$1,klingon,xs__6360__auto__,temp__5804__auto__))
;
var fs__5477__auto__ = cljs.core.seq.call(null,iterys__5476__auto__.call(null,bases));
if(fs__5477__auto__){
return cljs.core.concat.call(null,fs__5477__auto__,spacewar$game_logic$klingons$find_thefts_$_iter__1774.call(null,cljs.core.rest.call(null,s__1775__$1)));
} else {
var G__1783 = cljs.core.rest.call(null,s__1775__$1);
s__1775__$1 = G__1783;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,klingons);
});
spacewar.game_logic.klingons.klingon_steals_antimatter = (function spacewar$game_logic$klingons$klingon_steals_antimatter(p__1784){
var vec__1785 = p__1784;
var thief = cljs.core.nth.call(null,vec__1785,(0),null);
var victim = cljs.core.nth.call(null,vec__1785,(1),null);
var guarding_QMARK_ = (function (){var or__5002__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"refuel","refuel",184033462),null,new cljs.core.Keyword(null,"guard","guard",-873147811),null], null), null).call(null,new cljs.core.Keyword(null,"cruise-state","cruise-state",-1815030882).cljs$core$IFn$_invoke$arity$1(thief));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mission","mission",1740288522),new cljs.core.Keyword(null,"cruise-state","cruise-state",-1815030882).cljs$core$IFn$_invoke$arity$1(thief))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blockade","blockade",-469589591),new cljs.core.Keyword(null,"mission","mission",1740288522).cljs$core$IFn$_invoke$arity$1(thief))));
}
})();
var amount_needed = (spacewar.game_logic.config.klingon_antimatter - new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000).cljs$core$IFn$_invoke$arity$1(thief));
var amount_available = new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000).cljs$core$IFn$_invoke$arity$1(victim);
var amount_stolen = (function (){var x__5090__auto__ = amount_needed;
var y__5091__auto__ = amount_available;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var thief__$1 = cljs.core.update.call(null,thief,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),cljs.core._PLUS_,amount_stolen);
var victim__$1 = cljs.core.update.call(null,victim,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),cljs.core._,amount_stolen);
var thief__$2 = (cljs.core.truth_(guarding_QMARK_)?cljs.core.assoc.call(null,thief__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"thrust","thrust",651754168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)):thief__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thief__$2,victim__$1], null);
});
spacewar.game_logic.klingons.steal_antimatter = (function spacewar$game_logic$klingons$steal_antimatter(thefts){
var thieves = spacewar.util.pos_map.call(null,cljs.core.map.call(null,cljs.core.first,thefts));
var victims = spacewar.util.pos_map.call(null,cljs.core.map.call(null,cljs.core.second,thefts));
var thefts__$1 = thefts;
var thieves__$1 = thieves;
var victims__$1 = victims;
while(true){
if(cljs.core.empty_QMARK_.call(null,thefts__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vals.call(null,thieves__$1),cljs.core.vals.call(null,victims__$1)], null);
} else {
var theft = cljs.core.first.call(null,thefts__$1);
var thief = cljs.core.get.call(null,thieves__$1,spacewar.util.pos.call(null,cljs.core.first.call(null,theft)));
var victim = cljs.core.get.call(null,victims__$1,spacewar.util.pos.call(null,cljs.core.second.call(null,theft)));
var vec__1788 = spacewar.game_logic.klingons.klingon_steals_antimatter.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thief,victim], null));
var thief__$1 = cljs.core.nth.call(null,vec__1788,(0),null);
var victim__$1 = cljs.core.nth.call(null,vec__1788,(1),null);
var G__1791 = cljs.core.rest.call(null,thefts__$1);
var G__1792 = cljs.core.assoc.call(null,thieves__$1,spacewar.util.pos.call(null,thief__$1),thief__$1);
var G__1793 = cljs.core.assoc.call(null,victims__$1,spacewar.util.pos.call(null,victim__$1),victim__$1);
thefts__$1 = G__1791;
thieves__$1 = G__1792;
victims__$1 = G__1793;
continue;
}
break;
}
});
spacewar.game_logic.klingons.klingons_steal_antimatter = (function spacewar$game_logic$klingons$klingons_steal_antimatter(world){
var map__1794 = world;
var map__1794__$1 = cljs.core.__destructure_map.call(null,map__1794);
var klingons = cljs.core.get.call(null,map__1794__$1,new cljs.core.Keyword(null,"klingons","klingons",-1228954811));
var bases = cljs.core.get.call(null,map__1794__$1,new cljs.core.Keyword(null,"bases","bases",-1036892420));
var thefts = spacewar.game_logic.klingons.find_thefts.call(null,klingons,bases);
var thieves = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.first,thefts));
var victims = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.second,thefts));
var innocents = cljs.core.vec.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,klingons),thieves));
var unmolested = cljs.core.vec.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,bases),victims));
var vec__1795 = spacewar.game_logic.klingons.steal_antimatter.call(null,thefts);
var thieves__$1 = cljs.core.nth.call(null,vec__1795,(0),null);
var victims__$1 = cljs.core.nth.call(null,vec__1795,(1),null);
var klingons__$1 = cljs.core.concat.call(null,thieves__$1,innocents);
var bases__$1 = cljs.core.concat.call(null,victims__$1,unmolested);
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"klingons","klingons",-1228954811),klingons__$1,new cljs.core.Keyword(null,"bases","bases",-1036892420),bases__$1);
});
spacewar.game_logic.klingons.random_battle_state = (function spacewar$game_logic$klingons$random_battle_state(){
var selected_index = cljs.core.rand_int.call(null,cljs.core.count.call(null,spacewar.game_logic.config.klingon_battle_states));
return cljs.core.nth.call(null,spacewar.game_logic.config.klingon_battle_states,selected_index);
});
spacewar.game_logic.klingons.change_expired_battle_state = (function spacewar$game_logic$klingons$change_expired_battle_state(klingon){
var map__1798 = klingon;
var map__1798__$1 = cljs.core.__destructure_map.call(null,map__1798);
var battle_state_age = cljs.core.get.call(null,map__1798__$1,new cljs.core.Keyword(null,"battle-state-age","battle-state-age",1309571432));
var battle_state = cljs.core.get.call(null,map__1798__$1,new cljs.core.Keyword(null,"battle-state","battle-state",186465083));
if((battle_state_age >= spacewar.game_logic.config.klingon_battle_state_transition_age)){
return spacewar.game_logic.klingons.random_battle_state.call(null);
} else {
return battle_state;
}
});
spacewar.game_logic.klingons.update_klingon_state = (function spacewar$game_logic$klingons$update_klingon_state(ms,ship,klingon){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"kamikazee","kamikazee",1682650476),new cljs.core.Keyword(null,"battle-state","battle-state",186465083).cljs$core$IFn$_invoke$arity$1(klingon))){
return klingon;
} else {
var map__1799 = klingon;
var map__1799__$1 = cljs.core.__destructure_map.call(null,map__1799);
var antimatter = cljs.core.get.call(null,map__1799__$1,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000));
var battle_state_age = cljs.core.get.call(null,map__1799__$1,new cljs.core.Keyword(null,"battle-state-age","battle-state-age",1309571432));
var dist = spacewar.geometry.distance.call(null,spacewar.util.pos.call(null,klingon),spacewar.util.pos.call(null,ship));
var new_battle_state = (function (){var pred__1800 = cljs.core._LT__EQ_;
var expr__1801 = dist;
if(cljs.core.truth_(pred__1800.call(null,spacewar.game_logic.config.klingon_tactical_range,expr__1801))){
return new cljs.core.Keyword(null,"no-battle","no-battle",-1425286057);
} else {
if(cljs.core.truth_(pred__1800.call(null,spacewar.game_logic.config.klingon_evasion_limit,expr__1801))){
return new cljs.core.Keyword(null,"advancing","advancing",21793874);
} else {
return spacewar.game_logic.klingons.change_expired_battle_state.call(null,klingon);
}
}
})();
var new_battle_state__$1 = (((((antimatter <= spacewar.game_logic.config.klingon_antimatter_runaway_threshold)) && ((dist <= spacewar.game_logic.config.klingon_tactical_range))))?(((spacewar.game_logic.config.klingon_kamikazee_probability < cljs.core.rand.call(null)))?new cljs.core.Keyword(null,"retreating","retreating",939624530):new cljs.core.Keyword(null,"kamikazee","kamikazee",1682650476)):new_battle_state);
var age = (((battle_state_age >= spacewar.game_logic.config.klingon_battle_state_transition_age))?(0):(battle_state_age + ms));
return cljs.core.assoc.call(null,klingon,new cljs.core.Keyword(null,"battle-state","battle-state",186465083),new_battle_state__$1,new cljs.core.Keyword(null,"battle-state-age","battle-state-age",1309571432),age);
}
});
spacewar.game_logic.klingons.update_klingons_state = (function spacewar$game_logic$klingons$update_klingons_state(ms,world){
var map__1804 = world;
var map__1804__$1 = cljs.core.__destructure_map.call(null,map__1804);
var ship = cljs.core.get.call(null,map__1804__$1,new cljs.core.Keyword(null,"ship","ship",197863473));
var klingons = cljs.core.get.call(null,map__1804__$1,new cljs.core.Keyword(null,"klingons","klingons",-1228954811));
var klingons__$1 = cljs.core.map.call(null,(function (p1__1803_SHARP_){
return spacewar.game_logic.klingons.update_klingon_state.call(null,ms,ship,p1__1803_SHARP_);
}),klingons);
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"klingons","klingons",-1228954811),klingons__$1);
});
spacewar.game_logic.klingons.update_torpedo_and_kinetic_production = (function spacewar$game_logic$klingons$update_torpedo_and_kinetic_production(ms,p__1805){
var map__1806 = p__1805;
var map__1806__$1 = cljs.core.__destructure_map.call(null,map__1806);
var klingon = map__1806__$1;
var antimatter = cljs.core.get.call(null,map__1806__$1,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000));
var torpedos = cljs.core.get.call(null,map__1806__$1,new cljs.core.Keyword(null,"torpedos","torpedos",344905121));
var kinetics = cljs.core.get.call(null,map__1806__$1,new cljs.core.Keyword(null,"kinetics","kinetics",-707133266));
var deficit = (spacewar.game_logic.config.klingon_torpedos - torpedos);
var max_production = (ms * spacewar.game_logic.config.klingon_torpedo_production_rate);
var can_make_torpedos_QMARK_ = (antimatter < spacewar.game_logic.config.klingon_torpedo_antimatter_threshold);
var new_torpedos = ((can_make_torpedos_QMARK_)?(0):(function (){var x__5090__auto__ = deficit;
var y__5091__auto__ = max_production;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})());
var efficiency = (new_torpedos / max_production);
var antimatter_cost = ((ms * spacewar.game_logic.config.klingon_torpedo_antimatter_cost) * efficiency);
var torpedos__$1 = (torpedos + new_torpedos);
var antimatter__$1 = (antimatter - antimatter_cost);
var kinetics__$1 = (function (){var x__5090__auto__ = spacewar.game_logic.config.klingon_kinetics;
var y__5091__auto__ = (kinetics + (ms * spacewar.game_logic.config.klingon_kinetic_production_rate));
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return cljs.core.assoc.call(null,klingon,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),antimatter__$1,new cljs.core.Keyword(null,"torpedos","torpedos",344905121),torpedos__$1,new cljs.core.Keyword(null,"kinetics","kinetics",-707133266),kinetics__$1);
});
spacewar.game_logic.klingons.update_klingon_torpedo_production = (function spacewar$game_logic$klingons$update_klingon_torpedo_production(ms,world){
var klingons = new cljs.core.Keyword(null,"klingons","klingons",-1228954811).cljs$core$IFn$_invoke$arity$1(world);
var klingons__$1 = cljs.core.map.call(null,(function (p1__1807_SHARP_){
return spacewar.game_logic.klingons.update_torpedo_and_kinetic_production.call(null,ms,p1__1807_SHARP_);
}),klingons);
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"klingons","klingons",-1228954811),klingons__$1);
});
spacewar.game_logic.klingons.remove_klingons_out_of_range = (function spacewar$game_logic$klingons$remove_klingons_out_of_range(_ms,world){
var klingons = new cljs.core.Keyword(null,"klingons","klingons",-1228954811).cljs$core$IFn$_invoke$arity$1(world);
var klingons__$1 = cljs.core.remove.call(null,(function (p1__1808_SHARP_){
return (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1__1808_SHARP_) < (-10000));
}),klingons);
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"klingons","klingons",-1228954811),klingons__$1);
});
spacewar.game_logic.klingons.update_klingons = (function spacewar$game_logic$klingons$update_klingons(ms,world){
return spacewar.game_logic.klingons.remove_klingons_out_of_range.call(null,ms,spacewar.game_logic.klingons.update_klingon_torpedo_production.call(null,ms,spacewar.game_logic.klingons.update_klingon_motion.call(null,ms,spacewar.game_logic.klingons.update_klingon_offense.call(null,ms,spacewar.game_logic.klingons.update_klingon_defense.call(null,ms,spacewar.game_logic.klingons.update_klingons_state.call(null,ms,world))))));
});
spacewar.game_logic.klingons.thrust_to_nearest_base = (function spacewar$game_logic$klingons$thrust_to_nearest_base(klingon,bases){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"battle-state","battle-state",186465083).cljs$core$IFn$_invoke$arity$1(klingon),new cljs.core.Keyword(null,"no-battle","no-battle",-1425286057))){
if(cljs.core.empty_QMARK_.call(null,bases)){
return cljs.core.assoc.call(null,klingon,new cljs.core.Keyword(null,"cruise-state","cruise-state",-1815030882),new cljs.core.Keyword(null,"patrol","patrol",-1378804753));
} else {
var distance_map = cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__1809_SHARP_){
return (new cljs.core.List(null,spacewar.geometry.distance.call(null,spacewar.util.pos.call(null,klingon),spacewar.util.pos.call(null,p1__1809_SHARP_)),(new cljs.core.List(null,p1__1809_SHARP_,null,(1),null)),(2),null));
}),bases)));
var nearest_base = distance_map.call(null,cljs.core.apply.call(null,cljs.core.min,cljs.core.keys.call(null,distance_map)));
var angle_to_base = spacewar.geometry.angle_degrees.call(null,spacewar.util.pos.call(null,klingon),spacewar.util.pos.call(null,nearest_base));
var thrust = spacewar.vector.from_angular.call(null,spacewar.game_logic.config.klingon_cruise_thrust,spacewar.geometry.__GT_radians.call(null,angle_to_base));
return cljs.core.assoc.call(null,klingon,new cljs.core.Keyword(null,"thrust","thrust",651754168),thrust);
}
} else {
return klingon;
}
});
spacewar.game_logic.klingons.thrust_towards_ship = (function spacewar$game_logic$klingons$thrust_towards_ship(klingon,ship){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"battle-state","battle-state",186465083).cljs$core$IFn$_invoke$arity$1(klingon),new cljs.core.Keyword(null,"no-battle","no-battle",-1425286057))){
var angle_to_ship = spacewar.geometry.angle_degrees.call(null,spacewar.util.pos.call(null,klingon),spacewar.util.pos.call(null,ship));
var thrust = spacewar.vector.from_angular.call(null,spacewar.game_logic.config.klingon_cruise_thrust,spacewar.geometry.__GT_radians.call(null,angle_to_ship));
return cljs.core.assoc.call(null,klingon,new cljs.core.Keyword(null,"thrust","thrust",651754168),thrust);
} else {
return klingon;
}
});
spacewar.game_logic.klingons.thrust_toward_mission = (function spacewar$game_logic$klingons$thrust_toward_mission(klingon,ship,bases){
var pred__1810 = cljs.core._EQ_;
var expr__1811 = new cljs.core.Keyword(null,"mission","mission",1740288522).cljs$core$IFn$_invoke$arity$1(klingon);
if(cljs.core.truth_(pred__1810.call(null,new cljs.core.Keyword(null,"seek-and-destroy","seek-and-destroy",-1082537405),expr__1811))){
return spacewar.game_logic.klingons.thrust_towards_ship.call(null,klingon,ship);
} else {
if(cljs.core.truth_(pred__1810.call(null,new cljs.core.Keyword(null,"blockade","blockade",-469589591),expr__1811))){
return spacewar.game_logic.klingons.thrust_to_nearest_base.call(null,klingon,bases);
} else {
if(cljs.core.truth_(pred__1810.call(null,new cljs.core.Keyword(null,"escape-corbomite","escape-corbomite",-646606924),expr__1811))){
return spacewar.game_logic.klingons.full_retreat.call(null,klingon);
} else {
return klingon;
}
}
}
});
spacewar.game_logic.klingons.thrust_to_nearest_antimatter_source = (function spacewar$game_logic$klingons$thrust_to_nearest_antimatter_source(klingon,stars,bases){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"battle-state","battle-state",186465083).cljs$core$IFn$_invoke$arity$1(klingon),new cljs.core.Keyword(null,"no-battle","no-battle",-1425286057))){
var fraction_fuel_remaining = (new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000).cljs$core$IFn$_invoke$arity$1(klingon) / spacewar.game_logic.config.klingon_antimatter);
var target_classes = (function (){var pred__1817 = cljs.core._LT__EQ_;
var expr__1818 = fraction_fuel_remaining;
if(cljs.core.truth_(pred__1817.call(null,0.5,expr__1818))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"o","o",-1350007228),null,new cljs.core.Keyword(null,"b","b",1482224470),null], null), null);
} else {
if(cljs.core.truth_(pred__1817.call(null,0.3,expr__1818))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"o","o",-1350007228),null,new cljs.core.Keyword(null,"b","b",1482224470),null,new cljs.core.Keyword(null,"f","f",-1597136552),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null);
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"o","o",-1350007228),null,new cljs.core.Keyword(null,"m","m",1632677161),null,new cljs.core.Keyword(null,"k","k",-2146297393),null,new cljs.core.Keyword(null,"g","g",1738089905),null,new cljs.core.Keyword(null,"b","b",1482224470),null,new cljs.core.Keyword(null,"f","f",-1597136552),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null);
}
}
})();
var antimatter_stars = cljs.core.filter.call(null,(function (p1__1813_SHARP_){
return target_classes.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__1813_SHARP_));
}),stars);
var antimatter_bases = cljs.core.filter.call(null,(function (p1__1814_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"antimatter-factory","antimatter-factory",218121254),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__1814_SHARP_));
}),bases);
var base_distance_map = cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__1815_SHARP_){
return (new cljs.core.List(null,spacewar.geometry.distance.call(null,spacewar.util.pos.call(null,klingon),spacewar.util.pos.call(null,p1__1815_SHARP_)),(new cljs.core.List(null,p1__1815_SHARP_,null,(1),null)),(2),null));
}),antimatter_bases)));
var star_distance_map = cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__1816_SHARP_){
return (new cljs.core.List(null,spacewar.geometry.distance.call(null,spacewar.util.pos.call(null,klingon),spacewar.util.pos.call(null,p1__1816_SHARP_)),(new cljs.core.List(null,p1__1816_SHARP_,null,(1),null)),(2),null));
}),antimatter_stars)));
var distance_to_nearest_antimatter_star = cljs.core.apply.call(null,cljs.core.min,cljs.core.keys.call(null,star_distance_map));
var distance_to_nearest_antimatter_base = ((cljs.core.empty_QMARK_.call(null,antimatter_bases))?(1000000000):cljs.core.apply.call(null,cljs.core.min,cljs.core.keys.call(null,base_distance_map)));
var nearest_antimatter_star = star_distance_map.call(null,distance_to_nearest_antimatter_star);
var nearest_antimatter_base = base_distance_map.call(null,distance_to_nearest_antimatter_base);
var angle_to_target = (((distance_to_nearest_antimatter_base < spacewar.game_logic.config.klingon_antimatter_base_in_range))?spacewar.geometry.angle_degrees.call(null,spacewar.util.pos.call(null,klingon),spacewar.util.pos.call(null,nearest_antimatter_base)):spacewar.geometry.angle_degrees.call(null,spacewar.util.pos.call(null,klingon),spacewar.util.pos.call(null,nearest_antimatter_star)));
var thrust = spacewar.vector.from_angular.call(null,spacewar.game_logic.config.klingon_cruise_thrust,spacewar.geometry.__GT_radians.call(null,angle_to_target));
return cljs.core.assoc.call(null,klingon,new cljs.core.Keyword(null,"thrust","thrust",651754168),thrust);
} else {
return klingon;
}
});
spacewar.game_logic.klingons.thrust_in_random_direction = (function spacewar$game_logic$klingons$thrust_in_random_direction(klingon){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"battle-state","battle-state",186465083).cljs$core$IFn$_invoke$arity$1(klingon),new cljs.core.Keyword(null,"no-battle","no-battle",-1425286057))){
var angle = cljs.core.rand.call(null,((2) * Math.PI));
var tx = (spacewar.game_logic.config.klingon_cruise_thrust * Math.cos(angle));
var ty = (spacewar.game_logic.config.klingon_cruise_thrust * Math.sin(angle));
return cljs.core.assoc.call(null,klingon,new cljs.core.Keyword(null,"thrust","thrust",651754168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,ty], null));
} else {
return klingon;
}
});
spacewar.game_logic.klingons.occupying_QMARK_ = (function spacewar$game_logic$klingons$occupying_QMARK_(base,klingon){
var distance = spacewar.geometry.distance.call(null,spacewar.util.pos.call(null,klingon),spacewar.util.pos.call(null,base));
return (distance <= spacewar.game_logic.config.klingon_docking_distance);
});
spacewar.game_logic.klingons.unoccupied_base_QMARK_ = (function spacewar$game_logic$klingons$unoccupied_base_QMARK_(base,klingons){
var occupiers = cljs.core.filter.call(null,(function (p1__1820_SHARP_){
return spacewar.game_logic.klingons.occupying_QMARK_.call(null,base,p1__1820_SHARP_);
}),klingons);
return (cljs.core.count.call(null,occupiers) <= (3));
});
spacewar.game_logic.klingons.find_unoccupied_bases = (function spacewar$game_logic$klingons$find_unoccupied_bases(bases,klingons){
return cljs.core.filter.call(null,(function (p1__1821_SHARP_){
return spacewar.game_logic.klingons.unoccupied_base_QMARK_.call(null,p1__1821_SHARP_,klingons);
}),bases);
});
spacewar.game_logic.klingons.cruise_klingons = (function spacewar$game_logic$klingons$cruise_klingons(p__1825){
var map__1826 = p__1825;
var map__1826__$1 = cljs.core.__destructure_map.call(null,map__1826);
var world = map__1826__$1;
var ship = cljs.core.get.call(null,map__1826__$1,new cljs.core.Keyword(null,"ship","ship",197863473));
var klingons = cljs.core.get.call(null,map__1826__$1,new cljs.core.Keyword(null,"klingons","klingons",-1228954811));
var bases = cljs.core.get.call(null,map__1826__$1,new cljs.core.Keyword(null,"bases","bases",-1036892420));
var stars = cljs.core.get.call(null,map__1826__$1,new cljs.core.Keyword(null,"stars","stars",-556837771));
var cruise_states = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"cruise-state","cruise-state",-1815030882),klingons);
var on_mission_klingons = new cljs.core.Keyword(null,"mission","mission",1740288522).cljs$core$IFn$_invoke$arity$1(cruise_states);
var patrolling_klingons = new cljs.core.Keyword(null,"patrol","patrol",-1378804753).cljs$core$IFn$_invoke$arity$1(cruise_states);
var guarding_klingons = new cljs.core.Keyword(null,"guard","guard",-873147811).cljs$core$IFn$_invoke$arity$1(cruise_states);
var refuelling_klingons = new cljs.core.Keyword(null,"refuel","refuel",184033462).cljs$core$IFn$_invoke$arity$1(cruise_states);
var unoccupied_bases = spacewar.game_logic.klingons.find_unoccupied_bases.call(null,bases,klingons);
var on_mission_klingons__$1 = cljs.core.map.call(null,(function (p1__1822_SHARP_){
return spacewar.game_logic.klingons.thrust_toward_mission.call(null,p1__1822_SHARP_,ship,unoccupied_bases);
}),on_mission_klingons);
var guarding_klingons__$1 = cljs.core.map.call(null,(function (p1__1823_SHARP_){
return spacewar.game_logic.klingons.thrust_to_nearest_base.call(null,p1__1823_SHARP_,unoccupied_bases);
}),guarding_klingons);
var refuelling_klingons__$1 = cljs.core.map.call(null,(function (p1__1824_SHARP_){
return spacewar.game_logic.klingons.thrust_to_nearest_antimatter_source.call(null,p1__1824_SHARP_,stars,bases);
}),refuelling_klingons);
var klingons__$1 = cljs.core.concat.call(null,on_mission_klingons__$1,patrolling_klingons,guarding_klingons__$1,refuelling_klingons__$1);
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"klingons","klingons",-1228954811),klingons__$1);
});
spacewar.game_logic.klingons.cruise_transition = (function spacewar$game_logic$klingons$cruise_transition(p__1827){
var map__1828 = p__1827;
var map__1828__$1 = cljs.core.__destructure_map.call(null,map__1828);
var antimatter = cljs.core.get.call(null,map__1828__$1,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000));
var torpedos = cljs.core.get.call(null,map__1828__$1,new cljs.core.Keyword(null,"torpedos","torpedos",344905121));
var antimatter__$1 = ((antimatter / spacewar.game_logic.config.klingon_antimatter) / 0.01);
var torpedos__$1 = ((torpedos / spacewar.game_logic.config.klingon_torpedos) / 0.01);
if((antimatter__$1 <= (40))){
return new cljs.core.Keyword(null,"low-antimatter","low-antimatter",-550197054);
} else {
if((torpedos__$1 <= (40))){
return new cljs.core.Keyword(null,"low-torpedo","low-torpedo",-1869667544);
} else {
if((((antimatter__$1 > (40))) && ((torpedos__$1 > (60))))){
return new cljs.core.Keyword(null,"well-supplied","well-supplied",-2116769797);
} else {
return new cljs.core.Keyword(null,"capable","capable",691367294);

}
}
}
});
spacewar.game_logic.klingons.change_cruise_state = (function spacewar$game_logic$klingons$change_cruise_state(klingon){
var antimatter = new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000).cljs$core$IFn$_invoke$arity$1(klingon);
var transition = spacewar.game_logic.klingons.cruise_transition.call(null,klingon);
var cruise_state = new cljs.core.Keyword(null,"cruise-state","cruise-state",-1815030882).cljs$core$IFn$_invoke$arity$1(klingon);
var new_state = ((((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"refuel","refuel",184033462),cruise_state)) && ((antimatter < spacewar.game_logic.config.klingon_antimatter))))?new cljs.core.Keyword(null,"refuel","refuel",184033462):transition.cljs$core$IFn$_invoke$arity$1(cruise_state.call(null,spacewar.game_logic.klingons.cruise_fsm)));
return cljs.core.assoc.call(null,klingon,new cljs.core.Keyword(null,"cruise-state","cruise-state",-1815030882),new_state);
});
spacewar.game_logic.klingons.change_all_cruise_states = (function spacewar$game_logic$klingons$change_all_cruise_states(p__1829){
var map__1830 = p__1829;
var map__1830__$1 = cljs.core.__destructure_map.call(null,map__1830);
var world = map__1830__$1;
var klingons = cljs.core.get.call(null,map__1830__$1,new cljs.core.Keyword(null,"klingons","klingons",-1228954811));
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"klingons","klingons",-1228954811),cljs.core.map.call(null,spacewar.game_logic.klingons.change_cruise_state,klingons));
});
spacewar.game_logic.klingons.produce_antimatter = (function spacewar$game_logic$klingons$produce_antimatter(ms,klingon,stars){
var antimatter = new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000).cljs$core$IFn$_invoke$arity$1(klingon);
var thrust = new cljs.core.Keyword(null,"thrust","thrust",651754168).cljs$core$IFn$_invoke$arity$1(klingon);
var velocity = new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(klingon);
var refueling_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"refuel","refuel",184033462),new cljs.core.Keyword(null,"cruise-state","cruise-state",-1815030882).cljs$core$IFn$_invoke$arity$1(klingon));
var deficit = (spacewar.game_logic.config.klingon_antimatter - antimatter);
var distance_map = cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__1831_SHARP_){
return (new cljs.core.List(null,spacewar.geometry.distance.call(null,spacewar.util.pos.call(null,klingon),spacewar.util.pos.call(null,p1__1831_SHARP_)),(new cljs.core.List(null,p1__1831_SHARP_,null,(1),null)),(2),null));
}),stars)));
var distance_to_nearest_star = cljs.core.apply.call(null,cljs.core.min,cljs.core.keys.call(null,distance_map));
var in_range_QMARK_ = (distance_to_nearest_star < spacewar.game_logic.config.klingon_range_for_antimatter_production);
var nearest_star = distance_map.call(null,distance_to_nearest_star);
var production = ((in_range_QMARK_)?(ms * spacewar.game_logic.config.klingon_antimatter_production_rate.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(nearest_star))):(0));
var thrust__$1 = ((((in_range_QMARK_) && (refueling_QMARK_)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):thrust);
var velocity__$1 = ((((in_range_QMARK_) && (refueling_QMARK_)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):velocity);
return cljs.core.assoc.call(null,klingon,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),(antimatter + (function (){var x__5090__auto__ = deficit;
var y__5091__auto__ = production;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})()),new cljs.core.Keyword(null,"thrust","thrust",651754168),thrust__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355),velocity__$1);
});
spacewar.game_logic.klingons.klingons_produce_antimatter = (function spacewar$game_logic$klingons$klingons_produce_antimatter(p__1833){
var map__1834 = p__1833;
var map__1834__$1 = cljs.core.__destructure_map.call(null,map__1834);
var world = map__1834__$1;
var klingons = cljs.core.get.call(null,map__1834__$1,new cljs.core.Keyword(null,"klingons","klingons",-1228954811));
var stars = cljs.core.get.call(null,map__1834__$1,new cljs.core.Keyword(null,"stars","stars",-556837771));
var klingons__$1 = cljs.core.map.call(null,(function (p1__1832_SHARP_){
return spacewar.game_logic.klingons.produce_antimatter.call(null,(1000),p1__1832_SHARP_,stars);
}),klingons);
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"klingons","klingons",-1228954811),klingons__$1);
});
spacewar.game_logic.klingons.update_klingons_per_second = (function spacewar$game_logic$klingons$update_klingons_per_second(world){
return spacewar.game_logic.klingons.klingons_produce_antimatter.call(null,spacewar.game_logic.klingons.klingons_steal_antimatter.call(null,spacewar.game_logic.klingons.cruise_klingons.call(null,world)));
});
spacewar.game_logic.klingons.change_patrol_direction = (function spacewar$game_logic$klingons$change_patrol_direction(p__1835){
var map__1836 = p__1835;
var map__1836__$1 = cljs.core.__destructure_map.call(null,map__1836);
var world = map__1836__$1;
var klingons = cljs.core.get.call(null,map__1836__$1,new cljs.core.Keyword(null,"klingons","klingons",-1228954811));
var cruise_states = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"cruise-state","cruise-state",-1815030882),klingons);
var on_mission_klingons = new cljs.core.Keyword(null,"mission","mission",1740288522).cljs$core$IFn$_invoke$arity$1(cruise_states);
var patrolling_klingons = new cljs.core.Keyword(null,"patrol","patrol",-1378804753).cljs$core$IFn$_invoke$arity$1(cruise_states);
var guarding_klingons = new cljs.core.Keyword(null,"guard","guard",-873147811).cljs$core$IFn$_invoke$arity$1(cruise_states);
var refuelling_klingons = new cljs.core.Keyword(null,"refuel","refuel",184033462).cljs$core$IFn$_invoke$arity$1(cruise_states);
var patrolling_klingons__$1 = cljs.core.map.call(null,spacewar.game_logic.klingons.thrust_in_random_direction,patrolling_klingons);
var klingons__$1 = cljs.core.concat.call(null,on_mission_klingons,patrolling_klingons__$1,guarding_klingons,refuelling_klingons);
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"klingons","klingons",-1228954811),klingons__$1);
});
spacewar.game_logic.klingons.add_klingons_from_praxis = (function spacewar$game_logic$klingons$add_klingons_from_praxis(world){
var minutes = cljs.core.get.call(null,world,new cljs.core.Keyword(null,"minutes","minutes",1319166394),(0));
var probability = (minutes / spacewar.game_logic.config.minutes_till_full_klingon_invasion);
if((cljs.core.rand.call(null) < probability)){
return spacewar.game_logic.klingons.new_klingon_from_praxis.call(null,world);
} else {
return world;
}
});
spacewar.game_logic.klingons.try_change_to_seek_and_destroy = (function spacewar$game_logic$klingons$try_change_to_seek_and_destroy(klingon){
if((cljs.core.rand.call(null) < spacewar.game_logic.config.klingon_odds_to_become_destroyer)){
return cljs.core.assoc.call(null,klingon,new cljs.core.Keyword(null,"mission","mission",1740288522),new cljs.core.Keyword(null,"seek-and-destroy","seek-and-destroy",-1082537405));
} else {
return klingon;
}
});
spacewar.game_logic.klingons.change_blockade_to_seek_and_destroy = (function spacewar$game_logic$klingons$change_blockade_to_seek_and_destroy(p__1837){
var map__1838 = p__1837;
var map__1838__$1 = cljs.core.__destructure_map.call(null,map__1838);
var world = map__1838__$1;
var klingons = cljs.core.get.call(null,map__1838__$1,new cljs.core.Keyword(null,"klingons","klingons",-1228954811));
var klingons__$1 = cljs.core.map.call(null,spacewar.game_logic.klingons.try_change_to_seek_and_destroy,klingons);
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"klingons","klingons",-1228954811),klingons__$1);
});
spacewar.game_logic.klingons.change_mission_to_escape = (function spacewar$game_logic$klingons$change_mission_to_escape(klingon){
return cljs.core.assoc.call(null,klingon,new cljs.core.Keyword(null,"mission","mission",1740288522),new cljs.core.Keyword(null,"escape-corbomite","escape-corbomite",-646606924),new cljs.core.Keyword(null,"cruise-state","cruise-state",-1815030882),new cljs.core.Keyword(null,"mission","mission",1740288522));
});
spacewar.game_logic.klingons.check_escape_corbomite = (function spacewar$game_logic$klingons$check_escape_corbomite(p__1839){
var map__1840 = p__1839;
var map__1840__$1 = cljs.core.__destructure_map.call(null,map__1840);
var world = map__1840__$1;
var klingons = cljs.core.get.call(null,map__1840__$1,new cljs.core.Keyword(null,"klingons","klingons",-1228954811));
var ship = cljs.core.get.call(null,map__1840__$1,new cljs.core.Keyword(null,"ship","ship",197863473));
var corbomite = new cljs.core.Keyword(null,"corbomite-device-installed","corbomite-device-installed",-2093492516).cljs$core$IFn$_invoke$arity$1(ship);
var klingons__$1 = (cljs.core.truth_(corbomite)?cljs.core.map.call(null,spacewar.game_logic.klingons.change_mission_to_escape,klingons):klingons);
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"klingons","klingons",-1228954811),klingons__$1);
});
spacewar.game_logic.klingons.update_klingons_per_minute = (function spacewar$game_logic$klingons$update_klingons_per_minute(world){
return spacewar.game_logic.klingons.add_klingons_from_praxis.call(null,spacewar.game_logic.klingons.check_escape_corbomite.call(null,spacewar.game_logic.klingons.change_blockade_to_seek_and_destroy.call(null,spacewar.game_logic.klingons.change_all_cruise_states.call(null,spacewar.game_logic.klingons.change_patrol_direction.call(null,world)))));
});

//# sourceMappingURL=klingons.js.map
