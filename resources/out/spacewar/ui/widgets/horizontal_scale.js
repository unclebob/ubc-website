// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('spacewar.ui.widgets.horizontal_scale');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('spacewar.ui.protocols');
goog.require('spacewar.ui.config');
spacewar.ui.widgets.horizontal_scale.mercury_color = (function spacewar$ui$widgets$horizontal_scale$mercury_color(value,thresholds){
var max_value = cljs.core.first.call(null,cljs.core.last.call(null,thresholds));
var value__$1 = (function (){var x__5090__auto__ = value;
var y__5091__auto__ = max_value;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return cljs.core.some.call(null,(function (p1__1228_SHARP_){
if((cljs.core.first.call(null,p1__1228_SHARP_) >= value__$1)){
return cljs.core.second.call(null,p1__1228_SHARP_);
} else {
return null;
}
}),thresholds);
});

/**
* @constructor
 * @implements {spacewar.ui.protocols.Drawable}
*/
spacewar.ui.widgets.horizontal_scale.h_scale = (function (state){
this.state = state;
});
(spacewar.ui.widgets.horizontal_scale.h_scale.prototype.spacewar$ui$protocols$Drawable$ = cljs.core.PROTOCOL_SENTINEL);

(spacewar.ui.widgets.horizontal_scale.h_scale.prototype.spacewar$ui$protocols$Drawable$get_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
}));

(spacewar.ui.widgets.horizontal_scale.h_scale.prototype.spacewar$ui$protocols$Drawable$clone$arity$2 = (function (_,clone_state){
var self__ = this;
var ___$1 = this;
return (new spacewar.ui.widgets.horizontal_scale.h_scale(clone_state));
}));

(spacewar.ui.widgets.horizontal_scale.h_scale.prototype.spacewar$ui$protocols$Drawable$draw$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__1229 = self__.state;
var map__1229__$1 = cljs.core.__destructure_map.call(null,map__1229);
var x = cljs.core.get.call(null,map__1229__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__1229__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var min = cljs.core.get.call(null,map__1229__$1,new cljs.core.Keyword(null,"min","min",444991522));
var color = cljs.core.get.call(null,map__1229__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var value = cljs.core.get.call(null,map__1229__$1,new cljs.core.Keyword(null,"value","value",305978217));
var name = cljs.core.get.call(null,map__1229__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var w = cljs.core.get.call(null,map__1229__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__1229__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var max = cljs.core.get.call(null,map__1229__$1,new cljs.core.Keyword(null,"max","max",61366548));
var mercury_colors = cljs.core.get.call(null,map__1229__$1,new cljs.core.Keyword(null,"mercury-colors","mercury-colors",559663798));
var name_gap = (150);
var scale_w = (w - name_gap);
var scale_x = (x + name_gap);
var range = (max - min);
var mercury = (scale_w * ((value - min) / range));
cljs.core.apply.call(null,quil.core.fill,spacewar.ui.config.black);

quil.core.text_align.call(null,new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"top","top",-1856271961));

quil.core.text_font.call(null,new cljs.core.Keyword(null,"lcars","lcars",2100113880).cljs$core$IFn$_invoke$arity$1(quil.core.state.call(null,new cljs.core.Keyword(null,"fonts","fonts",1683167295))),(18));

quil.core.text.call(null,name,x,y);

quil.core.no_stroke.call(null);

cljs.core.apply.call(null,quil.core.fill,color);

quil.core.rect_mode.call(null,new cljs.core.Keyword(null,"corner","corner",1296717125));

quil.core.rect.call(null,scale_x,y,scale_w,h,h);

cljs.core.apply.call(null,quil.core.fill,spacewar.ui.widgets.horizontal_scale.mercury_color.call(null,value,mercury_colors));

return quil.core.rect.call(null,(scale_x + (scale_w - mercury)),((2) + y),mercury,(h - (4)),h);
}));

(spacewar.ui.widgets.horizontal_scale.h_scale.prototype.spacewar$ui$protocols$Drawable$setup$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(spacewar.ui.widgets.horizontal_scale.h_scale.prototype.spacewar$ui$protocols$Drawable$update_state$arity$2 = (function (_,world){
var self__ = this;
var ___$1 = this;
var vec__1230 = spacewar.ui.protocols.update_elements.call(null,self__.state,world);
var new_state = cljs.core.nth.call(null,vec__1230,(0),null);
var events = cljs.core.nth.call(null,vec__1230,(1),null);
return spacewar.ui.protocols.pack_update.call(null,(new spacewar.ui.widgets.horizontal_scale.h_scale(new_state)),events);
}));

(spacewar.ui.widgets.horizontal_scale.h_scale.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
}));

(spacewar.ui.widgets.horizontal_scale.h_scale.cljs$lang$type = true);

(spacewar.ui.widgets.horizontal_scale.h_scale.cljs$lang$ctorStr = "spacewar.ui.widgets.horizontal-scale/h-scale");

(spacewar.ui.widgets.horizontal_scale.h_scale.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"spacewar.ui.widgets.horizontal-scale/h-scale");
}));

/**
 * Positional factory function for spacewar.ui.widgets.horizontal-scale/h-scale.
 */
spacewar.ui.widgets.horizontal_scale.__GT_h_scale = (function spacewar$ui$widgets$horizontal_scale$__GT_h_scale(state){
return (new spacewar.ui.widgets.horizontal_scale.h_scale(state));
});


//# sourceMappingURL=horizontal_scale.js.map
