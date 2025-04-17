// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('quil.util');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.object');
goog.scope(function(){
quil.sketch.goog$module$goog$object = goog.module.get('goog.object');
});
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"java2d","java2d",166099237),(p5.prototype["JAVA2D"]),new cljs.core.Keyword(null,"p2d","p2d",-2106175755),(p5.prototype["P2D"]),new cljs.core.Keyword(null,"p3d","p3d",-850380194),(p5.prototype["P3D"]),new cljs.core.Keyword(null,"opengl","opengl",-614998103),(p5.prototype["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"p3d","p3d",-850380194),mode)){
return (p5.prototype["WEBGL"]);
} else {
return quil.util.resolve_constant_key.call(null,mode,quil.sketch.rendering_modes);
}
});
quil.sketch.set_size = (function quil$sketch$set_size(applet,width,height){
return applet.resizeCanvas(width,height);
});
quil.sketch.size = (function quil$sketch$size(var_args){
var G__616 = arguments.length;
switch (G__616) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet.call(null).createCanvas((width | (0)),(height | (0)));
}));

(quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet.call(null).createCanvas((width | (0)),(height | (0)),quil.sketch.resolve_renderer.call(null,mode));
}));

(quil.sketch.size.cljs$lang$maxFixedArity = 3);

quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__618 = cljs.core.seq.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),new cljs.core.Keyword(null,"mouseOut","mouseOut",-386669045),new cljs.core.Keyword(null,"mouseDragged","mouseDragged",129975181),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"mouseWheel","mouseWheel",-1057803856),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),new cljs.core.Keyword(null,"mouseClicked","mouseClicked",1764302965),new cljs.core.Keyword(null,"mouseReleased","mouseReleased",1116234838),new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),new cljs.core.Keyword(null,"mouseOver","mouseOver",-1334461930),new cljs.core.Keyword(null,"keyTyped","keyTyped",1437329399),new cljs.core.Keyword(null,"draw","draw",1358331674)],[new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),new cljs.core.Keyword(null,"mouse-exited","mouse-exited",-483205244),new cljs.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),new cljs.core.Keyword(null,"key-released","key-released",215919828),new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),new cljs.core.Keyword(null,"mouse-released","mouse-released",-664480061),new cljs.core.Keyword(null,"mouse-pressed","mouse-pressed",736955536),new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),new cljs.core.Keyword(null,"mouse-entered","mouse-entered",811350322),new cljs.core.Keyword(null,"key-typed","key-typed",-876037597),new cljs.core.Keyword(null,"draw","draw",1358331674)]));
var chunk__619 = null;
var count__620 = (0);
var i__621 = (0);
while(true){
if((i__621 < count__620)){
var vec__632 = cljs.core._nth.call(null,chunk__619,i__621);
var processing_name = cljs.core.nth.call(null,vec__632,(0),null);
var quil_name = cljs.core.nth.call(null,vec__632,(1),null);
var temp__5804__auto___642 = opts.call(null,quil_name);
if(cljs.core.truth_(temp__5804__auto___642)){
var handler_643 = temp__5804__auto___642;
(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__618,chunk__619,count__620,i__621,handler_643,temp__5804__auto___642,vec__632,processing_name,quil_name){
return (function() { 
var G__644__delegate = function (args){
var _STAR_applet_STAR__orig_val__635 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__636 = prc;
(quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__636);

try{return cljs.core.apply.call(null,handler_643,args);
}finally {(quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__635);
}};
var G__644 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__645__i = 0, G__645__a = new Array(arguments.length -  0);
while (G__645__i < G__645__a.length) {G__645__a[G__645__i] = arguments[G__645__i + 0]; ++G__645__i;}
  args = new cljs.core.IndexedSeq(G__645__a,0,null);
} 
return G__644__delegate.call(this,args);};
G__644.cljs$lang$maxFixedArity = 0;
G__644.cljs$lang$applyTo = (function (arglist__646){
var args = cljs.core.seq(arglist__646);
return G__644__delegate(args);
});
G__644.cljs$core$IFn$_invoke$arity$variadic = G__644__delegate;
return G__644;
})()
;})(seq__618,chunk__619,count__620,i__621,handler_643,temp__5804__auto___642,vec__632,processing_name,quil_name))
);
} else {
}


var G__647 = seq__618;
var G__648 = chunk__619;
var G__649 = count__620;
var G__650 = (i__621 + (1));
seq__618 = G__647;
chunk__619 = G__648;
count__620 = G__649;
i__621 = G__650;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__618);
if(temp__5804__auto__){
var seq__618__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__618__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__618__$1);
var G__651 = cljs.core.chunk_rest.call(null,seq__618__$1);
var G__652 = c__5525__auto__;
var G__653 = cljs.core.count.call(null,c__5525__auto__);
var G__654 = (0);
seq__618 = G__651;
chunk__619 = G__652;
count__620 = G__653;
i__621 = G__654;
continue;
} else {
var vec__637 = cljs.core.first.call(null,seq__618__$1);
var processing_name = cljs.core.nth.call(null,vec__637,(0),null);
var quil_name = cljs.core.nth.call(null,vec__637,(1),null);
var temp__5804__auto___655__$1 = opts.call(null,quil_name);
if(cljs.core.truth_(temp__5804__auto___655__$1)){
var handler_656 = temp__5804__auto___655__$1;
(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__618,chunk__619,count__620,i__621,handler_656,temp__5804__auto___655__$1,vec__637,processing_name,quil_name,seq__618__$1,temp__5804__auto__){
return (function() { 
var G__657__delegate = function (args){
var _STAR_applet_STAR__orig_val__640 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__641 = prc;
(quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__641);

try{return cljs.core.apply.call(null,handler_656,args);
}finally {(quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__640);
}};
var G__657 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__658__i = 0, G__658__a = new Array(arguments.length -  0);
while (G__658__i < G__658__a.length) {G__658__a[G__658__i] = arguments[G__658__i + 0]; ++G__658__i;}
  args = new cljs.core.IndexedSeq(G__658__a,0,null);
} 
return G__657__delegate.call(this,args);};
G__657.cljs$lang$maxFixedArity = 0;
G__657.cljs$lang$applyTo = (function (arglist__659){
var args = cljs.core.seq(arglist__659);
return G__657__delegate(args);
});
G__657.cljs$core$IFn$_invoke$arity$variadic = G__657__delegate;
return G__657;
})()
;})(seq__618,chunk__619,count__620,i__621,handler_656,temp__5804__auto___655__$1,vec__637,processing_name,quil_name,seq__618__$1,temp__5804__auto__))
);
} else {
}


var G__660 = cljs.core.next.call(null,seq__618__$1);
var G__661 = null;
var G__662 = (0);
var G__663 = (0);
seq__618 = G__660;
chunk__619 = G__661;
count__620 = G__662;
i__621 = G__663;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.in_fullscreen_QMARK_ = (function quil$sketch$in_fullscreen_QMARK_(){
var or__5002__auto__ = document.fullscreenElement;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return document.mozFullScreenElement;
}
});
/**
 * Adds fullscreen support for the provided `p5` object.
 *   Fullscreen is enabled when the user presses `F11`. We turn
 *   the sketch `<canvas>` element to fullscreen storing the old size
 *   in an `atom`. When the user cancels fullscreen (`F11` or `Esc`)
 *   we resize the sketch back to the old size.
 */
quil.sketch.add_fullscreen_support = (function quil$sketch$add_fullscreen_support(applet){
var old_size = cljs.core.atom.call(null,null);
var adjust_canvas_size = (function (){
if(cljs.core.truth_(quil.sketch.in_fullscreen_QMARK_.call(null))){
cljs.core.reset_BANG_.call(null,old_size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [applet.width,applet.height], null));

return quil.sketch.set_size.call(null,applet,window.screen.width,window.screen.height);
} else {
return cljs.core.apply.call(null,quil.sketch.set_size,applet,cljs.core.deref.call(null,old_size));
}
});
goog.events.listen(window,goog.events.EventType.KEYDOWN,(function (event){
if(((cljs.core._EQ_.call(null,event.key,"F11")) && (cljs.core.not.call(null,quil.sketch.in_fullscreen_QMARK_.call(null))))){
event.preventDefault();

var canvas = applet.quil_canvas;
if(cljs.core.truth_(canvas.requestFullscreen)){
return canvas.requestFullscreen();
} else {
if(cljs.core.truth_(canvas.mozRequestFullScreen)){
return canvas.mozRequestFullScreen();
} else {
return console.warn("Fullscreen mode is not supported in current browser.");

}
}
} else {
return null;
}
}));

goog.events.listen(document,"fullscreenchange",adjust_canvas_size);

goog.events.listen(document,"mozfullscreenchange",adjust_canvas_size);

return goog.events.listen(document,"fullscreenerror",(function (p1__664_SHARP_){
return console.error("Error while switching to/from fullscreen: ",p1__664_SHARP_);
}));
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (p1__665_SHARP_){
return p1__665_SHARP_.call(null,options);
}).call(null,cljs.core.apply.call(null,cljs.core.comp,cljs.core.cons.call(null,quil.middlewares.deprecated_options.deprecated_options,new cljs.core.Keyword(null,"middleware","middleware",1462115504).cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)))));
var sketch_size = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(opts);
var renderer = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts);
var setup = (function (){
cljs.core.apply.call(null,quil.sketch.size,cljs.core.concat.call(null,sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(opts))){
new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(opts).call(null);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$1(opts))){
return new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$1(opts).call(null);
} else {
return null;
}
});
var mouse_wheel = (function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5804__auto__)){
var wheel_handler = temp__5804__auto__;
return (function (evt){
return wheel_handler.call(null,quil.sketch.goog$module$goog$object.get.call(null,evt,"delta"));
});
} else {
return null;
}
})();
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"setup","setup",1987730512),setup,new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),mouse_wheel);
var sketch = (function (prc){
quil.sketch.bind_handlers.call(null,prc,opts__$1);

(prc.quil = cljs.core.atom.call(null,null));

return (prc.quil_internal_state = cljs.core.atom.call(null,quil.util.initial_internal_state));
});
return sketch;
});
quil.sketch.destroy_previous_sketch = (function quil$sketch$destroy_previous_sketch(host_elem){
var temp__5804__auto__ = host_elem.processing_obj;
if(cljs.core.truth_(temp__5804__auto__)){
var proc_obj = temp__5804__auto__;
return proc_obj.remove();
} else {
return null;
}
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__5732__auto__ = [];
var len__5726__auto___667 = arguments.length;
var i__5727__auto___668 = (0);
while(true){
if((i__5727__auto___668 < len__5726__auto___667)){
args__5732__auto__.push((arguments[i__5727__auto___668]));

var G__669 = (i__5727__auto___668 + (1));
i__5727__auto___668 = G__669;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var host_elem = new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map);
var renderer = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"p2d","p2d",-2106175755);
}
})();
var host_elem__$1 = ((typeof host_elem === 'string')?document.getElementById(host_elem):host_elem);
if(cljs.core.truth_(host_elem__$1)){
if(cljs.core.truth_(host_elem__$1.processing_context)){
if(cljs.core._EQ_.call(null,renderer,host_elem__$1.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
(host_elem__$1.processing_context = renderer);
}

quil.sketch.destroy_previous_sketch.call(null,host_elem__$1);

var proc_obj = (new p5(quil.sketch.make_sketch.call(null,opts_map),host_elem__$1));
(host_elem__$1.processing_obj = proc_obj);

(proc_obj.quil_canvas = host_elem__$1);

quil.sketch.add_fullscreen_support.call(null,proc_obj);

return proc_obj;
} else {
return console.error((cljs.core.truth_(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map))?["ERROR: Cannot find host element: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map))].join(''):"ERROR: Cannot create sketch. :host is not specified or element not found."));
}
}));

(quil.sketch.sketch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(quil.sketch.sketch.cljs$lang$applyTo = (function (seq666){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq666));
}));

quil.sketch.sketch_init_list = cljs.core.atom.call(null,cljs.core.List.EMPTY);
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK__674 = quil.sketch.empty_body_QMARK_.call(null);
var seq__670_675 = cljs.core.seq.call(null,cljs.core.deref.call(null,quil.sketch.sketch_init_list));
var chunk__671_676 = null;
var count__672_677 = (0);
var i__673_678 = (0);
while(true){
if((i__673_678 < count__672_677)){
var sk_679 = cljs.core._nth.call(null,chunk__671_676,i__673_678);
if(add_elem_QMARK__674){
quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk_679));
} else {
}

new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk_679).call(null);


var G__680 = seq__670_675;
var G__681 = chunk__671_676;
var G__682 = count__672_677;
var G__683 = (i__673_678 + (1));
seq__670_675 = G__680;
chunk__671_676 = G__681;
count__672_677 = G__682;
i__673_678 = G__683;
continue;
} else {
var temp__5804__auto___684 = cljs.core.seq.call(null,seq__670_675);
if(temp__5804__auto___684){
var seq__670_685__$1 = temp__5804__auto___684;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__670_685__$1)){
var c__5525__auto___686 = cljs.core.chunk_first.call(null,seq__670_685__$1);
var G__687 = cljs.core.chunk_rest.call(null,seq__670_685__$1);
var G__688 = c__5525__auto___686;
var G__689 = cljs.core.count.call(null,c__5525__auto___686);
var G__690 = (0);
seq__670_675 = G__687;
chunk__671_676 = G__688;
count__672_677 = G__689;
i__673_678 = G__690;
continue;
} else {
var sk_691 = cljs.core.first.call(null,seq__670_685__$1);
if(add_elem_QMARK__674){
quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk_691));
} else {
}

new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk_691).call(null);


var G__692 = cljs.core.next.call(null,seq__670_685__$1);
var G__693 = null;
var G__694 = (0);
var G__695 = (0);
seq__670_675 = G__692;
chunk__671_676 = G__693;
count__672_677 = G__694;
i__673_678 = G__695;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,quil.sketch.sketch_init_list,cljs.core.PersistentVector.EMPTY);
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
cljs.core.swap_BANG_.call(null,quil.sketch.sketch_init_list,cljs.core.conj,sk);

if(cljs.core._EQ_.call(null,document.readyState,"complete")){
return quil.sketch.init_sketches.call(null);
} else {
return null;
}
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);

//# sourceMappingURL=sketch.js.map
