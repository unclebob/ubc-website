// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('spacewar.ui.protocols');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');

/**
 * @interface
 */
spacewar.ui.protocols.Drawable = function(){};

var spacewar$ui$protocols$Drawable$draw$dyn_528 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (spacewar.ui.protocols.draw[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$);
} else {
var m__5349__auto__ = (spacewar.ui.protocols.draw["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Drawable.draw",this$);
}
}
});
spacewar.ui.protocols.draw = (function spacewar$ui$protocols$draw(this$){
if((((!((this$ == null)))) && ((!((this$.spacewar$ui$protocols$Drawable$draw$arity$1 == null)))))){
return this$.spacewar$ui$protocols$Drawable$draw$arity$1(this$);
} else {
return spacewar$ui$protocols$Drawable$draw$dyn_528.call(null,this$);
}
});

var spacewar$ui$protocols$Drawable$setup$dyn_529 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (spacewar.ui.protocols.setup[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$);
} else {
var m__5349__auto__ = (spacewar.ui.protocols.setup["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Drawable.setup",this$);
}
}
});
spacewar.ui.protocols.setup = (function spacewar$ui$protocols$setup(this$){
if((((!((this$ == null)))) && ((!((this$.spacewar$ui$protocols$Drawable$setup$arity$1 == null)))))){
return this$.spacewar$ui$protocols$Drawable$setup$arity$1(this$);
} else {
return spacewar$ui$protocols$Drawable$setup$dyn_529.call(null,this$);
}
});

var spacewar$ui$protocols$Drawable$update_state$dyn_530 = (function (this$,world){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (spacewar.ui.protocols.update_state[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,world);
} else {
var m__5349__auto__ = (spacewar.ui.protocols.update_state["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,world);
} else {
throw cljs.core.missing_protocol.call(null,"Drawable.update-state",this$);
}
}
});
spacewar.ui.protocols.update_state = (function spacewar$ui$protocols$update_state(this$,world){
if((((!((this$ == null)))) && ((!((this$.spacewar$ui$protocols$Drawable$update_state$arity$2 == null)))))){
return this$.spacewar$ui$protocols$Drawable$update_state$arity$2(this$,world);
} else {
return spacewar$ui$protocols$Drawable$update_state$dyn_530.call(null,this$,world);
}
});

var spacewar$ui$protocols$Drawable$get_state$dyn_531 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (spacewar.ui.protocols.get_state[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$);
} else {
var m__5349__auto__ = (spacewar.ui.protocols.get_state["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Drawable.get-state",this$);
}
}
});
spacewar.ui.protocols.get_state = (function spacewar$ui$protocols$get_state(this$){
if((((!((this$ == null)))) && ((!((this$.spacewar$ui$protocols$Drawable$get_state$arity$1 == null)))))){
return this$.spacewar$ui$protocols$Drawable$get_state$arity$1(this$);
} else {
return spacewar$ui$protocols$Drawable$get_state$dyn_531.call(null,this$);
}
});

var spacewar$ui$protocols$Drawable$clone$dyn_532 = (function (this$,state){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (spacewar.ui.protocols.clone[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,state);
} else {
var m__5349__auto__ = (spacewar.ui.protocols.clone["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,state);
} else {
throw cljs.core.missing_protocol.call(null,"Drawable.clone",this$);
}
}
});
spacewar.ui.protocols.clone = (function spacewar$ui$protocols$clone(this$,state){
if((((!((this$ == null)))) && ((!((this$.spacewar$ui$protocols$Drawable$clone$arity$2 == null)))))){
return this$.spacewar$ui$protocols$Drawable$clone$arity$2(this$,state);
} else {
return spacewar$ui$protocols$Drawable$clone$dyn_532.call(null,this$,state);
}
});

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.ui.protocols","elements","spacewar.ui.protocols/elements",-1570971586),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.keyword_QMARK_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__533){
return cljs.core.coll_QMARK_.call(null,G__533);
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.ui.protocols","drawable-state","spacewar.ui.protocols/drawable-state",-1209023413),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.ui.protocols","elements","spacewar.ui.protocols/elements",-1570971586)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.ui.protocols","elements","spacewar.ui.protocols/elements",-1570971586)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__534){
return cljs.core.map_QMARK_.call(null,G__534);
})], null),(function (G__534){
return cljs.core.map_QMARK_.call(null,G__534);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.ui.protocols","elements","spacewar.ui.protocols/elements",-1570971586)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.ui.protocols","event","spacewar.ui.protocols/event",-1925081661),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.ui.protocols","event-map","spacewar.ui.protocols/event-map",1938141999),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.ui.protocols","event","spacewar.ui.protocols/event",-1925081661)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.ui.protocols","event","spacewar.ui.protocols/event",-1925081661)], null),null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__535){
return cljs.core.map_QMARK_.call(null,G__535);
}),(function (G__535){
return cljs.core.contains_QMARK_.call(null,G__535,new cljs.core.Keyword(null,"event","event",301435442));
})], null),(function (G__535){
return ((cljs.core.map_QMARK_.call(null,G__535)) && (cljs.core.contains_QMARK_.call(null,G__535,new cljs.core.Keyword(null,"event","event",301435442))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.ui.protocols","event","spacewar.ui.protocols/event",-1925081661)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"event","event",301435442)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.ui.protocols","updated-elements-and-events","spacewar.ui.protocols/updated-elements-and-events",279087384),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("spacewar.ui.protocols","drawable-state","spacewar.ui.protocols/drawable-state",-1209023413),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("spacewar.ui.protocols","event-map","spacewar.ui.protocols/event-map",1938141999))),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.ui.protocols","drawable-state","spacewar.ui.protocols/drawable-state",-1209023413),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("spacewar.ui.protocols","event-map","spacewar.ui.protocols/event-map",1938141999))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.ui.protocols","drawable-state","spacewar.ui.protocols/drawable-state",-1209023413),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("spacewar.ui.protocols","event-map","spacewar.ui.protocols/event-map",1938141999),new cljs.core.Keyword("spacewar.ui.protocols","event-map","spacewar.ui.protocols/event-map",1938141999),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("spacewar.ui.protocols","event-map","spacewar.ui.protocols/event-map",1938141999)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__536){
return cljs.core.coll_QMARK_.call(null,G__536);
})], null),null)], null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.ui.protocols","world","spacewar.ui.protocols/world",2082430656),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.ui.protocols","game-state","spacewar.ui.protocols/game-state",-889231644),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.ui.protocols","world","spacewar.ui.protocols/world",2082430656)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.ui.protocols","world","spacewar.ui.protocols/world",2082430656)], null),null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__537){
return cljs.core.map_QMARK_.call(null,G__537);
}),(function (G__537){
return cljs.core.contains_QMARK_.call(null,G__537,new cljs.core.Keyword(null,"world","world",-418292623));
})], null),(function (G__537){
return ((cljs.core.map_QMARK_.call(null,G__537)) && (cljs.core.contains_QMARK_.call(null,G__537,new cljs.core.Keyword(null,"world","world",-418292623))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spacewar.ui.protocols","world","spacewar.ui.protocols/world",2082430656)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world","world",-418292623)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"world","world",-418292623)))], null),null])));
spacewar.ui.protocols.update_elements = (function spacewar$ui$protocols$update_elements(container_state,world){
var elements = new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(container_state);
if((elements == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [container_state,cljs.core.PersistentVector.EMPTY], null);
} else {
var elements__$1 = elements;
var key_vals = cljs.core.PersistentVector.EMPTY;
var cum_events = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,elements__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.assoc,container_state,cljs.core.flatten.call(null,key_vals)),cljs.core.flatten.call(null,cum_events)], null);
} else {
var element_tag = cljs.core.first.call(null,elements__$1);
var element = element_tag.call(null,container_state);
var vec__541 = spacewar.ui.protocols.update_state.call(null,element,world);
var updated_drawable = cljs.core.nth.call(null,vec__541,(0),null);
var events = cljs.core.nth.call(null,vec__541,(1),null);
var G__544 = cljs.core.rest.call(null,elements__$1);
var G__545 = cljs.core.conj.call(null,key_vals,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [element_tag,updated_drawable], null));
var G__546 = cljs.core.conj.call(null,cum_events,events);
elements__$1 = G__544;
key_vals = G__545;
cum_events = G__546;
continue;
}
break;
}
}
});
spacewar.ui.protocols.draw_elements = (function spacewar$ui$protocols$draw_elements(state){
var seq__547 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(state));
var chunk__548 = null;
var count__549 = (0);
var i__550 = (0);
while(true){
if((i__550 < count__549)){
var e = cljs.core._nth.call(null,chunk__548,i__550);
spacewar.ui.protocols.draw.call(null,e.call(null,state));


var G__551 = seq__547;
var G__552 = chunk__548;
var G__553 = count__549;
var G__554 = (i__550 + (1));
seq__547 = G__551;
chunk__548 = G__552;
count__549 = G__553;
i__550 = G__554;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__547);
if(temp__5804__auto__){
var seq__547__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__547__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__547__$1);
var G__555 = cljs.core.chunk_rest.call(null,seq__547__$1);
var G__556 = c__5525__auto__;
var G__557 = cljs.core.count.call(null,c__5525__auto__);
var G__558 = (0);
seq__547 = G__555;
chunk__548 = G__556;
count__549 = G__557;
i__550 = G__558;
continue;
} else {
var e = cljs.core.first.call(null,seq__547__$1);
spacewar.ui.protocols.draw.call(null,e.call(null,state));


var G__559 = cljs.core.next.call(null,seq__547__$1);
var G__560 = null;
var G__561 = (0);
var G__562 = (0);
seq__547 = G__559;
chunk__548 = G__560;
count__549 = G__561;
i__550 = G__562;
continue;
}
} else {
return null;
}
}
break;
}
});
spacewar.ui.protocols.pack_update = (function spacewar$ui$protocols$pack_update(var_args){
var G__564 = arguments.length;
switch (G__564) {
case 1:
return spacewar.ui.protocols.pack_update.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return spacewar.ui.protocols.pack_update.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spacewar.ui.protocols.pack_update.cljs$core$IFn$_invoke$arity$1 = (function (new_drawable){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_drawable,cljs.core.PersistentVector.EMPTY], null);
}));

(spacewar.ui.protocols.pack_update.cljs$core$IFn$_invoke$arity$2 = (function (new_drawable,event){
if((!((event == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_drawable,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_drawable,cljs.core.PersistentVector.EMPTY], null);
}
}));

(spacewar.ui.protocols.pack_update.cljs$lang$maxFixedArity = 2);

spacewar.ui.protocols.change_element = (function spacewar$ui$protocols$change_element(container,element,key,value){
var drawable_element = element.call(null,container);
var element_state = spacewar.ui.protocols.get_state.call(null,drawable_element);
return cljs.core.assoc.call(null,container,element,spacewar.ui.protocols.clone.call(null,drawable_element,cljs.core.assoc.call(null,element_state,key,value)));
});
spacewar.ui.protocols.change_elements = (function spacewar$ui$protocols$change_elements(container,changes){
var container__$1 = container;
var changes__$1 = changes;
while(true){
if(cljs.core.empty_QMARK_.call(null,changes__$1)){
return container__$1;
} else {
var vec__566 = cljs.core.first.call(null,changes__$1);
var element = cljs.core.nth.call(null,vec__566,(0),null);
var key = cljs.core.nth.call(null,vec__566,(1),null);
var value = cljs.core.nth.call(null,vec__566,(2),null);
var G__569 = spacewar.ui.protocols.change_element.call(null,container__$1,element,key,value);
var G__570 = cljs.core.rest.call(null,changes__$1);
container__$1 = G__569;
changes__$1 = G__570;
continue;
}
break;
}
});

//# sourceMappingURL=protocols.js.map
