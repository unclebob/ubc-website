// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('spacewar.ui.view_frame');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('spacewar.ui.config');
goog.require('spacewar.ui.strategic_scan');
goog.require('spacewar.ui.tactical_scan');
goog.require('spacewar.ui.front_view');
goog.require('spacewar.ui.protocols');
spacewar.ui.view_frame.message_queue = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
spacewar.ui.view_frame.clear_messages_BANG_ = (function spacewar$ui$view_frame$clear_messages_BANG_(){
return cljs.core.reset_BANG_.call(null,spacewar.ui.view_frame.message_queue,cljs.core.PersistentVector.EMPTY);
});
spacewar.ui.view_frame.add_message_BANG_ = (function spacewar$ui$view_frame$add_message_BANG_(message,duration){
return cljs.core.swap_BANG_.call(null,spacewar.ui.view_frame.message_queue,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),message,new cljs.core.Keyword(null,"duration","duration",1444101068),duration], null));
});
spacewar.ui.view_frame.update_messages = (function spacewar$ui$view_frame$update_messages(ms,world){
cljs.core.swap_BANG_.call(null,spacewar.ui.view_frame.message_queue,(function (old_messages){
return cljs.core.filter.call(null,(function (p1__1049_SHARP_){
return (new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(p1__1049_SHARP_) > (0));
}),cljs.core.map.call(null,(function (p1__1048_SHARP_){
return cljs.core.update.call(null,p1__1048_SHARP_,new cljs.core.Keyword(null,"duration","duration",1444101068),cljs.core._,ms);
}),old_messages));
}));

return world;
});
spacewar.ui.view_frame.draw_messages = (function spacewar$ui$view_frame$draw_messages(state){
var map__1050 = state;
var map__1050__$1 = cljs.core.__destructure_map.call(null,map__1050);
var x = cljs.core.get.call(null,map__1050__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__1050__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__1050__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__1050__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var messages = cljs.core.deref.call(null,spacewar.ui.view_frame.message_queue);
var message_x = (x + ((2) * (w / (3))));
var lines = cljs.core.map.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),messages);
var text = clojure.string.join.call(null,"\n",lines);
if((!(cljs.core.empty_QMARK_.call(null,messages)))){
cljs.core.apply.call(null,quil.core.fill,cljs.core.conj.call(null,spacewar.ui.config.red,(255)));

quil.core.text_font.call(null,new cljs.core.Keyword(null,"messages","messages",345434482).cljs$core$IFn$_invoke$arity$1(quil.core.state.call(null,new cljs.core.Keyword(null,"fonts","fonts",1683167295))),(30));

quil.core.text_align.call(null,new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"bottom","bottom",-1550509018));

var tr__794__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [message_x,(y + h)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__794__auto__);

return quil.core.text.call(null,text,(0),(0));
}finally {quil.core.pop_matrix.call(null);
}} else {
return null;
}
});
spacewar.ui.view_frame.fill_outside_rect = (function spacewar$ui$view_frame$fill_outside_rect(x,y,w,h,screen_w,screen_h,rgb){
cljs.core.apply.call(null,quil.core.fill,rgb);

quil.core.no_stroke.call(null);

quil.core.rect.call(null,(0),(0),x,screen_h);

quil.core.rect.call(null,x,(0),w,y);

quil.core.rect.call(null,(x + w),(0),((screen_w - w) - x),screen_h);

return quil.core.rect.call(null,x,(y + h),w,((screen_h - h) - y));
});

/**
* @constructor
 * @implements {spacewar.ui.protocols.Drawable}
*/
spacewar.ui.view_frame.view_frame = (function (state){
this.state = state;
});
(spacewar.ui.view_frame.view_frame.prototype.spacewar$ui$protocols$Drawable$ = cljs.core.PROTOCOL_SENTINEL);

(spacewar.ui.view_frame.view_frame.prototype.spacewar$ui$protocols$Drawable$draw$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__1051 = self__.state;
var map__1051__$1 = cljs.core.__destructure_map.call(null,map__1051);
var x = cljs.core.get.call(null,map__1051__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__1051__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__1051__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__1051__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var contents = cljs.core.get.call(null,map__1051__$1,new cljs.core.Keyword(null,"contents","contents",-1567174023));
quil.core.no_stroke.call(null);

quil.core.fill.call(null,(0),(0),(255));

quil.core.rect_mode.call(null,new cljs.core.Keyword(null,"corner","corner",1296717125));

quil.core.rect.call(null,(x - (5)),(y - (5)),(w + (10)),(h + (10)));

cljs.core.apply.call(null,quil.core.fill,spacewar.ui.config.black);

quil.core.rect.call(null,x,y,w,h,(5));

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"sensor-loss","sensor-loss",-351641582).cljs$core$IFn$_invoke$arity$1(self__.state))){
spacewar.ui.protocols.draw.call(null,contents);
} else {
}

spacewar.ui.view_frame.fill_outside_rect.call(null,(x - (5)),(y - (5)),(w + (10)),(h + (10)),quil.core.current_graphics.call(null).width,quil.core.current_graphics.call(null).height,spacewar.ui.config.light_grey);

return spacewar.ui.view_frame.draw_messages.call(null,self__.state);
}));

(spacewar.ui.view_frame.view_frame.prototype.spacewar$ui$protocols$Drawable$setup$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__1052 = self__.state;
var map__1052__$1 = cljs.core.__destructure_map.call(null,map__1052);
var x = cljs.core.get.call(null,map__1052__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__1052__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__1052__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__1052__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var bounds = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"h","h",1109658740),h,new cljs.core.Keyword(null,"w","w",354169001),w], null);
var front_view = spacewar.ui.protocols.setup.call(null,spacewar.ui.front_view.__GT_front_view.call(null,bounds));
var strat_view = spacewar.ui.protocols.setup.call(null,spacewar.ui.strategic_scan.__GT_strategic_scan.call(null,bounds));
var tact_view = spacewar.ui.protocols.setup.call(null,spacewar.ui.tactical_scan.__GT_tactical_scan.call(null,bounds));
return (new spacewar.ui.view_frame.view_frame(cljs.core.assoc.call(null,self__.state,new cljs.core.Keyword(null,"front-view","front-view",-1631827770),front_view,new cljs.core.Keyword(null,"strat-view","strat-view",-1761243979),strat_view,new cljs.core.Keyword(null,"tact-view","tact-view",780498246),tact_view,new cljs.core.Keyword(null,"last-view","last-view",-2081546724),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"contents","contents",-1567174023),front_view,new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contents","contents",-1567174023)], null))));
}));

(spacewar.ui.view_frame.view_frame.prototype.spacewar$ui$protocols$Drawable$update_state$arity$2 = (function (_,world){
var self__ = this;
var ___$1 = this;
var map__1053 = self__.state;
var map__1053__$1 = cljs.core.__destructure_map.call(null,map__1053);
var last_view = cljs.core.get.call(null,map__1053__$1,new cljs.core.Keyword(null,"last-view","last-view",-2081546724));
var ship = new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(world);
var selected_view = new cljs.core.Keyword(null,"selected-view","selected-view",501290513).cljs$core$IFn$_invoke$arity$1(ship);
var state__$1 = ((cljs.core.not_EQ_.call(null,selected_view,last_view))?cljs.core.assoc.call(null,self__.state,new cljs.core.Keyword(null,"contents","contents",-1567174023),selected_view.call(null,self__.state),new cljs.core.Keyword(null,"last-view","last-view",-2081546724),selected_view):self__.state);
var sensor_damage = new cljs.core.Keyword(null,"sensor-damage","sensor-damage",-1401969345).cljs$core$IFn$_invoke$arity$1(ship);
var state__$2 = cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"sensor-loss","sensor-loss",-351641582),(((sensor_damage > cljs.core.rand.call(null,(100)))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"destroyed","destroyed",-427566535).cljs$core$IFn$_invoke$arity$1(ship)))));
var vec__1054 = spacewar.ui.protocols.update_elements.call(null,state__$2,world);
var state__$3 = cljs.core.nth.call(null,vec__1054,(0),null);
var events = cljs.core.nth.call(null,vec__1054,(1),null);
return spacewar.ui.protocols.pack_update.call(null,(new spacewar.ui.view_frame.view_frame(state__$3)),events);
}));

(spacewar.ui.view_frame.view_frame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
}));

(spacewar.ui.view_frame.view_frame.cljs$lang$type = true);

(spacewar.ui.view_frame.view_frame.cljs$lang$ctorStr = "spacewar.ui.view-frame/view-frame");

(spacewar.ui.view_frame.view_frame.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"spacewar.ui.view-frame/view-frame");
}));

/**
 * Positional factory function for spacewar.ui.view-frame/view-frame.
 */
spacewar.ui.view_frame.__GT_view_frame = (function spacewar$ui$view_frame$__GT_view_frame(state){
return (new spacewar.ui.view_frame.view_frame(state));
});


//# sourceMappingURL=view_frame.js.map
