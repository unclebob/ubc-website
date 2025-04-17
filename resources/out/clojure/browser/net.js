// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.json');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.WebSocket');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.Uri');
goog.require('goog.object');
goog.scope(function(){
clojure.browser.net.goog$module$goog$object = goog.module.get('goog.object');
});
clojure.browser.net._STAR_timeout_STAR_ = (10000);
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__2210){
var vec__2211 = p__2210;
var k = cljs.core.nth.call(null,vec__2211,(0),null);
var v = cljs.core.nth.call(null,vec__2211,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k.toLowerCase()),v], null);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));

/**
 * @interface
 */
clojure.browser.net.IConnection = function(){};

var clojure$browser$net$IConnection$connect$dyn_2218 = (function() {
var G__2219 = null;
var G__2219__1 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (clojure.browser.net.connect[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$);
} else {
var m__5349__auto__ = (clojure.browser.net.connect["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
});
var G__2219__2 = (function (this$,opt1){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (clojure.browser.net.connect[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,opt1);
} else {
var m__5349__auto__ = (clojure.browser.net.connect["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,opt1);
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
});
var G__2219__3 = (function (this$,opt1,opt2){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (clojure.browser.net.connect[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,opt1,opt2);
} else {
var m__5349__auto__ = (clojure.browser.net.connect["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,opt1,opt2);
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
});
var G__2219__4 = (function (this$,opt1,opt2,opt3){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (clojure.browser.net.connect[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,opt1,opt2,opt3);
} else {
var m__5349__auto__ = (clojure.browser.net.connect["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,opt1,opt2,opt3);
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
});
G__2219 = function(this$,opt1,opt2,opt3){
switch(arguments.length){
case 1:
return G__2219__1.call(this,this$);
case 2:
return G__2219__2.call(this,this$,opt1);
case 3:
return G__2219__3.call(this,this$,opt1,opt2);
case 4:
return G__2219__4.call(this,this$,opt1,opt2,opt3);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2219.cljs$core$IFn$_invoke$arity$1 = G__2219__1;
G__2219.cljs$core$IFn$_invoke$arity$2 = G__2219__2;
G__2219.cljs$core$IFn$_invoke$arity$3 = G__2219__3;
G__2219.cljs$core$IFn$_invoke$arity$4 = G__2219__4;
return G__2219;
})()
;
clojure.browser.net.connect = (function clojure$browser$net$connect(var_args){
var G__2215 = arguments.length;
switch (G__2215) {
case 1:
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$IConnection$connect$arity$1 == null)))))){
return this$.clojure$browser$net$IConnection$connect$arity$1(this$);
} else {
return clojure$browser$net$IConnection$connect$dyn_2218.call(null,this$);
}
}));

(clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$2 = (function (this$,opt1){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$IConnection$connect$arity$2 == null)))))){
return this$.clojure$browser$net$IConnection$connect$arity$2(this$,opt1);
} else {
return clojure$browser$net$IConnection$connect$dyn_2218.call(null,this$,opt1);
}
}));

(clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$3 = (function (this$,opt1,opt2){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$IConnection$connect$arity$3 == null)))))){
return this$.clojure$browser$net$IConnection$connect$arity$3(this$,opt1,opt2);
} else {
return clojure$browser$net$IConnection$connect$dyn_2218.call(null,this$,opt1,opt2);
}
}));

(clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$4 = (function (this$,opt1,opt2,opt3){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$IConnection$connect$arity$4 == null)))))){
return this$.clojure$browser$net$IConnection$connect$arity$4(this$,opt1,opt2,opt3);
} else {
return clojure$browser$net$IConnection$connect$dyn_2218.call(null,this$,opt1,opt2,opt3);
}
}));

(clojure.browser.net.connect.cljs$lang$maxFixedArity = 4);


var clojure$browser$net$IConnection$transmit$dyn_2221 = (function() {
var G__2222 = null;
var G__2222__2 = (function (this$,opt){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (clojure.browser.net.transmit[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,opt);
} else {
var m__5349__auto__ = (clojure.browser.net.transmit["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,opt);
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
});
var G__2222__3 = (function (this$,opt,opt2){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (clojure.browser.net.transmit[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,opt,opt2);
} else {
var m__5349__auto__ = (clojure.browser.net.transmit["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,opt,opt2);
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
});
var G__2222__4 = (function (this$,opt,opt2,opt3){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (clojure.browser.net.transmit[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,opt,opt2,opt3);
} else {
var m__5349__auto__ = (clojure.browser.net.transmit["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,opt,opt2,opt3);
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
});
var G__2222__5 = (function (this$,opt,opt2,opt3,opt4){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (clojure.browser.net.transmit[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,opt,opt2,opt3,opt4);
} else {
var m__5349__auto__ = (clojure.browser.net.transmit["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,opt,opt2,opt3,opt4);
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
});
var G__2222__6 = (function (this$,opt,opt2,opt3,opt4,opt5){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (clojure.browser.net.transmit[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,opt,opt2,opt3,opt4,opt5);
} else {
var m__5349__auto__ = (clojure.browser.net.transmit["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,opt,opt2,opt3,opt4,opt5);
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
});
G__2222 = function(this$,opt,opt2,opt3,opt4,opt5){
switch(arguments.length){
case 2:
return G__2222__2.call(this,this$,opt);
case 3:
return G__2222__3.call(this,this$,opt,opt2);
case 4:
return G__2222__4.call(this,this$,opt,opt2,opt3);
case 5:
return G__2222__5.call(this,this$,opt,opt2,opt3,opt4);
case 6:
return G__2222__6.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2222.cljs$core$IFn$_invoke$arity$2 = G__2222__2;
G__2222.cljs$core$IFn$_invoke$arity$3 = G__2222__3;
G__2222.cljs$core$IFn$_invoke$arity$4 = G__2222__4;
G__2222.cljs$core$IFn$_invoke$arity$5 = G__2222__5;
G__2222.cljs$core$IFn$_invoke$arity$6 = G__2222__6;
return G__2222;
})()
;
clojure.browser.net.transmit = (function clojure$browser$net$transmit(var_args){
var G__2217 = arguments.length;
switch (G__2217) {
case 2:
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2 = (function (this$,opt){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$IConnection$transmit$arity$2 == null)))))){
return this$.clojure$browser$net$IConnection$transmit$arity$2(this$,opt);
} else {
return clojure$browser$net$IConnection$transmit$dyn_2221.call(null,this$,opt);
}
}));

(clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3 = (function (this$,opt,opt2){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$IConnection$transmit$arity$3 == null)))))){
return this$.clojure$browser$net$IConnection$transmit$arity$3(this$,opt,opt2);
} else {
return clojure$browser$net$IConnection$transmit$dyn_2221.call(null,this$,opt,opt2);
}
}));

(clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$4 = (function (this$,opt,opt2,opt3){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$IConnection$transmit$arity$4 == null)))))){
return this$.clojure$browser$net$IConnection$transmit$arity$4(this$,opt,opt2,opt3);
} else {
return clojure$browser$net$IConnection$transmit$dyn_2221.call(null,this$,opt,opt2,opt3);
}
}));

(clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$5 = (function (this$,opt,opt2,opt3,opt4){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$IConnection$transmit$arity$5 == null)))))){
return this$.clojure$browser$net$IConnection$transmit$arity$5(this$,opt,opt2,opt3,opt4);
} else {
return clojure$browser$net$IConnection$transmit$dyn_2221.call(null,this$,opt,opt2,opt3,opt4);
}
}));

(clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6 = (function (this$,opt,opt2,opt3,opt4,opt5){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$IConnection$transmit$arity$6 == null)))))){
return this$.clojure$browser$net$IConnection$transmit$arity$6(this$,opt,opt2,opt3,opt4,opt5);
} else {
return clojure$browser$net$IConnection$transmit$dyn_2221.call(null,this$,opt,opt2,opt3,opt4,opt5);
}
}));

(clojure.browser.net.transmit.cljs$lang$maxFixedArity = 6);


var clojure$browser$net$IConnection$close$dyn_2224 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (clojure.browser.net.close[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$);
} else {
var m__5349__auto__ = (clojure.browser.net.close["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
});
clojure.browser.net.close = (function clojure$browser$net$close(this$){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$IConnection$close$arity$1 == null)))))){
return this$.clojure$browser$net$IConnection$close$arity$1(this$);
} else {
return clojure$browser$net$IConnection$close$dyn_2224.call(null,this$);
}
});

(goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = cljs.core.PROTOCOL_SENTINEL);

(goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$2 = (function (this$,uri){
var this$__$1 = this;
return clojure.browser.net.transmit.call(null,this$__$1,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
}));

(goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$3 = (function (this$,uri,method){
var this$__$1 = this;
return clojure.browser.net.transmit.call(null,this$__$1,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
}));

(goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$4 = (function (this$,uri,method,content){
var this$__$1 = this;
return clojure.browser.net.transmit.call(null,this$__$1,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
}));

(goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$5 = (function (this$,uri,method,content,headers){
var this$__$1 = this;
return clojure.browser.net.transmit.call(null,this$__$1,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
}));

(goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$6 = (function (this$,uri,method,content,headers,timeout){
var this$__$1 = this;
this$__$1.setTimeoutInterval(timeout);

return this$__$1.send(uri,method,content,headers);
}));

(goog.net.XhrIo.prototype.clojure$browser$event$IEventType$ = cljs.core.PROTOCOL_SENTINEL);

(goog.net.XhrIo.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__2225){
var vec__2226 = p__2225;
var k = cljs.core.nth.call(null,vec__2226,(0),null);
var v = cljs.core.nth.call(null,vec__2226,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k.toLowerCase()),v], null);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
}));
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__2229){
var vec__2230 = p__2229;
var k = cljs.core.nth.call(null,vec__2230,(0),null);
var v = cljs.core.nth.call(null,vec__2230,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k.toLowerCase()),v], null);
}),cljs.core.js__GT_clj.call(null,goog.net.xpc.CfgFields)));
/**
 * Returns an XhrIo connection
 */
clojure.browser.net.xhr_connection = (function clojure$browser$net$xhr_connection(){
return (new goog.net.XhrIo());
});

/**
 * @interface
 */
clojure.browser.net.ICrossPageChannel = function(){};

var clojure$browser$net$ICrossPageChannel$register_service$dyn_2235 = (function() {
var G__2236 = null;
var G__2236__3 = (function (this$,service_name,fn){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (clojure.browser.net.register_service[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,service_name,fn);
} else {
var m__5349__auto__ = (clojure.browser.net.register_service["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,service_name,fn);
} else {
throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
});
var G__2236__4 = (function (this$,service_name,fn,encode_json_QMARK_){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (clojure.browser.net.register_service[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,service_name,fn,encode_json_QMARK_);
} else {
var m__5349__auto__ = (clojure.browser.net.register_service["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,service_name,fn,encode_json_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
});
G__2236 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case 3:
return G__2236__3.call(this,this$,service_name,fn);
case 4:
return G__2236__4.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2236.cljs$core$IFn$_invoke$arity$3 = G__2236__3;
G__2236.cljs$core$IFn$_invoke$arity$4 = G__2236__4;
return G__2236;
})()
;
clojure.browser.net.register_service = (function clojure$browser$net$register_service(var_args){
var G__2234 = arguments.length;
switch (G__2234) {
case 3:
return clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3 = (function (this$,service_name,fn){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3 == null)))))){
return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3(this$,service_name,fn);
} else {
return clojure$browser$net$ICrossPageChannel$register_service$dyn_2235.call(null,this$,service_name,fn);
}
}));

(clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$4 = (function (this$,service_name,fn,encode_json_QMARK_){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4 == null)))))){
return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4(this$,service_name,fn,encode_json_QMARK_);
} else {
return clojure$browser$net$ICrossPageChannel$register_service$dyn_2235.call(null,this$,service_name,fn,encode_json_QMARK_);
}
}));

(clojure.browser.net.register_service.cljs$lang$maxFixedArity = 4);


(goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$ = cljs.core.PROTOCOL_SENTINEL);

(goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service$arity$3 = (function (this$,service_name,fn){
var this$__$1 = this;
return clojure.browser.net.register_service.call(null,this$__$1,service_name,fn,false);
}));

(goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service$arity$4 = (function (this$,service_name,fn,encode_json_QMARK_){
var this$__$1 = this;
return this$__$1.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
}));

(goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = cljs.core.PROTOCOL_SENTINEL);

(goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$1 = (function (this$){
var this$__$1 = this;
return clojure.browser.net.connect.call(null,this$__$1,null);
}));

(goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$2 = (function (this$,on_connect_fn){
var this$__$1 = this;
return this$__$1.connect(on_connect_fn);
}));

(goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$3 = (function (this$,on_connect_fn,config_iframe_fn){
var this$__$1 = this;
return clojure.browser.net.connect.call(null,this$__$1,on_connect_fn,config_iframe_fn,document.body);
}));

(goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$4 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
var this$__$1 = this;
this$__$1.createPeerIframe(iframe_parent,config_iframe_fn);

return this$__$1.connect(on_connect_fn);
}));

(goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$transmit$arity$3 = (function (this$,service_name,payload){
var this$__$1 = this;
return this$__$1.send(cljs.core.name.call(null,service_name),payload);
}));

(goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$close$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.close();
}));
/**
 * When passed with a config hash-map, returns a parent
 *   CrossPageChannel object. Keys in the config hash map are downcased
 *   versions of the goog.net.xpc.CfgFields enum keys,
 *   e.g. goog.net.xpc.CfgFields.PEER_URI becomes :peer_uri in the config
 *   hash.
 * 
 *   When passed with no args, creates a child CrossPageChannel object,
 *   and the config is automatically taken from the URL param 'xpc', as
 *   per the CrossPageChannel API.
 */
clojure.browser.net.xpc_connection = (function clojure$browser$net$xpc_connection(var_args){
var G__2239 = arguments.length;
switch (G__2239) {
case 0:
return clojure.browser.net.xpc_connection.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.browser.net.xpc_connection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.browser.net.xpc_connection.cljs$core$IFn$_invoke$arity$0 = (function (){
var temp__5804__auto__ = (new goog.Uri(window.location.href)).getParameterValue("xpc");
if(cljs.core.truth_(temp__5804__auto__)){
var config = temp__5804__auto__;
return (new goog.net.xpc.CrossPageChannel(goog.json.parse(config)));
} else {
return null;
}
}));

(clojure.browser.net.xpc_connection.cljs$core$IFn$_invoke$arity$1 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__2240){
var vec__2241 = p__2240;
var k = cljs.core.nth.call(null,vec__2241,(0),null);
var v = cljs.core.nth.call(null,vec__2241,(1),null);
var temp__5802__auto__ = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k);
if(cljs.core.truth_(temp__5802__auto__)){
var field = temp__5802__auto__;
var G__2244 = sum;
clojure.browser.net.goog$module$goog$object.set.call(null,G__2244,field,v);

return G__2244;
} else {
return sum;
}
}),({}),config)));
}));

(clojure.browser.net.xpc_connection.cljs$lang$maxFixedArity = 1);


/**
 * @interface
 */
clojure.browser.net.IWebSocket = function(){};

var clojure$browser$net$IWebSocket$open_QMARK_$dyn_2248 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (clojure.browser.net.open_QMARK_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$);
} else {
var m__5349__auto__ = (clojure.browser.net.open_QMARK_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWebSocket.open?",this$);
}
}
});
clojure.browser.net.open_QMARK_ = (function clojure$browser$net$open_QMARK_(this$){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$IWebSocket$open_QMARK_$arity$1 == null)))))){
return this$.clojure$browser$net$IWebSocket$open_QMARK_$arity$1(this$);
} else {
return clojure$browser$net$IWebSocket$open_QMARK_$dyn_2248.call(null,this$);
}
});

(goog.net.WebSocket.prototype.clojure$browser$net$IWebSocket$ = cljs.core.PROTOCOL_SENTINEL);

(goog.net.WebSocket.prototype.clojure$browser$net$IWebSocket$open_QMARK_$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.isOpen(cljs.core.List.EMPTY);
}));

(goog.net.WebSocket.prototype.clojure$browser$net$IConnection$ = cljs.core.PROTOCOL_SENTINEL);

(goog.net.WebSocket.prototype.clojure$browser$net$IConnection$connect$arity$2 = (function (this$,url){
var this$__$1 = this;
return clojure.browser.net.connect.call(null,this$__$1,url,null);
}));

(goog.net.WebSocket.prototype.clojure$browser$net$IConnection$connect$arity$3 = (function (this$,url,protocol){
var this$__$1 = this;
return this$__$1.open(url,protocol);
}));

(goog.net.WebSocket.prototype.clojure$browser$net$IConnection$transmit$arity$2 = (function (this$,message){
var this$__$1 = this;
return this$__$1.send(message);
}));

(goog.net.WebSocket.prototype.clojure$browser$net$IConnection$close$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.close(cljs.core.List.EMPTY);
}));

(goog.net.WebSocket.prototype.clojure$browser$event$IEventType$ = cljs.core.PROTOCOL_SENTINEL);

(goog.net.WebSocket.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__2249){
var vec__2250 = p__2249;
var k = cljs.core.nth.call(null,vec__2250,(0),null);
var v = cljs.core.nth.call(null,vec__2250,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k.toLowerCase()),v], null);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.WebSocket.EventType))));
}));
clojure.browser.net.websocket_connection = (function clojure$browser$net$websocket_connection(var_args){
var G__2254 = arguments.length;
switch (G__2254) {
case 0:
return clojure.browser.net.websocket_connection.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.browser.net.websocket_connection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.browser.net.websocket_connection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.browser.net.websocket_connection.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure.browser.net.websocket_connection.call(null,null,null);
}));

(clojure.browser.net.websocket_connection.cljs$core$IFn$_invoke$arity$1 = (function (auto_reconnect_QMARK_){
return clojure.browser.net.websocket_connection.call(null,auto_reconnect_QMARK_,null);
}));

(clojure.browser.net.websocket_connection.cljs$core$IFn$_invoke$arity$2 = (function (auto_reconnect_QMARK_,next_reconnect_fn){
return (new goog.net.WebSocket(auto_reconnect_QMARK_,next_reconnect_fn));
}));

(clojure.browser.net.websocket_connection.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=net.js.map
