// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('spacewar.ui.complex');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('spacewar.ui.protocols');
goog.require('spacewar.ui.view_frame');
goog.require('spacewar.ui.config');
goog.require('spacewar.ui.control_panels.scan_panel');
goog.require('spacewar.ui.control_panels.engine_panel');
goog.require('spacewar.ui.control_panels.weapons_panel');
goog.require('spacewar.ui.control_panels.damage_panel');
goog.require('spacewar.ui.control_panels.status_panel');
goog.require('spacewar.ui.control_panels.deploy_panel');
goog.require('spacewar.ui.widgets.lights');
goog.require('spacewar.ui.widgets.engage');
spacewar.ui.complex.draw_light_panel = (function spacewar$ui$complex$draw_light_panel(state){
var map__637 = state;
var map__637__$1 = cljs.core.__destructure_map.call(null,map__637);
var x = cljs.core.get.call(null,map__637__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__637__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__637__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__637__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var indicators = cljs.core.get.call(null,map__637__$1,new cljs.core.Keyword(null,"indicators","indicators",1312373003));
var background = cljs.core.get.call(null,map__637__$1,new cljs.core.Keyword(null,"background","background",-863952629));
cljs.core.apply.call(null,quil.core.fill,background);

quil.core.no_stroke.call(null);

quil.core.rect_mode.call(null,new cljs.core.Keyword(null,"corner","corner",1296717125));

quil.core.rect.call(null,x,y,w,h);

var seq__638 = cljs.core.seq.call(null,indicators);
var chunk__639 = null;
var count__640 = (0);
var i__641 = (0);
while(true){
if((i__641 < count__640)){
var indicator = cljs.core._nth.call(null,chunk__639,i__641);
spacewar.ui.protocols.draw.call(null,indicator);


var G__642 = seq__638;
var G__643 = chunk__639;
var G__644 = count__640;
var G__645 = (i__641 + (1));
seq__638 = G__642;
chunk__639 = G__643;
count__640 = G__644;
i__641 = G__645;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__638);
if(temp__5804__auto__){
var seq__638__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__638__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__638__$1);
var G__646 = cljs.core.chunk_rest.call(null,seq__638__$1);
var G__647 = c__5525__auto__;
var G__648 = cljs.core.count.call(null,c__5525__auto__);
var G__649 = (0);
seq__638 = G__646;
chunk__639 = G__647;
count__640 = G__648;
i__641 = G__649;
continue;
} else {
var indicator = cljs.core.first.call(null,seq__638__$1);
spacewar.ui.protocols.draw.call(null,indicator);


var G__650 = cljs.core.next.call(null,seq__638__$1);
var G__651 = null;
var G__652 = (0);
var G__653 = (0);
seq__638 = G__650;
chunk__639 = G__651;
count__640 = G__652;
i__641 = G__653;
continue;
}
} else {
return null;
}
}
break;
}
});
spacewar.ui.complex.update_light_panel = (function spacewar$ui$complex$update_light_panel(state){
var map__656 = state;
var map__656__$1 = cljs.core.__destructure_map.call(null,map__656);
var indicators = cljs.core.get.call(null,map__656__$1,new cljs.core.Keyword(null,"indicators","indicators",1312373003));
var level_func = cljs.core.get.call(null,map__656__$1,new cljs.core.Keyword(null,"level-func","level-func",140089707));
var indicator_states = cljs.core.map.call(null,spacewar.ui.protocols.get_state,indicators);
var new_indicators = cljs.core.map_indexed.call(null,(function (p1__655_SHARP_,p2__654_SHARP_){
return spacewar.ui.widgets.lights.__GT_indicator_light.call(null,cljs.core.assoc.call(null,p2__654_SHARP_,new cljs.core.Keyword(null,"level","level",1290497552),level_func.call(null,p1__655_SHARP_)));
}),indicator_states);
var new_state = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"indicators","indicators",1312373003),new_indicators);
return new_state;
});
spacewar.ui.complex.shift_pattern = (function spacewar$ui$complex$shift_pattern(n,i){
if(cljs.core._EQ_.call(null,i,cljs.core.rem.call(null,cljs.core.quot.call(null,quil.core.frame_count.call(null),(3)),n))){
return (1);
} else {
return (0);
}
});
spacewar.ui.complex.random_pattern = (function spacewar$ui$complex$random_pattern(_,___$1){
return cljs.core.rand_int.call(null,(2));
});
spacewar.ui.complex.build_indicators = (function spacewar$ui$complex$build_indicators(state){
var map__657 = state;
var map__657__$1 = cljs.core.__destructure_map.call(null,map__657);
var x = cljs.core.get.call(null,map__657__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__657__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var indicator_height = cljs.core.get.call(null,map__657__$1,new cljs.core.Keyword(null,"indicator-height","indicator-height",1375855138));
var indicator_width = cljs.core.get.call(null,map__657__$1,new cljs.core.Keyword(null,"indicator-width","indicator-width",1577566149));
var columns = cljs.core.get.call(null,map__657__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var w = cljs.core.get.call(null,map__657__$1,new cljs.core.Keyword(null,"w","w",354169001));
var colors = cljs.core.get.call(null,map__657__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
var rows = cljs.core.get.call(null,map__657__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var h = cljs.core.get.call(null,map__657__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var draw_func = cljs.core.get.call(null,map__657__$1,new cljs.core.Keyword(null,"draw-func","draw-func",944350484));
var gap = cljs.core.get.call(null,map__657__$1,new cljs.core.Keyword(null,"gap","gap",80255254));
var cell_width = (((w - gap) - gap) / columns);
var cell_height = (((h - gap) - gap) / rows);
var cell_x_offset = ((cell_width / (2)) - (indicator_width / (2)));
var cell_y_offset = ((cell_height / (2)) - (indicator_height / (2)));
var indicators = (function (){var iter__5480__auto__ = (function spacewar$ui$complex$build_indicators_$_iter__658(s__659){
return (new cljs.core.LazySeq(null,(function (){
var s__659__$1 = s__659;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__659__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var row = cljs.core.first.call(null,xs__6360__auto__);
var iterys__5476__auto__ = ((function (s__659__$1,row,xs__6360__auto__,temp__5804__auto__,map__657,map__657__$1,x,y,indicator_height,indicator_width,columns,w,colors,rows,h,draw_func,gap,cell_width,cell_height,cell_x_offset,cell_y_offset){
return (function spacewar$ui$complex$build_indicators_$_iter__658_$_iter__660(s__661){
return (new cljs.core.LazySeq(null,((function (s__659__$1,row,xs__6360__auto__,temp__5804__auto__,map__657,map__657__$1,x,y,indicator_height,indicator_width,columns,w,colors,rows,h,draw_func,gap,cell_width,cell_height,cell_x_offset,cell_y_offset){
return (function (){
var s__661__$1 = s__661;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__661__$1);
if(temp__5804__auto____$1){
var s__661__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__661__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__661__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__663 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__662 = (0);
while(true){
if((i__662 < size__5479__auto__)){
var column = cljs.core._nth.call(null,c__5478__auto__,i__662);
cljs.core.chunk_append.call(null,b__663,spacewar.ui.protocols.setup.call(null,spacewar.ui.widgets.lights.__GT_indicator_light.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(((x + gap) + cell_x_offset) + (cell_width * column)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y + gap) + cell_y_offset) + (cell_height * row)),new cljs.core.Keyword(null,"w","w",354169001),indicator_width,new cljs.core.Keyword(null,"h","h",1109658740),indicator_height,new cljs.core.Keyword(null,"level","level",1290497552),(0),new cljs.core.Keyword(null,"draw-func","draw-func",944350484),draw_func,new cljs.core.Keyword(null,"colors","colors",1157174732),colors], null))));

var G__664 = (i__662 + (1));
i__662 = G__664;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__663),spacewar$ui$complex$build_indicators_$_iter__658_$_iter__660.call(null,cljs.core.chunk_rest.call(null,s__661__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__663),null);
}
} else {
var column = cljs.core.first.call(null,s__661__$2);
return cljs.core.cons.call(null,spacewar.ui.protocols.setup.call(null,spacewar.ui.widgets.lights.__GT_indicator_light.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(((x + gap) + cell_x_offset) + (cell_width * column)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y + gap) + cell_y_offset) + (cell_height * row)),new cljs.core.Keyword(null,"w","w",354169001),indicator_width,new cljs.core.Keyword(null,"h","h",1109658740),indicator_height,new cljs.core.Keyword(null,"level","level",1290497552),(0),new cljs.core.Keyword(null,"draw-func","draw-func",944350484),draw_func,new cljs.core.Keyword(null,"colors","colors",1157174732),colors], null))),spacewar$ui$complex$build_indicators_$_iter__658_$_iter__660.call(null,cljs.core.rest.call(null,s__661__$2)));
}
} else {
return null;
}
break;
}
});})(s__659__$1,row,xs__6360__auto__,temp__5804__auto__,map__657,map__657__$1,x,y,indicator_height,indicator_width,columns,w,colors,rows,h,draw_func,gap,cell_width,cell_height,cell_x_offset,cell_y_offset))
,null,null));
});})(s__659__$1,row,xs__6360__auto__,temp__5804__auto__,map__657,map__657__$1,x,y,indicator_height,indicator_width,columns,w,colors,rows,h,draw_func,gap,cell_width,cell_height,cell_x_offset,cell_y_offset))
;
var fs__5477__auto__ = cljs.core.seq.call(null,iterys__5476__auto__.call(null,cljs.core.range.call(null,columns)));
if(fs__5477__auto__){
return cljs.core.concat.call(null,fs__5477__auto__,spacewar$ui$complex$build_indicators_$_iter__658.call(null,cljs.core.rest.call(null,s__659__$1)));
} else {
var G__665 = cljs.core.rest.call(null,s__659__$1);
s__659__$1 = G__665;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,cljs.core.range.call(null,rows));
})();
return indicators;
});

/**
* @constructor
 * @implements {spacewar.ui.protocols.Drawable}
*/
spacewar.ui.complex.bottom_lights = (function (state){
this.state = state;
});
(spacewar.ui.complex.bottom_lights.prototype.spacewar$ui$protocols$Drawable$ = cljs.core.PROTOCOL_SENTINEL);

(spacewar.ui.complex.bottom_lights.prototype.spacewar$ui$protocols$Drawable$draw$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return spacewar.ui.complex.draw_light_panel.call(null,self__.state);
}));

(spacewar.ui.complex.bottom_lights.prototype.spacewar$ui$protocols$Drawable$setup$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var rows = (1);
var columns = (14);
var indicators = spacewar.ui.complex.build_indicators.call(null,cljs.core.assoc.call(null,self__.state,new cljs.core.Keyword(null,"rows","rows",850049680),rows,new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"gap","gap",80255254),(20),new cljs.core.Keyword(null,"indicator-height","indicator-height",1375855138),(10),new cljs.core.Keyword(null,"indicator-width","indicator-width",1577566149),(20),new cljs.core.Keyword(null,"draw-func","draw-func",944350484),spacewar.ui.widgets.lights.rectangle_light,new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(50),(50)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null)], null)));
var new_state = cljs.core.assoc.call(null,self__.state,new cljs.core.Keyword(null,"indicators","indicators",1312373003),indicators,new cljs.core.Keyword(null,"level-func","level-func",140089707),cljs.core.partial.call(null,spacewar.ui.complex.shift_pattern,(rows * columns)),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(150),(150),(150)], null));
return (new spacewar.ui.complex.bottom_lights(new_state));
}));

(spacewar.ui.complex.bottom_lights.prototype.spacewar$ui$protocols$Drawable$update_state$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return spacewar.ui.protocols.pack_update.call(null,(new spacewar.ui.complex.bottom_lights(spacewar.ui.complex.update_light_panel.call(null,self__.state))));
}));

(spacewar.ui.complex.bottom_lights.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
}));

(spacewar.ui.complex.bottom_lights.cljs$lang$type = true);

(spacewar.ui.complex.bottom_lights.cljs$lang$ctorStr = "spacewar.ui.complex/bottom-lights");

(spacewar.ui.complex.bottom_lights.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"spacewar.ui.complex/bottom-lights");
}));

/**
 * Positional factory function for spacewar.ui.complex/bottom-lights.
 */
spacewar.ui.complex.__GT_bottom_lights = (function spacewar$ui$complex$__GT_bottom_lights(state){
return (new spacewar.ui.complex.bottom_lights(state));
});


/**
* @constructor
 * @implements {spacewar.ui.protocols.Drawable}
*/
spacewar.ui.complex.side_lights = (function (state){
this.state = state;
});
(spacewar.ui.complex.side_lights.prototype.spacewar$ui$protocols$Drawable$ = cljs.core.PROTOCOL_SENTINEL);

(spacewar.ui.complex.side_lights.prototype.spacewar$ui$protocols$Drawable$draw$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return spacewar.ui.complex.draw_light_panel.call(null,self__.state);
}));

(spacewar.ui.complex.side_lights.prototype.spacewar$ui$protocols$Drawable$setup$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var rows = (10);
var columns = (2);
var indicators = spacewar.ui.complex.build_indicators.call(null,cljs.core.assoc.call(null,self__.state,new cljs.core.Keyword(null,"rows","rows",850049680),rows,new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"gap","gap",80255254),(20),new cljs.core.Keyword(null,"indicator-height","indicator-height",1375855138),(15),new cljs.core.Keyword(null,"indicator-width","indicator-width",1577566149),(15),new cljs.core.Keyword(null,"draw-func","draw-func",944350484),spacewar.ui.widgets.lights.round_light,new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(50),(50)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(0)], null)], null)));
var new_state = cljs.core.assoc.call(null,self__.state,new cljs.core.Keyword(null,"indicators","indicators",1312373003),indicators,new cljs.core.Keyword(null,"level-func","level-func",140089707),cljs.core.partial.call(null,spacewar.ui.complex.random_pattern,(rows * columns)),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(150),(50),(50)], null));
return (new spacewar.ui.complex.side_lights(new_state));
}));

(spacewar.ui.complex.side_lights.prototype.spacewar$ui$protocols$Drawable$update_state$arity$2 = (function (this$,_){
var self__ = this;
var this$__$1 = this;
return spacewar.ui.protocols.pack_update.call(null,(((cljs.core.rand_int.call(null,(15)) === (0)))?(new spacewar.ui.complex.side_lights(spacewar.ui.complex.update_light_panel.call(null,self__.state))):this$__$1));
}));

(spacewar.ui.complex.side_lights.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
}));

(spacewar.ui.complex.side_lights.cljs$lang$type = true);

(spacewar.ui.complex.side_lights.cljs$lang$ctorStr = "spacewar.ui.complex/side-lights");

(spacewar.ui.complex.side_lights.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"spacewar.ui.complex/side-lights");
}));

/**
 * Positional factory function for spacewar.ui.complex/side-lights.
 */
spacewar.ui.complex.__GT_side_lights = (function spacewar$ui$complex$__GT_side_lights(state){
return (new spacewar.ui.complex.side_lights(state));
});


/**
* @constructor
 * @implements {spacewar.ui.protocols.Drawable}
*/
spacewar.ui.complex.complex = (function (state){
this.state = state;
});
(spacewar.ui.complex.complex.prototype.spacewar$ui$protocols$Drawable$ = cljs.core.PROTOCOL_SENTINEL);

(spacewar.ui.complex.complex.prototype.spacewar$ui$protocols$Drawable$draw$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
spacewar.ui.protocols.draw_elements.call(null,self__.state);

cljs.core.apply.call(null,quil.core.fill,spacewar.ui.config.white);

quil.core.text_align.call(null,new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"top","top",-1856271961));

quil.core.text_font.call(null,new cljs.core.Keyword(null,"lcars","lcars",2100113880).cljs$core$IFn$_invoke$arity$1(quil.core.state.call(null,new cljs.core.Keyword(null,"fonts","fonts",1683167295))),(18));

var line_height = (20);
var map__666 = self__.state;
var map__666__$1 = cljs.core.__destructure_map.call(null,map__666);
var x = cljs.core.get.call(null,map__666__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__666__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var fps = cljs.core.get.call(null,map__666__$1,new cljs.core.Keyword(null,"fps","fps",683533296));
var fps__$1 = (function (){var or__5002__auto__ = fps;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})();
var fps__$2 = ["FPS: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fps__$1.toFixed((2)))].join('');
quil.core.text.call(null,fps__$2,x,y);

quil.core.text.call(null,cljs.core.get.call(null,self__.state,new cljs.core.Keyword(null,"version","version",425292698),"--"),x,(y + (line_height * (1))));

quil.core.text.call(null,["minutes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"minutes","minutes",1319166394).cljs$core$IFn$_invoke$arity$1(self__.state))].join(''),x,(y + (line_height * (2))));

quil.core.text.call(null,["Klingons: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"klingons","klingons",-1228954811).cljs$core$IFn$_invoke$arity$1(self__.state))].join(''),x,(y + (line_height * (3))));

quil.core.text.call(null,["Deaths: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"deaths","deaths",1477907113).cljs$core$IFn$_invoke$arity$1(self__.state))].join(''),x,(y + (line_height * (4))));

quil.core.text.call(null,["Klingons killed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"klingons-killed","klingons-killed",424443456).cljs$core$IFn$_invoke$arity$1(self__.state))].join(''),x,(y + (line_height * (5))));

return quil.core.text.call(null,["Romulans killed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"romulans-killed","romulans-killed",-1598579846).cljs$core$IFn$_invoke$arity$1(self__.state))].join(''),x,(y + (line_height * (6))));
}));

(spacewar.ui.complex.complex.prototype.spacewar$ui$protocols$Drawable$setup$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__667 = self__.state;
var map__667__$1 = cljs.core.__destructure_map.call(null,map__667);
var x = cljs.core.get.call(null,map__667__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__667__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var h = cljs.core.get.call(null,map__667__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var w = cljs.core.get.call(null,map__667__$1,new cljs.core.Keyword(null,"w","w",354169001));
var left_margin = (200);
var right_margin = (200);
var bottom_margin = (200);
var panel_gap = (20);
var small_panel_gap = (10);
var frame_width = ((w - left_margin) - right_margin);
var frame_height = (h - bottom_margin);
var frame_bottom = (y + frame_height);
var frame = spacewar.ui.protocols.setup.call(null,spacewar.ui.view_frame.__GT_view_frame.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(x + left_margin),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"h","h",1109658740),frame_height,new cljs.core.Keyword(null,"w","w",354169001),frame_width], null)));
var engine_weapon_width = (750);
var bottom_lights_width = (frame_width - engine_weapon_width);
var bottom_lights_left_offset = ((frame_width - bottom_lights_width) / (2));
var bottom_lights_x = ((x + left_margin) + bottom_lights_left_offset);
var bottom_lights_y = ((y + (h - bottom_margin)) + panel_gap);
var bottom_lights_h = (40);
var bottom_lights = spacewar.ui.protocols.setup.call(null,spacewar.ui.complex.__GT_bottom_lights.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),bottom_lights_x,new cljs.core.Keyword(null,"y","y",-1757859776),bottom_lights_y,new cljs.core.Keyword(null,"h","h",1109658740),bottom_lights_h,new cljs.core.Keyword(null,"w","w",354169001),bottom_lights_width], null)));
var side_panel_height = (frame_height / 2.5);
var side_panel_width = (120);
var side_panel_y = (y + (frame_height / (5)));
var left_lights = spacewar.ui.protocols.setup.call(null,spacewar.ui.complex.__GT_side_lights.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(((x + left_margin) - panel_gap) - side_panel_width),new cljs.core.Keyword(null,"y","y",-1757859776),side_panel_y,new cljs.core.Keyword(null,"h","h",1109658740),side_panel_height,new cljs.core.Keyword(null,"w","w",354169001),side_panel_width], null)));
var right_lights = spacewar.ui.protocols.setup.call(null,spacewar.ui.complex.__GT_side_lights.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(((x + left_margin) + frame_width) + panel_gap),new cljs.core.Keyword(null,"y","y",-1757859776),side_panel_y,new cljs.core.Keyword(null,"w","w",354169001),side_panel_width,new cljs.core.Keyword(null,"h","h",1109658740),side_panel_height], null)));
var new_game_button = spacewar.ui.protocols.setup.call(null,spacewar.ui.widgets.engage.__GT_engage.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"activation-color","activation-color",-915187834),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"left-up-event","left-up-event",-1153135824),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"x","x",2099068185)],[y,spacewar.ui.config.new_game_color,false,spacewar.ui.config.new_game_button_color,"New Game",(150),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"new-game","new-game",167241648)], null),(100),(((x + left_margin) + frame_width) + panel_gap)])));
var scan_panel_x = (small_panel_gap + x);
var scan_panel_y = ((side_panel_y + side_panel_height) + panel_gap);
var scan_panel_w = (left_margin - ((2) * small_panel_gap));
var scan_panel_h = (((frame_bottom - side_panel_height) - side_panel_y) - panel_gap);
var scan_panel = spacewar.ui.protocols.setup.call(null,spacewar.ui.control_panels.scan_panel.__GT_scan_panel.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),scan_panel_x,new cljs.core.Keyword(null,"y","y",-1757859776),scan_panel_y,new cljs.core.Keyword(null,"w","w",354169001),scan_panel_w,new cljs.core.Keyword(null,"h","h",1109658740),scan_panel_h,new cljs.core.Keyword(null,"name","name",1843675177),"SCAN",new cljs.core.Keyword(null,"color","color",1011675173),spacewar.ui.config.scan_panel_color,new cljs.core.Keyword(null,"button-color","button-color",371849340),spacewar.ui.config.scan_panel_button_color], null)));
var engine_panel_x = scan_panel_x;
var engine_panel_y = ((y + frame_height) + small_panel_gap);
var engine_panel_w = ((left_margin + bottom_lights_left_offset) + (- ((2) * small_panel_gap)));
var engine_panel_h = (bottom_margin - small_panel_gap);
var engine_panel = spacewar.ui.protocols.setup.call(null,spacewar.ui.control_panels.engine_panel.__GT_engine_panel.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),engine_panel_x,new cljs.core.Keyword(null,"y","y",-1757859776),engine_panel_y,new cljs.core.Keyword(null,"w","w",354169001),engine_panel_w,new cljs.core.Keyword(null,"h","h",1109658740),engine_panel_h,new cljs.core.Keyword(null,"name","name",1843675177),"ENGINES",new cljs.core.Keyword(null,"color","color",1011675173),spacewar.ui.config.engine_panel_color,new cljs.core.Keyword(null,"button-color","button-color",371849340),spacewar.ui.config.engine_panel_button_color], null)));
var weapons_panel_x = ((bottom_lights_x + bottom_lights_width) + small_panel_gap);
var weapons_panel_y = ((y + frame_height) + small_panel_gap);
var weapons_panel_w = ((((w - left_margin) - bottom_lights_left_offset) - bottom_lights_width) - panel_gap);
var weapons_panel_h = (bottom_margin - small_panel_gap);
var weapons_panel = spacewar.ui.protocols.setup.call(null,spacewar.ui.control_panels.weapons_panel.__GT_weapons_panel.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x","x",2099068185),weapons_panel_x,new cljs.core.Keyword(null,"y","y",-1757859776),weapons_panel_y,new cljs.core.Keyword(null,"w","w",354169001),weapons_panel_w,new cljs.core.Keyword(null,"h","h",1109658740),weapons_panel_h,new cljs.core.Keyword(null,"name","name",1843675177),"WEAPONS",new cljs.core.Keyword(null,"color","color",1011675173),spacewar.ui.config.weapons_panel_color,new cljs.core.Keyword(null,"button-color","button-color",371849340),spacewar.ui.config.weapons_panel_button_color,new cljs.core.Keyword(null,"inverted","inverted",-310592290),true], null)));
var damage_panel_x = (((x + left_margin) + frame_width) + small_panel_gap);
var damage_panel_y = scan_panel_y;
var damage_panel_w = (right_margin - ((2) * small_panel_gap));
var damage_panel = spacewar.ui.protocols.setup.call(null,spacewar.ui.control_panels.damage_panel.__GT_damage_panel.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),damage_panel_x,new cljs.core.Keyword(null,"y","y",-1757859776),damage_panel_y,new cljs.core.Keyword(null,"w","w",354169001),damage_panel_w,new cljs.core.Keyword(null,"name","name",1843675177),"DAMAGE",new cljs.core.Keyword(null,"color","color",1011675173),spacewar.ui.config.damage_panel_color,new cljs.core.Keyword(null,"inverted","inverted",-310592290),true], null)));
var damage_panel_h = new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(spacewar.ui.protocols.get_state.call(null,damage_panel));
var deploy_panel_x = damage_panel_x;
var deploy_panel_y = ((damage_panel_y + damage_panel_h) + panel_gap);
var deploy_panel_w = damage_panel_w;
var deploy_panel = spacewar.ui.protocols.setup.call(null,spacewar.ui.control_panels.deploy_panel.__GT_deploy_panel.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),deploy_panel_x,new cljs.core.Keyword(null,"y","y",-1757859776),deploy_panel_y,new cljs.core.Keyword(null,"w","w",354169001),deploy_panel_w,new cljs.core.Keyword(null,"name","name",1843675177),"DEPLOY",new cljs.core.Keyword(null,"color","color",1011675173),spacewar.ui.config.deploy_panel_color,new cljs.core.Keyword(null,"button-color","button-color",371849340),spacewar.ui.config.deploy_panel_button_color,new cljs.core.Keyword(null,"inverted","inverted",-310592290),true], null)));
var deploy_panel_h = new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(spacewar.ui.protocols.get_state.call(null,deploy_panel));
var status_panel_x = ((engine_panel_x + engine_panel_w) + small_panel_gap);
var status_panel_y = ((bottom_lights_y + bottom_lights_h) + panel_gap);
var status_panel_w = bottom_lights_width;
var status_panel_h = (((h - frame_height) - panel_gap) - bottom_lights_h);
var status_panel = spacewar.ui.protocols.setup.call(null,spacewar.ui.control_panels.status_panel.__GT_status_panel.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),status_panel_x,new cljs.core.Keyword(null,"y","y",-1757859776),status_panel_y,new cljs.core.Keyword(null,"w","w",354169001),status_panel_w,new cljs.core.Keyword(null,"h","h",1109658740),status_panel_h,new cljs.core.Keyword(null,"name","name",1843675177),"STATUS",new cljs.core.Keyword(null,"color","color",1011675173),spacewar.ui.config.status_panel_color,new cljs.core.Keyword(null,"mercury-color","mercury-color",321536675),spacewar.ui.config.status_panel_mercury_color], null)));
var new_state = cljs.core.assoc.call(null,self__.state,new cljs.core.Keyword(null,"frame","frame",-1711082588),frame,new cljs.core.Keyword(null,"bottom-lights","bottom-lights",-512221645),bottom_lights,new cljs.core.Keyword(null,"left-lights","left-lights",-1833612275),left_lights,new cljs.core.Keyword(null,"right-lights","right-lights",-732557699),right_lights,new cljs.core.Keyword(null,"scan-panel","scan-panel",380651398),scan_panel,new cljs.core.Keyword(null,"engine-panel","engine-panel",1932508059),engine_panel,new cljs.core.Keyword(null,"weapons-panel","weapons-panel",1487014171),weapons_panel,new cljs.core.Keyword(null,"damage-panel","damage-panel",1899014925),damage_panel,new cljs.core.Keyword(null,"status-panel","status-panel",399894195),status_panel,new cljs.core.Keyword(null,"deploy-panel","deploy-panel",-821305436),deploy_panel,new cljs.core.Keyword(null,"new-game-button","new-game-button",-1516581435),new_game_button,new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"bottom-lights","bottom-lights",-512221645),new cljs.core.Keyword(null,"left-lights","left-lights",-1833612275),new cljs.core.Keyword(null,"right-lights","right-lights",-732557699),new cljs.core.Keyword(null,"scan-panel","scan-panel",380651398),new cljs.core.Keyword(null,"engine-panel","engine-panel",1932508059),new cljs.core.Keyword(null,"weapons-panel","weapons-panel",1487014171),new cljs.core.Keyword(null,"damage-panel","damage-panel",1899014925),new cljs.core.Keyword(null,"status-panel","status-panel",399894195),new cljs.core.Keyword(null,"deploy-panel","deploy-panel",-821305436),new cljs.core.Keyword(null,"new-game-button","new-game-button",-1516581435)], null));
return (new spacewar.ui.complex.complex(new_state));
}));

(spacewar.ui.complex.complex.prototype.spacewar$ui$protocols$Drawable$update_state$arity$2 = (function (_,world){
var self__ = this;
var ___$1 = this;
var state__$1 = cljs.core.assoc.call(null,self__.state,new cljs.core.Keyword(null,"fps","fps",683533296),new cljs.core.Keyword(null,"fps","fps",683533296).cljs$core$IFn$_invoke$arity$1(world),new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(world),new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"minutes","minutes",1319166394).cljs$core$IFn$_invoke$arity$1(world),new cljs.core.Keyword(null,"klingons","klingons",-1228954811),cljs.core.count.call(null,new cljs.core.Keyword(null,"klingons","klingons",-1228954811).cljs$core$IFn$_invoke$arity$1(world)),new cljs.core.Keyword(null,"deaths","deaths",1477907113),new cljs.core.Keyword(null,"deaths","deaths",1477907113).cljs$core$IFn$_invoke$arity$1(world),new cljs.core.Keyword(null,"klingons-killed","klingons-killed",424443456),new cljs.core.Keyword(null,"klingons-killed","klingons-killed",424443456).cljs$core$IFn$_invoke$arity$1(world),new cljs.core.Keyword(null,"romulans-killed","romulans-killed",-1598579846),new cljs.core.Keyword(null,"romulans-killed","romulans-killed",-1598579846).cljs$core$IFn$_invoke$arity$1(world));
var vec__668 = spacewar.ui.protocols.update_elements.call(null,state__$1,world);
var state__$2 = cljs.core.nth.call(null,vec__668,(0),null);
var events = cljs.core.nth.call(null,vec__668,(1),null);
return spacewar.ui.protocols.pack_update.call(null,(new spacewar.ui.complex.complex(state__$2)),events);
}));

(spacewar.ui.complex.complex.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
}));

(spacewar.ui.complex.complex.cljs$lang$type = true);

(spacewar.ui.complex.complex.cljs$lang$ctorStr = "spacewar.ui.complex/complex");

(spacewar.ui.complex.complex.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"spacewar.ui.complex/complex");
}));

/**
 * Positional factory function for spacewar.ui.complex/complex.
 */
spacewar.ui.complex.__GT_complex = (function spacewar$ui$complex$__GT_complex(state){
return (new spacewar.ui.complex.complex(state));
});


//# sourceMappingURL=complex.js.map
