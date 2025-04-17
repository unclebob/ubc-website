// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('spacewar.ui.widgets.button');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('spacewar.ui.protocols');
goog.require('spacewar.geometry');
goog.require('spacewar.ui.config');

/**
* @constructor
 * @implements {spacewar.ui.protocols.Drawable}
*/
spacewar.ui.widgets.button.button = (function (state){
this.state = state;
});
(spacewar.ui.widgets.button.button.prototype.spacewar$ui$protocols$Drawable$ = cljs.core.PROTOCOL_SENTINEL);

(spacewar.ui.widgets.button.button.prototype.spacewar$ui$protocols$Drawable$get_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
}));

(spacewar.ui.widgets.button.button.prototype.spacewar$ui$protocols$Drawable$clone$arity$2 = (function (_,clone_state){
var self__ = this;
var ___$1 = this;
return (new spacewar.ui.widgets.button.button(clone_state));
}));

(spacewar.ui.widgets.button.button.prototype.spacewar$ui$protocols$Drawable$draw$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__562 = self__.state;
var map__562__$1 = cljs.core.__destructure_map.call(null,map__562);
var x = cljs.core.get.call(null,map__562__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__562__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var mouse_in = cljs.core.get.call(null,map__562__$1,new cljs.core.Keyword(null,"mouse-in","mouse-in",-744173595));
var color = cljs.core.get.call(null,map__562__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var disabled = cljs.core.get.call(null,map__562__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var left_down = cljs.core.get.call(null,map__562__$1,new cljs.core.Keyword(null,"left-down","left-down",2050158249));
var name = cljs.core.get.call(null,map__562__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var w = cljs.core.get.call(null,map__562__$1,new cljs.core.Keyword(null,"w","w",354169001));
var status = cljs.core.get.call(null,map__562__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var h = cljs.core.get.call(null,map__562__$1,new cljs.core.Keyword(null,"h","h",1109658740));
if(cljs.core.not.call(null,disabled)){
var tr__794__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__794__auto__);

quil.core.stroke_weight.call(null,(2));

cljs.core.apply.call(null,quil.core.stroke,(cljs.core.truth_(mouse_in)?spacewar.ui.config.white:color));

cljs.core.apply.call(null,quil.core.fill,(cljs.core.truth_(left_down)?spacewar.ui.config.white:color));

quil.core.rect_mode.call(null,new cljs.core.Keyword(null,"corner","corner",1296717125));

quil.core.rect.call(null,(0),(0),w,h,h);

quil.core.text_align.call(null,new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"bottom","bottom",-1550509018));

quil.core.text_font.call(null,new cljs.core.Keyword(null,"lcars","lcars",2100113880).cljs$core$IFn$_invoke$arity$1(quil.core.state.call(null,new cljs.core.Keyword(null,"fonts","fonts",1683167295))),(18));

cljs.core.apply.call(null,quil.core.fill,spacewar.ui.config.black);

quil.core.text.call(null,name,(w + (-10)),(h));

if(cljs.core.truth_(status)){
quil.core.text_size.call(null,(14));

quil.core.text_align.call(null,new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"top","top",-1856271961));

return quil.core.text.call(null,status,(10),(10));
} else {
return null;
}
}finally {quil.core.pop_matrix.call(null);
}} else {
return null;
}
}));

(spacewar.ui.widgets.button.button.prototype.spacewar$ui$protocols$Drawable$setup$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(spacewar.ui.widgets.button.button.prototype.spacewar$ui$protocols$Drawable$update_state$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
var map__563 = self__.state;
var map__563__$1 = cljs.core.__destructure_map.call(null,map__563);
var x = cljs.core.get.call(null,map__563__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__563__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__563__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__563__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var disabled = cljs.core.get.call(null,map__563__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
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
var new_state = cljs.core.assoc.call(null,self__.state,new cljs.core.Keyword(null,"mouse-in","mouse-in",-744173595),mouse_in,new cljs.core.Keyword(null,"left-down","left-down",2050158249),left_down);
var event = (cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.not.call(null,disabled);
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core.not.call(null,left_down);
if(and__5000__auto____$1){
var and__5000__auto____$2 = last_left_down;
if(cljs.core.truth_(and__5000__auto____$2)){
return mouse_in;
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())?new cljs.core.Keyword(null,"left-up-event","left-up-event",-1153135824).cljs$core$IFn$_invoke$arity$1(self__.state):null);
return spacewar.ui.protocols.pack_update.call(null,(new spacewar.ui.widgets.button.button(new_state)),event);
}));

(spacewar.ui.widgets.button.button.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
}));

(spacewar.ui.widgets.button.button.cljs$lang$type = true);

(spacewar.ui.widgets.button.button.cljs$lang$ctorStr = "spacewar.ui.widgets.button/button");

(spacewar.ui.widgets.button.button.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"spacewar.ui.widgets.button/button");
}));

/**
 * Positional factory function for spacewar.ui.widgets.button/button.
 */
spacewar.ui.widgets.button.__GT_button = (function spacewar$ui$widgets$button$__GT_button(state){
return (new spacewar.ui.widgets.button.button(state));
});


//# sourceMappingURL=button.js.map
