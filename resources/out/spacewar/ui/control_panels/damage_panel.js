// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('spacewar.ui.control_panels.damage_panel');
goog.require('cljs.core');
goog.require('spacewar.ui.protocols');
goog.require('spacewar.ui.config');
goog.require('spacewar.ui.widgets.lcars');
goog.require('spacewar.ui.widgets.lights');
goog.require('spacewar.ui.widgets.named_indicator');
spacewar.ui.control_panels.damage_panel.damage_level = (function spacewar$ui$control_panels$damage_panel$damage_level(damage){
var pred__1251 = cljs.core._GT__EQ_;
var expr__1252 = damage;
if(cljs.core.truth_(pred__1251.call(null,(0),expr__1252))){
return (0);
} else {
if(cljs.core.truth_(pred__1251.call(null,(33),expr__1252))){
return (1);
} else {
if(cljs.core.truth_(pred__1251.call(null,(66),expr__1252))){
return (2);
} else {
if(cljs.core.truth_(pred__1251.call(null,(99),expr__1252))){
return (3);
} else {
return (4);
}
}
}
}
});

/**
* @constructor
 * @implements {spacewar.ui.protocols.Drawable}
*/
spacewar.ui.control_panels.damage_panel.damage_panel = (function (state){
this.state = state;
});
(spacewar.ui.control_panels.damage_panel.damage_panel.prototype.spacewar$ui$protocols$Drawable$ = cljs.core.PROTOCOL_SENTINEL);

(spacewar.ui.control_panels.damage_panel.damage_panel.prototype.spacewar$ui$protocols$Drawable$get_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
}));

(spacewar.ui.control_panels.damage_panel.damage_panel.prototype.spacewar$ui$protocols$Drawable$draw$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
spacewar.ui.widgets.lcars.draw_banner.call(null,self__.state);

return spacewar.ui.protocols.draw_elements.call(null,self__.state);
}));

(spacewar.ui.control_panels.damage_panel.damage_panel.prototype.spacewar$ui$protocols$Drawable$setup$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__1254 = self__.state;
var map__1254__$1 = cljs.core.__destructure_map.call(null,map__1254);
var x = cljs.core.get.call(null,map__1254__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__1254__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__1254__$1,new cljs.core.Keyword(null,"w","w",354169001));
var indicator_w = (20);
var indicator_h = (15);
var indicator_gap = (10);
var col1 = ((x + spacewar.ui.config.stringer_width) + spacewar.ui.config.button_gap);
var col2 = (((x + (w / (2))) + spacewar.ui.config.button_gap) + (spacewar.ui.config.stringer_width / (2)));
var warp_y = ((y + spacewar.ui.config.banner_width) + spacewar.ui.config.button_gap);
var impulse_y = ((warp_y + indicator_h) + indicator_gap);
var life_support_y = ((impulse_y + indicator_h) + indicator_gap);
var hull_y = warp_y;
var sensor_y = impulse_y;
var weapons_y = life_support_y;
var height = ((((((spacewar.ui.config.banner_width + spacewar.ui.config.button_gap) + indicator_h) + indicator_gap) + indicator_h) + indicator_gap) + indicator_h);
var colors = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(150),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)], null);
return (new spacewar.ui.control_panels.damage_panel.damage_panel(cljs.core.assoc.call(null,self__.state,new cljs.core.Keyword(null,"h","h",1109658740),height,new cljs.core.Keyword(null,"warp","warp",-931589598),spacewar.ui.protocols.setup.call(null,spacewar.ui.widgets.named_indicator.__GT_named_indicator.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x","x",2099068185),col1,new cljs.core.Keyword(null,"y","y",-1757859776),warp_y,new cljs.core.Keyword(null,"w","w",354169001),indicator_w,new cljs.core.Keyword(null,"h","h",1109658740),indicator_h,new cljs.core.Keyword(null,"name","name",1843675177),"WRP",new cljs.core.Keyword(null,"colors","colors",1157174732),colors,new cljs.core.Keyword(null,"level","level",1290497552),(0),new cljs.core.Keyword(null,"draw-func","draw-func",944350484),spacewar.ui.widgets.lights.round_rectangle_light], null))),new cljs.core.Keyword(null,"impulse","impulse",486537698),spacewar.ui.protocols.setup.call(null,spacewar.ui.widgets.named_indicator.__GT_named_indicator.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x","x",2099068185),col1,new cljs.core.Keyword(null,"y","y",-1757859776),impulse_y,new cljs.core.Keyword(null,"w","w",354169001),indicator_w,new cljs.core.Keyword(null,"h","h",1109658740),indicator_h,new cljs.core.Keyword(null,"name","name",1843675177),"IMP",new cljs.core.Keyword(null,"colors","colors",1157174732),colors,new cljs.core.Keyword(null,"level","level",1290497552),(0),new cljs.core.Keyword(null,"draw-func","draw-func",944350484),spacewar.ui.widgets.lights.round_rectangle_light], null))),new cljs.core.Keyword(null,"life-support","life-support",-317139270),spacewar.ui.protocols.setup.call(null,spacewar.ui.widgets.named_indicator.__GT_named_indicator.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x","x",2099068185),col1,new cljs.core.Keyword(null,"y","y",-1757859776),life_support_y,new cljs.core.Keyword(null,"w","w",354169001),indicator_w,new cljs.core.Keyword(null,"h","h",1109658740),indicator_h,new cljs.core.Keyword(null,"name","name",1843675177),"LIF",new cljs.core.Keyword(null,"colors","colors",1157174732),colors,new cljs.core.Keyword(null,"level","level",1290497552),(0),new cljs.core.Keyword(null,"draw-func","draw-func",944350484),spacewar.ui.widgets.lights.round_rectangle_light], null))),new cljs.core.Keyword(null,"hull","hull",-957096876),spacewar.ui.protocols.setup.call(null,spacewar.ui.widgets.named_indicator.__GT_named_indicator.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x","x",2099068185),col2,new cljs.core.Keyword(null,"y","y",-1757859776),hull_y,new cljs.core.Keyword(null,"w","w",354169001),indicator_w,new cljs.core.Keyword(null,"h","h",1109658740),indicator_h,new cljs.core.Keyword(null,"name","name",1843675177),"HUL",new cljs.core.Keyword(null,"colors","colors",1157174732),colors,new cljs.core.Keyword(null,"level","level",1290497552),(0),new cljs.core.Keyword(null,"draw-func","draw-func",944350484),spacewar.ui.widgets.lights.round_rectangle_light], null))),new cljs.core.Keyword(null,"sensors","sensors",-1987490738),spacewar.ui.protocols.setup.call(null,spacewar.ui.widgets.named_indicator.__GT_named_indicator.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x","x",2099068185),col2,new cljs.core.Keyword(null,"y","y",-1757859776),sensor_y,new cljs.core.Keyword(null,"w","w",354169001),indicator_w,new cljs.core.Keyword(null,"h","h",1109658740),indicator_h,new cljs.core.Keyword(null,"name","name",1843675177),"SEN",new cljs.core.Keyword(null,"colors","colors",1157174732),colors,new cljs.core.Keyword(null,"level","level",1290497552),(0),new cljs.core.Keyword(null,"draw-func","draw-func",944350484),spacewar.ui.widgets.lights.round_rectangle_light], null))),new cljs.core.Keyword(null,"weapons","weapons",-1983639898),spacewar.ui.protocols.setup.call(null,spacewar.ui.widgets.named_indicator.__GT_named_indicator.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x","x",2099068185),col2,new cljs.core.Keyword(null,"y","y",-1757859776),weapons_y,new cljs.core.Keyword(null,"w","w",354169001),indicator_w,new cljs.core.Keyword(null,"h","h",1109658740),indicator_h,new cljs.core.Keyword(null,"name","name",1843675177),"WPN",new cljs.core.Keyword(null,"colors","colors",1157174732),colors,new cljs.core.Keyword(null,"level","level",1290497552),(0),new cljs.core.Keyword(null,"draw-func","draw-func",944350484),spacewar.ui.widgets.lights.round_rectangle_light], null))),new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warp","warp",-931589598),new cljs.core.Keyword(null,"impulse","impulse",486537698),new cljs.core.Keyword(null,"life-support","life-support",-317139270),new cljs.core.Keyword(null,"hull","hull",-957096876),new cljs.core.Keyword(null,"sensors","sensors",-1987490738),new cljs.core.Keyword(null,"weapons","weapons",-1983639898)], null))));
}));

(spacewar.ui.control_panels.damage_panel.damage_panel.prototype.spacewar$ui$protocols$Drawable$update_state$arity$2 = (function (_,world){
var self__ = this;
var ___$1 = this;
var ship = new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(world);
var state__$1 = spacewar.ui.protocols.change_elements.call(null,self__.state,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warp","warp",-931589598),new cljs.core.Keyword(null,"level","level",1290497552),spacewar.ui.control_panels.damage_panel.damage_level.call(null,new cljs.core.Keyword(null,"warp-damage","warp-damage",-1651122162).cljs$core$IFn$_invoke$arity$1(ship))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"impulse","impulse",486537698),new cljs.core.Keyword(null,"level","level",1290497552),spacewar.ui.control_panels.damage_panel.damage_level.call(null,new cljs.core.Keyword(null,"impulse-damage","impulse-damage",2036309966).cljs$core$IFn$_invoke$arity$1(ship))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"life-support","life-support",-317139270),new cljs.core.Keyword(null,"level","level",1290497552),spacewar.ui.control_panels.damage_panel.damage_level.call(null,new cljs.core.Keyword(null,"life-support-damage","life-support-damage",1212244818).cljs$core$IFn$_invoke$arity$1(ship))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hull","hull",-957096876),new cljs.core.Keyword(null,"level","level",1290497552),spacewar.ui.control_panels.damage_panel.damage_level.call(null,new cljs.core.Keyword(null,"hull-damage","hull-damage",-536688766).cljs$core$IFn$_invoke$arity$1(ship))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sensors","sensors",-1987490738),new cljs.core.Keyword(null,"level","level",1290497552),spacewar.ui.control_panels.damage_panel.damage_level.call(null,new cljs.core.Keyword(null,"sensor-damage","sensor-damage",-1401969345).cljs$core$IFn$_invoke$arity$1(ship))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weapons","weapons",-1983639898),new cljs.core.Keyword(null,"level","level",1290497552),spacewar.ui.control_panels.damage_panel.damage_level.call(null,new cljs.core.Keyword(null,"weapons-damage","weapons-damage",1275474500).cljs$core$IFn$_invoke$arity$1(ship))], null)], null));
var vec__1255 = spacewar.ui.protocols.update_elements.call(null,state__$1,world);
var state__$2 = cljs.core.nth.call(null,vec__1255,(0),null);
var events = cljs.core.nth.call(null,vec__1255,(1),null);
return spacewar.ui.protocols.pack_update.call(null,(new spacewar.ui.control_panels.damage_panel.damage_panel(state__$2)),events);
}));

(spacewar.ui.control_panels.damage_panel.damage_panel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
}));

(spacewar.ui.control_panels.damage_panel.damage_panel.cljs$lang$type = true);

(spacewar.ui.control_panels.damage_panel.damage_panel.cljs$lang$ctorStr = "spacewar.ui.control-panels.damage-panel/damage-panel");

(spacewar.ui.control_panels.damage_panel.damage_panel.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"spacewar.ui.control-panels.damage-panel/damage-panel");
}));

/**
 * Positional factory function for spacewar.ui.control-panels.damage-panel/damage-panel.
 */
spacewar.ui.control_panels.damage_panel.__GT_damage_panel = (function spacewar$ui$control_panels$damage_panel$__GT_damage_panel(state){
return (new spacewar.ui.control_panels.damage_panel.damage_panel(state));
});


//# sourceMappingURL=damage_panel.js.map
