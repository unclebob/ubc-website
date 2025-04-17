// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('spacewar.ui.widgets.lcars');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('spacewar.ui.config');
spacewar.ui.widgets.lcars.lcars_points = (function spacewar$ui$widgets$lcars$lcars_points(state){
var map__626 = state;
var map__626__$1 = cljs.core.__destructure_map.call(null,map__626);
var x = cljs.core.get.call(null,map__626__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__626__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__626__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__626__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var inverted = new cljs.core.Keyword(null,"inverted","inverted",-310592290).cljs$core$IFn$_invoke$arity$2(state,false);
if(cljs.core.truth_(inverted)){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"c2","c2",-1561880371),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"c1","c1",1132530803),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"label-position","label-position",-1546831329)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + spacewar.ui.config.stringer_width),(y + spacewar.ui.config.banner_width)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + spacewar.ui.config.stringer_width),(y + h)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x + spacewar.ui.config.stringer_width) + spacewar.ui.config.stringer_width),(y + spacewar.ui.config.banner_width)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + spacewar.ui.config.banner_width)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + w),(y + spacewar.ui.config.banner_width)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + spacewar.ui.config.banner_width),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + h)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + spacewar.ui.config.stringer_width),((y + spacewar.ui.config.banner_width) + spacewar.ui.config.stringer_width)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + w),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x + (10)) + spacewar.ui.config.stringer_width),(y + (10))], null)]);
} else {
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"c2","c2",-1561880371),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"c1","c1",1132530803),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"label-position","label-position",-1546831329)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x + w) + (- spacewar.ui.config.stringer_width)),(y + spacewar.ui.config.banner_width)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x + w) + (- spacewar.ui.config.stringer_width)),(y + h)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((x + w) + (- spacewar.ui.config.stringer_width)) + (- spacewar.ui.config.stringer_width)),(y + spacewar.ui.config.banner_width)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + w),(y + spacewar.ui.config.banner_width)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + w),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + spacewar.ui.config.banner_width)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x + w) + (- spacewar.ui.config.banner_width)),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + w),(y + h)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x + w) + (- spacewar.ui.config.stringer_width)),((y + spacewar.ui.config.banner_width) + spacewar.ui.config.stringer_width)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (10)),(y + (10))], null)]);
}
});
spacewar.ui.widgets.lcars.quadratic_vertex = (function spacewar$ui$widgets$lcars$quadratic_vertex(x1,y1,cx,cy,x3,y3){
return quil.core.bezier_vertex.call(null,(x1 + (((2) / (3)) * (cx - x1))),(y1 + (((2) / (3)) * (cy - y1))),(x3 + (((2) / (3)) * (cx - x3))),(y3 + (((2) / (3)) * (cy - y3))),x3,y3);
});
spacewar.ui.widgets.lcars.draw_banner = (function spacewar$ui$widgets$lcars$draw_banner(state){
var color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state);
var map__627 = spacewar.ui.widgets.lcars.lcars_points.call(null,state);
var map__627__$1 = cljs.core.__destructure_map.call(null,map__627);
var a = cljs.core.get.call(null,map__627__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var label_position = cljs.core.get.call(null,map__627__$1,new cljs.core.Keyword(null,"label-position","label-position",-1546831329));
var c2 = cljs.core.get.call(null,map__627__$1,new cljs.core.Keyword(null,"c2","c2",-1561880371));
var e = cljs.core.get.call(null,map__627__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var c = cljs.core.get.call(null,map__627__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
var g = cljs.core.get.call(null,map__627__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var c1 = cljs.core.get.call(null,map__627__$1,new cljs.core.Keyword(null,"c1","c1",1132530803));
var h = cljs.core.get.call(null,map__627__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var b = cljs.core.get.call(null,map__627__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var d = cljs.core.get.call(null,map__627__$1,new cljs.core.Keyword(null,"d","d",1972142424));
var f = cljs.core.get.call(null,map__627__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
quil.core.no_stroke.call(null);

cljs.core.apply.call(null,quil.core.fill,color);

quil.core.begin_shape.call(null);

cljs.core.apply.call(null,quil.core.vertex,a);

cljs.core.apply.call(null,quil.core.vertex,b);

cljs.core.apply.call(null,spacewar.ui.widgets.lcars.quadratic_vertex,cljs.core.concat.call(null,b,c1,c));

cljs.core.apply.call(null,quil.core.vertex,d);

cljs.core.apply.call(null,quil.core.vertex,e);

cljs.core.apply.call(null,quil.core.vertex,f);

cljs.core.apply.call(null,spacewar.ui.widgets.lcars.quadratic_vertex,cljs.core.concat.call(null,f,c2,g));

cljs.core.apply.call(null,quil.core.vertex,h);

cljs.core.apply.call(null,quil.core.vertex,a);

quil.core.end_shape.call(null);

quil.core.fill.call(null,(0),(0),(0));

quil.core.text_size.call(null,(24));

quil.core.text_font.call(null,new cljs.core.Keyword(null,"lcars","lcars",2100113880).cljs$core$IFn$_invoke$arity$1(quil.core.state.call(null,new cljs.core.Keyword(null,"fonts","fonts",1683167295))));

quil.core.text_align.call(null,new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"top","top",-1856271961));

return cljs.core.apply.call(null,quil.core.text,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(state),label_position);
});
spacewar.ui.widgets.lcars.draw_bottom_lcars = (function spacewar$ui$widgets$lcars$draw_bottom_lcars(state){
var map__628 = state;
var map__628__$1 = cljs.core.__destructure_map.call(null,map__628);
var x = cljs.core.get.call(null,map__628__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__628__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__628__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__628__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var name = cljs.core.get.call(null,map__628__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var color = cljs.core.get.call(null,map__628__$1,new cljs.core.Keyword(null,"color","color",1011675173));
quil.core.no_stroke.call(null);

cljs.core.apply.call(null,quil.core.fill,color);

quil.core.rect_mode.call(null,new cljs.core.Keyword(null,"corner","corner",1296717125));

quil.core.rect.call(null,x,((y + h) + (- spacewar.ui.config.banner_width)),w,spacewar.ui.config.banner_width);

quil.core.fill.call(null,(0),(0),(0));

quil.core.text_size.call(null,(24));

quil.core.text_font.call(null,new cljs.core.Keyword(null,"lcars","lcars",2100113880).cljs$core$IFn$_invoke$arity$1(quil.core.state.call(null,new cljs.core.Keyword(null,"fonts","fonts",1683167295))));

quil.core.text_align.call(null,new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"center","center",-748944368));

return quil.core.text.call(null,name,(x + (w / (2))),((y + h) + (spacewar.ui.config.banner_width / (-2))));
});

//# sourceMappingURL=lcars.js.map
