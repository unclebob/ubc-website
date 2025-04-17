// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('spacewar.geometry');
goog.require('cljs.core');
spacewar.geometry.sign = (function spacewar$geometry$sign(x){
if((x === (0))){
return (0);
} else {
if((x > (0))){
return (1);
} else {
return (-1);

}
}
});
spacewar.geometry.round = (function spacewar$geometry$round(x){
return cljs.core.long$.call(null,Math.round(x));
});
spacewar.geometry.__GT_degrees = (function spacewar$geometry$__GT_degrees(radians){
return cljs.core.mod.call(null,((360) * (radians / ((2) * Math.PI))),(360));
});
spacewar.geometry.__GT_radians = (function spacewar$geometry$__GT_radians(degrees){
return cljs.core.mod.call(null,(((2) * Math.PI) * (degrees / (360))),((2) * Math.PI));
});
spacewar.geometry.square = (function spacewar$geometry$square(x){
return (x * x);
});
spacewar.geometry.distance = (function spacewar$geometry$distance(p__528,p__529){
var vec__530 = p__528;
var x1 = cljs.core.nth.call(null,vec__530,(0),null);
var y1 = cljs.core.nth.call(null,vec__530,(1),null);
var vec__533 = p__529;
var x2 = cljs.core.nth.call(null,vec__533,(0),null);
var y2 = cljs.core.nth.call(null,vec__533,(1),null);
return Math.sqrt((spacewar.geometry.square.call(null,(x1 - x2)) + spacewar.geometry.square.call(null,(y1 - y2))));
});
spacewar.geometry.inside_rect = (function spacewar$geometry$inside_rect(p__536,p__537){
var vec__538 = p__536;
var rx = cljs.core.nth.call(null,vec__538,(0),null);
var ry = cljs.core.nth.call(null,vec__538,(1),null);
var rw = cljs.core.nth.call(null,vec__538,(2),null);
var rh = cljs.core.nth.call(null,vec__538,(3),null);
var vec__541 = p__537;
var px = cljs.core.nth.call(null,vec__541,(0),null);
var py = cljs.core.nth.call(null,vec__541,(1),null);
return (((px >= rx)) && ((((py >= ry)) && ((((px < (rx + rw))) && ((py < (ry + rh))))))));
});
spacewar.geometry.inside_circle = (function spacewar$geometry$inside_circle(p__544,p__545){
var vec__546 = p__544;
var cx = cljs.core.nth.call(null,vec__546,(0),null);
var cy = cljs.core.nth.call(null,vec__546,(1),null);
var radius = cljs.core.nth.call(null,vec__546,(2),null);
var vec__549 = p__545;
var px = cljs.core.nth.call(null,vec__549,(0),null);
var py = cljs.core.nth.call(null,vec__549,(1),null);
return (spacewar.geometry.distance.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [px,py], null)) < radius);
});
spacewar.geometry.angle_degrees = (function spacewar$geometry$angle_degrees(p__552,p__553){
var vec__554 = p__552;
var x1 = cljs.core.nth.call(null,vec__554,(0),null);
var y1 = cljs.core.nth.call(null,vec__554,(1),null);
var vec__557 = p__553;
var x2 = cljs.core.nth.call(null,vec__557,(0),null);
var y2 = cljs.core.nth.call(null,vec__557,(1),null);
var a = (y2 - y1);
var b = (x2 - x1);
if((((a === (0))) && ((b === (0))))){
return (0);
} else {
var c = Math.sqrt((spacewar.geometry.square.call(null,a) + spacewar.geometry.square.call(null,b)));
var radians = Math.asin((cljs.core.abs.call(null,a) / c));
var degrees = spacewar.geometry.__GT_degrees.call(null,radians);
if((((a >= (0))) && ((b >= (0))))){
return degrees;
} else {
if((((a >= (0))) && ((b < (0))))){
return ((180) - degrees);
} else {
if((((a < (0))) && ((b < (0))))){
return ((180) + degrees);
} else {
if((((a < (0))) && ((b >= (0))))){
return ((360) - degrees);
} else {
return null;
}
}
}
}
}
});

//# sourceMappingURL=geometry.js.map
