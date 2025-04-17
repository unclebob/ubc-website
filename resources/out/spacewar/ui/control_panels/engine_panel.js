// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('spacewar.ui.control_panels.engine_panel');
goog.require('cljs.core');
goog.require('spacewar.ui.protocols');
goog.require('spacewar.ui.config');
goog.require('spacewar.ui.widgets.lcars');
goog.require('spacewar.ui.widgets.button');
goog.require('spacewar.ui.widgets.direction_selector');
goog.require('spacewar.ui.widgets.slider');
goog.require('spacewar.ui.widgets.engage');
goog.require('spacewar.geometry');
goog.require('spacewar.vector');
goog.require('spacewar.game_logic.ship');
goog.require('quil.core');

/**
* @constructor
 * @implements {spacewar.ui.protocols.Drawable}
*/
spacewar.ui.control_panels.engine_panel.engine_panel = (function (state){
this.state = state;
});
(spacewar.ui.control_panels.engine_panel.engine_panel.prototype.spacewar$ui$protocols$Drawable$ = cljs.core.PROTOCOL_SENTINEL);

(spacewar.ui.control_panels.engine_panel.engine_panel.prototype.spacewar$ui$protocols$Drawable$clone$arity$2 = (function (_,clone_state){
var self__ = this;
var ___$1 = this;
return (new spacewar.ui.control_panels.engine_panel.engine_panel(clone_state));
}));

(spacewar.ui.control_panels.engine_panel.engine_panel.prototype.spacewar$ui$protocols$Drawable$draw$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__841 = self__.state;
var map__841__$1 = cljs.core.__destructure_map.call(null,map__841);
var heading_label_x = cljs.core.get.call(null,map__841__$1,new cljs.core.Keyword(null,"heading-label-x","heading-label-x",737128774));
var power_label_x = cljs.core.get.call(null,map__841__$1,new cljs.core.Keyword(null,"power-label-x","power-label-x",471570928));
var label_y = cljs.core.get.call(null,map__841__$1,new cljs.core.Keyword(null,"label-y","label-y",-1792935845));
spacewar.ui.widgets.lcars.draw_banner.call(null,self__.state);

spacewar.ui.protocols.draw_elements.call(null,self__.state);

cljs.core.apply.call(null,quil.core.fill,spacewar.ui.config.black);

quil.core.text_align.call(null,new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"bottom","bottom",-1550509018));

quil.core.text_font.call(null,new cljs.core.Keyword(null,"lcars","lcars",2100113880).cljs$core$IFn$_invoke$arity$1(quil.core.state.call(null,new cljs.core.Keyword(null,"fonts","fonts",1683167295))),(14));

quil.core.text.call(null,"HEADING",heading_label_x,label_y);

return quil.core.text.call(null,"POWER",power_label_x,label_y);
}));

(spacewar.ui.control_panels.engine_panel.engine_panel.prototype.spacewar$ui$protocols$Drawable$setup$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__842 = self__.state;
var map__842__$1 = cljs.core.__destructure_map.call(null,map__842);
var x = cljs.core.get.call(null,map__842__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__842__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__842__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__842__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var color = cljs.core.get.call(null,map__842__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var button_color = cljs.core.get.call(null,map__842__$1,new cljs.core.Keyword(null,"button-color","button-color",371849340));
var button_w = spacewar.ui.config.button_width;
var warp_y = ((y + spacewar.ui.config.banner_width) + spacewar.ui.config.button_gap);
var impulse_y = ((warp_y + spacewar.ui.config.button_h) + spacewar.ui.config.button_gap);
var dock_y = ((impulse_y + spacewar.ui.config.button_h) + spacewar.ui.config.button_gap);
var direction_x = ((x + button_w) + spacewar.ui.config.button_gap);
var direction_y = ((y + spacewar.ui.config.banner_width) + spacewar.ui.config.button_gap);
var direction_diameter = (h - spacewar.ui.config.banner_width);
var power_x = ((direction_x + direction_diameter) + spacewar.ui.config.button_gap);
var power_y = direction_y;
var power_w = spacewar.ui.config.slider_width;
var power_h = (h - spacewar.ui.config.banner_width);
var engage_x = ((((x + w) - spacewar.ui.config.stringer_width) - spacewar.ui.config.button_gap) - spacewar.ui.config.engage_width);
var engage_y = direction_y;
var engage_w = spacewar.ui.config.engage_width;
var engage_h = (h - spacewar.ui.config.banner_width);
var heading_label_x = (direction_x + (direction_diameter / (2)));
var power_label_x = (power_x + (power_w / (2)));
var label_y = (y + spacewar.ui.config.banner_width);
return (new spacewar.ui.control_panels.engine_panel.engine_panel(cljs.core.assoc.call(null,self__.state,new cljs.core.Keyword(null,"heading-label-x","heading-label-x",737128774),heading_label_x,new cljs.core.Keyword(null,"power-label-x","power-label-x",471570928),power_label_x,new cljs.core.Keyword(null,"label-y","label-y",-1792935845),label_y,new cljs.core.Keyword(null,"warp","warp",-931589598),spacewar.ui.protocols.setup.call(null,spacewar.ui.widgets.button.__GT_button.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),warp_y,new cljs.core.Keyword(null,"w","w",354169001),button_w,new cljs.core.Keyword(null,"h","h",1109658740),spacewar.ui.config.button_h,new cljs.core.Keyword(null,"name","name",1843675177),"WARP",new cljs.core.Keyword(null,"color","color",1011675173),button_color,new cljs.core.Keyword(null,"left-up-event","left-up-event",-1153135824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"select-warp","select-warp",-106300794)], null)], null))),new cljs.core.Keyword(null,"impulse","impulse",486537698),spacewar.ui.protocols.setup.call(null,spacewar.ui.widgets.button.__GT_button.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),impulse_y,new cljs.core.Keyword(null,"w","w",354169001),button_w,new cljs.core.Keyword(null,"h","h",1109658740),spacewar.ui.config.button_h,new cljs.core.Keyword(null,"name","name",1843675177),"IMPULSE",new cljs.core.Keyword(null,"color","color",1011675173),button_color,new cljs.core.Keyword(null,"left-up-event","left-up-event",-1153135824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"select-impulse","select-impulse",-798585565)], null)], null))),new cljs.core.Keyword(null,"dock","dock",-284307495),spacewar.ui.protocols.setup.call(null,spacewar.ui.widgets.button.__GT_button.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),dock_y,new cljs.core.Keyword(null,"w","w",354169001),button_w,new cljs.core.Keyword(null,"h","h",1109658740),spacewar.ui.config.button_h,new cljs.core.Keyword(null,"name","name",1843675177),"DOCK",new cljs.core.Keyword(null,"color","color",1011675173),button_color,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"left-up-event","left-up-event",-1153135824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"select-dock","select-dock",-1068226160)], null)], null))),new cljs.core.Keyword(null,"direction-selector","direction-selector",-1630294951),spacewar.ui.protocols.setup.call(null,spacewar.ui.widgets.direction_selector.__GT_direction_selector.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),direction_x,new cljs.core.Keyword(null,"y","y",-1757859776),direction_y,new cljs.core.Keyword(null,"diameter","diameter",1560913323),direction_diameter,new cljs.core.Keyword(null,"direction","direction",-633359395),(0),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"left-up-event","left-up-event",-1153135824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"engine-direction","engine-direction",1952788439)], null)], null))),new cljs.core.Keyword(null,"power-slider","power-slider",786828002),spacewar.ui.protocols.setup.call(null,spacewar.ui.widgets.slider.__GT_slider.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"left-up-event","left-up-event",-1153135824),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"max-val","max-val",-1492247884),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"min-val","min-val",-243137826),new cljs.core.Keyword(null,"thumb-color","thumb-color",2069729567)],[power_y,color,power_w,(0),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"engine-power","engine-power",-1017372470)], null),power_h,(10),power_x,(0),button_color]))),new cljs.core.Keyword(null,"engage","engage",1886754123),spacewar.ui.protocols.setup.call(null,spacewar.ui.widgets.engage.__GT_engage.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"activation-color","activation-color",-915187834),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"left-up-event","left-up-event",-1153135824),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"x","x",2099068185)],[engage_y,color,true,button_color,"ENGAGE",engage_w,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"engine-engage","engine-engage",-1131016264)], null),engage_h,engage_x]))),new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warp","warp",-931589598),new cljs.core.Keyword(null,"impulse","impulse",486537698),new cljs.core.Keyword(null,"dock","dock",-284307495),new cljs.core.Keyword(null,"direction-selector","direction-selector",-1630294951),new cljs.core.Keyword(null,"power-slider","power-slider",786828002),new cljs.core.Keyword(null,"engage","engage",1886754123)], null))));
}));

(spacewar.ui.control_panels.engine_panel.engine_panel.prototype.spacewar$ui$protocols$Drawable$update_state$arity$2 = (function (_,world){
var self__ = this;
var ___$1 = this;
var map__843 = world;
var map__843__$1 = cljs.core.__destructure_map.call(null,map__843);
var bases = cljs.core.get.call(null,map__843__$1,new cljs.core.Keyword(null,"bases","bases",-1036892420));
var ship = cljs.core.get.call(null,map__843__$1,new cljs.core.Keyword(null,"ship","ship",197863473));
var map__844 = ship;
var map__844__$1 = cljs.core.__destructure_map.call(null,map__844);
var heading = cljs.core.get.call(null,map__844__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
var heading_setting = cljs.core.get.call(null,map__844__$1,new cljs.core.Keyword(null,"heading-setting","heading-setting",634943));
var velocity = cljs.core.get.call(null,map__844__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
var selected_engine = cljs.core.get.call(null,map__844__$1,new cljs.core.Keyword(null,"selected-engine","selected-engine",-1137424385));
var engine_power_setting = cljs.core.get.call(null,map__844__$1,new cljs.core.Keyword(null,"engine-power-setting","engine-power-setting",805524153));
var warp = cljs.core.get.call(null,map__844__$1,new cljs.core.Keyword(null,"warp","warp",-931589598));
var selected_engine__$1 = (function (){var or__5002__auto__ = selected_engine;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"none","none",1333468478);
}
})();
var warp_color = ((cljs.core._EQ_.call(null,selected_engine__$1,new cljs.core.Keyword(null,"warp","warp",-931589598)))?spacewar.ui.config.engine_panel_selection_color:spacewar.ui.config.engine_panel_button_color);
var impulse_color = ((cljs.core._EQ_.call(null,selected_engine__$1,new cljs.core.Keyword(null,"impulse","impulse",486537698)))?spacewar.ui.config.engine_panel_selection_color:spacewar.ui.config.engine_panel_button_color);
var engage_disabled = cljs.core._EQ_.call(null,selected_engine__$1,new cljs.core.Keyword(null,"none","none",1333468478));
var dockable = spacewar.game_logic.ship.dockable_QMARK_.call(null,ship,bases);
var state__$1 = spacewar.ui.protocols.change_elements.call(null,self__.state,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dock","dock",-284307495),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(dockable))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"direction-selector","direction-selector",-1630294951),new cljs.core.Keyword(null,"pointer2","pointer2",-2078229087),heading], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"impulse","impulse",486537698),new cljs.core.Keyword(null,"status","status",-1997798413),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"impulse","impulse",486537698).cljs$core$IFn$_invoke$arity$1(ship)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spacewar.geometry.round.call(null,((20) * spacewar.vector.magnitude.call(null,velocity))))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"impulse","impulse",486537698),new cljs.core.Keyword(null,"color","color",1011675173),impulse_color], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warp","warp",-931589598),new cljs.core.Keyword(null,"color","color",1011675173),warp_color], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"power-slider","power-slider",786828002),new cljs.core.Keyword(null,"value","value",305978217),engine_power_setting], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"direction-selector","direction-selector",-1630294951),new cljs.core.Keyword(null,"direction","direction",-633359395),heading_setting], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"engage","engage",1886754123),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),engage_disabled], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warp","warp",-931589598),new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.str.cljs$core$IFn$_invoke$arity$1(warp)], null)], null));
var vec__845 = spacewar.ui.protocols.update_elements.call(null,state__$1,world);
var state__$2 = cljs.core.nth.call(null,vec__845,(0),null);
var events = cljs.core.nth.call(null,vec__845,(1),null);
return spacewar.ui.protocols.pack_update.call(null,(new spacewar.ui.control_panels.engine_panel.engine_panel(state__$2)),events);
}));

(spacewar.ui.control_panels.engine_panel.engine_panel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
}));

(spacewar.ui.control_panels.engine_panel.engine_panel.cljs$lang$type = true);

(spacewar.ui.control_panels.engine_panel.engine_panel.cljs$lang$ctorStr = "spacewar.ui.control-panels.engine-panel/engine-panel");

(spacewar.ui.control_panels.engine_panel.engine_panel.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"spacewar.ui.control-panels.engine-panel/engine-panel");
}));

/**
 * Positional factory function for spacewar.ui.control-panels.engine-panel/engine-panel.
 */
spacewar.ui.control_panels.engine_panel.__GT_engine_panel = (function spacewar$ui$control_panels$engine_panel$__GT_engine_panel(state){
return (new spacewar.ui.control_panels.engine_panel.engine_panel(state));
});


//# sourceMappingURL=engine_panel.js.map
