// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('quil.middlewares.fun_mode');
goog.require('cljs.core');
goog.require('quil.core');
quil.middlewares.fun_mode.wrap_setup = (function quil$middlewares$fun_mode$wrap_setup(options){
var setup = new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$2(options,(function (){
return null;
}));
return cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"setup","setup",1987730512),(function (){
return cljs.core.reset_BANG_.call(null,quil.core.state_atom.call(null),setup.call(null));
}));
});
quil.middlewares.fun_mode.wrap_draw_update = (function quil$middlewares$fun_mode$wrap_draw_update(options){
var draw = new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$2(options,(function (_){
return null;
}));
var update = new cljs.core.Keyword(null,"update","update",1045576396).cljs$core$IFn$_invoke$arity$2(options,cljs.core.identity);
var quil_draw = (function (){
return draw.call(null,cljs.core.swap_BANG_.call(null,quil.core.state_atom.call(null),((cljs.core._EQ_.call(null,quil.core.frame_count.call(null),(1)))?cljs.core.identity:update)));
});
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"update","update",1045576396)),new cljs.core.Keyword(null,"draw","draw",1358331674),quil_draw);
});
quil.middlewares.fun_mode.mouse_event = (function quil$middlewares$fun_mode$mouse_event(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),quil.core.mouse_x.call(null),new cljs.core.Keyword(null,"y","y",-1757859776),quil.core.mouse_y.call(null)], null);
});
quil.middlewares.fun_mode.mouse_event_full = (function quil$middlewares$fun_mode$mouse_event_full(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),quil.core.mouse_x.call(null),new cljs.core.Keyword(null,"y","y",-1757859776),quil.core.mouse_y.call(null),new cljs.core.Keyword(null,"button","button",1456579943),quil.core.mouse_button.call(null)], null);
});
quil.middlewares.fun_mode.key_event = (function quil$middlewares$fun_mode$key_event(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),quil.core.key_as_keyword.call(null),new cljs.core.Keyword(null,"key-code","key-code",-1732114304),quil.core.key_code.call(null),new cljs.core.Keyword(null,"raw-key","raw-key",-162482279),quil.core.raw_key.call(null)], null);
});
quil.middlewares.fun_mode.wrap_handler = (function quil$middlewares$fun_mode$wrap_handler(var_args){
var G__2666 = arguments.length;
switch (G__2666) {
case 2:
return quil.middlewares.fun_mode.wrap_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.middlewares.fun_mode.wrap_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.middlewares.fun_mode.wrap_handler.cljs$core$IFn$_invoke$arity$2 = (function (options,handler_key){
return quil.middlewares.fun_mode.wrap_handler.call(null,options,handler_key,null);
}));

(quil.middlewares.fun_mode.wrap_handler.cljs$core$IFn$_invoke$arity$3 = (function (options,handler_key,event_fn){
var temp__5802__auto__ = options.call(null,handler_key);
if(cljs.core.truth_(temp__5802__auto__)){
var handler = temp__5802__auto__;
return cljs.core.assoc.call(null,options,handler_key,(cljs.core.truth_(event_fn)?(function (){
return cljs.core.swap_BANG_.call(null,quil.core.state_atom.call(null),handler,event_fn.call(null));
}):(function (){
return cljs.core.swap_BANG_.call(null,quil.core.state_atom.call(null),handler);
})));
} else {
return options;
}
}));

(quil.middlewares.fun_mode.wrap_handler.cljs$lang$maxFixedArity = 3);

quil.middlewares.fun_mode.wrap_handlers = (function quil$middlewares$fun_mode$wrap_handlers(var_args){
var args__5732__auto__ = [];
var len__5726__auto___2670 = arguments.length;
var i__5727__auto___2671 = (0);
while(true){
if((i__5727__auto___2671 < len__5726__auto___2670)){
args__5732__auto__.push((arguments[i__5727__auto___2671]));

var G__2672 = (i__5727__auto___2671 + (1));
i__5727__auto___2671 = G__2672;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return quil.middlewares.fun_mode.wrap_handlers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(quil.middlewares.fun_mode.wrap_handlers.cljs$core$IFn$_invoke$arity$variadic = (function (options,handlers){
return cljs.core.reduce.call(null,(function (options__$1,handler){
if((handler instanceof cljs.core.Keyword)){
return quil.middlewares.fun_mode.wrap_handler.call(null,options__$1,handler);
} else {
return cljs.core.apply.call(null,quil.middlewares.fun_mode.wrap_handler,options__$1,handler);
}
}),options,handlers);
}));

(quil.middlewares.fun_mode.wrap_handlers.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(quil.middlewares.fun_mode.wrap_handlers.cljs$lang$applyTo = (function (seq2668){
var G__2669 = cljs.core.first.call(null,seq2668);
var seq2668__$1 = cljs.core.next.call(null,seq2668);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2669,seq2668__$1);
}));

quil.middlewares.fun_mode.wrap_mouse_wheel = (function quil$middlewares$fun_mode$wrap_mouse_wheel(options){
var temp__5802__auto__ = new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__5802__auto__)){
var handler = temp__5802__auto__;
return cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),(function (rotation){
return cljs.core.swap_BANG_.call(null,quil.core.state_atom.call(null),handler,rotation);
}));
} else {
return options;
}
});
/**
 * Introduces `function mode` making all handlers (`setup`, `draw`,
 *   `mouse-click`, etc) state-aware. Adds support for `update` function.
 */
quil.middlewares.fun_mode.fun_mode = (function quil$middlewares$fun_mode$fun_mode(options){
return quil.middlewares.fun_mode.wrap_mouse_wheel.call(null,quil.middlewares.fun_mode.wrap_handlers.call(null,quil.middlewares.fun_mode.wrap_draw_update.call(null,quil.middlewares.fun_mode.wrap_setup.call(null,options)),new cljs.core.Keyword(null,"focus-gained","focus-gained",-857086384),new cljs.core.Keyword(null,"focus-lost","focus-lost",-554849613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-entered","mouse-entered",811350322),quil.middlewares.fun_mode.mouse_event], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-exited","mouse-exited",-483205244),quil.middlewares.fun_mode.mouse_event], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-pressed","mouse-pressed",736955536),quil.middlewares.fun_mode.mouse_event_full], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-released","mouse-released",-664480061),quil.middlewares.fun_mode.mouse_event], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),quil.middlewares.fun_mode.mouse_event_full], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),(function (){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),quil.core.mouse_x.call(null),new cljs.core.Keyword(null,"y","y",-1757859776),quil.core.mouse_y.call(null),new cljs.core.Keyword(null,"p-x","p-x",-1721211211),quil.core.pmouse_x.call(null),new cljs.core.Keyword(null,"p-y","p-y",-530704830),quil.core.pmouse_y.call(null)], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441),(function (){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),quil.core.mouse_x.call(null),new cljs.core.Keyword(null,"y","y",-1757859776),quil.core.mouse_y.call(null),new cljs.core.Keyword(null,"p-x","p-x",-1721211211),quil.core.pmouse_x.call(null),new cljs.core.Keyword(null,"p-y","p-y",-530704830),quil.core.pmouse_y.call(null),new cljs.core.Keyword(null,"button","button",1456579943),quil.core.mouse_button.call(null)], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),quil.middlewares.fun_mode.key_event], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-released","key-released",215919828),quil.middlewares.fun_mode.key_event], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-typed","key-typed",-876037597),quil.middlewares.fun_mode.key_event], null),new cljs.core.Keyword(null,"on-close","on-close",-761178394)));
});

//# sourceMappingURL=fun_mode.js.map
