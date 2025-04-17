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
var map__766 = state;
var map__766__$1 = cljs.core.__destructure_map.call(null,map__766);
var w = cljs.core.get.call(null,map__766__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__766__$1,new cljs.core.Keyword(null,"h","h",1109658740));
quil.core.fill.call(null,(0),(0),(0));

quil.core.rect_mode.call(null,new cljs.core.Keyword(null,"corner","corner",1296717125));

return quil.core.rect.call(null,(0),(0),w,h);
});
spacewar.ui.strategic_scan.draw_stars = (function spacewar$ui$strategic_scan$draw_stars(state){
var map__767 = state;
var map__767__$1 = cljs.core.__destructure_map.call(null,map__767);
var stars = cljs.core.get.call(null,map__767__$1,new cljs.core.Keyword(null,"stars","stars",-556837771));
var pixel_width = cljs.core.get.call(null,map__767__$1,new cljs.core.Keyword(null,"pixel-width","pixel-width",462101859));
var ship = cljs.core.get.call(null,map__767__$1,new cljs.core.Keyword(null,"ship","ship",197863473));
var sx = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship);
var sy = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ship);
if(cljs.core.truth_(stars)){
quil.core.no_stroke.call(null);

quil.core.ellipse_mode.call(null,new cljs.core.Keyword(null,"center","center",-748944368));

var seq__768 = cljs.core.seq.call(null,stars);
var chunk__769 = null;
var count__770 = (0);
var i__771 = (0);
while(true){
if((i__771 < count__770)){
var map__774 = cljs.core._nth.call(null,chunk__769,i__771);
var map__774__$1 = cljs.core.__destructure_map.call(null,map__774);
var star = map__774__$1;
var x = cljs.core.get.call(null,map__774__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__774__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var tr__794__auto___776 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x - sx) * pixel_width),((y - sy) * pixel_width)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__794__auto___776);

spacewar.ui.icons.draw_star_icon.call(null,star);
}finally {quil.core.pop_matrix.call(null);
}

var G__777 = seq__768;
var G__778 = chunk__769;
var G__779 = count__770;
var G__780 = (i__771 + (1));
seq__768 = G__777;
chunk__769 = G__778;
count__770 = G__779;
i__771 = G__780;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__768);
if(temp__5804__auto__){
var seq__768__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__768__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__768__$1);
var G__781 = cljs.core.chunk_rest.call(null,seq__768__$1);
var G__782 = c__5525__auto__;
var G__783 = cljs.core.count.call(null,c__5525__auto__);
var G__784 = (0);
seq__768 = G__781;
chunk__769 = G__782;
count__770 = G__783;
i__771 = G__784;
continue;
} else {
var map__775 = cljs.core.first.call(null,seq__768__$1);
var map__775__$1 = cljs.core.__destructure_map.call(null,map__775);
var star = map__775__$1;
var x = cljs.core.get.call(null,map__775__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__775__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var tr__794__auto___785 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x - sx) * pixel_width),((y - sy) * pixel_width)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__794__auto___785);

spacewar.ui.icons.draw_star_icon.call(null,star);
}finally {quil.core.pop_matrix.call(null);
}

var G__786 = cljs.core.next.call(null,seq__768__$1);
var G__787 = null;
var G__788 = (0);
var G__789 = (0);
seq__768 = G__786;
chunk__769 = G__787;
count__770 = G__788;
i__771 = G__789;
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
var map__790 = state;
var map__790__$1 = cljs.core.__destructure_map.call(null,map__790);
var klingons = cljs.core.get.call(null,map__790__$1,new cljs.core.Keyword(null,"klingons","klingons",-1228954811));
var pixel_width = cljs.core.get.call(null,map__790__$1,new cljs.core.Keyword(null,"pixel-width","pixel-width",462101859));
var ship = cljs.core.get.call(null,map__790__$1,new cljs.core.Keyword(null,"ship","ship",197863473));
var sx = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship);
var sy = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ship);
if(cljs.core.truth_(klingons)){
var seq__791 = cljs.core.seq.call(null,klingons);
var chunk__792 = null;
var count__793 = (0);
var i__794 = (0);
while(true){
if((i__794 < count__793)){
var map__797 = cljs.core._nth.call(null,chunk__792,i__794);
var map__797__$1 = cljs.core.__destructure_map.call(null,map__797);
var klingon = map__797__$1;
var x = cljs.core.get.call(null,map__797__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__797__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var tr__794__auto___799 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x - sx) * pixel_width),((y - sy) * pixel_width)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__794__auto___799);

spacewar.ui.icons.draw_klingon_icon.call(null,klingon);

spacewar.ui.icons.draw_klingon_counts.call(null,klingon);
}finally {quil.core.pop_matrix.call(null);
}

var G__800 = seq__791;
var G__801 = chunk__792;
var G__802 = count__793;
var G__803 = (i__794 + (1));
seq__791 = G__800;
chunk__792 = G__801;
count__793 = G__802;
i__794 = G__803;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__791);
if(temp__5804__auto__){
var seq__791__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__791__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__791__$1);
var G__804 = cljs.core.chunk_rest.call(null,seq__791__$1);
var G__805 = c__5525__auto__;
var G__806 = cljs.core.count.call(null,c__5525__auto__);
var G__807 = (0);
seq__791 = G__804;
chunk__792 = G__805;
count__793 = G__806;
i__794 = G__807;
continue;
} else {
var map__798 = cljs.core.first.call(null,seq__791__$1);
var map__798__$1 = cljs.core.__destructure_map.call(null,map__798);
var klingon = map__798__$1;
var x = cljs.core.get.call(null,map__798__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__798__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var tr__794__auto___808 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x - sx) * pixel_width),((y - sy) * pixel_width)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__794__auto___808);

spacewar.ui.icons.draw_klingon_icon.call(null,klingon);

spacewar.ui.icons.draw_klingon_counts.call(null,klingon);
}finally {quil.core.pop_matrix.call(null);
}

var G__809 = cljs.core.next.call(null,seq__791__$1);
var G__810 = null;
var G__811 = (0);
var G__812 = (0);
seq__791 = G__809;
chunk__792 = G__810;
count__793 = G__811;
i__794 = G__812;
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
var map__813 = state;
var map__813__$1 = cljs.core.__destructure_map.call(null,map__813);
var romulans = cljs.core.get.call(null,map__813__$1,new cljs.core.Keyword(null,"romulans","romulans",1249513588));
var pixel_width = cljs.core.get.call(null,map__813__$1,new cljs.core.Keyword(null,"pixel-width","pixel-width",462101859));
var ship = cljs.core.get.call(null,map__813__$1,new cljs.core.Keyword(null,"ship","ship",197863473));
var sx = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship);
var sy = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ship);
if(cljs.core.truth_(romulans)){
var seq__814 = cljs.core.seq.call(null,romulans);
var chunk__815 = null;
var count__816 = (0);
var i__817 = (0);
while(true){
if((i__817 < count__816)){
var map__820 = cljs.core._nth.call(null,chunk__815,i__817);
var map__820__$1 = cljs.core.__destructure_map.call(null,map__820);
var x = cljs.core.get.call(null,map__820__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__820__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var tr__794__auto___822 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x - sx) * pixel_width),((y - sy) * pixel_width)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__794__auto___822);

spacewar.ui.icons.draw_strategic_romulan.call(null);
}finally {quil.core.pop_matrix.call(null);
}

var G__823 = seq__814;
var G__824 = chunk__815;
var G__825 = count__816;
var G__826 = (i__817 + (1));
seq__814 = G__823;
chunk__815 = G__824;
count__816 = G__825;
i__817 = G__826;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__814);
if(temp__5804__auto__){
var seq__814__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__814__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__814__$1);
var G__827 = cljs.core.chunk_rest.call(null,seq__814__$1);
var G__828 = c__5525__auto__;
var G__829 = cljs.core.count.call(null,c__5525__auto__);
var G__830 = (0);
seq__814 = G__827;
chunk__815 = G__828;
count__816 = G__829;
i__817 = G__830;
continue;
} else {
var map__821 = cljs.core.first.call(null,seq__814__$1);
var map__821__$1 = cljs.core.__destructure_map.call(null,map__821);
var x = cljs.core.get.call(null,map__821__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__821__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var tr__794__auto___831 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x - sx) * pixel_width),((y - sy) * pixel_width)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__794__auto___831);

spacewar.ui.icons.draw_strategic_romulan.call(null);
}finally {quil.core.pop_matrix.call(null);
}

var G__832 = cljs.core.next.call(null,seq__814__$1);
var G__833 = null;
var G__834 = (0);
var G__835 = (0);
seq__814 = G__832;
chunk__815 = G__833;
count__816 = G__834;
i__817 = G__835;
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
var vec__836 = spacewar.vector.scale.call(null,spacewar.ui.config.velocity_vector_scale,velocity);
var vx = cljs.core.nth.call(null,vec__836,(0),null);
var vy = cljs.core.nth.call(null,vec__836,(1),null);
var radians = spacewar.geometry.__GT_radians.call(null,heading);
return spacewar.ui.icons.draw_ship_icon.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vx,vy], null),radians,new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(state));
});
spacewar.ui.strategic_scan.draw_bases = (function spacewar$ui$strategic_scan$draw_bases(state){
var map__839 = state;
var map__839__$1 = cljs.core.__destructure_map.call(null,map__839);
var bases = cljs.core.get.call(null,map__839__$1,new cljs.core.Keyword(null,"bases","bases",-1036892420));
var pixel_width = cljs.core.get.call(null,map__839__$1,new cljs.core.Keyword(null,"pixel-width","pixel-width",462101859));
var ship = cljs.core.get.call(null,map__839__$1,new cljs.core.Keyword(null,"ship","ship",197863473));
var sx = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship);
var sy = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ship);
if(cljs.core.truth_(bases)){
var seq__840 = cljs.core.seq.call(null,bases);
var chunk__841 = null;
var count__842 = (0);
var i__843 = (0);
while(true){
if((i__843 < count__842)){
var map__846 = cljs.core._nth.call(null,chunk__841,i__843);
var map__846__$1 = cljs.core.__destructure_map.call(null,map__846);
var base = map__846__$1;
var x = cljs.core.get.call(null,map__846__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__846__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var tr__794__auto___848 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x - sx) * pixel_width),((y - sy) * pixel_width)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__794__auto___848);

spacewar.ui.icons.draw_base_icon.call(null,base);
}finally {quil.core.pop_matrix.call(null);
}

var G__849 = seq__840;
var G__850 = chunk__841;
var G__851 = count__842;
var G__852 = (i__843 + (1));
seq__840 = G__849;
chunk__841 = G__850;
count__842 = G__851;
i__843 = G__852;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__840);
if(temp__5804__auto__){
var seq__840__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__840__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__840__$1);
var G__853 = cljs.core.chunk_rest.call(null,seq__840__$1);
var G__854 = c__5525__auto__;
var G__855 = cljs.core.count.call(null,c__5525__auto__);
var G__856 = (0);
seq__840 = G__853;
chunk__841 = G__854;
count__842 = G__855;
i__843 = G__856;
continue;
} else {
var map__847 = cljs.core.first.call(null,seq__840__$1);
var map__847__$1 = cljs.core.__destructure_map.call(null,map__847);
var base = map__847__$1;
var x = cljs.core.get.call(null,map__847__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__847__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var tr__794__auto___857 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x - sx) * pixel_width),((y - sy) * pixel_width)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__794__auto___857);

spacewar.ui.icons.draw_base_icon.call(null,base);
}finally {quil.core.pop_matrix.call(null);
}

var G__858 = cljs.core.next.call(null,seq__840__$1);
var G__859 = null;
var G__860 = (0);
var G__861 = (0);
seq__840 = G__858;
chunk__841 = G__859;
count__842 = G__860;
i__843 = G__861;
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

var map__862 = state;
var map__862__$1 = cljs.core.__destructure_map.call(null,map__862);
var pixel_width = cljs.core.get.call(null,map__862__$1,new cljs.core.Keyword(null,"pixel-width","pixel-width",462101859));
var ship = cljs.core.get.call(null,map__862__$1,new cljs.core.Keyword(null,"ship","ship",197863473));
var transport_routes = cljs.core.get.call(null,map__862__$1,new cljs.core.Keyword(null,"transport-routes","transport-routes",1028896693));
var sx = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship);
var sy = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ship);
var seq__863 = cljs.core.seq.call(null,transport_routes);
var chunk__864 = null;
var count__865 = (0);
var i__866 = (0);
while(true){
if((i__866 < count__865)){
var route = cljs.core._nth.call(null,chunk__864,i__866);
var b1_867 = cljs.core.first.call(null,route);
var b2_868 = cljs.core.second.call(null,route);
var b1x_869 = ((cljs.core.first.call(null,b1_867) - sx) * pixel_width);
var b1y_870 = ((cljs.core.second.call(null,b1_867) - sy) * pixel_width);
var b2x_871 = ((cljs.core.first.call(null,b2_868) - sx) * pixel_width);
var b2y_872 = ((cljs.core.second.call(null,b2_868) - sy) * pixel_width);
quil.core.line.call(null,b1x_869,b1y_870,b2x_871,b2y_872);


var G__873 = seq__863;
var G__874 = chunk__864;
var G__875 = count__865;
var G__876 = (i__866 + (1));
seq__863 = G__873;
chunk__864 = G__874;
count__865 = G__875;
i__866 = G__876;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__863);
if(temp__5804__auto__){
var seq__863__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__863__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__863__$1);
var G__877 = cljs.core.chunk_rest.call(null,seq__863__$1);
var G__878 = c__5525__auto__;
var G__879 = cljs.core.count.call(null,c__5525__auto__);
var G__880 = (0);
seq__863 = G__877;
chunk__864 = G__878;
count__865 = G__879;
i__866 = G__880;
continue;
} else {
var route = cljs.core.first.call(null,seq__863__$1);
var b1_881 = cljs.core.first.call(null,route);
var b2_882 = cljs.core.second.call(null,route);
var b1x_883 = ((cljs.core.first.call(null,b1_881) - sx) * pixel_width);
var b1y_884 = ((cljs.core.second.call(null,b1_881) - sy) * pixel_width);
var b2x_885 = ((cljs.core.first.call(null,b2_882) - sx) * pixel_width);
var b2y_886 = ((cljs.core.second.call(null,b2_882) - sy) * pixel_width);
quil.core.line.call(null,b1x_883,b1y_884,b2x_885,b2y_886);


var G__887 = cljs.core.next.call(null,seq__863__$1);
var G__888 = null;
var G__889 = (0);
var G__890 = (0);
seq__863 = G__887;
chunk__864 = G__888;
count__865 = G__889;
i__866 = G__890;
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
var map__891 = state;
var map__891__$1 = cljs.core.__destructure_map.call(null,map__891);
var transports = cljs.core.get.call(null,map__891__$1,new cljs.core.Keyword(null,"transports","transports",1151421269));
var pixel_width = cljs.core.get.call(null,map__891__$1,new cljs.core.Keyword(null,"pixel-width","pixel-width",462101859));
var ship = cljs.core.get.call(null,map__891__$1,new cljs.core.Keyword(null,"ship","ship",197863473));
var seq__892 = cljs.core.seq.call(null,transports);
var chunk__893 = null;
var count__894 = (0);
var i__895 = (0);
while(true){
if((i__895 < count__894)){
var transport = cljs.core._nth.call(null,chunk__893,i__895);
var sx_896 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship);
var sy_897 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ship);
var tx_898 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(transport);
var ty_899 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(transport);
var x_900 = ((tx_898 - sx_896) * pixel_width);
var y_901 = ((ty_899 - sy_897) * pixel_width);
var tr__794__auto___902 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_900,y_901], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__794__auto___902);

spacewar.ui.icons.draw_transport_icon.call(null,transport);
}finally {quil.core.pop_matrix.call(null);
}

var G__903 = seq__892;
var G__904 = chunk__893;
var G__905 = count__894;
var G__906 = (i__895 + (1));
seq__892 = G__903;
chunk__893 = G__904;
count__894 = G__905;
i__895 = G__906;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__892);
if(temp__5804__auto__){
var seq__892__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__892__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__892__$1);
var G__907 = cljs.core.chunk_rest.call(null,seq__892__$1);
var G__908 = c__5525__auto__;
var G__909 = cljs.core.count.call(null,c__5525__auto__);
var G__910 = (0);
seq__892 = G__907;
chunk__893 = G__908;
count__894 = G__909;
i__895 = G__910;
continue;
} else {
var transport = cljs.core.first.call(null,seq__892__$1);
var sx_911 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship);
var sy_912 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ship);
var tx_913 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(transport);
var ty_914 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(transport);
var x_915 = ((tx_913 - sx_911) * pixel_width);
var y_916 = ((ty_914 - sy_912) * pixel_width);
var tr__794__auto___917 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_915,y_916], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__794__auto___917);

spacewar.ui.icons.draw_transport_icon.call(null,transport);
}finally {quil.core.pop_matrix.call(null);
}

var G__918 = cljs.core.next.call(null,seq__892__$1);
var G__919 = null;
var G__920 = (0);
var G__921 = (0);
seq__892 = G__918;
chunk__893 = G__919;
count__894 = G__920;
i__895 = G__921;
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
var map__922 = state;
var map__922__$1 = cljs.core.__destructure_map.call(null,map__922);
var pixel_width = cljs.core.get.call(null,map__922__$1,new cljs.core.Keyword(null,"pixel-width","pixel-width",462101859));
var ship = cljs.core.get.call(null,map__922__$1,new cljs.core.Keyword(null,"ship","ship",197863473));
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

var seq__923_931 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),(spacewar.game_logic.config.known_space_x + (1)),spacewar.game_logic.config.strategic_range));
var chunk__924_932 = null;
var count__925_933 = (0);
var i__926_934 = (0);
while(true){
if((i__926_934 < count__925_933)){
var x_935 = cljs.core._nth.call(null,chunk__924_932,i__926_934);
var sector_x_936 = x__GT_frame.call(null,x_935);
var sector_y_min_937 = y__GT_frame.call(null,(0));
var sector_y_max_938 = y__GT_frame.call(null,spacewar.game_logic.config.known_space_y);
quil.core.line.call(null,sector_x_936,sector_y_min_937,sector_x_936,sector_y_max_938);


var G__939 = seq__923_931;
var G__940 = chunk__924_932;
var G__941 = count__925_933;
var G__942 = (i__926_934 + (1));
seq__923_931 = G__939;
chunk__924_932 = G__940;
count__925_933 = G__941;
i__926_934 = G__942;
continue;
} else {
var temp__5804__auto___943 = cljs.core.seq.call(null,seq__923_931);
if(temp__5804__auto___943){
var seq__923_944__$1 = temp__5804__auto___943;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__923_944__$1)){
var c__5525__auto___945 = cljs.core.chunk_first.call(null,seq__923_944__$1);
var G__946 = cljs.core.chunk_rest.call(null,seq__923_944__$1);
var G__947 = c__5525__auto___945;
var G__948 = cljs.core.count.call(null,c__5525__auto___945);
var G__949 = (0);
seq__923_931 = G__946;
chunk__924_932 = G__947;
count__925_933 = G__948;
i__926_934 = G__949;
continue;
} else {
var x_950 = cljs.core.first.call(null,seq__923_944__$1);
var sector_x_951 = x__GT_frame.call(null,x_950);
var sector_y_min_952 = y__GT_frame.call(null,(0));
var sector_y_max_953 = y__GT_frame.call(null,spacewar.game_logic.config.known_space_y);
quil.core.line.call(null,sector_x_951,sector_y_min_952,sector_x_951,sector_y_max_953);


var G__954 = cljs.core.next.call(null,seq__923_944__$1);
var G__955 = null;
var G__956 = (0);
var G__957 = (0);
seq__923_931 = G__954;
chunk__924_932 = G__955;
count__925_933 = G__956;
i__926_934 = G__957;
continue;
}
} else {
}
}
break;
}

var seq__927 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),(spacewar.game_logic.config.known_space_y + (1)),spacewar.game_logic.config.strategic_range));
var chunk__928 = null;
var count__929 = (0);
var i__930 = (0);
while(true){
if((i__930 < count__929)){
var y = cljs.core._nth.call(null,chunk__928,i__930);
var sector_y_958 = y__GT_frame.call(null,y);
var sector_x_min_959 = x__GT_frame.call(null,(0));
var sector_x_max_960 = x__GT_frame.call(null,spacewar.game_logic.config.known_space_x);
quil.core.line.call(null,sector_x_min_959,sector_y_958,sector_x_max_960,sector_y_958);


var G__961 = seq__927;
var G__962 = chunk__928;
var G__963 = count__929;
var G__964 = (i__930 + (1));
seq__927 = G__961;
chunk__928 = G__962;
count__929 = G__963;
i__930 = G__964;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__927);
if(temp__5804__auto__){
var seq__927__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__927__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__927__$1);
var G__965 = cljs.core.chunk_rest.call(null,seq__927__$1);
var G__966 = c__5525__auto__;
var G__967 = cljs.core.count.call(null,c__5525__auto__);
var G__968 = (0);
seq__927 = G__965;
chunk__928 = G__966;
count__929 = G__967;
i__930 = G__968;
continue;
} else {
var y = cljs.core.first.call(null,seq__927__$1);
var sector_y_969 = y__GT_frame.call(null,y);
var sector_x_min_970 = x__GT_frame.call(null,(0));
var sector_x_max_971 = x__GT_frame.call(null,spacewar.game_logic.config.known_space_x);
quil.core.line.call(null,sector_x_min_970,sector_y_969,sector_x_max_971,sector_y_969);


var G__972 = cljs.core.next.call(null,seq__927__$1);
var G__973 = null;
var G__974 = (0);
var G__975 = (0);
seq__927 = G__972;
chunk__928 = G__973;
count__929 = G__974;
i__930 = G__975;
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
var map__976 = strategic_scan;
var map__976__$1 = cljs.core.__destructure_map.call(null,map__976);
var x = cljs.core.get.call(null,map__976__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__976__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__976__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__976__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var pixel_width = cljs.core.get.call(null,map__976__$1,new cljs.core.Keyword(null,"pixel-width","pixel-width",462101859));
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
var map__977 = self__.state;
var map__977__$1 = cljs.core.__destructure_map.call(null,map__977);
var x = cljs.core.get.call(null,map__977__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__977__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__977__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__977__$1,new cljs.core.Keyword(null,"h","h",1109658740));
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
var map__978 = self__.state;
var map__978__$1 = cljs.core.__destructure_map.call(null,map__978);
var x = cljs.core.get.call(null,map__978__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__978__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__978__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__978__$1,new cljs.core.Keyword(null,"h","h",1109658740));
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
var event = (cljs.core.truth_(left_up)?(function (){var pred__979 = cljs.core._EQ_;
var expr__980 = key;
if(cljs.core.truth_(pred__979.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__980))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"debug-position-ship","debug-position-ship",1001388142),new cljs.core.Keyword(null,"pos","pos",-864607220),spacewar.ui.strategic_scan.click__GT_pos.call(null,state__$1,ship,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null))], null);
} else {
if(cljs.core.truth_(pred__979.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__980))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"debug-add-klingon","debug-add-klingon",-1401441744),new cljs.core.Keyword(null,"pos","pos",-864607220),spacewar.ui.strategic_scan.click__GT_pos.call(null,state__$1,ship,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null))], null);
} else {
if(cljs.core.truth_(pred__979.call(null,new cljs.core.Keyword(null,"r","r",-471384190),expr__980))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"debug-resupply-ship","debug-resupply-ship",1653705279)], null);
} else {
if(cljs.core.truth_(pred__979.call(null,new cljs.core.Keyword(null,"K","K",711741),expr__980))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"debug-new-klingon-from-praxis","debug-new-klingon-from-praxis",1326159196)], null);
} else {
if(cljs.core.truth_(pred__979.call(null,new cljs.core.Keyword(null,"c","c",-1763192079),expr__980))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"debug-corbomite-device-installed","debug-corbomite-device-installed",247596390)], null);
} else {
if(cljs.core.truth_(pred__979.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),expr__980))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"debug-klingon-stats","debug-klingon-stats",239832412)], null);
} else {
return null;
}
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
