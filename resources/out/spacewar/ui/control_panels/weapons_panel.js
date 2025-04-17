// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('spacewar.ui.control_panels.weapons_panel');
goog.require('cljs.core');
goog.require('spacewar.ui.protocols');
goog.require('spacewar.ui.config');
goog.require('spacewar.game_logic.config');
goog.require('spacewar.ui.widgets.lcars');
goog.require('spacewar.ui.widgets.button');
goog.require('spacewar.ui.widgets.direction_selector');
goog.require('spacewar.ui.widgets.slider');
goog.require('spacewar.ui.widgets.engage');
goog.require('quil.core');
spacewar.ui.control_panels.weapons_panel.button_color = (function spacewar$ui$control_panels$weapons_panel$button_color(selected,button){
if(cljs.core._EQ_.call(null,selected,button)){
return spacewar.ui.config.weapons_panel_selection_color;
} else {
return spacewar.ui.config.weapons_panel_button_color;
}
});

/**
* @constructor
 * @implements {spacewar.ui.protocols.Drawable}
*/
spacewar.ui.control_panels.weapons_panel.weapons_panel = (function (state){
this.state = state;
});
(spacewar.ui.control_panels.weapons_panel.weapons_panel.prototype.spacewar$ui$protocols$Drawable$ = cljs.core.PROTOCOL_SENTINEL);

(spacewar.ui.control_panels.weapons_panel.weapons_panel.prototype.spacewar$ui$protocols$Drawable$draw$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__1065 = self__.state;
var map__1065__$1 = cljs.core.__destructure_map.call(null,map__1065);
var bearing_label_x = cljs.core.get.call(null,map__1065__$1,new cljs.core.Keyword(null,"bearing-label-x","bearing-label-x",-1736254611));
var number_label_x = cljs.core.get.call(null,map__1065__$1,new cljs.core.Keyword(null,"number-label-x","number-label-x",877406150));
var spread_label_x = cljs.core.get.call(null,map__1065__$1,new cljs.core.Keyword(null,"spread-label-x","spread-label-x",429538107));
var label_y = cljs.core.get.call(null,map__1065__$1,new cljs.core.Keyword(null,"label-y","label-y",-1792935845));
spacewar.ui.widgets.lcars.draw_banner.call(null,self__.state);

spacewar.ui.protocols.draw_elements.call(null,self__.state);

cljs.core.apply.call(null,quil.core.fill,spacewar.ui.config.black);

quil.core.text_align.call(null,new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"bottom","bottom",-1550509018));

quil.core.text_font.call(null,new cljs.core.Keyword(null,"lcars","lcars",2100113880).cljs$core$IFn$_invoke$arity$1(quil.core.state.call(null,new cljs.core.Keyword(null,"fonts","fonts",1683167295))),(14));

quil.core.text.call(null,"BEARING",bearing_label_x,label_y);

quil.core.text.call(null,"SPREAD",spread_label_x,label_y);

return quil.core.text.call(null,"NUM",number_label_x,label_y);
}));

(spacewar.ui.control_panels.weapons_panel.weapons_panel.prototype.spacewar$ui$protocols$Drawable$setup$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__1066 = self__.state;
var map__1066__$1 = cljs.core.__destructure_map.call(null,map__1066);
var x = cljs.core.get.call(null,map__1066__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__1066__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var h = cljs.core.get.call(null,map__1066__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var color = cljs.core.get.call(null,map__1066__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var button_color = cljs.core.get.call(null,map__1066__$1,new cljs.core.Keyword(null,"button-color","button-color",371849340));
var button_w = spacewar.ui.config.button_width;
var button_x = ((x + spacewar.ui.config.stringer_width) + spacewar.ui.config.button_gap);
var torpedo_y = ((y + spacewar.ui.config.banner_width) + spacewar.ui.config.button_gap);
var kinetic_y = ((torpedo_y + spacewar.ui.config.button_h) + spacewar.ui.config.button_gap);
var phaser_y = ((kinetic_y + spacewar.ui.config.button_h) + spacewar.ui.config.button_gap);
var direction_x = ((button_x + button_w) + spacewar.ui.config.button_gap);
var direction_y = ((y + spacewar.ui.config.banner_width) + spacewar.ui.config.button_gap);
var direction_diameter = (h - spacewar.ui.config.banner_width);
var number_x = ((direction_x + direction_diameter) + spacewar.ui.config.button_gap);
var number_y = direction_y;
var number_w = spacewar.ui.config.slider_width;
var number_h = (h - spacewar.ui.config.banner_width);
var spread_x = ((number_x + number_w) + spacewar.ui.config.button_gap);
var spread_y = number_y;
var spread_w = spacewar.ui.config.slider_width;
var spread_h = number_h;
var fire_x = ((spread_x + spread_w) + spacewar.ui.config.button_gap);
var fire_y = number_y;
var fire_w = spacewar.ui.config.engage_width;
var fire_h = number_h;
var bearing_label_x = (direction_x + (direction_diameter / (2)));
var number_label_x = (number_x + (number_w / (2)));
var spread_label_x = (spread_x + (spread_w / (2)));
var label_y = (y + spacewar.ui.config.banner_width);
return (new spacewar.ui.control_panels.weapons_panel.weapons_panel(cljs.core.assoc.call(null,self__.state,new cljs.core.Keyword(null,"bearing-label-x","bearing-label-x",-1736254611),bearing_label_x,new cljs.core.Keyword(null,"number-label-x","number-label-x",877406150),number_label_x,new cljs.core.Keyword(null,"spread-label-x","spread-label-x",429538107),spread_label_x,new cljs.core.Keyword(null,"label-y","label-y",-1792935845),label_y,new cljs.core.Keyword(null,"torpedo","torpedo",275681140),spacewar.ui.protocols.setup.call(null,spacewar.ui.widgets.button.__GT_button.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),button_x,new cljs.core.Keyword(null,"y","y",-1757859776),torpedo_y,new cljs.core.Keyword(null,"w","w",354169001),button_w,new cljs.core.Keyword(null,"h","h",1109658740),spacewar.ui.config.button_h,new cljs.core.Keyword(null,"name","name",1843675177),"TORPEDO",new cljs.core.Keyword(null,"color","color",1011675173),button_color,new cljs.core.Keyword(null,"left-up-event","left-up-event",-1153135824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"select-torpedo","select-torpedo",-988138585)], null)], null))),new cljs.core.Keyword(null,"kinetic","kinetic",-451191810),spacewar.ui.protocols.setup.call(null,spacewar.ui.widgets.button.__GT_button.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),button_x,new cljs.core.Keyword(null,"y","y",-1757859776),kinetic_y,new cljs.core.Keyword(null,"w","w",354169001),button_w,new cljs.core.Keyword(null,"h","h",1109658740),spacewar.ui.config.button_h,new cljs.core.Keyword(null,"name","name",1843675177),"KINETIC",new cljs.core.Keyword(null,"color","color",1011675173),button_color,new cljs.core.Keyword(null,"left-up-event","left-up-event",-1153135824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"select-kinetic","select-kinetic",-1979975395)], null)], null))),new cljs.core.Keyword(null,"phaser","phaser",-1448421666),spacewar.ui.protocols.setup.call(null,spacewar.ui.widgets.button.__GT_button.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),button_x,new cljs.core.Keyword(null,"y","y",-1757859776),phaser_y,new cljs.core.Keyword(null,"w","w",354169001),button_w,new cljs.core.Keyword(null,"h","h",1109658740),spacewar.ui.config.button_h,new cljs.core.Keyword(null,"name","name",1843675177),"PHASER",new cljs.core.Keyword(null,"color","color",1011675173),button_color,new cljs.core.Keyword(null,"left-up-event","left-up-event",-1153135824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"select-phaser","select-phaser",-801446754)], null)], null))),new cljs.core.Keyword(null,"direction-selector","direction-selector",-1630294951),spacewar.ui.protocols.setup.call(null,spacewar.ui.widgets.direction_selector.__GT_direction_selector.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),direction_x,new cljs.core.Keyword(null,"y","y",-1757859776),direction_y,new cljs.core.Keyword(null,"diameter","diameter",1560913323),direction_diameter,new cljs.core.Keyword(null,"direction","direction",-633359395),(0),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"left-up-event","left-up-event",-1153135824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"weapon-direction","weapon-direction",-1739420635)], null)], null))),new cljs.core.Keyword(null,"number-slider","number-slider",830249805),spacewar.ui.protocols.setup.call(null,spacewar.ui.widgets.slider.__GT_slider.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"left-up-event","left-up-event",-1153135824),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"max-val","max-val",-1492247884),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"min-val","min-val",-243137826),new cljs.core.Keyword(null,"thumb-color","thumb-color",2069729567)],[number_y,color,false,number_w,(1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"weapon-number","weapon-number",-670823245)], null),number_h,(5),number_x,(1),button_color]))),new cljs.core.Keyword(null,"spread-slider","spread-slider",521920888),spacewar.ui.protocols.setup.call(null,spacewar.ui.widgets.slider.__GT_slider.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"left-up-event","left-up-event",-1153135824),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"max-val","max-val",-1492247884),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"min-val","min-val",-243137826),new cljs.core.Keyword(null,"thumb-color","thumb-color",2069729567)],[spread_y,color,false,spread_w,(1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"weapon-spread","weapon-spread",1329920563)], null),spread_h,spacewar.game_logic.config.max_spread,spread_x,spacewar.game_logic.config.min_spread,button_color]))),new cljs.core.Keyword(null,"fire","fire",-144730624),spacewar.ui.protocols.setup.call(null,spacewar.ui.widgets.engage.__GT_engage.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"activation-color","activation-color",-915187834),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"left-up-event","left-up-event",-1153135824),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"x","x",2099068185)],[fire_y,color,true,button_color,"FIRE",fire_w,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"weapon-fire","weapon-fire",1702391188)], null),fire_h,fire_x]))),new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"torpedo","torpedo",275681140),new cljs.core.Keyword(null,"kinetic","kinetic",-451191810),new cljs.core.Keyword(null,"phaser","phaser",-1448421666),new cljs.core.Keyword(null,"direction-selector","direction-selector",-1630294951),new cljs.core.Keyword(null,"number-slider","number-slider",830249805),new cljs.core.Keyword(null,"spread-slider","spread-slider",521920888),new cljs.core.Keyword(null,"fire","fire",-144730624)], null))));
}));

(spacewar.ui.control_panels.weapons_panel.weapons_panel.prototype.spacewar$ui$protocols$Drawable$update_state$arity$2 = (function (_,world){
var self__ = this;
var ___$1 = this;
var ship = new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(world);
var map__1067 = ship;
var map__1067__$1 = cljs.core.__destructure_map.call(null,map__1067);
var target_bearing = cljs.core.get.call(null,map__1067__$1,new cljs.core.Keyword(null,"target-bearing","target-bearing",-1661786546));
var selected_weapon = cljs.core.get.call(null,map__1067__$1,new cljs.core.Keyword(null,"selected-weapon","selected-weapon",1106774428));
var weapon_number_setting = cljs.core.get.call(null,map__1067__$1,new cljs.core.Keyword(null,"weapon-number-setting","weapon-number-setting",261885890));
var weapon_spread_setting = cljs.core.get.call(null,map__1067__$1,new cljs.core.Keyword(null,"weapon-spread-setting","weapon-spread-setting",286464677));
var phaser_button_color = spacewar.ui.control_panels.weapons_panel.button_color.call(null,selected_weapon,new cljs.core.Keyword(null,"phaser","phaser",-1448421666));
var torpedo_button_color = spacewar.ui.control_panels.weapons_panel.button_color.call(null,selected_weapon,new cljs.core.Keyword(null,"torpedo","torpedo",275681140));
var kinetic_button_color = spacewar.ui.control_panels.weapons_panel.button_color.call(null,selected_weapon,new cljs.core.Keyword(null,"kinetic","kinetic",-451191810));
var weapon_disabled = cljs.core._EQ_.call(null,selected_weapon,new cljs.core.Keyword(null,"none","none",1333468478));
var allowed_number = selected_weapon.call(null,spacewar.game_logic.config.max_shots_by_type);
var state__$1 = spacewar.ui.protocols.change_elements.call(null,self__.state,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"direction-selector","direction-selector",-1630294951),new cljs.core.Keyword(null,"direction","direction",-633359395),target_bearing], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number-slider","number-slider",830249805),new cljs.core.Keyword(null,"value","value",305978217),weapon_number_setting], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number-slider","number-slider",830249805),new cljs.core.Keyword(null,"max-val","max-val",-1492247884),allowed_number], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number-slider","number-slider",830249805),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),weapon_disabled], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spread-slider","spread-slider",521920888),new cljs.core.Keyword(null,"value","value",305978217),weapon_spread_setting], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spread-slider","spread-slider",521920888),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),((weapon_disabled) || ((weapon_number_setting < (2))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"phaser","phaser",-1448421666),new cljs.core.Keyword(null,"color","color",1011675173),phaser_button_color], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"torpedo","torpedo",275681140),new cljs.core.Keyword(null,"color","color",1011675173),torpedo_button_color], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kinetic","kinetic",-451191810),new cljs.core.Keyword(null,"color","color",1011675173),kinetic_button_color], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fire","fire",-144730624),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),weapon_disabled], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kinetic","kinetic",-451191810),new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"kinetics","kinetics",-707133266).cljs$core$IFn$_invoke$arity$1(ship))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"torpedo","torpedo",275681140),new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"torpedos","torpedos",344905121).cljs$core$IFn$_invoke$arity$1(ship))], null)], null));
var vec__1068 = spacewar.ui.protocols.update_elements.call(null,state__$1,world);
var state__$2 = cljs.core.nth.call(null,vec__1068,(0),null);
var events = cljs.core.nth.call(null,vec__1068,(1),null);
return spacewar.ui.protocols.pack_update.call(null,(new spacewar.ui.control_panels.weapons_panel.weapons_panel(state__$2)),events);
}));

(spacewar.ui.control_panels.weapons_panel.weapons_panel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
}));

(spacewar.ui.control_panels.weapons_panel.weapons_panel.cljs$lang$type = true);

(spacewar.ui.control_panels.weapons_panel.weapons_panel.cljs$lang$ctorStr = "spacewar.ui.control-panels.weapons-panel/weapons-panel");

(spacewar.ui.control_panels.weapons_panel.weapons_panel.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"spacewar.ui.control-panels.weapons-panel/weapons-panel");
}));

/**
 * Positional factory function for spacewar.ui.control-panels.weapons-panel/weapons-panel.
 */
spacewar.ui.control_panels.weapons_panel.__GT_weapons_panel = (function spacewar$ui$control_panels$weapons_panel$__GT_weapons_panel(state){
return (new spacewar.ui.control_panels.weapons_panel.weapons_panel(state));
});


//# sourceMappingURL=weapons_panel.js.map
