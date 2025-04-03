// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('spacewar.game_logic.shots');
goog.require('cljs.core');
goog.require('spacewar.geometry');
goog.require('spacewar.vector');
goog.require('spacewar.game_logic.config');
goog.require('spacewar.game_logic.ship');
goog.require('spacewar.util');
goog.require('clojure.set');
goog.require('spacewar.game_logic.explosions');
goog.require('cljs.spec.alpha');
goog.require('quil.core');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.shots","x","spacewar.game-logic.shots/x",-904470589),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.shots","y","spacewar.game-logic.shots/y",11784026),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.shots","bearing","spacewar.game-logic.shots/bearing",-1778830507),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1614#","p1__1614#",1617844704,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),(0),new cljs.core.Symbol(null,"p1__1614#","p1__1614#",1617844704,null),(360)))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),(0),new cljs.core.Symbol(null,"%","%",-950237169,null),(360)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.number_QMARK_,(function (p1__1614_SHARP_){
return ((((0) <= p1__1614_SHARP_)) && ((p1__1614_SHARP_ <= (360))));
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.shots","range","spacewar.game-logic.shots/range",213964564),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.shots","type","spacewar.game-logic.shots/type",-1425726794),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"klingon-torpedo","klingon-torpedo",-403411893),"null",new cljs.core.Keyword(null,"klingon-kinetic","klingon-kinetic",844180079),"null",new cljs.core.Keyword(null,"romulan-blast","romulan-blast",-2029961488),"null",new cljs.core.Keyword(null,"klingon-phaser","klingon-phaser",-1316039597),"null",new cljs.core.Keyword(null,"torpedo","torpedo",275681140),"null",new cljs.core.Keyword(null,"phaser","phaser",-1448421666),"null",new cljs.core.Keyword(null,"kinetic","kinetic",-451191810),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"klingon-torpedo","klingon-torpedo",-403411893),null,new cljs.core.Keyword(null,"klingon-kinetic","klingon-kinetic",844180079),null,new cljs.core.Keyword(null,"romulan-blast","romulan-blast",-2029961488),null,new cljs.core.Keyword(null,"klingon-phaser","klingon-phaser",-1316039597),null,new cljs.core.Keyword(null,"torpedo","torpedo",275681140),null,new cljs.core.Keyword(null,"phaser","phaser",-1448421666),null,new cljs.core.Keyword(null,"kinetic","kinetic",-451191810),null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.shots","corbomite","spacewar.game-logic.shots/corbomite",421301670),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.shots","kamikazee","spacewar.game-logic.shots/kamikazee",-279932266),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.shots","shot","spacewar.game-logic.shots/shot",468758032),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.game-logic.shots","x","spacewar.game-logic.shots/x",-904470589),new cljs.core.Keyword("spacewar.game-logic.shots","y","spacewar.game-logic.shots/y",11784026),new cljs.core.Keyword("spacewar.game-logic.shots","bearing","spacewar.game-logic.shots/bearing",-1778830507),new cljs.core.Keyword("spacewar.game-logic.shots","range","spacewar.game-logic.shots/range",213964564),new cljs.core.Keyword("spacewar.game-logic.shots","type","spacewar.game-logic.shots/type",-1425726794),new cljs.core.Keyword("spacewar.game-logic.shots","corbomite","spacewar.game-logic.shots/corbomite",421301670),new cljs.core.Keyword("spacewar.game-logic.shots","kamikazee","spacewar.game-logic.shots/kamikazee",-279932266)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.game-logic.shots","x","spacewar.game-logic.shots/x",-904470589),new cljs.core.Keyword("spacewar.game-logic.shots","y","spacewar.game-logic.shots/y",11784026),new cljs.core.Keyword("spacewar.game-logic.shots","bearing","spacewar.game-logic.shots/bearing",-1778830507),new cljs.core.Keyword("spacewar.game-logic.shots","range","spacewar.game-logic.shots/range",213964564),new cljs.core.Keyword("spacewar.game-logic.shots","type","spacewar.game-logic.shots/type",-1425726794),new cljs.core.Keyword("spacewar.game-logic.shots","corbomite","spacewar.game-logic.shots/corbomite",421301670),new cljs.core.Keyword("spacewar.game-logic.shots","kamikazee","spacewar.game-logic.shots/kamikazee",-279932266)], null),null,null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__1615){
return cljs.core.map_QMARK_.call(null,G__1615);
}),(function (G__1615){
return cljs.core.contains_QMARK_.call(null,G__1615,new cljs.core.Keyword(null,"x","x",2099068185));
}),(function (G__1615){
return cljs.core.contains_QMARK_.call(null,G__1615,new cljs.core.Keyword(null,"y","y",-1757859776));
}),(function (G__1615){
return cljs.core.contains_QMARK_.call(null,G__1615,new cljs.core.Keyword(null,"bearing","bearing",-1189702101));
}),(function (G__1615){
return cljs.core.contains_QMARK_.call(null,G__1615,new cljs.core.Keyword(null,"range","range",1639692286));
}),(function (G__1615){
return cljs.core.contains_QMARK_.call(null,G__1615,new cljs.core.Keyword(null,"type","type",1174270348));
}),(function (G__1615){
return cljs.core.contains_QMARK_.call(null,G__1615,new cljs.core.Keyword(null,"corbomite","corbomite",1612720764));
}),(function (G__1615){
return cljs.core.contains_QMARK_.call(null,G__1615,new cljs.core.Keyword(null,"kamikazee","kamikazee",1682650476));
})], null),(function (G__1615){
return ((cljs.core.map_QMARK_.call(null,G__1615)) && (((cljs.core.contains_QMARK_.call(null,G__1615,new cljs.core.Keyword(null,"x","x",2099068185))) && (((cljs.core.contains_QMARK_.call(null,G__1615,new cljs.core.Keyword(null,"y","y",-1757859776))) && (((cljs.core.contains_QMARK_.call(null,G__1615,new cljs.core.Keyword(null,"bearing","bearing",-1189702101))) && (((cljs.core.contains_QMARK_.call(null,G__1615,new cljs.core.Keyword(null,"range","range",1639692286))) && (((cljs.core.contains_QMARK_.call(null,G__1615,new cljs.core.Keyword(null,"type","type",1174270348))) && (((cljs.core.contains_QMARK_.call(null,G__1615,new cljs.core.Keyword(null,"corbomite","corbomite",1612720764))) && (cljs.core.contains_QMARK_.call(null,G__1615,new cljs.core.Keyword(null,"kamikazee","kamikazee",1682650476))))))))))))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.game-logic.shots","x","spacewar.game-logic.shots/x",-904470589),new cljs.core.Keyword("spacewar.game-logic.shots","y","spacewar.game-logic.shots/y",11784026),new cljs.core.Keyword("spacewar.game-logic.shots","bearing","spacewar.game-logic.shots/bearing",-1778830507),new cljs.core.Keyword("spacewar.game-logic.shots","range","spacewar.game-logic.shots/range",213964564),new cljs.core.Keyword("spacewar.game-logic.shots","type","spacewar.game-logic.shots/type",-1425726794),new cljs.core.Keyword("spacewar.game-logic.shots","corbomite","spacewar.game-logic.shots/corbomite",421301670),new cljs.core.Keyword("spacewar.game-logic.shots","kamikazee","spacewar.game-logic.shots/kamikazee",-279932266)], null),null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"bearing","bearing",-1189702101),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"corbomite","corbomite",1612720764),new cljs.core.Keyword(null,"kamikazee","kamikazee",1682650476)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"x","x",2099068185))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"y","y",-1757859776))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"bearing","bearing",-1189702101))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"range","range",1639692286))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"type","type",1174270348))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"corbomite","corbomite",1612720764))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"kamikazee","kamikazee",1682650476)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.shots","shots","spacewar.game-logic.shots/shots",567599081),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("spacewar.game-logic.shots","shot","spacewar.game-logic.shots/shot",468758032)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.shots","shot","spacewar.game-logic.shots/shot",468758032),new cljs.core.Keyword("spacewar.game-logic.shots","shot","spacewar.game-logic.shots/shot",468758032),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("spacewar.game-logic.shots","shot","spacewar.game-logic.shots/shot",468758032)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__1616){
return cljs.core.coll_QMARK_.call(null,G__1616);
})], null),null));
spacewar.game_logic.shots.__GT_shot = (function spacewar$game_logic$shots$__GT_shot(x,y,bearing,type){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"bearing","bearing",-1189702101),bearing,new cljs.core.Keyword(null,"range","range",1639692286),(0),new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"corbomite","corbomite",1612720764),false,new cljs.core.Keyword(null,"kamikazee","kamikazee",1682650476),false], null);
});
spacewar.game_logic.shots.fire_weapon = (function spacewar$game_logic$shots$fire_weapon(pos,bearing,number,spread,corbomite){
var start_bearing = ((cljs.core._EQ_.call(null,number,(1)))?bearing:(bearing - (spread / (2))));
var bearing_inc = ((cljs.core._EQ_.call(null,number,(1)))?(0):(spread / (number - (1))));
var shots = cljs.core.PersistentVector.EMPTY;
var bearing__$1 = start_bearing;
var number__$1 = number;
while(true){
if((number__$1 === (0))){
return shots;
} else {
var G__1617 = cljs.core.conj.call(null,shots,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.first.call(null,pos),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.second.call(null,pos),new cljs.core.Keyword(null,"bearing","bearing",-1189702101),cljs.core.mod.call(null,bearing__$1,(360)),new cljs.core.Keyword(null,"range","range",1639692286),(0),new cljs.core.Keyword(null,"corbomite","corbomite",1612720764),corbomite], null));
var G__1618 = (bearing__$1 + bearing_inc);
var G__1619 = (number__$1 - (1));
shots = G__1617;
bearing__$1 = G__1618;
number__$1 = G__1619;
continue;
}
break;
}
});
spacewar.game_logic.shots.power_required = (function spacewar$game_logic$shots$power_required(weapon){
var pred__1620 = cljs.core._EQ_;
var expr__1621 = weapon;
if(cljs.core.truth_(pred__1620.call(null,new cljs.core.Keyword(null,"phaser","phaser",-1448421666),expr__1621))){
return spacewar.game_logic.config.phaser_power;
} else {
if(cljs.core.truth_(pred__1620.call(null,new cljs.core.Keyword(null,"torpedo","torpedo",275681140),expr__1621))){
return spacewar.game_logic.config.torpedo_power;
} else {
if(cljs.core.truth_(pred__1620.call(null,new cljs.core.Keyword(null,"kinetic","kinetic",-451191810),expr__1621))){
return spacewar.game_logic.config.kinetic_power;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__1621)].join('')));
}
}
}
});
spacewar.game_logic.shots.decrement_inventory = (function spacewar$game_logic$shots$decrement_inventory(ship){
var map__1623 = ship;
var map__1623__$1 = cljs.core.__destructure_map.call(null,map__1623);
var weapon_number_setting = cljs.core.get.call(null,map__1623__$1,new cljs.core.Keyword(null,"weapon-number-setting","weapon-number-setting",261885890));
var selected_weapon = cljs.core.get.call(null,map__1623__$1,new cljs.core.Keyword(null,"selected-weapon","selected-weapon",1106774428));
var kinetics = cljs.core.get.call(null,map__1623__$1,new cljs.core.Keyword(null,"kinetics","kinetics",-707133266));
var torpedos = cljs.core.get.call(null,map__1623__$1,new cljs.core.Keyword(null,"torpedos","torpedos",344905121));
var kinetics__$1 = ((cljs.core._EQ_.call(null,selected_weapon,new cljs.core.Keyword(null,"kinetic","kinetic",-451191810)))?(kinetics - weapon_number_setting):kinetics);
var torpedos__$1 = ((cljs.core._EQ_.call(null,selected_weapon,new cljs.core.Keyword(null,"torpedo","torpedo",275681140)))?(torpedos - weapon_number_setting):torpedos);
return cljs.core.assoc.call(null,ship,new cljs.core.Keyword(null,"kinetics","kinetics",-707133266),kinetics__$1,new cljs.core.Keyword(null,"torpedos","torpedos",344905121),torpedos__$1);
});
spacewar.game_logic.shots.sufficient_inventory = (function spacewar$game_logic$shots$sufficient_inventory(ship){
var map__1624 = ship;
var map__1624__$1 = cljs.core.__destructure_map.call(null,map__1624);
var weapon_number_setting = cljs.core.get.call(null,map__1624__$1,new cljs.core.Keyword(null,"weapon-number-setting","weapon-number-setting",261885890));
var selected_weapon = cljs.core.get.call(null,map__1624__$1,new cljs.core.Keyword(null,"selected-weapon","selected-weapon",1106774428));
var kinetics = cljs.core.get.call(null,map__1624__$1,new cljs.core.Keyword(null,"kinetics","kinetics",-707133266));
var torpedos = cljs.core.get.call(null,map__1624__$1,new cljs.core.Keyword(null,"torpedos","torpedos",344905121));
var pred__1625 = cljs.core._EQ_;
var expr__1626 = selected_weapon;
if(cljs.core.truth_(pred__1625.call(null,new cljs.core.Keyword(null,"torpedo","torpedo",275681140),expr__1626))){
return (torpedos >= weapon_number_setting);
} else {
if(cljs.core.truth_(pred__1625.call(null,new cljs.core.Keyword(null,"kinetic","kinetic",-451191810),expr__1626))){
return (kinetics >= weapon_number_setting);
} else {
return true;
}
}
});
spacewar.game_logic.shots.weapon_failure_dice = (function spacewar$game_logic$shots$weapon_failure_dice(n,damage){
return cljs.core.repeatedly.call(null,n,(function (){
return (cljs.core.rand.call(null,(100)) < damage);
}));
});
spacewar.game_logic.shots.weapon_bearing_deviation = (function spacewar$game_logic$shots$weapon_bearing_deviation(n,damage){
return cljs.core.repeatedly.call(null,n,(function (){
if((cljs.core.rand.call(null,(100)) > damage)){
return (0);
} else {
return ((10) - cljs.core.rand.call(null,(20)));
}
}));
});
spacewar.game_logic.shots.corrupt_shot = (function spacewar$game_logic$shots$corrupt_shot(shot,deviation){
var bearing = new cljs.core.Keyword(null,"bearing","bearing",-1189702101).cljs$core$IFn$_invoke$arity$1(shot);
var deviated_bearing = cljs.core.mod.call(null,(deviation + bearing),(360));
return cljs.core.assoc.call(null,shot,new cljs.core.Keyword(null,"bearing","bearing",-1189702101),deviated_bearing);
});
spacewar.game_logic.shots.corrupt_shots_by_damage = (function spacewar$game_logic$shots$corrupt_shots_by_damage(damage,shots){
var shots_and_failure = cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,spacewar.game_logic.shots.weapon_failure_dice.call(null,cljs.core.count.call(null,shots),damage),shots));
var final_shots = cljs.core.map.call(null,cljs.core.second,cljs.core.remove.call(null,cljs.core.first,shots_and_failure));
return cljs.core.map.call(null,(function (p1__1628_SHARP_,p2__1629_SHARP_){
return spacewar.game_logic.shots.corrupt_shot.call(null,p1__1628_SHARP_,p2__1629_SHARP_);
}),final_shots,spacewar.game_logic.shots.weapon_bearing_deviation.call(null,cljs.core.count.call(null,final_shots),damage));
});
spacewar.game_logic.shots.warp_bearing_deviation = (function spacewar$game_logic$shots$warp_bearing_deviation(){
return ((40) - cljs.core.rand.call(null,(80)));
});
spacewar.game_logic.shots.corrupt_shot_bearing = (function spacewar$game_logic$shots$corrupt_shot_bearing(shot){
var bearing = new cljs.core.Keyword(null,"bearing","bearing",-1189702101).cljs$core$IFn$_invoke$arity$1(shot);
var deviation = spacewar.game_logic.shots.warp_bearing_deviation.call(null);
var bearing__$1 = cljs.core.mod.call(null,(bearing + deviation),(360));
return cljs.core.assoc.call(null,shot,new cljs.core.Keyword(null,"bearing","bearing",-1189702101),bearing__$1);
});
spacewar.game_logic.shots.warp_corruption = (function spacewar$game_logic$shots$warp_corruption(warp,shots){
if((warp === (0))){
return shots;
} else {
return cljs.core.map.call(null,spacewar.game_logic.shots.corrupt_shot_bearing,shots);
}
});
spacewar.game_logic.shots.weapon_fire_handler = (function spacewar$game_logic$shots$weapon_fire_handler(_,world){
var map__1631 = world;
var map__1631__$1 = cljs.core.__destructure_map.call(null,map__1631);
var ship = cljs.core.get.call(null,map__1631__$1,new cljs.core.Keyword(null,"ship","ship",197863473));
var map__1632 = ship;
var map__1632__$1 = cljs.core.__destructure_map.call(null,map__1632);
var destroyed = cljs.core.get.call(null,map__1632__$1,new cljs.core.Keyword(null,"destroyed","destroyed",-427566535));
var x = cljs.core.get.call(null,map__1632__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var corbomite_device_installed = cljs.core.get.call(null,map__1632__$1,new cljs.core.Keyword(null,"corbomite-device-installed","corbomite-device-installed",-2093492516));
var selected_weapon = cljs.core.get.call(null,map__1632__$1,new cljs.core.Keyword(null,"selected-weapon","selected-weapon",1106774428));
var y = cljs.core.get.call(null,map__1632__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var weapon_number_setting = cljs.core.get.call(null,map__1632__$1,new cljs.core.Keyword(null,"weapon-number-setting","weapon-number-setting",261885890));
var weapon_spread_setting = cljs.core.get.call(null,map__1632__$1,new cljs.core.Keyword(null,"weapon-spread-setting","weapon-spread-setting",286464677));
var target_bearing = cljs.core.get.call(null,map__1632__$1,new cljs.core.Keyword(null,"target-bearing","target-bearing",-1661786546));
var antimatter = cljs.core.get.call(null,map__1632__$1,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000));
var required_power = (weapon_number_setting * spacewar.game_logic.shots.power_required.call(null,selected_weapon));
var can_shoot_QMARK_ = (((required_power < antimatter)) && (((spacewar.game_logic.shots.sufficient_inventory.call(null,ship)) && (cljs.core.not.call(null,destroyed)))));
var antimatter__$1 = ((can_shoot_QMARK_)?(antimatter - required_power):antimatter);
var shots = ((can_shoot_QMARK_)?spacewar.game_logic.shots.fire_weapon.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),target_bearing,weapon_number_setting,weapon_spread_setting,corbomite_device_installed):cljs.core.PersistentVector.EMPTY);
var ship__$1 = ((can_shoot_QMARK_)?spacewar.game_logic.ship.heat_core.call(null,required_power,spacewar.game_logic.shots.decrement_inventory.call(null,ship)):ship);
var shots__$1 = cljs.core.map.call(null,(function (p1__1630_SHARP_){
return cljs.core.assoc.call(null,p1__1630_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),selected_weapon);
}),shots);
var shots__$2 = spacewar.game_logic.shots.corrupt_shots_by_damage.call(null,new cljs.core.Keyword(null,"weapons-damage","weapons-damage",1275474500).cljs$core$IFn$_invoke$arity$1(ship__$1),shots__$1);
var shots__$3 = spacewar.game_logic.shots.warp_corruption.call(null,new cljs.core.Keyword(null,"warp","warp",-931589598).cljs$core$IFn$_invoke$arity$1(ship__$1),shots__$2);
var ship__$2 = cljs.core.assoc.call(null,ship__$1,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),antimatter__$1);
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"shots","shots",-1155689265),cljs.core.concat.call(null,new cljs.core.Keyword(null,"shots","shots",-1155689265).cljs$core$IFn$_invoke$arity$1(world),shots__$3),new cljs.core.Keyword(null,"ship","ship",197863473),ship__$2);
});
spacewar.game_logic.shots.process_events = (function spacewar$game_logic$shots$process_events(events,world){
var vec__1633 = spacewar.util.handle_event.call(null,new cljs.core.Keyword(null,"weapon-fire","weapon-fire",1702391188),spacewar.game_logic.shots.weapon_fire_handler,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [events,world], null));
var _ = cljs.core.nth.call(null,vec__1633,(0),null);
var world__$1 = cljs.core.nth.call(null,vec__1633,(1),null);
return world__$1;
});
spacewar.game_logic.shots.update_shot = (function spacewar$game_logic$shots$update_shot(shot,distance,range_limit){
var map__1636 = shot;
var map__1636__$1 = cljs.core.__destructure_map.call(null,map__1636);
var x = cljs.core.get.call(null,map__1636__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__1636__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var bearing = cljs.core.get.call(null,map__1636__$1,new cljs.core.Keyword(null,"bearing","bearing",-1189702101));
var range = cljs.core.get.call(null,map__1636__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var corbomite = cljs.core.get.call(null,map__1636__$1,new cljs.core.Keyword(null,"corbomite","corbomite",1612720764));
var kamikazee = cljs.core.get.call(null,map__1636__$1,new cljs.core.Keyword(null,"kamikazee","kamikazee",1682650476));
var distance__$1 = (cljs.core.truth_(corbomite)?((2) * distance):distance);
var distance__$2 = (cljs.core.truth_(kamikazee)?(spacewar.game_logic.config.kamikazee_shot_velocity_factor * distance__$1):distance__$1);
var radians = spacewar.geometry.__GT_radians.call(null,bearing);
var delta = spacewar.vector.from_angular.call(null,distance__$2,radians);
var vec__1637 = spacewar.vector.add.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),delta);
var sx = cljs.core.nth.call(null,vec__1637,(0),null);
var sy = cljs.core.nth.call(null,vec__1637,(1),null);
var range__$1 = (range + distance__$2);
if((range__$1 > range_limit)){
return null;
} else {
return cljs.core.assoc.call(null,shot,new cljs.core.Keyword(null,"x","x",2099068185),sx,new cljs.core.Keyword(null,"y","y",-1757859776),sy,new cljs.core.Keyword(null,"range","range",1639692286),range__$1);
}
});
spacewar.game_logic.shots.shot_velocity = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"phaser","phaser",-1448421666),spacewar.game_logic.config.phaser_velocity,new cljs.core.Keyword(null,"torpedo","torpedo",275681140),spacewar.game_logic.config.torpedo_velocity,new cljs.core.Keyword(null,"kinetic","kinetic",-451191810),spacewar.game_logic.config.kinetic_velocity,new cljs.core.Keyword(null,"klingon-kinetic","klingon-kinetic",844180079),spacewar.game_logic.config.klingon_kinetic_velocity,new cljs.core.Keyword(null,"klingon-phaser","klingon-phaser",-1316039597),spacewar.game_logic.config.klingon_phaser_velocity,new cljs.core.Keyword(null,"klingon-torpedo","klingon-torpedo",-403411893),spacewar.game_logic.config.klingon_torpedo_velocity,new cljs.core.Keyword(null,"romulan-blast","romulan-blast",-2029961488),spacewar.game_logic.config.romulan_blast_velocity], null);
spacewar.game_logic.shots.shot_distance = (function spacewar$game_logic$shots$shot_distance(ms,shot){
return (ms * new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shot).call(null,spacewar.game_logic.shots.shot_velocity));
});
spacewar.game_logic.shots.shot_range_limit = (function spacewar$game_logic$shots$shot_range_limit(shot){
var pred__1640 = cljs.core._EQ_;
var expr__1641 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shot);
if(cljs.core.truth_(pred__1640.call(null,new cljs.core.Keyword(null,"kinetic","kinetic",-451191810),expr__1641))){
return spacewar.game_logic.config.kinetic_range;
} else {
if(cljs.core.truth_(pred__1640.call(null,new cljs.core.Keyword(null,"torpedo","torpedo",275681140),expr__1641))){
return spacewar.game_logic.config.torpedo_range;
} else {
if(cljs.core.truth_(pred__1640.call(null,new cljs.core.Keyword(null,"phaser","phaser",-1448421666),expr__1641))){
return spacewar.game_logic.config.phaser_range;
} else {
if(cljs.core.truth_(pred__1640.call(null,new cljs.core.Keyword(null,"klingon-kinetic","klingon-kinetic",844180079),expr__1641))){
return spacewar.game_logic.config.klingon_kinetic_range;
} else {
if(cljs.core.truth_(pred__1640.call(null,new cljs.core.Keyword(null,"klingon-phaser","klingon-phaser",-1316039597),expr__1641))){
return spacewar.game_logic.config.klingon_phaser_range;
} else {
if(cljs.core.truth_(pred__1640.call(null,new cljs.core.Keyword(null,"klingon-torpedo","klingon-torpedo",-403411893),expr__1641))){
return spacewar.game_logic.config.klingon_torpedo_range;
} else {
if(cljs.core.truth_(pred__1640.call(null,new cljs.core.Keyword(null,"romulan-blast","romulan-blast",-2029961488),expr__1641))){
return spacewar.game_logic.config.romulan_blast_range;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__1641)].join('')));
}
}
}
}
}
}
}
});
spacewar.game_logic.shots.update_shot_positions = (function spacewar$game_logic$shots$update_shot_positions(ms,world){
var map__1644 = world;
var map__1644__$1 = cljs.core.__destructure_map.call(null,map__1644);
var shots = cljs.core.get.call(null,map__1644__$1,new cljs.core.Keyword(null,"shots","shots",-1155689265));
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"shots","shots",-1155689265),cljs.core.doall.call(null,cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__1643_SHARP_){
return spacewar.game_logic.shots.update_shot.call(null,p1__1643_SHARP_,spacewar.game_logic.shots.shot_distance.call(null,ms,p1__1643_SHARP_),spacewar.game_logic.shots.shot_range_limit.call(null,p1__1643_SHARP_));
}),shots))));
});
spacewar.game_logic.shots.hit_proximity = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"phaser","phaser",-1448421666),spacewar.game_logic.config.phaser_proximity,new cljs.core.Keyword(null,"torpedo","torpedo",275681140),spacewar.game_logic.config.torpedo_proximity,new cljs.core.Keyword(null,"kinetic","kinetic",-451191810),spacewar.game_logic.config.kinetic_proximity], null);
spacewar.game_logic.shots.shot_proximity = (function spacewar$game_logic$shots$shot_proximity(shot){
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shot);
return type.call(null,spacewar.game_logic.shots.hit_proximity);
});
spacewar.game_logic.shots.hit_by_kinetic = (function spacewar$game_logic$shots$hit_by_kinetic(hit_pairs,target){
var hit_shots = cljs.core.map.call(null,new cljs.core.Keyword(null,"shot","shot",1961298790),cljs.core.filter.call(null,(function (p1__1645_SHARP_){
return cljs.core._EQ_.call(null,target,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(p1__1645_SHARP_));
}),hit_pairs));
var corbomite = new cljs.core.Keyword(null,"corbomite","corbomite",1612720764).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,hit_shots));
return cljs.core.assoc.call(null,target,new cljs.core.Keyword(null,"hit","hit",1909257382),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"weapon","weapon",-504830232),new cljs.core.Keyword(null,"kinetic","kinetic",-451191810),new cljs.core.Keyword(null,"damage","damage",970520018),((spacewar.game_logic.config.kinetic_damage * cljs.core.count.call(null,hit_shots)) * (cljs.core.truth_(corbomite)?(3):(1)))], null));
});
spacewar.game_logic.shots.hit_by_phaser = (function spacewar$game_logic$shots$hit_by_phaser(hit_pairs,target){
var hit_shots = cljs.core.map.call(null,new cljs.core.Keyword(null,"shot","shot",1961298790),cljs.core.filter.call(null,(function (p1__1646_SHARP_){
return cljs.core._EQ_.call(null,target,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(p1__1646_SHARP_));
}),hit_pairs));
var ranges = cljs.core.map.call(null,new cljs.core.Keyword(null,"range","range",1639692286),hit_shots);
var corbomite = new cljs.core.Keyword(null,"corbomite","corbomite",1612720764).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,hit_shots));
if(cljs.core.truth_(corbomite)){
return cljs.core.assoc.call(null,target,new cljs.core.Keyword(null,"hit","hit",1909257382),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"weapon","weapon",-504830232),new cljs.core.Keyword(null,"phaser","phaser",-1448421666),new cljs.core.Keyword(null,"damage","damage",970520018),cljs.core.repeat.call(null,cljs.core.count.call(null,ranges),0.001)], null));
} else {
return cljs.core.assoc.call(null,target,new cljs.core.Keyword(null,"hit","hit",1909257382),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"weapon","weapon",-504830232),new cljs.core.Keyword(null,"phaser","phaser",-1448421666),new cljs.core.Keyword(null,"damage","damage",970520018),ranges], null));
}
});
spacewar.game_logic.shots.hit_by_torpedo = (function spacewar$game_logic$shots$hit_by_torpedo(hit_pairs,target){
var hit_shots = cljs.core.map.call(null,new cljs.core.Keyword(null,"shot","shot",1961298790),cljs.core.filter.call(null,(function (p1__1647_SHARP_){
return cljs.core._EQ_.call(null,target,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(p1__1647_SHARP_));
}),hit_pairs));
var corbomite = new cljs.core.Keyword(null,"corbomite","corbomite",1612720764).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,hit_shots));
return cljs.core.assoc.call(null,target,new cljs.core.Keyword(null,"hit","hit",1909257382),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"weapon","weapon",-504830232),new cljs.core.Keyword(null,"torpedo","torpedo",275681140),new cljs.core.Keyword(null,"damage","damage",970520018),((spacewar.game_logic.config.torpedo_damage * cljs.core.count.call(null,hit_shots)) * (cljs.core.truth_(corbomite)?(3):(1)))], null));
});
spacewar.game_logic.shots.hit_processors = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"phaser","phaser",-1448421666),spacewar.game_logic.shots.hit_by_phaser,new cljs.core.Keyword(null,"torpedo","torpedo",275681140),spacewar.game_logic.shots.hit_by_torpedo,new cljs.core.Keyword(null,"kinetic","kinetic",-451191810),spacewar.game_logic.shots.hit_by_kinetic], null);
spacewar.game_logic.shots.process_hit = (function spacewar$game_logic$shots$process_hit(hits,target){
var shot = new cljs.core.Keyword(null,"shot","shot",1961298790).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,hits));
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shot);
var hit_by = type.call(null,spacewar.game_logic.shots.hit_processors);
return hit_by.call(null,hits,target);
});
spacewar.game_logic.shots.update_hits = (function spacewar$game_logic$shots$update_hits(target_tag,world){
var map__1652 = world;
var map__1652__$1 = cljs.core.__destructure_map.call(null,map__1652);
var shots = cljs.core.get.call(null,map__1652__$1,new cljs.core.Keyword(null,"shots","shots",-1155689265));
var explosions = cljs.core.get.call(null,map__1652__$1,new cljs.core.Keyword(null,"explosions","explosions",-1941460974));
var relevant_shots = cljs.core.filter.call(null,(function (p1__1648_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"torpedo","torpedo",275681140),null,new cljs.core.Keyword(null,"phaser","phaser",-1448421666),null,new cljs.core.Keyword(null,"kinetic","kinetic",-451191810),null], null), null).call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__1648_SHARP_));
}),shots);
var targets = target_tag.call(null,world);
var pairs = (function (){var iter__5480__auto__ = (function spacewar$game_logic$shots$update_hits_$_iter__1653(s__1654){
return (new cljs.core.LazySeq(null,(function (){
var s__1654__$1 = s__1654;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__1654__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var t = cljs.core.first.call(null,xs__6360__auto__);
var iterys__5476__auto__ = ((function (s__1654__$1,t,xs__6360__auto__,temp__5804__auto__,map__1652,map__1652__$1,shots,explosions,relevant_shots,targets){
return (function spacewar$game_logic$shots$update_hits_$_iter__1653_$_iter__1655(s__1656){
return (new cljs.core.LazySeq(null,((function (s__1654__$1,t,xs__6360__auto__,temp__5804__auto__,map__1652,map__1652__$1,shots,explosions,relevant_shots,targets){
return (function (){
var s__1656__$1 = s__1656;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__1656__$1);
if(temp__5804__auto____$1){
var s__1656__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1656__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__1656__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__1658 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__1657 = (0);
while(true){
if((i__1657 < size__5479__auto__)){
var s = cljs.core._nth.call(null,c__5478__auto__,i__1657);
cljs.core.chunk_append.call(null,b__1658,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),t,new cljs.core.Keyword(null,"shot","shot",1961298790),s,new cljs.core.Keyword(null,"distance","distance",-1671893894),spacewar.geometry.distance.call(null,spacewar.util.pos.call(null,s),spacewar.util.pos.call(null,t))], null));

var G__1659 = (i__1657 + (1));
i__1657 = G__1659;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1658),spacewar$game_logic$shots$update_hits_$_iter__1653_$_iter__1655.call(null,cljs.core.chunk_rest.call(null,s__1656__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1658),null);
}
} else {
var s = cljs.core.first.call(null,s__1656__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),t,new cljs.core.Keyword(null,"shot","shot",1961298790),s,new cljs.core.Keyword(null,"distance","distance",-1671893894),spacewar.geometry.distance.call(null,spacewar.util.pos.call(null,s),spacewar.util.pos.call(null,t))], null),spacewar$game_logic$shots$update_hits_$_iter__1653_$_iter__1655.call(null,cljs.core.rest.call(null,s__1656__$2)));
}
} else {
return null;
}
break;
}
});})(s__1654__$1,t,xs__6360__auto__,temp__5804__auto__,map__1652,map__1652__$1,shots,explosions,relevant_shots,targets))
,null,null));
});})(s__1654__$1,t,xs__6360__auto__,temp__5804__auto__,map__1652,map__1652__$1,shots,explosions,relevant_shots,targets))
;
var fs__5477__auto__ = cljs.core.seq.call(null,iterys__5476__auto__.call(null,relevant_shots));
if(fs__5477__auto__){
return cljs.core.concat.call(null,fs__5477__auto__,spacewar$game_logic$shots$update_hits_$_iter__1653.call(null,cljs.core.rest.call(null,s__1654__$1)));
} else {
var G__1660 = cljs.core.rest.call(null,s__1654__$1);
s__1654__$1 = G__1660;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,targets);
})();
var hits = cljs.core.filter.call(null,(function (p1__1649_SHARP_){
return (spacewar.game_logic.shots.shot_proximity.call(null,new cljs.core.Keyword(null,"shot","shot",1961298790).cljs$core$IFn$_invoke$arity$1(p1__1649_SHARP_)) >= new cljs.core.Keyword(null,"distance","distance",-1671893894).cljs$core$IFn$_invoke$arity$1(p1__1649_SHARP_));
}),pairs);
var hit_targets = cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"target","target",253001721),hits));
var hit_shots = cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"shot","shot",1961298790),hits));
var un_hit_targets = clojure.set.difference.call(null,cljs.core.set.call(null,targets),hit_targets);
var un_hit_shots = clojure.set.difference.call(null,cljs.core.set.call(null,shots),hit_shots);
var hit_targets__$1 = cljs.core.map.call(null,(function (p1__1650_SHARP_){
return spacewar.game_logic.shots.process_hit.call(null,hits,p1__1650_SHARP_);
}),hit_targets);
var explosions__$1 = cljs.core.concat.call(null,explosions,cljs.core.map.call(null,(function (p1__1651_SHARP_){
return spacewar.game_logic.explosions.shot__GT_explosion.call(null,p1__1651_SHARP_);
}),hit_shots));
return cljs.core.assoc.call(null,world,target_tag,cljs.core.doall.call(null,cljs.core.concat.call(null,un_hit_targets,hit_targets__$1)),new cljs.core.Keyword(null,"shots","shots",-1155689265),cljs.core.doall.call(null,cljs.core.concat.call(null,un_hit_shots)),new cljs.core.Keyword(null,"explosions","explosions",-1941460974),cljs.core.doall.call(null,explosions__$1));
});
spacewar.game_logic.shots.friend_or_foe = (function spacewar$game_logic$shots$friend_or_foe(shot){
if((!((new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"klingon-torpedo","klingon-torpedo",-403411893),null,new cljs.core.Keyword(null,"klingon-kinetic","klingon-kinetic",844180079),null,new cljs.core.Keyword(null,"romulan-blast","romulan-blast",-2029961488),null,new cljs.core.Keyword(null,"klingon-phaser","klingon-phaser",-1316039597),null], null), null).call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shot)) == null)))){
return new cljs.core.Keyword(null,"foe","foe",-1673450881);
} else {
return new cljs.core.Keyword(null,"friend","friend",-286879240);
}
});
spacewar.game_logic.shots.foe_weapon_proximity = (function spacewar$game_logic$shots$foe_weapon_proximity(type){
var pred__1661 = cljs.core._EQ_;
var expr__1662 = type;
if(cljs.core.truth_(pred__1661.call(null,new cljs.core.Keyword(null,"klingon-kinetic","klingon-kinetic",844180079),expr__1662))){
return spacewar.game_logic.config.klingon_kinetic_proximity;
} else {
if(cljs.core.truth_(pred__1661.call(null,new cljs.core.Keyword(null,"klingon-phaser","klingon-phaser",-1316039597),expr__1662))){
return spacewar.game_logic.config.klingon_phaser_proximity;
} else {
if(cljs.core.truth_(pred__1661.call(null,new cljs.core.Keyword(null,"klingon-torpedo","klingon-torpedo",-403411893),expr__1662))){
return spacewar.game_logic.config.klingon_torpedo_proximity;
} else {
if(cljs.core.truth_(pred__1661.call(null,new cljs.core.Keyword(null,"romulan-blast","romulan-blast",-2029961488),expr__1662))){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__1662)].join('')));
}
}
}
}
});
spacewar.game_logic.shots.romulan_blast_damage_by = (function spacewar$game_logic$shots$romulan_blast_damage_by(range){
var factor = ((1) - (range / spacewar.game_logic.config.romulan_blast_range));
return (factor * spacewar.game_logic.config.romulan_blast_damage);
});
spacewar.game_logic.shots.ship_hit_damage = (function spacewar$game_logic$shots$ship_hit_damage(shot){
var pred__1664 = cljs.core._EQ_;
var expr__1665 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shot);
if(cljs.core.truth_(pred__1664.call(null,new cljs.core.Keyword(null,"klingon-kinetic","klingon-kinetic",844180079),expr__1665))){
return spacewar.game_logic.config.klingon_kinetic_damage;
} else {
if(cljs.core.truth_(pred__1664.call(null,new cljs.core.Keyword(null,"klingon-phaser","klingon-phaser",-1316039597),expr__1665))){
return spacewar.game_logic.config.klingon_phaser_damage;
} else {
if(cljs.core.truth_(pred__1664.call(null,new cljs.core.Keyword(null,"klingon-torpedo","klingon-torpedo",-403411893),expr__1665))){
return spacewar.game_logic.config.klingon_torpedo_damage;
} else {
if(cljs.core.truth_(pred__1664.call(null,new cljs.core.Keyword(null,"romulan-blast","romulan-blast",-2029961488),expr__1665))){
return spacewar.game_logic.shots.romulan_blast_damage_by.call(null,new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(shot));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__1665)].join('')));
}
}
}
}
});
spacewar.game_logic.shots.klingon_blast_hits_ship_QMARK_ = (function spacewar$game_logic$shots$klingon_blast_hits_ship_QMARK_(shot,ship){
var map__1667 = shot;
var map__1667__$1 = cljs.core.__destructure_map.call(null,map__1667);
var bearing = cljs.core.get.call(null,map__1667__$1,new cljs.core.Keyword(null,"bearing","bearing",-1189702101));
var range = cljs.core.get.call(null,map__1667__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var angle_to_origin = (bearing + (180));
var radians_to_origin = spacewar.geometry.__GT_radians.call(null,angle_to_origin);
var origin = spacewar.vector.add.call(null,spacewar.util.pos.call(null,shot),spacewar.vector.from_angular.call(null,range,radians_to_origin));
var dist_origin_ship = spacewar.geometry.distance.call(null,origin,spacewar.util.pos.call(null,ship));
return (range > dist_origin_ship);
});
spacewar.game_logic.shots.hits_ship_QMARK_ = (function spacewar$game_logic$shots$hits_ship_QMARK_(shot,ship,dist,proximity){
var pred__1668 = cljs.core._EQ_;
var expr__1669 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shot);
if(cljs.core.truth_(pred__1668.call(null,new cljs.core.Keyword(null,"romulan-blast","romulan-blast",-2029961488),expr__1669))){
return spacewar.game_logic.shots.klingon_blast_hits_ship_QMARK_.call(null,shot,ship);
} else {
return (dist <= proximity);
}
});
spacewar.game_logic.shots.hit_miss_ship = (function spacewar$game_logic$shots$hit_miss_ship(ship,shot){
var dist = spacewar.geometry.distance.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ship)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shot),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shot)], null));
var proximity = spacewar.game_logic.shots.foe_weapon_proximity.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shot));
if(spacewar.game_logic.shots.hits_ship_QMARK_.call(null,shot,ship,dist,proximity)){
return new cljs.core.Keyword(null,"hit","hit",1909257382);
} else {
return new cljs.core.Keyword(null,"miss","miss",1465931270);
}
});
spacewar.game_logic.shots.calc_damage = (function spacewar$game_logic$shots$calc_damage(shields,damage){
var shield_threshold = (spacewar.game_logic.config.ship_shields / (2));
var damage_absorbed = (function (){var x__5087__auto__ = (0);
var y__5088__auto__ = (shields - shield_threshold);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var residual_damage = (function (){var x__5087__auto__ = (0);
var y__5088__auto__ = (damage - damage_absorbed);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var remaining_shields = (function (){var x__5087__auto__ = (0);
var y__5088__auto__ = (shields - damage);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var avg_shields = ((shields + remaining_shields) / (2));
return (((1) - (avg_shields / spacewar.game_logic.config.ship_shields)) * residual_damage);
});
spacewar.game_logic.shots.up_to_max_damage = (function spacewar$game_logic$shots$up_to_max_damage(system,damage){
var x__5090__auto__ = (100);
var y__5091__auto__ = (system + damage);
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
});
spacewar.game_logic.shots.incur_damage = (function spacewar$game_logic$shots$incur_damage(damage,system,systems){
if(cljs.core.contains_QMARK_.call(null,systems,system)){
return cljs.core.update.call(null,systems,system,spacewar.game_logic.shots.up_to_max_damage,damage);
} else {
return systems;
}
});
spacewar.game_logic.shots.damage_keys = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"life-support-damage","life-support-damage",1212244818),new cljs.core.Keyword(null,"hull-damage","hull-damage",-536688766),new cljs.core.Keyword(null,"sensor-damage","sensor-damage",-1401969345),new cljs.core.Keyword(null,"impulse-damage","impulse-damage",2036309966),new cljs.core.Keyword(null,"warp-damage","warp-damage",-1651122162),new cljs.core.Keyword(null,"weapons-damage","weapons-damage",1275474500)], null);
spacewar.game_logic.shots.select_damaged_system = (function spacewar$game_logic$shots$select_damaged_system(){
return cljs.core.nth.call(null,spacewar.game_logic.shots.damage_keys,quil.core.round.call(null,cljs.core.rand.call(null,(5))));
});
spacewar.game_logic.shots.update_ship_hits = (function spacewar$game_logic$shots$update_ship_hits(world){
var ship = new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(world);
var shot_groups = cljs.core.group_by.call(null,spacewar.game_logic.shots.friend_or_foe,new cljs.core.Keyword(null,"shots","shots",-1155689265).cljs$core$IFn$_invoke$arity$1(world));
var foe_shots = new cljs.core.Keyword(null,"foe","foe",-1673450881).cljs$core$IFn$_invoke$arity$1(shot_groups);
var friend_shots = new cljs.core.Keyword(null,"friend","friend",-286879240).cljs$core$IFn$_invoke$arity$1(shot_groups);
var hit_miss_groups = cljs.core.group_by.call(null,(function (p1__1671_SHARP_){
return spacewar.game_logic.shots.hit_miss_ship.call(null,ship,p1__1671_SHARP_);
}),foe_shots);
var hits = new cljs.core.Keyword(null,"hit","hit",1909257382).cljs$core$IFn$_invoke$arity$1(hit_miss_groups);
var misses = new cljs.core.Keyword(null,"miss","miss",1465931270).cljs$core$IFn$_invoke$arity$1(hit_miss_groups);
var old_explosions = new cljs.core.Keyword(null,"explosions","explosions",-1941460974).cljs$core$IFn$_invoke$arity$1(world);
var new_explosions = cljs.core.map.call(null,spacewar.game_logic.explosions.shot__GT_explosion,hits);
var potential_damage = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,spacewar.game_logic.shots.ship_hit_damage,hits));
var shields = new cljs.core.Keyword(null,"shields","shields",-295786721).cljs$core$IFn$_invoke$arity$1(ship);
var damage = spacewar.game_logic.shots.calc_damage.call(null,shields,potential_damage);
var system = spacewar.game_logic.shots.select_damaged_system.call(null);
var ship__$1 = spacewar.game_logic.shots.incur_damage.call(null,damage,system,ship);
var ship__$2 = cljs.core.assoc.call(null,ship__$1,new cljs.core.Keyword(null,"shields","shields",-295786721),(function (){var x__5087__auto__ = (0);
var y__5088__auto__ = (shields - potential_damage);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})());
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"shots","shots",-1155689265),cljs.core.concat.call(null,friend_shots,misses),new cljs.core.Keyword(null,"ship","ship",197863473),ship__$2,new cljs.core.Keyword(null,"explosions","explosions",-1941460974),cljs.core.concat.call(null,old_explosions,new_explosions));
});
spacewar.game_logic.shots.update_shots = (function spacewar$game_logic$shots$update_shots(ms,world){
return spacewar.game_logic.shots.update_ship_hits.call(null,spacewar.game_logic.shots.update_hits.call(null,new cljs.core.Keyword(null,"romulans","romulans",1249513588),spacewar.game_logic.shots.update_hits.call(null,new cljs.core.Keyword(null,"klingons","klingons",-1228954811),spacewar.game_logic.shots.update_shot_positions.call(null,ms,world))));
});

//# sourceMappingURL=shots.js.map
