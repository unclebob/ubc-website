// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('spacewar.ui.widgets.direction_selector');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('spacewar.ui.protocols');
goog.require('spacewar.geometry');
goog.require('spacewar.ui.config');
goog.require('spacewar.vector');
spacewar.ui.widgets.direction_selector.degree_tick = (function spacewar$ui$widgets$direction_selector$degree_tick(radius,angle){
var tick_length = (((cljs.core.rem.call(null,angle,(30)) === (0)))?(10):(5));
var tick_radius = (radius - tick_length);
var radians = spacewar.geometry.__GT_radians.call(null,angle);
var sin_r = Math.sin(radians);
var cos_r = Math.cos(radians);
return cljs.core.map.call(null,(function (p1__1150_SHARP_){
return spacewar.geometry.round.call(null,p1__1150_SHARP_);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sin_r * radius),(cos_r * radius),(sin_r * tick_radius),(cos_r * tick_radius)], null));
});
spacewar.ui.widgets.direction_selector.draw_bezel_ring = (function spacewar$ui$widgets$direction_selector$draw_bezel_ring(p__1151,ring_color,fill_color){
var vec__1152 = p__1151;
var cx = cljs.core.nth.call(null,vec__1152,(0),null);
var cy = cljs.core.nth.call(null,vec__1152,(1),null);
var radius = cljs.core.nth.call(null,vec__1152,(2),null);
cljs.core.apply.call(null,quil.core.fill,fill_color);

quil.core.stroke_weight.call(null,(2));

cljs.core.apply.call(null,quil.core.stroke,ring_color);

quil.core.ellipse_mode.call(null,new cljs.core.Keyword(null,"radius","radius",-2073122258));

return quil.core.ellipse.call(null,cx,cy,radius,radius);
});
spacewar.ui.widgets.direction_selector.draw_ticks = (function spacewar$ui$widgets$direction_selector$draw_ticks(p__1155){
var vec__1156 = p__1155;
var x = cljs.core.nth.call(null,vec__1156,(0),null);
var y = cljs.core.nth.call(null,vec__1156,(1),null);
var radius = cljs.core.nth.call(null,vec__1156,(2),null);
cljs.core.apply.call(null,quil.core.stroke,spacewar.ui.config.black);

var seq__1159 = cljs.core.seq.call(null,cljs.core.range.call(null,(36)));
var chunk__1160 = null;
var count__1161 = (0);
var i__1162 = (0);
while(true){
if((i__1162 < count__1161)){
var angle_tenth = cljs.core._nth.call(null,chunk__1160,i__1162);
var tr__794__auto___1163 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__794__auto___1163);

cljs.core.apply.call(null,quil.core.line,spacewar.ui.widgets.direction_selector.degree_tick.call(null,radius,((10) * angle_tenth)));
}finally {quil.core.pop_matrix.call(null);
}

var G__1164 = seq__1159;
var G__1165 = chunk__1160;
var G__1166 = count__1161;
var G__1167 = (i__1162 + (1));
seq__1159 = G__1164;
chunk__1160 = G__1165;
count__1161 = G__1166;
i__1162 = G__1167;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__1159);
if(temp__5804__auto__){
var seq__1159__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1159__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__1159__$1);
var G__1168 = cljs.core.chunk_rest.call(null,seq__1159__$1);
var G__1169 = c__5525__auto__;
var G__1170 = cljs.core.count.call(null,c__5525__auto__);
var G__1171 = (0);
seq__1159 = G__1168;
chunk__1160 = G__1169;
count__1161 = G__1170;
i__1162 = G__1171;
continue;
} else {
var angle_tenth = cljs.core.first.call(null,seq__1159__$1);
var tr__794__auto___1172 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__794__auto___1172);

cljs.core.apply.call(null,quil.core.line,spacewar.ui.widgets.direction_selector.degree_tick.call(null,radius,((10) * angle_tenth)));
}finally {quil.core.pop_matrix.call(null);
}

var G__1173 = cljs.core.next.call(null,seq__1159__$1);
var G__1174 = null;
var G__1175 = (0);
var G__1176 = (0);
seq__1159 = G__1173;
chunk__1160 = G__1174;
count__1161 = G__1175;
i__1162 = G__1176;
continue;
}
} else {
return null;
}
}
break;
}
});
spacewar.ui.widgets.direction_selector.draw_labels = (function spacewar$ui$widgets$direction_selector$draw_labels(p__1177,radius){
var vec__1178 = p__1177;
var x = cljs.core.nth.call(null,vec__1178,(0),null);
var y = cljs.core.nth.call(null,vec__1178,(1),null);
var _ = cljs.core.nth.call(null,vec__1178,(2),null);
cljs.core.apply.call(null,quil.core.fill,spacewar.ui.config.black);

cljs.core.apply.call(null,quil.core.stroke,spacewar.ui.config.black);

quil.core.stroke_weight.call(null,(1));

quil.core.text_align.call(null,new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"center","center",-748944368));

quil.core.text_font.call(null,new cljs.core.Keyword(null,"lcars-small","lcars-small",620623076).cljs$core$IFn$_invoke$arity$1(quil.core.state.call(null,new cljs.core.Keyword(null,"fonts","fonts",1683167295))),(12));

var seq__1181 = cljs.core.seq.call(null,cljs.core.range.call(null,(12)));
var chunk__1182 = null;
var count__1183 = (0);
var i__1184 = (0);
while(true){
if((i__1184 < count__1183)){
var angle_thirtieth = cljs.core._nth.call(null,chunk__1182,i__1184);
var angle_tenth_1197 = ((3) * angle_thirtieth);
var angle_1198 = ((10) * angle_tenth_1197);
var radians_1199 = spacewar.geometry.__GT_radians.call(null,angle_1198);
var vec__1191_1200 = spacewar.vector.from_angular.call(null,radius,radians_1199);
var label_x_1201 = cljs.core.nth.call(null,vec__1191_1200,(0),null);
var label_y_1202 = cljs.core.nth.call(null,vec__1191_1200,(1),null);
var tr__794__auto___1203 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__794__auto___1203);

quil.core.text.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(angle_tenth_1197),label_x_1201,label_y_1202);
}finally {quil.core.pop_matrix.call(null);
}

var G__1204 = seq__1181;
var G__1205 = chunk__1182;
var G__1206 = count__1183;
var G__1207 = (i__1184 + (1));
seq__1181 = G__1204;
chunk__1182 = G__1205;
count__1183 = G__1206;
i__1184 = G__1207;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__1181);
if(temp__5804__auto__){
var seq__1181__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1181__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__1181__$1);
var G__1208 = cljs.core.chunk_rest.call(null,seq__1181__$1);
var G__1209 = c__5525__auto__;
var G__1210 = cljs.core.count.call(null,c__5525__auto__);
var G__1211 = (0);
seq__1181 = G__1208;
chunk__1182 = G__1209;
count__1183 = G__1210;
i__1184 = G__1211;
continue;
} else {
var angle_thirtieth = cljs.core.first.call(null,seq__1181__$1);
var angle_tenth_1212 = ((3) * angle_thirtieth);
var angle_1213 = ((10) * angle_tenth_1212);
var radians_1214 = spacewar.geometry.__GT_radians.call(null,angle_1213);
var vec__1194_1215 = spacewar.vector.from_angular.call(null,radius,radians_1214);
var label_x_1216 = cljs.core.nth.call(null,vec__1194_1215,(0),null);
var label_y_1217 = cljs.core.nth.call(null,vec__1194_1215,(1),null);
var tr__794__auto___1218 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__794__auto___1218);

quil.core.text.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(angle_tenth_1212),label_x_1216,label_y_1217);
}finally {quil.core.pop_matrix.call(null);
}

var G__1219 = cljs.core.next.call(null,seq__1181__$1);
var G__1220 = null;
var G__1221 = (0);
var G__1222 = (0);
seq__1181 = G__1219;
chunk__1182 = G__1220;
count__1183 = G__1221;
i__1184 = G__1222;
continue;
}
} else {
return null;
}
}
break;
}
});
spacewar.ui.widgets.direction_selector.draw_pointer = (function spacewar$ui$widgets$direction_selector$draw_pointer(x,y,length,direction,color){
var radians = spacewar.geometry.__GT_radians.call(null,direction);
var vec__1223 = spacewar.vector.from_angular.call(null,length,radians);
var tip_x = cljs.core.nth.call(null,vec__1223,(0),null);
var tip_y = cljs.core.nth.call(null,vec__1223,(1),null);
var base_width = spacewar.geometry.__GT_radians.call(null,(10));
var base_offset = (15);
var vec__1226 = spacewar.vector.from_angular.call(null,base_offset,(radians - base_width));
var xb1 = cljs.core.nth.call(null,vec__1226,(0),null);
var yb1 = cljs.core.nth.call(null,vec__1226,(1),null);
var vec__1229 = spacewar.vector.from_angular.call(null,base_offset,(radians + base_width));
var xb2 = cljs.core.nth.call(null,vec__1229,(0),null);
var yb2 = cljs.core.nth.call(null,vec__1229,(1),null);
quil.core.no_stroke.call(null);

cljs.core.apply.call(null,quil.core.fill,color);

var tr__794__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__794__auto__);

return quil.core.triangle.call(null,tip_x,tip_y,xb1,yb1,xb2,yb2);
}finally {quil.core.pop_matrix.call(null);
}});
spacewar.ui.widgets.direction_selector.draw_direction_text = (function spacewar$ui$widgets$direction_selector$draw_direction_text(text,cx,cy,dial_color,text_color){
quil.core.rect_mode.call(null,new cljs.core.Keyword(null,"center","center",-748944368));

quil.core.no_stroke.call(null);

cljs.core.apply.call(null,quil.core.fill,dial_color);

quil.core.rect.call(null,cx,cy,(20),(20));

cljs.core.apply.call(null,quil.core.fill,text_color);

quil.core.text_align.call(null,new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"center","center",-748944368));

quil.core.text_font.call(null,new cljs.core.Keyword(null,"lcars-small","lcars-small",620623076).cljs$core$IFn$_invoke$arity$1(quil.core.state.call(null,new cljs.core.Keyword(null,"fonts","fonts",1683167295))),(12));

return quil.core.text.call(null,text,cx,cy);
});
spacewar.ui.widgets.direction_selector.__GT_circle = (function spacewar$ui$widgets$direction_selector$__GT_circle(x,y,diameter){
var radius = (diameter / (2));
var center_x = (x + radius);
var center_y = (y + radius);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,center_y,radius], null);
});

/**
* @constructor
 * @implements {spacewar.ui.protocols.Drawable}
*/
spacewar.ui.widgets.direction_selector.direction_selector = (function (state){
this.state = state;
});
(spacewar.ui.widgets.direction_selector.direction_selector.prototype.spacewar$ui$protocols$Drawable$ = cljs.core.PROTOCOL_SENTINEL);

(spacewar.ui.widgets.direction_selector.direction_selector.prototype.spacewar$ui$protocols$Drawable$get_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
}));

(spacewar.ui.widgets.direction_selector.direction_selector.prototype.spacewar$ui$protocols$Drawable$clone$arity$2 = (function (_,clone_state){
var self__ = this;
var ___$1 = this;
return (new spacewar.ui.widgets.direction_selector.direction_selector(clone_state));
}));

(spacewar.ui.widgets.direction_selector.direction_selector.prototype.spacewar$ui$protocols$Drawable$draw$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__1232 = self__.state;
var map__1232__$1 = cljs.core.__destructure_map.call(null,map__1232);
var x = cljs.core.get.call(null,map__1232__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var direction = cljs.core.get.call(null,map__1232__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var y = cljs.core.get.call(null,map__1232__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var pointer2 = cljs.core.get.call(null,map__1232__$1,new cljs.core.Keyword(null,"pointer2","pointer2",-2078229087));
var mouse_in = cljs.core.get.call(null,map__1232__$1,new cljs.core.Keyword(null,"mouse-in","mouse-in",-744173595));
var color = cljs.core.get.call(null,map__1232__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var left_down = cljs.core.get.call(null,map__1232__$1,new cljs.core.Keyword(null,"left-down","left-down",2050158249));
var mouse_pos = cljs.core.get.call(null,map__1232__$1,new cljs.core.Keyword(null,"mouse-pos","mouse-pos",370762057));
var diameter = cljs.core.get.call(null,map__1232__$1,new cljs.core.Keyword(null,"diameter","diameter",1560913323));
var circle = spacewar.ui.widgets.direction_selector.__GT_circle.call(null,x,y,diameter);
var vec__1233 = circle;
var cx = cljs.core.nth.call(null,vec__1233,(0),null);
var cy = cljs.core.nth.call(null,vec__1233,(1),null);
var radius = cljs.core.nth.call(null,vec__1233,(2),null);
var label_radius = (radius - (18));
var pointer_length = (radius - (25));
var ring_color = (cljs.core.truth_(mouse_in)?spacewar.ui.config.white:color);
var mouse_angle = (cljs.core.truth_(left_down)?spacewar.geometry.angle_degrees.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null),mouse_pos):(0));
var direction_text = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spacewar.geometry.round.call(null,(cljs.core.truth_(left_down)?mouse_angle:direction)));
var text_color = (cljs.core.truth_(left_down)?spacewar.ui.config.grey:spacewar.ui.config.black);
spacewar.ui.widgets.direction_selector.draw_bezel_ring.call(null,circle,ring_color,color);

if(cljs.core.truth_(mouse_in)){
spacewar.ui.widgets.direction_selector.draw_ticks.call(null,circle);

spacewar.ui.widgets.direction_selector.draw_labels.call(null,circle,label_radius);
} else {
}

if(cljs.core.truth_(pointer2)){
spacewar.ui.widgets.direction_selector.draw_pointer.call(null,cx,cy,pointer_length,pointer2,spacewar.ui.config.light_grey);
} else {
}

spacewar.ui.widgets.direction_selector.draw_pointer.call(null,cx,cy,pointer_length,direction,spacewar.ui.config.black);

if(cljs.core.truth_(left_down)){
spacewar.ui.widgets.direction_selector.draw_pointer.call(null,cx,cy,pointer_length,mouse_angle,spacewar.ui.config.grey);
} else {
}

return spacewar.ui.widgets.direction_selector.draw_direction_text.call(null,direction_text,cx,cy,color,text_color);
}));

(spacewar.ui.widgets.direction_selector.direction_selector.prototype.spacewar$ui$protocols$Drawable$setup$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new spacewar.ui.widgets.direction_selector.direction_selector(cljs.core.assoc.call(null,self__.state,new cljs.core.Keyword(null,"mouse-pos","mouse-pos",370762057),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null))));
}));

(spacewar.ui.widgets.direction_selector.direction_selector.prototype.spacewar$ui$protocols$Drawable$update_state$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
var map__1236 = self__.state;
var map__1236__$1 = cljs.core.__destructure_map.call(null,map__1236);
var x = cljs.core.get.call(null,map__1236__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__1236__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var diameter = cljs.core.get.call(null,map__1236__$1,new cljs.core.Keyword(null,"diameter","diameter",1560913323));
var last_left_down = new cljs.core.Keyword(null,"left-down","left-down",2050158249).cljs$core$IFn$_invoke$arity$1(self__.state);
var vec__1237 = spacewar.ui.widgets.direction_selector.__GT_circle.call(null,x,y,diameter);
var cx = cljs.core.nth.call(null,vec__1237,(0),null);
var cy = cljs.core.nth.call(null,vec__1237,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__1237,(2),null);
var circle = vec__1237;
var mouse_pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.mouse_x.call(null),quil.core.mouse_y.call(null)], null);
var mouse_in = spacewar.geometry.inside_circle.call(null,circle,mouse_pos);
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
var event = (cljs.core.truth_(left_up)?cljs.core.assoc.call(null,new cljs.core.Keyword(null,"left-up-event","left-up-event",-1153135824).cljs$core$IFn$_invoke$arity$1(self__.state),new cljs.core.Keyword(null,"angle","angle",1622094254),spacewar.geometry.round.call(null,spacewar.geometry.angle_degrees.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null),mouse_pos))):null);
var new_state = cljs.core.assoc.call(null,self__.state,new cljs.core.Keyword(null,"mouse-pos","mouse-pos",370762057),mouse_pos,new cljs.core.Keyword(null,"mouse-in","mouse-in",-744173595),mouse_in,new cljs.core.Keyword(null,"left-down","left-down",2050158249),left_down);
return spacewar.ui.protocols.pack_update.call(null,(new spacewar.ui.widgets.direction_selector.direction_selector(new_state)),event);
}));

(spacewar.ui.widgets.direction_selector.direction_selector.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
}));

(spacewar.ui.widgets.direction_selector.direction_selector.cljs$lang$type = true);

(spacewar.ui.widgets.direction_selector.direction_selector.cljs$lang$ctorStr = "spacewar.ui.widgets.direction-selector/direction-selector");

(spacewar.ui.widgets.direction_selector.direction_selector.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"spacewar.ui.widgets.direction-selector/direction-selector");
}));

/**
 * Positional factory function for spacewar.ui.widgets.direction-selector/direction-selector.
 */
spacewar.ui.widgets.direction_selector.__GT_direction_selector = (function spacewar$ui$widgets$direction_selector$__GT_direction_selector(state){
return (new spacewar.ui.widgets.direction_selector.direction_selector(state));
});


//# sourceMappingURL=direction_selector.js.map
