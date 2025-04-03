// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('spacewar.ui.strategic_scan');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('spacewar.geometry');
goog.require('spacewar.ui.config');
goog.require('spacewar.ui.icons');
goog.require('spacewar.game_logic.config');
goog.require('spacewar.ui.protocols');
goog.require('spacewar.vector');
spacewar.ui.strategic_scan.draw_background = (function spacewar$ui$strategic_scan$draw_background(state){
var map__764 = state;
var map__764__$1 = cljs.core.__destructure_map.call(null,map__764);
var w = cljs.core.get.call(null,map__764__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__764__$1,new cljs.core.Keyword(null,"h","h",1109658740));
quil.core.fill.call(null,(0),(0),(0));

quil.core.rect_mode.call(null,new cljs.core.Keyword(null,"corner","corner",1296717125));

return quil.core.rect.call(null,(0),(0),w,h);
});
spacewar.ui.strategic_scan.draw_stars = (function spacewar$ui$strategic_scan$draw_stars(state){
var map__765 = state;
var map__765__$1 = cljs.core.__destructure_map.call(null,map__765);
var stars = cljs.core.get.call(null,map__765__$1,new cljs.core.Keyword(null,"stars","stars",-556837771));
var pixel_width = cljs.core.get.call(null,map__765__$1,new cljs.core.Keyword(null,"pixel-width","pixel-width",462101859));
var ship = cljs.core.get.call(null,map__765__$1,new cljs.core.Keyword(null,"ship","ship",197863473));
var sx = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship);
var sy = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ship);
if(cljs.core.truth_(stars)){
quil.core.no_stroke.call(null);

quil.core.ellipse_mode.call(null,new cljs.core.Keyword(null,"center","center",-748944368));

var seq__766 = cljs.core.seq.call(null,stars);
var chunk__767 = null;
var count__768 = (0);
var i__769 = (0);
while(true){
if((i__769 < count__768)){
var map__772 = cljs.core._nth.call(null,chunk__767,i__769);
var map__772__$1 = cljs.core.__destructure_map.call(null,map__772);
var star = map__772__$1;
var x = cljs.core.get.call(null,map__772__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__772__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var tr__794__auto___774 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x - sx) * pixel_width),((y - sy) * pixel_width)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__794__auto___774);

spacewar.ui.icons.draw_star_icon.call(null,star);
}finally {quil.core.pop_matrix.call(null);
}

var G__775 = seq__766;
var G__776 = chunk__767;
var G__777 = count__768;
var G__778 = (i__769 + (1));
seq__766 = G__775;
chunk__767 = G__776;
count__768 = G__777;
i__769 = G__778;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__766);
if(temp__5804__auto__){
var seq__766__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__766__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__766__$1);
var G__779 = cljs.core.chunk_rest.call(null,seq__766__$1);
var G__780 = c__5525__auto__;
var G__781 = cljs.core.count.call(null,c__5525__auto__);
var G__782 = (0);
seq__766 = G__779;
chunk__767 = G__780;
count__768 = G__781;
i__769 = G__782;
continue;
} else {
var map__773 = cljs.core.first.call(null,seq__766__$1);
var map__773__$1 = cljs.core.__destructure_map.call(null,map__773);
var star = map__773__$1;
var x = cljs.core.get.call(null,map__773__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__773__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var tr__794__auto___783 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x - sx) * pixel_width),((y - sy) * pixel_width)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__794__auto___783);

spacewar.ui.icons.draw_star_icon.call(null,star);
}finally {quil.core.pop_matrix.call(null);
}

var G__784 = cljs.core.next.call(null,seq__766__$1);
var G__785 = null;
var G__786 = (0);
var G__787 = (0);
seq__766 = G__784;
chunk__767 = G__785;
count__768 = G__786;
i__769 = G__787;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
spacewar.ui.strategic_scan.draw_klingons = (function spacewar$ui$strategic_scan$draw_klingons(state){
var map__788 = state;
var map__788__$1 = cljs.core.__destructure_map.call(null,map__788);
var klingons = cljs.core.get.call(null,map__788__$1,new cljs.core.Keyword(null,"klingons","klingons",-1228954811));
var pixel_width = cljs.core.get.call(null,map__788__$1,new cljs.core.Keyword(null,"pixel-width","pixel-width",462101859));
var ship = cljs.core.get.call(null,map__788__$1,new cljs.core.Keyword(null,"ship","ship",197863473));
var sx = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship);
var sy = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ship);
if(cljs.core.truth_(klingons)){
var seq__789 = cljs.core.seq.call(null,klingons);
var chunk__790 = null;
var count__791 = (0);
var i__792 = (0);
while(true){
if((i__792 < count__791)){
var map__795 = cljs.core._nth.call(null,chunk__790,i__792);
var map__795__$1 = cljs.core.__destructure_map.call(null,map__795);
var klingon = map__795__$1;
var x = cljs.core.get.call(null,map__795__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__795__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var tr__794__auto___797 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x - sx) * pixel_width),((y - sy) * pixel_width)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__794__auto___797);

spacewar.ui.icons.draw_klingon_icon.call(null,klingon);

spacewar.ui.icons.draw_klingon_counts.call(null,klingon);
}finally {quil.core.pop_matrix.call(null);
}

var G__798 = seq__789;
var G__799 = chunk__790;
var G__800 = count__791;
var G__801 = (i__792 + (1));
seq__789 = G__798;
chunk__790 = G__799;
count__791 = G__800;
i__792 = G__801;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__789);
if(temp__5804__auto__){
var seq__789__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__789__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__789__$1);
var G__802 = cljs.core.chunk_rest.call(null,seq__789__$1);
var G__803 = c__5525__auto__;
var G__804 = cljs.core.count.call(null,c__5525__auto__);
var G__805 = (0);
seq__789 = G__802;
chunk__790 = G__803;
count__791 = G__804;
i__792 = G__805;
continue;
} else {
var map__796 = cljs.core.first.call(null,seq__789__$1);
var map__796__$1 = cljs.core.__destructure_map.call(null,map__796);
var klingon = map__796__$1;
var x = cljs.core.get.call(null,map__796__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__796__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var tr__794__auto___806 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x - sx) * pixel_width),((y - sy) * pixel_width)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__794__auto___806);

spacewar.ui.icons.draw_klingon_icon.call(null,klingon);

spacewar.ui.icons.draw_klingon_counts.call(null,klingon);
}finally {quil.core.pop_matrix.call(null);
}

var G__807 = cljs.core.next.call(null,seq__789__$1);
var G__808 = null;
var G__809 = (0);
var G__810 = (0);
seq__789 = G__807;
chunk__790 = G__808;
count__791 = G__809;
i__792 = G__810;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
spacewar.ui.strategic_scan.draw_romulans = (function spacewar$ui$strategic_scan$draw_romulans(state){
var map__811 = state;
var map__811__$1 = cljs.core.__destructure_map.call(null,map__811);
var romulans = cljs.core.get.call(null,map__811__$1,new cljs.core.Keyword(null,"romulans","romulans",1249513588));
var pixel_width = cljs.core.get.call(null,map__811__$1,new cljs.core.Keyword(null,"pixel-width","pixel-width",462101859));
var ship = cljs.core.get.call(null,map__811__$1,new cljs.core.Keyword(null,"ship","ship",197863473));
var sx = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship);
var sy = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ship);
if(cljs.core.truth_(romulans)){
var seq__812 = cljs.core.seq.call(null,romulans);
var chunk__813 = null;
var count__814 = (0);
var i__815 = (0);
while(true){
if((i__815 < count__814)){
var map__818 = cljs.core._nth.call(null,chunk__813,i__815);
var map__818__$1 = cljs.core.__destructure_map.call(null,map__818);
var x = cljs.core.get.call(null,map__818__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__818__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var tr__794__auto___820 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x - sx) * pixel_width),((y - sy) * pixel_width)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__794__auto___820);

spacewar.ui.icons.draw_strategic_romulan.call(null);
}finally {quil.core.pop_matrix.call(null);
}

var G__821 = seq__812;
var G__822 = chunk__813;
var G__823 = count__814;
var G__824 = (i__815 + (1));
seq__812 = G__821;
chunk__813 = G__822;
count__814 = G__823;
i__815 = G__824;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__812);
if(temp__5804__auto__){
var seq__812__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__812__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__812__$1);
var G__825 = cljs.core.chunk_rest.call(null,seq__812__$1);
var G__826 = c__5525__auto__;
var G__827 = cljs.core.count.call(null,c__5525__auto__);
var G__828 = (0);
seq__812 = G__825;
chunk__813 = G__826;
count__814 = G__827;
i__815 = G__828;
continue;
} else {
var map__819 = cljs.core.first.call(null,seq__812__$1);
var map__819__$1 = cljs.core.__destructure_map.call(null,map__819);
var x = cljs.core.get.call(null,map__819__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__819__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var tr__794__auto___829 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x - sx) * pixel_width),((y - sy) * pixel_width)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__794__auto___829);

spacewar.ui.icons.draw_strategic_romulan.call(null);
}finally {quil.core.pop_matrix.call(null);
}

var G__830 = cljs.core.next.call(null,seq__812__$1);
var G__831 = null;
var G__832 = (0);
var G__833 = (0);
seq__812 = G__830;
chunk__813 = G__831;
count__814 = G__832;
i__815 = G__833;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
spacewar.ui.strategic_scan.draw_ship = (function spacewar$ui$strategic_scan$draw_ship(state){
var heading = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})();
var velocity = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}
})();
var vec__834 = spacewar.vector.scale.call(null,spacewar.ui.config.velocity_vector_scale,velocity);
var vx = cljs.core.nth.call(null,vec__834,(0),null);
var vy = cljs.core.nth.call(null,vec__834,(1),null);
var radians = spacewar.geometry.__GT_radians.call(null,heading);
return spacewar.ui.icons.draw_ship_icon.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vx,vy], null),radians,new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(state));
});
spacewar.ui.strategic_scan.draw_bases = (function spacewar$ui$strategic_scan$draw_bases(state){
var map__837 = state;
var map__837__$1 = cljs.core.__destructure_map.call(null,map__837);
var bases = cljs.core.get.call(null,map__837__$1,new cljs.core.Keyword(null,"bases","bases",-1036892420));
var pixel_width = cljs.core.get.call(null,map__837__$1,new cljs.core.Keyword(null,"pixel-width","pixel-width",462101859));
var ship = cljs.core.get.call(null,map__837__$1,new cljs.core.Keyword(null,"ship","ship",197863473));
var sx = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship);
var sy = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ship);
if(cljs.core.truth_(bases)){
var seq__838 = cljs.core.seq.call(null,bases);
var chunk__839 = null;
var count__840 = (0);
var i__841 = (0);
while(true){
if((i__841 < count__840)){
var map__844 = cljs.core._nth.call(null,chunk__839,i__841);
var map__844__$1 = cljs.core.__destructure_map.call(null,map__844);
var base = map__844__$1;
var x = cljs.core.get.call(null,map__844__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__844__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var tr__794__auto___846 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x - sx) * pixel_width),((y - sy) * pixel_width)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__794__auto___846);

spacewar.ui.icons.draw_base_icon.call(null,base);
}finally {quil.core.pop_matrix.call(null);
}

var G__847 = seq__838;
var G__848 = chunk__839;
var G__849 = count__840;
var G__850 = (i__841 + (1));
seq__838 = G__847;
chunk__839 = G__848;
count__840 = G__849;
i__841 = G__850;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__838);
if(temp__5804__auto__){
var seq__838__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__838__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__838__$1);
var G__851 = cljs.core.chunk_rest.call(null,seq__838__$1);
var G__852 = c__5525__auto__;
var G__853 = cljs.core.count.call(null,c__5525__auto__);
var G__854 = (0);
seq__838 = G__851;
chunk__839 = G__852;
count__840 = G__853;
i__841 = G__854;
continue;
} else {
var map__845 = cljs.core.first.call(null,seq__838__$1);
var map__845__$1 = cljs.core.__destructure_map.call(null,map__845);
var base = map__845__$1;
var x = cljs.core.get.call(null,map__845__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__845__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var tr__794__auto___855 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x - sx) * pixel_width),((y - sy) * pixel_width)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__794__auto___855);

spacewar.ui.icons.draw_base_icon.call(null,base);
}finally {quil.core.pop_matrix.call(null);
}

var G__856 = cljs.core.next.call(null,seq__838__$1);
var G__857 = null;
var G__858 = (0);
var G__859 = (0);
seq__838 = G__856;
chunk__839 = G__857;
count__840 = G__858;
i__841 = G__859;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
spacewar.ui.strategic_scan.draw_transport_routes = (function spacewar$ui$strategic_scan$draw_transport_routes(state){
cljs.core.apply.call(null,quil.core.stroke,spacewar.ui.config.transport_route_color);

quil.core.stroke_weight.call(null,(3));

var map__860 = state;
var map__860__$1 = cljs.core.__destructure_map.call(null,map__860);
var pixel_width = cljs.core.get.call(null,map__860__$1,new cljs.core.Keyword(null,"pixel-width","pixel-width",462101859));
var ship = cljs.core.get.call(null,map__860__$1,new cljs.core.Keyword(null,"ship","ship",197863473));
var transport_routes = cljs.core.get.call(null,map__860__$1,new cljs.core.Keyword(null,"transport-routes","transport-routes",1028896693));
var sx = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship);
var sy = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ship);
var seq__861 = cljs.core.seq.call(null,transport_routes);
var chunk__862 = null;
var count__863 = (0);
var i__864 = (0);
while(true){
if((i__864 < count__863)){
var route = cljs.core._nth.call(null,chunk__862,i__864);
var b1_865 = cljs.core.first.call(null,route);
var b2_866 = cljs.core.second.call(null,route);
var b1x_867 = ((cljs.core.first.call(null,b1_865) - sx) * pixel_width);
var b1y_868 = ((cljs.core.second.call(null,b1_865) - sy) * pixel_width);
var b2x_869 = ((cljs.core.first.call(null,b2_866) - sx) * pixel_width);
var b2y_870 = ((cljs.core.second.call(null,b2_866) - sy) * pixel_width);
quil.core.line.call(null,b1x_867,b1y_868,b2x_869,b2y_870);


var G__871 = seq__861;
var G__872 = chunk__862;
var G__873 = count__863;
var G__874 = (i__864 + (1));
seq__861 = G__871;
chunk__862 = G__872;
count__863 = G__873;
i__864 = G__874;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__861);
if(temp__5804__auto__){
var seq__861__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__861__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__861__$1);
var G__875 = cljs.core.chunk_rest.call(null,seq__861__$1);
var G__876 = c__5525__auto__;
var G__877 = cljs.core.count.call(null,c__5525__auto__);
var G__878 = (0);
seq__861 = G__875;
chunk__862 = G__876;
count__863 = G__877;
i__864 = G__878;
continue;
} else {
var route = cljs.core.first.call(null,seq__861__$1);
var b1_879 = cljs.core.first.call(null,route);
var b2_880 = cljs.core.second.call(null,route);
var b1x_881 = ((cljs.core.first.call(null,b1_879) - sx) * pixel_width);
var b1y_882 = ((cljs.core.second.call(null,b1_879) - sy) * pixel_width);
var b2x_883 = ((cljs.core.first.call(null,b2_880) - sx) * pixel_width);
var b2y_884 = ((cljs.core.second.call(null,b2_880) - sy) * pixel_width);
quil.core.line.call(null,b1x_881,b1y_882,b2x_883,b2y_884);


var G__885 = cljs.core.next.call(null,seq__861__$1);
var G__886 = null;
var G__887 = (0);
var G__888 = (0);
seq__861 = G__885;
chunk__862 = G__886;
count__863 = G__887;
i__864 = G__888;
continue;
}
} else {
return null;
}
}
break;
}
});
spacewar.ui.strategic_scan.draw_transports = (function spacewar$ui$strategic_scan$draw_transports(state){
var map__889 = state;
var map__889__$1 = cljs.core.__destructure_map.call(null,map__889);
var transports = cljs.core.get.call(null,map__889__$1,new cljs.core.Keyword(null,"transports","transports",1151421269));
var pixel_width = cljs.core.get.call(null,map__889__$1,new cljs.core.Keyword(null,"pixel-width","pixel-width",462101859));
var ship = cljs.core.get.call(null,map__889__$1,new cljs.core.Keyword(null,"ship","ship",197863473));
var seq__890 = cljs.core.seq.call(null,transports);
var chunk__891 = null;
var count__892 = (0);
var i__893 = (0);
while(true){
if((i__893 < count__892)){
var transport = cljs.core._nth.call(null,chunk__891,i__893);
var sx_894 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship);
var sy_895 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ship);
var tx_896 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(transport);
var ty_897 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(transport);
var x_898 = ((tx_896 - sx_894) * pixel_width);
var y_899 = ((ty_897 - sy_895) * pixel_width);
var tr__794__auto___900 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_898,y_899], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__794__auto___900);

spacewar.ui.icons.draw_transport_icon.call(null,transport);
}finally {quil.core.pop_matrix.call(null);
}

var G__901 = seq__890;
var G__902 = chunk__891;
var G__903 = count__892;
var G__904 = (i__893 + (1));
seq__890 = G__901;
chunk__891 = G__902;
count__892 = G__903;
i__893 = G__904;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__890);
if(temp__5804__auto__){
var seq__890__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__890__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__890__$1);
var G__905 = cljs.core.chunk_rest.call(null,seq__890__$1);
var G__906 = c__5525__auto__;
var G__907 = cljs.core.count.call(null,c__5525__auto__);
var G__908 = (0);
seq__890 = G__905;
chunk__891 = G__906;
count__892 = G__907;
i__893 = G__908;
continue;
} else {
var transport = cljs.core.first.call(null,seq__890__$1);
var sx_909 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship);
var sy_910 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ship);
var tx_911 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(transport);
var ty_912 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(transport);
var x_913 = ((tx_911 - sx_909) * pixel_width);
var y_914 = ((ty_912 - sy_910) * pixel_width);
var tr__794__auto___915 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_913,y_914], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__794__auto___915);

spacewar.ui.icons.draw_transport_icon.call(null,transport);
}finally {quil.core.pop_matrix.call(null);
}

var G__916 = cljs.core.next.call(null,seq__890__$1);
var G__917 = null;
var G__918 = (0);
var G__919 = (0);
seq__890 = G__916;
chunk__891 = G__917;
count__892 = G__918;
i__893 = G__919;
continue;
}
} else {
return null;
}
}
break;
}
});
spacewar.ui.strategic_scan.draw_sectors = (function spacewar$ui$strategic_scan$draw_sectors(state){
var map__920 = state;
var map__920__$1 = cljs.core.__destructure_map.call(null,map__920);
var pixel_width = cljs.core.get.call(null,map__920__$1,new cljs.core.Keyword(null,"pixel-width","pixel-width",462101859));
var ship = cljs.core.get.call(null,map__920__$1,new cljs.core.Keyword(null,"ship","ship",197863473));
var sx = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship);
var sy = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ship);
var x__GT_frame = (function (x){
return (pixel_width * (x - sx));
});
var y__GT_frame = (function (y){
return (pixel_width * (y - sy));
});
quil.core.stroke_weight.call(null,(1));

cljs.core.apply.call(null,quil.core.stroke,cljs.core.conj.call(null,spacewar.ui.config.white,(100)));

var seq__921_929 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),spacewar.game_logic.config.known_space_x,spacewar.game_logic.config.strategic_range));
var chunk__922_930 = null;
var count__923_931 = (0);
var i__924_932 = (0);
while(true){
if((i__924_932 < count__923_931)){
var x_933 = cljs.core._nth.call(null,chunk__922_930,i__924_932);
quil.core.line.call(null,x__GT_frame.call(null,x_933),y__GT_frame.call(null,(0)),x__GT_frame.call(null,x_933),y__GT_frame.call(null,spacewar.game_logic.config.known_space_y));


var G__934 = seq__921_929;
var G__935 = chunk__922_930;
var G__936 = count__923_931;
var G__937 = (i__924_932 + (1));
seq__921_929 = G__934;
chunk__922_930 = G__935;
count__923_931 = G__936;
i__924_932 = G__937;
continue;
} else {
var temp__5804__auto___938 = cljs.core.seq.call(null,seq__921_929);
if(temp__5804__auto___938){
var seq__921_939__$1 = temp__5804__auto___938;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__921_939__$1)){
var c__5525__auto___940 = cljs.core.chunk_first.call(null,seq__921_939__$1);
var G__941 = cljs.core.chunk_rest.call(null,seq__921_939__$1);
var G__942 = c__5525__auto___940;
var G__943 = cljs.core.count.call(null,c__5525__auto___940);
var G__944 = (0);
seq__921_929 = G__941;
chunk__922_930 = G__942;
count__923_931 = G__943;
i__924_932 = G__944;
continue;
} else {
var x_945 = cljs.core.first.call(null,seq__921_939__$1);
quil.core.line.call(null,x__GT_frame.call(null,x_945),y__GT_frame.call(null,(0)),x__GT_frame.call(null,x_945),y__GT_frame.call(null,spacewar.game_logic.config.known_space_y));


var G__946 = cljs.core.next.call(null,seq__921_939__$1);
var G__947 = null;
var G__948 = (0);
var G__949 = (0);
seq__921_929 = G__946;
chunk__922_930 = G__947;
count__923_931 = G__948;
i__924_932 = G__949;
continue;
}
} else {
}
}
break;
}

var seq__925 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),spacewar.game_logic.config.known_space_y,spacewar.game_logic.config.strategic_range));
var chunk__926 = null;
var count__927 = (0);
var i__928 = (0);
while(true){
if((i__928 < count__927)){
var y = cljs.core._nth.call(null,chunk__926,i__928);
quil.core.line.call(null,x__GT_frame.call(null,(0)),y__GT_frame.call(null,y),x__GT_frame.call(null,spacewar.game_logic.config.known_space_x),y__GT_frame.call(null,y));


var G__950 = seq__925;
var G__951 = chunk__926;
var G__952 = count__927;
var G__953 = (i__928 + (1));
seq__925 = G__950;
chunk__926 = G__951;
count__927 = G__952;
i__928 = G__953;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__925);
if(temp__5804__auto__){
var seq__925__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__925__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__925__$1);
var G__954 = cljs.core.chunk_rest.call(null,seq__925__$1);
var G__955 = c__5525__auto__;
var G__956 = cljs.core.count.call(null,c__5525__auto__);
var G__957 = (0);
seq__925 = G__954;
chunk__926 = G__955;
count__927 = G__956;
i__928 = G__957;
continue;
} else {
var y = cljs.core.first.call(null,seq__925__$1);
quil.core.line.call(null,x__GT_frame.call(null,(0)),y__GT_frame.call(null,y),x__GT_frame.call(null,spacewar.game_logic.config.known_space_x),y__GT_frame.call(null,y));


var G__958 = cljs.core.next.call(null,seq__925__$1);
var G__959 = null;
var G__960 = (0);
var G__961 = (0);
seq__925 = G__958;
chunk__926 = G__959;
count__927 = G__960;
i__928 = G__961;
continue;
}
} else {
return null;
}
}
break;
}
});
spacewar.ui.strategic_scan.click__GT_pos = (function spacewar$ui$strategic_scan$click__GT_pos(strategic_scan,ship,click){
var map__962 = strategic_scan;
var map__962__$1 = cljs.core.__destructure_map.call(null,map__962);
var x = cljs.core.get.call(null,map__962__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__962__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__962__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__962__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var pixel_width = cljs.core.get.call(null,map__962__$1,new cljs.core.Keyword(null,"pixel-width","pixel-width",462101859));
var center = spacewar.vector.add.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(w / (2)),(h / (2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var click_delta = spacewar.vector.subtract.call(null,click,center);
var scale = (1.0 / pixel_width);
var strategic_click_delta = spacewar.vector.scale.call(null,scale,click_delta);
return spacewar.vector.add.call(null,strategic_click_delta,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ship)], null));
});

/**
* @constructor
 * @implements {spacewar.ui.protocols.Drawable}
*/
spacewar.ui.strategic_scan.strategic_scan = (function (state){
this.state = state;
});
(spacewar.ui.strategic_scan.strategic_scan.prototype.spacewar$ui$protocols$Drawable$ = cljs.core.PROTOCOL_SENTINEL);

(spacewar.ui.strategic_scan.strategic_scan.prototype.spacewar$ui$protocols$Drawable$draw$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__963 = self__.state;
var map__963__$1 = cljs.core.__destructure_map.call(null,map__963);
var x = cljs.core.get.call(null,map__963__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__963__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__963__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__963__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var tr__794__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (w / (2))),(y + (h / (2)))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__794__auto__);

spacewar.ui.strategic_scan.draw_stars.call(null,self__.state);

spacewar.ui.strategic_scan.draw_transport_routes.call(null,self__.state);

spacewar.ui.strategic_scan.draw_transports.call(null,self__.state);

spacewar.ui.strategic_scan.draw_bases.call(null,self__.state);

spacewar.ui.strategic_scan.draw_klingons.call(null,self__.state);

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"destroyed","destroyed",-427566535).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(self__.state)))){
spacewar.ui.strategic_scan.draw_ship.call(null,self__.state);
} else {
}

spacewar.ui.strategic_scan.draw_romulans.call(null,self__.state);

return spacewar.ui.strategic_scan.draw_sectors.call(null,self__.state);
}finally {quil.core.pop_matrix.call(null);
}}));

(spacewar.ui.strategic_scan.strategic_scan.prototype.spacewar$ui$protocols$Drawable$setup$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new spacewar.ui.strategic_scan.strategic_scan(cljs.core.assoc.call(null,self__.state,new cljs.core.Keyword(null,"pixel-width","pixel-width",462101859),(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(self__.state) / spacewar.game_logic.config.strategic_range))));
}));

(spacewar.ui.strategic_scan.strategic_scan.prototype.spacewar$ui$protocols$Drawable$update_state$arity$2 = (function (_,world){
var self__ = this;
var ___$1 = this;
var map__964 = self__.state;
var map__964__$1 = cljs.core.__destructure_map.call(null,map__964);
var x = cljs.core.get.call(null,map__964__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__964__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__964__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__964__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var ship = new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(world);
var scale = new cljs.core.Keyword(null,"strat-scale","strat-scale",-510133488).cljs$core$IFn$_invoke$arity$1(ship);
var range = (scale * spacewar.game_logic.config.strategic_range);
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
var key = (function (){var and__5000__auto__ = quil.core.key_pressed_QMARK_.call(null);
if(cljs.core.truth_(and__5000__auto__)){
return quil.core.key_as_keyword.call(null);
} else {
return and__5000__auto__;
}
})();
var event = (cljs.core.truth_(left_up)?(function (){var pred__965 = cljs.core._EQ_;
var expr__966 = key;
if(cljs.core.truth_(pred__965.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__966))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"debug-position-ship","debug-position-ship",1001388142),new cljs.core.Keyword(null,"pos","pos",-864607220),spacewar.ui.strategic_scan.click__GT_pos.call(null,state__$1,ship,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null))], null);
} else {
if(cljs.core.truth_(pred__965.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__966))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"debug-add-klingon","debug-add-klingon",-1401441744),new cljs.core.Keyword(null,"pos","pos",-864607220),spacewar.ui.strategic_scan.click__GT_pos.call(null,state__$1,ship,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null))], null);
} else {
if(cljs.core.truth_(pred__965.call(null,new cljs.core.Keyword(null,"r","r",-471384190),expr__966))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"debug-resupply-ship","debug-resupply-ship",1653705279)], null);
} else {
if(cljs.core.truth_(pred__965.call(null,new cljs.core.Keyword(null,"K","K",711741),expr__966))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"debug-new-klingon-from-praxis","debug-new-klingon-from-praxis",1326159196)], null);
} else {
if(cljs.core.truth_(pred__965.call(null,new cljs.core.Keyword(null,"c","c",-1763192079),expr__966))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"debug-corbomite-device-installed","debug-corbomite-device-installed",247596390)], null);
} else {
return null;
}
}
}
}
}
})():null);
return spacewar.ui.protocols.pack_update.call(null,(new spacewar.ui.strategic_scan.strategic_scan(cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"game-over-timer","game-over-timer",321758852),new cljs.core.Keyword(null,"game-over-timer","game-over-timer",321758852).cljs$core$IFn$_invoke$arity$1(world),new cljs.core.Keyword(null,"stars","stars",-556837771),new cljs.core.Keyword(null,"stars","stars",-556837771).cljs$core$IFn$_invoke$arity$1(world),new cljs.core.Keyword(null,"klingons","klingons",-1228954811),new cljs.core.Keyword(null,"klingons","klingons",-1228954811).cljs$core$IFn$_invoke$arity$1(world),new cljs.core.Keyword(null,"romulans","romulans",1249513588),new cljs.core.Keyword(null,"romulans","romulans",1249513588).cljs$core$IFn$_invoke$arity$1(world),new cljs.core.Keyword(null,"ship","ship",197863473),ship,new cljs.core.Keyword(null,"bases","bases",-1036892420),new cljs.core.Keyword(null,"bases","bases",-1036892420).cljs$core$IFn$_invoke$arity$1(world),new cljs.core.Keyword(null,"transport-routes","transport-routes",1028896693),new cljs.core.Keyword(null,"transport-routes","transport-routes",1028896693).cljs$core$IFn$_invoke$arity$1(world),new cljs.core.Keyword(null,"transports","transports",1151421269),new cljs.core.Keyword(null,"transports","transports",1151421269).cljs$core$IFn$_invoke$arity$1(world),new cljs.core.Keyword(null,"pixel-width","pixel-width",462101859),(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(state__$1) / range),new cljs.core.Keyword(null,"sector-top-left","sector-top-left",223737478),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)))),event);
}));

(spacewar.ui.strategic_scan.strategic_scan.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
}));

(spacewar.ui.strategic_scan.strategic_scan.cljs$lang$type = true);

(spacewar.ui.strategic_scan.strategic_scan.cljs$lang$ctorStr = "spacewar.ui.strategic-scan/strategic-scan");

(spacewar.ui.strategic_scan.strategic_scan.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"spacewar.ui.strategic-scan/strategic-scan");
}));

/**
 * Positional factory function for spacewar.ui.strategic-scan/strategic-scan.
 */
spacewar.ui.strategic_scan.__GT_strategic_scan = (function spacewar$ui$strategic_scan$__GT_strategic_scan(state){
return (new spacewar.ui.strategic_scan.strategic_scan(state));
});


//# sourceMappingURL=strategic_scan.js.map
