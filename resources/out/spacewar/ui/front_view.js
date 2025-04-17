// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('spacewar.ui.front_view');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('spacewar.geometry');
goog.require('spacewar.ui.strategic_scan');
goog.require('spacewar.ui.protocols');
goog.require('spacewar.vector');
spacewar.ui.front_view.star_count = (200);
spacewar.ui.front_view.f_lum = (200);
spacewar.ui.front_view.move_star = (function spacewar$ui$front_view$move_star(star){
var h_distance = (new cljs.core.Keyword(null,"h-distance","h-distance",-309556309).cljs$core$IFn$_invoke$arity$1(star) - (1));
if((h_distance > (0))){
return cljs.core.assoc.call(null,star,new cljs.core.Keyword(null,"h-distance","h-distance",-309556309),h_distance);
} else {
return null;
}
});
spacewar.ui.front_view.move_stars = (function spacewar$ui$front_view$move_stars(stars){
return cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,spacewar.ui.front_view.move_star,stars));
});
spacewar.ui.front_view.star_in_frame = (function spacewar$ui$front_view$star_in_frame(state,sx,sy){
var map__984 = state;
var map__984__$1 = cljs.core.__destructure_map.call(null,map__984);
var x = cljs.core.get.call(null,map__984__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__984__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__984__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__984__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var margin = (10);
var xmin = (x + margin);
var ymin = (y + margin);
var xmax = ((x + w) - margin);
var ymax = ((y + h) - margin);
return (((sx < xmax)) && ((((sy < ymax)) && ((((sx > xmin)) && ((sy > ymin)))))));
});
spacewar.ui.front_view.star_size = (function spacewar$ui$front_view$star_size(m){
var mm = (spacewar.ui.front_view.f_lum * m);
if((mm < (1))){
return (1);
} else {
if((mm < (3))){
return (2);
} else {
if((mm < (5))){
return (3);
} else {
if((mm < (10))){
return (4);
} else {
if((mm < (20))){
return (5);
} else {
return (6);

}
}
}
}
}
});
spacewar.ui.front_view.star_color = (function spacewar$ui$front_view$star_color(m){
var mm = (spacewar.ui.front_view.f_lum * m);
if((mm >= 0.5)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null);
} else {
return cljs.core.repeat.call(null,(3),(((2) * mm) * (256)));
}
});
spacewar.ui.front_view.make_random_star = (function spacewar$ui$front_view$make_random_star(){
var luminosity = ((1) + cljs.core.rand.call(null,(5)));
var h_distance = cljs.core.rand.call(null,(luminosity * (200)));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"h-distance","h-distance",-309556309),h_distance,new cljs.core.Keyword(null,"v-distance","v-distance",489555828),(((-20) + cljs.core.rand.call(null,(200))) + (h_distance / (20))),new cljs.core.Keyword(null,"angle","angle",1622094254),spacewar.geometry.__GT_radians.call(null,cljs.core.rand.call(null,(360))),new cljs.core.Keyword(null,"luminosity","luminosity",-483901643),luminosity], null);
});
spacewar.ui.front_view.make_stars = (function spacewar$ui$front_view$make_stars(n){
return cljs.core.repeatedly.call(null,n,spacewar.ui.front_view.make_random_star);
});
spacewar.ui.front_view.add_stars = (function spacewar$ui$front_view$add_stars(state){
var stars = new cljs.core.Keyword(null,"stars","stars",-556837771).cljs$core$IFn$_invoke$arity$1(state);
if((cljs.core.count.call(null,stars) < spacewar.ui.front_view.star_count)){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"stars","stars",-556837771),cljs.core.conj.call(null,stars,spacewar.ui.front_view.make_random_star.call(null)));
} else {
return state;
}
});

/**
* @constructor
 * @implements {spacewar.ui.protocols.Drawable}
*/
spacewar.ui.front_view.front_view = (function (state){
this.state = state;
});
(spacewar.ui.front_view.front_view.prototype.spacewar$ui$protocols$Drawable$ = cljs.core.PROTOCOL_SENTINEL);

(spacewar.ui.front_view.front_view.prototype.spacewar$ui$protocols$Drawable$draw$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__985 = self__.state;
var map__985__$1 = cljs.core.__destructure_map.call(null,map__985);
var x = cljs.core.get.call(null,map__985__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__985__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var h = cljs.core.get.call(null,map__985__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var w = cljs.core.get.call(null,map__985__$1,new cljs.core.Keyword(null,"w","w",354169001));
var stars = cljs.core.get.call(null,map__985__$1,new cljs.core.Keyword(null,"stars","stars",-556837771));
quil.core.no_stroke.call(null);

var seq__986 = cljs.core.seq.call(null,stars);
var chunk__987 = null;
var count__988 = (0);
var i__989 = (0);
while(true){
if((i__989 < count__988)){
var star = cljs.core._nth.call(null,chunk__987,i__989);
var map__998_1006 = star;
var map__998_1007__$1 = cljs.core.__destructure_map.call(null,map__998_1006);
var h_distance_1008 = cljs.core.get.call(null,map__998_1007__$1,new cljs.core.Keyword(null,"h-distance","h-distance",-309556309));
var v_distance_1009 = cljs.core.get.call(null,map__998_1007__$1,new cljs.core.Keyword(null,"v-distance","v-distance",489555828));
var luminosity_1010 = cljs.core.get.call(null,map__998_1007__$1,new cljs.core.Keyword(null,"luminosity","luminosity",-483901643));
var angle_1011 = cljs.core.get.call(null,map__998_1007__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var rd_1012 = (h * (v_distance_1009 / h_distance_1008));
var vec__999_1013 = spacewar.vector.from_angular.call(null,rd_1012,angle_1011);
var rx_1014 = cljs.core.nth.call(null,vec__999_1013,(0),null);
var ry_1015 = cljs.core.nth.call(null,vec__999_1013,(1),null);
var sx_1016 = ((rx_1014 + x) + (w / (2)));
var sy_1017 = ((ry_1015 + y) + (h / (2)));
var m_1018 = (luminosity_1010 / Math.sqrt(((h_distance_1008 * h_distance_1008) + (v_distance_1009 * v_distance_1009))));
var sz_1019 = spacewar.ui.front_view.star_size.call(null,m_1018);
if(spacewar.ui.front_view.star_in_frame.call(null,self__.state,sx_1016,sy_1017)){
cljs.core.apply.call(null,quil.core.fill,spacewar.ui.front_view.star_color.call(null,m_1018));

quil.core.ellipse_mode.call(null,new cljs.core.Keyword(null,"corner","corner",1296717125));

quil.core.ellipse.call(null,sx_1016,sy_1017,sz_1019,sz_1019);
} else {
}


var G__1020 = seq__986;
var G__1021 = chunk__987;
var G__1022 = count__988;
var G__1023 = (i__989 + (1));
seq__986 = G__1020;
chunk__987 = G__1021;
count__988 = G__1022;
i__989 = G__1023;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__986);
if(temp__5804__auto__){
var seq__986__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__986__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__986__$1);
var G__1024 = cljs.core.chunk_rest.call(null,seq__986__$1);
var G__1025 = c__5525__auto__;
var G__1026 = cljs.core.count.call(null,c__5525__auto__);
var G__1027 = (0);
seq__986 = G__1024;
chunk__987 = G__1025;
count__988 = G__1026;
i__989 = G__1027;
continue;
} else {
var star = cljs.core.first.call(null,seq__986__$1);
var map__1002_1028 = star;
var map__1002_1029__$1 = cljs.core.__destructure_map.call(null,map__1002_1028);
var h_distance_1030 = cljs.core.get.call(null,map__1002_1029__$1,new cljs.core.Keyword(null,"h-distance","h-distance",-309556309));
var v_distance_1031 = cljs.core.get.call(null,map__1002_1029__$1,new cljs.core.Keyword(null,"v-distance","v-distance",489555828));
var luminosity_1032 = cljs.core.get.call(null,map__1002_1029__$1,new cljs.core.Keyword(null,"luminosity","luminosity",-483901643));
var angle_1033 = cljs.core.get.call(null,map__1002_1029__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var rd_1034 = (h * (v_distance_1031 / h_distance_1030));
var vec__1003_1035 = spacewar.vector.from_angular.call(null,rd_1034,angle_1033);
var rx_1036 = cljs.core.nth.call(null,vec__1003_1035,(0),null);
var ry_1037 = cljs.core.nth.call(null,vec__1003_1035,(1),null);
var sx_1038 = ((rx_1036 + x) + (w / (2)));
var sy_1039 = ((ry_1037 + y) + (h / (2)));
var m_1040 = (luminosity_1032 / Math.sqrt(((h_distance_1030 * h_distance_1030) + (v_distance_1031 * v_distance_1031))));
var sz_1041 = spacewar.ui.front_view.star_size.call(null,m_1040);
if(spacewar.ui.front_view.star_in_frame.call(null,self__.state,sx_1038,sy_1039)){
cljs.core.apply.call(null,quil.core.fill,spacewar.ui.front_view.star_color.call(null,m_1040));

quil.core.ellipse_mode.call(null,new cljs.core.Keyword(null,"corner","corner",1296717125));

quil.core.ellipse.call(null,sx_1038,sy_1039,sz_1041,sz_1041);
} else {
}


var G__1042 = cljs.core.next.call(null,seq__986__$1);
var G__1043 = null;
var G__1044 = (0);
var G__1045 = (0);
seq__986 = G__1042;
chunk__987 = G__1043;
count__988 = G__1044;
i__989 = G__1045;
continue;
}
} else {
return null;
}
}
break;
}
}));

(spacewar.ui.front_view.front_view.prototype.spacewar$ui$protocols$Drawable$setup$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new spacewar.ui.front_view.front_view(cljs.core.assoc.call(null,self__.state,new cljs.core.Keyword(null,"stars","stars",-556837771),spacewar.ui.front_view.make_stars.call(null,spacewar.ui.front_view.star_count))));
}));

(spacewar.ui.front_view.front_view.prototype.spacewar$ui$protocols$Drawable$update_state$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return spacewar.ui.protocols.pack_update.call(null,(new spacewar.ui.front_view.front_view(spacewar.ui.front_view.add_stars.call(null,cljs.core.update.call(null,self__.state,new cljs.core.Keyword(null,"stars","stars",-556837771),spacewar.ui.front_view.move_stars)))));
}));

(spacewar.ui.front_view.front_view.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
}));

(spacewar.ui.front_view.front_view.cljs$lang$type = true);

(spacewar.ui.front_view.front_view.cljs$lang$ctorStr = "spacewar.ui.front-view/front-view");

(spacewar.ui.front_view.front_view.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"spacewar.ui.front-view/front-view");
}));

/**
 * Positional factory function for spacewar.ui.front-view/front-view.
 */
spacewar.ui.front_view.__GT_front_view = (function spacewar$ui$front_view$__GT_front_view(state){
return (new spacewar.ui.front_view.front_view(state));
});


//# sourceMappingURL=front_view.js.map
