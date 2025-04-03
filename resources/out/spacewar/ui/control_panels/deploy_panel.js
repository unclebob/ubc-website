// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('spacewar.ui.control_panels.deploy_panel');
goog.require('cljs.core');
goog.require('spacewar.ui.protocols');
goog.require('spacewar.ui.config');
goog.require('spacewar.ui.widgets.lcars');
goog.require('spacewar.ui.widgets.button');
goog.require('spacewar.game_logic.ship');

/**
* @constructor
 * @implements {spacewar.ui.protocols.Drawable}
*/
spacewar.ui.control_panels.deploy_panel.deploy_panel = (function (state){
this.state = state;
});
(spacewar.ui.control_panels.deploy_panel.deploy_panel.prototype.spacewar$ui$protocols$Drawable$ = cljs.core.PROTOCOL_SENTINEL);

(spacewar.ui.control_panels.deploy_panel.deploy_panel.prototype.spacewar$ui$protocols$Drawable$get_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
}));

(spacewar.ui.control_panels.deploy_panel.deploy_panel.prototype.spacewar$ui$protocols$Drawable$draw$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
spacewar.ui.widgets.lcars.draw_banner.call(null,self__.state);

return spacewar.ui.protocols.draw_elements.call(null,self__.state);
}));

(spacewar.ui.control_panels.deploy_panel.deploy_panel.prototype.spacewar$ui$protocols$Drawable$setup$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__1562 = self__.state;
var map__1562__$1 = cljs.core.__destructure_map.call(null,map__1562);
var x = cljs.core.get.call(null,map__1562__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__1562__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__1562__$1,new cljs.core.Keyword(null,"w","w",354169001));
var button_color = cljs.core.get.call(null,map__1562__$1,new cljs.core.Keyword(null,"button-color","button-color",371849340));
var button_w = ((w - spacewar.ui.config.stringer_width) - (10));
var am_x = ((x + spacewar.ui.config.stringer_width) + (10));
var am_y = ((y + spacewar.ui.config.banner_width) + spacewar.ui.config.button_gap);
var dl_x = am_x;
var dl_y = am_y;
var wpn_x = am_x;
var wpn_y = am_y;
var corbomite_x = am_x;
var corbomite_y = am_y;
var height = ((spacewar.ui.config.banner_width + spacewar.ui.config.button_gap) + spacewar.ui.config.button_h);
return (new spacewar.ui.control_panels.deploy_panel.deploy_panel(cljs.core.assoc.call(null,self__.state,new cljs.core.Keyword(null,"h","h",1109658740),height,new cljs.core.Keyword(null,"antimatter-factory","antimatter-factory",218121254),spacewar.ui.protocols.setup.call(null,spacewar.ui.widgets.button.__GT_button.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),am_x,new cljs.core.Keyword(null,"y","y",-1757859776),am_y,new cljs.core.Keyword(null,"w","w",354169001),button_w,new cljs.core.Keyword(null,"h","h",1109658740),spacewar.ui.config.button_h,new cljs.core.Keyword(null,"name","name",1843675177),"AM BASE",new cljs.core.Keyword(null,"color","color",1011675173),button_color,new cljs.core.Keyword(null,"left-up-event","left-up-event",-1153135824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"antimatter-factory","antimatter-factory",218121254)], null)], null))),new cljs.core.Keyword(null,"dilithium-factory","dilithium-factory",1437622905),spacewar.ui.protocols.setup.call(null,spacewar.ui.widgets.button.__GT_button.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),dl_x,new cljs.core.Keyword(null,"y","y",-1757859776),dl_y,new cljs.core.Keyword(null,"w","w",354169001),button_w,new cljs.core.Keyword(null,"h","h",1109658740),spacewar.ui.config.button_h,new cljs.core.Keyword(null,"name","name",1843675177),"DL BASE",new cljs.core.Keyword(null,"color","color",1011675173),button_color,new cljs.core.Keyword(null,"left-up-event","left-up-event",-1153135824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"dilithium-factory","dilithium-factory",1437622905)], null)], null))),new cljs.core.Keyword(null,"weapon-factory","weapon-factory",-475320995),spacewar.ui.protocols.setup.call(null,spacewar.ui.widgets.button.__GT_button.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),wpn_x,new cljs.core.Keyword(null,"y","y",-1757859776),wpn_y,new cljs.core.Keyword(null,"w","w",354169001),button_w,new cljs.core.Keyword(null,"h","h",1109658740),spacewar.ui.config.button_h,new cljs.core.Keyword(null,"name","name",1843675177),"WPN BASE",new cljs.core.Keyword(null,"color","color",1011675173),button_color,new cljs.core.Keyword(null,"left-up-event","left-up-event",-1153135824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"weapon-factory","weapon-factory",-475320995)], null)], null))),new cljs.core.Keyword(null,"corbomite-factory","corbomite-factory",339807181),spacewar.ui.protocols.setup.call(null,spacewar.ui.widgets.button.__GT_button.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),corbomite_x,new cljs.core.Keyword(null,"y","y",-1757859776),corbomite_y,new cljs.core.Keyword(null,"w","w",354169001),button_w,new cljs.core.Keyword(null,"h","h",1109658740),spacewar.ui.config.button_h,new cljs.core.Keyword(null,"name","name",1843675177),"CORB BASE",new cljs.core.Keyword(null,"color","color",1011675173),button_color,new cljs.core.Keyword(null,"left-up-event","left-up-event",-1153135824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"corbomite-factory","corbomite-factory",339807181)], null)], null))),new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"antimatter-factory","antimatter-factory",218121254),new cljs.core.Keyword(null,"dilithium-factory","dilithium-factory",1437622905),new cljs.core.Keyword(null,"weapon-factory","weapon-factory",-475320995),new cljs.core.Keyword(null,"corbomite-factory","corbomite-factory",339807181)], null))));
}));

(spacewar.ui.control_panels.deploy_panel.deploy_panel.prototype.spacewar$ui$protocols$Drawable$update_state$arity$2 = (function (_,world){
var self__ = this;
var ___$1 = this;
var map__1563 = world;
var map__1563__$1 = cljs.core.__destructure_map.call(null,map__1563);
var ship = cljs.core.get.call(null,map__1563__$1,new cljs.core.Keyword(null,"ship","ship",197863473));
var stars = cljs.core.get.call(null,map__1563__$1,new cljs.core.Keyword(null,"stars","stars",-556837771));
var am_deployable = spacewar.game_logic.ship.deployable_QMARK_.call(null,new cljs.core.Keyword(null,"antimatter-factory","antimatter-factory",218121254),ship,stars);
var dl_deployable = spacewar.game_logic.ship.deployable_QMARK_.call(null,new cljs.core.Keyword(null,"dilithium-factory","dilithium-factory",1437622905),ship,stars);
var wpn_deployable = spacewar.game_logic.ship.deployable_QMARK_.call(null,new cljs.core.Keyword(null,"weapon-factory","weapon-factory",-475320995),ship,stars);
var corb_deployable = spacewar.game_logic.ship.deployable_QMARK_.call(null,new cljs.core.Keyword(null,"corbomite-factory","corbomite-factory",339807181),ship,stars);
var state__$1 = spacewar.ui.protocols.change_elements.call(null,self__.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"antimatter-factory","antimatter-factory",218121254),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(am_deployable))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dilithium-factory","dilithium-factory",1437622905),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(dl_deployable))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weapon-factory","weapon-factory",-475320995),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(wpn_deployable))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"corbomite-factory","corbomite-factory",339807181),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(corb_deployable))], null)], null));
var vec__1564 = spacewar.ui.protocols.update_elements.call(null,state__$1,world);
var state__$2 = cljs.core.nth.call(null,vec__1564,(0),null);
var events = cljs.core.nth.call(null,vec__1564,(1),null);
return spacewar.ui.protocols.pack_update.call(null,(new spacewar.ui.control_panels.deploy_panel.deploy_panel(state__$2)),events);
}));

(spacewar.ui.control_panels.deploy_panel.deploy_panel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
}));

(spacewar.ui.control_panels.deploy_panel.deploy_panel.cljs$lang$type = true);

(spacewar.ui.control_panels.deploy_panel.deploy_panel.cljs$lang$ctorStr = "spacewar.ui.control-panels.deploy-panel/deploy-panel");

(spacewar.ui.control_panels.deploy_panel.deploy_panel.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"spacewar.ui.control-panels.deploy-panel/deploy-panel");
}));

/**
 * Positional factory function for spacewar.ui.control-panels.deploy-panel/deploy-panel.
 */
spacewar.ui.control_panels.deploy_panel.__GT_deploy_panel = (function spacewar$ui$control_panels$deploy_panel$__GT_deploy_panel(state){
return (new spacewar.ui.control_panels.deploy_panel.deploy_panel(state));
});


//# sourceMappingURL=deploy_panel.js.map
