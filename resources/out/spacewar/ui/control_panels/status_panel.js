// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('spacewar.ui.control_panels.status_panel');
goog.require('cljs.core');
goog.require('spacewar.ui.protocols');
goog.require('spacewar.ui.config');
goog.require('spacewar.game_logic.config');
goog.require('spacewar.ui.widgets.horizontal_scale');

/**
* @constructor
 * @implements {spacewar.ui.protocols.Drawable}
*/
spacewar.ui.control_panels.status_panel.status_panel = (function (state){
this.state = state;
});
(spacewar.ui.control_panels.status_panel.status_panel.prototype.spacewar$ui$protocols$Drawable$ = cljs.core.PROTOCOL_SENTINEL);

(spacewar.ui.control_panels.status_panel.status_panel.prototype.spacewar$ui$protocols$Drawable$get_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
}));

(spacewar.ui.control_panels.status_panel.status_panel.prototype.spacewar$ui$protocols$Drawable$clone$arity$2 = (function (_,clone_state){
var self__ = this;
var ___$1 = this;
return (new spacewar.ui.control_panels.status_panel.status_panel(clone_state));
}));

(spacewar.ui.control_panels.status_panel.status_panel.prototype.spacewar$ui$protocols$Drawable$draw$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return spacewar.ui.protocols.draw_elements.call(null,self__.state);
}));

(spacewar.ui.control_panels.status_panel.status_panel.prototype.spacewar$ui$protocols$Drawable$setup$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__1235 = self__.state;
var map__1235__$1 = cljs.core.__destructure_map.call(null,map__1235);
var x = cljs.core.get.call(null,map__1235__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__1235__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__1235__$1,new cljs.core.Keyword(null,"w","w",354169001));
var color = cljs.core.get.call(null,map__1235__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var mercury_color = cljs.core.get.call(null,map__1235__$1,new cljs.core.Keyword(null,"mercury-color","mercury-color",321536675));
var scale_x = x;
var scale_h = (20);
var scale_w = w;
var scale_gap = (10);
var antimatter_y = y;
var dilithium_y = ((antimatter_y + scale_h) + scale_gap);
var core_temp_y = ((dilithium_y + scale_h) + scale_gap);
var shields_y = ((core_temp_y + scale_h) + scale_gap);
return (new spacewar.ui.control_panels.status_panel.status_panel(cljs.core.assoc.call(null,self__.state,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),spacewar.ui.protocols.setup.call(null,spacewar.ui.widgets.horizontal_scale.__GT_h_scale.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"mercury-colors","mercury-colors",559663798),new cljs.core.Keyword(null,"x","x",2099068185)],[antimatter_y,(0),color,"ANTIMATTER",scale_w,spacewar.game_logic.config.ship_antimatter,scale_h,spacewar.game_logic.config.ship_antimatter,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0.1 * spacewar.game_logic.config.ship_antimatter),spacewar.ui.config.red], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0.25 * spacewar.game_logic.config.ship_antimatter),spacewar.ui.config.orange], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spacewar.game_logic.config.ship_antimatter,mercury_color], null)], null),scale_x]))),new cljs.core.Keyword(null,"dilithium","dilithium",1152933090),spacewar.ui.protocols.setup.call(null,spacewar.ui.widgets.horizontal_scale.__GT_h_scale.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"mercury-colors","mercury-colors",559663798),new cljs.core.Keyword(null,"x","x",2099068185)],[dilithium_y,(0),color,"DILITHIUM",scale_w,spacewar.game_logic.config.ship_dilithium,scale_h,spacewar.game_logic.config.ship_dilithium,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0.1),spacewar.ui.config.red], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0.2 * spacewar.game_logic.config.ship_dilithium),spacewar.ui.config.orange], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spacewar.game_logic.config.ship_dilithium,mercury_color], null)], null),scale_x]))),new cljs.core.Keyword(null,"core-temp","core-temp",715877178),spacewar.ui.protocols.setup.call(null,spacewar.ui.widgets.horizontal_scale.__GT_h_scale.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"mercury-colors","mercury-colors",559663798),new cljs.core.Keyword(null,"x","x",2099068185)],[core_temp_y,(0),color,"CORE TEMP",scale_w,(50),scale_h,(100),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(70),mercury_color], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(85),spacewar.ui.config.orange], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),spacewar.ui.config.red], null)], null),scale_x]))),new cljs.core.Keyword(null,"shields","shields",-295786721),spacewar.ui.protocols.setup.call(null,spacewar.ui.widgets.horizontal_scale.__GT_h_scale.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"mercury-colors","mercury-colors",559663798),new cljs.core.Keyword(null,"x","x",2099068185)],[shields_y,(0),color,"SHIELDS",scale_w,spacewar.game_logic.config.ship_shields,scale_h,spacewar.game_logic.config.ship_shields,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0.1 * spacewar.game_logic.config.ship_shields),spacewar.ui.config.red], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0.6 * spacewar.game_logic.config.ship_shields),spacewar.ui.config.orange], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spacewar.game_logic.config.ship_shields,mercury_color], null)], null),scale_x]))),new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),new cljs.core.Keyword(null,"dilithium","dilithium",1152933090),new cljs.core.Keyword(null,"core-temp","core-temp",715877178),new cljs.core.Keyword(null,"shields","shields",-295786721)], null))));
}));

(spacewar.ui.control_panels.status_panel.status_panel.prototype.spacewar$ui$protocols$Drawable$update_state$arity$2 = (function (_,world){
var self__ = this;
var ___$1 = this;
var state__$1 = spacewar.ui.protocols.change_elements.call(null,self__.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"core-temp","core-temp",715877178),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"core-temp","core-temp",715877178).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(world))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shields","shields",-295786721),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"shields","shields",-295786721).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(world))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(world))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dilithium","dilithium",1152933090),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"dilithium","dilithium",1152933090).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(world))], null)], null));
var vec__1236 = spacewar.ui.protocols.update_elements.call(null,state__$1,world);
var state__$2 = cljs.core.nth.call(null,vec__1236,(0),null);
var events = cljs.core.nth.call(null,vec__1236,(1),null);
return spacewar.ui.protocols.pack_update.call(null,(new spacewar.ui.control_panels.status_panel.status_panel(state__$2)),events);
}));

(spacewar.ui.control_panels.status_panel.status_panel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
}));

(spacewar.ui.control_panels.status_panel.status_panel.cljs$lang$type = true);

(spacewar.ui.control_panels.status_panel.status_panel.cljs$lang$ctorStr = "spacewar.ui.control-panels.status-panel/status-panel");

(spacewar.ui.control_panels.status_panel.status_panel.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"spacewar.ui.control-panels.status-panel/status-panel");
}));

/**
 * Positional factory function for spacewar.ui.control-panels.status-panel/status-panel.
 */
spacewar.ui.control_panels.status_panel.__GT_status_panel = (function spacewar$ui$control_panels$status_panel$__GT_status_panel(state){
return (new spacewar.ui.control_panels.status_panel.status_panel(state));
});


//# sourceMappingURL=status_panel.js.map
