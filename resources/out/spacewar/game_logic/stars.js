// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('spacewar.game_logic.stars');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('spacewar.game_logic.config');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.stars","x","spacewar.game-logic.stars/x",-904388517),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.stars","y","spacewar.game-logic.stars/y",11703346),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.stars","class","spacewar.game-logic.stars/class",-1145332258),cljs.core.list(new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),new cljs.core.Symbol("spacewar.game-logic.config","spectral-classes","spacewar.game-logic.config/spectral-classes",1534200205,null)),cljs.core.set.call(null,spacewar.game_logic.config.spectral_classes));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.stars","star","spacewar.game-logic.stars/star",-1549645597),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.game-logic.stars","x","spacewar.game-logic.stars/x",-904388517),new cljs.core.Keyword("spacewar.game-logic.stars","y","spacewar.game-logic.stars/y",11703346),new cljs.core.Keyword("spacewar.game-logic.stars","class","spacewar.game-logic.stars/class",-1145332258)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.game-logic.stars","x","spacewar.game-logic.stars/x",-904388517),new cljs.core.Keyword("spacewar.game-logic.stars","y","spacewar.game-logic.stars/y",11703346),new cljs.core.Keyword("spacewar.game-logic.stars","class","spacewar.game-logic.stars/class",-1145332258)], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__1721){
return cljs.core.map_QMARK_.call(null,G__1721);
}),(function (G__1721){
return cljs.core.contains_QMARK_.call(null,G__1721,new cljs.core.Keyword(null,"x","x",2099068185));
}),(function (G__1721){
return cljs.core.contains_QMARK_.call(null,G__1721,new cljs.core.Keyword(null,"y","y",-1757859776));
}),(function (G__1721){
return cljs.core.contains_QMARK_.call(null,G__1721,new cljs.core.Keyword(null,"class","class",-2030961996));
})], null),(function (G__1721){
return ((cljs.core.map_QMARK_.call(null,G__1721)) && (((cljs.core.contains_QMARK_.call(null,G__1721,new cljs.core.Keyword(null,"x","x",2099068185))) && (((cljs.core.contains_QMARK_.call(null,G__1721,new cljs.core.Keyword(null,"y","y",-1757859776))) && (cljs.core.contains_QMARK_.call(null,G__1721,new cljs.core.Keyword(null,"class","class",-2030961996))))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.game-logic.stars","x","spacewar.game-logic.stars/x",-904388517),new cljs.core.Keyword("spacewar.game-logic.stars","y","spacewar.game-logic.stars/y",11703346),new cljs.core.Keyword("spacewar.game-logic.stars","class","spacewar.game-logic.stars/class",-1145332258)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"class","class",-2030961996)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"x","x",2099068185))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"y","y",-1757859776))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"class","class",-2030961996)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.stars","stars","spacewar.game-logic.stars/stars",1975574583),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("spacewar.game-logic.stars","star","spacewar.game-logic.stars/star",-1549645597)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.stars","star","spacewar.game-logic.stars/star",-1549645597),new cljs.core.Keyword("spacewar.game-logic.stars","star","spacewar.game-logic.stars/star",-1549645597),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("spacewar.game-logic.stars","star","spacewar.game-logic.stars/star",-1549645597)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__1722){
return cljs.core.coll_QMARK_.call(null,G__1722);
})], null),null));
spacewar.game_logic.stars.random_class = (function spacewar$game_logic$stars$random_class(){
var pred__1723 = cljs.core._LT_;
var expr__1724 = cljs.core.rand.call(null);
if(cljs.core.truth_(pred__1723.call(null,0.95,expr__1724))){
return new cljs.core.Keyword(null,"o","o",-1350007228);
} else {
if(cljs.core.truth_(pred__1723.call(null,0.9,expr__1724))){
return new cljs.core.Keyword(null,"b","b",1482224470);
} else {
if(cljs.core.truth_(pred__1723.call(null,0.8,expr__1724))){
return new cljs.core.Keyword(null,"a","a",-2123407586);
} else {
if(cljs.core.truth_(pred__1723.call(null,0.6,expr__1724))){
return new cljs.core.Keyword(null,"f","f",-1597136552);
} else {
if(cljs.core.truth_(pred__1723.call(null,0.4,expr__1724))){
return new cljs.core.Keyword(null,"g","g",1738089905);
} else {
if(cljs.core.truth_(pred__1723.call(null,0.2,expr__1724))){
return new cljs.core.Keyword(null,"k","k",-2146297393);
} else {
return new cljs.core.Keyword(null,"m","m",1632677161);
}
}
}
}
}
}
});
spacewar.game_logic.stars.make_random_star = (function spacewar$game_logic$stars$make_random_star(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(cljs.core.rand.call(null,spacewar.game_logic.config.known_space_x) | (0)),new cljs.core.Keyword(null,"y","y",-1757859776),(cljs.core.rand.call(null,spacewar.game_logic.config.known_space_y) | (0)),new cljs.core.Keyword(null,"class","class",-2030961996),spacewar.game_logic.stars.random_class.call(null)], null);
});
spacewar.game_logic.stars.make_pulsar = (function spacewar$game_logic$stars$make_pulsar(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(cljs.core.rand.call(null,spacewar.game_logic.config.known_space_x) | (0)),new cljs.core.Keyword(null,"y","y",-1757859776),(cljs.core.rand.call(null,spacewar.game_logic.config.known_space_y) | (0)),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"pulsar","pulsar",-980308240)], null);
});
spacewar.game_logic.stars.initialize = (function spacewar$game_logic$stars$initialize(){
var normal_stars = cljs.core.repeatedly.call(null,spacewar.game_logic.config.number_of_stars,spacewar.game_logic.stars.make_random_star);
var stars = cljs.core.conj.call(null,normal_stars,spacewar.game_logic.stars.make_pulsar.call(null));
return stars;
});

//# sourceMappingURL=stars.js.map
