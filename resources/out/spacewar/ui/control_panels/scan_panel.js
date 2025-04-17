// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('spacewar.ui.control_panels.scan_panel');
goog.require('cljs.core');
goog.require('spacewar.ui.protocols');
goog.require('spacewar.ui.config');
goog.require('spacewar.ui.widgets.button');
goog.require('spacewar.ui.widgets.slider');
goog.require('spacewar.ui.widgets.lcars');
spacewar.ui.control_panels.scan_panel.button_color = (function spacewar$ui$control_panels$scan_panel$button_color(selected,button){
if(cljs.core._EQ_.call(null,selected,button)){
return spacewar.ui.config.scan_panel_selection_color;
} else {
return spacewar.ui.config.scan_panel_button_color;
}
});

/**
* @constructor
 * @implements {spacewar.ui.protocols.Drawable}
*/
spacewar.ui.control_panels.scan_panel.scan_panel = (function (state){
this.state = state;
});
(spacewar.ui.control_panels.scan_panel.scan_panel.prototype.spacewar$ui$protocols$Drawable$ = cljs.core.PROTOCOL_SENTINEL);

(spacewar.ui.control_panels.scan_panel.scan_panel.prototype.spacewar$ui$protocols$Drawable$draw$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
spacewar.ui.widgets.lcars.draw_banner.call(null,self__.state);

return spacewar.ui.protocols.draw_elements.call(null,self__.state);
}));

(spacewar.ui.control_panels.scan_panel.scan_panel.prototype.spacewar$ui$protocols$Drawable$setup$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__579 = self__.state;
var map__579__$1 = cljs.core.__destructure_map.call(null,map__579);
var x = cljs.core.get.call(null,map__579__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__579__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__579__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__579__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var button_color = cljs.core.get.call(null,map__579__$1,new cljs.core.Keyword(null,"button-color","button-color",371849340));
var color = cljs.core.get.call(null,map__579__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var bottom = (y + h);
var button_w = ((w - spacewar.ui.config.stringer_width) - (10));
var strategic_y = ((y + spacewar.ui.config.banner_width) + spacewar.ui.config.button_gap);
var tactical_y = ((strategic_y + spacewar.ui.config.button_h) + spacewar.ui.config.button_gap);
var front_view_y = ((tactical_y + spacewar.ui.config.button_h) + spacewar.ui.config.button_gap);
var strat_scale_slider_x = ((((x + w) - spacewar.ui.config.stringer_width) - spacewar.ui.config.slider_width) - spacewar.ui.config.button_gap);
var strat_scale_slider_y = ((front_view_y + spacewar.ui.config.button_h) + spacewar.ui.config.button_gap);
var strat_scale_slider_h = (((bottom - front_view_y) - spacewar.ui.config.button_h) - spacewar.ui.config.button_gap);
return (new spacewar.ui.control_panels.scan_panel.scan_panel(cljs.core.assoc.call(null,self__.state,new cljs.core.Keyword(null,"strategic","strategic",-235298408),spacewar.ui.protocols.setup.call(null,spacewar.ui.widgets.button.__GT_button.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),strategic_y,new cljs.core.Keyword(null,"w","w",354169001),button_w,new cljs.core.Keyword(null,"h","h",1109658740),spacewar.ui.config.button_h,new cljs.core.Keyword(null,"name","name",1843675177),"STRAT",new cljs.core.Keyword(null,"color","color",1011675173),button_color,new cljs.core.Keyword(null,"left-up-event","left-up-event",-1153135824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"strategic-scan","strategic-scan",1955219168)], null)], null))),new cljs.core.Keyword(null,"tactical","tactical",-1565102687),spacewar.ui.protocols.setup.call(null,spacewar.ui.widgets.button.__GT_button.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),tactical_y,new cljs.core.Keyword(null,"w","w",354169001),button_w,new cljs.core.Keyword(null,"h","h",1109658740),spacewar.ui.config.button_h,new cljs.core.Keyword(null,"name","name",1843675177),"TACT",new cljs.core.Keyword(null,"color","color",1011675173),button_color,new cljs.core.Keyword(null,"left-up-event","left-up-event",-1153135824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"tactical-scan","tactical-scan",-1078051333)], null)], null))),new cljs.core.Keyword(null,"front-view","front-view",-1631827770),spacewar.ui.protocols.setup.call(null,spacewar.ui.widgets.button.__GT_button.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),front_view_y,new cljs.core.Keyword(null,"w","w",354169001),button_w,new cljs.core.Keyword(null,"h","h",1109658740),spacewar.ui.config.button_h,new cljs.core.Keyword(null,"name","name",1843675177),"FRONT",new cljs.core.Keyword(null,"color","color",1011675173),button_color,new cljs.core.Keyword(null,"left-up-event","left-up-event",-1153135824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"front-view","front-view",-1631827770)], null)], null))),new cljs.core.Keyword(null,"strat-scale","strat-scale",-510133488),spacewar.ui.protocols.setup.call(null,spacewar.ui.widgets.slider.__GT_slider.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"left-up-event","left-up-event",-1153135824),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"max-val","max-val",-1492247884),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"min-val","min-val",-243137826),new cljs.core.Keyword(null,"thumb-color","thumb-color",2069729567)],[strat_scale_slider_y,color,new cljs.core.Keyword(null,"true","true",-1114210334),spacewar.ui.config.slider_width,(1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"strat-scale","strat-scale",-510133488)], null),strat_scale_slider_h,(10),strat_scale_slider_x,(1),button_color]))),new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strategic","strategic",-235298408),new cljs.core.Keyword(null,"tactical","tactical",-1565102687),new cljs.core.Keyword(null,"front-view","front-view",-1631827770),new cljs.core.Keyword(null,"strat-scale","strat-scale",-510133488)], null))));
}));

(spacewar.ui.control_panels.scan_panel.scan_panel.prototype.spacewar$ui$protocols$Drawable$update_state$arity$2 = (function (_,world){
var self__ = this;
var ___$1 = this;
var ship = new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(world);
var map__580 = ship;
var map__580__$1 = cljs.core.__destructure_map.call(null,map__580);
var selected_view = cljs.core.get.call(null,map__580__$1,new cljs.core.Keyword(null,"selected-view","selected-view",501290513));
var strat_scale = cljs.core.get.call(null,map__580__$1,new cljs.core.Keyword(null,"strat-scale","strat-scale",-510133488));
var tact_color = spacewar.ui.control_panels.scan_panel.button_color.call(null,selected_view,new cljs.core.Keyword(null,"tact-view","tact-view",780498246));
var strat_color = spacewar.ui.control_panels.scan_panel.button_color.call(null,selected_view,new cljs.core.Keyword(null,"strat-view","strat-view",-1761243979));
var front_color = spacewar.ui.control_panels.scan_panel.button_color.call(null,selected_view,new cljs.core.Keyword(null,"front-view","front-view",-1631827770));
var scale_disabled = cljs.core.not_EQ_.call(null,selected_view,new cljs.core.Keyword(null,"strat-view","strat-view",-1761243979));
var state__$1 = spacewar.ui.protocols.change_elements.call(null,self__.state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"front-view","front-view",-1631827770),new cljs.core.Keyword(null,"color","color",1011675173),front_color], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tactical","tactical",-1565102687),new cljs.core.Keyword(null,"color","color",1011675173),tact_color], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strategic","strategic",-235298408),new cljs.core.Keyword(null,"color","color",1011675173),strat_color], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strat-scale","strat-scale",-510133488),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),scale_disabled], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strat-scale","strat-scale",-510133488),new cljs.core.Keyword(null,"value","value",305978217),strat_scale], null)], null));
var vec__581 = spacewar.ui.protocols.update_elements.call(null,state__$1,world);
var state__$2 = cljs.core.nth.call(null,vec__581,(0),null);
var events = cljs.core.nth.call(null,vec__581,(1),null);
return spacewar.ui.protocols.pack_update.call(null,(new spacewar.ui.control_panels.scan_panel.scan_panel(state__$2)),events);
}));

(spacewar.ui.control_panels.scan_panel.scan_panel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
}));

(spacewar.ui.control_panels.scan_panel.scan_panel.cljs$lang$type = true);

(spacewar.ui.control_panels.scan_panel.scan_panel.cljs$lang$ctorStr = "spacewar.ui.control-panels.scan-panel/scan-panel");

(spacewar.ui.control_panels.scan_panel.scan_panel.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"spacewar.ui.control-panels.scan-panel/scan-panel");
}));

/**
 * Positional factory function for spacewar.ui.control-panels.scan-panel/scan-panel.
 */
spacewar.ui.control_panels.scan_panel.__GT_scan_panel = (function spacewar$ui$control_panels$scan_panel$__GT_scan_panel(state){
return (new spacewar.ui.control_panels.scan_panel.scan_panel(state));
});


//# sourceMappingURL=scan_panel.js.map
