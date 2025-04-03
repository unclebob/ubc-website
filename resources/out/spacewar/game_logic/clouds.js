// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('spacewar.game_logic.clouds');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('spacewar.geometry');
goog.require('spacewar.game_logic.config');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.clouds","x","spacewar.game-logic.clouds/x",1606590526),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.clouds","y","spacewar.game-logic.clouds/y",1775768541),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.clouds","concentration","spacewar.game-logic.clouds/concentration",1835495341),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.clouds","cloud","spacewar.game-logic.clouds/cloud",2018989582),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.game-logic.clouds","x","spacewar.game-logic.clouds/x",1606590526),new cljs.core.Keyword("spacewar.game-logic.clouds","y","spacewar.game-logic.clouds/y",1775768541),new cljs.core.Keyword("spacewar.game-logic.clouds","concentration","spacewar.game-logic.clouds/concentration",1835495341)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.game-logic.clouds","x","spacewar.game-logic.clouds/x",1606590526),new cljs.core.Keyword("spacewar.game-logic.clouds","y","spacewar.game-logic.clouds/y",1775768541),new cljs.core.Keyword("spacewar.game-logic.clouds","concentration","spacewar.game-logic.clouds/concentration",1835495341)], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__1698){
return cljs.core.map_QMARK_.call(null,G__1698);
}),(function (G__1698){
return cljs.core.contains_QMARK_.call(null,G__1698,new cljs.core.Keyword(null,"x","x",2099068185));
}),(function (G__1698){
return cljs.core.contains_QMARK_.call(null,G__1698,new cljs.core.Keyword(null,"y","y",-1757859776));
}),(function (G__1698){
return cljs.core.contains_QMARK_.call(null,G__1698,new cljs.core.Keyword(null,"concentration","concentration",1539606986));
})], null),(function (G__1698){
return ((cljs.core.map_QMARK_.call(null,G__1698)) && (((cljs.core.contains_QMARK_.call(null,G__1698,new cljs.core.Keyword(null,"x","x",2099068185))) && (((cljs.core.contains_QMARK_.call(null,G__1698,new cljs.core.Keyword(null,"y","y",-1757859776))) && (cljs.core.contains_QMARK_.call(null,G__1698,new cljs.core.Keyword(null,"concentration","concentration",1539606986))))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.game-logic.clouds","x","spacewar.game-logic.clouds/x",1606590526),new cljs.core.Keyword("spacewar.game-logic.clouds","y","spacewar.game-logic.clouds/y",1775768541),new cljs.core.Keyword("spacewar.game-logic.clouds","concentration","spacewar.game-logic.clouds/concentration",1835495341)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"concentration","concentration",1539606986)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"x","x",2099068185))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"y","y",-1757859776))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"concentration","concentration",1539606986)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.clouds","clouds","spacewar.game-logic.clouds/clouds",-924713794),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("spacewar.game-logic.clouds","cloud","spacewar.game-logic.clouds/cloud",2018989582)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.clouds","cloud","spacewar.game-logic.clouds/cloud",2018989582),new cljs.core.Keyword("spacewar.game-logic.clouds","cloud","spacewar.game-logic.clouds/cloud",2018989582),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("spacewar.game-logic.clouds","cloud","spacewar.game-logic.clouds/cloud",2018989582)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__1699){
return cljs.core.coll_QMARK_.call(null,G__1699);
})], null),null));
spacewar.game_logic.clouds.valid_cloud_QMARK_ = (function spacewar$game_logic$clouds$valid_cloud_QMARK_(cloud){
var valid = cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("spacewar.game-logic.clouds","cloud","spacewar.game-logic.clouds/cloud",2018989582),cloud);
if((!(valid))){
cljs.core.println.call(null,cljs.spec.alpha.explain_str.call(null,new cljs.core.Keyword("spacewar.game-logic.clouds","cloud","spacewar.game-logic.clouds/cloud",2018989582),cloud));
} else {
}

return valid;
});
spacewar.game_logic.clouds.make_cloud = (function spacewar$game_logic$clouds$make_cloud(var_args){
var G__1701 = arguments.length;
switch (G__1701) {
case 0:
return spacewar.game_logic.clouds.make_cloud.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return spacewar.game_logic.clouds.make_cloud.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spacewar.game_logic.clouds.make_cloud.cljs$core$IFn$_invoke$arity$0 = (function (){
return spacewar.game_logic.clouds.make_cloud.call(null,(0),(0),(0));
}));

(spacewar.game_logic.clouds.make_cloud.cljs$core$IFn$_invoke$arity$3 = (function (x,y,concentration){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"concentration","concentration",1539606986),concentration], null);
}));

(spacewar.game_logic.clouds.make_cloud.cljs$lang$maxFixedArity = 3);

spacewar.game_logic.clouds.harvest_dilithium = (function spacewar$game_logic$clouds$harvest_dilithium(ms,ship,cloud){
var ship_pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ship)], null);
var cloud_pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cloud),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cloud)], null);
if((spacewar.geometry.distance.call(null,ship_pos,cloud_pos) < spacewar.game_logic.config.dilithium_harvest_range)){
var max_harvest = (ms * spacewar.game_logic.config.dilithium_harvest_rate);
var need = (spacewar.game_logic.config.ship_dilithium - new cljs.core.Keyword(null,"dilithium","dilithium",1152933090).cljs$core$IFn$_invoke$arity$1(ship));
var cloud_content = new cljs.core.Keyword(null,"concentration","concentration",1539606986).cljs$core$IFn$_invoke$arity$1(cloud);
var harvest = (function (){var x__5090__auto__ = (function (){var x__5090__auto__ = max_harvest;
var y__5091__auto__ = cloud_content;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var y__5091__auto__ = need;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var ship__$1 = cljs.core.update.call(null,ship,new cljs.core.Keyword(null,"dilithium","dilithium",1152933090),cljs.core._PLUS_,harvest);
var cloud__$1 = cljs.core.update.call(null,cloud,new cljs.core.Keyword(null,"concentration","concentration",1539606986),cljs.core._,harvest);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ship__$1,cloud__$1], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ship,cloud], null);
}
});
spacewar.game_logic.clouds.update_dilithium_harvest = (function spacewar$game_logic$clouds$update_dilithium_harvest(ms,world){
var map__1703 = world;
var map__1703__$1 = cljs.core.__destructure_map.call(null,map__1703);
var clouds = cljs.core.get.call(null,map__1703__$1,new cljs.core.Keyword(null,"clouds","clouds",-632461223));
var ship = cljs.core.get.call(null,map__1703__$1,new cljs.core.Keyword(null,"ship","ship",197863473));
var clouds__$1 = clouds;
var ship__$1 = ship;
var harvested_clouds = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,clouds__$1)){
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"ship","ship",197863473),ship__$1,new cljs.core.Keyword(null,"clouds","clouds",-632461223),harvested_clouds);
} else {
var vec__1707 = spacewar.game_logic.clouds.harvest_dilithium.call(null,ms,ship__$1,cljs.core.first.call(null,clouds__$1));
var ship__$2 = cljs.core.nth.call(null,vec__1707,(0),null);
var cloud = cljs.core.nth.call(null,vec__1707,(1),null);
var G__1710 = cljs.core.rest.call(null,clouds__$1);
var G__1711 = ship__$2;
var G__1712 = cljs.core.conj.call(null,harvested_clouds,cloud);
clouds__$1 = G__1710;
ship__$1 = G__1711;
harvested_clouds = G__1712;
continue;
}
break;
}
});
spacewar.game_logic.clouds.update_clouds_age = (function spacewar$game_logic$clouds$update_clouds_age(ms,world){
var clouds = new cljs.core.Keyword(null,"clouds","clouds",-632461223).cljs$core$IFn$_invoke$arity$1(world);
var decay = Math.pow(spacewar.game_logic.config.cloud_decay_rate,ms);
var clouds__$1 = cljs.core.map.call(null,(function (p1__1713_SHARP_){
return cljs.core.update.call(null,p1__1713_SHARP_,new cljs.core.Keyword(null,"concentration","concentration",1539606986),cljs.core._STAR_,decay);
}),clouds);
var clouds__$2 = cljs.core.filter.call(null,(function (p1__1714_SHARP_){
return (new cljs.core.Keyword(null,"concentration","concentration",1539606986).cljs$core$IFn$_invoke$arity$1(p1__1714_SHARP_) > (1));
}),clouds__$1);
var clouds__$3 = cljs.core.doall.call(null,clouds__$2);
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"clouds","clouds",-632461223),clouds__$3);
});
spacewar.game_logic.clouds.update_clouds = (function spacewar$game_logic$clouds$update_clouds(ms,world){
return spacewar.game_logic.clouds.update_dilithium_harvest.call(null,ms,spacewar.game_logic.clouds.update_clouds_age.call(null,ms,world));
});

//# sourceMappingURL=clouds.js.map
