// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('spacewar.vector');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('spacewar.geometry');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.vector","number","spacewar.vector/number",-1566176453),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.number_QMARK_], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spacewar.vector","vector","spacewar.vector/vector",40426755),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("spacewar.vector","number","spacewar.vector/number",-1566176453),new cljs.core.Keyword(null,"count","count",2139924085),(2)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("spacewar.vector","number","spacewar.vector/number",-1566176453),new cljs.core.Keyword("spacewar.vector","number","spacewar.vector/number",-1566176453),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"count","count",2139924085),(2),new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("spacewar.vector","number","spacewar.vector/number",-1566176453),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__586){
return ((cljs.core.coll_QMARK_.call(null,G__586)) && (cljs.core._EQ_.call(null,(2),cljs.core.bounded_count.call(null,(2),G__586))));
})], null),null));
spacewar.vector.add = (function spacewar$vector$add(p__587,p__588){
var vec__589 = p__587;
var x1 = cljs.core.nth.call(null,vec__589,(0),null);
var y1 = cljs.core.nth.call(null,vec__589,(1),null);
var vec__592 = p__588;
var x2 = cljs.core.nth.call(null,vec__592,(0),null);
var y2 = cljs.core.nth.call(null,vec__592,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 + x2),(y1 + y2)], null);
});
spacewar.vector.subtract = (function spacewar$vector$subtract(p__595,p__596){
var vec__597 = p__595;
var x1 = cljs.core.nth.call(null,vec__597,(0),null);
var y1 = cljs.core.nth.call(null,vec__597,(1),null);
var vec__600 = p__596;
var x2 = cljs.core.nth.call(null,vec__600,(0),null);
var y2 = cljs.core.nth.call(null,vec__600,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 - x2),(y1 - y2)], null);
});
spacewar.vector.multiply = (function spacewar$vector$multiply(p__603,p__604){
var vec__605 = p__603;
var x1 = cljs.core.nth.call(null,vec__605,(0),null);
var y1 = cljs.core.nth.call(null,vec__605,(1),null);
var vec__608 = p__604;
var x2 = cljs.core.nth.call(null,vec__608,(0),null);
var y2 = cljs.core.nth.call(null,vec__608,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 * x2),(y1 * y2)], null);
});
spacewar.vector.scale = (function spacewar$vector$scale(n,p__611){
var vec__612 = p__611;
var x = cljs.core.nth.call(null,vec__612,(0),null);
var y = cljs.core.nth.call(null,vec__612,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(n * x),(n * y)], null);
});
spacewar.vector.magnitude = (function spacewar$vector$magnitude(v){
return spacewar.geometry.distance.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),v);
});
spacewar.vector.from_angular = (function spacewar$vector$from_angular(length,radians){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(length * Math.cos(radians)),(length * Math.sin(radians))], null);
});
spacewar.vector.unit = (function spacewar$vector$unit(p__615){
var vec__616 = p__615;
var x = cljs.core.nth.call(null,vec__616,(0),null);
var y = cljs.core.nth.call(null,vec__616,(1),null);
var v = vec__616;
if((((x === (0))) && ((y === (0))))){
return new cljs.core.Keyword(null,"no-unit-vector","no-unit-vector",654066661);
} else {
return spacewar.vector.scale.call(null,((1) / spacewar.vector.magnitude.call(null,v)),v);
}
});

//# sourceMappingURL=vector.js.map
