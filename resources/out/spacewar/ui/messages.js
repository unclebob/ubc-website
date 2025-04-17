// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('spacewar.ui.messages');
goog.require('cljs.core');
goog.require('spacewar.game_logic.config');
goog.require('spacewar.ui.view_frame');
spacewar.ui.messages.last_message = cljs.core.atom.call(null,null);
spacewar.ui.messages.msg = (function spacewar$ui$messages$msg(var_args){
var G__529 = arguments.length;
switch (G__529) {
case 1:
return spacewar.ui.messages.msg.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return spacewar.ui.messages.msg.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spacewar.ui.messages.msg.cljs$core$IFn$_invoke$arity$1 = (function (text){
return spacewar.ui.view_frame.add_message_BANG_.call(null,text,(4000));
}));

(spacewar.ui.messages.msg.cljs$core$IFn$_invoke$arity$2 = (function (text,duration){
return spacewar.ui.view_frame.add_message_BANG_.call(null,text,duration);
}));

(spacewar.ui.messages.msg.cljs$lang$maxFixedArity = 2);

spacewar.ui.messages.send_message = (function spacewar$ui$messages$send_message(var_args){
var G__532 = arguments.length;
switch (G__532) {
case 3:
return spacewar.ui.messages.send_message.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 1:
return spacewar.ui.messages.send_message.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spacewar.ui.messages.send_message.cljs$core$IFn$_invoke$arity$3 = (function (message_key,value,max){
var pred__533 = cljs.core._EQ_;
var expr__534 = message_key;
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"life-damage","life-damage",1977477952),expr__534))){
return spacewar.ui.messages.msg.call(null,"Life Support Damage.");
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"life-severe","life-severe",442980149),expr__534))){
return spacewar.ui.messages.msg.call(null,"Life Support Damage Severe!");
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"life-critical","life-critical",-983079983),expr__534))){
return spacewar.ui.messages.msg.call(null,"Life Support Critical!");
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"hull-damage","hull-damage",-536688766),expr__534))){
return spacewar.ui.messages.msg.call(null,"Hull Damage.");
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"hull-severe","hull-severe",406379537),expr__534))){
return spacewar.ui.messages.msg.call(null,"Hull Damage Severe!");
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"hull-critical","hull-critical",2138021421),expr__534))){
return spacewar.ui.messages.msg.call(null,"Hull Critical!");
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"sensor-damage","sensor-damage",-1401969345),expr__534))){
return spacewar.ui.messages.msg.call(null,"Sensor Damage.");
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"sensor-severe","sensor-severe",1652638455),expr__534))){
return spacewar.ui.messages.msg.call(null,"Sensor Damage Severe!");
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"sensor-critical","sensor-critical",-1932569126),expr__534))){
return spacewar.ui.messages.msg.call(null,"Sensors Critical!");
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"impulse-damage","impulse-damage",2036309966),expr__534))){
return spacewar.ui.messages.msg.call(null,"Impulse Damage.");
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"impulse-severe","impulse-severe",841906465),expr__534))){
return spacewar.ui.messages.msg.call(null,"Impulse Damage Severe!");
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"impulse-critical","impulse-critical",69728768),expr__534))){
return spacewar.ui.messages.msg.call(null,"Impulse Critical!");
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"warp-damage","warp-damage",-1651122162),expr__534))){
return spacewar.ui.messages.msg.call(null,"Warp Damage.");
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"warp-severe","warp-severe",-2048867161),expr__534))){
return spacewar.ui.messages.msg.call(null,"Warp Damage Severe!");
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"warp-critical","warp-critical",-121119872),expr__534))){
return spacewar.ui.messages.msg.call(null,"Warp Critical!");
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"weapons-damage","weapons-damage",1275474500),expr__534))){
return spacewar.ui.messages.msg.call(null,"Weapons Damage.");
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"weapons-severe","weapons-severe",-752510326),expr__534))){
return spacewar.ui.messages.msg.call(null,"Weapons Damage Severe!");
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"weapons-critical","weapons-critical",1919090924),expr__534))){
return spacewar.ui.messages.msg.call(null,"Weapons Critical!");
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"shields-charged","shields-charged",-798716420),expr__534))){
return spacewar.ui.messages.msg.call(null,"Shields Fully Charged.");
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"shields-ready","shields-ready",1714256451),expr__534))){
return spacewar.ui.messages.msg.call(null,"Shields Battle Ready.");
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"shields-damaged","shields-damaged",223450821),expr__534))){
return spacewar.ui.messages.msg.call(null,["Shields Holding. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((100) * (value / max)) | (0))),"%."].join(''));
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"shields-severe","shields-severe",1203360190),expr__534))){
return spacewar.ui.messages.msg.call(null,["Shields Weak.",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((100) * (value / max)) | (0))),"%!"].join(''));
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"shields-critical","shields-critical",-1475299180),expr__534))){
return spacewar.ui.messages.msg.call(null,"Shields Critical!");
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"antimatter-full","antimatter-full",-510868156),expr__534))){
return spacewar.ui.messages.msg.call(null,"Antimatter Full.");
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"antimatter-topped-off","antimatter-topped-off",-703489555),expr__534))){
return spacewar.ui.messages.msg.call(null,"Antimatter Topped Off.");
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"antimatter-high","antimatter-high",-1392507291),expr__534))){
return spacewar.ui.messages.msg.call(null,["Antimatter High. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((100) * (value / max)) | (0))),"%."].join(''));
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"antimatter-low","antimatter-low",599704313),expr__534))){
return spacewar.ui.messages.msg.call(null,["Antimatter Low. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((100) * (value / max)) | (0))),"%!"].join(''));
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"antimatter-critical","antimatter-critical",523833548),expr__534))){
return spacewar.ui.messages.msg.call(null,"Antimatter Critical!");
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"dilithium-full","dilithium-full",2075628184),expr__534))){
return spacewar.ui.messages.msg.call(null,"Dilithium Full.");
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"dilithium-topped-off","dilithium-topped-off",-699591117),expr__534))){
return spacewar.ui.messages.msg.call(null,"Dilithium Topped Off.");
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"dilithium-high","dilithium-high",1972372551),expr__534))){
return spacewar.ui.messages.msg.call(null,["Dilithium High. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((100) * (value / max)) | (0))),"%."].join(''));
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"dilithium-low","dilithium-low",2053691033),expr__534))){
return spacewar.ui.messages.msg.call(null,["Dilithium Low. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((100) * (value / max)) | (0))),"%!"].join(''));
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"dilithium-critical","dilithium-critical",-1233142071),expr__534))){
return spacewar.ui.messages.msg.call(null,"Dilithium Critical!");
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"temp-normal","temp-normal",-1631797557),expr__534))){
return spacewar.ui.messages.msg.call(null,"Temperature Normal.");
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"temp-high","temp-high",-103717480),expr__534))){
return spacewar.ui.messages.msg.call(null,["Temperature High. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((100) * (value / max)) | (0))),"%."].join(''));
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"temp-critical","temp-critical",2125309500),expr__534))){
return spacewar.ui.messages.msg.call(null,"Temperature Critical!");
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"temp-severe","temp-severe",1664911485),expr__534))){
return spacewar.ui.messages.msg.call(null,["Temperature Severe. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((100) * (value / max)) | (0))),"%!"].join(''));
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"torpedos-critical","torpedos-critical",-1283465115),expr__534))){
return spacewar.ui.messages.msg.call(null,"Torpedos Critical!");
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"torpedos-low","torpedos-low",-753577558),expr__534))){
return spacewar.ui.messages.msg.call(null,["Torpedos Low. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"!"].join(''));
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"torpedos-full","torpedos-full",-1741135993),expr__534))){
return spacewar.ui.messages.msg.call(null,"Torpedos Full.");
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"torpedos-normal","torpedos-normal",1446304362),expr__534))){
return spacewar.ui.messages.msg.call(null,["Torpedos Nominal. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"."].join(''));
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"torpedos-high","torpedos-high",-2078491955),expr__534))){
return spacewar.ui.messages.msg.call(null,"Torpedos High.");
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"kinetics-critical","kinetics-critical",2039659410),expr__534))){
return spacewar.ui.messages.msg.call(null,"Kinetics Critical!");
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"kinetics-low","kinetics-low",532213357),expr__534))){
return spacewar.ui.messages.msg.call(null,["Kinetics Low. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"!"].join(''));
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"kinetics-full","kinetics-full",-107274018),expr__534))){
return spacewar.ui.messages.msg.call(null,"Kinetics Full.");
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"kinetics-normal","kinetics-normal",-1466792141),expr__534))){
return spacewar.ui.messages.msg.call(null,["Kinetics Nominal. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"."].join(''));
} else {
if(cljs.core.truth_(pred__533.call(null,new cljs.core.Keyword(null,"kinetics-high","kinetics-high",1623672138),expr__534))){
return spacewar.ui.messages.msg.call(null,["Kinetics High. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"!"].join(''));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__534)].join('')));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(spacewar.ui.messages.send_message.cljs$core$IFn$_invoke$arity$1 = (function (message_key){
var pred__536 = cljs.core._EQ_;
var expr__537 = message_key;
if(cljs.core.truth_(pred__536.call(null,new cljs.core.Keyword(null,"you-win","you-win",-2086190249),expr__537))){
return spacewar.ui.messages.msg.call(null,"The Federation is safe!  You win!",(1000000));
} else {
if(cljs.core.truth_(pred__536.call(null,new cljs.core.Keyword(null,"you-died","you-died",1067868118),expr__537))){
return spacewar.ui.messages.msg.call(null,"You died!",(5000));
} else {
if(cljs.core.truth_(pred__536.call(null,new cljs.core.Keyword(null,"welcome","welcome",-578152123),expr__537))){
return spacewar.ui.messages.msg.call(null,"Welcome to Spacewar!",(5000));
} else {
if(cljs.core.truth_(pred__536.call(null,new cljs.core.Keyword(null,"save-federation","save-federation",259371559),expr__537))){
return spacewar.ui.messages.msg.call(null,"Save the Federation!",(10000));
} else {
if(cljs.core.truth_(pred__536.call(null,new cljs.core.Keyword(null,"old-game","old-game",841081006),expr__537))){
return spacewar.ui.messages.msg.call(null,"Saved game loaded.",(10000));
} else {
if(cljs.core.truth_(pred__536.call(null,new cljs.core.Keyword(null,"new-version","new-version",-172869195),expr__537))){
return spacewar.ui.messages.msg.call(null,"Saved game ignored.  New version.",(10000));
} else {
if(cljs.core.truth_(pred__536.call(null,new cljs.core.Keyword(null,"no-star","no-star",2037067697),expr__537))){
return spacewar.ui.messages.msg.call(null,"No star nearby.",(5000));
} else {
if(cljs.core.truth_(pred__536.call(null,new cljs.core.Keyword(null,"already-deployed","already-deployed",1733030244),expr__537))){
return spacewar.ui.messages.msg.call(null,"Base already deployed.",(5000));
} else {
if(cljs.core.truth_(pred__536.call(null,new cljs.core.Keyword(null,"insufficient-resources","insufficient-resources",243053116),expr__537))){
return spacewar.ui.messages.msg.call(null,"Insufficient resources.",(5000));
} else {
if(cljs.core.truth_(pred__536.call(null,new cljs.core.Keyword(null,"romulan-appearing","romulan-appearing",-350088193),expr__537))){
return spacewar.ui.messages.msg.call(null,"*******\nRomulan ship appearing!\n*******",(10000));
} else {
if(cljs.core.truth_(pred__536.call(null,new cljs.core.Keyword(null,"corbomite-device","corbomite-device",-829250405),expr__537))){
return spacewar.ui.messages.msg.call(null,"*******\nCorbomite device ready!\n*******",(10000));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__537)].join('')));
}
}
}
}
}
}
}
}
}
}
}
}));

(spacewar.ui.messages.send_message.cljs$lang$maxFixedArity = 3);

spacewar.ui.messages.item_message = (function spacewar$ui$messages$item_message(item,key,max,thresholds){
if((key.call(null,cljs.core.deref.call(null,spacewar.ui.messages.last_message)) == null)){
return cljs.core.swap_BANG_.call(null,spacewar.ui.messages.last_message,cljs.core.assoc,key,key.call(null,item));
} else {
var value = key.call(null,item);
var old_value = key.call(null,cljs.core.deref.call(null,spacewar.ui.messages.last_message));
var pct_value = (value / max);
var pct_old_value = (old_value / max);
var pct_diff = cljs.core.abs.call(null,(pct_value - pct_old_value));
if((pct_diff > 0.1)){
cljs.core.swap_BANG_.call(null,spacewar.ui.messages.last_message,cljs.core.assoc,key,value);

var previous = (0);
var thresholds__$1 = thresholds;
while(true){
if(cljs.core.empty_QMARK_.call(null,thresholds__$1)){
return null;
} else {
var vec__543 = cljs.core.first.call(null,thresholds__$1);
var threshold = cljs.core.nth.call(null,vec__543,(0),null);
var message = cljs.core.nth.call(null,vec__543,(1),null);
if((((previous <= pct_value)) && ((((pct_value < threshold)) && ((!((message == null)))))))){
return spacewar.ui.messages.send_message.call(null,message,value,max);
} else {
var G__546 = threshold;
var G__547 = cljs.core.rest.call(null,thresholds__$1);
previous = G__546;
thresholds__$1 = G__547;
continue;
}
}
break;
}
} else {
return null;
}
}
});
spacewar.ui.messages.ship_messages = (function spacewar$ui$messages$ship_messages(ship){
spacewar.ui.messages.item_message.call(null,ship,new cljs.core.Keyword(null,"life-support-damage","life-support-damage",1212244818),(100),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.1,null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3,new cljs.core.Keyword(null,"life-damage","life-damage",1977477952)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.8,new cljs.core.Keyword(null,"life-severe","life-severe",442980149)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"life-critical","life-critical",-983079983)], null)], null));

spacewar.ui.messages.item_message.call(null,ship,new cljs.core.Keyword(null,"hull-damage","hull-damage",-536688766),(100),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.1,null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3,new cljs.core.Keyword(null,"hull-damage","hull-damage",-536688766)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.8,new cljs.core.Keyword(null,"hull-severe","hull-severe",406379537)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"hull-critical","hull-critical",2138021421)], null)], null));

spacewar.ui.messages.item_message.call(null,ship,new cljs.core.Keyword(null,"sensor-damage","sensor-damage",-1401969345),(100),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.1,null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3,new cljs.core.Keyword(null,"sensor-damage","sensor-damage",-1401969345)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.8,new cljs.core.Keyword(null,"sensor-severe","sensor-severe",1652638455)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"sensor-critical","sensor-critical",-1932569126)], null)], null));

spacewar.ui.messages.item_message.call(null,ship,new cljs.core.Keyword(null,"impulse-damage","impulse-damage",2036309966),(100),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.1,null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3,new cljs.core.Keyword(null,"impulse-damage","impulse-damage",2036309966)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.8,new cljs.core.Keyword(null,"impulse-severe","impulse-severe",841906465)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"impulse-critical","impulse-critical",69728768)], null)], null));

spacewar.ui.messages.item_message.call(null,ship,new cljs.core.Keyword(null,"warp-damage","warp-damage",-1651122162),(100),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.1,null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3,new cljs.core.Keyword(null,"warp-damage","warp-damage",-1651122162)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.8,new cljs.core.Keyword(null,"warp-severe","warp-severe",-2048867161)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"warp-critical","warp-critical",-121119872)], null)], null));

spacewar.ui.messages.item_message.call(null,ship,new cljs.core.Keyword(null,"weapons-damage","weapons-damage",1275474500),(100),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.1,null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3,new cljs.core.Keyword(null,"weapons-damage","weapons-damage",1275474500)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.8,new cljs.core.Keyword(null,"weapons-severe","weapons-severe",-752510326)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"weapons-critical","weapons-critical",1919090924)], null)], null));

spacewar.ui.messages.item_message.call(null,ship,new cljs.core.Keyword(null,"shields","shields",-295786721),spacewar.game_logic.config.ship_shields,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.2,new cljs.core.Keyword(null,"shields-critical","shields-critical",-1475299180)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,new cljs.core.Keyword(null,"shields-severe","shields-severe",1203360190)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.8,new cljs.core.Keyword(null,"shields-damaged","shields-damaged",223450821)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.95,new cljs.core.Keyword(null,"shields-ready","shields-ready",1714256451)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"shields-charged","shields-charged",-798716420)], null)], null));

spacewar.ui.messages.item_message.call(null,ship,new cljs.core.Keyword(null,"antimatter","antimatter",-1151201000),spacewar.game_logic.config.ship_antimatter,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.2,new cljs.core.Keyword(null,"antimatter-critical","antimatter-critical",523833548)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,new cljs.core.Keyword(null,"antimatter-low","antimatter-low",599704313)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.8,new cljs.core.Keyword(null,"antimatter-high","antimatter-high",-1392507291)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.95,new cljs.core.Keyword(null,"antimatter-full","antimatter-full",-510868156)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"antimatter-topped-off","antimatter-topped-off",-703489555)], null)], null));

spacewar.ui.messages.item_message.call(null,ship,new cljs.core.Keyword(null,"dilithium","dilithium",1152933090),spacewar.game_logic.config.ship_dilithium,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.2,new cljs.core.Keyword(null,"dilithium-critical","dilithium-critical",-1233142071)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,new cljs.core.Keyword(null,"dilithium-low","dilithium-low",2053691033)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.8,new cljs.core.Keyword(null,"dilithium-high","dilithium-high",1972372551)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.95,new cljs.core.Keyword(null,"dilithium-full","dilithium-full",2075628184)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"dilithium-topped-off","dilithium-topped-off",-699591117)], null)], null));

spacewar.ui.messages.item_message.call(null,ship,new cljs.core.Keyword(null,"core-temp","core-temp",715877178),(100),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.1,null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3,new cljs.core.Keyword(null,"temp-normal","temp-normal",-1631797557)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,new cljs.core.Keyword(null,"temp-high","temp-high",-103717480)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.8,new cljs.core.Keyword(null,"temp-severe","temp-severe",1664911485)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"temp-critical","temp-critical",2125309500)], null)], null));

spacewar.ui.messages.item_message.call(null,ship,new cljs.core.Keyword(null,"torpedos","torpedos",344905121),spacewar.game_logic.config.ship_torpedos,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.1,new cljs.core.Keyword(null,"torpedos-critical","torpedos-critical",-1283465115)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3,new cljs.core.Keyword(null,"torpedos-low","torpedos-low",-753577558)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,new cljs.core.Keyword(null,"torpedos-normal","torpedos-normal",1446304362)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.8,new cljs.core.Keyword(null,"torpedos-high","torpedos-high",-2078491955)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"torpedos-full","torpedos-full",-1741135993)], null)], null));

return spacewar.ui.messages.item_message.call(null,ship,new cljs.core.Keyword(null,"kinetics","kinetics",-707133266),spacewar.game_logic.config.ship_kinetics,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.1,new cljs.core.Keyword(null,"kinetics-critical","kinetics-critical",2039659410)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3,new cljs.core.Keyword(null,"kinetics-low","kinetics-low",532213357)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,new cljs.core.Keyword(null,"kinetics-normal","kinetics-normal",-1466792141)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.8,new cljs.core.Keyword(null,"kinetics-high","kinetics-high",1623672138)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"kinetics-full","kinetics-full",-107274018)], null)], null));
});
spacewar.ui.messages.add_messages_BANG_ = (function spacewar$ui$messages$add_messages_BANG_(world){
return spacewar.ui.messages.ship_messages.call(null,new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(world));
});

//# sourceMappingURL=messages.js.map
