// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('quil.middlewares.navigation_2d');
goog.require('cljs.core');
goog.require('quil.core');
quil.middlewares.navigation_2d.missing_navigation_key_error = ["state map is missing :navigation-2d key. ","Did you accidentally removed it from the state in ",":update or any other handler?"].join('');
/**
 * Asserts that `state` map contains `:navigation-2d` object.
 */
quil.middlewares.navigation_2d.assert_state_has_navigation = (function quil$middlewares$navigation_2d$assert_state_has_navigation(state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"navigation-2d","navigation-2d",-1924168611).cljs$core$IFn$_invoke$arity$1(state))){
return null;
} else {
throw (new Error(quil.middlewares.navigation_2d.missing_navigation_key_error));
}
});
/**
 * Default position configuration: zoom is neutral and central point is
 *   `width/2, height/2`.
 */
quil.middlewares.navigation_2d.default_position = (function quil$middlewares$navigation_2d$default_position(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / 2.0),(quil.core.height.call(null) / 2.0)], null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(1),new cljs.core.Keyword(null,"mouse-buttons","mouse-buttons",1242134231),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"center","center",-748944368),null,new cljs.core.Keyword(null,"right","right",-452581833),null,new cljs.core.Keyword(null,"left","left",-399115937),null], null), null)], null);
});
/**
 * Custom 'setup' function which creates initial position
 *   configuration and puts it to the state map.
 */
quil.middlewares.navigation_2d.setup_2d_nav = (function quil$middlewares$navigation_2d$setup_2d_nav(user_setup,user_settings){
var initial_state = cljs.core.merge.call(null,quil.middlewares.navigation_2d.default_position.call(null),cljs.core.select_keys.call(null,user_settings,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"mouse-buttons","mouse-buttons",1242134231)], null)));
return cljs.core.update_in.call(null,user_setup.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigation-2d","navigation-2d",-1924168611)], null),(function (p1__2205_SHARP_){
return cljs.core.merge.call(null,initial_state,p1__2205_SHARP_);
}));
});
/**
 * Changes center of the sketch depending on the last mouse move. Takes
 *   zoom into account as well.
 */
quil.middlewares.navigation_2d.mouse_dragged = (function quil$middlewares$navigation_2d$mouse_dragged(state,event){
quil.middlewares.navigation_2d.assert_state_has_navigation.call(null,state);

var mouse_buttons = new cljs.core.Keyword(null,"mouse-buttons","mouse-buttons",1242134231).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"navigation-2d","navigation-2d",-1924168611).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.contains_QMARK_.call(null,mouse_buttons,new cljs.core.Keyword(null,"button","button",1456579943).cljs$core$IFn$_invoke$arity$1(event))){
var dx = (new cljs.core.Keyword(null,"p-x","p-x",-1721211211).cljs$core$IFn$_invoke$arity$1(event) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(event));
var dy = (new cljs.core.Keyword(null,"p-y","p-y",-530704830).cljs$core$IFn$_invoke$arity$1(event) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(event));
var zoom = new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"navigation-2d","navigation-2d",-1924168611).cljs$core$IFn$_invoke$arity$1(state));
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigation-2d","navigation-2d",-1924168611),new cljs.core.Keyword(null,"position","position",-2011731912),(0)], null),cljs.core._PLUS_,(dx / zoom)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigation-2d","navigation-2d",-1924168611),new cljs.core.Keyword(null,"position","position",-2011731912),(1)], null),cljs.core._PLUS_,(dy / zoom));
} else {
return state;
}
});
/**
 * Changes zoom settings based on scroll.
 */
quil.middlewares.navigation_2d.mouse_wheel = (function quil$middlewares$navigation_2d$mouse_wheel(state,event){
quil.middlewares.navigation_2d.assert_state_has_navigation.call(null,state);

return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigation-2d","navigation-2d",-1924168611),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),cljs.core._STAR_,((1) + (-0.1 * event)));
});
/**
 * Calls user draw function with all necessary transformations (position
 *   and zoom) applied.
 */
quil.middlewares.navigation_2d.draw = (function quil$middlewares$navigation_2d$draw(user_draw,state){
quil.middlewares.navigation_2d.assert_state_has_navigation.call(null,state);

quil.core.push_matrix.call(null);

var nav_2d_2206 = new cljs.core.Keyword(null,"navigation-2d","navigation-2d",-1924168611).cljs$core$IFn$_invoke$arity$1(state);
var zoom_2207 = new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(nav_2d_2206);
var pos_2208 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(nav_2d_2206);
quil.core.scale.call(null,zoom_2207);

var tr__794__auto___2209 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((quil.core.width.call(null) / (2)) / zoom_2207) - cljs.core.first.call(null,pos_2208)),(((quil.core.height.call(null) / (2)) / zoom_2207) - cljs.core.second.call(null,pos_2208))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__794__auto___2209);

user_draw.call(null,state);
}finally {quil.core.pop_matrix.call(null);
}
return quil.core.pop_matrix.call(null);
});
/**
 * Enables navigation over 2D sketch. Dragging mouse will move center of the
 *   sketch and mouse wheel controls zoom.
 */
quil.middlewares.navigation_2d.navigation_2d = (function quil$middlewares$navigation_2d$navigation_2d(options){
var user_settings = new cljs.core.Keyword(null,"navigation-2d","navigation-2d",-1924168611).cljs$core$IFn$_invoke$arity$1(options);
var user_draw = new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$2(options,(function (state){
return null;
}));
var user_mouse_dragged = new cljs.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441).cljs$core$IFn$_invoke$arity$2(options,(function (state,_){
return state;
}));
var user_mouse_wheel = new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439).cljs$core$IFn$_invoke$arity$2(options,(function (state,_){
return state;
}));
var setup = new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$2(options,(function (){
return cljs.core.PersistentArrayMap.EMPTY;
}));
return cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"setup","setup",1987730512),cljs.core.partial.call(null,quil.middlewares.navigation_2d.setup_2d_nav,setup,user_settings),new cljs.core.Keyword(null,"draw","draw",1358331674),cljs.core.partial.call(null,quil.middlewares.navigation_2d.draw,user_draw),new cljs.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441),(function (state,event){
return user_mouse_dragged.call(null,quil.middlewares.navigation_2d.mouse_dragged.call(null,state,event),event);
}),new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),(function (state,event){
return user_mouse_wheel.call(null,quil.middlewares.navigation_2d.mouse_wheel.call(null,state,event),event);
}));
});

//# sourceMappingURL=navigation_2d.js.map
