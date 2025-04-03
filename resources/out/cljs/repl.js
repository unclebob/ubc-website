// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__2048){
var map__2049 = p__2048;
var map__2049__$1 = cljs.core.__destructure_map.call(null,map__2049);
var m = map__2049__$1;
var n = cljs.core.get.call(null,map__2049__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__2049__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__2050_2078 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__2051_2079 = null;
var count__2052_2080 = (0);
var i__2053_2081 = (0);
while(true){
if((i__2053_2081 < count__2052_2080)){
var f_2082 = cljs.core._nth.call(null,chunk__2051_2079,i__2053_2081);
cljs.core.println.call(null,"  ",f_2082);


var G__2083 = seq__2050_2078;
var G__2084 = chunk__2051_2079;
var G__2085 = count__2052_2080;
var G__2086 = (i__2053_2081 + (1));
seq__2050_2078 = G__2083;
chunk__2051_2079 = G__2084;
count__2052_2080 = G__2085;
i__2053_2081 = G__2086;
continue;
} else {
var temp__5804__auto___2087 = cljs.core.seq.call(null,seq__2050_2078);
if(temp__5804__auto___2087){
var seq__2050_2088__$1 = temp__5804__auto___2087;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2050_2088__$1)){
var c__5525__auto___2089 = cljs.core.chunk_first.call(null,seq__2050_2088__$1);
var G__2090 = cljs.core.chunk_rest.call(null,seq__2050_2088__$1);
var G__2091 = c__5525__auto___2089;
var G__2092 = cljs.core.count.call(null,c__5525__auto___2089);
var G__2093 = (0);
seq__2050_2078 = G__2090;
chunk__2051_2079 = G__2091;
count__2052_2080 = G__2092;
i__2053_2081 = G__2093;
continue;
} else {
var f_2094 = cljs.core.first.call(null,seq__2050_2088__$1);
cljs.core.println.call(null,"  ",f_2094);


var G__2095 = cljs.core.next.call(null,seq__2050_2088__$1);
var G__2096 = null;
var G__2097 = (0);
var G__2098 = (0);
seq__2050_2078 = G__2095;
chunk__2051_2079 = G__2096;
count__2052_2080 = G__2097;
i__2053_2081 = G__2098;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_2099 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_2099);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_2099)))?cljs.core.second.call(null,arglists_2099):arglists_2099));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__2054_2100 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__2055_2101 = null;
var count__2056_2102 = (0);
var i__2057_2103 = (0);
while(true){
if((i__2057_2103 < count__2056_2102)){
var vec__2066_2104 = cljs.core._nth.call(null,chunk__2055_2101,i__2057_2103);
var name_2105 = cljs.core.nth.call(null,vec__2066_2104,(0),null);
var map__2069_2106 = cljs.core.nth.call(null,vec__2066_2104,(1),null);
var map__2069_2107__$1 = cljs.core.__destructure_map.call(null,map__2069_2106);
var doc_2108 = cljs.core.get.call(null,map__2069_2107__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_2109 = cljs.core.get.call(null,map__2069_2107__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_2105);

cljs.core.println.call(null," ",arglists_2109);

if(cljs.core.truth_(doc_2108)){
cljs.core.println.call(null," ",doc_2108);
} else {
}


var G__2110 = seq__2054_2100;
var G__2111 = chunk__2055_2101;
var G__2112 = count__2056_2102;
var G__2113 = (i__2057_2103 + (1));
seq__2054_2100 = G__2110;
chunk__2055_2101 = G__2111;
count__2056_2102 = G__2112;
i__2057_2103 = G__2113;
continue;
} else {
var temp__5804__auto___2114 = cljs.core.seq.call(null,seq__2054_2100);
if(temp__5804__auto___2114){
var seq__2054_2115__$1 = temp__5804__auto___2114;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2054_2115__$1)){
var c__5525__auto___2116 = cljs.core.chunk_first.call(null,seq__2054_2115__$1);
var G__2117 = cljs.core.chunk_rest.call(null,seq__2054_2115__$1);
var G__2118 = c__5525__auto___2116;
var G__2119 = cljs.core.count.call(null,c__5525__auto___2116);
var G__2120 = (0);
seq__2054_2100 = G__2117;
chunk__2055_2101 = G__2118;
count__2056_2102 = G__2119;
i__2057_2103 = G__2120;
continue;
} else {
var vec__2070_2121 = cljs.core.first.call(null,seq__2054_2115__$1);
var name_2122 = cljs.core.nth.call(null,vec__2070_2121,(0),null);
var map__2073_2123 = cljs.core.nth.call(null,vec__2070_2121,(1),null);
var map__2073_2124__$1 = cljs.core.__destructure_map.call(null,map__2073_2123);
var doc_2125 = cljs.core.get.call(null,map__2073_2124__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_2126 = cljs.core.get.call(null,map__2073_2124__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_2122);

cljs.core.println.call(null," ",arglists_2126);

if(cljs.core.truth_(doc_2125)){
cljs.core.println.call(null," ",doc_2125);
} else {
}


var G__2127 = cljs.core.next.call(null,seq__2054_2115__$1);
var G__2128 = null;
var G__2129 = (0);
var G__2130 = (0);
seq__2054_2100 = G__2127;
chunk__2055_2101 = G__2128;
count__2056_2102 = G__2129;
i__2057_2103 = G__2130;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.call(null,"Spec");

var seq__2074 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__2075 = null;
var count__2076 = (0);
var i__2077 = (0);
while(true){
if((i__2077 < count__2076)){
var role = cljs.core._nth.call(null,chunk__2075,i__2077);
var temp__5804__auto___2131__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___2131__$1)){
var spec_2132 = temp__5804__auto___2131__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_2132));
} else {
}


var G__2133 = seq__2074;
var G__2134 = chunk__2075;
var G__2135 = count__2076;
var G__2136 = (i__2077 + (1));
seq__2074 = G__2133;
chunk__2075 = G__2134;
count__2076 = G__2135;
i__2077 = G__2136;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq.call(null,seq__2074);
if(temp__5804__auto____$1){
var seq__2074__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2074__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__2074__$1);
var G__2137 = cljs.core.chunk_rest.call(null,seq__2074__$1);
var G__2138 = c__5525__auto__;
var G__2139 = cljs.core.count.call(null,c__5525__auto__);
var G__2140 = (0);
seq__2074 = G__2137;
chunk__2075 = G__2138;
count__2076 = G__2139;
i__2077 = G__2140;
continue;
} else {
var role = cljs.core.first.call(null,seq__2074__$1);
var temp__5804__auto___2141__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___2141__$2)){
var spec_2142 = temp__5804__auto___2141__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_2142));
} else {
}


var G__2143 = cljs.core.next.call(null,seq__2074__$1);
var G__2144 = null;
var G__2145 = (0);
var G__2146 = (0);
seq__2074 = G__2143;
chunk__2075 = G__2144;
count__2076 = G__2145;
i__2077 = G__2146;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map.call(null,o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__2149 = datafied_throwable;
var map__2149__$1 = cljs.core.__destructure_map.call(null,map__2149);
var via = cljs.core.get.call(null,map__2149__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__2149__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__2149__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__2150 = cljs.core.last.call(null,via);
var map__2150__$1 = cljs.core.__destructure_map.call(null,map__2150);
var type = cljs.core.get.call(null,map__2150__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__2150__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__2150__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__2151 = data;
var map__2151__$1 = cljs.core.__destructure_map.call(null,map__2151);
var problems = cljs.core.get.call(null,map__2151__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__2151__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__2151__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__2152 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__2152__$1 = cljs.core.__destructure_map.call(null,map__2152);
var top_data = map__2152__$1;
var source = cljs.core.get.call(null,map__2152__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__2153 = phase;
var G__2153__$1 = (((G__2153 instanceof cljs.core.Keyword))?G__2153.fqn:null);
switch (G__2153__$1) {
case "read-source":
var map__2154 = data;
var map__2154__$1 = cljs.core.__destructure_map.call(null,map__2154);
var line = cljs.core.get.call(null,map__2154__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__2154__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__2155 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__2155__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__2155,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__2155);
var G__2155__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__2155__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__2155__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__2155__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__2155__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__2156 = top_data;
var G__2156__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__2156,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__2156);
var G__2156__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__2156__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__2156__$1);
var G__2156__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__2156__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__2156__$2);
var G__2156__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__2156__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__2156__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__2156__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__2156__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__2157 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__2157,(0),null);
var method = cljs.core.nth.call(null,vec__2157,(1),null);
var file = cljs.core.nth.call(null,vec__2157,(2),null);
var line = cljs.core.nth.call(null,vec__2157,(3),null);
var G__2160 = top_data;
var G__2160__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__2160,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__2160);
var G__2160__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__2160__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__2160__$1);
var G__2160__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.call(null,G__2160__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__2160__$2);
var G__2160__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__2160__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__2160__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__2160__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__2160__$4;
}

break;
case "execution":
var vec__2161 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__2161,(0),null);
var method = cljs.core.nth.call(null,vec__2161,(1),null);
var file = cljs.core.nth.call(null,vec__2161,(2),null);
var line = cljs.core.nth.call(null,vec__2161,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__2148_SHARP_){
var or__5002__auto__ = (p1__2148_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__2148_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__2164 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__2164__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__2164,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__2164);
var G__2164__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__2164__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__2164__$1);
var G__2164__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.call(null,G__2164__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__2164__$2);
var G__2164__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__2164__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__2164__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__2164__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__2164__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__2153__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__2168){
var map__2169 = p__2168;
var map__2169__$1 = cljs.core.__destructure_map.call(null,map__2169);
var triage_data = map__2169__$1;
var phase = cljs.core.get.call(null,map__2169__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__2169__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__2169__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__2169__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__2169__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__2169__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__2169__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__2169__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__2170 = phase;
var G__2170__$1 = (((G__2170 instanceof cljs.core.Keyword))?G__2170.fqn:null);
switch (G__2170__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__2171_2180 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__2172_2181 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__2173_2182 = true;
var _STAR_print_fn_STAR__temp_val__2174_2183 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__2173_2182);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__2174_2183);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__2166_SHARP_){
return cljs.core.dissoc.call(null,p1__2166_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__2172_2181);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__2171_2180);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__2175_2184 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__2176_2185 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__2177_2186 = true;
var _STAR_print_fn_STAR__temp_val__2178_2187 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__2177_2186);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__2178_2187);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__2167_SHARP_){
return cljs.core.dissoc.call(null,p1__2167_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__2176_2185);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__2175_2184);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__2170__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
