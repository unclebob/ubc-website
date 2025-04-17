// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('spacewar.ui.widgets.engage');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('spacewar.ui.protocols');
goog.require('spacewar.geometry');
goog.require('spacewar.ui.config');

/**
* @constructor
 * @implements {spacewar.ui.protocols.Drawable}
*/
spacewar.ui.widgets.engage.engage = (function (state){
this.state = state;
});
(spacewar.ui.widgets.engage.engage.prototype.spacewar$ui$protocols$Drawable$ = cljs.core.PROTOCOL_SENTINEL);

(spacewar.ui.widgets.engage.engage.prototype.spacewar$ui$protocols$Drawable$get_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
}));

(spacewar.ui.widgets.engage.engage.prototype.spacewar$ui$protocols$Drawable$clone$arity$2 = (function (_,clone_state){
var self__ = this;
var ___$1 = this;
return (new spacewar.ui.widgets.engage.engage(clone_state));
}));

(spacewar.ui.widgets.engage.engage.prototype.spacewar$ui$protocols$Drawable$draw$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__1146 = self__.state;
var map__1146__$1 = cljs.core.__destructure_map.call(null,map__1146);
var x = cljs.core.get.call(null,map__1146__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__1146__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var color = cljs.core.get.call(null,map__1146__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var activation_color = cljs.core.get.call(null,map__1146__$1,new cljs.core.Keyword(null,"activation-color","activation-color",-915187834));
var disabled = cljs.core.get.call(null,map__1146__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var button_time = cljs.core.get.call(null,map__1146__$1,new cljs.core.Keyword(null,"button-time","button-time",-1115439576));
var name = cljs.core.get.call(null,map__1146__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var w = cljs.core.get.call(null,map__1146__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__1146__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var cx = (w / (2));
var cy = (h / (2));
if(cljs.core.not.call(null,disabled)){
var tr__794__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__794__auto__);

quil.core.no_stroke.call(null);

quil.core.rect_mode.call(null,new cljs.core.Keyword(null,"center","center",-748944368));

cljs.core.apply.call(null,quil.core.fill,((cljs.core._EQ_.call(null,button_time,h))?spacewar.ui.config.white:activation_color));

quil.core.rect.call(null,cx,cy,w,h,w);

cljs.core.apply.call(null,quil.core.fill,color);

quil.core.rect.call(null,cx,cy,w,(h - button_time),w);

cljs.core.apply.call(null,quil.core.fill,spacewar.ui.config.black);

quil.core.text_align.call(null,new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"center","center",-748944368));

quil.core.text_font.call(null,new cljs.core.Keyword(null,"lcars","lcars",2100113880).cljs$core$IFn$_invoke$arity$1(quil.core.state.call(null,new cljs.core.Keyword(null,"fonts","fonts",1683167295))),(18));

return quil.core.text.call(null,name,cx,cy);
}finally {quil.core.pop_matrix.call(null);
}} else {
return null;
}
}));

(spacewar.ui.widgets.engage.engage.prototype.spacewar$ui$protocols$Drawable$setup$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new spacewar.ui.widgets.engage.engage(cljs.core.assoc.call(null,self__.state,new cljs.core.Keyword(null,"button-time","button-time",-1115439576),(0))));
}));

(spacewar.ui.widgets.engage.engage.prototype.spacewar$ui$protocols$Drawable$update_state$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
var map__1147 = self__.state;
var map__1147__$1 = cljs.core.__destructure_map.call(null,map__1147);
var x = cljs.core.get.call(null,map__1147__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__1147__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__1147__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__1147__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var disabled = cljs.core.get.call(null,map__1147__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var last_button_time = new cljs.core.Keyword(null,"button-time","button-time",-1115439576).cljs$core$IFn$_invoke$arity$1(self__.state);
var last_left_down = new cljs.core.Keyword(null,"left-down","left-down",2050158249).cljs$core$IFn$_invoke$arity$1(self__.state);
var mouse_pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.mouse_x.call(null),quil.core.mouse_y.call(null)], null);
var mouse_in = spacewar.geometry.inside_rect.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,w,h], null),mouse_pos);
var left_down = (function (){var and__5000__auto__ = cljs.core.not.call(null,disabled);
if(and__5000__auto__){
var and__5000__auto____$1 = mouse_in;
if(and__5000__auto____$1){
var and__5000__auto____$2 = quil.core.mouse_pressed_QMARK_.call(null);
if(cljs.core.truth_(and__5000__auto____$2)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",-399115937),quil.core.mouse_button.call(null));
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})();
var button_time = (cljs.core.truth_(left_down)?(function (){var x__5090__auto__ = h;
var y__5091__auto__ = ((30) + last_button_time);
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})():(0));
var new_state = cljs.core.assoc.call(null,self__.state,new cljs.core.Keyword(null,"mouse-in","mouse-in",-744173595),mouse_in,new cljs.core.Keyword(null,"left-down","left-down",2050158249),left_down,new cljs.core.Keyword(null,"mouse-pos","mouse-pos",370762057),mouse_pos,new cljs.core.Keyword(null,"button-time","button-time",-1115439576),button_time);
var event = (cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.not.call(null,left_down);
if(and__5000__auto__){
var and__5000__auto____$1 = last_left_down;
if(cljs.core.truth_(and__5000__auto____$1)){
return ((mouse_in) && (cljs.core._EQ_.call(null,last_button_time,h)));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())?new cljs.core.Keyword(null,"left-up-event","left-up-event",-1153135824).cljs$core$IFn$_invoke$arity$1(self__.state):null);
return spacewar.ui.protocols.pack_update.call(null,(new spacewar.ui.widgets.engage.engage(new_state)),event);
}));

(spacewar.ui.widgets.engage.engage.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
}));

(spacewar.ui.widgets.engage.engage.cljs$lang$type = true);

(spacewar.ui.widgets.engage.engage.cljs$lang$ctorStr = "spacewar.ui.widgets.engage/engage");

(spacewar.ui.widgets.engage.engage.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"spacewar.ui.widgets.engage/engage");
}));

/**
 * Positional factory function for spacewar.ui.widgets.engage/engage.
 */
spacewar.ui.widgets.engage.__GT_engage = (function spacewar$ui$widgets$engage$__GT_engage(state){
return (new spacewar.ui.widgets.engage.engage(state));
});


//# sourceMappingURL=engage.js.map
