// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('spacewar.ui.widgets.lights');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('spacewar.ui.protocols');
goog.require('spacewar.ui.config');
spacewar.ui.widgets.lights.rectangle_light = (function spacewar$ui$widgets$lights$rectangle_light(x,y,w,h){
quil.core.rect_mode.call(null,new cljs.core.Keyword(null,"corner","corner",1296717125));

return quil.core.rect.call(null,x,y,w,h);
});
spacewar.ui.widgets.lights.round_rectangle_light = (function spacewar$ui$widgets$lights$round_rectangle_light(x,y,w,h){
quil.core.rect_mode.call(null,new cljs.core.Keyword(null,"corner","corner",1296717125));

quil.core.no_stroke.call(null);

return quil.core.rect.call(null,x,y,w,h,h);
});
spacewar.ui.widgets.lights.round_light = (function spacewar$ui$widgets$lights$round_light(x,y,w,h){
quil.core.ellipse_mode.call(null,new cljs.core.Keyword(null,"corner","corner",1296717125));

return quil.core.ellipse.call(null,x,y,w,h);
});

/**
* @constructor
 * @implements {spacewar.ui.protocols.Drawable}
*/
spacewar.ui.widgets.lights.indicator_light = (function (state){
this.state = state;
});
(spacewar.ui.widgets.lights.indicator_light.prototype.spacewar$ui$protocols$Drawable$ = cljs.core.PROTOCOL_SENTINEL);

(spacewar.ui.widgets.lights.indicator_light.prototype.spacewar$ui$protocols$Drawable$get_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
}));

(spacewar.ui.widgets.lights.indicator_light.prototype.spacewar$ui$protocols$Drawable$clone$arity$2 = (function (_,clone_state){
var self__ = this;
var ___$1 = this;
return (new spacewar.ui.widgets.lights.indicator_light(clone_state));
}));

(spacewar.ui.widgets.lights.indicator_light.prototype.spacewar$ui$protocols$Drawable$draw$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__638 = self__.state;
var map__638__$1 = cljs.core.__destructure_map.call(null,map__638);
var x = cljs.core.get.call(null,map__638__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__638__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__638__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__638__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var level = cljs.core.get.call(null,map__638__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var draw_func = cljs.core.get.call(null,map__638__$1,new cljs.core.Keyword(null,"draw-func","draw-func",944350484));
var colors = cljs.core.get.call(null,map__638__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
cljs.core.apply.call(null,quil.core.stroke,spacewar.ui.config.black);

quil.core.stroke_weight.call(null,(1));

cljs.core.apply.call(null,quil.core.fill,cljs.core.nth.call(null,colors,level));

return draw_func.call(null,x,y,w,h);
}));

(spacewar.ui.widgets.lights.indicator_light.prototype.spacewar$ui$protocols$Drawable$setup$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new spacewar.ui.widgets.lights.indicator_light(cljs.core.assoc.call(null,self__.state,new cljs.core.Keyword(null,"level","level",1290497552),(0))));
}));

(spacewar.ui.widgets.lights.indicator_light.prototype.spacewar$ui$protocols$Drawable$update_state$arity$2 = (function (this$,_){
var self__ = this;
var this$__$1 = this;
return spacewar.ui.protocols.pack_update.call(null,this$__$1);
}));

(spacewar.ui.widgets.lights.indicator_light.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
}));

(spacewar.ui.widgets.lights.indicator_light.cljs$lang$type = true);

(spacewar.ui.widgets.lights.indicator_light.cljs$lang$ctorStr = "spacewar.ui.widgets.lights/indicator-light");

(spacewar.ui.widgets.lights.indicator_light.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"spacewar.ui.widgets.lights/indicator-light");
}));

/**
 * Positional factory function for spacewar.ui.widgets.lights/indicator-light.
 */
spacewar.ui.widgets.lights.__GT_indicator_light = (function spacewar$ui$widgets$lights$__GT_indicator_light(state){
return (new spacewar.ui.widgets.lights.indicator_light(state));
});


//# sourceMappingURL=lights.js.map
