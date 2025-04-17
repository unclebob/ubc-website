// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('spacewar.ui.widgets.slider');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('spacewar.ui.protocols');
goog.require('spacewar.geometry');
goog.require('spacewar.ui.config');
spacewar.ui.widgets.slider.draw_slider_bezel = (function spacewar$ui$widgets$slider$draw_slider_bezel(state){
var map__566 = state;
var map__566__$1 = cljs.core.__destructure_map.call(null,map__566);
var w = cljs.core.get.call(null,map__566__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__566__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var color = cljs.core.get.call(null,map__566__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var mouse_in = cljs.core.get.call(null,map__566__$1,new cljs.core.Keyword(null,"mouse-in","mouse-in",-744173595));
quil.core.stroke_weight.call(null,(2));

cljs.core.apply.call(null,quil.core.stroke,spacewar.ui.config.light_grey);

cljs.core.apply.call(null,quil.core.fill,spacewar.ui.config.light_grey);

quil.core.rect_mode.call(null,new cljs.core.Keyword(null,"corner","corner",1296717125));

quil.core.rect.call(null,(0),(0),w,h);

cljs.core.apply.call(null,quil.core.stroke,(cljs.core.truth_(mouse_in)?spacewar.ui.config.white:color));

cljs.core.apply.call(null,quil.core.fill,color);

return quil.core.rect.call(null,(0),(0),w,h,w);
});
spacewar.ui.widgets.slider.draw_slider_thumb = (function spacewar$ui$widgets$slider$draw_slider_thumb(p__567){
var map__568 = p__567;
var map__568__$1 = cljs.core.__destructure_map.call(null,map__568);
var stroke = cljs.core.get.call(null,map__568__$1,new cljs.core.Keyword(null,"stroke","stroke",1741823555));
var thumb_color = cljs.core.get.call(null,map__568__$1,new cljs.core.Keyword(null,"thumb-color","thumb-color",2069729567));
var thumb_x = cljs.core.get.call(null,map__568__$1,new cljs.core.Keyword(null,"thumb-x","thumb-x",1377869681));
var thumb_y = cljs.core.get.call(null,map__568__$1,new cljs.core.Keyword(null,"thumb-y","thumb-y",-1319695779));
var w = cljs.core.get.call(null,map__568__$1,new cljs.core.Keyword(null,"w","w",354169001));
var thumb_h = cljs.core.get.call(null,map__568__$1,new cljs.core.Keyword(null,"thumb-h","thumb-h",-1854577768));
var value = cljs.core.get.call(null,map__568__$1,new cljs.core.Keyword(null,"value","value",305978217));
quil.core.stroke_weight.call(null,(1));

cljs.core.apply.call(null,quil.core.stroke,stroke);

cljs.core.apply.call(null,quil.core.fill,thumb_color);

quil.core.rect_mode.call(null,new cljs.core.Keyword(null,"center","center",-748944368));

quil.core.rect.call(null,thumb_x,thumb_y,w,thumb_h,thumb_h);

cljs.core.apply.call(null,quil.core.fill,spacewar.ui.config.black);

quil.core.text_align.call(null,new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"center","center",-748944368));

quil.core.text_font.call(null,new cljs.core.Keyword(null,"lcars-small","lcars-small",620623076).cljs$core$IFn$_invoke$arity$1(quil.core.state.call(null,new cljs.core.Keyword(null,"fonts","fonts",1683167295))),(12));

return quil.core.text.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),thumb_x,thumb_y);
});
spacewar.ui.widgets.slider.slider_thumb_val = (function spacewar$ui$widgets$slider$slider_thumb_val(state){
var map__569 = state;
var map__569__$1 = cljs.core.__destructure_map.call(null,map__569);
var y = cljs.core.get.call(null,map__569__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var min_val = cljs.core.get.call(null,map__569__$1,new cljs.core.Keyword(null,"min-val","min-val",-243137826));
var max_val = cljs.core.get.call(null,map__569__$1,new cljs.core.Keyword(null,"max-val","max-val",-1492247884));
var mouse_pos = cljs.core.get.call(null,map__569__$1,new cljs.core.Keyword(null,"mouse-pos","mouse-pos",370762057));
var margin = cljs.core.get.call(null,map__569__$1,new cljs.core.Keyword(null,"margin","margin",-995903681));
var range = cljs.core.get.call(null,map__569__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var increment = cljs.core.get.call(null,map__569__$1,new cljs.core.Keyword(null,"increment","increment",-1558831484));
var vec__570 = mouse_pos;
var _ = cljs.core.nth.call(null,vec__570,(0),null);
var my = cljs.core.nth.call(null,vec__570,(1),null);
var rel_my = ((my - margin) - y);
var m_pos = (rel_my / increment);
var m_val = (function (){var x__5087__auto__ = min_val;
var y__5088__auto__ = (function (){var x__5090__auto__ = max_val;
var y__5091__auto__ = (min_val + quil.core.floor.call(null,(range - m_pos)));
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
return m_val;
});
spacewar.ui.widgets.slider.draw_slider_labels = (function spacewar$ui$widgets$slider$draw_slider_labels(state){
var map__573 = state;
var map__573__$1 = cljs.core.__destructure_map.call(null,map__573);
var min_val = cljs.core.get.call(null,map__573__$1,new cljs.core.Keyword(null,"min-val","min-val",-243137826));
var max_val = cljs.core.get.call(null,map__573__$1,new cljs.core.Keyword(null,"max-val","max-val",-1492247884));
var thumb_x = cljs.core.get.call(null,map__573__$1,new cljs.core.Keyword(null,"thumb-x","thumb-x",1377869681));
var min_y = cljs.core.get.call(null,map__573__$1,new cljs.core.Keyword(null,"min-y","min-y",-1969872948));
var max_y = cljs.core.get.call(null,map__573__$1,new cljs.core.Keyword(null,"max-y","max-y",1525628082));
cljs.core.apply.call(null,quil.core.fill,spacewar.ui.config.black);

quil.core.text_align.call(null,new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"center","center",-748944368));

quil.core.text_font.call(null,new cljs.core.Keyword(null,"lcars-small","lcars-small",620623076).cljs$core$IFn$_invoke$arity$1(quil.core.state.call(null,new cljs.core.Keyword(null,"fonts","fonts",1683167295))),(12));

quil.core.text.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(min_val),thumb_x,min_y);

return quil.core.text.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_val),thumb_x,max_y);
});
spacewar.ui.widgets.slider.set_slider_state = (function spacewar$ui$widgets$slider$set_slider_state(state){
var map__574 = state;
var map__574__$1 = cljs.core.__destructure_map.call(null,map__574);
var w = cljs.core.get.call(null,map__574__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__574__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var min_val = cljs.core.get.call(null,map__574__$1,new cljs.core.Keyword(null,"min-val","min-val",-243137826));
var max_val = cljs.core.get.call(null,map__574__$1,new cljs.core.Keyword(null,"max-val","max-val",-1492247884));
var range = (max_val - min_val);
var margin = (20);
var increment = (((h - margin) - margin) / range);
var thumb_x = (w / (2));
var max_y = margin;
var min_y = (margin + (increment * range));
var thumb_h = (20);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"range","range",1639692286),range,new cljs.core.Keyword(null,"margin","margin",-995903681),margin,new cljs.core.Keyword(null,"increment","increment",-1558831484),increment,new cljs.core.Keyword(null,"thumb-x","thumb-x",1377869681),thumb_x,new cljs.core.Keyword(null,"max-y","max-y",1525628082),max_y,new cljs.core.Keyword(null,"min-y","min-y",-1969872948),min_y,new cljs.core.Keyword(null,"thumb-h","thumb-h",-1854577768),thumb_h);
});

/**
* @constructor
 * @implements {spacewar.ui.protocols.Drawable}
*/
spacewar.ui.widgets.slider.slider = (function (state){
this.state = state;
});
(spacewar.ui.widgets.slider.slider.prototype.spacewar$ui$protocols$Drawable$ = cljs.core.PROTOCOL_SENTINEL);

(spacewar.ui.widgets.slider.slider.prototype.spacewar$ui$protocols$Drawable$get_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
}));

(spacewar.ui.widgets.slider.slider.prototype.spacewar$ui$protocols$Drawable$clone$arity$2 = (function (_,clone_state){
var self__ = this;
var ___$1 = this;
return (new spacewar.ui.widgets.slider.slider(clone_state));
}));

(spacewar.ui.widgets.slider.slider.prototype.spacewar$ui$protocols$Drawable$draw$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__575 = self__.state;
var map__575__$1 = cljs.core.__destructure_map.call(null,map__575);
var x = cljs.core.get.call(null,map__575__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var margin = cljs.core.get.call(null,map__575__$1,new cljs.core.Keyword(null,"margin","margin",-995903681));
var thumb_color = cljs.core.get.call(null,map__575__$1,new cljs.core.Keyword(null,"thumb-color","thumb-color",2069729567));
var y = cljs.core.get.call(null,map__575__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var increment = cljs.core.get.call(null,map__575__$1,new cljs.core.Keyword(null,"increment","increment",-1558831484));
var mouse_in = cljs.core.get.call(null,map__575__$1,new cljs.core.Keyword(null,"mouse-in","mouse-in",-744173595));
var disabled = cljs.core.get.call(null,map__575__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var left_down = cljs.core.get.call(null,map__575__$1,new cljs.core.Keyword(null,"left-down","left-down",2050158249));
var value = cljs.core.get.call(null,map__575__$1,new cljs.core.Keyword(null,"value","value",305978217));
var w = cljs.core.get.call(null,map__575__$1,new cljs.core.Keyword(null,"w","w",354169001));
var thumb_x = cljs.core.get.call(null,map__575__$1,new cljs.core.Keyword(null,"thumb-x","thumb-x",1377869681));
var max_val = cljs.core.get.call(null,map__575__$1,new cljs.core.Keyword(null,"max-val","max-val",-1492247884));
var thumb_h = cljs.core.get.call(null,map__575__$1,new cljs.core.Keyword(null,"thumb-h","thumb-h",-1854577768));
var relative_pos = (max_val - value);
var thumb_y = (margin + (relative_pos * increment));
if(cljs.core.not.call(null,disabled)){
var tr__794__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__794__auto__);

spacewar.ui.widgets.slider.draw_slider_bezel.call(null,self__.state);

if(cljs.core.not.call(null,left_down)){
spacewar.ui.widgets.slider.draw_slider_labels.call(null,self__.state);
} else {
}

spacewar.ui.widgets.slider.draw_slider_thumb.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),(cljs.core.truth_(mouse_in)?spacewar.ui.config.black:spacewar.ui.config.light_grey),new cljs.core.Keyword(null,"thumb-color","thumb-color",2069729567),thumb_color,new cljs.core.Keyword(null,"thumb-x","thumb-x",1377869681),thumb_x,new cljs.core.Keyword(null,"thumb-y","thumb-y",-1319695779),thumb_y,new cljs.core.Keyword(null,"w","w",354169001),w,new cljs.core.Keyword(null,"thumb-h","thumb-h",-1854577768),thumb_h,new cljs.core.Keyword(null,"value","value",305978217),value], null));

if(cljs.core.truth_(left_down)){
var m_val = spacewar.ui.widgets.slider.slider_thumb_val.call(null,self__.state);
var m_pos = (max_val - m_val);
var mouse_thumb_y = (margin + (m_pos * increment));
return spacewar.ui.widgets.slider.draw_slider_thumb.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),spacewar.ui.config.light_grey,new cljs.core.Keyword(null,"thumb-color","thumb-color",2069729567),spacewar.ui.config.light_grey,new cljs.core.Keyword(null,"thumb-x","thumb-x",1377869681),thumb_x,new cljs.core.Keyword(null,"thumb-y","thumb-y",-1319695779),mouse_thumb_y,new cljs.core.Keyword(null,"w","w",354169001),w,new cljs.core.Keyword(null,"thumb-h","thumb-h",-1854577768),thumb_h,new cljs.core.Keyword(null,"value","value",305978217),m_val], null));
} else {
return null;
}
}finally {quil.core.pop_matrix.call(null);
}} else {
return null;
}
}));

(spacewar.ui.widgets.slider.slider.prototype.spacewar$ui$protocols$Drawable$setup$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new spacewar.ui.widgets.slider.slider(spacewar.ui.widgets.slider.set_slider_state.call(null,self__.state)));
}));

(spacewar.ui.widgets.slider.slider.prototype.spacewar$ui$protocols$Drawable$update_state$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
var map__576 = self__.state;
var map__576__$1 = cljs.core.__destructure_map.call(null,map__576);
var x = cljs.core.get.call(null,map__576__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__576__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__576__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__576__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var last_left_down = new cljs.core.Keyword(null,"left-down","left-down",2050158249).cljs$core$IFn$_invoke$arity$1(self__.state);
var mouse_pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.mouse_x.call(null),quil.core.mouse_y.call(null)], null);
var mouse_in = spacewar.geometry.inside_rect.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,w,h], null),mouse_pos);
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
var state__$1 = spacewar.ui.widgets.slider.set_slider_state.call(null,self__.state);
var state__$2 = cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"mouse-in","mouse-in",-744173595),mouse_in,new cljs.core.Keyword(null,"left-down","left-down",2050158249),left_down,new cljs.core.Keyword(null,"mouse-pos","mouse-pos",370762057),mouse_pos);
var button_released_QMARK_ = (function (){var and__5000__auto__ = cljs.core.not.call(null,left_down);
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
var event = (cljs.core.truth_(button_released_QMARK_)?cljs.core.assoc.call(null,new cljs.core.Keyword(null,"left-up-event","left-up-event",-1153135824).cljs$core$IFn$_invoke$arity$1(state__$2),new cljs.core.Keyword(null,"value","value",305978217),spacewar.ui.widgets.slider.slider_thumb_val.call(null,state__$2)):null);
return spacewar.ui.protocols.pack_update.call(null,(new spacewar.ui.widgets.slider.slider(state__$2)),event);
}));

(spacewar.ui.widgets.slider.slider.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
}));

(spacewar.ui.widgets.slider.slider.cljs$lang$type = true);

(spacewar.ui.widgets.slider.slider.cljs$lang$ctorStr = "spacewar.ui.widgets.slider/slider");

(spacewar.ui.widgets.slider.slider.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"spacewar.ui.widgets.slider/slider");
}));

/**
 * Positional factory function for spacewar.ui.widgets.slider/slider.
 */
spacewar.ui.widgets.slider.__GT_slider = (function spacewar$ui$widgets$slider$__GT_slider(state){
return (new spacewar.ui.widgets.slider.slider(state));
});


//# sourceMappingURL=slider.js.map
