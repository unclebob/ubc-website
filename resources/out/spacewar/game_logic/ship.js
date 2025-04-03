// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('spacewar.game_logic.ship');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('cljs.spec.alpha');
goog.require('spacewar.game_logic.bases');
goog.require('spacewar.game_logic.config');
goog.require('spacewar.game_logic.world');
goog.require('spacewar.geometry');
goog.require('spacewar.util');
goog.require('spacewar.vector');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.ship","x","spacewar.game-logic.ship/x",-330675356),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.ship","y","spacewar.game-logic.ship/y",-413132037),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.ship","warp","spacewar.game-logic.ship/warp",1481631115),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.ship","warp-charge","spacewar.game-logic.ship/warp-charge",-353349944),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.ship","impulse","spacewar.game-logic.ship/impulse",-1927812067),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.ship","heading","spacewar.game-logic.ship/heading",569690588),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1454#","p1__1454#",-1294627075,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),(0),new cljs.core.Symbol(null,"p1__1454#","p1__1454#",-1294627075,null),(360)))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),(0),new cljs.core.Symbol(null,"%","%",-950237169,null),(360)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.number_QMARK_,(function (p1__1454_SHARP_){
return ((((0) <= p1__1454_SHARP_)) && ((p1__1454_SHARP_ <= (360))));
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.ship","velocity","spacewar.game-logic.ship/velocity",1194036852),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.number_QMARK_,cljs.core.number_QMARK_], null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.ship","selected-view","spacewar.game-logic.ship/selected-view",-1376122818),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"front-view","front-view",-1631827770),"null",new cljs.core.Keyword(null,"tact-view","tact-view",780498246),"null",new cljs.core.Keyword(null,"strat-view","strat-view",-1761243979),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"front-view","front-view",-1631827770),null,new cljs.core.Keyword(null,"tact-view","tact-view",780498246),null,new cljs.core.Keyword(null,"strat-view","strat-view",-1761243979),null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.ship","selected-weapon","spacewar.game-logic.ship/selected-weapon",1911764967),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"torpedo","torpedo",275681140),"null",new cljs.core.Keyword(null,"none","none",1333468478),"null",new cljs.core.Keyword(null,"phaser","phaser",-1448421666),"null",new cljs.core.Keyword(null,"kinetic","kinetic",-451191810),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"torpedo","torpedo",275681140),null,new cljs.core.Keyword(null,"none","none",1333468478),null,new cljs.core.Keyword(null,"phaser","phaser",-1448421666),null,new cljs.core.Keyword(null,"kinetic","kinetic",-451191810),null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.ship","selected-engine","spacewar.game-logic.ship/selected-engine",739068486),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"impulse","impulse",486537698),"null",new cljs.core.Keyword(null,"warp","warp",-931589598),"null",new cljs.core.Keyword(null,"none","none",1333468478),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"impulse","impulse",486537698),null,new cljs.core.Keyword(null,"warp","warp",-931589598),null,new cljs.core.Keyword(null,"none","none",1333468478),null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.ship","target-bearing","spacewar.game-logic.ship/target-bearing",751449219),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1455#","p1__1455#",28445128,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),(0),new cljs.core.Symbol(null,"p1__1455#","p1__1455#",28445128,null),(360)))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),(0),new cljs.core.Symbol(null,"%","%",-950237169,null),(360)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.number_QMARK_,(function (p1__1455_SHARP_){
return ((((0) <= p1__1455_SHARP_)) && ((p1__1455_SHARP_ <= (360))));
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.ship","engine-power-setting","spacewar.game-logic.ship/engine-power-setting",-1102403324),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.ship","weapon-number-setting","spacewar.game-logic.ship/weapon-number-setting",2143541933),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.ship","weapon-spread-setting","spacewar.game-logic.ship/weapon-spread-setting",-2128991134),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.ship","saved-weapon-settings","spacewar.game-logic.ship/saved-weapon-settings",-1358656115),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.game-logic.ship","phaser","spacewar.game-logic.ship/phaser",429122643),new cljs.core.Keyword("spacewar.game-logic.ship","kinetic","spacewar.game-logic.ship/kinetic",-1824372153),new cljs.core.Keyword("spacewar.game-logic.ship","torpedo","spacewar.game-logic.ship/torpedo",-2142010955)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.game-logic.ship","phaser","spacewar.game-logic.ship/phaser",429122643),new cljs.core.Keyword("spacewar.game-logic.ship","kinetic","spacewar.game-logic.ship/kinetic",-1824372153),new cljs.core.Keyword("spacewar.game-logic.ship","torpedo","spacewar.game-logic.ship/torpedo",-2142010955)], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__1456){
return cljs.core.map_QMARK_.call(null,G__1456);
}),(function (G__1456){
return cljs.core.contains_QMARK_.call(null,G__1456,new cljs.core.Keyword(null,"phaser","phaser",-1448421666));
}),(function (G__1456){
return cljs.core.contains_QMARK_.call(null,G__1456,new cljs.core.Keyword(null,"kinetic","kinetic",-451191810));
}),(function (G__1456){
return cljs.core.contains_QMARK_.call(null,G__1456,new cljs.core.Keyword(null,"torpedo","torpedo",275681140));
})], null),(function (G__1456){
return ((cljs.core.map_QMARK_.call(null,G__1456)) && (((cljs.core.contains_QMARK_.call(null,G__1456,new cljs.core.Keyword(null,"phaser","phaser",-1448421666))) && (((cljs.core.contains_QMARK_.call(null,G__1456,new cljs.core.Keyword(null,"kinetic","kinetic",-451191810))) && (cljs.core.contains_QMARK_.call(null,G__1456,new cljs.core.Keyword(null,"torpedo","torpedo",275681140))))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.game-logic.ship","phaser","spacewar.game-logic.ship/phaser",429122643),new cljs.core.Keyword("spacewar.game-logic.ship","kinetic","spacewar.game-logic.ship/kinetic",-1824372153),new cljs.core.Keyword("spacewar.game-logic.ship","torpedo","spacewar.game-logic.ship/torpedo",-2142010955)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"phaser","phaser",-1448421666),new cljs.core.Keyword(null,"kinetic","kinetic",-451191810),new cljs.core.Keyword(null,"torpedo","torpedo",275681140)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"phaser","phaser",-1448421666))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"kinetic","kinetic",-451191810))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"torpedo","torpedo",275681140)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.ship","heading-setting","spacewar.game-logic.ship/heading-setting",-1908638084),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1457#","p1__1457#",-1763614584,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),(0),new cljs.core.Symbol(null,"p1__1457#","p1__1457#",-1763614584,null),(360)))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),(0),new cljs.core.Symbol(null,"%","%",-950237169,null),(360)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.number_QMARK_,(function (p1__1457_SHARP_){
return ((((0) <= p1__1457_SHARP_)) && ((p1__1457_SHARP_ <= (360))));
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.ship","antimatter","spacewar.game-logic.ship/antimatter",1266278089),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.ship","core-temp","spacewar.game-logic.ship/core-temp",-1706006141),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.ship","dilithium","spacewar.game-logic.ship/dilithium",-182235363),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.ship","shields","spacewar.game-logic.ship/shields",1595258470),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.ship","kinetics","spacewar.game-logic.ship/kinetics",1454574185),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.ship","torpedos","spacewar.game-logic.ship/torpedos",1692388830),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.ship","percent","spacewar.game-logic.ship/percent",152991686),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1458#","p1__1458#",377748422,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),(0),new cljs.core.Symbol(null,"p1__1458#","p1__1458#",377748422,null),(100)))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),(0),new cljs.core.Symbol(null,"%","%",-950237169,null),(100)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.number_QMARK_,(function (p1__1458_SHARP_){
return ((((0) <= p1__1458_SHARP_)) && ((p1__1458_SHARP_ <= (100))));
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.ship","life-support-damage","spacewar.game-logic.ship/life-support-damage",-1199017459),new cljs.core.Keyword("spacewar.game-logic.ship","percent","spacewar.game-logic.ship/percent",152991686),new cljs.core.Keyword("spacewar.game-logic.ship","percent","spacewar.game-logic.ship/percent",152991686));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.ship","hull-damage","spacewar.game-logic.ship/hull-damage",1880734909),new cljs.core.Keyword("spacewar.game-logic.ship","percent","spacewar.game-logic.ship/percent",152991686),new cljs.core.Keyword("spacewar.game-logic.ship","percent","spacewar.game-logic.ship/percent",152991686));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.ship","sensor-damage","spacewar.game-logic.ship/sensor-damage",805853062),new cljs.core.Keyword("spacewar.game-logic.ship","percent","spacewar.game-logic.ship/percent",152991686),new cljs.core.Keyword("spacewar.game-logic.ship","percent","spacewar.game-logic.ship/percent",152991686));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.ship","impulse-damage","spacewar.game-logic.ship/impulse-damage",1225437699),new cljs.core.Keyword("spacewar.game-logic.ship","percent","spacewar.game-logic.ship/percent",152991686),new cljs.core.Keyword("spacewar.game-logic.ship","percent","spacewar.game-logic.ship/percent",152991686));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.ship","warp-damage","spacewar.game-logic.ship/warp-damage",-307434941),new cljs.core.Keyword("spacewar.game-logic.ship","percent","spacewar.game-logic.ship/percent",152991686),new cljs.core.Keyword("spacewar.game-logic.ship","percent","spacewar.game-logic.ship/percent",152991686));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.ship","weapons-damage","spacewar.game-logic.ship/weapons-damage",2077829247),new cljs.core.Keyword("spacewar.game-logic.ship","percent","spacewar.game-logic.ship/percent",152991686),new cljs.core.Keyword("spacewar.game-logic.ship","percent","spacewar.game-logic.ship/percent",152991686));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.ship","destroyed","spacewar.game-logic.ship/destroyed",-1771238266),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.ship","corbomite-device-installed","spacewar.game-logic.ship/corbomite-device-installed",329697569),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.ship","strat-scale","spacewar.game-logic.ship/strat-scale",1792110913),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1459#","p1__1459#",465605732,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),(1),new cljs.core.Symbol(null,"p1__1459#","p1__1459#",465605732,null),(10)))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),(1),new cljs.core.Symbol(null,"%","%",-950237169,null),(10)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.number_QMARK_,(function (p1__1459_SHARP_){
return ((((1) <= p1__1459_SHARP_)) && ((p1__1459_SHARP_ <= (10))));
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.ship","ship","spacewar.game-logic.ship/ship",1001576798),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 31, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.game-logic.ship","x","spacewar.game-logic.ship/x",-330675356),new cljs.core.Keyword("spacewar.game-logic.ship","y","spacewar.game-logic.ship/y",-413132037),new cljs.core.Keyword("spacewar.game-logic.ship","warp","spacewar.game-logic.ship/warp",1481631115),new cljs.core.Keyword("spacewar.game-logic.ship","warp-charge","spacewar.game-logic.ship/warp-charge",-353349944),new cljs.core.Keyword("spacewar.game-logic.ship","impulse","spacewar.game-logic.ship/impulse",-1927812067),new cljs.core.Keyword("spacewar.game-logic.ship","heading","spacewar.game-logic.ship/heading",569690588),new cljs.core.Keyword("spacewar.game-logic.ship","velocity","spacewar.game-logic.ship/velocity",1194036852),new cljs.core.Keyword("spacewar.game-logic.ship","selected-view","spacewar.game-logic.ship/selected-view",-1376122818),new cljs.core.Keyword("spacewar.game-logic.ship","selected-weapon","spacewar.game-logic.ship/selected-weapon",1911764967),new cljs.core.Keyword("spacewar.game-logic.ship","selected-engine","spacewar.game-logic.ship/selected-engine",739068486),new cljs.core.Keyword("spacewar.game-logic.ship","target-bearing","spacewar.game-logic.ship/target-bearing",751449219),new cljs.core.Keyword("spacewar.game-logic.ship","engine-power-setting","spacewar.game-logic.ship/engine-power-setting",-1102403324),new cljs.core.Keyword("spacewar.game-logic.ship","weapon-number-setting","spacewar.game-logic.ship/weapon-number-setting",2143541933),new cljs.core.Keyword("spacewar.game-logic.ship","weapon-spread-setting","spacewar.game-logic.ship/weapon-spread-setting",-2128991134),new cljs.core.Keyword("spacewar.game-logic.ship","saved-weapon-settings","spacewar.game-logic.ship/saved-weapon-settings",-1358656115),new cljs.core.Keyword("spacewar.game-logic.ship","heading-setting","spacewar.game-logic.ship/heading-setting",-1908638084),new cljs.core.Keyword("spacewar.game-logic.ship","antimatter","spacewar.game-logic.ship/antimatter",1266278089),new cljs.core.Keyword("spacewar.game-logic.ship","core-temp","spacewar.game-logic.ship/core-temp",-1706006141),new cljs.core.Keyword("spacewar.game-logic.ship","dilithium","spacewar.game-logic.ship/dilithium",-182235363),new cljs.core.Keyword("spacewar.game-logic.ship","shields","spacewar.game-logic.ship/shields",1595258470),new cljs.core.Keyword("spacewar.game-logic.ship","kinetics","spacewar.game-logic.ship/kinetics",1454574185),new cljs.core.Keyword("spacewar.game-logic.ship","torpedos","spacewar.game-logic.ship/torpedos",1692388830),new cljs.core.Keyword("spacewar.game-logic.ship","life-support-damage","spacewar.game-logic.ship/life-support-damage",-1199017459),new cljs.core.Keyword("spacewar.game-logic.ship","hull-damage","spacewar.game-logic.ship/hull-damage",1880734909),new cljs.core.Keyword("spacewar.game-logic.ship","sensor-damage","spacewar.game-logic.ship/sensor-damage",805853062),new cljs.core.Keyword("spacewar.game-logic.ship","impulse-damage","spacewar.game-logic.ship/impulse-damage",1225437699),new cljs.core.Keyword("spacewar.game-logic.ship","warp-damage","spacewar.game-logic.ship/warp-damage",-307434941),new cljs.core.Keyword("spacewar.game-logic.ship","weapons-damage","spacewar.game-logic.ship/weapons-damage",2077829247),new cljs.core.Keyword("spacewar.game-logic.ship","strat-scale","spacewar.game-logic.ship/strat-scale",1792110913),new cljs.core.Keyword("spacewar.game-logic.ship","destroyed","spacewar.game-logic.ship/destroyed",-1771238266),new cljs.core.Keyword("spacewar.game-logic.ship","corbomite-device-installed","spacewar.game-logic.ship/corbomite-device-installed",329697569)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 31, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.game-logic.ship","x","spacewar.game-logic.ship/x",-330675356),new cljs.core.Keyword("spacewar.game-logic.ship","y","spacewar.game-logic.ship/y",-413132037),new cljs.core.Keyword("spacewar.game-logic.ship","warp","spacewar.game-logic.ship/warp",1481631115),new cljs.core.Keyword("spacewar.game-logic.ship","warp-charge","spacewar.game-logic.ship/warp-charge",-353349944),new cljs.core.Keyword("spacewar.game-logic.ship","impulse","spacewar.game-logic.ship/impulse",-1927812067),new cljs.core.Keyword("spacewar.game-logic.ship","heading","spacewar.game-logic.ship/heading",569690588),new cljs.core.Keyword("spacewar.game-logic.ship","velocity","spacewar.game-logic.ship/velocity",1194036852),new cljs.core.Keyword("spacewar.game-logic.ship","selected-view","spacewar.game-logic.ship/selected-view",-1376122818),new cljs.core.Keyword("spacewar.game-logic.ship","selected-weapon","spacewar.game-logic.ship/selected-weapon",1911764967),new cljs.core.Keyword("spacewar.game-logic.ship","selected-engine","spacewar.game-logic.ship/selected-engine",739068486),new cljs.core.Keyword("spacewar.game-logic.ship","target-bearing","spacewar.game-logic.ship/target-bearing",751449219),new cljs.core.Keyword("spacewar.game-logic.ship","engine-power-setting","spacewar.game-logic.ship/engine-power-setting",-1102403324),new cljs.core.Keyword("spacewar.game-logic.ship","weapon-number-setting","spacewar.game-logic.ship/weapon-number-setting",2143541933),new cljs.core.Keyword("spacewar.game-logic.ship","weapon-spread-setting","spacewar.game-logic.ship/weapon-spread-setting",-2128991134),new cljs.core.Keyword("spacewar.game-logic.ship","saved-weapon-settings","spacewar.game-logic.ship/saved-weapon-settings",-1358656115),new cljs.core.Keyword("spacewar.game-logic.ship","heading-setting","spacewar.game-logic.ship/heading-setting",-1908638084),new cljs.core.Keyword("spacewar.game-logic.ship","antimatter","spacewar.game-logic.ship/antimatter",1266278089),new cljs.core.Keyword("spacewar.game-logic.ship","core-temp","spacewar.game-logic.ship/core-temp",-1706006141),new cljs.core.Keyword("spacewar.game-logic.ship","dilithium","spacewar.game-logic.ship/dilithium",-182235363),new cljs.core.Keyword("spacewar.game-logic.ship","shields","spacewar.game-logic.ship/shields",1595258470),new cljs.core.Keyword("spacewar.game-logic.ship","kinetics","spacewar.game-logic.ship/kinetics",1454574185),new cljs.core.Keyword("spacewar.game-logic.ship","torpedos","spacewar.game-logic.ship/torpedos",1692388830),new cljs.core.Keyword("spacewar.game-logic.ship","life-support-damage","spacewar.game-logic.ship/life-support-damage",-1199017459),new cljs.core.Keyword("spacewar.game-logic.ship","hull-damage","spacewar.game-logic.ship/hull-damage",1880734909),new cljs.core.Keyword("spacewar.game-logic.ship","sensor-damage","spacewar.game-logic.ship/sensor-damage",805853062),new cljs.core.Keyword("spacewar.game-logic.ship","impulse-damage","spacewar.game-logic.ship/impulse-damage",1225437699),new cljs.core.Keyword("spacewar.game-logic.ship","warp-damage","spacewar.game-logic.ship/warp-damage",-307434941),new cljs.core.Keyword("spacewar.game-logic.ship","weapons-damage","spacewar.game-logic.ship/weapons-damage",2077829247),new cljs.core.Keyword("spacewar.game-logic.ship","strat-scale","spacewar.game-logic.ship/strat-scale",1792110913),new cljs.core.Keyword("spacewar.game-logic.ship","destroyed","spacewar.game-logic.ship/destroyed",-1771238266),new cljs.core.Keyword("spacewar.game-logic.ship","corbomite-device-installed","spacewar.game-logic.ship/corbomite-device-installed",329697569)], null),null,null,cljs.core.PersistentVector.fromArray([(function (G__1460){
return cljs.core.map_QMARK_.call(null,G__1460);
}),(function (G__1460){
return cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"x","x",2099068185));
}),(function (G__1460){
return cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"y","y",-1757859776));
}),(function (G__1460){
return cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"warp","warp",-931589598));
}),(function (G__1460){
return cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"warp-charge","warp-charge",2059878027));
}),(function (G__1460){
return cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"impulse","impulse",486537698));
}),(function (G__1460){
return cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"heading","heading",-1312171873));
}),(function (G__1460){
return cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
}),(function (G__1460){
return cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"selected-view","selected-view",501290513));
}),(function (G__1460){
return cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"selected-weapon","selected-weapon",1106774428));
}),(function (G__1460){
return cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"selected-engine","selected-engine",-1137424385));
}),(function (G__1460){
return cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"target-bearing","target-bearing",-1661786546));
}),(function (G__1460){
return cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"engine-power-setting","engine-power-setting",805524153));
}),(function (G__1460){
return cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"weapon-number-setting","weapon-number-setting",261885890));
}),(function (G__1460){
return cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"weapon-spread-setting","weapon-spread-setting",286464677));
}),(function (G__1460){
return cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"saved-weapon-settings","saved-weapon-settings",1053923026));
}),(function (G__1460){
return cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"heading-setting","heading-setting",634943));
}),(function (G__1460){
return cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000));
}),(function (G__1460){
return cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"core-temp","core-temp",715877178));
}),(function (G__1460){
return cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"dilithium","dilithium",1152933090));
}),(function (G__1460){
return cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"shields","shields",-295786721));
}),(function (G__1460){
return cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"kinetics","kinetics",-707133266));
}),(function (G__1460){
return cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"torpedos","torpedos",344905121));
}),(function (G__1460){
return cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"life-support-damage","life-support-damage",1212244818));
}),(function (G__1460){
return cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"hull-damage","hull-damage",-536688766));
}),(function (G__1460){
return cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"sensor-damage","sensor-damage",-1401969345));
}),(function (G__1460){
return cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"impulse-damage","impulse-damage",2036309966));
}),(function (G__1460){
return cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"warp-damage","warp-damage",-1651122162));
}),(function (G__1460){
return cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"weapons-damage","weapons-damage",1275474500));
}),(function (G__1460){
return cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"strat-scale","strat-scale",-510133488));
}),(function (G__1460){
return cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"destroyed","destroyed",-427566535));
}),(function (G__1460){
return cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"corbomite-device-installed","corbomite-device-installed",-2093492516));
})], true),(function (G__1460){
return ((cljs.core.map_QMARK_.call(null,G__1460)) && (((cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"x","x",2099068185))) && (((cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"y","y",-1757859776))) && (((cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"warp","warp",-931589598))) && (((cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"warp-charge","warp-charge",2059878027))) && (((cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"impulse","impulse",486537698))) && (((cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"heading","heading",-1312171873))) && (((cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"velocity","velocity",-581524355))) && (((cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"selected-view","selected-view",501290513))) && (((cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"selected-weapon","selected-weapon",1106774428))) && (((cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"selected-engine","selected-engine",-1137424385))) && (((cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"target-bearing","target-bearing",-1661786546))) && (((cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"engine-power-setting","engine-power-setting",805524153))) && (((cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"weapon-number-setting","weapon-number-setting",261885890))) && (((cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"weapon-spread-setting","weapon-spread-setting",286464677))) && (((cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"saved-weapon-settings","saved-weapon-settings",1053923026))) && (((cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"heading-setting","heading-setting",634943))) && (((cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000))) && (((cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"core-temp","core-temp",715877178))) && (((cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"dilithium","dilithium",1152933090))) && (((cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"shields","shields",-295786721))) && (((cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"kinetics","kinetics",-707133266))) && (((cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"torpedos","torpedos",344905121))) && (((cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"life-support-damage","life-support-damage",1212244818))) && (((cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"hull-damage","hull-damage",-536688766))) && (((cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"sensor-damage","sensor-damage",-1401969345))) && (((cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"impulse-damage","impulse-damage",2036309966))) && (((cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"warp-damage","warp-damage",-1651122162))) && (((cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"weapons-damage","weapons-damage",1275474500))) && (((cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"strat-scale","strat-scale",-510133488))) && (((cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"destroyed","destroyed",-427566535))) && (cljs.core.contains_QMARK_.call(null,G__1460,new cljs.core.Keyword(null,"corbomite-device-installed","corbomite-device-installed",-2093492516))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 31, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.game-logic.ship","x","spacewar.game-logic.ship/x",-330675356),new cljs.core.Keyword("spacewar.game-logic.ship","y","spacewar.game-logic.ship/y",-413132037),new cljs.core.Keyword("spacewar.game-logic.ship","warp","spacewar.game-logic.ship/warp",1481631115),new cljs.core.Keyword("spacewar.game-logic.ship","warp-charge","spacewar.game-logic.ship/warp-charge",-353349944),new cljs.core.Keyword("spacewar.game-logic.ship","impulse","spacewar.game-logic.ship/impulse",-1927812067),new cljs.core.Keyword("spacewar.game-logic.ship","heading","spacewar.game-logic.ship/heading",569690588),new cljs.core.Keyword("spacewar.game-logic.ship","velocity","spacewar.game-logic.ship/velocity",1194036852),new cljs.core.Keyword("spacewar.game-logic.ship","selected-view","spacewar.game-logic.ship/selected-view",-1376122818),new cljs.core.Keyword("spacewar.game-logic.ship","selected-weapon","spacewar.game-logic.ship/selected-weapon",1911764967),new cljs.core.Keyword("spacewar.game-logic.ship","selected-engine","spacewar.game-logic.ship/selected-engine",739068486),new cljs.core.Keyword("spacewar.game-logic.ship","target-bearing","spacewar.game-logic.ship/target-bearing",751449219),new cljs.core.Keyword("spacewar.game-logic.ship","engine-power-setting","spacewar.game-logic.ship/engine-power-setting",-1102403324),new cljs.core.Keyword("spacewar.game-logic.ship","weapon-number-setting","spacewar.game-logic.ship/weapon-number-setting",2143541933),new cljs.core.Keyword("spacewar.game-logic.ship","weapon-spread-setting","spacewar.game-logic.ship/weapon-spread-setting",-2128991134),new cljs.core.Keyword("spacewar.game-logic.ship","saved-weapon-settings","spacewar.game-logic.ship/saved-weapon-settings",-1358656115),new cljs.core.Keyword("spacewar.game-logic.ship","heading-setting","spacewar.game-logic.ship/heading-setting",-1908638084),new cljs.core.Keyword("spacewar.game-logic.ship","antimatter","spacewar.game-logic.ship/antimatter",1266278089),new cljs.core.Keyword("spacewar.game-logic.ship","core-temp","spacewar.game-logic.ship/core-temp",-1706006141),new cljs.core.Keyword("spacewar.game-logic.ship","dilithium","spacewar.game-logic.ship/dilithium",-182235363),new cljs.core.Keyword("spacewar.game-logic.ship","shields","spacewar.game-logic.ship/shields",1595258470),new cljs.core.Keyword("spacewar.game-logic.ship","kinetics","spacewar.game-logic.ship/kinetics",1454574185),new cljs.core.Keyword("spacewar.game-logic.ship","torpedos","spacewar.game-logic.ship/torpedos",1692388830),new cljs.core.Keyword("spacewar.game-logic.ship","life-support-damage","spacewar.game-logic.ship/life-support-damage",-1199017459),new cljs.core.Keyword("spacewar.game-logic.ship","hull-damage","spacewar.game-logic.ship/hull-damage",1880734909),new cljs.core.Keyword("spacewar.game-logic.ship","sensor-damage","spacewar.game-logic.ship/sensor-damage",805853062),new cljs.core.Keyword("spacewar.game-logic.ship","impulse-damage","spacewar.game-logic.ship/impulse-damage",1225437699),new cljs.core.Keyword("spacewar.game-logic.ship","warp-damage","spacewar.game-logic.ship/warp-damage",-307434941),new cljs.core.Keyword("spacewar.game-logic.ship","weapons-damage","spacewar.game-logic.ship/weapons-damage",2077829247),new cljs.core.Keyword("spacewar.game-logic.ship","strat-scale","spacewar.game-logic.ship/strat-scale",1792110913),new cljs.core.Keyword("spacewar.game-logic.ship","destroyed","spacewar.game-logic.ship/destroyed",-1771238266),new cljs.core.Keyword("spacewar.game-logic.ship","corbomite-device-installed","spacewar.game-logic.ship/corbomite-device-installed",329697569)], null),null,new cljs.core.PersistentVector(null, 31, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"warp","warp",-931589598),new cljs.core.Keyword(null,"warp-charge","warp-charge",2059878027),new cljs.core.Keyword(null,"impulse","impulse",486537698),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.Keyword(null,"selected-view","selected-view",501290513),new cljs.core.Keyword(null,"selected-weapon","selected-weapon",1106774428),new cljs.core.Keyword(null,"selected-engine","selected-engine",-1137424385),new cljs.core.Keyword(null,"target-bearing","target-bearing",-1661786546),new cljs.core.Keyword(null,"engine-power-setting","engine-power-setting",805524153),new cljs.core.Keyword(null,"weapon-number-setting","weapon-number-setting",261885890),new cljs.core.Keyword(null,"weapon-spread-setting","weapon-spread-setting",286464677),new cljs.core.Keyword(null,"saved-weapon-settings","saved-weapon-settings",1053923026),new cljs.core.Keyword(null,"heading-setting","heading-setting",634943),new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),new cljs.core.Keyword(null,"core-temp","core-temp",715877178),new cljs.core.Keyword(null,"dilithium","dilithium",1152933090),new cljs.core.Keyword(null,"shields","shields",-295786721),new cljs.core.Keyword(null,"kinetics","kinetics",-707133266),new cljs.core.Keyword(null,"torpedos","torpedos",344905121),new cljs.core.Keyword(null,"life-support-damage","life-support-damage",1212244818),new cljs.core.Keyword(null,"hull-damage","hull-damage",-536688766),new cljs.core.Keyword(null,"sensor-damage","sensor-damage",-1401969345),new cljs.core.Keyword(null,"impulse-damage","impulse-damage",2036309966),new cljs.core.Keyword(null,"warp-damage","warp-damage",-1651122162),new cljs.core.Keyword(null,"weapons-damage","weapons-damage",1275474500),new cljs.core.Keyword(null,"strat-scale","strat-scale",-510133488),new cljs.core.Keyword(null,"destroyed","destroyed",-427566535),new cljs.core.Keyword(null,"corbomite-device-installed","corbomite-device-installed",-2093492516)], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.fromArray([cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"x","x",2099068185))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"y","y",-1757859776))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"warp","warp",-931589598))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"warp-charge","warp-charge",2059878027))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"impulse","impulse",486537698))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"heading","heading",-1312171873))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"velocity","velocity",-581524355))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"selected-view","selected-view",501290513))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"selected-weapon","selected-weapon",1106774428))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"selected-engine","selected-engine",-1137424385))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"target-bearing","target-bearing",-1661786546))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"engine-power-setting","engine-power-setting",805524153))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"weapon-number-setting","weapon-number-setting",261885890))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"weapon-spread-setting","weapon-spread-setting",286464677))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"saved-weapon-settings","saved-weapon-settings",1053923026))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"heading-setting","heading-setting",634943))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"core-temp","core-temp",715877178))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"dilithium","dilithium",1152933090))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"shields","shields",-295786721))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"kinetics","kinetics",-707133266))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"torpedos","torpedos",344905121))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"life-support-damage","life-support-damage",1212244818))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"hull-damage","hull-damage",-536688766))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"sensor-damage","sensor-damage",-1401969345))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"impulse-damage","impulse-damage",2036309966))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"warp-damage","warp-damage",-1651122162))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"weapons-damage","weapons-damage",1275474500))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"strat-scale","strat-scale",-510133488))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"destroyed","destroyed",-427566535))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"corbomite-device-installed","corbomite-device-installed",-2093492516)))], true),null])));
spacewar.game_logic.ship.initialize = (function spacewar$game_logic$ship$initialize(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"torpedos","torpedos",344905121),new cljs.core.Keyword(null,"dilithium","dilithium",1152933090),new cljs.core.Keyword(null,"impulse","impulse",486537698),new cljs.core.Keyword(null,"warp","warp",-931589598),new cljs.core.Keyword(null,"hull-damage","hull-damage",-536688766),new cljs.core.Keyword(null,"weapon-number-setting","weapon-number-setting",261885890),new cljs.core.Keyword(null,"weapons-damage","weapons-damage",1275474500),new cljs.core.Keyword(null,"weapon-spread-setting","weapon-spread-setting",286464677),new cljs.core.Keyword(null,"warp-charge","warp-charge",2059878027),new cljs.core.Keyword(null,"warp-damage","warp-damage",-1651122162),new cljs.core.Keyword(null,"kinetics","kinetics",-707133266),new cljs.core.Keyword(null,"target-bearing","target-bearing",-1661786546),new cljs.core.Keyword(null,"impulse-damage","impulse-damage",2036309966),new cljs.core.Keyword(null,"strat-scale","strat-scale",-510133488),new cljs.core.Keyword(null,"selected-view","selected-view",501290513),new cljs.core.Keyword(null,"saved-weapon-settings","saved-weapon-settings",1053923026),new cljs.core.Keyword(null,"life-support-damage","life-support-damage",1212244818),new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"destroyed","destroyed",-427566535),new cljs.core.Keyword(null,"engine-power-setting","engine-power-setting",805524153),new cljs.core.Keyword(null,"core-temp","core-temp",715877178),new cljs.core.Keyword(null,"selected-weapon","selected-weapon",1106774428),new cljs.core.Keyword(null,"corbomite-device-installed","corbomite-device-installed",-2093492516),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.Keyword(null,"heading-setting","heading-setting",634943),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"sensor-damage","sensor-damage",-1401969345),new cljs.core.Keyword(null,"shields","shields",-295786721),new cljs.core.Keyword(null,"selected-engine","selected-engine",-1137424385)],[(cljs.core.rand.call(null,spacewar.game_logic.config.known_space_y) | (0)),spacewar.game_logic.config.ship_torpedos,spacewar.game_logic.config.ship_dilithium,(0),(0),(0),(1),(0),(1),(0),(0),spacewar.game_logic.config.ship_kinetics,(0),(0),(1),new cljs.core.Keyword(null,"front-view","front-view",-1631827770),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"phaser","phaser",-1448421666),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number-setting","number-setting",-1662919745),(1),new cljs.core.Keyword(null,"spread-setting","spread-setting",-1411265316),spacewar.game_logic.config.min_spread], null),new cljs.core.Keyword(null,"torpedo","torpedo",275681140),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number-setting","number-setting",-1662919745),(1),new cljs.core.Keyword(null,"spread-setting","spread-setting",-1411265316),spacewar.game_logic.config.min_spread], null),new cljs.core.Keyword(null,"kinetic","kinetic",-451191810),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number-setting","number-setting",-1662919745),(1),new cljs.core.Keyword(null,"spread-setting","spread-setting",-1411265316),spacewar.game_logic.config.min_spread], null)], null),(0),spacewar.game_logic.config.ship_antimatter,(cljs.core.rand.call(null,spacewar.game_logic.config.known_space_x) | (0)),false,(0),(0),new cljs.core.Keyword(null,"none","none",1333468478),false,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(0),(0),(0),spacewar.game_logic.config.ship_shields,new cljs.core.Keyword(null,"none","none",1333468478)]);
});
spacewar.game_logic.ship.heat_core = (function spacewar$game_logic$ship$heat_core(antimatter,ship){
var heat = (antimatter * spacewar.game_logic.config.antimatter_to_heat);
return cljs.core.update.call(null,ship,new cljs.core.Keyword(null,"core-temp","core-temp",715877178),cljs.core._PLUS_,heat);
});
spacewar.game_logic.ship.dissipate_core_heat = (function spacewar$game_logic$ship$dissipate_core_heat(ms,ship){
var dilithium = new cljs.core.Keyword(null,"dilithium","dilithium",1152933090).cljs$core$IFn$_invoke$arity$1(ship);
var efficiency = Math.sqrt((dilithium / spacewar.game_logic.config.ship_dilithium));
var dissipation_factor = ((1) - (function (){var x__5087__auto__ = spacewar.game_logic.config.passive_heat_dissipation;
var y__5088__auto__ = (efficiency * spacewar.game_logic.config.dilithium_heat_dissipation);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})());
return cljs.core.update.call(null,ship,new cljs.core.Keyword(null,"core-temp","core-temp",715877178),cljs.core._STAR_,Math.pow(dissipation_factor,ms));
});
spacewar.game_logic.ship.drag = (function spacewar$game_logic$ship$drag(p__1461){
var vec__1462 = p__1461;
var x = cljs.core.nth.call(null,vec__1462,(0),null);
var y = cljs.core.nth.call(null,vec__1462,(1),null);
var v = vec__1462;
if((((x === (0))) && ((y === (0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
var mag = spacewar.vector.magnitude.call(null,v);
var mag_sqr = (mag * mag);
var uv = spacewar.vector.unit.call(null,v);
return spacewar.vector.scale.call(null,(((-1) * mag_sqr) * spacewar.game_logic.config.drag_factor),uv);
}
});
spacewar.game_logic.ship.apply_drag = (function spacewar$game_logic$ship$apply_drag(drag,velocity){
var new_velocity = spacewar.vector.add.call(null,velocity,drag);
if(cljs.core._EQ_.call(null,spacewar.geometry.sign.call(null,cljs.core.first.call(null,new_velocity)),spacewar.geometry.sign.call(null,cljs.core.first.call(null,velocity)))){
return new_velocity;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}
});
spacewar.game_logic.ship.apply_impulse = (function spacewar$game_logic$ship$apply_impulse(ms,velocity,heading,impulse){
var delta_v = ((ms * spacewar.game_logic.config.impulse_thrust) * impulse);
var radians = spacewar.geometry.__GT_radians.call(null,heading);
var dv = spacewar.vector.from_angular.call(null,delta_v,radians);
var new_velocity = spacewar.vector.add.call(null,velocity,dv);
return new_velocity;
});
spacewar.game_logic.ship.rotation_direction = (function spacewar$game_logic$ship$rotation_direction(current_heading,desired_heading){
var diff = cljs.core.mod.call(null,(desired_heading - current_heading),(360));
if((diff > (180))){
return (diff - (360));
} else {
return diff;

}
});
spacewar.game_logic.ship.warp_factor = (function spacewar$game_logic$ship$warp_factor(warp){
return ((warp * warp) * 0.5);
});
spacewar.game_logic.ship.calc_warp_charge = (function spacewar$game_logic$ship$calc_warp_charge(warp){
return Math.pow(warp,1.3);
});
spacewar.game_logic.ship.calc_dilithium_consumed = (function spacewar$game_logic$ship$calc_dilithium_consumed(warp,ms){
return ((warp * ms) * spacewar.game_logic.config.ship_dilithium_consumption);
});
spacewar.game_logic.ship.consume_dilithium = (function spacewar$game_logic$ship$consume_dilithium(dilithium,warp,ms){
if((warp === (0))){
return dilithium;
} else {
var x__5087__auto__ = (0);
var y__5088__auto__ = (dilithium - spacewar.game_logic.ship.calc_dilithium_consumed.call(null,warp,ms));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
}
});
spacewar.game_logic.ship.warp_ship = (function spacewar$game_logic$ship$warp_ship(ms,ship){
if((new cljs.core.Keyword(null,"warp","warp",-931589598).cljs$core$IFn$_invoke$arity$1(ship) === (0))){
return ship;
} else {
var map__1465 = ship;
var map__1465__$1 = cljs.core.__destructure_map.call(null,map__1465);
var x = cljs.core.get.call(null,map__1465__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__1465__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var warp = cljs.core.get.call(null,map__1465__$1,new cljs.core.Keyword(null,"warp","warp",-931589598));
var warp_charge = cljs.core.get.call(null,map__1465__$1,new cljs.core.Keyword(null,"warp-charge","warp-charge",2059878027));
var heading = cljs.core.get.call(null,map__1465__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
var antimatter = cljs.core.get.call(null,map__1465__$1,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000));
var dilithium = cljs.core.get.call(null,map__1465__$1,new cljs.core.Keyword(null,"dilithium","dilithium",1152933090));
var dilithium__$1 = spacewar.game_logic.ship.consume_dilithium.call(null,dilithium,warp,ms);
var power_required = ((ms * spacewar.game_logic.ship.warp_factor.call(null,warp)) * spacewar.game_logic.config.warp_power);
var power_used = (function (){var x__5090__auto__ = power_required;
var y__5091__auto__ = antimatter;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var antimatter__$1 = (antimatter - power_used);
var actual_warp = (warp * (power_used / power_required));
var warp_charge_increment = ((ms * spacewar.game_logic.ship.calc_warp_charge.call(null,actual_warp)) * spacewar.game_logic.config.warp_charge_rate);
var warp_efficiency = (((100) - new cljs.core.Keyword(null,"warp-damage","warp-damage",-1651122162).cljs$core$IFn$_invoke$arity$1(ship)) / (100));
var warp_charge_increment__$1 = (warp_charge_increment * warp_efficiency);
var warp_charge__$1 = (warp_charge_increment__$1 + warp_charge);
var warp_trigger = (warp_charge__$1 > spacewar.game_logic.config.warp_threshold);
var warp_charge__$2 = ((warp_trigger)?(0):warp_charge__$1);
var radians = spacewar.geometry.__GT_radians.call(null,heading);
var warp_vector = spacewar.vector.from_angular.call(null,spacewar.game_logic.config.warp_leap,radians);
var vec__1466 = ((warp_trigger)?spacewar.vector.add.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),warp_vector):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var wx = cljs.core.nth.call(null,vec__1466,(0),null);
var wy = cljs.core.nth.call(null,vec__1466,(1),null);
var ship__$1 = spacewar.game_logic.ship.heat_core.call(null,power_used,ship);
return cljs.core.assoc.call(null,ship__$1,new cljs.core.Keyword(null,"x","x",2099068185),wx,new cljs.core.Keyword(null,"y","y",-1757859776),wy,new cljs.core.Keyword(null,"warp-charge","warp-charge",2059878027),warp_charge__$2,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),antimatter__$1,new cljs.core.Keyword(null,"dilithium","dilithium",1152933090),dilithium__$1);
}
});
spacewar.game_logic.ship.impulse_ship = (function spacewar$game_logic$ship$impulse_ship(ms,ship){
var map__1469 = ship;
var map__1469__$1 = cljs.core.__destructure_map.call(null,map__1469);
var antimatter = cljs.core.get.call(null,map__1469__$1,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000));
var velocity = cljs.core.get.call(null,map__1469__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
var heading = cljs.core.get.call(null,map__1469__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
var impulse = cljs.core.get.call(null,map__1469__$1,new cljs.core.Keyword(null,"impulse","impulse",486537698));
var x = cljs.core.get.call(null,map__1469__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__1469__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var power_required = ((ms * spacewar.game_logic.config.impulse_power) * impulse);
var power_used = (function (){var x__5090__auto__ = power_required;
var y__5091__auto__ = antimatter;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var actual_impulse = (((power_required === (0)))?(0):(impulse * (power_used / power_required)));
var impulse_efficiency = (((100) - new cljs.core.Keyword(null,"impulse-damage","impulse-damage",2036309966).cljs$core$IFn$_invoke$arity$1(ship)) / (100));
var actual_impulse__$1 = (actual_impulse * impulse_efficiency);
var antimatter__$1 = (antimatter - power_used);
var drag = spacewar.game_logic.ship.drag.call(null,velocity);
var accelerated_v = spacewar.game_logic.ship.apply_impulse.call(null,ms,velocity,heading,actual_impulse__$1);
var velocity__$1 = spacewar.game_logic.ship.apply_drag.call(null,drag,accelerated_v);
var vec__1470 = spacewar.vector.add.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),spacewar.vector.scale.call(null,ms,velocity__$1));
var px = cljs.core.nth.call(null,vec__1470,(0),null);
var py = cljs.core.nth.call(null,vec__1470,(1),null);
var ship__$1 = spacewar.game_logic.ship.heat_core.call(null,power_used,ship);
return cljs.core.assoc.call(null,ship__$1,new cljs.core.Keyword(null,"x","x",2099068185),px,new cljs.core.Keyword(null,"y","y",-1757859776),py,new cljs.core.Keyword(null,"velocity","velocity",-581524355),velocity__$1,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),antimatter__$1);
});
spacewar.game_logic.ship.rotate_ship = (function spacewar$game_logic$ship$rotate_ship(ms,ship){
var map__1473 = ship;
var map__1473__$1 = cljs.core.__destructure_map.call(null,map__1473);
var heading = cljs.core.get.call(null,map__1473__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
var heading_setting = cljs.core.get.call(null,map__1473__$1,new cljs.core.Keyword(null,"heading-setting","heading-setting",634943));
var total_rotation = spacewar.game_logic.ship.rotation_direction.call(null,heading,heading_setting);
var rotation_step = ((spacewar.game_logic.config.rotation_rate * ms) * spacewar.geometry.sign.call(null,total_rotation));
var rotation_step__$1 = (((cljs.core.abs.call(null,total_rotation) < cljs.core.abs.call(null,rotation_step)))?total_rotation:rotation_step);
var new_heading = cljs.core.mod.call(null,(heading + rotation_step__$1),(360));
return cljs.core.assoc.call(null,ship,new cljs.core.Keyword(null,"heading","heading",-1312171873),new_heading);
});
spacewar.game_logic.ship.charge_shields = (function spacewar$game_logic$ship$charge_shields(ms,ship){
var corbomite = new cljs.core.Keyword(null,"corbomite-device-installed","corbomite-device-installed",-2093492516).cljs$core$IFn$_invoke$arity$1(ship);
var antimatter = new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000).cljs$core$IFn$_invoke$arity$1(ship);
var shields = new cljs.core.Keyword(null,"shields","shields",-295786721).cljs$core$IFn$_invoke$arity$1(ship);
var difference = (spacewar.game_logic.config.ship_shields - shields);
var charge = (function (){var x__5090__auto__ = (function (){var x__5090__auto__ = difference;
var y__5091__auto__ = antimatter;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var y__5091__auto__ = ((ms * spacewar.game_logic.config.ship_shield_recharge_rate) * (cljs.core.truth_(corbomite)?(3):(1)));
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var ship__$1 = cljs.core.update.call(null,ship,new cljs.core.Keyword(null,"shields","shields",-295786721),cljs.core._PLUS_,charge);
var antimatter__$1 = ((charge * spacewar.game_logic.config.ship_shield_recharge_cost) * (cljs.core.truth_(corbomite)?0.5:(1)));
var ship__$2 = cljs.core.update.call(null,ship__$1,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),cljs.core._,antimatter__$1);
var ship__$3 = spacewar.game_logic.ship.heat_core.call(null,antimatter__$1,ship__$2);
return ship__$3;
});
spacewar.game_logic.ship.repair_capacity = (function spacewar$game_logic$ship$repair_capacity(ms,ship){
var map__1474 = ship;
var map__1474__$1 = cljs.core.__destructure_map.call(null,map__1474);
var life_support_damage = cljs.core.get.call(null,map__1474__$1,new cljs.core.Keyword(null,"life-support-damage","life-support-damage",1212244818));
var repair_factor = (cljs.core.truth_(new cljs.core.Keyword(null,"corbomite-device-installed","corbomite-device-installed",-2093492516).cljs$core$IFn$_invoke$arity$1(ship))?0.03:0.01);
return (((ms * spacewar.game_logic.config.ship_repair_capacity) * ((100) - life_support_damage)) * repair_factor);
});
spacewar.game_logic.ship.repair_ship = (function spacewar$game_logic$ship$repair_ship(ms,ship){
var systems = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"life-support-damage","life-support-damage",1212244818),new cljs.core.Keyword(null,"hull-damage","hull-damage",-536688766),new cljs.core.Keyword(null,"warp-damage","warp-damage",-1651122162),new cljs.core.Keyword(null,"sensor-damage","sensor-damage",-1401969345),new cljs.core.Keyword(null,"weapons-damage","weapons-damage",1275474500),new cljs.core.Keyword(null,"impulse-damage","impulse-damage",2036309966)], null);
var capacity = spacewar.game_logic.ship.repair_capacity.call(null,ms,ship);
var ship__$1 = ship;
while(true){
if((((capacity === (0))) || (cljs.core.empty_QMARK_.call(null,systems)))){
return ship__$1;
} else {
var system = cljs.core.first.call(null,systems);
var repair = (function (){var x__5090__auto__ = capacity;
var y__5091__auto__ = system.call(null,ship__$1);
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var ship__$2 = cljs.core.update.call(null,ship__$1,system,cljs.core._,repair);
var G__1475 = cljs.core.rest.call(null,systems);
var G__1476 = (capacity - repair);
var G__1477 = ship__$2;
systems = G__1475;
capacity = G__1476;
ship__$1 = G__1477;
continue;
}
break;
}
});
spacewar.game_logic.ship.update_destruction = (function spacewar$game_logic$ship$update_destruction(ship){
var map__1478 = ship;
var map__1478__$1 = cljs.core.__destructure_map.call(null,map__1478);
var life_support_damage = cljs.core.get.call(null,map__1478__$1,new cljs.core.Keyword(null,"life-support-damage","life-support-damage",1212244818));
var hull_damage = cljs.core.get.call(null,map__1478__$1,new cljs.core.Keyword(null,"hull-damage","hull-damage",-536688766));
var core_temp = cljs.core.get.call(null,map__1478__$1,new cljs.core.Keyword(null,"core-temp","core-temp",715877178));
var destroyed = (((life_support_damage >= (100))) || ((((hull_damage >= (100))) || ((core_temp >= (100))))));
if(destroyed){
return cljs.core.assoc.call(null,ship,new cljs.core.Keyword(null,"destroyed","destroyed",-427566535),true);
} else {
return ship;
}
});
spacewar.game_logic.ship.update_ship = (function spacewar$game_logic$ship$update_ship(ms,world){
var ship = new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(world);
var ship__$1 = spacewar.game_logic.ship.update_destruction.call(null,ship);
var ship__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"destroyed","destroyed",-427566535).cljs$core$IFn$_invoke$arity$1(ship__$1))?ship__$1:spacewar.game_logic.ship.dissipate_core_heat.call(null,ms,spacewar.game_logic.ship.repair_ship.call(null,ms,spacewar.game_logic.ship.charge_shields.call(null,ms,spacewar.game_logic.ship.rotate_ship.call(null,ms,spacewar.game_logic.ship.impulse_ship.call(null,ms,spacewar.game_logic.ship.warp_ship.call(null,ms,ship__$1)))))));
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"ship","ship",197863473),ship__$2);
});
spacewar.game_logic.ship.set_heading_handler = (function spacewar$game_logic$ship$set_heading_handler(p__1479,ship){
var map__1480 = p__1479;
var map__1480__$1 = cljs.core.__destructure_map.call(null,map__1480);
var angle = cljs.core.get.call(null,map__1480__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
return cljs.core.assoc.call(null,ship,new cljs.core.Keyword(null,"heading-setting","heading-setting",634943),angle);
});
spacewar.game_logic.ship.set_target_bearing_handler = (function spacewar$game_logic$ship$set_target_bearing_handler(p__1481,ship){
var map__1482 = p__1481;
var map__1482__$1 = cljs.core.__destructure_map.call(null,map__1482);
var angle = cljs.core.get.call(null,map__1482__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
return cljs.core.assoc.call(null,ship,new cljs.core.Keyword(null,"target-bearing","target-bearing",-1661786546),angle);
});
spacewar.game_logic.ship.set_engine_power_handler = (function spacewar$game_logic$ship$set_engine_power_handler(p__1483,ship){
var map__1484 = p__1483;
var map__1484__$1 = cljs.core.__destructure_map.call(null,map__1484);
var value = cljs.core.get.call(null,map__1484__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.assoc.call(null,ship,new cljs.core.Keyword(null,"engine-power-setting","engine-power-setting",805524153),value);
});
spacewar.game_logic.ship.set_weapon_number_handler = (function spacewar$game_logic$ship$set_weapon_number_handler(p__1485,ship){
var map__1486 = p__1485;
var map__1486__$1 = cljs.core.__destructure_map.call(null,map__1486);
var value = cljs.core.get.call(null,map__1486__$1,new cljs.core.Keyword(null,"value","value",305978217));
var selected_weapon = new cljs.core.Keyword(null,"selected-weapon","selected-weapon",1106774428).cljs$core$IFn$_invoke$arity$1(ship);
var ship__$1 = cljs.core.assoc.call(null,ship,new cljs.core.Keyword(null,"weapon-number-setting","weapon-number-setting",261885890),value);
var ship__$2 = cljs.core.assoc_in.call(null,ship__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"saved-weapon-settings","saved-weapon-settings",1053923026),selected_weapon,new cljs.core.Keyword(null,"number-setting","number-setting",-1662919745)], null),value);
var ship__$3 = (((value > (1)))?ship__$2:(function (){
cljs.core.assoc_in.call(null,ship__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"saved-weapon-settings","saved-weapon-settings",1053923026),selected_weapon,new cljs.core.Keyword(null,"spread-setting","spread-setting",-1411265316)], null),spacewar.game_logic.config.min_spread);

return cljs.core.assoc.call(null,ship__$2,new cljs.core.Keyword(null,"weapon-spread-setting","weapon-spread-setting",286464677),spacewar.game_logic.config.min_spread);
})()
);
return ship__$3;
});
spacewar.game_logic.ship.set_weapon_spread_handler = (function spacewar$game_logic$ship$set_weapon_spread_handler(p__1487,ship){
var map__1488 = p__1487;
var map__1488__$1 = cljs.core.__destructure_map.call(null,map__1488);
var value = cljs.core.get.call(null,map__1488__$1,new cljs.core.Keyword(null,"value","value",305978217));
var selected_weapon = new cljs.core.Keyword(null,"selected-weapon","selected-weapon",1106774428).cljs$core$IFn$_invoke$arity$1(ship);
var ship__$1 = cljs.core.assoc.call(null,ship,new cljs.core.Keyword(null,"weapon-spread-setting","weapon-spread-setting",286464677),value);
var ship__$2 = cljs.core.assoc_in.call(null,ship__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"saved-weapon-settings","saved-weapon-settings",1053923026),selected_weapon,new cljs.core.Keyword(null,"spread-setting","spread-setting",-1411265316)], null),value);
return ship__$2;
});
spacewar.game_logic.ship.engage_engine_handler = (function spacewar$game_logic$ship$engage_engine_handler(_,ship){
var map__1489 = ship;
var map__1489__$1 = cljs.core.__destructure_map.call(null,map__1489);
var selected_engine = cljs.core.get.call(null,map__1489__$1,new cljs.core.Keyword(null,"selected-engine","selected-engine",-1137424385));
var engine_power_setting = cljs.core.get.call(null,map__1489__$1,new cljs.core.Keyword(null,"engine-power-setting","engine-power-setting",805524153));
if(cljs.core._EQ_.call(null,selected_engine,new cljs.core.Keyword(null,"none","none",1333468478))){
return ship;
} else {
return cljs.core.assoc.call(null,ship,selected_engine,engine_power_setting,new cljs.core.Keyword(null,"engine-power-setting","engine-power-setting",805524153),(0));
}
});
spacewar.game_logic.ship.select_impulse = (function spacewar$game_logic$ship$select_impulse(_,ship){
var selected_engine = new cljs.core.Keyword(null,"selected-engine","selected-engine",-1137424385).cljs$core$IFn$_invoke$arity$1(ship);
return cljs.core.assoc.call(null,ship,new cljs.core.Keyword(null,"selected-engine","selected-engine",-1137424385),((cljs.core._EQ_.call(null,selected_engine,new cljs.core.Keyword(null,"impulse","impulse",486537698)))?new cljs.core.Keyword(null,"none","none",1333468478):new cljs.core.Keyword(null,"impulse","impulse",486537698)));
});
spacewar.game_logic.ship.select_warp = (function spacewar$game_logic$ship$select_warp(_,ship){
var selected_engine = new cljs.core.Keyword(null,"selected-engine","selected-engine",-1137424385).cljs$core$IFn$_invoke$arity$1(ship);
return cljs.core.assoc.call(null,ship,new cljs.core.Keyword(null,"selected-engine","selected-engine",-1137424385),((cljs.core._EQ_.call(null,selected_engine,new cljs.core.Keyword(null,"warp","warp",-931589598)))?new cljs.core.Keyword(null,"none","none",1333468478):new cljs.core.Keyword(null,"warp","warp",-931589598)));
});
spacewar.game_logic.ship.select_front_view = (function spacewar$game_logic$ship$select_front_view(_,ship){
return cljs.core.assoc.call(null,ship,new cljs.core.Keyword(null,"selected-view","selected-view",501290513),new cljs.core.Keyword(null,"front-view","front-view",-1631827770));
});
spacewar.game_logic.ship.select_strat_view = (function spacewar$game_logic$ship$select_strat_view(_,ship){
return cljs.core.assoc.call(null,ship,new cljs.core.Keyword(null,"selected-view","selected-view",501290513),new cljs.core.Keyword(null,"strat-view","strat-view",-1761243979));
});
spacewar.game_logic.ship.select_tact_view = (function spacewar$game_logic$ship$select_tact_view(_,ship){
return cljs.core.assoc.call(null,ship,new cljs.core.Keyword(null,"selected-view","selected-view",501290513),new cljs.core.Keyword(null,"tact-view","tact-view",780498246));
});
spacewar.game_logic.ship.select_phaser = (function spacewar$game_logic$ship$select_phaser(_,p__1490){
var map__1491 = p__1490;
var map__1491__$1 = cljs.core.__destructure_map.call(null,map__1491);
var ship = map__1491__$1;
var selected_weapon = cljs.core.get.call(null,map__1491__$1,new cljs.core.Keyword(null,"selected-weapon","selected-weapon",1106774428));
return cljs.core.assoc.call(null,ship,new cljs.core.Keyword(null,"weapon-number-setting","weapon-number-setting",261885890),cljs.core.get_in.call(null,ship,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"saved-weapon-settings","saved-weapon-settings",1053923026),new cljs.core.Keyword(null,"phaser","phaser",-1448421666),new cljs.core.Keyword(null,"number-setting","number-setting",-1662919745)], null),(1)),new cljs.core.Keyword(null,"weapon-spread-setting","weapon-spread-setting",286464677),cljs.core.get_in.call(null,ship,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"saved-weapon-settings","saved-weapon-settings",1053923026),new cljs.core.Keyword(null,"phaser","phaser",-1448421666),new cljs.core.Keyword(null,"spread-setting","spread-setting",-1411265316)], null),spacewar.game_logic.config.min_spread),new cljs.core.Keyword(null,"selected-weapon","selected-weapon",1106774428),((cljs.core._EQ_.call(null,selected_weapon,new cljs.core.Keyword(null,"phaser","phaser",-1448421666)))?new cljs.core.Keyword(null,"none","none",1333468478):new cljs.core.Keyword(null,"phaser","phaser",-1448421666)));
});
spacewar.game_logic.ship.select_torpedo = (function spacewar$game_logic$ship$select_torpedo(_,p__1492){
var map__1493 = p__1492;
var map__1493__$1 = cljs.core.__destructure_map.call(null,map__1493);
var ship = map__1493__$1;
var selected_weapon = cljs.core.get.call(null,map__1493__$1,new cljs.core.Keyword(null,"selected-weapon","selected-weapon",1106774428));
return cljs.core.assoc.call(null,ship,new cljs.core.Keyword(null,"weapon-number-setting","weapon-number-setting",261885890),cljs.core.get_in.call(null,ship,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"saved-weapon-settings","saved-weapon-settings",1053923026),new cljs.core.Keyword(null,"torpedo","torpedo",275681140),new cljs.core.Keyword(null,"number-setting","number-setting",-1662919745)], null),(1)),new cljs.core.Keyword(null,"weapon-spread-setting","weapon-spread-setting",286464677),cljs.core.get_in.call(null,ship,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"saved-weapon-settings","saved-weapon-settings",1053923026),new cljs.core.Keyword(null,"torpedo","torpedo",275681140),new cljs.core.Keyword(null,"spread-setting","spread-setting",-1411265316)], null),spacewar.game_logic.config.min_spread),new cljs.core.Keyword(null,"selected-weapon","selected-weapon",1106774428),((cljs.core._EQ_.call(null,selected_weapon,new cljs.core.Keyword(null,"torpedo","torpedo",275681140)))?new cljs.core.Keyword(null,"none","none",1333468478):new cljs.core.Keyword(null,"torpedo","torpedo",275681140)));
});
spacewar.game_logic.ship.select_kinetic = (function spacewar$game_logic$ship$select_kinetic(_,p__1494){
var map__1495 = p__1494;
var map__1495__$1 = cljs.core.__destructure_map.call(null,map__1495);
var ship = map__1495__$1;
var selected_weapon = cljs.core.get.call(null,map__1495__$1,new cljs.core.Keyword(null,"selected-weapon","selected-weapon",1106774428));
return cljs.core.assoc.call(null,ship,new cljs.core.Keyword(null,"weapon-number-setting","weapon-number-setting",261885890),cljs.core.get_in.call(null,ship,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"saved-weapon-settings","saved-weapon-settings",1053923026),new cljs.core.Keyword(null,"kinetic","kinetic",-451191810),new cljs.core.Keyword(null,"number-setting","number-setting",-1662919745)], null),(1)),new cljs.core.Keyword(null,"weapon-spread-setting","weapon-spread-setting",286464677),cljs.core.get_in.call(null,ship,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"saved-weapon-settings","saved-weapon-settings",1053923026),new cljs.core.Keyword(null,"kinetic","kinetic",-451191810),new cljs.core.Keyword(null,"spread-setting","spread-setting",-1411265316)], null),spacewar.game_logic.config.min_spread),new cljs.core.Keyword(null,"selected-weapon","selected-weapon",1106774428),((cljs.core._EQ_.call(null,selected_weapon,new cljs.core.Keyword(null,"kinetic","kinetic",-451191810)))?new cljs.core.Keyword(null,"none","none",1333468478):new cljs.core.Keyword(null,"kinetic","kinetic",-451191810)));
});
spacewar.game_logic.ship.set_strat_scale = (function spacewar$game_logic$ship$set_strat_scale(p__1496,ship){
var map__1497 = p__1496;
var map__1497__$1 = cljs.core.__destructure_map.call(null,map__1497);
var value = cljs.core.get.call(null,map__1497__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.assoc.call(null,ship,new cljs.core.Keyword(null,"strat-scale","strat-scale",-510133488),value);
});
spacewar.game_logic.ship.in_range_of_base = (function spacewar$game_logic$ship$in_range_of_base(ship,base){
return (spacewar.geometry.distance.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(base),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(base)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ship)], null)) < spacewar.game_logic.config.ship_docking_distance);
});
spacewar.game_logic.ship.resupply_ship = (function spacewar$game_logic$ship$resupply_ship(ship,base,commodity,maximum){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"corbomite-device","corbomite-device",-829250405),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(base))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ship,base], null);
} else {
var need = (maximum - ship.call(null,commodity));
var supplied = ((function (){var x__5090__auto__ = need;
var y__5091__auto__ = base.call(null,commodity);
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})() | (0));
var ship__$1 = cljs.core.update.call(null,ship,commodity,cljs.core._PLUS_,supplied);
var base__$1 = cljs.core.update.call(null,base,commodity,cljs.core._,supplied);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ship__$1,base__$1], null);
}
});
spacewar.game_logic.ship.resupply_ship_from_bases = (function spacewar$game_logic$ship$resupply_ship_from_bases(ship,bases){
var base_map = spacewar.util.pos_map.call(null,bases);
var ship__$1 = ship;
var bases__$1 = cljs.core.keys.call(null,base_map);
var base_map__$1 = base_map;
while(true){
if(cljs.core.empty_QMARK_.call(null,bases__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ship__$1,cljs.core.vals.call(null,base_map__$1)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"corbomite-device","corbomite-device",-829250405),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,base_map__$1,cljs.core.first.call(null,bases__$1))))){
var G__1522 = cljs.core.assoc.call(null,ship__$1,new cljs.core.Keyword(null,"corbomite-device-installed","corbomite-device-installed",-2093492516),true);
var G__1523 = cljs.core.rest.call(null,bases__$1);
var G__1524 = cljs.core.assoc.call(null,base_map__$1,cljs.core.first.call(null,bases__$1),null);
ship__$1 = G__1522;
bases__$1 = G__1523;
base_map__$1 = G__1524;
continue;
} else {
var base = cljs.core.get.call(null,base_map__$1,cljs.core.first.call(null,bases__$1));
var vec__1510 = spacewar.game_logic.ship.resupply_ship.call(null,ship__$1,base,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),spacewar.game_logic.config.ship_antimatter);
var ship__$2 = cljs.core.nth.call(null,vec__1510,(0),null);
var base__$1 = cljs.core.nth.call(null,vec__1510,(1),null);
var vec__1513 = spacewar.game_logic.ship.resupply_ship.call(null,ship__$2,base__$1,new cljs.core.Keyword(null,"dilithium","dilithium",1152933090),spacewar.game_logic.config.ship_dilithium);
var ship__$3 = cljs.core.nth.call(null,vec__1513,(0),null);
var base__$2 = cljs.core.nth.call(null,vec__1513,(1),null);
var vec__1516 = spacewar.game_logic.ship.resupply_ship.call(null,ship__$3,base__$2,new cljs.core.Keyword(null,"torpedos","torpedos",344905121),spacewar.game_logic.config.ship_torpedos);
var ship__$4 = cljs.core.nth.call(null,vec__1516,(0),null);
var base__$3 = cljs.core.nth.call(null,vec__1516,(1),null);
var vec__1519 = spacewar.game_logic.ship.resupply_ship.call(null,ship__$4,base__$3,new cljs.core.Keyword(null,"kinetics","kinetics",-707133266),spacewar.game_logic.config.ship_kinetics);
var ship__$5 = cljs.core.nth.call(null,vec__1519,(0),null);
var base__$4 = cljs.core.nth.call(null,vec__1519,(1),null);
var G__1525 = ship__$5;
var G__1526 = cljs.core.rest.call(null,bases__$1);
var G__1527 = cljs.core.assoc.call(null,base_map__$1,cljs.core.first.call(null,bases__$1),base__$4);
ship__$1 = G__1525;
bases__$1 = G__1526;
base_map__$1 = G__1527;
continue;
}
}
break;
}
});
spacewar.game_logic.ship.dock_ship = (function spacewar$game_logic$ship$dock_ship(_,world){
var ship = new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(world);
var bases = new cljs.core.Keyword(null,"bases","bases",-1036892420).cljs$core$IFn$_invoke$arity$1(world);
var grouped_bases = cljs.core.group_by.call(null,(function (p1__1528_SHARP_){
return spacewar.game_logic.ship.in_range_of_base.call(null,ship,p1__1528_SHARP_);
}),bases);
var docked_bases = grouped_bases.call(null,true);
var distant_bases = grouped_bases.call(null,false);
var vec__1529 = spacewar.game_logic.ship.resupply_ship_from_bases.call(null,ship,docked_bases);
var ship__$1 = cljs.core.nth.call(null,vec__1529,(0),null);
var docked_bases__$1 = cljs.core.nth.call(null,vec__1529,(1),null);
var docked_bases__$2 = cljs.core.filter.call(null,cljs.core.some_QMARK_,docked_bases__$1);
var ship__$2 = cljs.core.assoc.call(null,ship__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"warp","warp",-931589598),(0),new cljs.core.Keyword(null,"impulse","impulse",486537698),(0));
var world__$1 = cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"ship","ship",197863473),ship__$2,new cljs.core.Keyword(null,"bases","bases",-1036892420),cljs.core.concat.call(null,distant_bases,docked_bases__$2));
return world__$1;
});
spacewar.game_logic.ship.deployment_classes = (function spacewar$game_logic$ship$deployment_classes(factory){
var pred__1532 = cljs.core._EQ_;
var expr__1533 = factory;
if(cljs.core.truth_(pred__1532.call(null,new cljs.core.Keyword(null,"antimatter-factory","antimatter-factory",218121254),expr__1533))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"o","o",-1350007228),null,new cljs.core.Keyword(null,"b","b",1482224470),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null);
} else {
if(cljs.core.truth_(pred__1532.call(null,new cljs.core.Keyword(null,"dilithium-factory","dilithium-factory",1437622905),expr__1533))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"m","m",1632677161),null,new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null);
} else {
if(cljs.core.truth_(pred__1532.call(null,new cljs.core.Keyword(null,"weapon-factory","weapon-factory",-475320995),expr__1533))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"g","g",1738089905),null,new cljs.core.Keyword(null,"f","f",-1597136552),null], null), null);
} else {
if(cljs.core.truth_(pred__1532.call(null,new cljs.core.Keyword(null,"corbomite-factory","corbomite-factory",339807181),expr__1533))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pulsar","pulsar",-980308240),null], null), null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__1533)].join('')));
}
}
}
}
});
spacewar.game_logic.ship.find_deployable_star = (function spacewar$game_logic$ship$find_deployable_star(type,ship,stars){
var stars_in_range = cljs.core.filter.call(null,(function (p1__1535_SHARP_){
return (spacewar.geometry.distance.call(null,spacewar.util.pos.call(null,ship),spacewar.util.pos.call(null,p1__1535_SHARP_)) < spacewar.game_logic.config.ship_deploy_distance);
}),stars);
var deployable_classes = spacewar.game_logic.ship.deployment_classes.call(null,type);
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__1536_SHARP_){
return deployable_classes.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__1536_SHARP_));
}),stars_in_range));
});
spacewar.game_logic.ship.base_already_deployed_QMARK_ = (function spacewar$game_logic$ship$base_already_deployed_QMARK_(star,bases){
var bases_in_range = cljs.core.filter.call(null,(function (p1__1537_SHARP_){
return (spacewar.geometry.distance.call(null,spacewar.util.pos.call(null,star),spacewar.util.pos.call(null,p1__1537_SHARP_)) < spacewar.game_logic.config.ship_deploy_distance);
}),bases);
return (!(cljs.core.empty_QMARK_.call(null,bases_in_range)));
});
spacewar.game_logic.ship.sufficient_resources_for_deployment_QMARK_ = (function spacewar$game_logic$ship$sufficient_resources_for_deployment_QMARK_(ship){
var map__1538 = ship;
var map__1538__$1 = cljs.core.__destructure_map.call(null,map__1538);
var antimatter = cljs.core.get.call(null,map__1538__$1,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000));
var dilithium = cljs.core.get.call(null,map__1538__$1,new cljs.core.Keyword(null,"dilithium","dilithium",1152933090));
return (((antimatter > spacewar.game_logic.config.base_deployment_antimatter)) && ((dilithium > spacewar.game_logic.config.base_deployment_dilithium)));
});
spacewar.game_logic.ship.add_transport_routes_to = (function spacewar$game_logic$ship$add_transport_routes_to(p__1542,new_base){
var map__1543 = p__1542;
var map__1543__$1 = cljs.core.__destructure_map.call(null,map__1543);
var world = map__1543__$1;
var bases = cljs.core.get.call(null,map__1543__$1,new cljs.core.Keyword(null,"bases","bases",-1036892420));
var base_pairs = cljs.core.map.call(null,(function (p1__1539_SHARP_){
return (new cljs.core.List(null,p1__1539_SHARP_,(new cljs.core.List(null,new_base,null,(1),null)),(2),null));
}),bases);
var base_distances = cljs.core.map.call(null,(function (p1__1540_SHARP_){
return (new cljs.core.List(null,spacewar.geometry.distance.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,p1__1540_SHARP_)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,p1__1540_SHARP_))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__1540_SHARP_)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__1540_SHARP_))], null)),(new cljs.core.List(null,p1__1540_SHARP_,null,(1),null)),(2),null));
}),base_pairs);
var valid_routes = cljs.core.filter.call(null,(function (p1__1541_SHARP_){
return (cljs.core.first.call(null,p1__1541_SHARP_) <= spacewar.game_logic.config.transport_range);
}),base_distances);
var sorted_routes = cljs.core.map.call(null,cljs.core.second,cljs.core.sort_by.call(null,cljs.core.first,valid_routes));
var transport_routes = cljs.core.map.call(null,(function (p__1544){
var vec__1545 = p__1544;
var b1 = cljs.core.nth.call(null,vec__1545,(0),null);
var b2 = cljs.core.nth.call(null,vec__1545,(1),null);
return cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b2),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b2)], null)]);
}),cljs.core.take.call(null,spacewar.game_logic.config.base_routes_limit,sorted_routes));
return cljs.core.update.call(null,world,new cljs.core.Keyword(null,"transport-routes","transport-routes",1028896693),clojure.set.union,cljs.core.set.call(null,transport_routes));
});
spacewar.game_logic.ship.deploy_base = (function spacewar$game_logic$ship$deploy_base(type,world){
var map__1548 = world;
var map__1548__$1 = cljs.core.__destructure_map.call(null,map__1548);
var ship = cljs.core.get.call(null,map__1548__$1,new cljs.core.Keyword(null,"ship","ship",197863473));
var stars = cljs.core.get.call(null,map__1548__$1,new cljs.core.Keyword(null,"stars","stars",-556837771));
var bases = cljs.core.get.call(null,map__1548__$1,new cljs.core.Keyword(null,"bases","bases",-1036892420));
var deployable_star = spacewar.game_logic.ship.find_deployable_star.call(null,type,ship,stars);
if(cljs.core.not.call(null,deployable_star)){
return spacewar.game_logic.world.add_message.call(null,world,"No star nearby sir.",(2000));
} else {
if(spacewar.game_logic.ship.base_already_deployed_QMARK_.call(null,deployable_star,bases)){
return spacewar.game_logic.world.add_message.call(null,world,"Base already deployed, sir.",(2000));
} else {
if((!(spacewar.game_logic.ship.sufficient_resources_for_deployment_QMARK_.call(null,ship)))){
return spacewar.game_logic.world.add_message.call(null,world,"Insufficient resources sir.",(2000));
} else {
var map__1549 = ship;
var map__1549__$1 = cljs.core.__destructure_map.call(null,map__1549);
var x = cljs.core.get.call(null,map__1549__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__1549__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var bases__$1 = new cljs.core.Keyword(null,"bases","bases",-1036892420).cljs$core$IFn$_invoke$arity$1(world);
var base = spacewar.game_logic.bases.make_base.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),type);
var bases__$2 = cljs.core.conj.call(null,bases__$1,base);
var ship__$1 = cljs.core.update.call(null,cljs.core.update.call(null,ship,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),cljs.core._,spacewar.game_logic.config.base_deployment_antimatter),new cljs.core.Keyword(null,"dilithium","dilithium",1152933090),cljs.core._,spacewar.game_logic.config.base_deployment_dilithium);
var world__$1 = spacewar.game_logic.ship.add_transport_routes_to.call(null,world,base);
return cljs.core.assoc.call(null,world__$1,new cljs.core.Keyword(null,"bases","bases",-1036892420),bases__$2,new cljs.core.Keyword(null,"ship","ship",197863473),ship__$1);
}
}
}
});
spacewar.game_logic.ship.deploy_antimatter_factory = (function spacewar$game_logic$ship$deploy_antimatter_factory(_,world){
return spacewar.game_logic.ship.deploy_base.call(null,new cljs.core.Keyword(null,"antimatter-factory","antimatter-factory",218121254),world);
});
spacewar.game_logic.ship.deploy_dilithium_factory = (function spacewar$game_logic$ship$deploy_dilithium_factory(_,world){
return spacewar.game_logic.ship.deploy_base.call(null,new cljs.core.Keyword(null,"dilithium-factory","dilithium-factory",1437622905),world);
});
spacewar.game_logic.ship.deploy_weapon_factory = (function spacewar$game_logic$ship$deploy_weapon_factory(_,world){
return spacewar.game_logic.ship.deploy_base.call(null,new cljs.core.Keyword(null,"weapon-factory","weapon-factory",-475320995),world);
});
spacewar.game_logic.ship.deploy_corbomite_factory = (function spacewar$game_logic$ship$deploy_corbomite_factory(_,world){
return spacewar.game_logic.ship.deploy_base.call(null,new cljs.core.Keyword(null,"corbomite-factory","corbomite-factory",339807181),world);
});
spacewar.game_logic.ship.process_events = (function spacewar$game_logic$ship$process_events(events,world){
var ship = new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(world);
var vec__1550 = spacewar.util.handle_event.call(null,new cljs.core.Keyword(null,"strat-scale","strat-scale",-510133488),spacewar.game_logic.ship.set_strat_scale,spacewar.util.handle_event.call(null,new cljs.core.Keyword(null,"select-kinetic","select-kinetic",-1979975395),spacewar.game_logic.ship.select_kinetic,spacewar.util.handle_event.call(null,new cljs.core.Keyword(null,"select-torpedo","select-torpedo",-988138585),spacewar.game_logic.ship.select_torpedo,spacewar.util.handle_event.call(null,new cljs.core.Keyword(null,"select-phaser","select-phaser",-801446754),spacewar.game_logic.ship.select_phaser,spacewar.util.handle_event.call(null,new cljs.core.Keyword(null,"select-warp","select-warp",-106300794),spacewar.game_logic.ship.select_warp,spacewar.util.handle_event.call(null,new cljs.core.Keyword(null,"select-impulse","select-impulse",-798585565),spacewar.game_logic.ship.select_impulse,spacewar.util.handle_event.call(null,new cljs.core.Keyword(null,"engine-engage","engine-engage",-1131016264),spacewar.game_logic.ship.engage_engine_handler,spacewar.util.handle_event.call(null,new cljs.core.Keyword(null,"weapon-spread","weapon-spread",1329920563),spacewar.game_logic.ship.set_weapon_spread_handler,spacewar.util.handle_event.call(null,new cljs.core.Keyword(null,"weapon-number","weapon-number",-670823245),spacewar.game_logic.ship.set_weapon_number_handler,spacewar.util.handle_event.call(null,new cljs.core.Keyword(null,"weapon-direction","weapon-direction",-1739420635),spacewar.game_logic.ship.set_target_bearing_handler,spacewar.util.handle_event.call(null,new cljs.core.Keyword(null,"engine-power","engine-power",-1017372470),spacewar.game_logic.ship.set_engine_power_handler,spacewar.util.handle_event.call(null,new cljs.core.Keyword(null,"engine-direction","engine-direction",1952788439),spacewar.game_logic.ship.set_heading_handler,spacewar.util.handle_event.call(null,new cljs.core.Keyword(null,"tactical-scan","tactical-scan",-1078051333),spacewar.game_logic.ship.select_tact_view,spacewar.util.handle_event.call(null,new cljs.core.Keyword(null,"strategic-scan","strategic-scan",1955219168),spacewar.game_logic.ship.select_strat_view,spacewar.util.handle_event.call(null,new cljs.core.Keyword(null,"front-view","front-view",-1631827770),spacewar.game_logic.ship.select_front_view,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [events,ship], null))))))))))))))));
var _ = cljs.core.nth.call(null,vec__1550,(0),null);
var ship__$1 = cljs.core.nth.call(null,vec__1550,(1),null);
var world__$1 = cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"ship","ship",197863473),ship__$1);
var vec__1553 = spacewar.util.handle_event.call(null,new cljs.core.Keyword(null,"corbomite-factory","corbomite-factory",339807181),spacewar.game_logic.ship.deploy_corbomite_factory,spacewar.util.handle_event.call(null,new cljs.core.Keyword(null,"weapon-factory","weapon-factory",-475320995),spacewar.game_logic.ship.deploy_weapon_factory,spacewar.util.handle_event.call(null,new cljs.core.Keyword(null,"dilithium-factory","dilithium-factory",1437622905),spacewar.game_logic.ship.deploy_dilithium_factory,spacewar.util.handle_event.call(null,new cljs.core.Keyword(null,"antimatter-factory","antimatter-factory",218121254),spacewar.game_logic.ship.deploy_antimatter_factory,spacewar.util.handle_event.call(null,new cljs.core.Keyword(null,"select-dock","select-dock",-1068226160),spacewar.game_logic.ship.dock_ship,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [events,world__$1], null))))));
var ___$1 = cljs.core.nth.call(null,vec__1553,(0),null);
var world__$2 = cljs.core.nth.call(null,vec__1553,(1),null);
return world__$2;
});
spacewar.game_logic.ship.dockable_QMARK_ = (function spacewar$game_logic$ship$dockable_QMARK_(ship,bases){
if(cljs.core.empty_QMARK_.call(null,bases)){
return false;
} else {
var distances = cljs.core.map.call(null,(function (p1__1556_SHARP_){
return spacewar.geometry.distance.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ship)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__1556_SHARP_),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1__1556_SHARP_)], null));
}),bases);
var closest = cljs.core.apply.call(null,cljs.core.min,distances);
return (closest < spacewar.game_logic.config.ship_docking_distance);
}
});
spacewar.game_logic.ship.deployable_QMARK_ = (function spacewar$game_logic$ship$deployable_QMARK_(factory,ship,stars){
var map__1559 = ship;
var map__1559__$1 = cljs.core.__destructure_map.call(null,map__1559);
var x = cljs.core.get.call(null,map__1559__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__1559__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var deployment_classes_set = spacewar.game_logic.ship.deployment_classes.call(null,factory);
var deployable_stars = cljs.core.filter.call(null,(function (p1__1557_SHARP_){
return deployment_classes_set.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__1557_SHARP_));
}),stars);
var distances = cljs.core.map.call(null,(function (p1__1558_SHARP_){
return spacewar.geometry.distance.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__1558_SHARP_),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1__1558_SHARP_)], null));
}),deployable_stars);
var closest = ((cljs.core.empty_QMARK_.call(null,distances))?null:cljs.core.apply.call(null,cljs.core.min,distances));
if(cljs.core.truth_(closest)){
return (closest < spacewar.game_logic.config.ship_deploy_distance);
} else {
return false;
}
});
spacewar.game_logic.ship.reincarnate = (function spacewar$game_logic$ship$reincarnate(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"torpedos","torpedos",344905121),new cljs.core.Keyword(null,"dilithium","dilithium",1152933090),new cljs.core.Keyword(null,"impulse","impulse",486537698),new cljs.core.Keyword(null,"warp","warp",-931589598),new cljs.core.Keyword(null,"hull-damage","hull-damage",-536688766),new cljs.core.Keyword(null,"weapon-number-setting","weapon-number-setting",261885890),new cljs.core.Keyword(null,"weapons-damage","weapons-damage",1275474500),new cljs.core.Keyword(null,"weapon-spread-setting","weapon-spread-setting",286464677),new cljs.core.Keyword(null,"warp-charge","warp-charge",2059878027),new cljs.core.Keyword(null,"warp-damage","warp-damage",-1651122162),new cljs.core.Keyword(null,"kinetics","kinetics",-707133266),new cljs.core.Keyword(null,"target-bearing","target-bearing",-1661786546),new cljs.core.Keyword(null,"impulse-damage","impulse-damage",2036309966),new cljs.core.Keyword(null,"strat-scale","strat-scale",-510133488),new cljs.core.Keyword(null,"selected-view","selected-view",501290513),new cljs.core.Keyword(null,"life-support-damage","life-support-damage",1212244818),new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"destroyed","destroyed",-427566535),new cljs.core.Keyword(null,"engine-power-setting","engine-power-setting",805524153),new cljs.core.Keyword(null,"core-temp","core-temp",715877178),new cljs.core.Keyword(null,"selected-weapon","selected-weapon",1106774428),new cljs.core.Keyword(null,"corbomite-device-installed","corbomite-device-installed",-2093492516),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.Keyword(null,"heading-setting","heading-setting",634943),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"sensor-damage","sensor-damage",-1401969345),new cljs.core.Keyword(null,"shields","shields",-295786721),new cljs.core.Keyword(null,"selected-engine","selected-engine",-1137424385)],[(cljs.core.rand.call(null,spacewar.game_logic.config.known_space_y) | (0)),(spacewar.game_logic.config.ship_torpedos / (2)),(spacewar.game_logic.config.ship_dilithium / (2)),(0),(0),(0),(1),(0),(1),(0),(0),(spacewar.game_logic.config.ship_kinetics / (2)),(0),(0),(1),new cljs.core.Keyword(null,"front-view","front-view",-1631827770),(0),(spacewar.game_logic.config.ship_antimatter / (2)),(cljs.core.rand.call(null,spacewar.game_logic.config.known_space_x) | (0)),false,(0),(0),new cljs.core.Keyword(null,"none","none",1333468478),false,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(0),(0),(0),spacewar.game_logic.config.ship_shields,new cljs.core.Keyword(null,"none","none",1333468478)]);
});

//# sourceMappingURL=ship.js.map
