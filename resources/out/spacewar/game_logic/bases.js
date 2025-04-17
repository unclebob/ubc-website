// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('spacewar.game_logic.bases');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('spacewar.game_logic.config');
goog.require('spacewar.game_logic.explosions');
goog.require('spacewar.ui.messages');
goog.require('spacewar.geometry');
goog.require('spacewar.util');
goog.require('spacewar.vector');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.bases","x","spacewar.game-logic.bases/x",-920645444),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.bases","y","spacewar.game-logic.bases/y",54158483),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.bases","type","spacewar.game-logic.bases/type",-770533969),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"antimatter-factory","antimatter-factory",218121254),"null",new cljs.core.Keyword(null,"corbomite-factory","corbomite-factory",339807181),"null",new cljs.core.Keyword(null,"dilithium-factory","dilithium-factory",1437622905),"null",new cljs.core.Keyword(null,"corbomite-device","corbomite-device",-829250405),"null",new cljs.core.Keyword(null,"weapon-factory","weapon-factory",-475320995),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"antimatter-factory","antimatter-factory",218121254),null,new cljs.core.Keyword(null,"corbomite-factory","corbomite-factory",339807181),null,new cljs.core.Keyword(null,"dilithium-factory","dilithium-factory",1437622905),null,new cljs.core.Keyword(null,"corbomite-device","corbomite-device",-829250405),null,new cljs.core.Keyword(null,"weapon-factory","weapon-factory",-475320995),null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.bases","antimatter","spacewar.game-logic.bases/antimatter",660583729),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.bases","dilithium","spacewar.game-logic.bases/dilithium",-792917371),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.bases","corbomite","spacewar.game-logic.bases/corbomite",337862303),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.bases","kinetics","spacewar.game-logic.bases/kinetics",970450065),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.bases","torpedos","spacewar.game-logic.bases/torpedos",-2138412730),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.bases","age","spacewar.game-logic.bases/age",-403199359),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.bases","transport-readiness","spacewar.game-logic.bases/transport-readiness",832436395),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.bases","base","spacewar.game-logic.bases/base",-1760233657),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.game-logic.bases","x","spacewar.game-logic.bases/x",-920645444),new cljs.core.Keyword("spacewar.game-logic.bases","y","spacewar.game-logic.bases/y",54158483),new cljs.core.Keyword("spacewar.game-logic.bases","type","spacewar.game-logic.bases/type",-770533969),new cljs.core.Keyword("spacewar.game-logic.bases","antimatter","spacewar.game-logic.bases/antimatter",660583729),new cljs.core.Keyword("spacewar.game-logic.bases","dilithium","spacewar.game-logic.bases/dilithium",-792917371),new cljs.core.Keyword("spacewar.game-logic.bases","corbomite","spacewar.game-logic.bases/corbomite",337862303),new cljs.core.Keyword("spacewar.game-logic.bases","age","spacewar.game-logic.bases/age",-403199359),new cljs.core.Keyword("spacewar.game-logic.bases","transport-readiness","spacewar.game-logic.bases/transport-readiness",832436395)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.game-logic.bases","kinetics","spacewar.game-logic.bases/kinetics",970450065),new cljs.core.Keyword("spacewar.game-logic.bases","torpedos","spacewar.game-logic.bases/torpedos",-2138412730)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.game-logic.bases","x","spacewar.game-logic.bases/x",-920645444),new cljs.core.Keyword("spacewar.game-logic.bases","y","spacewar.game-logic.bases/y",54158483),new cljs.core.Keyword("spacewar.game-logic.bases","type","spacewar.game-logic.bases/type",-770533969),new cljs.core.Keyword("spacewar.game-logic.bases","antimatter","spacewar.game-logic.bases/antimatter",660583729),new cljs.core.Keyword("spacewar.game-logic.bases","dilithium","spacewar.game-logic.bases/dilithium",-792917371),new cljs.core.Keyword("spacewar.game-logic.bases","corbomite","spacewar.game-logic.bases/corbomite",337862303),new cljs.core.Keyword("spacewar.game-logic.bases","age","spacewar.game-logic.bases/age",-403199359),new cljs.core.Keyword("spacewar.game-logic.bases","transport-readiness","spacewar.game-logic.bases/transport-readiness",832436395)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.game-logic.bases","kinetics","spacewar.game-logic.bases/kinetics",970450065),new cljs.core.Keyword("spacewar.game-logic.bases","torpedos","spacewar.game-logic.bases/torpedos",-2138412730)], null),null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__550){
return cljs.core.map_QMARK_.call(null,G__550);
}),(function (G__550){
return cljs.core.contains_QMARK_.call(null,G__550,new cljs.core.Keyword(null,"x","x",2099068185));
}),(function (G__550){
return cljs.core.contains_QMARK_.call(null,G__550,new cljs.core.Keyword(null,"y","y",-1757859776));
}),(function (G__550){
return cljs.core.contains_QMARK_.call(null,G__550,new cljs.core.Keyword(null,"type","type",1174270348));
}),(function (G__550){
return cljs.core.contains_QMARK_.call(null,G__550,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000));
}),(function (G__550){
return cljs.core.contains_QMARK_.call(null,G__550,new cljs.core.Keyword(null,"dilithium","dilithium",1152933090));
}),(function (G__550){
return cljs.core.contains_QMARK_.call(null,G__550,new cljs.core.Keyword(null,"corbomite","corbomite",1612720764));
}),(function (G__550){
return cljs.core.contains_QMARK_.call(null,G__550,new cljs.core.Keyword(null,"age","age",-604307804));
}),(function (G__550){
return cljs.core.contains_QMARK_.call(null,G__550,new cljs.core.Keyword(null,"transport-readiness","transport-readiness",-845415320));
})], null),(function (G__550){
return ((cljs.core.map_QMARK_.call(null,G__550)) && (((cljs.core.contains_QMARK_.call(null,G__550,new cljs.core.Keyword(null,"x","x",2099068185))) && (((cljs.core.contains_QMARK_.call(null,G__550,new cljs.core.Keyword(null,"y","y",-1757859776))) && (((cljs.core.contains_QMARK_.call(null,G__550,new cljs.core.Keyword(null,"type","type",1174270348))) && (((cljs.core.contains_QMARK_.call(null,G__550,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000))) && (((cljs.core.contains_QMARK_.call(null,G__550,new cljs.core.Keyword(null,"dilithium","dilithium",1152933090))) && (((cljs.core.contains_QMARK_.call(null,G__550,new cljs.core.Keyword(null,"corbomite","corbomite",1612720764))) && (((cljs.core.contains_QMARK_.call(null,G__550,new cljs.core.Keyword(null,"age","age",-604307804))) && (cljs.core.contains_QMARK_.call(null,G__550,new cljs.core.Keyword(null,"transport-readiness","transport-readiness",-845415320))))))))))))))))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kinetics","kinetics",-707133266),new cljs.core.Keyword(null,"torpedos","torpedos",344905121)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.game-logic.bases","x","spacewar.game-logic.bases/x",-920645444),new cljs.core.Keyword("spacewar.game-logic.bases","y","spacewar.game-logic.bases/y",54158483),new cljs.core.Keyword("spacewar.game-logic.bases","type","spacewar.game-logic.bases/type",-770533969),new cljs.core.Keyword("spacewar.game-logic.bases","antimatter","spacewar.game-logic.bases/antimatter",660583729),new cljs.core.Keyword("spacewar.game-logic.bases","dilithium","spacewar.game-logic.bases/dilithium",-792917371),new cljs.core.Keyword("spacewar.game-logic.bases","corbomite","spacewar.game-logic.bases/corbomite",337862303),new cljs.core.Keyword("spacewar.game-logic.bases","age","spacewar.game-logic.bases/age",-403199359),new cljs.core.Keyword("spacewar.game-logic.bases","transport-readiness","spacewar.game-logic.bases/transport-readiness",832436395)], null),null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),new cljs.core.Keyword(null,"dilithium","dilithium",1152933090),new cljs.core.Keyword(null,"corbomite","corbomite",1612720764),new cljs.core.Keyword(null,"age","age",-604307804),new cljs.core.Keyword(null,"transport-readiness","transport-readiness",-845415320)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.game-logic.bases","kinetics","spacewar.game-logic.bases/kinetics",970450065),new cljs.core.Keyword("spacewar.game-logic.bases","torpedos","spacewar.game-logic.bases/torpedos",-2138412730)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"x","x",2099068185))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"y","y",-1757859776))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"type","type",1174270348))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"dilithium","dilithium",1152933090))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"corbomite","corbomite",1612720764))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"age","age",-604307804))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"transport-readiness","transport-readiness",-845415320)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.bases","bases","spacewar.game-logic.bases/bases",1982657311),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("spacewar.game-logic.bases","base","spacewar.game-logic.bases/base",-1760233657)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.bases","base","spacewar.game-logic.bases/base",-1760233657),new cljs.core.Keyword("spacewar.game-logic.bases","base","spacewar.game-logic.bases/base",-1760233657),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("spacewar.game-logic.bases","base","spacewar.game-logic.bases/base",-1760233657)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__551){
return cljs.core.coll_QMARK_.call(null,G__551);
})], null),null));
spacewar.game_logic.bases.random_base_type = (function spacewar$game_logic$bases$random_base_type(){
return cljs.core.nth.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"antimatter-factory","antimatter-factory",218121254),new cljs.core.Keyword(null,"weapon-factory","weapon-factory",-475320995),new cljs.core.Keyword(null,"dilithium-factory","dilithium-factory",1437622905)], null),cljs.core.rand_int.call(null,(3)));
});
spacewar.game_logic.bases.make_base = (function spacewar$game_logic$bases$make_base(p__552,type){
var vec__553 = p__552;
var x = cljs.core.nth.call(null,vec__553,(0),null);
var y = cljs.core.nth.call(null,vec__553,(1),null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"torpedos","torpedos",344905121),new cljs.core.Keyword(null,"dilithium","dilithium",1152933090),new cljs.core.Keyword(null,"age","age",-604307804),new cljs.core.Keyword(null,"transport-readiness","transport-readiness",-845415320),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kinetics","kinetics",-707133266),new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"corbomite","corbomite",1612720764)],[y,(0),(0),(0),(0),type,(0),(0),x,(0)]);
});
spacewar.game_logic.bases.make_random_antimatter_factory = (function spacewar$game_logic$bases$make_random_antimatter_factory(star){
if((cljs.core.rand.call(null) < ((30) / spacewar.game_logic.config.number_of_stars))){
var base = spacewar.game_logic.bases.make_base.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(star),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(star)], null),new cljs.core.Keyword(null,"antimatter-factory","antimatter-factory",218121254));
var base__$1 = cljs.core.assoc.call(null,base,new cljs.core.Keyword(null,"age","age",-604307804),spacewar.game_logic.config.base_maturity_age,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),cljs.core.rand.call(null,(spacewar.game_logic.config.base_antimatter_maximum / (2))));
return base__$1;
} else {
return null;
}
});
spacewar.game_logic.bases.make_random_weapons_factory = (function spacewar$game_logic$bases$make_random_weapons_factory(star){
if((cljs.core.rand.call(null) < ((5) / spacewar.game_logic.config.number_of_stars))){
var base = spacewar.game_logic.bases.make_base.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(star),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(star)], null),new cljs.core.Keyword(null,"weapon-factory","weapon-factory",-475320995));
var base__$1 = cljs.core.assoc.call(null,base,new cljs.core.Keyword(null,"age","age",-604307804),spacewar.game_logic.config.base_maturity_age,new cljs.core.Keyword(null,"torpedos","torpedos",344905121),cljs.core.rand_int.call(null,(spacewar.game_logic.config.base_torpedos_maximum / (2))),new cljs.core.Keyword(null,"kinetics","kinetics",-707133266),cljs.core.rand_int.call(null,(spacewar.game_logic.config.base_kinetics_maximum / (2))));
return base__$1;
} else {
return null;
}
});
spacewar.game_logic.bases.make_random_dilithium_factory = (function spacewar$game_logic$bases$make_random_dilithium_factory(star){
if((cljs.core.rand.call(null) < ((10) / spacewar.game_logic.config.number_of_stars))){
var base = spacewar.game_logic.bases.make_base.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(star),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(star)], null),new cljs.core.Keyword(null,"dilithium-factory","dilithium-factory",1437622905));
var base__$1 = cljs.core.assoc.call(null,base,new cljs.core.Keyword(null,"age","age",-604307804),spacewar.game_logic.config.base_maturity_age,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),cljs.core.rand.call(null,(spacewar.game_logic.config.base_antimatter_maximum / (2))),new cljs.core.Keyword(null,"dilithium","dilithium",1152933090),cljs.core.rand.call(null,(spacewar.game_logic.config.base_dilithium_maximum / (2))));
return base__$1;
} else {
return null;
}
});
spacewar.game_logic.bases.make_random_base_for_star = (function spacewar$game_logic$bases$make_random_base_for_star(star){
var pred__556 = cljs.core._EQ_;
var expr__557 = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(star);
if(cljs.core.truth_(pred__556.call(null,new cljs.core.Keyword(null,"o","o",-1350007228),expr__557))){
return spacewar.game_logic.bases.make_random_antimatter_factory.call(null,star);
} else {
if(cljs.core.truth_(pred__556.call(null,new cljs.core.Keyword(null,"b","b",1482224470),expr__557))){
return spacewar.game_logic.bases.make_random_antimatter_factory.call(null,star);
} else {
if(cljs.core.truth_(pred__556.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),expr__557))){
return spacewar.game_logic.bases.make_random_antimatter_factory.call(null,star);
} else {
if(cljs.core.truth_(pred__556.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),expr__557))){
return spacewar.game_logic.bases.make_random_weapons_factory.call(null,star);
} else {
if(cljs.core.truth_(pred__556.call(null,new cljs.core.Keyword(null,"g","g",1738089905),expr__557))){
return spacewar.game_logic.bases.make_random_weapons_factory.call(null,star);
} else {
if(cljs.core.truth_(pred__556.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__557))){
return spacewar.game_logic.bases.make_random_dilithium_factory.call(null,star);
} else {
if(cljs.core.truth_(pred__556.call(null,new cljs.core.Keyword(null,"m","m",1632677161),expr__557))){
return spacewar.game_logic.bases.make_random_dilithium_factory.call(null,star);
} else {
if(cljs.core.truth_(pred__556.call(null,new cljs.core.Keyword(null,"pulsar","pulsar",-980308240),expr__557))){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__557)].join('')));
}
}
}
}
}
}
}
}
});
spacewar.game_logic.bases.make_random_bases = (function spacewar$game_logic$bases$make_random_bases(stars){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,spacewar.game_logic.bases.make_random_base_for_star,stars));
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.bases","velocity","spacewar.game-logic.bases/velocity",693458908),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.number_QMARK_,cljs.core.number_QMARK_], null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.bases","commodity","spacewar.game-logic.bases/commodity",-1066928241),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dilithium","dilithium",1152933090),"null",new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dilithium","dilithium",1152933090),null,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.bases","amount","spacewar.game-logic.bases/amount",2050277123),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.bases","destination","spacewar.game-logic.bases/destination",-1931681150),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.number_QMARK_,cljs.core.number_QMARK_], null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.bases","transport","spacewar.game-logic.bases/transport",1834150387),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.game-logic.bases","x","spacewar.game-logic.bases/x",-920645444),new cljs.core.Keyword("spacewar.game-logic.bases","y","spacewar.game-logic.bases/y",54158483),new cljs.core.Keyword("spacewar.game-logic.bases","velocity","spacewar.game-logic.bases/velocity",693458908),new cljs.core.Keyword("spacewar.game-logic.bases","commodity","spacewar.game-logic.bases/commodity",-1066928241),new cljs.core.Keyword("spacewar.game-logic.bases","amount","spacewar.game-logic.bases/amount",2050277123),new cljs.core.Keyword("spacewar.game-logic.bases","destination","spacewar.game-logic.bases/destination",-1931681150)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.game-logic.bases","x","spacewar.game-logic.bases/x",-920645444),new cljs.core.Keyword("spacewar.game-logic.bases","y","spacewar.game-logic.bases/y",54158483),new cljs.core.Keyword("spacewar.game-logic.bases","velocity","spacewar.game-logic.bases/velocity",693458908),new cljs.core.Keyword("spacewar.game-logic.bases","commodity","spacewar.game-logic.bases/commodity",-1066928241),new cljs.core.Keyword("spacewar.game-logic.bases","amount","spacewar.game-logic.bases/amount",2050277123),new cljs.core.Keyword("spacewar.game-logic.bases","destination","spacewar.game-logic.bases/destination",-1931681150)], null),null,null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__559){
return cljs.core.map_QMARK_.call(null,G__559);
}),(function (G__559){
return cljs.core.contains_QMARK_.call(null,G__559,new cljs.core.Keyword(null,"x","x",2099068185));
}),(function (G__559){
return cljs.core.contains_QMARK_.call(null,G__559,new cljs.core.Keyword(null,"y","y",-1757859776));
}),(function (G__559){
return cljs.core.contains_QMARK_.call(null,G__559,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
}),(function (G__559){
return cljs.core.contains_QMARK_.call(null,G__559,new cljs.core.Keyword(null,"commodity","commodity",1416272748));
}),(function (G__559){
return cljs.core.contains_QMARK_.call(null,G__559,new cljs.core.Keyword(null,"amount","amount",364489504));
}),(function (G__559){
return cljs.core.contains_QMARK_.call(null,G__559,new cljs.core.Keyword(null,"destination","destination",-253872483));
})], null),(function (G__559){
return ((cljs.core.map_QMARK_.call(null,G__559)) && (((cljs.core.contains_QMARK_.call(null,G__559,new cljs.core.Keyword(null,"x","x",2099068185))) && (((cljs.core.contains_QMARK_.call(null,G__559,new cljs.core.Keyword(null,"y","y",-1757859776))) && (((cljs.core.contains_QMARK_.call(null,G__559,new cljs.core.Keyword(null,"velocity","velocity",-581524355))) && (((cljs.core.contains_QMARK_.call(null,G__559,new cljs.core.Keyword(null,"commodity","commodity",1416272748))) && (((cljs.core.contains_QMARK_.call(null,G__559,new cljs.core.Keyword(null,"amount","amount",364489504))) && (cljs.core.contains_QMARK_.call(null,G__559,new cljs.core.Keyword(null,"destination","destination",-253872483))))))))))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.game-logic.bases","x","spacewar.game-logic.bases/x",-920645444),new cljs.core.Keyword("spacewar.game-logic.bases","y","spacewar.game-logic.bases/y",54158483),new cljs.core.Keyword("spacewar.game-logic.bases","velocity","spacewar.game-logic.bases/velocity",693458908),new cljs.core.Keyword("spacewar.game-logic.bases","commodity","spacewar.game-logic.bases/commodity",-1066928241),new cljs.core.Keyword("spacewar.game-logic.bases","amount","spacewar.game-logic.bases/amount",2050277123),new cljs.core.Keyword("spacewar.game-logic.bases","destination","spacewar.game-logic.bases/destination",-1931681150)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.Keyword(null,"commodity","commodity",1416272748),new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"destination","destination",-253872483)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"x","x",2099068185))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"y","y",-1757859776))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"velocity","velocity",-581524355))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"commodity","commodity",1416272748))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"amount","amount",364489504))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"destination","destination",-253872483)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.bases","transports","spacewar.game-logic.bases/transports",1755219882),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("spacewar.game-logic.bases","transport","spacewar.game-logic.bases/transport",1834150387)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.bases","transport","spacewar.game-logic.bases/transport",1834150387),new cljs.core.Keyword("spacewar.game-logic.bases","transport","spacewar.game-logic.bases/transport",1834150387),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("spacewar.game-logic.bases","transport","spacewar.game-logic.bases/transport",1834150387)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__560){
return cljs.core.coll_QMARK_.call(null,G__560);
})], null),null));
spacewar.game_logic.bases.make_transport = (function spacewar$game_logic$bases$make_transport(commodity,amount,destination){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"commodity","commodity",1416272748),commodity,new cljs.core.Keyword(null,"amount","amount",364489504),amount,new cljs.core.Keyword(null,"destination","destination",-253872483),destination], null);
});
spacewar.game_logic.bases.make_random_base = (function spacewar$game_logic$bases$make_random_base(){
var x = (cljs.core.rand.call(null,spacewar.game_logic.config.known_space_x) | (0));
var y = (cljs.core.rand.call(null,spacewar.game_logic.config.known_space_y) | (0));
return spacewar.game_logic.bases.make_base.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),spacewar.game_logic.bases.random_base_type.call(null));
});
spacewar.game_logic.bases.age_base = (function spacewar$game_logic$bases$age_base(ms,base){
var age = new cljs.core.Keyword(null,"age","age",-604307804).cljs$core$IFn$_invoke$arity$1(base);
var age__$1 = (function (){var x__5090__auto__ = spacewar.game_logic.config.base_maturity_age;
var y__5091__auto__ = (age + ms);
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return cljs.core.assoc.call(null,base,new cljs.core.Keyword(null,"age","age",-604307804),age__$1);
});
spacewar.game_logic.bases.age_bases = (function spacewar$game_logic$bases$age_bases(ms,bases){
return cljs.core.map.call(null,(function (p1__561_SHARP_){
return spacewar.game_logic.bases.age_base.call(null,ms,p1__561_SHARP_);
}),bases);
});
spacewar.game_logic.bases.antimatter_production = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rate","rate",-1428659698),spacewar.game_logic.config.antimatter_factory_production_rate,new cljs.core.Keyword(null,"maximum","maximum",573880714),spacewar.game_logic.config.base_antimatter_maximum,new cljs.core.Keyword(null,"antimatter-cost","antimatter-cost",1461770005),(0),new cljs.core.Keyword(null,"dilithium-cost","dilithium-cost",-1016735661),(0)], null);
spacewar.game_logic.bases.dilithium_production = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rate","rate",-1428659698),spacewar.game_logic.config.dilithium_factory_production_rate,new cljs.core.Keyword(null,"maximum","maximum",573880714),spacewar.game_logic.config.base_dilithium_maximum,new cljs.core.Keyword(null,"antimatter-cost","antimatter-cost",1461770005),spacewar.game_logic.config.dilithium_factory_dilithium_antimatter_cost,new cljs.core.Keyword(null,"dilithium-cost","dilithium-cost",-1016735661),(0)], null);
spacewar.game_logic.bases.torpedo_production = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rate","rate",-1428659698),spacewar.game_logic.config.weapon_factory_torpedo_production_rate,new cljs.core.Keyword(null,"maximum","maximum",573880714),spacewar.game_logic.config.base_torpedos_maximum,new cljs.core.Keyword(null,"antimatter-cost","antimatter-cost",1461770005),spacewar.game_logic.config.weapon_factory_torpedo_antimatter_cost,new cljs.core.Keyword(null,"dilithium-cost","dilithium-cost",-1016735661),spacewar.game_logic.config.weapon_factory_torpedo_dilithium_cost], null);
spacewar.game_logic.bases.kinetic_production = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rate","rate",-1428659698),spacewar.game_logic.config.weapon_factory_kinetic_production_rate,new cljs.core.Keyword(null,"maximum","maximum",573880714),spacewar.game_logic.config.base_kinetics_maximum,new cljs.core.Keyword(null,"antimatter-cost","antimatter-cost",1461770005),spacewar.game_logic.config.weapon_factory_kinetic_antimatter_cost,new cljs.core.Keyword(null,"dilithium-cost","dilithium-cost",-1016735661),(0)], null);
spacewar.game_logic.bases.corbomite_production = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rate","rate",-1428659698),spacewar.game_logic.config.corbomite_factory_production_rate,new cljs.core.Keyword(null,"maximum","maximum",573880714),spacewar.game_logic.config.corbomite_maximum,new cljs.core.Keyword(null,"antimatter-cost","antimatter-cost",1461770005),spacewar.game_logic.config.corbomite_factory_antimatter_cost,new cljs.core.Keyword(null,"dilithium-cost","dilithium-cost",-1016735661),spacewar.game_logic.config.corbomite_factory_dilithium_cost], null);
spacewar.game_logic.bases.manufacture = (function spacewar$game_logic$bases$manufacture(base,ms,commodity,production){
var map__562 = production;
var map__562__$1 = cljs.core.__destructure_map.call(null,map__562);
var rate = cljs.core.get.call(null,map__562__$1,new cljs.core.Keyword(null,"rate","rate",-1428659698));
var maximum = cljs.core.get.call(null,map__562__$1,new cljs.core.Keyword(null,"maximum","maximum",573880714));
var antimatter_cost = cljs.core.get.call(null,map__562__$1,new cljs.core.Keyword(null,"antimatter-cost","antimatter-cost",1461770005));
var dilithium_cost = cljs.core.get.call(null,map__562__$1,new cljs.core.Keyword(null,"dilithium-cost","dilithium-cost",-1016735661));
var inventory = commodity.call(null,base);
var deficit = (function (){var x__5087__auto__ = (0);
var y__5088__auto__ = (maximum - inventory);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var production__$1 = (ms * rate);
var increase = (function (){var x__5090__auto__ = deficit;
var y__5091__auto__ = production__$1;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var max_for_antimatter = (((antimatter_cost === (0)))?increase:(new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000).cljs$core$IFn$_invoke$arity$1(base) / antimatter_cost));
var max_for_dilithium = (((dilithium_cost === (0)))?increase:(new cljs.core.Keyword(null,"dilithium","dilithium",1152933090).cljs$core$IFn$_invoke$arity$1(base) / dilithium_cost));
var increase__$1 = (function (){var x__5090__auto__ = (function (){var x__5090__auto__ = increase;
var y__5091__auto__ = max_for_antimatter;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var y__5091__auto__ = max_for_dilithium;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var dilithium_decrease = (increase__$1 * dilithium_cost);
var antimatter_decrease = (increase__$1 * antimatter_cost);
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,base,commodity,cljs.core._PLUS_,increase__$1),new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),cljs.core._,antimatter_decrease),new cljs.core.Keyword(null,"dilithium","dilithium",1152933090),cljs.core._,dilithium_decrease);
});
spacewar.game_logic.bases.update_base_manufacturing = (function spacewar$game_logic$bases$update_base_manufacturing(ms,base){
if((new cljs.core.Keyword(null,"age","age",-604307804).cljs$core$IFn$_invoke$arity$1(base) >= spacewar.game_logic.config.base_maturity_age)){
var pred__563 = cljs.core._EQ_;
var expr__564 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(base);
if(cljs.core.truth_(pred__563.call(null,new cljs.core.Keyword(null,"antimatter-factory","antimatter-factory",218121254),expr__564))){
return spacewar.game_logic.bases.manufacture.call(null,base,ms,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),spacewar.game_logic.bases.antimatter_production);
} else {
if(cljs.core.truth_(pred__563.call(null,new cljs.core.Keyword(null,"dilithium-factory","dilithium-factory",1437622905),expr__564))){
return spacewar.game_logic.bases.manufacture.call(null,base,ms,new cljs.core.Keyword(null,"dilithium","dilithium",1152933090),spacewar.game_logic.bases.dilithium_production);
} else {
if(cljs.core.truth_(pred__563.call(null,new cljs.core.Keyword(null,"weapon-factory","weapon-factory",-475320995),expr__564))){
return spacewar.game_logic.bases.manufacture.call(null,spacewar.game_logic.bases.manufacture.call(null,base,ms,new cljs.core.Keyword(null,"torpedos","torpedos",344905121),spacewar.game_logic.bases.torpedo_production),ms,new cljs.core.Keyword(null,"kinetics","kinetics",-707133266),spacewar.game_logic.bases.kinetic_production);
} else {
if(cljs.core.truth_(pred__563.call(null,new cljs.core.Keyword(null,"corbomite-factory","corbomite-factory",339807181),expr__564))){
return spacewar.game_logic.bases.manufacture.call(null,base,ms,new cljs.core.Keyword(null,"corbomite","corbomite",1612720764),spacewar.game_logic.bases.corbomite_production);
} else {
if(cljs.core.truth_(pred__563.call(null,new cljs.core.Keyword(null,"corbomite-device","corbomite-device",-829250405),expr__564))){
return base;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__564)].join('')));
}
}
}
}
}
} else {
return base;
}
});
spacewar.game_logic.bases.update_bases_manufacturing = (function spacewar$game_logic$bases$update_bases_manufacturing(ms,bases){
var bases__$1 = cljs.core.map.call(null,(function (p1__566_SHARP_){
return spacewar.game_logic.bases.update_base_manufacturing.call(null,ms,p1__566_SHARP_);
}),bases);
return bases__$1;
});
spacewar.game_logic.bases.update_transport_readiness_for = (function spacewar$game_logic$bases$update_transport_readiness_for(ms,base){
var readiness = new cljs.core.Keyword(null,"transport-readiness","transport-readiness",-845415320).cljs$core$IFn$_invoke$arity$1(base);
var deficit = (spacewar.game_logic.config.transport_ready - readiness);
var adjustment = (function (){var x__5090__auto__ = deficit;
var y__5091__auto__ = ms;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return cljs.core.update.call(null,base,new cljs.core.Keyword(null,"transport-readiness","transport-readiness",-845415320),cljs.core._PLUS_,adjustment);
});
spacewar.game_logic.bases.update_transport_readiness = (function spacewar$game_logic$bases$update_transport_readiness(ms,bases){
return cljs.core.map.call(null,(function (p1__567_SHARP_){
return spacewar.game_logic.bases.update_transport_readiness_for.call(null,ms,p1__567_SHARP_);
}),bases);
});
spacewar.game_logic.bases.transport_ready_QMARK_ = (function spacewar$game_logic$bases$transport_ready_QMARK_(base){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transport-readiness","transport-readiness",-845415320).cljs$core$IFn$_invoke$arity$1(base),spacewar.game_logic.config.transport_ready);
});
spacewar.game_logic.bases.sufficient_antimatter = (function spacewar$game_logic$bases$sufficient_antimatter(type){
var pred__568 = cljs.core._EQ_;
var expr__569 = type;
if(cljs.core.truth_(pred__568.call(null,new cljs.core.Keyword(null,"antimatter-factory","antimatter-factory",218121254),expr__569))){
return spacewar.game_logic.config.antimatter_factory_sufficient_antimatter;
} else {
if(cljs.core.truth_(pred__568.call(null,new cljs.core.Keyword(null,"dilithium-factory","dilithium-factory",1437622905),expr__569))){
return spacewar.game_logic.config.dilithium_factory_sufficient_antimatter;
} else {
if(cljs.core.truth_(pred__568.call(null,new cljs.core.Keyword(null,"weapon-factory","weapon-factory",-475320995),expr__569))){
return spacewar.game_logic.config.weapon_factory_sufficient_antimatter;
} else {
if(cljs.core.truth_(pred__568.call(null,new cljs.core.Keyword(null,"corbomite-factory","corbomite-factory",339807181),expr__569))){
return spacewar.game_logic.config.corbomite_factory_sufficient_antimatter;
} else {
if(cljs.core.truth_(pred__568.call(null,new cljs.core.Keyword(null,"corbomite-device","corbomite-device",-829250405),expr__569))){
return (0);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__569)].join('')));
}
}
}
}
}
});
spacewar.game_logic.bases.antimatter_reserve = (function spacewar$game_logic$bases$antimatter_reserve(type){
var pred__571 = cljs.core._EQ_;
var expr__572 = type;
if(cljs.core.truth_(pred__571.call(null,new cljs.core.Keyword(null,"antimatter-factory","antimatter-factory",218121254),expr__572))){
return spacewar.game_logic.config.antimatter_factory_antimatter_reserve;
} else {
if(cljs.core.truth_(pred__571.call(null,new cljs.core.Keyword(null,"dilithium-factory","dilithium-factory",1437622905),expr__572))){
return spacewar.game_logic.config.dilithium_factory_antimatter_reserve;
} else {
if(cljs.core.truth_(pred__571.call(null,new cljs.core.Keyword(null,"weapon-factory","weapon-factory",-475320995),expr__572))){
return spacewar.game_logic.config.weapon_factory_antimatter_reserve;
} else {
if(cljs.core.truth_(pred__571.call(null,new cljs.core.Keyword(null,"corbomite-factory","corbomite-factory",339807181),expr__572))){
return spacewar.game_logic.config.corbomite_factory_antimatter_reserve;
} else {
if(cljs.core.truth_(pred__571.call(null,new cljs.core.Keyword(null,"corbomite-device","corbomite-device",-829250405),expr__572))){
return (0);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__572)].join('')));
}
}
}
}
}
});
spacewar.game_logic.bases.sufficient_dilithium = (function spacewar$game_logic$bases$sufficient_dilithium(type){
var pred__574 = cljs.core._EQ_;
var expr__575 = type;
if(cljs.core.truth_(pred__574.call(null,new cljs.core.Keyword(null,"antimatter-factory","antimatter-factory",218121254),expr__575))){
return spacewar.game_logic.config.antimatter_factory_sufficient_dilithium;
} else {
if(cljs.core.truth_(pred__574.call(null,new cljs.core.Keyword(null,"dilithium-factory","dilithium-factory",1437622905),expr__575))){
return spacewar.game_logic.config.dilithium_factory_sufficient_dilithium;
} else {
if(cljs.core.truth_(pred__574.call(null,new cljs.core.Keyword(null,"weapon-factory","weapon-factory",-475320995),expr__575))){
return spacewar.game_logic.config.weapon_factory_sufficient_dilithium;
} else {
if(cljs.core.truth_(pred__574.call(null,new cljs.core.Keyword(null,"corbomite-factory","corbomite-factory",339807181),expr__575))){
return spacewar.game_logic.config.corbomite_factory_sufficient_dilithium;
} else {
if(cljs.core.truth_(pred__574.call(null,new cljs.core.Keyword(null,"corbomite-device","corbomite-device",-829250405),expr__575))){
return (0);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__575)].join('')));
}
}
}
}
}
});
spacewar.game_logic.bases.dilithium_reserve = (function spacewar$game_logic$bases$dilithium_reserve(type){
var pred__577 = cljs.core._EQ_;
var expr__578 = type;
if(cljs.core.truth_(pred__577.call(null,new cljs.core.Keyword(null,"antimatter-factory","antimatter-factory",218121254),expr__578))){
return spacewar.game_logic.config.antimatter_factory_dilithium_reserve;
} else {
if(cljs.core.truth_(pred__577.call(null,new cljs.core.Keyword(null,"dilithium-factory","dilithium-factory",1437622905),expr__578))){
return spacewar.game_logic.config.dilithium_factory_dilithium_reserve;
} else {
if(cljs.core.truth_(pred__577.call(null,new cljs.core.Keyword(null,"weapon-factory","weapon-factory",-475320995),expr__578))){
return spacewar.game_logic.config.weapon_factory_dilithium_reserve;
} else {
if(cljs.core.truth_(pred__577.call(null,new cljs.core.Keyword(null,"corbomite-factory","corbomite-factory",339807181),expr__578))){
return spacewar.game_logic.config.corbomite_factory_dilithium_reserve;
} else {
if(cljs.core.truth_(pred__577.call(null,new cljs.core.Keyword(null,"corbomite-device","corbomite-device",-829250405),expr__578))){
return (0);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__578)].join('')));
}
}
}
}
}
});
spacewar.game_logic.bases.get_promised_commodity = (function spacewar$game_logic$bases$get_promised_commodity(commodity,dest,transports){
var transports__$1 = cljs.core.filter.call(null,(function (p1__580_SHARP_){
return cljs.core._EQ_.call(null,commodity,new cljs.core.Keyword(null,"commodity","commodity",1416272748).cljs$core$IFn$_invoke$arity$1(p1__580_SHARP_));
}),transports);
var transports__$2 = cljs.core.filter.call(null,(function (p1__581_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(dest),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(dest)], null),new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(p1__581_SHARP_));
}),transports__$1);
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"amount","amount",364489504),transports__$2));
});
spacewar.game_logic.bases.sufficient_commodity = (function spacewar$game_logic$bases$sufficient_commodity(commodity,base_type){
var pred__582 = cljs.core._EQ_;
var expr__583 = commodity;
if(cljs.core.truth_(pred__582.call(null,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),expr__583))){
return spacewar.game_logic.bases.sufficient_antimatter.call(null,base_type);
} else {
if(cljs.core.truth_(pred__582.call(null,new cljs.core.Keyword(null,"dilithium","dilithium",1152933090),expr__583))){
return spacewar.game_logic.bases.sufficient_dilithium.call(null,base_type);
} else {
return null;
}
}
});
spacewar.game_logic.bases.commodity_cargo_size = (function spacewar$game_logic$bases$commodity_cargo_size(commodity){
var pred__585 = cljs.core._EQ_;
var expr__586 = commodity;
if(cljs.core.truth_(pred__585.call(null,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),expr__586))){
return spacewar.game_logic.config.antimatter_cargo_size;
} else {
if(cljs.core.truth_(pred__585.call(null,new cljs.core.Keyword(null,"dilithium","dilithium",1152933090),expr__586))){
return spacewar.game_logic.config.dilithium_cargo_size;
} else {
return null;
}
}
});
spacewar.game_logic.bases.commodity_reserve = (function spacewar$game_logic$bases$commodity_reserve(commodity,base_type){
var pred__588 = cljs.core._EQ_;
var expr__589 = commodity;
if(cljs.core.truth_(pred__588.call(null,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),expr__589))){
return spacewar.game_logic.bases.antimatter_reserve.call(null,base_type);
} else {
if(cljs.core.truth_(pred__588.call(null,new cljs.core.Keyword(null,"dilithium","dilithium",1152933090),expr__589))){
return spacewar.game_logic.bases.dilithium_reserve.call(null,base_type);
} else {
return null;
}
}
});
spacewar.game_logic.bases.should_transport_commodity_QMARK_ = (function spacewar$game_logic$bases$should_transport_commodity_QMARK_(commodity,source,dest,transports){
var source_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(source);
var dest_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(dest);
var source_commodity = commodity.call(null,source);
var dest_commodity = commodity.call(null,dest);
var promised_commodity = spacewar.game_logic.bases.get_promised_commodity.call(null,commodity,dest,transports);
var sufficient = spacewar.game_logic.bases.sufficient_commodity.call(null,commodity,dest_type);
var cargo_size = spacewar.game_logic.bases.commodity_cargo_size.call(null,commodity);
var reserve = spacewar.game_logic.bases.commodity_reserve.call(null,commodity,source_type);
var he_needs_it_QMARK_ = ((promised_commodity + dest_commodity) <= sufficient);
var ill_still_have_more_than_him_QMARK_ = ((source_commodity - cargo_size) > dest_commodity);
var ill_still_have_my_reserve_QMARK_ = (source_commodity >= (cargo_size + reserve));
return ((((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"corbomite-device","corbomite-device",-829250405),dest_type)) && (((he_needs_it_QMARK_) && (((ill_still_have_more_than_him_QMARK_) && (ill_still_have_my_reserve_QMARK_))))))) || (((((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"corbomite-factory","corbomite-factory",339807181),dest_type)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"weapon-factory","weapon-factory",-475320995),dest_type)))) && (((he_needs_it_QMARK_) && ((source_commodity > cargo_size)))))));
});
spacewar.game_logic.bases.should_transport_antimatter_QMARK_ = (function spacewar$game_logic$bases$should_transport_antimatter_QMARK_(source,dest,transports){
return spacewar.game_logic.bases.should_transport_commodity_QMARK_.call(null,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),source,dest,transports);
});
spacewar.game_logic.bases.should_transport_dilithium_QMARK_ = (function spacewar$game_logic$bases$should_transport_dilithium_QMARK_(source,dest,transports){
return spacewar.game_logic.bases.should_transport_commodity_QMARK_.call(null,new cljs.core.Keyword(null,"dilithium","dilithium",1152933090),source,dest,transports);
});
spacewar.game_logic.bases.cargo_size = (function spacewar$game_logic$bases$cargo_size(commodity){
var pred__591 = cljs.core._EQ_;
var expr__592 = commodity;
if(cljs.core.truth_(pred__591.call(null,new cljs.core.Keyword(null,"dilithium","dilithium",1152933090),expr__592))){
return spacewar.game_logic.config.dilithium_cargo_size;
} else {
if(cljs.core.truth_(pred__591.call(null,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),expr__592))){
return spacewar.game_logic.config.antimatter_cargo_size;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__592)].join('')));
}
}
});
spacewar.game_logic.bases.random_transport_velocity_magnitude = (function spacewar$game_logic$bases$random_transport_velocity_magnitude(){
return (spacewar.game_logic.config.transport_velocity * (0.8 + cljs.core.rand.call(null,0.2)));
});
spacewar.game_logic.bases.launch_transport = (function spacewar$game_logic$bases$launch_transport(commodity,source,dest){
var dest_pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(dest),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(dest)], null);
var transport = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(source),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(source),new cljs.core.Keyword(null,"destination","destination",-253872483),dest_pos,new cljs.core.Keyword(null,"commodity","commodity",1416272748),commodity,new cljs.core.Keyword(null,"amount","amount",364489504),spacewar.game_logic.bases.cargo_size.call(null,commodity)], null);
var angle = spacewar.geometry.angle_degrees.call(null,spacewar.util.pos.call(null,source),dest_pos);
var radians = spacewar.geometry.__GT_radians.call(null,angle);
var v_magnitude = spacewar.game_logic.bases.random_transport_velocity_magnitude.call(null);
var velocity = spacewar.vector.from_angular.call(null,v_magnitude,radians);
var transport__$1 = cljs.core.assoc.call(null,transport,new cljs.core.Keyword(null,"velocity","velocity",-581524355),velocity);
return transport__$1;
});
spacewar.game_logic.bases.select_potential_transports = (function spacewar$game_logic$bases$select_potential_transports(p__594,transports){
var vec__595 = p__594;
var source = cljs.core.nth.call(null,vec__595,(0),null);
var dest = cljs.core.nth.call(null,vec__595,(1),null);
var should_antimatter_QMARK_ = spacewar.game_logic.bases.should_transport_antimatter_QMARK_.call(null,source,dest,transports);
var should_dilithium_QMARK_ = spacewar.game_logic.bases.should_transport_dilithium_QMARK_.call(null,source,dest,transports);
var source_ready_QMARK_ = spacewar.game_logic.bases.transport_ready_QMARK_.call(null,source);
var new_transports = cljs.core.PersistentVector.EMPTY;
var new_transports__$1 = ((((source_ready_QMARK_) && (should_antimatter_QMARK_)))?cljs.core.conj.call(null,new_transports,spacewar.game_logic.bases.launch_transport.call(null,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),source,dest)):new_transports);
var new_transports__$2 = ((((source_ready_QMARK_) && (should_dilithium_QMARK_)))?cljs.core.conj.call(null,new_transports__$1,spacewar.game_logic.bases.launch_transport.call(null,new cljs.core.Keyword(null,"dilithium","dilithium",1152933090),source,dest)):new_transports__$1);
return new_transports__$2;
});
spacewar.game_logic.bases.transport_launched_from = (function spacewar$game_logic$bases$transport_launched_from(base,transport){
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(base),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(transport))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(base),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(transport))));
});
spacewar.game_logic.bases.launch_transports_from_bases = (function spacewar$game_logic$bases$launch_transports_from_bases(transports,bases){
var bases__$1 = bases;
var transports__$1 = transports;
var deducted_bases = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,bases__$1)){
return deducted_bases;
} else {
var base = cljs.core.first.call(null,bases__$1);
var launched_from = cljs.core.filter.call(null,((function (bases__$1,transports__$1,deducted_bases,base){
return (function (p1__598_SHARP_){
return spacewar.game_logic.bases.transport_launched_from.call(null,base,p1__598_SHARP_);
});})(bases__$1,transports__$1,deducted_bases,base))
,transports__$1);
if(cljs.core.empty_QMARK_.call(null,launched_from)){
var G__599 = cljs.core.rest.call(null,bases__$1);
var G__600 = transports__$1;
var G__601 = cljs.core.conj.call(null,deducted_bases,base);
bases__$1 = G__599;
transports__$1 = G__600;
deducted_bases = G__601;
continue;
} else {
var transport = cljs.core.first.call(null,launched_from);
var base__$1 = cljs.core.update.call(null,base,new cljs.core.Keyword(null,"commodity","commodity",1416272748).cljs$core$IFn$_invoke$arity$1(transport),cljs.core._,new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(transport));
var base__$2 = cljs.core.assoc.call(null,base__$1,new cljs.core.Keyword(null,"transport-readiness","transport-readiness",-845415320),(0));
var G__602 = cljs.core.rest.call(null,bases__$1);
var G__603 = transports__$1;
var G__604 = cljs.core.conj.call(null,deducted_bases,base__$2);
bases__$1 = G__602;
transports__$1 = G__603;
deducted_bases = G__604;
continue;
}
}
break;
}
});
spacewar.game_logic.bases.distance_to_dest = (function spacewar$game_logic$bases$distance_to_dest(transport){
return spacewar.geometry.distance.call(null,spacewar.util.pos.call(null,transport),new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(transport));
});
spacewar.game_logic.bases.base_from_coordinates = (function spacewar$game_logic$bases$base_from_coordinates(bases,p__606){
var vec__607 = p__606;
var x = cljs.core.nth.call(null,vec__607,(0),null);
var y = cljs.core.nth.call(null,vec__607,(1),null);
var base = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__605_SHARP_){
return ((cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__605_SHARP_))) && (cljs.core._EQ_.call(null,y,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1__605_SHARP_))));
}),bases));
return base;
});
spacewar.game_logic.bases.amount_at_destination = (function spacewar$game_logic$bases$amount_at_destination(bases,transport){
var dest = spacewar.game_logic.bases.base_from_coordinates.call(null,bases,new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(transport));
return new cljs.core.Keyword(null,"commodity","commodity",1416272748).cljs$core$IFn$_invoke$arity$1(transport).call(null,dest);
});
spacewar.game_logic.bases.select_best_transports = (function spacewar$game_logic$bases$select_best_transports(transports,bases){
var bases__$1 = bases;
var candidates = transports;
var selected = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,bases__$1)){
return selected;
} else {
var base = cljs.core.first.call(null,bases__$1);
var transports_from = cljs.core.filter.call(null,((function (bases__$1,candidates,selected,base){
return (function (p1__610_SHARP_){
return spacewar.game_logic.bases.transport_launched_from.call(null,base,p1__610_SHARP_);
});})(bases__$1,candidates,selected,base))
,candidates);
if(cljs.core.empty_QMARK_.call(null,transports_from)){
var G__612 = cljs.core.rest.call(null,bases__$1);
var G__613 = candidates;
var G__614 = selected;
bases__$1 = G__612;
candidates = G__613;
selected = G__614;
continue;
} else {
var neediest = cljs.core.first.call(null,cljs.core.sort_by.call(null,((function (bases__$1,candidates,selected,base,transports_from){
return (function (p1__611_SHARP_){
return spacewar.game_logic.bases.amount_at_destination.call(null,bases__$1,p1__611_SHARP_);
});})(bases__$1,candidates,selected,base,transports_from))
,cljs.core.shuffle.call(null,transports_from)));
var G__615 = cljs.core.rest.call(null,bases__$1);
var G__616 = candidates;
var G__617 = cljs.core.conj.call(null,selected,neediest);
bases__$1 = G__615;
candidates = G__616;
selected = G__617;
continue;
}
}
break;
}
});
spacewar.game_logic.bases.blockaded_transport_QMARK_ = (function spacewar$game_logic$bases$blockaded_transport_QMARK_(transport,klingons){
var blockading_klingons = cljs.core.filter.call(null,(function (p1__618_SHARP_){
return (spacewar.geometry.distance.call(null,spacewar.util.pos.call(null,transport),spacewar.util.pos.call(null,p1__618_SHARP_)) < spacewar.game_logic.config.klingon_docking_distance);
}),klingons);
var blockaded_QMARK_ = (!(cljs.core.empty_QMARK_.call(null,blockading_klingons)));
return blockaded_QMARK_;
});
spacewar.game_logic.bases.remove_blockaded_transports = (function spacewar$game_logic$bases$remove_blockaded_transports(transports,klingons){
return cljs.core.remove.call(null,(function (p1__619_SHARP_){
return spacewar.game_logic.bases.blockaded_transport_QMARK_.call(null,p1__619_SHARP_,klingons);
}),transports);
});
spacewar.game_logic.bases.check_new_transports = (function spacewar$game_logic$bases$check_new_transports(world){
var map__621 = world;
var map__621__$1 = cljs.core.__destructure_map.call(null,map__621);
var bases = cljs.core.get.call(null,map__621__$1,new cljs.core.Keyword(null,"bases","bases",-1036892420));
var transports = cljs.core.get.call(null,map__621__$1,new cljs.core.Keyword(null,"transports","transports",1151421269));
var klingons = cljs.core.get.call(null,map__621__$1,new cljs.core.Keyword(null,"klingons","klingons",-1228954811));
var transport_routes = cljs.core.get.call(null,map__621__$1,new cljs.core.Keyword(null,"transport-routes","transport-routes",1028896693));
var coord_pairs = cljs.core.map.call(null,cljs.core.vec,transport_routes);
var base_pairs = cljs.core.map.call(null,(function (coord_pair){
return cljs.core.map.call(null,(function (coord){
return spacewar.game_logic.bases.base_from_coordinates.call(null,bases,coord);
}),coord_pair);
}),coord_pairs);
var base_pairs__$1 = cljs.core.concat.call(null,base_pairs,cljs.core.map.call(null,cljs.core.reverse,base_pairs));
var candidate_transports = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__620_SHARP_){
return spacewar.game_logic.bases.select_potential_transports.call(null,p1__620_SHARP_,transports);
}),base_pairs__$1));
var selected_transports = spacewar.game_logic.bases.select_best_transports.call(null,candidate_transports,bases);
var selected_transports__$1 = spacewar.game_logic.bases.remove_blockaded_transports.call(null,selected_transports,klingons);
var bases__$1 = spacewar.game_logic.bases.launch_transports_from_bases.call(null,selected_transports__$1,bases);
var transports__$1 = cljs.core.concat.call(null,transports,selected_transports__$1);
var world__$1 = cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"transports","transports",1151421269),transports__$1,new cljs.core.Keyword(null,"bases","bases",-1036892420),bases__$1);
return world__$1;
});
spacewar.game_logic.bases.check_new_transport_time = (function spacewar$game_logic$bases$check_new_transport_time(world){
var map__622 = world;
var map__622__$1 = cljs.core.__destructure_map.call(null,map__622);
var update_time = cljs.core.get.call(null,map__622__$1,new cljs.core.Keyword(null,"update-time","update-time",-1745455895));
var transport_check_time = cljs.core.get.call(null,map__622__$1,new cljs.core.Keyword(null,"transport-check-time","transport-check-time",-1607264910));
var check_time_QMARK_ = (update_time >= (transport_check_time + spacewar.game_logic.config.transport_check_period));
var world__$1 = ((check_time_QMARK_)?cljs.core.update.call(null,world,new cljs.core.Keyword(null,"transport-check-time","transport-check-time",-1607264910),cljs.core._PLUS_,spacewar.game_logic.config.transport_check_period):world);
var world__$2 = ((check_time_QMARK_)?spacewar.game_logic.bases.check_new_transports.call(null,world__$1):world__$1);
return world__$2;
});
spacewar.game_logic.bases.move_transport = (function spacewar$game_logic$bases$move_transport(ms,transport){
var map__623 = transport;
var map__623__$1 = cljs.core.__destructure_map.call(null,map__623);
var x = cljs.core.get.call(null,map__623__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__623__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var velocity = cljs.core.get.call(null,map__623__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
var displacement = spacewar.vector.scale.call(null,ms,velocity);
var vec__624 = spacewar.vector.add.call(null,displacement,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var x__$1 = cljs.core.nth.call(null,vec__624,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__624,(1),null);
var transport__$1 = cljs.core.assoc.call(null,transport,new cljs.core.Keyword(null,"x","x",2099068185),x__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y__$1);
return transport__$1;
});
spacewar.game_logic.bases.update_transports = (function spacewar$game_logic$bases$update_transports(ms,world){
var transports = new cljs.core.Keyword(null,"transports","transports",1151421269).cljs$core$IFn$_invoke$arity$1(world);
var transports__$1 = cljs.core.map.call(null,(function (p1__627_SHARP_){
return spacewar.game_logic.bases.move_transport.call(null,ms,p1__627_SHARP_);
}),transports);
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"transports","transports",1151421269),transports__$1);
});
spacewar.game_logic.bases.delivering_QMARK_ = (function spacewar$game_logic$bases$delivering_QMARK_(transport){
return (spacewar.geometry.distance.call(null,spacewar.util.pos.call(null,transport),new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(transport)) <= spacewar.game_logic.config.transport_delivery_range);
});
spacewar.game_logic.bases.transport_going_to = (function spacewar$game_logic$bases$transport_going_to(base,transport){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(transport),spacewar.util.pos.call(null,base));
});
spacewar.game_logic.bases.accepting_delivery_QMARK_ = (function spacewar$game_logic$bases$accepting_delivery_QMARK_(transports,base){
var delivery_transports = cljs.core.filter.call(null,(function (p1__628_SHARP_){
return spacewar.game_logic.bases.transport_going_to.call(null,base,p1__628_SHARP_);
}),transports);
return ((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"corbomite-device","corbomite-device",-829250405),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(base))) && ((!(cljs.core.empty_QMARK_.call(null,delivery_transports)))));
});
spacewar.game_logic.bases.max_commodity = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),spacewar.game_logic.config.base_antimatter_maximum,new cljs.core.Keyword(null,"dilithium","dilithium",1152933090),spacewar.game_logic.config.base_dilithium_maximum], null);
spacewar.game_logic.bases.receive_transports = (function spacewar$game_logic$bases$receive_transports(world){
var transports = new cljs.core.Keyword(null,"transports","transports",1151421269).cljs$core$IFn$_invoke$arity$1(world);
var bases = new cljs.core.Keyword(null,"bases","bases",-1036892420).cljs$core$IFn$_invoke$arity$1(world);
var grouped_transports = cljs.core.group_by.call(null,spacewar.game_logic.bases.delivering_QMARK_,transports);
var delivering = grouped_transports.call(null,true);
var in_transit = grouped_transports.call(null,false);
var grouped_bases = cljs.core.group_by.call(null,(function (p1__629_SHARP_){
return spacewar.game_logic.bases.accepting_delivery_QMARK_.call(null,delivering,p1__629_SHARP_);
}),bases);
var accepting = grouped_bases.call(null,true);
var waiting = grouped_bases.call(null,false);
var accepting__$1 = accepting;
var delivering__$1 = delivering;
var adjusted_bases = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,accepting__$1)){
var new_bases = cljs.core.concat.call(null,waiting,adjusted_bases);
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"transports","transports",1151421269),in_transit,new cljs.core.Keyword(null,"bases","bases",-1036892420),new_bases);
} else {
var base = cljs.core.first.call(null,accepting__$1);
var transport = cljs.core.first.call(null,cljs.core.filter.call(null,((function (accepting__$1,delivering__$1,adjusted_bases,base,transports,bases,grouped_transports,delivering,in_transit,grouped_bases,accepting,waiting){
return (function (p1__630_SHARP_){
return spacewar.game_logic.bases.transport_going_to.call(null,base,p1__630_SHARP_);
});})(accepting__$1,delivering__$1,adjusted_bases,base,transports,bases,grouped_transports,delivering,in_transit,grouped_bases,accepting,waiting))
,delivering__$1));
var commodity = new cljs.core.Keyword(null,"commodity","commodity",1416272748).cljs$core$IFn$_invoke$arity$1(transport);
var new_total = (function (){var x__5090__auto__ = spacewar.game_logic.bases.max_commodity.call(null,commodity);
var y__5091__auto__ = (new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(transport) + cljs.core.get.call(null,base,commodity));
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var base__$1 = cljs.core.assoc.call(null,base,commodity,new_total);
var G__631 = cljs.core.rest.call(null,accepting__$1);
var G__632 = delivering__$1;
var G__633 = cljs.core.conj.call(null,adjusted_bases,base__$1);
accepting__$1 = G__631;
delivering__$1 = G__632;
adjusted_bases = G__633;
continue;
}
break;
}
});
spacewar.game_logic.bases.remove_routes_to_base = (function spacewar$game_logic$bases$remove_routes_to_base(world,base){
var coord = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(base),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(base)], null);
var routes = new cljs.core.Keyword(null,"transport-routes","transport-routes",1028896693).cljs$core$IFn$_invoke$arity$1(world);
var routes__$1 = cljs.core.set.call(null,cljs.core.remove.call(null,(function (p1__634_SHARP_){
return cljs.core.contains_QMARK_.call(null,p1__634_SHARP_,coord);
}),routes));
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"transport-routes","transport-routes",1028896693),routes__$1);
});
spacewar.game_logic.bases.check_corbomite_base = (function spacewar$game_logic$bases$check_corbomite_base(p__636){
var map__637 = p__636;
var map__637__$1 = cljs.core.__destructure_map.call(null,map__637);
var world = map__637__$1;
var bases = cljs.core.get.call(null,map__637__$1,new cljs.core.Keyword(null,"bases","bases",-1036892420));
var explosions = cljs.core.get.call(null,map__637__$1,new cljs.core.Keyword(null,"explosions","explosions",-1941460974));
var base_map = cljs.core.group_by.call(null,(function (p1__635_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"corbomite-factory","corbomite-factory",339807181),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__635_SHARP_));
}),bases);
var corbomite_base = cljs.core.first.call(null,cljs.core.get.call(null,base_map,true));
var other_bases = cljs.core.get.call(null,base_map,false);
var corbomite_incomplete_QMARK_ = (((corbomite_base == null)) || ((spacewar.game_logic.config.corbomite_maximum > new cljs.core.Keyword(null,"corbomite","corbomite",1612720764).cljs$core$IFn$_invoke$arity$1(corbomite_base))));
var bases__$1 = ((corbomite_incomplete_QMARK_)?bases:cljs.core.conj.call(null,other_bases,cljs.core.assoc.call(null,corbomite_base,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"corbomite-device","corbomite-device",-829250405),new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),(0),new cljs.core.Keyword(null,"dilithium","dilithium",1152933090),(0),new cljs.core.Keyword(null,"corbomite","corbomite",1612720764),(0))));
var explosions__$1 = ((corbomite_incomplete_QMARK_)?explosions:cljs.core.conj.call(null,explosions,spacewar.game_logic.explosions.__GT_explosion.call(null,new cljs.core.Keyword(null,"corbomite-device","corbomite-device",-829250405),corbomite_base)));
var world__$1 = ((corbomite_incomplete_QMARK_)?world:spacewar.game_logic.bases.remove_routes_to_base.call(null,world,corbomite_base));
if((!(corbomite_incomplete_QMARK_))){
spacewar.ui.messages.send_message.call(null,new cljs.core.Keyword(null,"corbomite-device","corbomite-device",-829250405));
} else {
}

return cljs.core.assoc.call(null,world__$1,new cljs.core.Keyword(null,"bases","bases",-1036892420),bases__$1,new cljs.core.Keyword(null,"explosions","explosions",-1941460974),explosions__$1);
});
spacewar.game_logic.bases.update_bases = (function spacewar$game_logic$bases$update_bases(ms,world){
var bases = new cljs.core.Keyword(null,"bases","bases",-1036892420).cljs$core$IFn$_invoke$arity$1(world);
var bases__$1 = spacewar.game_logic.bases.update_transport_readiness.call(null,ms,spacewar.game_logic.bases.update_bases_manufacturing.call(null,ms,spacewar.game_logic.bases.age_bases.call(null,ms,bases)));
var world__$1 = cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"bases","bases",-1036892420),bases__$1);
var world__$2 = spacewar.game_logic.bases.check_corbomite_base.call(null,spacewar.game_logic.bases.receive_transports.call(null,spacewar.game_logic.bases.check_new_transport_time.call(null,spacewar.game_logic.bases.update_transports.call(null,ms,world__$1))));
return world__$2;
});

//# sourceMappingURL=bases.js.map
