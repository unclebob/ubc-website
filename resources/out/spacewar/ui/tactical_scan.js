// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('spacewar.ui.tactical_scan');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('spacewar.util');
goog.require('spacewar.ui.config');
goog.require('spacewar.ui.icons');
goog.require('spacewar.game_logic.config');
goog.require('spacewar.ui.protocols');
goog.require('spacewar.geometry');
goog.require('spacewar.vector');
spacewar.ui.tactical_scan.background_color = (function spacewar$ui$tactical_scan$background_color(p__632){
var map__633 = p__632;
var map__633__$1 = cljs.core.__destructure_map.call(null,map__633);
var update_time = cljs.core.get.call(null,map__633__$1,new cljs.core.Keyword(null,"update-time","update-time",-1745455895));
var ship = cljs.core.get.call(null,map__633__$1,new cljs.core.Keyword(null,"ship","ship",197863473));
var game_over_timer = cljs.core.get.call(null,map__633__$1,new cljs.core.Keyword(null,"game-over-timer","game-over-timer",321758852));
var map__634 = ship;
var map__634__$1 = cljs.core.__destructure_map.call(null,map__634);
var shields = cljs.core.get.call(null,map__634__$1,new cljs.core.Keyword(null,"shields","shields",-295786721));
var antimatter = cljs.core.get.call(null,map__634__$1,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000));
var life_support_damage = cljs.core.get.call(null,map__634__$1,new cljs.core.Keyword(null,"life-support-damage","life-support-damage",1212244818));
var hull_damage = cljs.core.get.call(null,map__634__$1,new cljs.core.Keyword(null,"hull-damage","hull-damage",-536688766));
var warp_damage = cljs.core.get.call(null,map__634__$1,new cljs.core.Keyword(null,"warp-damage","warp-damage",-1651122162));
var impulse_damage = cljs.core.get.call(null,map__634__$1,new cljs.core.Keyword(null,"impulse-damage","impulse-damage",2036309966));
var sensor_damage = cljs.core.get.call(null,map__634__$1,new cljs.core.Keyword(null,"sensor-damage","sensor-damage",-1401969345));
var weapons_damage = cljs.core.get.call(null,map__634__$1,new cljs.core.Keyword(null,"weapons-damage","weapons-damage",1275474500));
var max_damage = (function (){var x__5087__auto__ = (function (){var x__5087__auto__ = (function (){var x__5087__auto__ = (function (){var x__5087__auto__ = (function (){var x__5087__auto__ = life_support_damage;
var y__5088__auto__ = hull_damage;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var y__5088__auto__ = warp_damage;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var y__5088__auto__ = impulse_damage;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var y__5088__auto__ = sensor_damage;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var y__5088__auto__ = weapons_damage;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
if((game_over_timer > (0))){
return spacewar.ui.config.black;
} else {
if((cljs.core.mod.call(null,update_time,(1000)) < (500))){
return spacewar.ui.config.black;
} else {
if((max_damage > (0))){
return spacewar.ui.config.dark_red;
} else {
if(((antimatter / spacewar.game_logic.config.ship_antimatter) < 0.1)){
return spacewar.ui.config.dark_red;
} else {
if(((shields / spacewar.game_logic.config.ship_shields) < 0.6)){
return spacewar.ui.config.dark_yellow;
} else {
return spacewar.ui.config.black;

}
}
}
}
}
});
spacewar.ui.tactical_scan.draw_background = (function spacewar$ui$tactical_scan$draw_background(state){
var map__635 = state;
var map__635__$1 = cljs.core.__destructure_map.call(null,map__635);
var w = cljs.core.get.call(null,map__635__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__635__$1,new cljs.core.Keyword(null,"h","h",1109658740));
cljs.core.apply.call(null,quil.core.fill,spacewar.ui.tactical_scan.background_color.call(null,new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(state)));

quil.core.rect_mode.call(null,new cljs.core.Keyword(null,"corner","corner",1296717125));

return quil.core.rect.call(null,(0),(0),w,h);
});
spacewar.ui.tactical_scan.in_range = (function spacewar$ui$tactical_scan$in_range(x,y,ship){
return (spacewar.geometry.distance.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ship)], null)) < (spacewar.game_logic.config.tactical_range / (2)));
});
spacewar.ui.tactical_scan.click__GT_pos = (function spacewar$ui$tactical_scan$click__GT_pos(tactical_scan,click){
var map__636 = tactical_scan;
var map__636__$1 = cljs.core.__destructure_map.call(null,map__636);
var x = cljs.core.get.call(null,map__636__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__636__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__636__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__636__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var world = cljs.core.get.call(null,map__636__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var ship = new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(world);
var center = spacewar.vector.add.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(w / (2)),(h / (2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var scale = (spacewar.game_logic.config.tactical_range / w);
var click_delta = spacewar.vector.subtract.call(null,click,center);
var tactical_click_delta = spacewar.vector.scale.call(null,scale,click_delta);
return spacewar.vector.add.call(null,tactical_click_delta,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ship)], null));
});
spacewar.ui.tactical_scan.click__GT_bearing = (function spacewar$ui$tactical_scan$click__GT_bearing(tactical_scan,click){
var tactical_loc = spacewar.ui.tactical_scan.click__GT_pos.call(null,tactical_scan,click);
var ship = new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(tactical_scan));
var ship_loc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ship)], null);
var bearing = spacewar.geometry.angle_degrees.call(null,ship_loc,tactical_loc);
return bearing;
});
spacewar.ui.tactical_scan.present_objects = (function spacewar$ui$tactical_scan$present_objects(state,objects){
if(cljs.core.empty_QMARK_.call(null,objects)){
return cljs.core.PersistentVector.EMPTY;
} else {
var map__640 = state;
var map__640__$1 = cljs.core.__destructure_map.call(null,map__640);
var w = cljs.core.get.call(null,map__640__$1,new cljs.core.Keyword(null,"w","w",354169001));
var world = cljs.core.get.call(null,map__640__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var ship = new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(world);
var scale = (w / spacewar.game_logic.config.tactical_range);
var presentables = cljs.core.map.call(null,(function (p1__639_SHARP_){
return cljs.core.assoc.call(null,p1__639_SHARP_,new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__639_SHARP_) * scale),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1__639_SHARP_) * scale));
}),cljs.core.map.call(null,(function (p1__638_SHARP_){
return cljs.core.assoc.call(null,p1__638_SHARP_,new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__638_SHARP_) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship)),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1__638_SHARP_) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ship)));
}),cljs.core.filter.call(null,(function (p1__637_SHARP_){
return spacewar.ui.tactical_scan.in_range.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__637_SHARP_),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1__637_SHARP_),ship);
}),objects)));
return presentables;
}
});
spacewar.ui.tactical_scan.draw_objects_in = (function spacewar$ui$tactical_scan$draw_objects_in(state,objects,draw){
var map__641 = state;
var map__641__$1 = cljs.core.__destructure_map.call(null,map__641);
var w = cljs.core.get.call(null,map__641__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__641__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var presentable_objects = spacewar.ui.tactical_scan.present_objects.call(null,state,objects);
var seq__642 = cljs.core.seq.call(null,presentable_objects);
var chunk__643 = null;
var count__644 = (0);
var i__645 = (0);
while(true){
if((i__645 < count__644)){
var map__648 = cljs.core._nth.call(null,chunk__643,i__645);
var map__648__$1 = cljs.core.__destructure_map.call(null,map__648);
var object = map__648__$1;
var x = cljs.core.get.call(null,map__648__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__648__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var tr__794__auto___650 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (w / (2))),(y + (h / (2)))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__794__auto___650);

draw.call(null,object);
}finally {quil.core.pop_matrix.call(null);
}

var G__651 = seq__642;
var G__652 = chunk__643;
var G__653 = count__644;
var G__654 = (i__645 + (1));
seq__642 = G__651;
chunk__643 = G__652;
count__644 = G__653;
i__645 = G__654;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__642);
if(temp__5804__auto__){
var seq__642__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__642__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__642__$1);
var G__655 = cljs.core.chunk_rest.call(null,seq__642__$1);
var G__656 = c__5525__auto__;
var G__657 = cljs.core.count.call(null,c__5525__auto__);
var G__658 = (0);
seq__642 = G__655;
chunk__643 = G__656;
count__644 = G__657;
i__645 = G__658;
continue;
} else {
var map__649 = cljs.core.first.call(null,seq__642__$1);
var map__649__$1 = cljs.core.__destructure_map.call(null,map__649);
var object = map__649__$1;
var x = cljs.core.get.call(null,map__649__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__649__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var tr__794__auto___659 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (w / (2))),(y + (h / (2)))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__794__auto___659);

draw.call(null,object);
}finally {quil.core.pop_matrix.call(null);
}

var G__660 = cljs.core.next.call(null,seq__642__$1);
var G__661 = null;
var G__662 = (0);
var G__663 = (0);
seq__642 = G__660;
chunk__643 = G__661;
count__644 = G__662;
i__645 = G__663;
continue;
}
} else {
return null;
}
}
break;
}
});
spacewar.ui.tactical_scan.draw_objects = (function spacewar$ui$tactical_scan$draw_objects(state,key,draw){
return spacewar.ui.tactical_scan.draw_objects_in.call(null,state,key.call(null,new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(state)),draw);
});
spacewar.ui.tactical_scan.draw_bases = (function spacewar$ui$tactical_scan$draw_bases(state){
return spacewar.ui.tactical_scan.draw_objects.call(null,state,new cljs.core.Keyword(null,"bases","bases",-1036892420),spacewar.ui.icons.draw_base_icon);
});
spacewar.ui.tactical_scan.draw_transports = (function spacewar$ui$tactical_scan$draw_transports(state){
return spacewar.ui.tactical_scan.draw_objects.call(null,state,new cljs.core.Keyword(null,"transports","transports",1151421269),spacewar.ui.icons.draw_transport_icon);
});
spacewar.ui.tactical_scan.draw_stars = (function spacewar$ui$tactical_scan$draw_stars(state){
quil.core.no_stroke.call(null);

quil.core.ellipse_mode.call(null,new cljs.core.Keyword(null,"center","center",-748944368));

return spacewar.ui.tactical_scan.draw_objects.call(null,state,new cljs.core.Keyword(null,"stars","stars",-556837771),spacewar.ui.icons.draw_star_icon);
});
spacewar.ui.tactical_scan.draw_klingon_and_shield = (function spacewar$ui$tactical_scan$draw_klingon_and_shield(klingon){
spacewar.ui.icons.draw_klingon_shields.call(null,new cljs.core.Keyword(null,"shields","shields",-295786721).cljs$core$IFn$_invoke$arity$1(klingon));

spacewar.ui.icons.draw_klingon_icon.call(null,klingon);

return spacewar.ui.icons.draw_klingon_counts.call(null,klingon);
});
spacewar.ui.tactical_scan.draw_klingons = (function spacewar$ui$tactical_scan$draw_klingons(state){
return spacewar.ui.tactical_scan.draw_objects.call(null,state,new cljs.core.Keyword(null,"klingons","klingons",-1228954811),spacewar.ui.tactical_scan.draw_klingon_and_shield);
});
spacewar.ui.tactical_scan.draw_romulans = (function spacewar$ui$tactical_scan$draw_romulans(state){
return spacewar.ui.tactical_scan.draw_objects.call(null,state,new cljs.core.Keyword(null,"romulans","romulans",1249513588),spacewar.ui.icons.draw_romulan);
});
spacewar.ui.tactical_scan.target_arc = (function spacewar$ui$tactical_scan$target_arc(ship){
var map__664 = ship;
var map__664__$1 = cljs.core.__destructure_map.call(null,map__664);
var selected_weapon = cljs.core.get.call(null,map__664__$1,new cljs.core.Keyword(null,"selected-weapon","selected-weapon",1106774428));
var target_bearing = cljs.core.get.call(null,map__664__$1,new cljs.core.Keyword(null,"target-bearing","target-bearing",-1661786546));
var weapon_spread_setting = cljs.core.get.call(null,map__664__$1,new cljs.core.Keyword(null,"weapon-spread-setting","weapon-spread-setting",286464677));
var range = (function (){var pred__665 = cljs.core._EQ_;
var expr__666 = selected_weapon;
if(cljs.core.truth_(pred__665.call(null,new cljs.core.Keyword(null,"phaser","phaser",-1448421666),expr__666))){
return spacewar.ui.config.phaser_target;
} else {
if(cljs.core.truth_(pred__665.call(null,new cljs.core.Keyword(null,"torpedo","torpedo",275681140),expr__666))){
return spacewar.ui.config.torpedo_target;
} else {
if(cljs.core.truth_(pred__665.call(null,new cljs.core.Keyword(null,"kinetic","kinetic",-451191810),expr__666))){
return spacewar.ui.config.kinetic_target;
} else {
return (0);
}
}
}
})();
var half_spread = (function (){var x__5087__auto__ = (3);
var y__5088__auto__ = (weapon_spread_setting / (2));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [range,(target_bearing - half_spread),(target_bearing + half_spread)], null);
});
spacewar.ui.tactical_scan.draw_ship = (function spacewar$ui$tactical_scan$draw_ship(state){
var map__668 = state;
var map__668__$1 = cljs.core.__destructure_map.call(null,map__668);
var w = cljs.core.get.call(null,map__668__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__668__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var ship = new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(state));
var heading = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(ship);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})();
var velocity = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(ship);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}
})();
var vec__669 = spacewar.vector.scale.call(null,spacewar.ui.config.velocity_vector_scale,velocity);
var vx = cljs.core.nth.call(null,vec__669,(0),null);
var vy = cljs.core.nth.call(null,vec__669,(1),null);
var radians = quil.core.radians.call(null,heading);
var vec__672 = spacewar.ui.tactical_scan.target_arc.call(null,ship);
var tgt_radius = cljs.core.nth.call(null,vec__672,(0),null);
var start = cljs.core.nth.call(null,vec__672,(1),null);
var stop = cljs.core.nth.call(null,vec__672,(2),null);
var start__$1 = quil.core.radians.call(null,start);
var stop__$1 = quil.core.radians.call(null,stop);
var draw_arc = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"selected-weapon","selected-weapon",1106774428).cljs$core$IFn$_invoke$arity$1(ship),new cljs.core.Keyword(null,"none","none",1333468478));
var tr__794__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(w / (2)),(h / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__794__auto__);

if(draw_arc){
quil.core.no_stroke.call(null);

quil.core.fill.call(null,(255),(255),(255),(50));

quil.core.ellipse_mode.call(null,new cljs.core.Keyword(null,"center","center",-748944368));

quil.core.arc.call(null,(0),(0),tgt_radius,tgt_radius,start__$1,stop__$1);
} else {
}

return spacewar.ui.icons.draw_ship_icon.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vx,vy], null),radians,ship);
}finally {quil.core.pop_matrix.call(null);
}});
spacewar.ui.tactical_scan.draw_torpedo_segment = (function spacewar$ui$tactical_scan$draw_torpedo_segment(){
var angle = cljs.core.rand.call(null,(360));
var color = cljs.core.repeatedly.call(null,(3),(function (){
return ((128) + cljs.core.rand.call(null,(127)));
}));
var length = ((5) + cljs.core.rand.call(null,(5)));
var radians = spacewar.geometry.__GT_radians.call(null,angle);
var vec__675 = spacewar.vector.from_angular.call(null,length,radians);
var tx = cljs.core.nth.call(null,vec__675,(0),null);
var ty = cljs.core.nth.call(null,vec__675,(1),null);
cljs.core.apply.call(null,quil.core.stroke,color);

return quil.core.line.call(null,(0),(0),tx,ty);
});
spacewar.ui.tactical_scan.draw_torpedo = (function spacewar$ui$tactical_scan$draw_torpedo(color,shot){
quil.core.stroke_weight.call(null,(1));

var seq__678_682 = cljs.core.seq.call(null,cljs.core.range.call(null,(3)));
var chunk__679_683 = null;
var count__680_684 = (0);
var i__681_685 = (0);
while(true){
if((i__681_685 < count__680_684)){
var __686 = cljs.core._nth.call(null,chunk__679_683,i__681_685);
spacewar.ui.tactical_scan.draw_torpedo_segment.call(null);


var G__687 = seq__678_682;
var G__688 = chunk__679_683;
var G__689 = count__680_684;
var G__690 = (i__681_685 + (1));
seq__678_682 = G__687;
chunk__679_683 = G__688;
count__680_684 = G__689;
i__681_685 = G__690;
continue;
} else {
var temp__5804__auto___691 = cljs.core.seq.call(null,seq__678_682);
if(temp__5804__auto___691){
var seq__678_692__$1 = temp__5804__auto___691;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__678_692__$1)){
var c__5525__auto___693 = cljs.core.chunk_first.call(null,seq__678_692__$1);
var G__694 = cljs.core.chunk_rest.call(null,seq__678_692__$1);
var G__695 = c__5525__auto___693;
var G__696 = cljs.core.count.call(null,c__5525__auto___693);
var G__697 = (0);
seq__678_682 = G__694;
chunk__679_683 = G__695;
count__680_684 = G__696;
i__681_685 = G__697;
continue;
} else {
var __698 = cljs.core.first.call(null,seq__678_692__$1);
spacewar.ui.tactical_scan.draw_torpedo_segment.call(null);


var G__699 = cljs.core.next.call(null,seq__678_692__$1);
var G__700 = null;
var G__701 = (0);
var G__702 = (0);
seq__678_682 = G__699;
chunk__679_683 = G__700;
count__680_684 = G__701;
i__681_685 = G__702;
continue;
}
} else {
}
}
break;
}

cljs.core.apply.call(null,quil.core.fill,(cljs.core.truth_(new cljs.core.Keyword(null,"corbomite","corbomite",1612720764).cljs$core$IFn$_invoke$arity$1(shot))?spacewar.ui.config.red:color));

quil.core.ellipse_mode.call(null,new cljs.core.Keyword(null,"center","center",-748944368));

return quil.core.ellipse.call(null,(0),(0),(4),(4));
});
spacewar.ui.tactical_scan.draw_torpedo_shots = (function spacewar$ui$tactical_scan$draw_torpedo_shots(p__704){
var map__705 = p__704;
var map__705__$1 = cljs.core.__destructure_map.call(null,map__705);
var state = map__705__$1;
var world = cljs.core.get.call(null,map__705__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var shots = new cljs.core.Keyword(null,"shots","shots",-1155689265).cljs$core$IFn$_invoke$arity$1(world);
return spacewar.ui.tactical_scan.draw_objects_in.call(null,state,cljs.core.filter.call(null,(function (p1__703_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"torpedo","torpedo",275681140),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__703_SHARP_));
}),shots),cljs.core.partial.call(null,spacewar.ui.tactical_scan.draw_torpedo,spacewar.ui.config.white));
});
spacewar.ui.tactical_scan.draw_klingon_torpedo_shots = (function spacewar$ui$tactical_scan$draw_klingon_torpedo_shots(state){
return spacewar.ui.tactical_scan.draw_objects_in.call(null,state,cljs.core.filter.call(null,(function (p1__706_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"klingon-torpedo","klingon-torpedo",-403411893),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__706_SHARP_));
}),new cljs.core.Keyword(null,"shots","shots",-1155689265).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(state))),cljs.core.partial.call(null,spacewar.ui.tactical_scan.draw_torpedo,spacewar.ui.config.green));
});
spacewar.ui.tactical_scan.draw_romulan_blast_shots = (function spacewar$ui$tactical_scan$draw_romulan_blast_shots(state){
return spacewar.ui.tactical_scan.draw_objects_in.call(null,state,cljs.core.filter.call(null,(function (p1__707_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"romulan-blast","romulan-blast",-2029961488),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__707_SHARP_));
}),new cljs.core.Keyword(null,"shots","shots",-1155689265).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(state))),cljs.core.partial.call(null,spacewar.ui.icons.draw_romulan_shot,(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(state) / spacewar.game_logic.config.tactical_range)));
});
spacewar.ui.tactical_scan.draw_kinetic_shot = (function spacewar$ui$tactical_scan$draw_kinetic_shot(color,shot){
var corbomite = new cljs.core.Keyword(null,"corbomite","corbomite",1612720764).cljs$core$IFn$_invoke$arity$1(shot);
var color__$1 = (cljs.core.truth_(corbomite)?spacewar.ui.config.red:color);
var radius = (cljs.core.truth_(corbomite)?(5):(3));
quil.core.ellipse_mode.call(null,new cljs.core.Keyword(null,"center","center",-748944368));

quil.core.no_stroke.call(null);

cljs.core.apply.call(null,quil.core.fill,color__$1);

return quil.core.ellipse.call(null,(0),(0),radius,radius);
});
spacewar.ui.tactical_scan.draw_kinetic_shots = (function spacewar$ui$tactical_scan$draw_kinetic_shots(state){
return spacewar.ui.tactical_scan.draw_objects_in.call(null,state,cljs.core.filter.call(null,(function (p1__708_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"kinetic","kinetic",-451191810),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__708_SHARP_));
}),new cljs.core.Keyword(null,"shots","shots",-1155689265).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(state))),cljs.core.partial.call(null,spacewar.ui.tactical_scan.draw_kinetic_shot,spacewar.ui.config.kinetic_color));
});
spacewar.ui.tactical_scan.draw_klingon_kinetic_shots = (function spacewar$ui$tactical_scan$draw_klingon_kinetic_shots(state){
return spacewar.ui.tactical_scan.draw_objects_in.call(null,state,cljs.core.filter.call(null,(function (p1__709_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"klingon-kinetic","klingon-kinetic",844180079),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__709_SHARP_));
}),new cljs.core.Keyword(null,"shots","shots",-1155689265).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(state))),cljs.core.partial.call(null,spacewar.ui.tactical_scan.draw_kinetic_shot,spacewar.ui.config.klingon_kinetic_color));
});
spacewar.ui.tactical_scan.phaser_intensity = (function spacewar$ui$tactical_scan$phaser_intensity(range){
var intensity = ((255) * ((1) - (range / spacewar.game_logic.config.phaser_range)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [intensity,intensity,intensity], null);
});
spacewar.ui.tactical_scan.phaser_color = (function spacewar$ui$tactical_scan$phaser_color(shot){
return spacewar.ui.tactical_scan.phaser_intensity.call(null,new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(shot));
});
spacewar.ui.tactical_scan.klingon_phaser_color = (function spacewar$ui$tactical_scan$klingon_phaser_color(_){
return spacewar.ui.config.green;
});
spacewar.ui.tactical_scan.draw_phaser_shot = (function spacewar$ui$tactical_scan$draw_phaser_shot(color_function,shot){
var map__710 = shot;
var map__710__$1 = cljs.core.__destructure_map.call(null,map__710);
var bearing = cljs.core.get.call(null,map__710__$1,new cljs.core.Keyword(null,"bearing","bearing",-1189702101));
var radians = spacewar.geometry.__GT_radians.call(null,bearing);
var vec__711 = spacewar.vector.from_angular.call(null,spacewar.ui.config.phaser_length,radians);
var sx = cljs.core.nth.call(null,vec__711,(0),null);
var sy = cljs.core.nth.call(null,vec__711,(1),null);
var beam_color = (cljs.core.truth_(new cljs.core.Keyword(null,"corbomite","corbomite",1612720764).cljs$core$IFn$_invoke$arity$1(shot))?spacewar.ui.config.red:color_function.call(null,shot));
cljs.core.apply.call(null,quil.core.stroke,beam_color);

quil.core.stroke_weight.call(null,(6));

return quil.core.line.call(null,(0),(0),sx,sy);
});
spacewar.ui.tactical_scan.draw_phaser_shots = (function spacewar$ui$tactical_scan$draw_phaser_shots(state){
return spacewar.ui.tactical_scan.draw_objects_in.call(null,state,cljs.core.filter.call(null,(function (p1__714_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"phaser","phaser",-1448421666),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__714_SHARP_));
}),new cljs.core.Keyword(null,"shots","shots",-1155689265).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(state))),cljs.core.partial.call(null,spacewar.ui.tactical_scan.draw_phaser_shot,spacewar.ui.tactical_scan.phaser_color));
});
spacewar.ui.tactical_scan.draw_klingon_phaser_shots = (function spacewar$ui$tactical_scan$draw_klingon_phaser_shots(state){
return spacewar.ui.tactical_scan.draw_objects_in.call(null,state,cljs.core.filter.call(null,(function (p1__715_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"klingon-phaser","klingon-phaser",-1316039597),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__715_SHARP_));
}),new cljs.core.Keyword(null,"shots","shots",-1155689265).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(state))),cljs.core.partial.call(null,spacewar.ui.tactical_scan.draw_phaser_shot,spacewar.ui.tactical_scan.klingon_phaser_color));
});
spacewar.ui.tactical_scan.explosion_radius = (function spacewar$ui$tactical_scan$explosion_radius(age,profile){
var profile__$1 = profile;
var radius = (0);
var last_time = (0);
while(true){
var map__717 = cljs.core.first.call(null,profile__$1);
var map__717__$1 = cljs.core.__destructure_map.call(null,map__717);
var velocity = cljs.core.get.call(null,map__717__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
var until = cljs.core.get.call(null,map__717__$1,new cljs.core.Keyword(null,"until","until",-1189166390));
if(cljs.core.empty_QMARK_.call(null,profile__$1)){
return null;
} else {
if((age > until)){
var G__718 = cljs.core.rest.call(null,profile__$1);
var G__719 = (radius + ((until - last_time) * velocity));
var G__720 = until;
profile__$1 = G__718;
radius = G__719;
last_time = G__720;
continue;
} else {
return (radius + (velocity * (age - last_time)));

}
}
break;
}
});
spacewar.ui.tactical_scan.age_color = (function spacewar$ui$tactical_scan$age_color(age,profile){
var profile__$1 = profile;
var last_age = (0);
var last_color = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);
while(true){
if(cljs.core.empty_QMARK_.call(null,profile__$1)){
return last_color;
} else {
if((age <= new cljs.core.Keyword(null,"until","until",-1189166390).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,profile__$1)))){
var profile_entry = cljs.core.first.call(null,profile__$1);
var map__726 = profile_entry;
var map__726__$1 = cljs.core.__destructure_map.call(null,map__726);
var until = cljs.core.get.call(null,map__726__$1,new cljs.core.Keyword(null,"until","until",-1189166390));
var colors = cljs.core.get.call(null,map__726__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
var vec__727 = colors;
var c1 = cljs.core.nth.call(null,vec__727,(0),null);
var c2 = cljs.core.nth.call(null,vec__727,(1),null);
var diff = spacewar.util.color_diff.call(null,c2,c1);
var span = (until - last_age);
var increment = spacewar.util.color_scale.call(null,diff,((age - last_age) / span));
return spacewar.util.color_add.call(null,increment,c1);
} else {
var profile_entry = cljs.core.first.call(null,profile__$1);
var map__730 = profile_entry;
var map__730__$1 = cljs.core.__destructure_map.call(null,map__730);
var until = cljs.core.get.call(null,map__730__$1,new cljs.core.Keyword(null,"until","until",-1189166390));
var colors = cljs.core.get.call(null,map__730__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
var G__731 = cljs.core.rest.call(null,profile__$1);
var G__732 = until;
var G__733 = cljs.core.last.call(null,colors);
profile__$1 = G__731;
last_age = G__732;
last_color = G__733;
continue;
}
}
break;
}
});
spacewar.ui.tactical_scan.draw_fragment = (function spacewar$ui$tactical_scan$draw_fragment(fragment,age,fragment_color){
var map__734 = fragment;
var map__734__$1 = cljs.core.__destructure_map.call(null,map__734);
var velocity = cljs.core.get.call(null,map__734__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
var direction = cljs.core.get.call(null,map__734__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var radians = spacewar.geometry.__GT_radians.call(null,direction);
var velocity_vector = spacewar.vector.from_angular.call(null,velocity,radians);
var vec__735 = spacewar.vector.scale.call(null,age,velocity_vector);
var hx = cljs.core.nth.call(null,vec__735,(0),null);
var hy = cljs.core.nth.call(null,vec__735,(1),null);
var vec__738 = spacewar.vector.scale.call(null,(age * 0.9),velocity_vector);
var tx = cljs.core.nth.call(null,vec__738,(0),null);
var ty = cljs.core.nth.call(null,vec__738,(1),null);
quil.core.stroke_weight.call(null,(1));

cljs.core.apply.call(null,quil.core.stroke,fragment_color);

return quil.core.line.call(null,hx,hy,tx,ty);
});
spacewar.ui.tactical_scan.draw_explosion = (function spacewar$ui$tactical_scan$draw_explosion(state,explosion){
var map__741 = explosion;
var map__741__$1 = cljs.core.__destructure_map.call(null,map__741);
var age = cljs.core.get.call(null,map__741__$1,new cljs.core.Keyword(null,"age","age",-604307804));
var type = cljs.core.get.call(null,map__741__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var map__742 = type.call(null,spacewar.ui.config.explosion_profiles);
var map__742__$1 = cljs.core.__destructure_map.call(null,map__742);
var explosion_profile = cljs.core.get.call(null,map__742__$1,new cljs.core.Keyword(null,"explosion-profile","explosion-profile",-1718762349));
var explosion_color_profile = cljs.core.get.call(null,map__742__$1,new cljs.core.Keyword(null,"explosion-color-profile","explosion-color-profile",1444136050));
var fragment_color_profile = cljs.core.get.call(null,map__742__$1,new cljs.core.Keyword(null,"fragment-color-profile","fragment-color-profile",-1969761950));
var fragments = spacewar.ui.tactical_scan.present_objects.call(null,state,new cljs.core.Keyword(null,"fragments","fragments",1456109445).cljs$core$IFn$_invoke$arity$1(explosion));
var radius = spacewar.ui.tactical_scan.explosion_radius.call(null,age,explosion_profile);
var explosion_color = spacewar.ui.tactical_scan.age_color.call(null,age,explosion_color_profile);
var fragment_color = spacewar.ui.tactical_scan.age_color.call(null,age,fragment_color_profile);
var ex = (cljs.core.rand.call(null,(6)) - (3));
var ey = (cljs.core.rand.call(null,(6)) - (3));
cljs.core.apply.call(null,quil.core.fill,explosion_color);

quil.core.ellipse_mode.call(null,new cljs.core.Keyword(null,"center","center",-748944368));

quil.core.no_stroke.call(null);

quil.core.ellipse.call(null,ex,ey,radius,radius);

var seq__743 = cljs.core.seq.call(null,fragments);
var chunk__744 = null;
var count__745 = (0);
var i__746 = (0);
while(true){
if((i__746 < count__745)){
var fragment = cljs.core._nth.call(null,chunk__744,i__746);
spacewar.ui.tactical_scan.draw_fragment.call(null,fragment,age,fragment_color);


var G__747 = seq__743;
var G__748 = chunk__744;
var G__749 = count__745;
var G__750 = (i__746 + (1));
seq__743 = G__747;
chunk__744 = G__748;
count__745 = G__749;
i__746 = G__750;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__743);
if(temp__5804__auto__){
var seq__743__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__743__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__743__$1);
var G__751 = cljs.core.chunk_rest.call(null,seq__743__$1);
var G__752 = c__5525__auto__;
var G__753 = cljs.core.count.call(null,c__5525__auto__);
var G__754 = (0);
seq__743 = G__751;
chunk__744 = G__752;
count__745 = G__753;
i__746 = G__754;
continue;
} else {
var fragment = cljs.core.first.call(null,seq__743__$1);
spacewar.ui.tactical_scan.draw_fragment.call(null,fragment,age,fragment_color);


var G__755 = cljs.core.next.call(null,seq__743__$1);
var G__756 = null;
var G__757 = (0);
var G__758 = (0);
seq__743 = G__755;
chunk__744 = G__756;
count__745 = G__757;
i__746 = G__758;
continue;
}
} else {
return null;
}
}
break;
}
});
spacewar.ui.tactical_scan.draw_explosions = (function spacewar$ui$tactical_scan$draw_explosions(state){
return spacewar.ui.tactical_scan.draw_objects.call(null,state,new cljs.core.Keyword(null,"explosions","explosions",-1941460974),cljs.core.partial.call(null,spacewar.ui.tactical_scan.draw_explosion,state));
});
spacewar.ui.tactical_scan.draw_clouds = (function spacewar$ui$tactical_scan$draw_clouds(state){
return spacewar.ui.tactical_scan.draw_objects.call(null,state,new cljs.core.Keyword(null,"clouds","clouds",-632461223),spacewar.ui.icons.draw_cloud_icon);
});
spacewar.ui.tactical_scan.draw_shots = (function spacewar$ui$tactical_scan$draw_shots(state){
spacewar.ui.tactical_scan.draw_phaser_shots.call(null,state);

spacewar.ui.tactical_scan.draw_torpedo_shots.call(null,state);

spacewar.ui.tactical_scan.draw_kinetic_shots.call(null,state);

spacewar.ui.tactical_scan.draw_klingon_kinetic_shots.call(null,state);

spacewar.ui.tactical_scan.draw_klingon_phaser_shots.call(null,state);

spacewar.ui.tactical_scan.draw_klingon_torpedo_shots.call(null,state);

return spacewar.ui.tactical_scan.draw_romulan_blast_shots.call(null,state);
});

/**
* @constructor
 * @implements {spacewar.ui.protocols.Drawable}
*/
spacewar.ui.tactical_scan.tactical_scan = (function (state){
this.state = state;
});
(spacewar.ui.tactical_scan.tactical_scan.prototype.spacewar$ui$protocols$Drawable$ = cljs.core.PROTOCOL_SENTINEL);

(spacewar.ui.tactical_scan.tactical_scan.prototype.spacewar$ui$protocols$Drawable$draw$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__759 = self__.state;
var map__759__$1 = cljs.core.__destructure_map.call(null,map__759);
var x = cljs.core.get.call(null,map__759__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__759__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var tr__794__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__794__auto__);

spacewar.ui.tactical_scan.draw_background.call(null,self__.state);

spacewar.ui.tactical_scan.draw_stars.call(null,self__.state);

spacewar.ui.tactical_scan.draw_shots.call(null,self__.state);

spacewar.ui.tactical_scan.draw_klingons.call(null,self__.state);

if((new cljs.core.Keyword(null,"game-over-timer","game-over-timer",321758852).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(self__.state)) === (0))){
spacewar.ui.tactical_scan.draw_ship.call(null,self__.state);
} else {
}

spacewar.ui.tactical_scan.draw_bases.call(null,self__.state);

spacewar.ui.tactical_scan.draw_transports.call(null,self__.state);

spacewar.ui.tactical_scan.draw_explosions.call(null,self__.state);

spacewar.ui.tactical_scan.draw_clouds.call(null,self__.state);

return spacewar.ui.tactical_scan.draw_romulans.call(null,self__.state);
}finally {quil.core.pop_matrix.call(null);
}}));

(spacewar.ui.tactical_scan.tactical_scan.prototype.spacewar$ui$protocols$Drawable$setup$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new spacewar.ui.tactical_scan.tactical_scan(self__.state));
}));

(spacewar.ui.tactical_scan.tactical_scan.prototype.spacewar$ui$protocols$Drawable$update_state$arity$2 = (function (_,world){
var self__ = this;
var ___$1 = this;
var map__760 = self__.state;
var map__760__$1 = cljs.core.__destructure_map.call(null,map__760);
var x = cljs.core.get.call(null,map__760__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__760__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__760__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__760__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var last_left_down = new cljs.core.Keyword(null,"left-down","left-down",2050158249).cljs$core$IFn$_invoke$arity$1(self__.state);
var mx = quil.core.mouse_x.call(null);
var my = quil.core.mouse_y.call(null);
var mouse_in = spacewar.geometry.inside_rect.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,w,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null));
var left_down = (function (){var and__5000__auto__ = mouse_in;
if(and__5000__auto__){
var and__5000__auto____$1 = quil.core.mouse_pressed_QMARK_.call(null);
if(cljs.core.truth_(and__5000__auto____$1)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",-399115937),quil.core.mouse_button.call(null));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})();
var state__$1 = cljs.core.assoc.call(null,self__.state,new cljs.core.Keyword(null,"mouse-in","mouse-in",-744173595),mouse_in,new cljs.core.Keyword(null,"left-down","left-down",2050158249),left_down);
var left_up = (function (){var and__5000__auto__ = cljs.core.not.call(null,left_down);
if(and__5000__auto__){
var and__5000__auto____$1 = last_left_down;
if(cljs.core.truth_(and__5000__auto____$1)){
return mouse_in;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})();
var pressed_QMARK_ = quil.core.key_pressed_QMARK_.call(null);
var the_key = quil.core.key_as_keyword.call(null);
var key = (function (){var and__5000__auto__ = pressed_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return the_key;
} else {
return and__5000__auto__;
}
})();
var event = (cljs.core.truth_(left_up)?(function (){var pred__761 = cljs.core._EQ_;
var expr__762 = key;
if(cljs.core.truth_(pred__761.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__762))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"debug-position-ship","debug-position-ship",1001388142),new cljs.core.Keyword(null,"pos","pos",-864607220),spacewar.ui.tactical_scan.click__GT_pos.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null))], null);
} else {
if(cljs.core.truth_(pred__761.call(null,new cljs.core.Keyword(null,"c","c",-1763192079),expr__762))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"debug-dilithium-cloud","debug-dilithium-cloud",-454177713),new cljs.core.Keyword(null,"pos","pos",-864607220),spacewar.ui.tactical_scan.click__GT_pos.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null))], null);
} else {
if(cljs.core.truth_(pred__761.call(null,new cljs.core.Keyword(null,"e","e",1381269198),expr__762))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"debug-explosion","debug-explosion",211194527),new cljs.core.Keyword(null,"pos","pos",-864607220),spacewar.ui.tactical_scan.click__GT_pos.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null))], null);
} else {
if(cljs.core.truth_(pred__761.call(null,new cljs.core.Keyword(null,"r","r",-471384190),expr__762))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"debug-resupply-ship","debug-resupply-ship",1653705279)], null);
} else {
if(cljs.core.truth_(pred__761.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__762))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"debug-add-klingon","debug-add-klingon",-1401441744),new cljs.core.Keyword(null,"pos","pos",-864607220),spacewar.ui.tactical_scan.click__GT_pos.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null))], null);
} else {
if(cljs.core.truth_(pred__761.call(null,new cljs.core.Keyword(null,"K","K",711741),expr__762))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"debug-add-kamikazee-klingon","debug-add-kamikazee-klingon",-1479498603),new cljs.core.Keyword(null,"pos","pos",-864607220),spacewar.ui.tactical_scan.click__GT_pos.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null))], null);
} else {
if(cljs.core.truth_(pred__761.call(null,new cljs.core.Keyword(null,"R","R",-936662523),expr__762))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"debug-add-romulan","debug-add-romulan",458420770),new cljs.core.Keyword(null,"pos","pos",-864607220),spacewar.ui.tactical_scan.click__GT_pos.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null))], null);
} else {
if(cljs.core.truth_(pred__761.call(null,new cljs.core.Keyword(null,"P","P",1668913291),expr__762))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"debug-add-pulsar","debug-add-pulsar",1124578906),new cljs.core.Keyword(null,"pos","pos",-864607220),spacewar.ui.tactical_scan.click__GT_pos.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null))], null);
} else {
if(cljs.core.truth_(pred__761.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),expr__762))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"debug-klingon-stats","debug-klingon-stats",239832412)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"weapon-direction","weapon-direction",-1739420635),new cljs.core.Keyword(null,"angle","angle",1622094254),spacewar.ui.tactical_scan.click__GT_bearing.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null))], null);
}
}
}
}
}
}
}
}
}
})():null);
return spacewar.ui.protocols.pack_update.call(null,(new spacewar.ui.tactical_scan.tactical_scan(cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"world","world",-418292623),world))),event);
}));

(spacewar.ui.tactical_scan.tactical_scan.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
}));

(spacewar.ui.tactical_scan.tactical_scan.cljs$lang$type = true);

(spacewar.ui.tactical_scan.tactical_scan.cljs$lang$ctorStr = "spacewar.ui.tactical-scan/tactical-scan");

(spacewar.ui.tactical_scan.tactical_scan.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"spacewar.ui.tactical-scan/tactical-scan");
}));

/**
 * Positional factory function for spacewar.ui.tactical-scan/tactical-scan.
 */
spacewar.ui.tactical_scan.__GT_tactical_scan = (function spacewar$ui$tactical_scan$__GT_tactical_scan(state){
return (new spacewar.ui.tactical_scan.tactical_scan(state));
});


//# sourceMappingURL=tactical_scan.js.map
