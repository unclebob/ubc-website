// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('spacewar.ui.icons');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('spacewar.ui.config');
goog.require('spacewar.game_logic.config');
goog.require('spacewar.geometry');
goog.require('spacewar.vector');
goog.require('spacewar.util');
spacewar.ui.icons.transport_color = (function spacewar$ui$icons$transport_color(commodity){
var pred__530 = cljs.core._EQ_;
var expr__531 = commodity;
if(cljs.core.truth_(pred__530.call(null,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),expr__531))){
return spacewar.ui.config.orange;
} else {
if(cljs.core.truth_(pred__530.call(null,new cljs.core.Keyword(null,"dilithium","dilithium",1152933090),expr__531))){
return spacewar.ui.config.yellow;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__531)].join('')));
}
}
});
spacewar.ui.icons.draw_transport_icon = (function spacewar$ui$icons$draw_transport_icon(transport){
var commodity = new cljs.core.Keyword(null,"commodity","commodity",1416272748).cljs$core$IFn$_invoke$arity$1(transport);
quil.core.ellipse_mode.call(null,new cljs.core.Keyword(null,"center","center",-748944368));

quil.core.no_stroke.call(null);

cljs.core.apply.call(null,quil.core.fill,spacewar.ui.icons.transport_color.call(null,commodity));

var pred__533 = cljs.core._EQ_;
var expr__534 = commodity;
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"dilithium","dilithium",1152933090),expr__534))){
return quil.core.triangle.call(null,(0),(-8),(-6),(6),(6),(6));
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),expr__534))){
return quil.core.triangle.call(null,(0),(8),(-6),(-6),(6),(-6));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__534)].join('')));
}
}
});
spacewar.ui.icons.age_angle = (function spacewar$ui$icons$age_angle(age){
var maturity = (function (){var x__5090__auto__ = (1);
var y__5091__auto__ = (age / spacewar.game_logic.config.base_maturity_age);
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return ((((1) - maturity) * (2)) * Math.PI);
});
spacewar.ui.icons.draw_base_age = (function spacewar$ui$icons$draw_base_age(age){
quil.core.fill.call(null,(0),(0),(0),(150));

quil.core.no_stroke.call(null);

quil.core.ellipse_mode.call(null,new cljs.core.Keyword(null,"center","center",-748944368));

return quil.core.arc.call(null,(0),(0),(30),(30),(0),spacewar.ui.icons.age_angle.call(null,age));
});
spacewar.ui.icons.draw_inventory_circle = (function spacewar$ui$icons$draw_inventory_circle(commodity,maximum,color,radius){
var angle = (((2) * Math.PI) * (commodity / maximum));
quil.core.stroke_weight.call(null,(3));

quil.core.no_fill.call(null);

if((angle > 0.01)){
cljs.core.apply.call(null,quil.core.stroke,color);

return quil.core.arc.call(null,(0),(0),radius,radius,(0),angle);
} else {
return null;
}
});
spacewar.ui.icons.draw_base_contents = (function spacewar$ui$icons$draw_base_contents(antimatter,dilithium,corbomite){
spacewar.ui.icons.draw_inventory_circle.call(null,dilithium,spacewar.game_logic.config.base_dilithium_maximum,spacewar.ui.config.yellow,(30));

spacewar.ui.icons.draw_inventory_circle.call(null,antimatter,spacewar.game_logic.config.base_antimatter_maximum,spacewar.ui.config.orange,(38));

return spacewar.ui.icons.draw_inventory_circle.call(null,corbomite,spacewar.game_logic.config.corbomite_maximum,spacewar.ui.config.green,(46));
});
spacewar.ui.icons.draw_base_counts = (function spacewar$ui$icons$draw_base_counts(base){
cljs.core.apply.call(null,quil.core.fill,spacewar.ui.config.white);

cljs.core.apply.call(null,quil.core.stroke,spacewar.ui.config.white);

quil.core.stroke_weight.call(null,(1));

quil.core.text_align.call(null,new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"center","center",-748944368));

quil.core.text_font.call(null,new cljs.core.Keyword(null,"lcars-small","lcars-small",620623076).cljs$core$IFn$_invoke$arity$1(quil.core.state.call(null,new cljs.core.Keyword(null,"fonts","fonts",1683167295))),(12));

quil.core.text.call(null,["T-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null,"torpedos","torpedos",344905121).cljs$core$IFn$_invoke$arity$1(base) | (0)))].join(''),(-30),(0));

quil.core.text_align.call(null,new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"center","center",-748944368));

return quil.core.text.call(null,["K-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null,"kinetics","kinetics",-707133266).cljs$core$IFn$_invoke$arity$1(base) | (0)))].join(''),(30),(0));
});
spacewar.ui.icons.draw_base_adornments = (function spacewar$ui$icons$draw_base_adornments(base){
spacewar.ui.icons.draw_base_age.call(null,new cljs.core.Keyword(null,"age","age",-604307804).cljs$core$IFn$_invoke$arity$1(base));

spacewar.ui.icons.draw_base_contents.call(null,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000).cljs$core$IFn$_invoke$arity$1(base),new cljs.core.Keyword(null,"dilithium","dilithium",1152933090).cljs$core$IFn$_invoke$arity$1(base),new cljs.core.Keyword(null,"corbomite","corbomite",1612720764).cljs$core$IFn$_invoke$arity$1(base));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(base),new cljs.core.Keyword(null,"weapon-factory","weapon-factory",-475320995))){
return spacewar.ui.icons.draw_base_counts.call(null,base);
} else {
return null;
}
});
spacewar.ui.icons.draw_romulan_icon = (function spacewar$ui$icons$draw_romulan_icon(){
quil.core.stroke_weight.call(null,(2));

quil.core.line.call(null,(-3),(-6),(3),(-6));

quil.core.line.call(null,(3),(-6),(6),(-3));

quil.core.line.call(null,(6),(-3),(6),(3));

quil.core.line.call(null,(6),(3),(3),(9));

quil.core.line.call(null,(3),(9),(-3),(9));

quil.core.line.call(null,(-3),(9),(-6),(3));

quil.core.line.call(null,(-6),(3),(-6),(-3));

quil.core.line.call(null,(-6),(-3),(-3),(-6));

quil.core.line.call(null,(6),(-3),(12),(-9));

quil.core.line.call(null,(12),(-9),(12),(-6));

quil.core.line.call(null,(12),(-6),(6),(3));

quil.core.line.call(null,(-6),(-3),(-12),(-9));

quil.core.line.call(null,(-12),(-9),(-12),(-6));

quil.core.line.call(null,(-12),(-6),(-6),(3));

quil.core.line.call(null,(-12),(-12),(-12),(3));

return quil.core.line.call(null,(12),(-12),(12),(3));
});
if((typeof spacewar !== 'undefined') && (typeof spacewar.ui !== 'undefined') && (typeof spacewar.ui.icons !== 'undefined') && (typeof spacewar.ui.icons.draw_romulan !== 'undefined')){
} else {
spacewar.ui.icons.draw_romulan = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"spacewar.ui.icons","draw-romulan"),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
cljs.core._add_method.call(null,spacewar.ui.icons.draw_romulan,new cljs.core.Keyword(null,"invisible","invisible",810504226),(function (romulan){
quil.core.no_stroke.call(null);

quil.core.fill.call(null,(255),(255),(255),(function (){var x__5090__auto__ = (15);
var y__5091__auto__ = ((15) * (new cljs.core.Keyword(null,"age","age",-604307804).cljs$core$IFn$_invoke$arity$1(romulan) / spacewar.game_logic.config.romulan_invisible_time));
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})());

return quil.core.ellipse.call(null,(0),(0),(30),(30));
}));
cljs.core._add_method.call(null,spacewar.ui.icons.draw_romulan,new cljs.core.Keyword(null,"appearing","appearing",1835294365),(function (romulan){
cljs.core.apply.call(null,quil.core.stroke,cljs.core.conj.call(null,spacewar.ui.config.white,(function (){var x__5090__auto__ = (255);
var y__5091__auto__ = ((255) * (new cljs.core.Keyword(null,"age","age",-604307804).cljs$core$IFn$_invoke$arity$1(romulan) / spacewar.game_logic.config.romulan_appearing_time));
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})()));

return spacewar.ui.icons.draw_romulan_icon.call(null);
}));
cljs.core._add_method.call(null,spacewar.ui.icons.draw_romulan,new cljs.core.Keyword(null,"visible","visible",-1024216805),(function (romulan){
cljs.core.apply.call(null,quil.core.stroke,spacewar.util.color_shift.call(null,spacewar.ui.config.white,spacewar.ui.config.orange,(function (){var x__5090__auto__ = (1);
var y__5091__auto__ = (new cljs.core.Keyword(null,"age","age",-604307804).cljs$core$IFn$_invoke$arity$1(romulan) / spacewar.game_logic.config.romulan_visible_time);
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})()));

return spacewar.ui.icons.draw_romulan_icon.call(null);
}));
cljs.core._add_method.call(null,spacewar.ui.icons.draw_romulan,new cljs.core.Keyword(null,"firing","firing",-1202252172),(function (romulan){
cljs.core.apply.call(null,quil.core.stroke,spacewar.util.color_shift.call(null,spacewar.ui.config.orange,spacewar.ui.config.red,(function (){var x__5090__auto__ = (1);
var y__5091__auto__ = (new cljs.core.Keyword(null,"age","age",-604307804).cljs$core$IFn$_invoke$arity$1(romulan) / spacewar.game_logic.config.romulan_firing_time);
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})()));

var seq__536_540 = cljs.core.seq.call(null,cljs.core.range.call(null,(10)));
var chunk__537_541 = null;
var count__538_542 = (0);
var i__539_543 = (0);
while(true){
if((i__539_543 < count__538_542)){
var __544 = cljs.core._nth.call(null,chunk__537_541,i__539_543);
quil.core.line.call(null,(0),(0),((30) - cljs.core.rand.call(null,(60))),((30) - cljs.core.rand.call(null,(60))));


var G__545 = seq__536_540;
var G__546 = chunk__537_541;
var G__547 = count__538_542;
var G__548 = (i__539_543 + (1));
seq__536_540 = G__545;
chunk__537_541 = G__546;
count__538_542 = G__547;
i__539_543 = G__548;
continue;
} else {
var temp__5804__auto___549 = cljs.core.seq.call(null,seq__536_540);
if(temp__5804__auto___549){
var seq__536_550__$1 = temp__5804__auto___549;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__536_550__$1)){
var c__5525__auto___551 = cljs.core.chunk_first.call(null,seq__536_550__$1);
var G__552 = cljs.core.chunk_rest.call(null,seq__536_550__$1);
var G__553 = c__5525__auto___551;
var G__554 = cljs.core.count.call(null,c__5525__auto___551);
var G__555 = (0);
seq__536_540 = G__552;
chunk__537_541 = G__553;
count__538_542 = G__554;
i__539_543 = G__555;
continue;
} else {
var __556 = cljs.core.first.call(null,seq__536_550__$1);
quil.core.line.call(null,(0),(0),((30) - cljs.core.rand.call(null,(60))),((30) - cljs.core.rand.call(null,(60))));


var G__557 = cljs.core.next.call(null,seq__536_550__$1);
var G__558 = null;
var G__559 = (0);
var G__560 = (0);
seq__536_540 = G__557;
chunk__537_541 = G__558;
count__538_542 = G__559;
i__539_543 = G__560;
continue;
}
} else {
}
}
break;
}

return spacewar.ui.icons.draw_romulan_icon.call(null);
}));
cljs.core._add_method.call(null,spacewar.ui.icons.draw_romulan,new cljs.core.Keyword(null,"fading","fading",1798564850),(function (romulan){
cljs.core.apply.call(null,quil.core.stroke,spacewar.util.color_shift.call(null,spacewar.ui.config.red,spacewar.ui.config.black,(function (){var x__5090__auto__ = (1);
var y__5091__auto__ = (new cljs.core.Keyword(null,"age","age",-604307804).cljs$core$IFn$_invoke$arity$1(romulan) / spacewar.game_logic.config.romulan_fading_time);
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})()));

return spacewar.ui.icons.draw_romulan_icon.call(null);
}));
cljs.core._add_method.call(null,spacewar.ui.icons.draw_romulan,new cljs.core.Keyword(null,"disappeared","disappeared",163128976),(function (_){
return null;
}));
spacewar.ui.icons.draw_strategic_romulan = (function spacewar$ui$icons$draw_strategic_romulan(){
cljs.core.apply.call(null,quil.core.stroke,spacewar.ui.config.orange);

return spacewar.ui.icons.draw_romulan_icon.call(null);
});
if((typeof spacewar !== 'undefined') && (typeof spacewar.ui !== 'undefined') && (typeof spacewar.ui.icons !== 'undefined') && (typeof spacewar.ui.icons.draw_base_icon !== 'undefined')){
} else {
spacewar.ui.icons.draw_base_icon = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"spacewar.ui.icons","draw-base-icon"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
cljs.core._add_method.call(null,spacewar.ui.icons.draw_base_icon,new cljs.core.Keyword(null,"weapon-factory","weapon-factory",-475320995),(function (base){
quil.core.no_fill.call(null);

cljs.core.apply.call(null,quil.core.stroke,spacewar.ui.config.weapon_factory_color);

quil.core.stroke_weight.call(null,(2));

quil.core.ellipse_mode.call(null,new cljs.core.Keyword(null,"center","center",-748944368));

quil.core.ellipse.call(null,(0),(0),(12),(12));

quil.core.ellipse.call(null,(0),(0),(20),(20));

quil.core.line.call(null,(0),(-6),(0),(6));

quil.core.line.call(null,(-6),(0),(6),(0));

return spacewar.ui.icons.draw_base_adornments.call(null,base);
}));
cljs.core._add_method.call(null,spacewar.ui.icons.draw_base_icon,new cljs.core.Keyword(null,"antimatter-factory","antimatter-factory",218121254),(function (base){
quil.core.no_fill.call(null);

cljs.core.apply.call(null,quil.core.stroke,spacewar.ui.config.antimatter_factory_color);

quil.core.stroke_weight.call(null,(2));

quil.core.ellipse_mode.call(null,new cljs.core.Keyword(null,"center","center",-748944368));

quil.core.ellipse.call(null,(0),(0),(12),(12));

quil.core.line.call(null,(0),(-6),(0),(6));

quil.core.line.call(null,(-6),(0),(6),(0));

quil.core.ellipse.call(null,(0),(-8),(5),(5));

quil.core.ellipse.call(null,(0),(8),(5),(5));

quil.core.ellipse.call(null,(-8),(0),(5),(5));

quil.core.ellipse.call(null,(8),(0),(5),(5));

return spacewar.ui.icons.draw_base_adornments.call(null,base);
}));
cljs.core._add_method.call(null,spacewar.ui.icons.draw_base_icon,new cljs.core.Keyword(null,"dilithium-factory","dilithium-factory",1437622905),(function (base){
quil.core.no_fill.call(null);

cljs.core.apply.call(null,quil.core.stroke,spacewar.ui.config.dilithium_factory_color);

quil.core.stroke_weight.call(null,(2));

quil.core.ellipse_mode.call(null,new cljs.core.Keyword(null,"center","center",-748944368));

quil.core.quad.call(null,(0),(6),(6),(0),(0),(-6),(-6),(0));

quil.core.quad.call(null,(0),(10),(10),(0),(0),(-10),(-10),(0));

quil.core.line.call(null,(0),(-6),(0),(6));

quil.core.line.call(null,(-6),(0),(6),(0));

quil.core.line.call(null,(3),(10),(-3),(10));

quil.core.line.call(null,(3),(-10),(-3),(-10));

quil.core.line.call(null,(10),(3),(10),(-3));

quil.core.line.call(null,(-10),(3),(-10),(-3));

return spacewar.ui.icons.draw_base_adornments.call(null,base);
}));
cljs.core._add_method.call(null,spacewar.ui.icons.draw_base_icon,new cljs.core.Keyword(null,"corbomite-factory","corbomite-factory",339807181),(function (base){
quil.core.no_fill.call(null);

cljs.core.apply.call(null,quil.core.stroke,spacewar.ui.config.corbomite_factory_color);

quil.core.stroke_weight.call(null,(2));

quil.core.line.call(null,(-10),(10),(10),(-10));

quil.core.line.call(null,(10),(10),(-10),(-10));

quil.core.line.call(null,(-10),(10),(10),(10));

quil.core.line.call(null,(-10),(-10),(10),(-10));

cljs.core.apply.call(null,quil.core.fill,((((200) < cljs.core.mod.call(null,quil.core.millis.call(null),(400))))?spacewar.ui.config.corbomite_factory_color:spacewar.ui.config.black));

quil.core.ellipse.call(null,(0),(0),(10),(10));

return spacewar.ui.icons.draw_base_adornments.call(null,base);
}));
cljs.core._add_method.call(null,spacewar.ui.icons.draw_base_icon,new cljs.core.Keyword(null,"corbomite-device","corbomite-device",-829250405),(function (_base){
quil.core.no_fill.call(null);

cljs.core.apply.call(null,quil.core.stroke,spacewar.ui.config.corbomite_factory_color);

quil.core.stroke_weight.call(null,(2));

quil.core.line.call(null,(-10),(10),(10),(-10));

quil.core.line.call(null,(10),(10),(-10),(-10));

quil.core.line.call(null,(-10),(10),(10),(10));

quil.core.line.call(null,(-10),(-10),(10),(-10));

cljs.core.apply.call(null,quil.core.stroke,spacewar.ui.config.red);

quil.core.stroke_weight.call(null,(4));

quil.core.line.call(null,(-10),(0),(10),(0));

cljs.core.apply.call(null,quil.core.fill,((((200) < cljs.core.mod.call(null,quil.core.millis.call(null),(400))))?spacewar.ui.config.red:spacewar.ui.config.black));

return quil.core.ellipse.call(null,(0),(0),(10),(10));
}));
spacewar.ui.icons.klingon_state = (function spacewar$ui$icons$klingon_state(p__561){
var map__562 = p__561;
var map__562__$1 = cljs.core.__destructure_map.call(null,map__562);
var cruise_state = cljs.core.get.call(null,map__562__$1,new cljs.core.Keyword(null,"cruise-state","cruise-state",-1815030882));
var battle_state = cljs.core.get.call(null,map__562__$1,new cljs.core.Keyword(null,"battle-state","battle-state",186465083));
var mission = cljs.core.get.call(null,map__562__$1,new cljs.core.Keyword(null,"mission","mission",1740288522));
var cruise_state__$1 = (function (){var pred__563 = cljs.core._EQ_;
var expr__564 = cruise_state;
if(cljs.core.truth_(pred__563.call(null,new cljs.core.Keyword(null,"patrol","patrol",-1378804753),expr__564))){
return "P";
} else {
if(cljs.core.truth_(pred__563.call(null,new cljs.core.Keyword(null,"refuel","refuel",184033462),expr__564))){
return "R";
} else {
if(cljs.core.truth_(pred__563.call(null,new cljs.core.Keyword(null,"guard","guard",-873147811),expr__564))){
return "G";
} else {
if(cljs.core.truth_(pred__563.call(null,new cljs.core.Keyword(null,"mission","mission",1740288522),expr__564))){
return "M";
} else {
return "X";
}
}
}
}
})();
var mission__$1 = (function (){var pred__566 = cljs.core._EQ_;
var expr__567 = mission;
if(cljs.core.truth_(pred__566.call(null,new cljs.core.Keyword(null,"blockade","blockade",-469589591),expr__567))){
return "B";
} else {
if(cljs.core.truth_(pred__566.call(null,new cljs.core.Keyword(null,"seek-and-destroy","seek-and-destroy",-1082537405),expr__567))){
return "A";
} else {
if(cljs.core.truth_(pred__566.call(null,new cljs.core.Keyword(null,"escape-corbomite","escape-corbomite",-646606924),expr__567))){
return "E";
} else {
return "-";
}
}
}
})();
var battle_state__$1 = (function (){var pred__569 = cljs.core._EQ_;
var expr__570 = battle_state;
if(cljs.core.truth_(pred__569.call(null,new cljs.core.Keyword(null,"no-battle","no-battle",-1425286057),expr__570))){
return "n";
} else {
if(cljs.core.truth_(pred__569.call(null,new cljs.core.Keyword(null,"flank-right","flank-right",-2113025306),expr__570))){
return "fr";
} else {
if(cljs.core.truth_(pred__569.call(null,new cljs.core.Keyword(null,"flank-left","flank-left",-1509458594),expr__570))){
return "fl";
} else {
if(cljs.core.truth_(pred__569.call(null,new cljs.core.Keyword(null,"retreating","retreating",939624530),expr__570))){
return "r";
} else {
if(cljs.core.truth_(pred__569.call(null,new cljs.core.Keyword(null,"advancing","advancing",21793874),expr__570))){
return "a";
} else {
if(cljs.core.truth_(pred__569.call(null,new cljs.core.Keyword(null,"kamikazee","kamikazee",1682650476),expr__570))){
return "K";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__570)].join('')));
}
}
}
}
}
}
})();
return [mission__$1,":",cruise_state__$1,"-",battle_state__$1].join('');
});
spacewar.ui.icons.draw_klingon_counts = (function spacewar$ui$icons$draw_klingon_counts(klingon){
var shields = (new cljs.core.Keyword(null,"shields","shields",-295786721).cljs$core$IFn$_invoke$arity$1(klingon) | (0));
if(cljs.core.truth_(cljs.core.deref.call(null,spacewar.game_logic.config.klingon_stats))){
cljs.core.apply.call(null,quil.core.fill,spacewar.ui.config.white);

cljs.core.apply.call(null,quil.core.stroke,spacewar.ui.config.white);

quil.core.stroke_weight.call(null,(1));

quil.core.text_align.call(null,new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"center","center",-748944368));

quil.core.text_font.call(null,new cljs.core.Keyword(null,"lcars-small","lcars-small",620623076).cljs$core$IFn$_invoke$arity$1(quil.core.state.call(null,new cljs.core.Keyword(null,"fonts","fonts",1683167295))),(12));

quil.core.text.call(null,["T-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null,"torpedos","torpedos",344905121).cljs$core$IFn$_invoke$arity$1(klingon) | (0)))].join(''),(-30),(0));

quil.core.text_align.call(null,new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"center","center",-748944368));

quil.core.text.call(null,["A-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000).cljs$core$IFn$_invoke$arity$1(klingon) / spacewar.game_logic.config.klingon_antimatter) / 0.01) | (0))),"%"].join(''),(30),(0));

quil.core.text_align.call(null,new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"bottom","bottom",-1550509018));

quil.core.text.call(null,[spacewar.ui.icons.klingon_state.call(null,klingon),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shields),"]"].join(''),(0),(-30));

quil.core.text_align.call(null,new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"top","top",-1856271961));

return quil.core.text.call(null,["K-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null,"kinetics","kinetics",-707133266).cljs$core$IFn$_invoke$arity$1(klingon) | (0)))].join(''),(0),(30));
} else {
return null;
}
});
spacewar.ui.icons.draw_klingon_icon = (function spacewar$ui$icons$draw_klingon_icon(klingon){
cljs.core.apply.call(null,quil.core.fill,spacewar.ui.config.black);

cljs.core.apply.call(null,quil.core.stroke,spacewar.ui.config.klingon_color);

quil.core.stroke_weight.call(null,((((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"kamikazee","kamikazee",1682650476),new cljs.core.Keyword(null,"battle-state","battle-state",186465083).cljs$core$IFn$_invoke$arity$1(klingon))) && (((250) < cljs.core.mod.call(null,quil.core.millis.call(null),(500))))))?(5):(2)));

quil.core.ellipse_mode.call(null,new cljs.core.Keyword(null,"center","center",-748944368));

quil.core.line.call(null,(0),(0),(10),(-6));

quil.core.line.call(null,(10),(-6),(14),(-3));

quil.core.line.call(null,(0),(0),(-10),(-6));

quil.core.line.call(null,(-10),(-6),(-14),(-3));

return quil.core.ellipse.call(null,(0),(0),(6),(6));
});
spacewar.ui.icons.draw_klingon_shields = (function spacewar$ui$icons$draw_klingon_shields(shields){
if((shields < spacewar.game_logic.config.klingon_shields)){
var pct = (shields / spacewar.game_logic.config.klingon_shields);
var flicker = (cljs.core.rand.call(null,(3)) < pct);
var color = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(pct * (255)),(0),((flicker)?(pct * (100)):(100))], null);
var radius = ((35) + (pct * (20)));
cljs.core.apply.call(null,quil.core.fill,color);

quil.core.ellipse_mode.call(null,new cljs.core.Keyword(null,"center","center",-748944368));

quil.core.no_stroke.call(null);

return quil.core.ellipse.call(null,(0),(0),radius,radius);
} else {
return null;
}
});
spacewar.ui.icons.draw_ship_icon = (function spacewar$ui$icons$draw_ship_icon(p__572,radians,ship){
var vec__573 = p__572;
var vx = cljs.core.nth.call(null,vec__573,(0),null);
var vy = cljs.core.nth.call(null,vec__573,(1),null);
cljs.core.apply.call(null,quil.core.stroke,spacewar.ui.config.enterprise_vector_color);

quil.core.stroke_weight.call(null,(2));

quil.core.line.call(null,(0),(0),vx,vy);

var tr__796__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [radians], null);
quil.core.push_matrix.call(null);

try{cljs.core.apply.call(null,quil.core.rotate,tr__796__auto__);

cljs.core.apply.call(null,quil.core.stroke,spacewar.ui.config.enterprise_color);

quil.core.stroke_weight.call(null,(cljs.core.truth_((function (){var and__5000__auto__ = new cljs.core.Keyword(null,"corbomite-device-installed","corbomite-device-installed",-2093492516).cljs$core$IFn$_invoke$arity$1(ship);
if(cljs.core.truth_(and__5000__auto__)){
return ((250) < cljs.core.mod.call(null,quil.core.millis.call(null),(500)));
} else {
return and__5000__auto__;
}
})())?(4):(2)));

quil.core.ellipse_mode.call(null,new cljs.core.Keyword(null,"center","center",-748944368));

cljs.core.apply.call(null,quil.core.fill,spacewar.ui.config.black);

quil.core.line.call(null,(-9),(-9),(0),(0));

quil.core.line.call(null,(-9),(9),(0),(0));

quil.core.ellipse.call(null,(0),(0),(9),(9));

quil.core.line.call(null,(-5),(9),(-15),(9));

return quil.core.line.call(null,(-5),(-9),(-15),(-9));
}finally {quil.core.pop_matrix.call(null);
}});
spacewar.ui.icons.draw_star_icon = (function spacewar$ui$icons$draw_star_icon(star){
var class$ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(star);
var pulsar_QMARK_ = cljs.core._EQ_.call(null,class$,new cljs.core.Keyword(null,"pulsar","pulsar",-980308240));
var pulsar_on_QMARK_ = (cljs.core.mod.call(null,quil.core.millis.call(null),(500)) < (250));
cljs.core.apply.call(null,quil.core.fill,class$.call(null,spacewar.ui.config.star_colors));

if((((!(pulsar_QMARK_))) || (pulsar_on_QMARK_))){
return quil.core.ellipse.call(null,(0),(0),class$.call(null,spacewar.ui.config.star_sizes),class$.call(null,spacewar.ui.config.star_sizes));
} else {
return null;
}
});
spacewar.ui.icons.draw_blob = (function spacewar$ui$icons$draw_blob(jitter,half_jitter,diameter){
return quil.core.ellipse.call(null,(half_jitter - cljs.core.rand.call(null,jitter)),(half_jitter - cljs.core.rand.call(null,jitter)),diameter,diameter);
});
spacewar.ui.icons.draw_spark = (function spacewar$ui$icons$draw_spark(x,y){
cljs.core.apply.call(null,quil.core.fill,spacewar.ui.config.yellow);

return quil.core.ellipse.call(null,x,y,(1),(1));
});
spacewar.ui.icons.rand_sign = (function spacewar$ui$icons$rand_sign(){
if((0.5 < cljs.core.rand.call(null,(1)))){
return (1);
} else {
return (-1);
}
});
spacewar.ui.icons.draw_cloud_icon = (function spacewar$ui$icons$draw_cloud_icon(cloud){
var diameter = (0.3 * new cljs.core.Keyword(null,"concentration","concentration",1539606986).cljs$core$IFn$_invoke$arity$1(cloud));
var jitter = (diameter / (5));
var half_jitter = (jitter / (2));
cljs.core.apply.call(null,quil.core.fill,cljs.core.conj.call(null,spacewar.ui.config.yellow,(10)));

quil.core.no_stroke.call(null);

quil.core.ellipse_mode.call(null,new cljs.core.Keyword(null,"center","center",-748944368));

var seq__576_584 = cljs.core.seq.call(null,cljs.core.range.call(null,(10)));
var chunk__577_585 = null;
var count__578_586 = (0);
var i__579_587 = (0);
while(true){
if((i__579_587 < count__578_586)){
var __588 = cljs.core._nth.call(null,chunk__577_585,i__579_587);
spacewar.ui.icons.draw_blob.call(null,jitter,half_jitter,(diameter * (0.5 - cljs.core.rand.call(null,(1)))));


var G__589 = seq__576_584;
var G__590 = chunk__577_585;
var G__591 = count__578_586;
var G__592 = (i__579_587 + (1));
seq__576_584 = G__589;
chunk__577_585 = G__590;
count__578_586 = G__591;
i__579_587 = G__592;
continue;
} else {
var temp__5804__auto___593 = cljs.core.seq.call(null,seq__576_584);
if(temp__5804__auto___593){
var seq__576_594__$1 = temp__5804__auto___593;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__576_594__$1)){
var c__5525__auto___595 = cljs.core.chunk_first.call(null,seq__576_594__$1);
var G__596 = cljs.core.chunk_rest.call(null,seq__576_594__$1);
var G__597 = c__5525__auto___595;
var G__598 = cljs.core.count.call(null,c__5525__auto___595);
var G__599 = (0);
seq__576_584 = G__596;
chunk__577_585 = G__597;
count__578_586 = G__598;
i__579_587 = G__599;
continue;
} else {
var __600 = cljs.core.first.call(null,seq__576_594__$1);
spacewar.ui.icons.draw_blob.call(null,jitter,half_jitter,(diameter * (0.5 - cljs.core.rand.call(null,(1)))));


var G__601 = cljs.core.next.call(null,seq__576_594__$1);
var G__602 = null;
var G__603 = (0);
var G__604 = (0);
seq__576_584 = G__601;
chunk__577_585 = G__602;
count__578_586 = G__603;
i__579_587 = G__604;
continue;
}
} else {
}
}
break;
}

var seq__580 = cljs.core.seq.call(null,cljs.core.range.call(null,(20)));
var chunk__581 = null;
var count__582 = (0);
var i__583 = (0);
while(true){
if((i__583 < count__582)){
var _ = cljs.core._nth.call(null,chunk__581,i__583);
var r_605 = cljs.core.rand.call(null,(diameter / (4)));
var x_606 = ((2) + cljs.core.rand.call(null,r_605));
var x_sqr_607 = (x_606 * x_606);
var y_608 = Math.sqrt(((r_605 * r_605) - x_sqr_607));
var x_609__$1 = (spacewar.ui.icons.rand_sign.call(null) * x_606);
var y_610__$1 = (spacewar.ui.icons.rand_sign.call(null) * y_608);
spacewar.ui.icons.draw_spark.call(null,x_609__$1,y_610__$1);


var G__611 = seq__580;
var G__612 = chunk__581;
var G__613 = count__582;
var G__614 = (i__583 + (1));
seq__580 = G__611;
chunk__581 = G__612;
count__582 = G__613;
i__583 = G__614;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__580);
if(temp__5804__auto__){
var seq__580__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__580__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__580__$1);
var G__615 = cljs.core.chunk_rest.call(null,seq__580__$1);
var G__616 = c__5525__auto__;
var G__617 = cljs.core.count.call(null,c__5525__auto__);
var G__618 = (0);
seq__580 = G__615;
chunk__581 = G__616;
count__582 = G__617;
i__583 = G__618;
continue;
} else {
var _ = cljs.core.first.call(null,seq__580__$1);
var r_619 = cljs.core.rand.call(null,(diameter / (4)));
var x_620 = ((2) + cljs.core.rand.call(null,r_619));
var x_sqr_621 = (x_620 * x_620);
var y_622 = Math.sqrt(((r_619 * r_619) - x_sqr_621));
var x_623__$1 = (spacewar.ui.icons.rand_sign.call(null) * x_620);
var y_624__$1 = (spacewar.ui.icons.rand_sign.call(null) * y_622);
spacewar.ui.icons.draw_spark.call(null,x_623__$1,y_624__$1);


var G__625 = cljs.core.next.call(null,seq__580__$1);
var G__626 = null;
var G__627 = (0);
var G__628 = (0);
seq__580 = G__625;
chunk__581 = G__626;
count__582 = G__627;
i__583 = G__628;
continue;
}
} else {
return null;
}
}
break;
}
});
spacewar.ui.icons.romulan_blast_visual_intensity = (function spacewar$ui$icons$romulan_blast_visual_intensity(range){
var factor = ((255) * (1.0 - (range / spacewar.game_logic.config.romulan_blast_range)));
return factor;
});
spacewar.ui.icons.romulan_blast_weight = (function spacewar$ui$icons$romulan_blast_weight(){
return ((10) - cljs.core.rand.call(null,(8)));
});
spacewar.ui.icons.romulan_blast_color = (function spacewar$ui$icons$romulan_blast_color(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),cljs.core.rand.call(null,(255)),cljs.core.rand.call(null,(50))], null);
});
spacewar.ui.icons.draw_romulan_shot = (function spacewar$ui$icons$draw_romulan_shot(scale,shot){
var map__629 = shot;
var map__629__$1 = cljs.core.__destructure_map.call(null,map__629);
var range = cljs.core.get.call(null,map__629__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var bearing = cljs.core.get.call(null,map__629__$1,new cljs.core.Keyword(null,"bearing","bearing",-1189702101));
var scaled_range = (range * scale);
var radians = spacewar.geometry.__GT_radians.call(null,bearing);
var radians_to_origin = (radians + Math.PI);
var shot_center = spacewar.vector.from_angular.call(null,scaled_range,radians_to_origin);
var shot_x = cljs.core.first.call(null,shot_center);
var shot_y = cljs.core.second.call(null,shot_center);
var half_pi = (Math.PI / (2));
cljs.core.apply.call(null,quil.core.stroke,cljs.core.conj.call(null,spacewar.ui.icons.romulan_blast_color.call(null),spacewar.ui.icons.romulan_blast_visual_intensity.call(null,range)));

quil.core.stroke_weight.call(null,spacewar.ui.icons.romulan_blast_weight.call(null));

quil.core.ellipse_mode.call(null,new cljs.core.Keyword(null,"radius","radius",-2073122258));

quil.core.no_fill.call(null);

return quil.core.arc.call(null,shot_x,shot_y,scaled_range,scaled_range,(radians - half_pi),(radians + half_pi));
});

//# sourceMappingURL=icons.js.map
