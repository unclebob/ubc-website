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
var map__970 = state;
var map__970__$1 = cljs.core.__destructure_map.call(null,map__970);
var x = cljs.core.get.call(null,map__970__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__970__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__970__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__970__$1,new cljs.core.Keyword(null,"h","h",1109658740));
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
var map__971 = self__.state;
var map__971__$1 = cljs.core.__destructure_map.call(null,map__971);
var x = cljs.core.get.call(null,map__971__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__971__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var h = cljs.core.get.call(null,map__971__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var w = cljs.core.get.call(null,map__971__$1,new cljs.core.Keyword(null,"w","w",354169001));
var stars = cljs.core.get.call(null,map__971__$1,new cljs.core.Keyword(null,"stars","stars",-556837771));
quil.core.no_stroke.call(null);

var seq__972 = cljs.core.seq.call(null,stars);
var chunk__973 = null;
var count__974 = (0);
var i__975 = (0);
while(true){
if((i__975 < count__974)){
var star = cljs.core._nth.call(null,chunk__973,i__975);
var map__984_992 = star;
var map__984_993__$1 = cljs.core.__destructure_map.call(null,map__984_992);
var h_distance_994 = cljs.core.get.call(null,map__984_993__$1,new cljs.core.Keyword(null,"h-distance","h-distance",-309556309));
var v_distance_995 = cljs.core.get.call(null,map__984_993__$1,new cljs.core.Keyword(null,"v-distance","v-distance",489555828));
var luminosity_996 = cljs.core.get.call(null,map__984_993__$1,new cljs.core.Keyword(null,"luminosity","luminosity",-483901643));
var angle_997 = cljs.core.get.call(null,map__984_993__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var rd_998 = (h * (v_distance_995 / h_distance_994));
var vec__985_999 = spacewar.vector.from_angular.call(null,rd_998,angle_997);
var rx_1000 = cljs.core.nth.call(null,vec__985_999,(0),null);
var ry_1001 = cljs.core.nth.call(null,vec__985_999,(1),null);
var sx_1002 = ((rx_1000 + x) + (w / (2)));
var sy_1003 = ((ry_1001 + y) + (h / (2)));
var m_1004 = (luminosity_996 / Math.sqrt(((h_distance_994 * h_distance_994) + (v_distance_995 * v_distance_995))));
var sz_1005 = spacewar.ui.front_view.star_size.call(null,m_1004);
if(spacewar.ui.front_view.star_in_frame.call(null,self__.state,sx_1002,sy_1003)){
cljs.core.apply.call(null,quil.core.fill,spacewar.ui.front_view.star_color.call(null,m_1004));

quil.core.ellipse_mode.call(null,new cljs.core.Keyword(null,"corner","corner",1296717125));

quil.core.ellipse.call(null,sx_1002,sy_1003,sz_1005,sz_1005);
} else {
}


var G__1006 = seq__972;
var G__1007 = chunk__973;
var G__1008 = count__974;
var G__1009 = (i__975 + (1));
seq__972 = G__1006;
chunk__973 = G__1007;
count__974 = G__1008;
i__975 = G__1009;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__972);
if(temp__5804__auto__){
var seq__972__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__972__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__972__$1);
var G__1010 = cljs.core.chunk_rest.call(null,seq__972__$1);
var G__1011 = c__5525__auto__;
var G__1012 = cljs.core.count.call(null,c__5525__auto__);
var G__1013 = (0);
seq__972 = G__1010;
chunk__973 = G__1011;
count__974 = G__1012;
i__975 = G__1013;
continue;
} else {
var star = cljs.core.first.call(null,seq__972__$1);
var map__988_1014 = star;
var map__988_1015__$1 = cljs.core.__destructure_map.call(null,map__988_1014);
var h_distance_1016 = cljs.core.get.call(null,map__988_1015__$1,new cljs.core.Keyword(null,"h-distance","h-distance",-309556309));
var v_distance_1017 = cljs.core.get.call(null,map__988_1015__$1,new cljs.core.Keyword(null,"v-distance","v-distance",489555828));
var luminosity_1018 = cljs.core.get.call(null,map__988_1015__$1,new cljs.core.Keyword(null,"luminosity","luminosity",-483901643));
var angle_1019 = cljs.core.get.call(null,map__988_1015__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var rd_1020 = (h * (v_distance_1017 / h_distance_1016));
var vec__989_1021 = spacewar.vector.from_angular.call(null,rd_1020,angle_1019);
var rx_1022 = cljs.core.nth.call(null,vec__989_1021,(0),null);
var ry_1023 = cljs.core.nth.call(null,vec__989_1021,(1),null);
var sx_1024 = ((rx_1022 + x) + (w / (2)));
var sy_1025 = ((ry_1023 + y) + (h / (2)));
var m_1026 = (luminosity_1018 / Math.sqrt(((h_distance_1016 * h_distance_1016) + (v_distance_1017 * v_distance_1017))));
var sz_1027 = spacewar.ui.front_view.star_size.call(null,m_1026);
if(spacewar.ui.front_view.star_in_frame.call(null,self__.state,sx_1024,sy_1025)){
cljs.core.apply.call(null,quil.core.fill,spacewar.ui.front_view.star_color.call(null,m_1026));

quil.core.ellipse_mode.call(null,new cljs.core.Keyword(null,"corner","corner",1296717125));

quil.core.ellipse.call(null,sx_1024,sy_1025,sz_1027,sz_1027);
} else {
}


var G__1028 = cljs.core.next.call(null,seq__972__$1);
var G__1029 = null;
var G__1030 = (0);
var G__1031 = (0);
seq__972 = G__1028;
chunk__973 = G__1029;
count__974 = G__1030;
i__975 = G__1031;
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
