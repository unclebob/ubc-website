// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('spacewar.util');
goog.require('cljs.core');
spacewar.util.get_named_map = (function spacewar$util$get_named_map(key,id,maps){
var maps__$1 = maps;
while(true){
if(cljs.core.empty_QMARK_.call(null,maps__$1)){
return null;
} else {
var map = cljs.core.first.call(null,maps__$1);
if(cljs.core._EQ_.call(null,id,key.call(null,map))){
return map;
} else {
var G__676 = cljs.core.rest.call(null,maps__$1);
maps__$1 = G__676;
continue;
}
}
break;
}
});
spacewar.util.get_event = (function spacewar$util$get_event(event_id,events){
return spacewar.util.get_named_map.call(null,new cljs.core.Keyword(null,"event","event",301435442),event_id,events);
});
spacewar.util.handle_event = (function spacewar$util$handle_event(event,handler,p__677){
var vec__678 = p__677;
var events = cljs.core.nth.call(null,vec__678,(0),null);
var state = cljs.core.nth.call(null,vec__678,(1),null);
var input = vec__678;
var temp__5802__auto__ = spacewar.util.get_event.call(null,event,events);
if(cljs.core.truth_(temp__5802__auto__)){
var e = temp__5802__auto__;
var new_state = handler.call(null,e,state);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [events,new_state], null);
} else {
return input;
}
});
spacewar.util.color_diff = (function spacewar$util$color_diff(p__681,p__682){
var vec__683 = p__681;
var r1 = cljs.core.nth.call(null,vec__683,(0),null);
var g1 = cljs.core.nth.call(null,vec__683,(1),null);
var b1 = cljs.core.nth.call(null,vec__683,(2),null);
var vec__686 = p__682;
var r2 = cljs.core.nth.call(null,vec__686,(0),null);
var g2 = cljs.core.nth.call(null,vec__686,(1),null);
var b2 = cljs.core.nth.call(null,vec__686,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(r1 - r2),(g1 - g2),(b1 - b2)], null);
});
spacewar.util.color_scale = (function spacewar$util$color_scale(p__689,s){
var vec__690 = p__689;
var r = cljs.core.nth.call(null,vec__690,(0),null);
var g = cljs.core.nth.call(null,vec__690,(1),null);
var b = cljs.core.nth.call(null,vec__690,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(s * r),(s * g),(s * b)], null);
});
spacewar.util.color_add = (function spacewar$util$color_add(p__693,p__694){
var vec__695 = p__693;
var r1 = cljs.core.nth.call(null,vec__695,(0),null);
var g1 = cljs.core.nth.call(null,vec__695,(1),null);
var b1 = cljs.core.nth.call(null,vec__695,(2),null);
var vec__698 = p__694;
var r2 = cljs.core.nth.call(null,vec__698,(0),null);
var g2 = cljs.core.nth.call(null,vec__698,(1),null);
var b2 = cljs.core.nth.call(null,vec__698,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(r1 + r2),(g1 + g2),(b1 + b2)], null);
});
spacewar.util.color_normalize = (function spacewar$util$color_normalize(p__701){
var vec__702 = p__701;
var r = cljs.core.nth.call(null,vec__702,(0),null);
var g = cljs.core.nth.call(null,vec__702,(1),null);
var b = cljs.core.nth.call(null,vec__702,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod.call(null,r,(255)),cljs.core.mod.call(null,g,(255)),cljs.core.mod.call(null,b,(255))], null);
});
spacewar.util.color_shift = (function spacewar$util$color_shift(color1,color2,factor){
var diff = spacewar.util.color_diff.call(null,color2,color1);
var delta = spacewar.util.color_scale.call(null,diff,factor);
return spacewar.util.color_add.call(null,color1,delta);
});
spacewar.util.pos = (function spacewar$util$pos(object){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(object),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(object)], null);
});
spacewar.util.pos_map = (function spacewar$util$pos_map(objects){
var objects__$1 = objects;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,objects__$1)){
return result;
} else {
var G__705 = cljs.core.rest.call(null,objects__$1);
var G__706 = cljs.core.assoc.call(null,result,spacewar.util.pos.call(null,cljs.core.first.call(null,objects__$1)),cljs.core.first.call(null,objects__$1));
objects__$1 = G__705;
result = G__706;
continue;
}
break;
}
});

//# sourceMappingURL=util.js.map
