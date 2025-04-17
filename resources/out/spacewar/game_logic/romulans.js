// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('spacewar.game_logic.romulans');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('spacewar.game_logic.config');
goog.require('spacewar.game_logic.explosions');
goog.require('spacewar.game_logic.shots');
goog.require('spacewar.ui.messages');
goog.require('spacewar.geometry');
goog.require('spacewar.vector');
goog.require('spacewar.util');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.romulans","x","spacewar.game-logic.romulans/x",-261634881),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.romulans","y","spacewar.game-logic.romulans/y",469940318),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.romulans","age","spacewar.game-logic.romulans/age",1329690246),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.romulans","state","spacewar.game-logic.romulans/state",-164524053),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"invisible","invisible",810504226),"null",new cljs.core.Keyword(null,"disappeared","disappeared",163128976),"null",new cljs.core.Keyword(null,"fading","fading",1798564850),"null",new cljs.core.Keyword(null,"firing","firing",-1202252172),"null",new cljs.core.Keyword(null,"visible","visible",-1024216805),"null",new cljs.core.Keyword(null,"appearing","appearing",1835294365),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"invisible","invisible",810504226),null,new cljs.core.Keyword(null,"disappeared","disappeared",163128976),null,new cljs.core.Keyword(null,"fading","fading",1798564850),null,new cljs.core.Keyword(null,"firing","firing",-1202252172),null,new cljs.core.Keyword(null,"visible","visible",-1024216805),null,new cljs.core.Keyword(null,"appearing","appearing",1835294365),null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.romulans","fire-weapon","spacewar.game-logic.romulans/fire-weapon",-542449696),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.romulans","romulan","spacewar.game-logic.romulans/romulan",1861270165),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"reg-un","reg-un",1796133994),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.game-logic.romulans","x","spacewar.game-logic.romulans/x",-261634881),new cljs.core.Keyword("spacewar.game-logic.romulans","y","spacewar.game-logic.romulans/y",469940318),new cljs.core.Keyword("spacewar.game-logic.romulans","age","spacewar.game-logic.romulans/age",1329690246),new cljs.core.Keyword("spacewar.game-logic.romulans","state","spacewar.game-logic.romulans/state",-164524053),new cljs.core.Keyword("spacewar.game-logic.romulans","fire-weapon","spacewar.game-logic.romulans/fire-weapon",-542449696)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__810){
return cljs.core.map_QMARK_.call(null,G__810);
})], null),(function (G__810){
return cljs.core.map_QMARK_.call(null,G__810);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.romulans","romulans","spacewar.game-logic.romulans/romulans",-843081646),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("spacewar.game-logic.romulans","romulan","spacewar.game-logic.romulans/romulan",1861270165)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("spacewar.game-logic.romulans","romulan","spacewar.game-logic.romulans/romulan",1861270165),new cljs.core.Keyword("spacewar.game-logic.romulans","romulan","spacewar.game-logic.romulans/romulan",1861270165),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("spacewar.game-logic.romulans","romulan","spacewar.game-logic.romulans/romulan",1861270165)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__811){
return cljs.core.coll_QMARK_.call(null,G__811);
})], null),null));
spacewar.game_logic.romulans.make_romulan = (function spacewar$game_logic$romulans$make_romulan(x,y){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"age","age",-604307804),(0),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"invisible","invisible",810504226),new cljs.core.Keyword(null,"fire-weapon","fire-weapon",1667135422),false], null);
});
spacewar.game_logic.romulans.update_romulans_age = (function spacewar$game_logic$romulans$update_romulans_age(ms,world){
var romulans = new cljs.core.Keyword(null,"romulans","romulans",1249513588).cljs$core$IFn$_invoke$arity$1(world);
var romulans__$1 = cljs.core.map.call(null,(function (p1__812_SHARP_){
return cljs.core.update.call(null,p1__812_SHARP_,new cljs.core.Keyword(null,"age","age",-604307804),cljs.core._PLUS_,ms);
}),romulans);
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"romulans","romulans",1249513588),romulans__$1);
});
spacewar.game_logic.romulans.romulan_state_transition = (function spacewar$game_logic$romulans$romulan_state_transition(ms,age,state){
var min_time = (function (){var pred__813 = cljs.core._EQ_;
var expr__814 = state;
if(cljs.core.truth_(pred__813.call(null,new cljs.core.Keyword(null,"invisible","invisible",810504226),expr__814))){
return spacewar.game_logic.config.romulan_invisible_time;
} else {
if(cljs.core.truth_(pred__813.call(null,new cljs.core.Keyword(null,"appearing","appearing",1835294365),expr__814))){
return spacewar.game_logic.config.romulan_appearing_time;
} else {
if(cljs.core.truth_(pred__813.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805),expr__814))){
return spacewar.game_logic.config.romulan_visible_time;
} else {
if(cljs.core.truth_(pred__813.call(null,new cljs.core.Keyword(null,"firing","firing",-1202252172),expr__814))){
return spacewar.game_logic.config.romulan_firing_time;
} else {
if(cljs.core.truth_(pred__813.call(null,new cljs.core.Keyword(null,"fading","fading",1798564850),expr__814))){
return spacewar.game_logic.config.romulan_fading_time;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__814)].join('')));
}
}
}
}
}
})();
var past_time_QMARK_ = (age > min_time);
var next_second_QMARK_ = (cljs.core.rem.call(null,age,(1000)) <= ms);
var fifty_fifty_QMARK_ = (0.5 < cljs.core.rand.call(null,(1)));
return ((past_time_QMARK_) && (((next_second_QMARK_) && (fifty_fifty_QMARK_))));
});
spacewar.game_logic.romulans.update_romulan_state = (function spacewar$game_logic$romulans$update_romulan_state(ms,romulan){
if(spacewar.game_logic.romulans.romulan_state_transition.call(null,ms,new cljs.core.Keyword(null,"age","age",-604307804).cljs$core$IFn$_invoke$arity$1(romulan),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(romulan))){
var next_state = (function (){var pred__816 = cljs.core._EQ_;
var expr__817 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(romulan);
if(cljs.core.truth_(pred__816.call(null,new cljs.core.Keyword(null,"invisible","invisible",810504226),expr__817))){
return new cljs.core.Keyword(null,"appearing","appearing",1835294365);
} else {
if(cljs.core.truth_(pred__816.call(null,new cljs.core.Keyword(null,"appearing","appearing",1835294365),expr__817))){
return new cljs.core.Keyword(null,"visible","visible",-1024216805);
} else {
if(cljs.core.truth_(pred__816.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805),expr__817))){
return new cljs.core.Keyword(null,"firing","firing",-1202252172);
} else {
if(cljs.core.truth_(pred__816.call(null,new cljs.core.Keyword(null,"firing","firing",-1202252172),expr__817))){
return new cljs.core.Keyword(null,"fading","fading",1798564850);
} else {
if(cljs.core.truth_(pred__816.call(null,new cljs.core.Keyword(null,"fading","fading",1798564850),expr__817))){
return new cljs.core.Keyword(null,"disappeared","disappeared",163128976);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__817)].join('')));
}
}
}
}
}
})();
if(cljs.core._EQ_.call(null,next_state,new cljs.core.Keyword(null,"appearing","appearing",1835294365))){
spacewar.ui.messages.send_message.call(null,new cljs.core.Keyword(null,"romulan-appearing","romulan-appearing",-350088193));
} else {
}

return cljs.core.assoc.call(null,romulan,new cljs.core.Keyword(null,"state","state",-1988618099),next_state,new cljs.core.Keyword(null,"age","age",-604307804),(0),new cljs.core.Keyword(null,"fire-weapon","fire-weapon",1667135422),cljs.core._EQ_.call(null,next_state,new cljs.core.Keyword(null,"fading","fading",1798564850)));
} else {
return romulan;
}
});
spacewar.game_logic.romulans.update_romulans_state = (function spacewar$game_logic$romulans$update_romulans_state(ms,world){
var romulans = new cljs.core.Keyword(null,"romulans","romulans",1249513588).cljs$core$IFn$_invoke$arity$1(world);
var romulans__$1 = cljs.core.map.call(null,(function (p1__819_SHARP_){
return spacewar.game_logic.romulans.update_romulan_state.call(null,ms,p1__819_SHARP_);
}),romulans);
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"romulans","romulans",1249513588),romulans__$1);
});
spacewar.game_logic.romulans.remove_disappeared_romulans = (function spacewar$game_logic$romulans$remove_disappeared_romulans(world){
var romulans = new cljs.core.Keyword(null,"romulans","romulans",1249513588).cljs$core$IFn$_invoke$arity$1(world);
var romulans__$1 = cljs.core.doall.call(null,cljs.core.remove.call(null,(function (p1__820_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"disappeared","disappeared",163128976),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(p1__820_SHARP_));
}),romulans));
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"romulans","romulans",1249513588),romulans__$1);
});
spacewar.game_logic.romulans.explode_romulan = (function spacewar$game_logic$romulans$explode_romulan(romulan){
return spacewar.game_logic.explosions.__GT_explosion.call(null,new cljs.core.Keyword(null,"romulan","romulan",-215334277),romulan);
});
spacewar.game_logic.romulans.destroy_hit_romulans = (function spacewar$game_logic$romulans$destroy_hit_romulans(p__821){
var map__822 = p__821;
var map__822__$1 = cljs.core.__destructure_map.call(null,map__822);
var world = map__822__$1;
var romulans = cljs.core.get.call(null,map__822__$1,new cljs.core.Keyword(null,"romulans","romulans",1249513588));
var explosions = cljs.core.get.call(null,map__822__$1,new cljs.core.Keyword(null,"explosions","explosions",-1941460974));
var romulans_killed = cljs.core.get.call(null,map__822__$1,new cljs.core.Keyword(null,"romulans-killed","romulans-killed",-1598579846));
var hit_romulans = cljs.core.filter.call(null,new cljs.core.Keyword(null,"hit","hit",1909257382),romulans);
var explosions__$1 = cljs.core.concat.call(null,explosions,cljs.core.map.call(null,spacewar.game_logic.romulans.explode_romulan,hit_romulans));
var romulans__$1 = cljs.core.remove.call(null,new cljs.core.Keyword(null,"hit","hit",1909257382),romulans);
var romulans_killed__$1 = (romulans_killed + cljs.core.count.call(null,hit_romulans));
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"romulans","romulans",1249513588),romulans__$1,new cljs.core.Keyword(null,"explosions","explosions",-1941460974),explosions__$1,new cljs.core.Keyword(null,"romulans-killed","romulans-killed",-1598579846),romulans_killed__$1);
});
spacewar.game_logic.romulans.romulan_shots = (function spacewar$game_logic$romulans$romulan_shots(ship,romulan){
if(cljs.core.truth_(new cljs.core.Keyword(null,"fire-weapon","fire-weapon",1667135422).cljs$core$IFn$_invoke$arity$1(romulan))){
var bearing = spacewar.geometry.angle_degrees.call(null,spacewar.util.pos.call(null,romulan),spacewar.util.pos.call(null,ship));
var shot = spacewar.game_logic.shots.__GT_shot.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(romulan),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(romulan),bearing,new cljs.core.Keyword(null,"romulan-blast","romulan-blast",-2029961488));
return shot;
} else {
return null;
}
});
spacewar.game_logic.romulans.fire_romulan_weapons = (function spacewar$game_logic$romulans$fire_romulan_weapons(world){
var map__825 = world;
var map__825__$1 = cljs.core.__destructure_map.call(null,map__825);
var shots = cljs.core.get.call(null,map__825__$1,new cljs.core.Keyword(null,"shots","shots",-1155689265));
var romulans = cljs.core.get.call(null,map__825__$1,new cljs.core.Keyword(null,"romulans","romulans",1249513588));
var ship = cljs.core.get.call(null,map__825__$1,new cljs.core.Keyword(null,"ship","ship",197863473));
var new_shots = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__823_SHARP_){
return spacewar.game_logic.romulans.romulan_shots.call(null,ship,p1__823_SHARP_);
}),romulans));
var romulans__$1 = cljs.core.map.call(null,(function (p1__824_SHARP_){
return cljs.core.assoc.call(null,p1__824_SHARP_,new cljs.core.Keyword(null,"fire-weapon","fire-weapon",1667135422),false);
}),romulans);
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"romulans","romulans",1249513588),romulans__$1,new cljs.core.Keyword(null,"shots","shots",-1155689265),cljs.core.concat.call(null,shots,new_shots));
});
spacewar.game_logic.romulans.update_romulans = (function spacewar$game_logic$romulans$update_romulans(ms,world){
return spacewar.game_logic.romulans.destroy_hit_romulans.call(null,spacewar.game_logic.romulans.remove_disappeared_romulans.call(null,spacewar.game_logic.romulans.fire_romulan_weapons.call(null,spacewar.game_logic.romulans.update_romulans_state.call(null,ms,spacewar.game_logic.romulans.update_romulans_age.call(null,ms,world)))));
});
spacewar.game_logic.romulans.add_romulan = (function spacewar$game_logic$romulans$add_romulan(p__826){
var map__827 = p__826;
var map__827__$1 = cljs.core.__destructure_map.call(null,map__827);
var world = map__827__$1;
var ship = cljs.core.get.call(null,map__827__$1,new cljs.core.Keyword(null,"ship","ship",197863473));
var romulans = cljs.core.get.call(null,map__827__$1,new cljs.core.Keyword(null,"romulans","romulans",1249513588));
if((new cljs.core.Keyword(null,"warp","warp",-931589598).cljs$core$IFn$_invoke$arity$1(ship) === (0))){
var map__828 = ship;
var map__828__$1 = cljs.core.__destructure_map.call(null,map__828);
var x = cljs.core.get.call(null,map__828__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__828__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var dist = (spacewar.game_logic.config.romulan_appear_distance - (spacewar.game_logic.config.romulan_appear_distance * cljs.core.rand.call(null,0.5)));
var angle = cljs.core.rand.call(null,(360));
var pos = spacewar.vector.from_angular.call(null,dist,spacewar.geometry.__GT_radians.call(null,angle));
var vec__829 = spacewar.vector.add.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),pos);
var rx = cljs.core.nth.call(null,vec__829,(0),null);
var ry = cljs.core.nth.call(null,vec__829,(1),null);
var romulans__$1 = cljs.core.conj.call(null,romulans,spacewar.game_logic.romulans.make_romulan.call(null,rx,ry));
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"romulans","romulans",1249513588),romulans__$1);
} else {
return world;
}
});
spacewar.game_logic.romulans.add_occasional_romulan = (function spacewar$game_logic$romulans$add_occasional_romulan(world){
if((cljs.core.rand.call(null,(1)) < spacewar.game_logic.config.romulan_appear_odds_per_second)){
return spacewar.game_logic.romulans.add_romulan.call(null,world);
} else {
return world;
}
});
spacewar.game_logic.romulans.update_romulans_per_second = (function spacewar$game_logic$romulans$update_romulans_per_second(world){
return spacewar.game_logic.romulans.add_occasional_romulan.call(null,world);
});

//# sourceMappingURL=romulans.js.map
