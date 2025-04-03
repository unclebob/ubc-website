// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('spacewar.ui.widgets.named_indicator');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('spacewar.ui.protocols');
goog.require('spacewar.ui.config');
goog.require('spacewar.ui.widgets.lights');

/**
* @constructor
 * @implements {spacewar.ui.protocols.Drawable}
*/
spacewar.ui.widgets.named_indicator.named_indicator = (function (state){
this.state = state;
});
(spacewar.ui.widgets.named_indicator.named_indicator.prototype.spacewar$ui$protocols$Drawable$ = cljs.core.PROTOCOL_SENTINEL);

(spacewar.ui.widgets.named_indicator.named_indicator.prototype.spacewar$ui$protocols$Drawable$get_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
}));

(spacewar.ui.widgets.named_indicator.named_indicator.prototype.spacewar$ui$protocols$Drawable$clone$arity$2 = (function (_,clone_state){
var self__ = this;
var ___$1 = this;
return (new spacewar.ui.widgets.named_indicator.named_indicator(clone_state));
}));

(spacewar.ui.widgets.named_indicator.named_indicator.prototype.spacewar$ui$protocols$Drawable$draw$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__1245 = self__.state;
var map__1245__$1 = cljs.core.__destructure_map.call(null,map__1245);
var x = cljs.core.get.call(null,map__1245__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__1245__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var name = cljs.core.get.call(null,map__1245__$1,new cljs.core.Keyword(null,"name","name",1843675177));
spacewar.ui.protocols.draw_elements.call(null,self__.state);

cljs.core.apply.call(null,quil.core.fill,spacewar.ui.config.black);

quil.core.text_align.call(null,new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"top","top",-1856271961));

quil.core.text_font.call(null,new cljs.core.Keyword(null,"lcars","lcars",2100113880).cljs$core$IFn$_invoke$arity$1(quil.core.state.call(null,new cljs.core.Keyword(null,"fonts","fonts",1683167295))),(18));

return quil.core.text.call(null,name,(x + (25)),y);
}));

(spacewar.ui.widgets.named_indicator.named_indicator.prototype.spacewar$ui$protocols$Drawable$setup$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new spacewar.ui.widgets.named_indicator.named_indicator(cljs.core.assoc.call(null,self__.state,new cljs.core.Keyword(null,"indicator","indicator",1928219637),spacewar.ui.protocols.setup.call(null,spacewar.ui.widgets.lights.__GT_indicator_light.call(null,self__.state)),new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indicator","indicator",1928219637)], null))));
}));

(spacewar.ui.widgets.named_indicator.named_indicator.prototype.spacewar$ui$protocols$Drawable$update_state$arity$2 = (function (_,world){
var self__ = this;
var ___$1 = this;
var state__$1 = spacewar.ui.protocols.change_elements.call(null,self__.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indicator","indicator",1928219637),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(self__.state)], null)], null));
var vec__1246 = spacewar.ui.protocols.update_elements.call(null,state__$1,world);
var state__$2 = cljs.core.nth.call(null,vec__1246,(0),null);
var events = cljs.core.nth.call(null,vec__1246,(1),null);
return spacewar.ui.protocols.pack_update.call(null,(new spacewar.ui.widgets.named_indicator.named_indicator(state__$2)),events);
}));

(spacewar.ui.widgets.named_indicator.named_indicator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
}));

(spacewar.ui.widgets.named_indicator.named_indicator.cljs$lang$type = true);

(spacewar.ui.widgets.named_indicator.named_indicator.cljs$lang$ctorStr = "spacewar.ui.widgets.named-indicator/named-indicator");

(spacewar.ui.widgets.named_indicator.named_indicator.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"spacewar.ui.widgets.named-indicator/named-indicator");
}));

/**
 * Positional factory function for spacewar.ui.widgets.named-indicator/named-indicator.
 */
spacewar.ui.widgets.named_indicator.__GT_named_indicator = (function spacewar$ui$widgets$named_indicator$__GT_named_indicator(state){
return (new spacewar.ui.widgets.named_indicator.named_indicator(state));
});


//# sourceMappingURL=named_indicator.js.map
