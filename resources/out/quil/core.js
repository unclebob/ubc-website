// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('quil.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljsjs.p5');
goog.require('quil.sketch');
goog.require('quil.util');
quil.core._STAR_graphics_STAR_ = null;
/**
 * Graphics currently used for drawing. By default it is sketch graphics,
 *   but if called inside [[with-graphics]] macro - graphics passed to the macro
 *   is returned. This method should be used if you need to call some methods
 *   that are not implemented by quil.
 * 
 *   Example:
 *   ```
 *   (.beginDraw (current-graphics))
 *   ```
 */
quil.core.current_graphics = (function quil$core$current_graphics(){
var or__5002__auto__ = quil.core._STAR_graphics_STAR_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return quil.sketch.current_applet.call(null);
}
});
quil.core.arc_modes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open","open",-1763596448),(p5.prototype["OPEN"]),new cljs.core.Keyword(null,"chord","chord",-696248342),(p5.prototype["CHORD"]),new cljs.core.Keyword(null,"pie","pie",1530441672),(p5.prototype["PIE"])], null);

quil.core.angle_modes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radians","radians",1835725084),(p5.prototype["RADIANS"]),new cljs.core.Keyword(null,"degrees","degrees",2015169884),(p5.prototype["DEGREES"])], null);

quil.core.shape_modes = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"points","points",-1486596883),(p5.prototype["POINTS"]),new cljs.core.Keyword(null,"lines","lines",-700165781),(p5.prototype["LINES"]),new cljs.core.Keyword(null,"triangles","triangles",-1525417058),(p5.prototype["TRIANGLES"]),new cljs.core.Keyword(null,"triangle-fan","triangle-fan",1743150739),(p5.prototype["TRIANGLE_FAN"]),new cljs.core.Keyword(null,"triangle-strip","triangle-strip",221845500),(p5.prototype["TRIANGLE_STRIP"]),new cljs.core.Keyword(null,"quads","quads",1347497505),(p5.prototype["QUADS"]),new cljs.core.Keyword(null,"quad-strip","quad-strip",-1297270686),(p5.prototype["QUAD_STRIP"])], null);

quil.core.blend_modes = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"burn","burn",-458179293),new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"darkest","darkest",68197253),new cljs.core.Keyword(null,"dodge","dodge",-1556666427),new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"difference","difference",1916101396),new cljs.core.Keyword(null,"exclusion","exclusion",531897910),new cljs.core.Keyword(null,"hard-light","hard-light",-37591145),new cljs.core.Keyword(null,"multiply","multiply",-1036907048),new cljs.core.Keyword(null,"lightest","lightest",-2043115912),new cljs.core.Keyword(null,"blend","blend",249565561),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"soft-light","soft-light",513207899),new cljs.core.Keyword(null,"subtract","subtract",2136988635)],[(p5.prototype["BURN"]),(p5.prototype["SCREEN"]),(p5.prototype["DARKEST"]),(p5.prototype["DODGE"]),(p5.prototype["REPLACE"]),(p5.prototype["OVERLAY"]),(p5.prototype["DIFFERENCE"]),(p5.prototype["EXCLUSION"]),(p5.prototype["HARD_LIGHT"]),(p5.prototype["MULTIPLY"]),(p5.prototype["LIGHTEST"]),(p5.prototype["BLEND"]),(p5.prototype["ADD"]),(p5.prototype["SOFT_LIGHT"]),(p5.prototype["SUBTRACT"])]);

quil.core.color_modes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rgb","rgb",1432123467),(p5.prototype["RGB"]),new cljs.core.Keyword(null,"hsb","hsb",-753472031),(p5.prototype["HSB"]),new cljs.core.Keyword(null,"hsl","hsl",-1282948596),(p5.prototype["HSL"])], null);

quil.core.image_formats = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rgb","rgb",1432123467),(p5.prototype["RGB"]),new cljs.core.Keyword(null,"argb","argb",633844107),(p5.prototype["ARGB"]),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),(p5.prototype["ALPHA"])], null);

quil.core.ellipse_modes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"center","center",-748944368),(p5.prototype["CENTER"]),new cljs.core.Keyword(null,"radius","radius",-2073122258),(p5.prototype["RADIUS"]),new cljs.core.Keyword(null,"corner","corner",1296717125),(p5.prototype["CORNER"]),new cljs.core.Keyword(null,"corners","corners",-137817903),(p5.prototype["CORNERS"])], null);

quil.core.hint_options = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"disable-stroke-perspective","disable-stroke-perspective",479198433),new cljs.core.Keyword(null,"disable-depth-mask","disable-depth-mask",3298562),new cljs.core.Keyword(null,"enable-depth-test","enable-depth-test",1519326084),new cljs.core.Keyword(null,"enable-depth-sort","enable-depth-sort",-383089627),new cljs.core.Keyword(null,"disable-texture-mipmaps","disable-texture-mipmaps",1697917541),new cljs.core.Keyword(null,"disable-stroke-pure","disable-stroke-pure",735493926),new cljs.core.Keyword(null,"disable-depth-test","disable-depth-test",284606407),new cljs.core.Keyword(null,"enable-stroke-perspective","enable-stroke-perspective",-259923319),new cljs.core.Keyword(null,"disable-optimized-stroke","disable-optimized-stroke",74038544),new cljs.core.Keyword(null,"enable-opengl-errors","enable-opengl-errors",89998962),new cljs.core.Keyword(null,"enable-stroke-pure","enable-stroke-pure",881345587),new cljs.core.Keyword(null,"enable-async-saveframe","enable-async-saveframe",-1817644525),new cljs.core.Keyword(null,"enable-depth-mask","enable-depth-mask",872785875),new cljs.core.Keyword(null,"enable-optimized-stroke","enable-optimized-stroke",1537575253),new cljs.core.Keyword(null,"disable-opengl-errors","disable-opengl-errors",506822839),new cljs.core.Keyword(null,"disable-async-saveframe","disable-async-saveframe",-1346138728),new cljs.core.Keyword(null,"disable-depth-sort","disable-depth-sort",-1568352839),new cljs.core.Keyword(null,"enable-texture-mipmaps","enable-texture-mipmaps",1241892671)],[(p5.prototype["DISABLE_STROKE_PERSPECTIVE"]),(p5.prototype["DISABLE_DEPTH_MASK"]),(p5.prototype["ENABLE_DEPTH_TEST"]),(p5.prototype["ENABLE_DEPTH_SORT"]),(p5.prototype["DISABLE_TEXTURE_MIPMAPS"]),(p5.prototype["DISABLE_STROKE_PURE"]),(p5.prototype["DISABLE_DEPTH_TEST"]),(p5.prototype["ENABLE_STROKE_PERSPECTIVE"]),(p5.prototype["DISABLE_OPTIMIZED_STROKE"]),(p5.prototype["ENABLE_OPENGL_ERRORS"]),(p5.prototype["ENABLE_STROKE_PURE"]),(p5.prototype["ENABLE_ASYNC_SAVEFRAME"]),(p5.prototype["ENABLE_DEPTH_MASK"]),(p5.prototype["ENABLE_OPTIMIZED_STROKE"]),(p5.prototype["DISABLE_OPENGL_ERRORS"]),(p5.prototype["DISABLE_ASYNC_SAVEFRAME"]),(p5.prototype["DISABLE_DEPTH_SORT"]),(p5.prototype["ENABLE_TEXTURE_MIPMAPS"])]);

quil.core.image_modes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"corner","corner",1296717125),(p5.prototype["CORNER"]),new cljs.core.Keyword(null,"corners","corners",-137817903),(p5.prototype["CORNERS"]),new cljs.core.Keyword(null,"center","center",-748944368),(p5.prototype["CENTER"])], null);

quil.core.rect_modes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"corner","corner",1296717125),(p5.prototype["CORNER"]),new cljs.core.Keyword(null,"corners","corners",-137817903),(p5.prototype["CORNERS"]),new cljs.core.Keyword(null,"center","center",-748944368),(p5.prototype["CENTER"]),new cljs.core.Keyword(null,"radius","radius",-2073122258),(p5.prototype["RADIUS"])], null);

quil.core.p_shape_modes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"corner","corner",1296717125),(p5.prototype["CORNER"]),new cljs.core.Keyword(null,"corners","corners",-137817903),(p5.prototype["CORNERS"]),new cljs.core.Keyword(null,"center","center",-748944368),(p5.prototype["CENTER"])], null);

quil.core.stroke_cap_modes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"square","square",812434677),(p5.prototype["SQUARE"]),new cljs.core.Keyword(null,"round","round",2009433328),(p5.prototype["ROUND"]),new cljs.core.Keyword(null,"project","project",1124394579),(p5.prototype["PROJECT"]),new cljs.core.Keyword(null,"model","model",331153215),(p5.prototype["MODEL"])], null);

quil.core.stroke_join_modes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"miter","miter",327727052),(p5.prototype["MITER"]),new cljs.core.Keyword(null,"bevel","bevel",2090515654),(p5.prototype["BEVEL"]),new cljs.core.Keyword(null,"round","round",2009433328),(p5.prototype["ROUND"])], null);

quil.core.horizontal_alignment_modes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),(p5.prototype["LEFT"]),new cljs.core.Keyword(null,"center","center",-748944368),(p5.prototype["CENTER"]),new cljs.core.Keyword(null,"right","right",-452581833),(p5.prototype["RIGHT"])], null);

quil.core.vertical_alignment_modes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(p5.prototype["TOP"]),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(p5.prototype["BOTTOM"]),new cljs.core.Keyword(null,"center","center",-748944368),(p5.prototype["CENTER"]),new cljs.core.Keyword(null,"baseline","baseline",1151033280),(p5.prototype["BASELINE"])], null);

quil.core.text_styles = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"normal","normal",-1519123858),(p5.prototype["NORMAL"]),new cljs.core.Keyword(null,"italic","italic",32599196),(p5.prototype["ITALIC"]),new cljs.core.Keyword(null,"bold","bold",-116809535),(p5.prototype["BOLD"]),new cljs.core.Keyword(null,"bolditalic","bolditalic",-1629061788),(p5.prototype["BOLDITALIC"])], null);

quil.core.texture_modes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),(p5.prototype["IMAGE"]),new cljs.core.Keyword(null,"normal","normal",-1519123858),(p5.prototype["NORMAL"])], null);

quil.core.texture_wrap_modes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clamp","clamp",1803814940),(p5.prototype["CLAMP"]),new cljs.core.Keyword(null,"repeat","repeat",832692087),(p5.prototype["REPEAT"])], null);

quil.core.filter_modes = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"threshold","threshold",204221583),(p5.prototype["THRESHOLD"]),new cljs.core.Keyword(null,"gray","gray",1013268388),(p5.prototype["GRAY"]),new cljs.core.Keyword(null,"invert","invert",1553577503),(p5.prototype["INVERT"]),new cljs.core.Keyword(null,"posterize","posterize",-148251901),(p5.prototype["POSTERIZE"]),new cljs.core.Keyword(null,"blur","blur",-453500461),(p5.prototype["BLUR"]),new cljs.core.Keyword(null,"opaque","opaque",-1243552654),(p5.prototype["OPAQUE"]),new cljs.core.Keyword(null,"erode","erode",1539530618),(p5.prototype["ERODE"]),new cljs.core.Keyword(null,"dilate","dilate",1504745153),(p5.prototype["DILATE"])], null);

quil.core.cursor_modes = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"arrow","arrow",1071351425),(p5.prototype["ARROW"]),new cljs.core.Keyword(null,"cross","cross",194557789),(p5.prototype["CROSS"]),new cljs.core.Keyword(null,"hand","hand",791601933),(p5.prototype["HAND"]),new cljs.core.Keyword(null,"move","move",-2110884309),(p5.prototype["MOVE"]),new cljs.core.Keyword(null,"text","text",-1790561697),(p5.prototype["TEXT"]),new cljs.core.Keyword(null,"wait","wait",-260664777),(p5.prototype["WAIT"])], null);
quil.core.PI = Math.PI;
quil.core.HALF_PI = (quil.core.PI / 2.0);
quil.core.THIRD_PI = (quil.core.PI / 3.0);
quil.core.QUARTER_PI = (quil.core.PI / 4.0);
quil.core.TWO_PI = (quil.core.PI * 2.0);
quil.core.DEG_TO_RAD = (quil.core.PI / 180.0);
quil.core.RAD_TO_DEG = (180.0 / quil.core.PI);
quil.core.KEY_CODES = cljs.core.PersistentHashMap.fromArrays([(121),(39),(157),(119),(116),(113),(40),(117),(118),(122),(17),(115),(112),(123),(16),(120),(38),(18),(114),(37)],[new cljs.core.Keyword(null,"f10","f10",627525541),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"f8","f8",-2141475484),new cljs.core.Keyword(null,"f5","f5",1587057387),new cljs.core.Keyword(null,"f2","f2",396168596),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"f6","f6",2103080604),new cljs.core.Keyword(null,"f7","f7",356150168),new cljs.core.Keyword(null,"f11","f11",-1417398799),new cljs.core.Keyword(null,"control","control",1892578036),new cljs.core.Keyword(null,"f4","f4",990968764),new cljs.core.Keyword(null,"f1","f1",1714532389),new cljs.core.Keyword(null,"f12","f12",853352790),new cljs.core.Keyword(null,"shift","shift",997140064),new cljs.core.Keyword(null,"f9","f9",704633338),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"f3","f3",1954829043),new cljs.core.Keyword(null,"left","left",-399115937)]);
quil.core.KEY_MAP = new cljs.core.PersistentArrayMap(null, 1, [" ",new cljs.core.Keyword(null,"space","space",348133475)], null);
/**
 * Returns sketch object by id of canvas element of sketch.
 */
quil.core.get_sketch_by_id = (function quil$core$get_sketch_by_id(id){
var temp__5802__auto__ = document.getElementById(id);
if(cljs.core.truth_(temp__5802__auto__)){
var elem = temp__5802__auto__;
return elem.processing_obj;
} else {
return null;
}
});
var ret__5781__auto___785 = (function (){
quil.core.with_sketch = (function quil$core$with_sketch(var_args){
var args__5732__auto__ = [];
var len__5726__auto___786 = arguments.length;
var i__5727__auto___787 = (0);
while(true){
if((i__5727__auto___787 < len__5726__auto___786)){
args__5732__auto__.push((arguments[i__5727__auto___787]));

var G__788 = (i__5727__auto___787 + (1));
i__5727__auto___787 = G__788;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return quil.core.with_sketch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(quil.core.with_sketch.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,applet,body){
if(quil.util.clj_compilation_QMARK_.call(null)){
return null;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("quil.sketch","with-sketch","quil.sketch/with-sketch",-634067708,null),null,(1),null)),(new cljs.core.List(null,applet,null,(1),null)),body)));
}
}));

(quil.core.with_sketch.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(quil.core.with_sketch.cljs$lang$applyTo = (function (seq781){
var G__782 = cljs.core.first.call(null,seq781);
var seq781__$1 = cljs.core.next.call(null,seq781);
var G__783 = cljs.core.first.call(null,seq781__$1);
var seq781__$2 = cljs.core.next.call(null,seq781__$1);
var G__784 = cljs.core.first.call(null,seq781__$2);
var seq781__$3 = cljs.core.next.call(null,seq781__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__782,G__783,G__784,seq781__$3);
}));

return null;
})()
;
(quil.core.with_sketch.cljs$lang$macro = true);

/**
 * Retrieve sketch-specific state-atom. All changes to the
 *   atom will be reflected in the state.
 * 
 *   Example:
 *   ```
 *   (set-state! :foo 1)
 *   (state :foo) ;=> 1
 *   (swap! (state-atom) update-in [:foo] inc)
 *   (state :foo) ;=> 2
 *   ```
 */
quil.core.state_atom = (function quil$core$state_atom(){
return quil.sketch.current_applet.call(null).quil;
});
/**
 * Returns atom representing internal sketch state. Can be used by
 *   functions to save implementation-specific state. This state is
 *   supposed to be visible to users.
 */
quil.core.internal_state = (function quil$core$internal_state(){
return quil.sketch.current_applet.call(null).quil_internal_state;
});
/**
 * Retrieve sketch-specific state by `key`. Must initially call
 *   [[set-state!]] to store state. If no parameter is passed the whole
 *   state map is returned.
 * 
 *   Example:
 *   ```
 *   (set-state! :foo 1)
 *   (state :foo) ;=> 1
 *   (state) ;=> {:foo 1}
 *   ```
 */
quil.core.state = (function quil$core$state(var_args){
var G__790 = arguments.length;
switch (G__790) {
case 0:
return quil.core.state.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return quil.core.state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.state.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.deref.call(null,quil.core.state_atom.call(null));
}));

(quil.core.state.cljs$core$IFn$_invoke$arity$1 = (function (key){
var state = quil.core.state.call(null);
if(cljs.core.contains_QMARK_.call(null,state,key)){
} else {
throw Error(["Unable to find state with key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join(''));
}

return cljs.core.get.call(null,state,key);
}));

(quil.core.state.cljs$lang$maxFixedArity = 1);

/**
 * Set sketch-specific state. May only be called once (ideally in the
 *   setup function). Subsequent calls have no effect.
 * 
 *   Example:
 *   ```
 *   (set-state! :foo 1 :bar (atom true) :baz (/ (width) 2))
 *   ```
 */
quil.core.set_state_BANG_ = (function quil$core$set_state_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___793 = arguments.length;
var i__5727__auto___794 = (0);
while(true){
if((i__5727__auto___794 < len__5726__auto___793)){
args__5732__auto__.push((arguments[i__5727__auto___794]));

var G__795 = (i__5727__auto___794 + (1));
i__5727__auto___794 = G__795;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return quil.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(quil.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state_vals){
var state_STAR_ = quil.core.state_atom.call(null);
if(cljs.core.truth_(cljs.core.deref.call(null,state_STAR_))){
return null;
} else {
var state_map = cljs.core.apply.call(null,cljs.core.hash_map,state_vals);
return cljs.core.reset_BANG_.call(null,state_STAR_,state_map);
}
}));

(quil.core.set_state_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(quil.core.set_state_BANG_.cljs$lang$applyTo = (function (seq792){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq792));
}));

/**
 * Set a uniform variables inside a shader to modify the effect
 *   while the program is running.
 */
quil.core.set_uniform = (function quil$core$set_uniform(shader,uniform_name,data){
return shader.setUniform(uniform_name,data);
});
/**
 * Calculates the absolute value (magnitude) of a number. The
 *   absolute value of a number is always positive. Dynamically casts to
 *   an `int` or `float` appropriately for Clojure.
 */
quil.core.abs = (function quil$core$abs(n){
return quil.sketch.current_applet.call(null).abs(n);
});
/**
 * The inverse of [[cos]], returns the arc cosine of a value. This
 *   function expects the values in the range of -1 to 1 and values are
 *   returned in the range 0 to `Math/PI` (3.1415927).
 */
quil.core.acos = (function quil$core$acos(n){
return quil.sketch.current_applet.call(null).acos(n);
});
/**
 * Extracts the alpha value from a color.
 */
quil.core.alpha = (function quil$core$alpha(color){
return quil.core.current_graphics.call(null).alpha(color);
});
/**
 * Sets the ambient reflectance for shapes drawn to the screen. This
 *   is combined with the ambient light component of environment. The
 *   color components set through the parameters define the
 *   reflectance. For example in the default [[color-mode]], setting `r=255,
 *   g=126, b=0`, would cause all the red light to reflect and half of the
 *   green light to reflect. Used in combination with [[emissive]], [[specular]],
 *   and [[shininess]] in setting the material properties of shapes.
 */
quil.core.ambient = (function quil$core$ambient(var_args){
var G__797 = arguments.length;
switch (G__797) {
case 1:
return quil.core.ambient.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return quil.core.ambient.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.ambient.cljs$core$IFn$_invoke$arity$1 = (function (gray){
return quil.core.current_graphics.call(null).ambientMaterial(gray);
}));

(quil.core.ambient.cljs$core$IFn$_invoke$arity$3 = (function (r,g,b){
return quil.core.current_graphics.call(null).ambientMaterial(r,g,b);
}));

(quil.core.ambient.cljs$lang$maxFixedArity = 3);

/**
 * Adds an ambient light. Ambient light doesn't come from a specific direction,
 *   the rays of light have bounced around so much that objects are
 *   evenly lit from all sides. Ambient lights are almost always used in
 *   combination with other types of lights. Lights need to be included
 *   in the draw to remain persistent in a looping program. Placing them
 *   in the setup of a looping program will cause them to only have an
 *   effect the first time through the loop. The effect of the
 *   parameters is determined by the current [[color-mode]].
 */
quil.core.ambient_light = (function quil$core$ambient_light(var_args){
var G__800 = arguments.length;
switch (G__800) {
case 3:
return quil.core.ambient_light.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 6:
return quil.core.ambient_light.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.ambient_light.cljs$core$IFn$_invoke$arity$3 = (function (red,green,blue){
return quil.core.current_graphics.call(null).ambientLight(red,green,blue);
}));

(quil.core.ambient_light.cljs$core$IFn$_invoke$arity$6 = (function (red,green,blue,x,y,z){
return quil.core.current_graphics.call(null).ambientLight(red,green,blue,x,y,z);
}));

(quil.core.ambient_light.cljs$lang$maxFixedArity = 6);

/**
 * Sets the current mode of p5 to given `mode`.
 *   Options are:
 *   * `:radians` **(default)**
 *   * `:degrees`
 */
quil.core.angle_mode = (function quil$core$angle_mode(mode){
var mode__$1 = quil.util.resolve_constant_key.call(null,mode,quil.core.angle_modes);
return quil.core.current_graphics.call(null).angleMode(mode__$1);
});
/**
 * Multiplies the current matrix by the one specified through the
 *   parameters. This is very slow because it will try to calculate the
 *   inverse of the transform, so avoid it whenever possible. The
 *   equivalent function in OpenGL is `glMultMatrix()`.
 * 
 *   Note that cljs has only 2d version and arguments differ see
 *   https://p5js.org/reference/#/p5/applyMatrix
 */
quil.core.apply_matrix = (function quil$core$apply_matrix(a,b,c,d,e,f){
return quil.core.current_graphics.call(null).applyMatrix(a,b,c,d,e,f);
});
/**
 * Draws an arc in the display window. Arcs are drawn along the outer
 *   edge of an ellipse defined by the `x`, `y`, `width` and `height`
 *   parameters. The origin or the arc's ellipse may be changed with the
 *   [[ellipse-mode]] function. The `start` and `stop` parameters specify
 *   the angles at which to draw the arc. The `mode` is either `:open`,
 *   `:chord` or `:pie`.
 */
quil.core.arc = (function quil$core$arc(var_args){
var G__803 = arguments.length;
switch (G__803) {
case 6:
return quil.core.arc.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return quil.core.arc.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.arc.cljs$core$IFn$_invoke$arity$6 = (function (x,y,width,height,start,stop){
return quil.core.current_graphics.call(null).arc(x,y,width,height,start,stop);
}));

(quil.core.arc.cljs$core$IFn$_invoke$arity$7 = (function (x,y,width,height,start,stop,mode){
var arc_mode = quil.util.resolve_constant_key.call(null,mode,quil.core.arc_modes);
return quil.core.current_graphics.call(null).arc(x,y,width,height,start,stop,arc_mode);
}));

(quil.core.arc.cljs$lang$maxFixedArity = 7);

/**
 * The inverse of [[sin]], returns the arc sine of a value. This function
 *   expects the values in the range of -1 to 1 and values are returned
 *   in the range `-PI/2` to `PI/2`.
 */
quil.core.asin = (function quil$core$asin(n){
return quil.sketch.current_applet.call(null).asin(n);
});
/**
 * The inverse of [[tan]], returns the arc tangent of a value. This
 *   function expects the values in the range of -Infinity to
 *   Infinity (exclusive) and values are returned in the range `-PI/2` to
 *   `PI/2`.
 */
quil.core.atan = (function quil$core$atan(n){
return quil.sketch.current_applet.call(null).atan(n);
});
/**
 * Calculates the angle (in radians) from a specified point to the
 *   coordinate origin as measured from the positive x-axis. Values are
 *   returned as a `float` in the range from `PI` to `-PI`. The [[atan2]] function
 *   is most often used for orienting geometry to the position of the
 *   cursor. Note: The `y` coordinate of the point is the first parameter
 *   and the `x` coordinate is the second due to the structure of
 *   calculating the tangent.
 */
quil.core.atan2 = (function quil$core$atan2(y,x){
return quil.sketch.current_applet.call(null).atan2(y,x);
});
/**
 * Help cast a single argument gray value for a color setting function.
 * 
 *   In processing, this can be an integer or a numeric float. In p5js, this can be
 *   any of an integer, color string (hex or hsb) or other value, numeric float or
 *   p5.Color.
 * 
 *   Partial fix to https://github.com/quil/quil/issues/364. Unfortunately pretty
 *   expensive check for CLJS and probably does not help for avoiding reflection.
 */
quil.core.cast_color = (function quil$core$cast_color(gray){
if(cljs.core.integer_QMARK_.call(null,gray)){
return gray;
} else {
if(typeof gray === 'number'){
return gray;
} else {
return gray;

}
}
});
/**
 * Sets the color used for the background of the Processing
 *   window. The default background is light gray. In the draw function,
 *   the background color is used to clear the display window at the
 *   beginning of each frame.
 * 
 *   It is not possible to use transparency (alpha) in background colors
 *   with the main drawing surface, however they will work properly with
 *   [[create-graphics]]. Converts args to `floats`.
 */
quil.core.background = (function quil$core$background(var_args){
var G__806 = arguments.length;
switch (G__806) {
case 1:
return quil.core.background.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.background.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.core.background.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quil.core.background.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.background.cljs$core$IFn$_invoke$arity$1 = (function (gray){
return quil.core.current_graphics.call(null).background(quil.core.cast_color.call(null,gray));
}));

(quil.core.background.cljs$core$IFn$_invoke$arity$2 = (function (gray,alpha){
return quil.core.current_graphics.call(null).background(quil.core.cast_color.call(null,gray),alpha);
}));

(quil.core.background.cljs$core$IFn$_invoke$arity$3 = (function (r,g,b){
return quil.core.current_graphics.call(null).background(r,g,b);
}));

(quil.core.background.cljs$core$IFn$_invoke$arity$4 = (function (r,g,b,a){
return quil.core.current_graphics.call(null).background(r,g,b,a);
}));

(quil.core.background.cljs$lang$maxFixedArity = 4);

/**
 * Specify an image to be used as the background for a sketch. Its
 *   width and height must be the same size as the sketch window. Images
 *   used as background will ignore the current [[tint]] setting.
 */
quil.core.background_image = (function quil$core$background_image(img){
return quil.core.current_graphics.call(null).background(img);
});
/**
 * Use the [[begin-contour]] and [[end-contour]] function to create
 *   negative shapes within shapes. These functions can only be used
 *   within a [[begin-shape]]/[[end-shape]] pair and they only work with
 *   the `:p2d` and `:p3d` renderers.
 */
quil.core.begin_contour = (function quil$core$begin_contour(){
return quil.core.current_graphics.call(null).beginContour();
});
/**
 * Enables the creation of complex forms. [[begin-shape]] begins recording
 *   vertices. With no mode specified, the shape can be any irregular
 *   polygon.
 * 
 *   The available mode keywords are `:points`, `:lines`, `:triangles`,
 *                                `:triangle-fan`, `:triangle-strip`,
 *                                `:quads`, `:quad-strip`.
 * 
 *   After calling the [[begin-shape]] function, a series of vertex commands
 *   must follow. To stop drawing the shape, call [[end-shape]]. The [[vertex]]
 *   function with two parameters specifies a position in 2D and the
 *   [[vertex]] function with three parameters specifies a position in
 *   3D. Each shape will be outlined with the [[current-stroke]] color and
 *   filled with the [[fill]] color.
 * 
 *   Transformations such as [[translate]], [[rotate]], and [[scale]] do not work
 *   within [[begin-shape]]. It is also not possible to use other shapes,
 *   such as [[ellipse]] or [[rect]] within [[begin-shape]].
 */
quil.core.begin_shape = (function quil$core$begin_shape(var_args){
var G__809 = arguments.length;
switch (G__809) {
case 0:
return quil.core.begin_shape.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return quil.core.begin_shape.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.begin_shape.cljs$core$IFn$_invoke$arity$0 = (function (){
return quil.core.current_graphics.call(null).beginShape();
}));

(quil.core.begin_shape.cljs$core$IFn$_invoke$arity$1 = (function (mode){
var mode__$1 = quil.util.resolve_constant_key.call(null,mode,quil.core.shape_modes);
return quil.core.current_graphics.call(null).beginShape((mode__$1 | (0)));
}));

(quil.core.begin_shape.cljs$lang$maxFixedArity = 1);

/**
 * Draws a Bezier curve on the screen. These curves are defined by a
 *   series of anchor and control points. The first two parameters
 *   specify the first anchor point and the last two parameters specify
 *   the other anchor point. The middle parameters specify the control
 *   points which define the shape of the curve.
 */
quil.core.bezier = (function quil$core$bezier(var_args){
var G__812 = arguments.length;
switch (G__812) {
case 8:
return quil.core.bezier.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case 12:
return quil.core.bezier.cljs$core$IFn$_invoke$arity$12((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.bezier.cljs$core$IFn$_invoke$arity$8 = (function (x1,y1,cx1,cy1,cx2,cy2,x2,y2){
return quil.core.current_graphics.call(null).bezier(x1,y1,cx1,cy1,cx2,cy2,x2,y2);
}));

(quil.core.bezier.cljs$core$IFn$_invoke$arity$12 = (function (x1,y1,z1,cx1,cy1,cz1,cx2,cy2,cz2,x2,y2,z2){
return quil.core.current_graphics.call(null).bezier(x1,y1,z1,cx1,cy1,cz1,cx2,cy2,cz2,x2,y2,z2);
}));

(quil.core.bezier.cljs$lang$maxFixedArity = 12);

/**
 * Sets the resolution at which Beziers display. The **default** value is
 *   20. This function is only useful when using the `:p3d` or `:opengl`
 *   renderer as the default (`:java2d`) renderer does not use this
 *   information.
 */
quil.core.bezier_detail = (function quil$core$bezier_detail(detail){
return quil.core.current_graphics.call(null).bezierDetail((detail | (0)));
});
/**
 * Evaluates the Bezier at point `t` for points `a`, `b`, `c`, `d`. The
 *   parameter `t` varies between 0 and 1, `a` and `d` are points on the curve,
 *   and `b` and `c` are the control points. This can be done once with the x
 *   coordinates and a second time with the y coordinates to get the
 *   location of a bezier curve at `t`.
 */
quil.core.bezier_point = (function quil$core$bezier_point(a,b,c,d,t){
return quil.core.current_graphics.call(null).bezierPoint(a,b,c,d,t);
});
/**
 * Calculates the tangent of a point on a Bezier curve.
 *   (See http://en.wikipedia.org/wiki/Tangent)
 */
quil.core.bezier_tangent = (function quil$core$bezier_tangent(a,b,c,d,t){
return quil.core.current_graphics.call(null).bezierTangent(a,b,c,d,t);
});
/**
 * Specifies vertex coordinates for Bezier curves. Each call to
 *   [[bezier-vertex]] defines the position of two control points and one
 *   anchor point of a Bezier curve, adding a new segment to a line or
 *   shape. The first time [[bezier-vertex]] is used within a [[begin-shape]]
 *   call, it must be prefaced with a call to [[vertex]] to set the first
 *   anchor point. This function must be used between [[begin-shape]] and
 *   [[end-shape]] and only when there is no parameter specified to
 *   [[begin-shape]].
 */
quil.core.bezier_vertex = (function quil$core$bezier_vertex(var_args){
var G__815 = arguments.length;
switch (G__815) {
case 6:
return quil.core.bezier_vertex.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 9:
return quil.core.bezier_vertex.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.bezier_vertex.cljs$core$IFn$_invoke$arity$6 = (function (cx1,cy1,cx2,cy2,x,y){
return quil.core.current_graphics.call(null).bezierVertex(cx1,cy1,cx2,cy2,x,y);
}));

(quil.core.bezier_vertex.cljs$core$IFn$_invoke$arity$9 = (function (cx1,cy1,cz1,cx2,cy2,cz2,x,y,z){
return quil.core.current_graphics.call(null).bezierVertex(cx1,cy1,cz1,cx2,cy2,cz2,x,y,z);
}));

(quil.core.bezier_vertex.cljs$lang$maxFixedArity = 9);

/**
 * Returns a `string` representing the binary value of an `int`, `char` or
 *   `byte`. When converting an `int` to a `string`, it is possible to specify
 *   the number of digits used.
 */
quil.core.binary = (function quil$core$binary(var_args){
var G__818 = arguments.length;
switch (G__818) {
case 1:
return quil.core.binary.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.binary.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.binary.cljs$core$IFn$_invoke$arity$1 = (function (val){
return val.toString((2));
}));

(quil.core.binary.cljs$core$IFn$_invoke$arity$2 = (function (val,num_digits){
var full = quil.core.binary.call(null,val);
return cljs.core.subs.call(null,full,(cljs.core.count.call(null,full) - num_digits),cljs.core.count.call(null,full));
}));

(quil.core.binary.cljs$lang$maxFixedArity = 2);

/**
 * Blends a region of pixels from one image into another with full alpha
 *   channel support. If `src-img` is not specified it defaults to
 *   [[current-graphics]]. If `dest-img` is not specified it defaults to
 *   [[current-graphics]].
 * 
 *   Note: it is recommended to use [[blend-mode]] instead of [[blend]].
 * 
 *   Available blend modes are:
 * 
 *   * `:blend`      - linear interpolation of colours: C = A*factor + B
 *   * `:add`        - additive blending with white clip:
 *                                              C = min(A*factor + B, 255)
 *   * `:darkest`    - only the darkest colour succeeds:
 *                                              C = min(A*factor, B)
 *   * `:lightest`   - only the lightest colour succeeds:
 *                                              C = max(A*factor, B)
 *   * `:difference` - subtract colors from underlying image.
 *   * `:exclusion`  - similar to `:difference`, but less extreme.
 *   * `:multiply`   - Multiply the colors, result will always be darker.
 *   * `:screen`     - Opposite multiply, uses inverse values of the colors.
 *   * `:overlay`    - A mix of `:multiply` and `:screen`. Multiplies dark values
 *                  and screens light values.
 *   * `:hard-light` - `:screen` when greater than 50% gray, `:multiply` when
 *                  lower.
 *   * `:soft-light` - Mix of `:darkest` and `:lightest`. Works like :overlay,
 *                  but not as harsh.
 *   * `:dodge`      - Lightens light tones and increases contrast, ignores
 *                  darks.
 *                  Called "Color Dodge" in Illustrator and Photoshop.
 *   * `:burn`       - Darker areas are applied, increasing contrast, ignores
 *                  lights. Called "Color Burn" in Illustrator and
 *                  Photoshop.
 * 
 *   In clj the following blend modes are also supported:
 *   `:subtract`   - subtractive blending with black clip:
 *                                          C = max(B - A*factor, 0)
 * 
 *   In cljs the following blend modes are also supported:
 *   `:replace`    - the pixels entirely replace the others and don't utilize
 *                alpha (transparency) values.
 */
quil.core.blend = (function quil$core$blend(var_args){
var G__821 = arguments.length;
switch (G__821) {
case 9:
return quil.core.blend.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 10:
return quil.core.blend.cljs$core$IFn$_invoke$arity$10((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case 11:
return quil.core.blend.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.blend.cljs$core$IFn$_invoke$arity$9 = (function (x,y,width,height,dx,dy,dwidth,dheight,mode){
return quil.core.blend.call(null,quil.core.current_graphics.call(null),quil.core.current_graphics.call(null),x,y,width,height,dx,dy,dwidth,dheight,mode);
}));

(quil.core.blend.cljs$core$IFn$_invoke$arity$10 = (function (src_img,x,y,width,height,dx,dy,dwidth,dheight,mode){
return quil.core.blend.call(null,src_img,quil.core.current_graphics.call(null),x,y,width,height,dx,dy,dwidth,dheight,mode);
}));

(quil.core.blend.cljs$core$IFn$_invoke$arity$11 = (function (src_img,dest_img,x,y,width,height,dx,dy,dwidth,dheight,mode){
var mode__$1 = quil.util.resolve_constant_key.call(null,mode,quil.core.blend_modes);
return dest_img.blend(src_img,(x | (0)),(y | (0)),(width | (0)),(height | (0)),(dx | (0)),(dy | (0)),(dwidth | (0)),(dheight | (0)),mode__$1);
}));

(quil.core.blend.cljs$lang$maxFixedArity = 11);

/**
 * Blends the pixels in the display window according to the defined `mode`.
 *   There is a choice of the following modes to blend the source pixels (A)
 *   with the ones of pixels already in the display window (B):
 * 
 *   * `:blend`      - linear interpolation of colours: `C = A*factor + B`
 *   * `:add`        - additive blending with white clip:
 *                                              `C = min(A*factor + B, 255)`
 *   * `:subtract`   - subtractive blending with black clip:
 *                                              `C = max(B - A*factor, 0)`
 *   * `:darkest`    - only the darkest colour succeeds:
 *                                              `C = min(A*factor, B)`
 *   * `:lightest`   - only the lightest colour succeeds:
 *                                              `C = max(A*factor, B)`
 *   * `:difference` - subtract colors from underlying image.
 *   * `:exclusion`  - similar to `:difference`, but less extreme.
 *   * `:multiply`   - multiply the colors, result will always be darker.
 *   * `:screen`     - opposite of `:multiply`, uses inverse values of the colors.
 *   * `:replace`    - the pixels entirely replace the others and don't utilize
 *                  alpha (transparency) values.
 *   * `:overlay`    - mix of `:multiply` and `:screen`. Multiplies dark values,
 *                  and screens light values.
 *   * `:hard-light` - `:screen` when greater than 50% gray, `:multiply` when
 *                  lower.
 *   * `:soft-light` - mix of `:darkest` and `:lightest`. Works like :overlay, but
 *                  not as harsh.
 *   * `:dodge`      - lightens light tones and increases contrast, ignores darks.
 *   * `:burn`       - darker areas are applied, increasing contrast, ignores
 *                  lights.
 * 
 *   Note: in clj `:hard-light`, `:soft-light`, `:overlay`, `:dodge`, `:burn`
 *   modes are not supported. In cljs `:subtract` mode is not supported.
 * 
 *   `factor` is the alpha value of the pixel being drawn
 */
quil.core.blend_mode = (function quil$core$blend_mode(mode){
var mode__$1 = quil.util.resolve_constant_key.call(null,mode,quil.core.blend_modes);
return quil.core.current_graphics.call(null).blendMode(mode__$1);
});
/**
 * Extracts the blue value from a color, scaled to match current color-mode.
 *   Returns a `float`.
 */
quil.core.blue = (function quil$core$blue(color){
return quil.core.current_graphics.call(null).blue(quil.util.clj_unchecked_int.call(null,color));
});
/**
 * Creates an extruded rectangle.
 */
quil.core.box = (function quil$core$box(var_args){
var G__824 = arguments.length;
switch (G__824) {
case 1:
return quil.core.box.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return quil.core.box.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.box.cljs$core$IFn$_invoke$arity$1 = (function (size){
return quil.core.current_graphics.call(null).box(size);
}));

(quil.core.box.cljs$core$IFn$_invoke$arity$3 = (function (width,height,depth){
return quil.core.current_graphics.call(null).box(width,height,depth);
}));

(quil.core.box.cljs$lang$maxFixedArity = 3);

/**
 * Extracts the brightness value from a color. Returns a `float`.
 */
quil.core.brightness = (function quil$core$brightness(color){
return quil.core.current_graphics.call(null).brightness(quil.util.clj_unchecked_int.call(null,color));
});
/**
 * Sets the position of the camera through setting the eye position,
 *   the center of the scene, and which axis is facing upward. Moving the
 *   eye position and the direction it is pointing (the center of the
 *   scene) allows the images to be seen from different angles. The
 *   version without any parameters sets the camera to the default
 *   position, pointing to the center of the display window with the Y
 *   axis as up. The default values are:
 * 
 *   * `eyeX`    - `(/ (width) 2.0)`
 *   * `eyeY`    - `(/ (height) 2.0)`
 *   * `eyeZ`    - `(/ (/ (height) 2.0) (tan (/ (* Math/PI 60.0) 360.0)))`
 *   * `centerX` - `(/ (width) 2.0)`
 *   * `centerY` - `(/ (height) 2.0)`
 *   * `centerZ` - `0`
 *   * `upX`     - `0`
 *   * `upY`     - `1`
 *   * `upZ`     - `0`
 * 
 *   Similar to `gluLookAt()` in OpenGL, but it first clears the
 *   current camera settings.
 */
quil.core.camera = (function quil$core$camera(var_args){
var G__827 = arguments.length;
switch (G__827) {
case 0:
return quil.core.camera.cljs$core$IFn$_invoke$arity$0();

break;
case 9:
return quil.core.camera.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.camera.cljs$core$IFn$_invoke$arity$0 = (function (){
return quil.core.current_graphics.call(null).camera();
}));

(quil.core.camera.cljs$core$IFn$_invoke$arity$9 = (function (eyeX,eyeY,eyeZ,centerX,centerY,centerZ,upX,upY,upZ){
return quil.core.current_graphics.call(null).camera(eyeX,eyeY,eyeZ,centerX,centerY,centerZ,upX,upY,upZ);
}));

(quil.core.camera.cljs$lang$maxFixedArity = 9);

/**
 * Calculates the closest `int` value that is greater than or equal to
 *   the value of the parameter. For example, `(ceil 9.03)` returns the
 *   value 10.
 */
quil.core.ceil = (function quil$core$ceil(n){
return quil.sketch.current_applet.call(null).ceil(n);
});
/**
 * Clears the pixels within a buffer. This function only works on
 *   graphics objects created with the [[create-graphics]] function meaning
 *   that you should call it only inside [[with-graphics]] macro. Unlike
 *   the main graphics context (the display window), pixels in additional
 *   graphics areas created with [[create-graphics]] can be entirely or
 *   partially transparent. This function clears everything in a graphics
 *   object to make all of the pixels 100% transparent.
 */
quil.core.clear = (function quil$core$clear(){
return quil.core.current_graphics.call(null).clear();
});
/**
 * Creates an integer representation of a color. The parameters are
 *   interpreted as RGB or HSB values depending on the current
 *   [[color-mode]]. The default mode is RGB values from 0 to 255 and
 *   therefore, the function call `(color 255 204 0)` will return a bright
 *   yellow. Args are cast to floats.
 * 
 *   * `r` - red or hue value
 *   * `g` - green or saturation value
 *   * `b` - blue or brightness value
 *   * `a` - alpha value
 */
quil.core.color = (function quil$core$color(var_args){
var G__830 = arguments.length;
switch (G__830) {
case 1:
return quil.core.color.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.color.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.core.color.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quil.core.color.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.color.cljs$core$IFn$_invoke$arity$1 = (function (gray){
return quil.core.current_graphics.call(null).color(quil.core.cast_color.call(null,gray));
}));

(quil.core.color.cljs$core$IFn$_invoke$arity$2 = (function (gray,alpha){
return quil.core.current_graphics.call(null).color(quil.core.cast_color.call(null,gray),alpha);
}));

(quil.core.color.cljs$core$IFn$_invoke$arity$3 = (function (r,g,b){
return quil.core.current_graphics.call(null).color(r,g,b);
}));

(quil.core.color.cljs$core$IFn$_invoke$arity$4 = (function (r,g,b,a){
return quil.core.current_graphics.call(null).color(r,g,b,a);
}));

(quil.core.color.cljs$lang$maxFixedArity = 4);

/**
 * Changes the way Processing interprets color data. Available modes
 *   are `:rgb` and `:hsb` (and `:hsl` in Clojurescript).
 *   By default, the parameters for [[fill]], [[stroke]],
 *   [[background]], and [[color]] are defined by values between 0 and 255 using
 *   the `:rgb` color model. The [[color-mode]] function is used to change the
 *   numerical range used for specifying colors and to switch color
 *   systems. For example, calling
 *   `(color-mode :rgb 1.0)` will specify that values are specified between
 *   0 and 1. The limits for defining colors are altered by setting the
 *   parameters range1, range2, range3, and range 4.
 */
quil.core.color_mode = (function quil$core$color_mode(var_args){
var G__833 = arguments.length;
switch (G__833) {
case 1:
return quil.core.color_mode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.color_mode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return quil.core.color_mode.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return quil.core.color_mode.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.color_mode.cljs$core$IFn$_invoke$arity$1 = (function (mode){
var mode__$1 = quil.util.resolve_constant_key.call(null,mode,quil.core.color_modes);
return quil.core.current_graphics.call(null).colorMode(mode__$1,(255));
}));

(quil.core.color_mode.cljs$core$IFn$_invoke$arity$2 = (function (mode,max){
var mode__$1 = quil.util.resolve_constant_key.call(null,mode,quil.core.color_modes);
return quil.core.current_graphics.call(null).colorMode(mode__$1,max);
}));

(quil.core.color_mode.cljs$core$IFn$_invoke$arity$4 = (function (mode,max_x,max_y,max_z){
var mode__$1 = quil.util.resolve_constant_key.call(null,mode,quil.core.color_modes);
return quil.core.current_graphics.call(null).colorMode(mode__$1,max_x,max_y,max_z);
}));

(quil.core.color_mode.cljs$core$IFn$_invoke$arity$5 = (function (mode,max_x,max_y,max_z,max_a){
var mode__$1 = quil.util.resolve_constant_key.call(null,mode,quil.core.color_modes);
return quil.core.current_graphics.call(null).colorMode(mode__$1,max_x,max_y,max_z,max_a);
}));

(quil.core.color_mode.cljs$lang$maxFixedArity = 5);

/**
 * Draw a cone with given `radius` and `height`.
 * 
 *    Optional parameters:
 *      * `detail-x` - number of segments, the more segments the smoother geometry default is 24
 *      * `detail-y` - number of segments, the more segments the smoother geometry default is 24
 *      * `cap`      - whether to draw the base of the cone
 */
quil.core.cone = (function quil$core$cone(var_args){
var G__836 = arguments.length;
switch (G__836) {
case 2:
return quil.core.cone.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.core.cone.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quil.core.cone.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return quil.core.cone.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.cone.cljs$core$IFn$_invoke$arity$2 = (function (radius,height){
return quil.core.current_graphics.call(null).cone(radius,height);
}));

(quil.core.cone.cljs$core$IFn$_invoke$arity$3 = (function (radius,height,detail_x){
return quil.core.current_graphics.call(null).cone(radius,height,(detail_x | (0)));
}));

(quil.core.cone.cljs$core$IFn$_invoke$arity$4 = (function (radius,height,detail_x,detail_y){
return quil.core.current_graphics.call(null).cone(radius,height,(detail_x | (0)),(detail_y | (0)));
}));

(quil.core.cone.cljs$core$IFn$_invoke$arity$5 = (function (radius,height,detail_x,detail_y,cap){
return quil.core.current_graphics.call(null).cone(radius,height,(detail_x | (0)),(detail_y | (0)),cljs.core.boolean$.call(null,cap));
}));

(quil.core.cone.cljs$lang$maxFixedArity = 5);

/**
 * Constrains a value to not exceed a maximum and minimum value.
 */
quil.core.constrain = (function quil$core$constrain(amt,low,high){
return quil.sketch.current_applet.call(null).constrain(amt,low,high);
});
/**
 * Copies a region of pixels from one image to another. If `src-img`
 *   is not specified it defaults to [[current-graphics]]. If `dest-img` is not
 *   specified - it defaults to [[current-graphics]]. If the source
 *   and destination regions aren't the same size, it will automatically
 *   resize the source pixels to fit the specified target region. No
 *   alpha information is used in the process, however if the source
 *   image has an alpha channel set, it will be copied as well. 
 */
quil.core.copy = (function quil$core$copy(var_args){
var G__839 = arguments.length;
switch (G__839) {
case 2:
return quil.core.copy.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.core.copy.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quil.core.copy.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.copy.cljs$core$IFn$_invoke$arity$2 = (function (p__840,p__841){
var vec__842 = p__840;
var sx = cljs.core.nth.call(null,vec__842,(0),null);
var sy = cljs.core.nth.call(null,vec__842,(1),null);
var swidth = cljs.core.nth.call(null,vec__842,(2),null);
var sheight = cljs.core.nth.call(null,vec__842,(3),null);
var vec__845 = p__841;
var dx = cljs.core.nth.call(null,vec__845,(0),null);
var dy = cljs.core.nth.call(null,vec__845,(1),null);
var dwidth = cljs.core.nth.call(null,vec__845,(2),null);
var dheight = cljs.core.nth.call(null,vec__845,(3),null);
return quil.core.current_graphics.call(null).copy((sx | (0)),(sy | (0)),(swidth | (0)),(sheight | (0)),(dx | (0)),(dy | (0)),(dwidth | (0)),(dheight | (0)));
}));

(quil.core.copy.cljs$core$IFn$_invoke$arity$3 = (function (src_img,p__848,p__849){
var vec__850 = p__848;
var sx = cljs.core.nth.call(null,vec__850,(0),null);
var sy = cljs.core.nth.call(null,vec__850,(1),null);
var swidth = cljs.core.nth.call(null,vec__850,(2),null);
var sheight = cljs.core.nth.call(null,vec__850,(3),null);
var vec__853 = p__849;
var dx = cljs.core.nth.call(null,vec__853,(0),null);
var dy = cljs.core.nth.call(null,vec__853,(1),null);
var dwidth = cljs.core.nth.call(null,vec__853,(2),null);
var dheight = cljs.core.nth.call(null,vec__853,(3),null);
return quil.core.copy.call(null,src_img,quil.core.current_graphics.call(null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy,swidth,sheight], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy,dwidth,dheight], null));
}));

(quil.core.copy.cljs$core$IFn$_invoke$arity$4 = (function (src_img,dest_img,p__856,p__857){
var vec__858 = p__856;
var sx = cljs.core.nth.call(null,vec__858,(0),null);
var sy = cljs.core.nth.call(null,vec__858,(1),null);
var swidth = cljs.core.nth.call(null,vec__858,(2),null);
var sheight = cljs.core.nth.call(null,vec__858,(3),null);
var vec__861 = p__857;
var dx = cljs.core.nth.call(null,vec__861,(0),null);
var dy = cljs.core.nth.call(null,vec__861,(1),null);
var dwidth = cljs.core.nth.call(null,vec__861,(2),null);
var dheight = cljs.core.nth.call(null,vec__861,(3),null);
return dest_img.copy(src_img,(sx | (0)),(sy | (0)),(swidth | (0)),(sheight | (0)),(dx | (0)),(dy | (0)),(dwidth | (0)),(dheight | (0)));
}));

(quil.core.copy.cljs$lang$maxFixedArity = 4);

/**
 * Calculates the cosine of an angle. This function expects the values
 *   of the angle parameter to be provided in radians (values from 0 to
 *   Math/PI*2). Values are returned in the range -1 to 1.
 */
quil.core.cos = (function quil$core$cos(angle){
return quil.sketch.current_applet.call(null).cos(angle);
});
/**
 * Creates and returns a new `PGraphics` object of the types `:p2d`, `:p3d`,
 *   `:java2d`, `:pdf`. By default `:java2d` is used. Use this class if you
 *   need to draw into an off-screen graphics buffer. It's not possible
 *   to use [[create-graphics]] with the `:opengl` renderer, because it doesn't
 *   allow offscreen use. The `:pdf` renderer requires the filename parameter.
 * 
 *   Note: don't use [[create-graphics]] in draw in Clojurescript, it leaks memory.
 *   You should create graphic in setup and reuse it in draw instead of creating
 *   a new one.
 * 
 *   It's important to call any drawing commands between `(.beginDraw graphics)`
 *   and `(.endDraw graphics)` statements or use [[with-graphics]] macro. This is
 *   also true for any commands that affect drawing, such as [[smooth]] or
 *   [[color-mode]].
 * 
 *   If you're using `:pdf` renderer - don't forget to call `(.dispose graphics)`
 *   as last command inside [[with-graphics]] macro, otherwise graphics won't be
 *   saved.
 * 
 *   Unlike the main drawing surface which is completely opaque, surfaces
 *   created with [[create-graphics]] can have transparency. This makes it
 *   possible to draw into a graphics and maintain the alpha channel. By
 *   using save to write a `PNG` or `TGA` file, the transparency of the
 *   graphics object will be honored.
 */
quil.core.create_graphics = (function quil$core$create_graphics(var_args){
var G__866 = arguments.length;
switch (G__866) {
case 2:
return quil.core.create_graphics.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.core.create_graphics.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.create_graphics.cljs$core$IFn$_invoke$arity$2 = (function (w,h){
return quil.sketch.current_applet.call(null).createGraphics((w | (0)),(h | (0)));
}));

(quil.core.create_graphics.cljs$core$IFn$_invoke$arity$3 = (function (w,h,renderer){
return quil.sketch.current_applet.call(null).createGraphics((w | (0)),(h | (0)),quil.sketch.resolve_renderer.call(null,renderer));
}));

(quil.core.create_graphics.cljs$lang$maxFixedArity = 3);

/**
 * Creates a new datatype for storing images (`PImage` for clj and
 *   `Image` for cljs). This provides a fresh buffer of pixels to play
 *   with. Set the size of the buffer with the `width` and `height`
 *   parameters.
 * 
 *   In clj the `format` parameter defines how the pixels are stored.
 *   See the PImage reference for more information.
 *   Possible formats: `:rgb`, `:argb`, `:alpha` (grayscale alpha channel)
 * 
 *   Prefer using [[create-image]] over initialising new `PImage` (or `Image`)
 *   instances directly.
 */
quil.core.create_image = (function quil$core$create_image(w,h){
return quil.sketch.current_applet.call(null).createImage((w | (0)),(h | (0)));
});
/**
 * Return the current fill color.
 */
quil.core.current_fill = (function quil$core$current_fill(){
return new cljs.core.Keyword(null,"current-fill","current-fill",1421462292).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quil.core.internal_state.call(null)));
});
/**
 * Return the current stroke color.
 */
quil.core.current_stroke = (function quil$core$current_stroke(){
return new cljs.core.Keyword(null,"current-stroke","current-stroke",-1338415274).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quil.core.internal_state.call(null)));
});
/**
 * Sets the cursor to a predefined symbol or makes it
 *   visible if already hidden (after [[no-cursor]] was called).
 * 
 *   Available modes: `:arrow`, `:cross`, `:hand`, `:move`, `:text`, `:wait`
 * 
 *   See [[cursor-image]] for specifying a generic image as the cursor
 *   symbol (clj only).
 */
quil.core.cursor = (function quil$core$cursor(var_args){
var G__869 = arguments.length;
switch (G__869) {
case 0:
return quil.core.cursor.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return quil.core.cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.cursor.cljs$core$IFn$_invoke$arity$0 = (function (){
return quil.sketch.current_applet.call(null).cursor();
}));

(quil.core.cursor.cljs$core$IFn$_invoke$arity$1 = (function (cursor_mode){
var cursor_mode__$1 = quil.util.resolve_constant_key.call(null,cursor_mode,quil.core.cursor_modes);
return quil.sketch.current_applet.call(null).cursor(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cursor_mode__$1));
}));

(quil.core.cursor.cljs$lang$maxFixedArity = 1);

/**
 * Draws a curved line on the screen. The first and second parameters
 *   specify the beginning control point and the last two parameters
 *   specify the ending control point. The middle parameters specify the
 *   start and stop of the curve. Longer curves can be created by putting
 *   a series of curve functions together or using [[curve-vertex]]. An additional
 *   function called [[curve-tightness]] provides control for the visual quality
 *   of the curve. The [[curve]] function is an implementation of Catmull-Rom
 *   splines.
 */
quil.core.curve = (function quil$core$curve(var_args){
var G__872 = arguments.length;
switch (G__872) {
case 8:
return quil.core.curve.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case 12:
return quil.core.curve.cljs$core$IFn$_invoke$arity$12((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.curve.cljs$core$IFn$_invoke$arity$8 = (function (x1,y1,x2,y2,x3,y3,x4,y4){
return quil.core.current_graphics.call(null).curve(x1,y1,x2,y2,x3,y3,x4,y4);
}));

(quil.core.curve.cljs$core$IFn$_invoke$arity$12 = (function (x1,y1,z1,x2,y2,z2,x3,y3,z3,x4,y4,z4){
return quil.core.current_graphics.call(null).curve(x1,y1,z1,x2,y2,z2,x3,y3,z3,x4,y4,z4);
}));

(quil.core.curve.cljs$lang$maxFixedArity = 12);

/**
 * Sets the resolution at which curves display. The default value is
 *   20. This function is only useful when using the `:p3d` or `:opengl`
 *   renderer as the default (`:java2d`) renderer does not use this
 *   information.
 */
quil.core.curve_detail = (function quil$core$curve_detail(detail){
return quil.core.current_graphics.call(null).curveDetail((detail | (0)));
});
/**
 * Evaluates the curve at point `t` for points `a`, `b`, `c`, `d`. The
 *   parameter `t` varies between 0 and 1, `a` and `d` are points on the
 *   curve, and `b` and `c` are the control points. This can be done once
 *   with the x coordinates and a second time with the y coordinates to
 *   get the location of a curve at `t`.
 */
quil.core.curve_point = (function quil$core$curve_point(a,b,c,d,t){
return quil.core.current_graphics.call(null).curvePoint(a,b,c,d,t);
});
/**
 * Calculates the tangent of a point on a curve.
 *   See: http://en.wikipedia.org/wiki/Tangent
 */
quil.core.curve_tangent = (function quil$core$curve_tangent(a,b,c,d,t){
return quil.core.current_graphics.call(null).curveTangent(a,b,c,d,t);
});
/**
 * Modifies the quality of forms created with curve and
 *   [[curve-vertex]]. The parameter `tightness` determines how the curve fits
 *   to the vertex points. The value 0.0 is the default value for
 *   `tightness` (this value defines the curves to be Catmull-Rom splines)
 *   and the value 1.0 connects all the points with straight
 *   lines. Values within the range -5.0 and 5.0 will deform the curves
 *   but will leave them recognizable and as values increase in
 *   magnitude, they will continue to deform.
 */
quil.core.curve_tightness = (function quil$core$curve_tightness(tightness){
return quil.core.current_graphics.call(null).curveTightness(tightness);
});
/**
 * Specifies vertex coordinates for curves. This function may only be
 *   used between [[begin-shape]] and [[end-shape]] and only when there is no
 *   `mode` keyword specified to [[begin-shape]]. The first and last points in a
 *   series of [[curve-vertex]] lines will be used to guide the beginning and
 *   end of a the curve. A minimum of four points is required to draw a
 *   tiny curve between the second and third points. Adding a fifth point
 *   with [[curve-vertex]] will draw the curve between the second, third, and
 *   fourth points. The [[curve-vertex]] function is an implementation of
 *   Catmull-Rom splines.
 */
quil.core.curve_vertex = (function quil$core$curve_vertex(var_args){
var G__875 = arguments.length;
switch (G__875) {
case 2:
return quil.core.curve_vertex.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.core.curve_vertex.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.curve_vertex.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return quil.core.current_graphics.call(null).curveVertex(x,y);
}));

(quil.core.curve_vertex.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return quil.core.current_graphics.call(null).curveVertex(x,y,z);
}));

(quil.core.curve_vertex.cljs$lang$maxFixedArity = 3);

/**
 * Draw a cylinder with given `radius` and `height`.
 */
quil.core.cylinder = (function quil$core$cylinder(var_args){
var G__878 = arguments.length;
switch (G__878) {
case 2:
return quil.core.cylinder.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 6:
return quil.core.cylinder.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.cylinder.cljs$core$IFn$_invoke$arity$2 = (function (radius,height){
return quil.core.current_graphics.call(null).cylinder(radius,height);
}));

(quil.core.cylinder.cljs$core$IFn$_invoke$arity$6 = (function (radius,height,detail_x,detail_y,bottom_cap,top_cap){
return quil.core.current_graphics.call(null).cylinder(radius,height,(detail_x | (0)),(detail_y | (0)),cljs.core.boolean$.call(null,bottom_cap),cljs.core.boolean$.call(null,top_cap));
}));

(quil.core.cylinder.cljs$lang$maxFixedArity = 6);

/**
 * Get the current day of the month (1 through 31).
 */
quil.core.day = (function quil$core$day(){
return quil.sketch.current_applet.call(null).day();
});
/**
 * Converts a `radians` measurement to its corresponding value in
 *   degrees. Radians and degrees are two ways of measuring the same
 *   thing. There are 360 degrees in a circle and `2*PI` radians in a
 *   circle. For example, `90° = PI/2 = 1.5707964`. All
 *   trigonometric methods in Processing require their parameters to be
 *   specified in radians.
 */
quil.core.degrees = (function quil$core$degrees(radians){
return quil.sketch.current_applet.call(null).degrees(radians);
});
/**
 * Adds a directional light. Directional light comes from one
 *   direction and is stronger when hitting a surface squarely and weaker
 *   if it hits at a gentle angle. After hitting a surface, a
 *   directional lights scatters in all directions. Lights need to be
 *   included in the `draw` function to remain persistent in a looping
 *   program. Placing them in the `setup` function of a looping program will cause
 *   them to only have an effect the first time through the loop. The
 *   affect of the `r`, `g`, and `b` parameters is determined by the current
 *   color mode. The `nx`, `ny`, and `nz` parameters specify the direction the
 *   light is facing. For example, setting `ny` to -1 will cause the
 *   geometry to be lit from below (the light is facing directly upward).
 */
quil.core.directional_light = (function quil$core$directional_light(r,g,b,nx,ny,nz){
return quil.core.current_graphics.call(null).directionalLight(r,g,b,nx,ny,nz);
});
/**
 * Calculates the distance between two points.
 */
quil.core.dist = (function quil$core$dist(var_args){
var G__881 = arguments.length;
switch (G__881) {
case 4:
return quil.core.dist.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return quil.core.dist.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.dist.cljs$core$IFn$_invoke$arity$4 = (function (x1,y1,x2,y2){
return quil.sketch.current_applet.call(null).dist(x1,y1,x2,y2);
}));

(quil.core.dist.cljs$core$IFn$_invoke$arity$6 = (function (x1,y1,z1,x2,y2,z2){
return quil.sketch.current_applet.call(null).dist(x1,y1,z1,x2,y2,z2);
}));

(quil.core.dist.cljs$lang$maxFixedArity = 6);

var ret__5781__auto___888 = (function (){
/**
 * Macro for drawing on graphics which saves result in the file at the end.
 *   Similar to [[with-graphics]] macro. [[do-record]] assumed to be used
 *   with `:pdf` graphics.
 * 
 *   Example:
 *   ```
 *   (q/do-record (q/create-graphics 200 200 :pdf "output.pdf")
 *  (q/fill 250 0 0)
 *  (q/ellipse 100 100 150 150))
 *   ```
 */
quil.core.do_record = (function quil$core$do_record(var_args){
var args__5732__auto__ = [];
var len__5726__auto___889 = arguments.length;
var i__5727__auto___890 = (0);
while(true){
if((i__5727__auto___890 < len__5726__auto___889)){
args__5732__auto__.push((arguments[i__5727__auto___890]));

var G__891 = (i__5727__auto___890 + (1));
i__5727__auto___890 = G__891;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return quil.core.do_record.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(quil.core.do_record.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,graphics,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"gr__883__auto__","gr__883__auto__",-444224506,null),null,(1),null)),(new cljs.core.List(null,graphics,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("quil.core","with-graphics","quil.core/with-graphics",481277883,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"gr__883__auto__","gr__883__auto__",-444224506,null),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".dispose",".dispose",-1697594101,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"gr__883__auto__","gr__883__auto__",-444224506,null),null,(1),null))))),null,(1),null)))));
}));

(quil.core.do_record.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(quil.core.do_record.cljs$lang$applyTo = (function (seq884){
var G__885 = cljs.core.first.call(null,seq884);
var seq884__$1 = cljs.core.next.call(null,seq884);
var G__886 = cljs.core.first.call(null,seq884__$1);
var seq884__$2 = cljs.core.next.call(null,seq884__$1);
var G__887 = cljs.core.first.call(null,seq884__$2);
var seq884__$3 = cljs.core.next.call(null,seq884__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__885,G__886,G__887,seq884__$3);
}));

return null;
})()
;
(quil.core.do_record.cljs$lang$macro = true);

/**
 * Draws an ellipse (oval) in the display window. An ellipse with an
 *   equal `width` and `height` is a circle. The origin may be changed with
 *   the [[ellipse-mode]] function.
 */
quil.core.ellipse = (function quil$core$ellipse(x,y,width,height){
return quil.core.current_graphics.call(null).ellipse(x,y,width,height);
});
/**
 * Modifies the origin of the ellipse according to the specified `mode`:
 * 
 * * `:center`  - specifies the location of the ellipse as
 *                the center of the shape **(default)**.
 * * `:radius`  - similar to center, but the width and height parameters to
 *                ellipse specify the radius of the ellipse, rather than the
 *                diameter.
 * * `:corner`  - draws the shape from the upper-left corner of its bounding
 *                box.
 * * `:corners` - uses the four parameters to ellipse to set two opposing
 *                corners of the ellipse's bounding box.
 */
quil.core.ellipse_mode = (function quil$core$ellipse_mode(mode){
var mode__$1 = quil.util.resolve_constant_key.call(null,mode,quil.core.ellipse_modes);
return quil.core.current_graphics.call(null).ellipseMode(mode__$1);
});
/**
 * Draws an ellipsoid with given radius
 * 
 *    Optional parameters:
 *      * `detail-x` - number of segments, the more segments the smoother geometry default is 24
 *      * `detail-y` - number of segments, the more segments the smoother geometry default is 16
 */
quil.core.ellipsoid = (function quil$core$ellipsoid(var_args){
var G__893 = arguments.length;
switch (G__893) {
case 3:
return quil.core.ellipsoid.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quil.core.ellipsoid.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return quil.core.ellipsoid.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.ellipsoid.cljs$core$IFn$_invoke$arity$3 = (function (radius_x,radius_y,radius_z){
return quil.core.current_graphics.call(null).ellipsoid(radius_x,radius_y,radius_z);
}));

(quil.core.ellipsoid.cljs$core$IFn$_invoke$arity$4 = (function (radius_x,radius_y,radius_z,detail_x){
return quil.core.current_graphics.call(null).ellipsoid(radius_x,radius_y,radius_z,(detail_x | (0)));
}));

(quil.core.ellipsoid.cljs$core$IFn$_invoke$arity$5 = (function (radius_x,radius_y,radius_z,detail_x,detail_y){
return quil.core.current_graphics.call(null).ellipsoid(radius_x,radius_y,radius_z,(detail_x | (0)),detail_y.call(null));
}));

(quil.core.ellipsoid.cljs$lang$maxFixedArity = 5);

/**
 * Use the [[begin-contour]] and [[end-contour]] function to create
 *   negative shapes within shapes. These functions can only be within a
 *   [[begin-shape]]/[[end-shape]] pair and they only work with the
 *   `:p2d` and `:p3d` renderers.
 */
quil.core.end_contour = (function quil$core$end_contour(){
return quil.core.current_graphics.call(null).endContour();
});
/**
 * May only be called after [[begin-shape]]. When [[end-shape]] is called,
 *   all of image data defined since the previous call to [[begin-shape]] is
 *   written into the image buffer. The keyword `:close` may be passed to
 *   close the shape (to connect the beginning and the end).
 */
quil.core.end_shape = (function quil$core$end_shape(var_args){
var G__896 = arguments.length;
switch (G__896) {
case 0:
return quil.core.end_shape.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return quil.core.end_shape.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.end_shape.cljs$core$IFn$_invoke$arity$0 = (function (){
return quil.core.current_graphics.call(null).endShape();
}));

(quil.core.end_shape.cljs$core$IFn$_invoke$arity$1 = (function (mode){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"close","close",1835149582),mode)){
} else {
}

return quil.core.current_graphics.call(null).endShape((p5.prototype["CLOSE"]));
}));

(quil.core.end_shape.cljs$lang$maxFixedArity = 1);

/**
 * Quits/stops/exits the program. Rather than terminating
 *   immediately, [[exit]] will cause the sketch to exit after `draw` has
 *   completed (or after `setup` completes if called during the `setup`
 *   method). 
 */
quil.core.exit = (function quil$core$exit(){
return quil.sketch.current_applet.call(null).remove();
});
/**
 * Returns Euler's number `e` (2.71828...) raised to the power of the
 *   `val` parameter.
 */
quil.core.exp = (function quil$core$exp(val){
return quil.sketch.current_applet.call(null).exp(val);
});
/**
 * Save current fill color vector in the internal state. It can be accessed using [[current-fill]] function.
 */
quil.core.save_current_fill = (function quil$core$save_current_fill(color){
return cljs.core.swap_BANG_.call(null,quil.core.internal_state.call(null),cljs.core.assoc,new cljs.core.Keyword(null,"current-fill","current-fill",1421462292),color);
});
/**
 * Sets the color used to fill shapes. For example, if you run `(fill 204 102 0)`,
 *   all subsequent shapes will be filled with orange.  This function casts all
 *   input as a `float`. If nil is passed it removes any fill color; equivalent to
 *   calling [[no-fill]].
 */
quil.core.fill = (function quil$core$fill(var_args){
var G__899 = arguments.length;
switch (G__899) {
case 1:
return quil.core.fill.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.fill.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.core.fill.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quil.core.fill.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.fill.cljs$core$IFn$_invoke$arity$1 = (function (gray){
if(cljs.core.vector_QMARK_.call(null,gray)){
return cljs.core.apply.call(null,quil.core.fill,gray);
} else {
if((gray == null)){
return quil.core.no_fill.call(null);
} else {
quil.core.current_graphics.call(null).fill(quil.core.cast_color.call(null,gray));

return quil.core.save_current_fill.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gray], null));

}
}
}));

(quil.core.fill.cljs$core$IFn$_invoke$arity$2 = (function (gray,alpha){
quil.core.current_graphics.call(null).fill(quil.core.cast_color.call(null,gray),alpha);

return quil.core.save_current_fill.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gray,alpha], null));
}));

(quil.core.fill.cljs$core$IFn$_invoke$arity$3 = (function (r,g,b){
quil.core.current_graphics.call(null).fill(r,g,b);

return quil.core.save_current_fill.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
}));

(quil.core.fill.cljs$core$IFn$_invoke$arity$4 = (function (r,g,b,alpha){
quil.core.current_graphics.call(null).fill(r,g,b,alpha);

return quil.core.save_current_fill.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b,alpha], null));
}));

(quil.core.fill.cljs$lang$maxFixedArity = 4);

/**
 * This function returns the number 2 if the screen is a high-density
 *   screen (called a Retina display on OS X or high-dpi on Windows and
 *   Linux) and a 1 if not. This information is useful for a program to
 *   adapt to run at double the pixel density on a screen that supports
 *   it. Can be used in conjunction with [[pixel-density]].
 */
quil.core.display_density = (function quil$core$display_density(var_args){
var G__902 = arguments.length;
switch (G__902) {
case 0:
return quil.core.display_density.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return quil.core.display_density.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.display_density.cljs$core$IFn$_invoke$arity$0 = (function (){
return quil.sketch.current_applet.call(null).displayDensity();
}));

(quil.core.display_density.cljs$core$IFn$_invoke$arity$1 = (function (display){
return quil.sketch.current_applet.call(null).displayDensity(display);
}));

(quil.core.display_density.cljs$lang$maxFixedArity = 1);

/**
 * Originally named filter in Processing Language.
 *   Filters the display window with the specified mode and level.
 *   Level defines the quality of the filter and mode may be one of the
 *   following keywords:
 * 
 *   * `:threshold` - converts the image to black and white pixels depending
 *                 if they are above or below the threshold defined by
 *                 the level parameter. The level must be between
 *                 0.0 (black) and 1.0 (white). If no level is specified,
 *                 0.5 is used.
 *   * `:gray`      - converts any colors in the image to grayscale
 *                 equivalents. Doesn't work with level.
 *   * `:invert`    - sets each pixel to its inverse value. Doesn't work with
 *                 level.
 *   * `:posterize` - limits each channel of the image to the number of
 *                 colors specified as the level parameter. The parameter can
 *                 be set to values between 2 and 255, but results are most
 *                 noticeable in the lower ranges.
 *   * `:blur`      - executes a Gaussian blur with the level parameter
 *                 specifying the extent of the blurring. If no level
 *                 parameter is used, the blur is equivalent to Gaussian
 *                 blur of radius 1.
 *   * `:opaque`    - sets the alpha channel to entirely opaque. Doesn't work
 *                 with level.
 *   * `:erode`     - reduces the light areas. Doesn't work with level.
 *   * `:dilate`    - increases the light areas. Doesn't work with level.
 */
quil.core.display_filter = (function quil$core$display_filter(var_args){
var G__905 = arguments.length;
switch (G__905) {
case 1:
return quil.core.display_filter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.display_filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.display_filter.cljs$core$IFn$_invoke$arity$1 = (function (mode){
return quil.core.current_graphics.call(null).filter((quil.util.resolve_constant_key.call(null,mode,quil.core.filter_modes) | (0)));
}));

(quil.core.display_filter.cljs$core$IFn$_invoke$arity$2 = (function (mode,level){
var mode__$1 = (quil.util.resolve_constant_key.call(null,mode,quil.core.filter_modes) | (0));
return quil.core.current_graphics.call(null).filter(mode__$1,level);
}));

(quil.core.display_filter.cljs$lang$maxFixedArity = 2);

/**
 * Calculates the closest `int` value that is less than or equal to the
 *   value of the parameter. For example, `(floor 9.03)` returns the value 9.
 */
quil.core.floor = (function quil$core$floor(n){
return quil.sketch.current_applet.call(null).floor(n);
});
/**
 * Returns `true` if the applet has focus, `false` otherwise.
 */
quil.core.focused = (function quil$core$focused(){
return quil.sketch.current_applet.call(null).focused;
});
/**
 * Returns the fractional component of a number.
 */
quil.core.fract = (function quil$core$fract(n){
return quil.sketch.current_applet.call(null).fract(n);
});
/**
 * The system variable frameCount contains the number of frames
 *   displayed since the program started. Inside setup() the value is 0
 *   and after the first iteration of draw it is 1, etc.
 */
quil.core.frame_count = (function quil$core$frame_count(){
return quil.sketch.current_applet.call(null).frameCount;
});
/**
 * Returns the current framerate
 */
quil.core.current_frame_rate = (function quil$core$current_frame_rate(){
return quil.sketch.current_applet.call(null).frameRate();
});
/**
 * Returns whether the sketch is looping.
 */
quil.core.looping_QMARK_ = (function quil$core$looping_QMARK_(){
return new cljs.core.Keyword(null,"looping?","looping?",78344245).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quil.core.internal_state.call(null)));
});
/**
 * Specifies a new target framerate (number of frames to be displayed every
 *   second). If the processor is not fast enough to maintain the
 *   specified rate, it will not be achieved. For example, the function
 *   call `(frame-rate 30)` will attempt to refresh 30 times a second. It
 *   is recommended to set the frame rate within setup. The default rate
 *   is 60 frames per second.
 */
quil.core.frame_rate = (function quil$core$frame_rate(new_rate){
cljs.core.swap_BANG_.call(null,quil.core.internal_state.call(null),cljs.core.assoc,new cljs.core.Keyword(null,"frame-rate","frame-rate",-994918942),new_rate);

return quil.sketch.current_applet.call(null).frameRate(new_rate);
});
/**
 * Reads the color of any pixel or grabs a section of an image. If no
 *   parameters are specified, a copy of entire image is returned. Get the
 *   value of one pixel by specifying an `x`,`y` coordinate. Get a section of
 *   the image by specifying an additional `width` and `height` parameter.
 *   If the pixel requested is outside of the image window, black is returned.
 *   The numbers returned are scaled according to the current color ranges,
 *   but only RGB values are returned by this function. For example, even though
 *   you may have drawn a shape with `(color-mode :hsb)`, the numbers returned
 *   will be in RGB.
 * 
 *   Getting the color of a single pixel with `(get x y)` is easy, but not
 *   as fast as grabbing the data directly using the [[pixels]] function.
 * 
 *   If no `img` specified - [[current-graphics]] is used.
 */
quil.core.get_pixel = (function quil$core$get_pixel(var_args){
var G__908 = arguments.length;
switch (G__908) {
case 0:
return quil.core.get_pixel.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return quil.core.get_pixel.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.get_pixel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.core.get_pixel.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quil.core.get_pixel.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return quil.core.get_pixel.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.get_pixel.cljs$core$IFn$_invoke$arity$0 = (function (){
return quil.core.get_pixel.call(null,quil.core.current_graphics.call(null));
}));

(quil.core.get_pixel.cljs$core$IFn$_invoke$arity$1 = (function (img){
return img.get();
}));

(quil.core.get_pixel.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return quil.core.get_pixel.call(null,quil.core.current_graphics.call(null),x,y);
}));

(quil.core.get_pixel.cljs$core$IFn$_invoke$arity$3 = (function (img,x,y){
return img.get((x | (0)),(y | (0)));
}));

(quil.core.get_pixel.cljs$core$IFn$_invoke$arity$4 = (function (x,y,w,h){
return quil.core.get_pixel.call(null,quil.core.current_graphics.call(null),x,y,w,h);
}));

(quil.core.get_pixel.cljs$core$IFn$_invoke$arity$5 = (function (img,x,y,w,h){
return img.get((x | (0)),(y | (0)),(w | (0)),(h | (0)));
}));

(quil.core.get_pixel.cljs$lang$maxFixedArity = 5);

/**
 * Extracts the green value from a color, scaled to match current
 *   [[color-mode]]. This value is always returned as a `float` so be careful
 *   not to assign it to an `int` value.
 */
quil.core.green = (function quil$core$green(col){
return quil.core.current_graphics.call(null).green(quil.util.clj_unchecked_int.call(null,col));
});
/**
 * Converts a byte, char, int, or color to a String containing the
 *   equivalent hexadecimal notation. For example color(0, 102, 153) will
 *   convert to the String "FF006699". This function can help make your
 *   geeky debugging sessions much happier.
 */
quil.core.hex = (function quil$core$hex(var_args){
var G__911 = arguments.length;
switch (G__911) {
case 1:
return quil.core.hex.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.hex.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.hex.cljs$core$IFn$_invoke$arity$1 = (function (val){
return quil.sketch.current_applet.call(null).hex(val);
}));

(quil.core.hex.cljs$core$IFn$_invoke$arity$2 = (function (val,num_digits){
return quil.sketch.current_applet.call(null).hex(val,num_digits);
}));

(quil.core.hex.cljs$lang$maxFixedArity = 2);

/**
 * Height of the display window. The value of height is zero until
 *   size is called.
 */
quil.core.height = (function quil$core$height(){
return quil.sketch.current_applet.call(null).height;
});
/**
 * Returns the current hour as a value from 0 - 23.
 */
quil.core.hour = (function quil$core$hour(){
return quil.sketch.current_applet.call(null).hour();
});
/**
 * Extracts the hue value from a color.
 */
quil.core.hue = (function quil$core$hue(col){
return quil.core.current_graphics.call(null).hue(quil.util.clj_unchecked_int.call(null,col));
});
/**
 * Displays images to the screen. Processing currently works with `GIF`,
 *   `JPEG`, and `Targa` images. The color of an image may be modified with
 *   the [[tint]] function and if a `GIF` has transparency, it will maintain
 *   its transparency. The `img` parameter specifies the image to display
 *   and the `x` and `y` parameters define the location of the image from its
 *   upper-left corner. The image is displayed at its original size
 *   unless the `width` and `height` parameters specify a different size. The
 *   [[image-mode]] function changes the way the parameters work. A call to
 *   `(image-mode :corners)` will change the `width` and `height` parameters to
 * define the x and y values of the opposite corner of the image.
 */
quil.core.image = (function quil$core$image(var_args){
var G__914 = arguments.length;
switch (G__914) {
case 3:
return quil.core.image.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return quil.core.image.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.image.cljs$core$IFn$_invoke$arity$3 = (function (img,x,y){
return quil.core.current_graphics.call(null).image(img,x,y);
}));

(quil.core.image.cljs$core$IFn$_invoke$arity$5 = (function (img,x,y,width,height){
return quil.core.current_graphics.call(null).image(img,x,y,width,height);
}));

(quil.core.image.cljs$lang$maxFixedArity = 5);

/**
 * Originally named filter in Processing Language.
 *   Filters given image with the specified `mode` and `level`.
 *   `level` defines the quality of the filter and `mode` may be one of
 *   the following keywords:
 * 
 *   * `:threshold` - converts the image to black and white pixels depending
 *                 if they are above or below the threshold defined by
 *                 the level parameter. The level must be between
 *                 0.0 (black) and 1.0 (white). If no level is specified,
 *                 0.5 is used.
 *   * `:gray`      - converts any colors in the image to grayscale
 *                 equivalents. Doesn't work with level.
 *   * `:invert`    - sets each pixel to its inverse value. Doesn't work with
 *                 level.
 *   * `:posterize` - limits each channel of the image to the number of
 *                 colors specified as the level parameter. The parameter can
 *                 be set to values between 2 and 255, but results are most
 *                 noticeable in the lower ranges.
 *   * `:blur`      - executes a Gaussian blur with the `level` parameter
 *                 specifying the extent of the blurring. If no level
 *                 parameter is used, the blur is equivalent to Gaussian
 *                 blur of radius 1.
 *   * `:opaque`    - sets the alpha channel to entirely opaque. Doesn't work
 *                 with level.
 *   * `:erode`     - reduces the light areas. Doesn't work with `level`.
 *   * `:dilate`    - increases the light areas. Doesn't work with `level`.
 */
quil.core.image_filter = (function quil$core$image_filter(var_args){
var G__917 = arguments.length;
switch (G__917) {
case 2:
return quil.core.image_filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.core.image_filter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.image_filter.cljs$core$IFn$_invoke$arity$2 = (function (img,mode){
var mode__$1 = quil.util.resolve_constant_key.call(null,mode,quil.core.filter_modes);
return img.filter(mode__$1);
}));

(quil.core.image_filter.cljs$core$IFn$_invoke$arity$3 = (function (img,mode,level){
var mode__$1 = quil.util.resolve_constant_key.call(null,mode,quil.core.filter_modes);
return img.filter(mode__$1,level);
}));

(quil.core.image_filter.cljs$lang$maxFixedArity = 3);

/**
 * Modifies the location from which images draw. The default `mode` is `:corner`.
 * Available modes are:
 * 
 *   * `:corner`  - specifies the location to be the upper left corner and
 *               uses the fourth and fifth parameters of [[image]] to set the
 *               image's width and height.
 *   * `:corners` - uses the second and third parameters of [[image]] to set the
 *               location of one corner of the image and uses the fourth
 *                and fifth parameters to set the opposite corner.
 *   * `:center`  - draw images centered at the given x and y position.
 */
quil.core.image_mode = (function quil$core$image_mode(mode){
var mode__$1 = quil.util.resolve_constant_key.call(null,mode,quil.core.image_modes);
return quil.core.current_graphics.call(null).imageMode(mode__$1);
});
/**
 * The variable keyCode is used to detect special keys such as the UP,
 *   DOWN, LEFT, RIGHT arrow keys and ALT, CONTROL, SHIFT. When checking
 *   for these keys, it's first necessary to check and see if the key is
 *   coded. This is done with the conditional `(= (key) CODED)`.
 * 
 *   The keys included in the ASCII specification (BACKSPACE, TAB, ENTER,
 *   RETURN, ESC, and DELETE) do not require checking to see if they key
 *   is coded, and you should simply use the key variable instead of
 *   [[key-code]]. If you're making cross-platform projects, note that the
 *   ENTER key is commonly used on PCs and Unix and the RETURN key is
 *   used instead on Macintosh. Check for both ENTER and RETURN to make
 *   sure your program will work for all platforms.
 * 
 *   For users familiar with Java, the values for UP and DOWN are simply
 *   shorter versions of Java's `KeyEvent.VK_UP` and
 *   `KeyEvent.VK_DOWN`. Other keyCode values can be found in the Java
 *   KeyEvent reference.
 */
quil.core.key_code = (function quil$core$key_code(){
return quil.sketch.current_applet.call(null).keyCode;
});
/**
 * true if any key is currently pressed, false otherwise.
 */
quil.core.key_pressed_QMARK_ = (function quil$core$key_pressed_QMARK_(){
return quil.sketch.current_applet.call(null).keyIsPressed;
});
/**
 * Extracts the HSL lightness value from a color or pixel array.
 */
quil.core.lightness = (function quil$core$lightness(c){
return quil.core.current_graphics.call(null).lightness(c);
});
/**
 * Sets the falloff rates for point lights, spot lights, and ambient
 *   lights. The parameters are used to determine the falloff with the
 *   following equation:
 * 
 *   d = distance from light position to vertex position
 *   falloff = 1 / (CONSTANT + d * LINEAR + (d*d) * QUADRATIC)
 * 
 *   Like fill, it affects only the elements which are created after it
 *   in the code. The default value is `(light-falloff 1.0 0.0 0.0)`.
 *   Thinking about an ambient light with a falloff can be tricky. It is
 *   used, for example, if you wanted a region of your scene to be lit
 *   ambiently by one color and another region to be lit ambiently by
 *   another color, you would use an ambient light with location and
 *   falloff. You can think of it as a point light that doesn't care
 *   which direction a surface it is facing.
 */
quil.core.light_falloff = (function quil$core$light_falloff(constant,linear,quadratic){
return quil.core.current_graphics.call(null).lightFalloff(constant,linear,quadratic);
});
/**
 * Calculates a color or colors between two color at a specific
 *   increment. The `amt` parameter is the amount to interpolate between
 *   the two values where 0.0 equal to the first point, 0.1 is very near
 *   the first point, 0.5 is half-way in between, etc.
 */
quil.core.lerp_color = (function quil$core$lerp_color(c1,c2,amt){
return quil.core.current_graphics.call(null).lerpColor(quil.util.clj_unchecked_int.call(null,c1),quil.util.clj_unchecked_int.call(null,c2),amt);
});
/**
 * Calculates a number between two numbers at a specific
 *   increment. The `amt` parameter is the amount to interpolate between
 *   the two values where 0.0 equal to the first point, 0.1 is very near
 *   the first point, 0.5 is half-way in between, etc. The lerp function
 *   is convenient for creating motion along a straight path and for
 *   drawing dotted lines.
 */
quil.core.lerp = (function quil$core$lerp(start,stop,amt){
return quil.sketch.current_applet.call(null).lerp(start,stop,amt);
});
/**
 * Sets the default ambient light, directional light, falloff, and
 *   specular values. The defaults are:
 * 
 *   `(ambient-light 128 128 128)`
 *   `(directional-light 128 128 128 0 0 -1)`
 *   `(light-falloff 1 0 0)`
 *   `(light-specular 0 0 0)`.
 * 
 *   Lights need to be included in the draw to remain persistent in a
 *   looping program. Placing them in the setup of a looping program
 *   will cause them to only have an effect the first time through the
 *   loop.
 */
quil.core.lights = (function quil$core$lights(){
return quil.core.current_graphics.call(null).lights();
});
/**
 * Draws a line (a direct path between two points) to the screen. The
 *   version of line with four parameters draws the line in 2D. To color
 *   a line, use the [[stroke]] function. A line cannot be filled, therefore
 *   the fill method will not affect the color of a line. 2D lines are
 *   drawn with a width of one pixel by default, but this can be changed
 *   with the [[stroke-weight]] function. The version with six parameters
 *   allows the line to be placed anywhere within XYZ space.
 */
quil.core.line = (function quil$core$line(var_args){
var G__920 = arguments.length;
switch (G__920) {
case 2:
return quil.core.line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return quil.core.line.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return quil.core.line.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.line.cljs$core$IFn$_invoke$arity$2 = (function (p1,p2){
return cljs.core.apply.call(null,quil.core.line,cljs.core.concat.call(null,p1,p2));
}));

(quil.core.line.cljs$core$IFn$_invoke$arity$4 = (function (x1,y1,x2,y2){
return quil.core.current_graphics.call(null).line(x1,y1,x2,y2);
}));

(quil.core.line.cljs$core$IFn$_invoke$arity$6 = (function (x1,y1,z1,x2,y2,z2){
return quil.core.current_graphics.call(null).line(x1,y1,z1,x2,y2,z2);
}));

(quil.core.line.cljs$lang$maxFixedArity = 6);

/**
 * Loads a font into a variable of type `PFont`. To load correctly,
 *   fonts must be located in the data directory of the current sketch.
 *   To create a font to use with Processing use the [[create-font]] function.
 * 
 *   Like [[load-image]] and other methods that load data, the [[load-font]]
 *   function should not be used inside draw, because it will slow down the sketch
 *   considerably, as the font will be re-loaded from the disk (or
 *   network) on each frame.
 * 
 *   For most renderers, Processing displays fonts using the `.vlw` font
 *   format, which uses images for each letter, rather than defining them
 *   through vector data. When hint `:enable-native-fonts` is used with the
 *   JAVA2D renderer, the native version of a font will be used if it is
 *   installed on the user's machine.
 * 
 *   Using [[create-font]] (instead of [[load-font]]) enables vector data to be
 *   used with the JAVA2D (default) renderer setting. This can be helpful
 *   when many font sizes are needed, or when using any renderer based on
 *   JAVA2D, such as the PDF library.
 */
quil.core.load_font = (function quil$core$load_font(filename){
return quil.sketch.current_applet.call(null).loadFont(cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename));
});
/**
 * Loads an image into a variable of type `PImage`. Four types of
 *   images (`.gif`, `.jpg`, `.tga`, `.png`) may be loaded. To load
 *   correctly, images must be located in the data directory of the
 *   current sketch. In most cases, load all images in `setup` to preload
 *   them at the start of the program. Loading images inside `draw` will
 *   reduce the speed of a program.
 * 
 *   The filename parameter can also be a URL to a file found online.
 * 
 *   Image is loaded asynchronously. In order to check whether image
 *   finished loading use [[loaded?]].
 */
quil.core.load_image = (function quil$core$load_image(filename){
return quil.sketch.current_applet.call(null).loadImage(cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename));
});
/**
 * Loads a shader into the `PShader` object for clj and `Shader` object for
 *   cljs. In clj mode shaders are
 *   compatible with the P2D and P3D renderers, but not with the default
 *   renderer. In cljs mode shaders are compatible with the P3D renderer.
 */
quil.core.load_shader = (function quil$core$load_shader(var_args){
var G__923 = arguments.length;
switch (G__923) {
case 1:
return quil.core.load_shader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.load_shader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.load_shader.cljs$core$IFn$_invoke$arity$1 = (function (fragment_filename){
return quil.core.current_graphics.call(null).loadShader(fragment_filename);
}));

(quil.core.load_shader.cljs$core$IFn$_invoke$arity$2 = (function (fragment_filename,vertex_filename){
return quil.core.current_graphics.call(null).loadShader(vertex_filename,fragment_filename);
}));

(quil.core.load_shader.cljs$lang$maxFixedArity = 2);

/**
 * Load a geometry from a file as a `PShape` in clj, and a `Geometry`
 *   in cljs.
 */
quil.core.load_shape = (function quil$core$load_shape(filename){
return quil.sketch.current_applet.call(null).loadModel(filename);
});
/**
 * Returns true if object is loaded.
 */
quil.core.loaded_QMARK_ = (function quil$core$loaded_QMARK_(object){
var pred__925 = cljs.core._EQ_;
var expr__926 = cljs.core.type.call(null,object);
if(cljs.core.truth_(pred__925.call(null,p5.Shader,expr__926))){
var and__5000__auto__ = (object["_vertSrc"]);
if(cljs.core.truth_(and__5000__auto__)){
return (object["_fragSrc"]);
} else {
return and__5000__auto__;
}
} else {
if(cljs.core.truth_(pred__925.call(null,p5.Image,expr__926))){
return (object.width > (0));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__926)].join('')));
}
}
});
/**
 * Calculates the natural logarithm (the base-e logarithm) of a
 *   number. This function expects the values greater than 0.0.
 */
quil.core.log = (function quil$core$log(val){
return quil.sketch.current_applet.call(null).log(val);
});
/**
 * Calculates the magnitude (or length) of a vector. A vector is a
 *   direction in space commonly used in computer graphics and linear
 *   algebra. Because it has no start position, the magnitude of a vector
 *   can be thought of as the distance from coordinate `(0,0)` to its `(x,y)`
 *   value. Therefore, [[mag]] is a shortcut for writing `(dist 0 0 x y)`.
 */
quil.core.mag = (function quil$core$mag(a,b){
return quil.sketch.current_applet.call(null).mag(a,b);
});
/**
 * Re-maps a number from one range to another.
 * 
 *   Numbers outside the range are not clamped to 0 and 1, because
 *   out-of-range values are often intentional and useful.
 */
quil.core.map_range = (function quil$core$map_range(val,low1,high1,low2,high2){
return quil.sketch.current_applet.call(null).map(val,low1,high1,low2,high2);
});
/**
 * Masks part of an image from displaying by loading another image and
 *   using it as an alpha channel. This mask image should only contain
 *   grayscale data. The mask image needs to be the same size as the image
 *   to which it is applied.
 * 
 *   If single argument function is used - masked image is sketch itself
 *   or graphics if used inside [[with-graphics]] macro. If you're passing
 *   graphics to this function - it works only with `:p3d` and `:opengl` renderers.
 * 
 *   This method is useful for creating dynamically generated alpha
 *   masks.
 */
quil.core.mask_image = (function quil$core$mask_image(var_args){
var G__929 = arguments.length;
switch (G__929) {
case 1:
return quil.core.mask_image.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.mask_image.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.mask_image.cljs$core$IFn$_invoke$arity$1 = (function (mask){
return quil.core.mask_image.call(null,quil.core.current_graphics.call(null),mask);
}));

(quil.core.mask_image.cljs$core$IFn$_invoke$arity$2 = (function (img,mask){
return img.mask(mask);
}));

(quil.core.mask_image.cljs$lang$maxFixedArity = 2);

/**
 * Returns the number of milliseconds (thousandths of a second) since
 *   starting the sketch. This information is often used for timing
 *   animation sequences.
 */
quil.core.millis = (function quil$core$millis(){
return quil.sketch.current_applet.call(null).millis();
});
/**
 * Returns the current minute as a value from 0 - 59
 */
quil.core.minute = (function quil$core$minute(){
return quil.sketch.current_applet.call(null).minute();
});
/**
 * Returns the current month as a value from 1 - 12.
 */
quil.core.month = (function quil$core$month(){
return quil.sketch.current_applet.call(null).month();
});
/**
 * The value of the system variable mouseButton is either `:left`, `:right`,
 *   or `:center` depending on which button is pressed. `nil` if no button pressed
 */
quil.core.mouse_button = (function quil$core$mouse_button(){
var button_code = quil.sketch.current_applet.call(null).mouseButton;
var pred__931 = cljs.core._EQ_;
var expr__932 = button_code;
if(cljs.core.truth_(pred__931.call(null,(p5.prototype["LEFT"]),expr__932))){
return new cljs.core.Keyword(null,"left","left",-399115937);
} else {
if(cljs.core.truth_(pred__931.call(null,(p5.prototype["RIGHT"]),expr__932))){
return new cljs.core.Keyword(null,"right","right",-452581833);
} else {
if(cljs.core.truth_(pred__931.call(null,(p5.prototype["CENTER"]),expr__932))){
return new cljs.core.Keyword(null,"center","center",-748944368);
} else {
return null;
}
}
}
});
/**
 * true if a mouse button is pressed, false otherwise.
 */
quil.core.mouse_pressed_QMARK_ = (function quil$core$mouse_pressed_QMARK_(){
return quil.sketch.current_applet.call(null).mouseIsPressed;
});
/**
 * Current horizontal coordinate of the mouse.
 */
quil.core.mouse_x = (function quil$core$mouse_x(){
return quil.sketch.current_applet.call(null).mouseX;
});
/**
 * Current vertical coordinate of the mouse.
 */
quil.core.mouse_y = (function quil$core$mouse_y(){
return quil.sketch.current_applet.call(null).mouseY;
});
/**
 * Hides the cursor from view. Will not work when running in full
 *   screen (Present) mode.
 */
quil.core.no_cursor = (function quil$core$no_cursor(){
return quil.sketch.current_applet.call(null).noCursor();
});
/**
 * Disables filling geometry. If both [[no-stroke]] and [[no-fill]] are called,
 *   nothing will be drawn to the screen.
 */
quil.core.no_fill = (function quil$core$no_fill(){
quil.core.current_graphics.call(null).noFill();

return cljs.core.swap_BANG_.call(null,quil.core.internal_state.call(null),cljs.core.assoc,new cljs.core.Keyword(null,"current-fill","current-fill",1421462292),null);
});
/**
 * Returns the Perlin noise value at specified coordinates. Perlin
 *   noise is a random sequence generator producing a more natural
 *   ordered, harmonic succession of numbers compared to the standard
 *   random function. It was invented by Ken Perlin in the 1980s and
 *   been used since in graphical applications to produce procedural
 *   textures, natural motion, shapes, terrains etc.
 * 
 *   The main difference to the random function is that Perlin noise is
 *   defined in an infinite n-dimensional space where each pair of
 *   coordinates corresponds to a fixed semi-random value (fixed only for
 *   the lifespan of the program). The resulting value will always be
 *   between 0.0 and 1.0. Processing can compute 1D, 2D and 3D noise,
 *   depending on the number of coordinates given. The noise value can be
 *   animated by moving through the noise space and the 2nd and 3rd
 *   dimensions can also be interpreted as time.
 * 
 *   The actual noise is structured similar to an audio signal, in
 *   respect to the function's use of frequencies. Similar to the concept
 *   of harmonics in physics, perlin noise is computed over several
 *   octaves which are added together for the final result.
 * 
 *   Another way to adjust the character of the resulting sequence is the
 *   scale of the input coordinates. As the function works within an
 *   infinite space the value of the coordinates doesn't matter as such,
 *   only the distance between successive coordinates does (eg. when
 *   using noise within a loop). As a general rule the smaller the
 *   difference between coordinates, the smoother the resulting noise
 *   sequence will be. Steps of 0.005-0.03 work best for most
 *   applications, but this will differ depending on use.
 */
quil.core.noise = (function quil$core$noise(var_args){
var G__935 = arguments.length;
switch (G__935) {
case 1:
return quil.core.noise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.noise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.core.noise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.noise.cljs$core$IFn$_invoke$arity$1 = (function (x){
return quil.sketch.current_applet.call(null).noise(x);
}));

(quil.core.noise.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return quil.sketch.current_applet.call(null).noise(x,y);
}));

(quil.core.noise.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return quil.sketch.current_applet.call(null).noise(x,y,z);
}));

(quil.core.noise.cljs$lang$maxFixedArity = 3);

/**
 * Adjusts the character and level of detail produced by the Perlin
 *   noise function. Similar to harmonics in physics, noise is computed
 *   over several octaves. Lower octaves contribute more to the output
 *   signal and as such define the overall intensity of the noise, whereas
 *   higher octaves create finer grained details in the noise
 *   sequence. By default, noise is computed over 4 octaves with each
 *   octave contributing exactly half than its predecessor, starting at
 *   50% strength for the 1st octave. This falloff amount can be changed
 *   by adding an additional function parameter. Eg. a falloff factor of
 *   0.75 means each octave will now have 75% impact (25% less) of the
 *   previous lower octave. Any value between 0.0 and 1.0 is valid,
 *   however note that values greater than 0.5 might result in greater
 *   than 1.0 values returned by noise.
 * 
 *   By changing these parameters, the signal created by the noise
 *   function can be adapted to fit very specific needs and
 *   characteristics.
 */
quil.core.noise_detail = (function quil$core$noise_detail(var_args){
var G__938 = arguments.length;
switch (G__938) {
case 1:
return quil.core.noise_detail.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.noise_detail.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.noise_detail.cljs$core$IFn$_invoke$arity$1 = (function (octaves){
return quil.sketch.current_applet.call(null).noiseDetail((octaves | (0)));
}));

(quil.core.noise_detail.cljs$core$IFn$_invoke$arity$2 = (function (octaves,falloff){
return quil.sketch.current_applet.call(null).noiseDetail((octaves | (0)),falloff);
}));

(quil.core.noise_detail.cljs$lang$maxFixedArity = 2);

/**
 * Sets the seed value for noise. By default, noise produces different
 *   results each time the program is run. Set the `val` parameter to a
 *   constant to return the same pseudo-random numbers each time the
 *   software is run.
 */
quil.core.noise_seed = (function quil$core$noise_seed(val){
return quil.sketch.current_applet.call(null).noiseSeed(cljs.core.long$.call(null,val));
});
/**
 * Stops Processing from continuously executing the code within
 *   `draw`. If [[start-loop]] is called, the code in `draw` will begin to run
 *   continuously again. If using [[no-loop]] in setup, it should be the last
 *   line inside the block.
 * 
 *   When [[no-loop]] is used, it's not possible to manipulate or access the
 *   screen inside event handling functions such as [[mouse-pressed?]] or
 *   [[key-pressed?]]. Instead, use those functions to call [[redraw]] or
 *   loop which will run `draw`, which can update the screen
 *   properly. This means that when [[no-loop]] has been called, no drawing
 *   can happen, and functions like [[save-frame]] may not be used.
 * 
 *   Note that if the sketch is resized, [[redraw]] will be called to
 *   update the sketch, even after [[no-loop]] has been
 *   specified. Otherwise, the sketch would enter an odd state until
 *   loop was called.
 */
quil.core.no_loop = (function quil$core$no_loop(){
quil.sketch.current_applet.call(null).noLoop();

return cljs.core.swap_BANG_.call(null,quil.core.internal_state.call(null),cljs.core.assoc,new cljs.core.Keyword(null,"looping?","looping?",78344245),false);
});
/**
 * Normalize a value to exist between 0 and 1 (inclusive).
 */
quil.core.norm = (function quil$core$norm(val,start,stop){
return quil.sketch.current_applet.call(null).norm(val,start,stop);
});
/**
 * Draws all geometry with jagged (aliased) edges. Must be called inside
 *   `:settings` handler.
 */
quil.core.no_smooth = (function quil$core$no_smooth(){
return quil.core.current_graphics.call(null).noSmooth();
});
/**
 * Disables drawing the stroke (outline). If both [[no-stroke]] and
 *   [[no-fill]] are called, nothing will be drawn to the screen.
 */
quil.core.no_stroke = (function quil$core$no_stroke(){
quil.core.current_graphics.call(null).noStroke();

return cljs.core.swap_BANG_.call(null,quil.core.internal_state.call(null),cljs.core.assoc,new cljs.core.Keyword(null,"current-stroke","current-stroke",-1338415274),null);
});
/**
 * Removes the current fill value for displaying images and reverts to
 *   displaying images with their original hues.
 */
quil.core.no_tint = (function quil$core$no_tint(){
return quil.core.current_graphics.call(null).noTint();
});
/**
 * Allows the camera to orbit around a target using mouse.
 */
quil.core.orbit_control = (function quil$core$orbit_control(){
return quil.core.current_graphics.call(null).orbitControl();
});
/**
 * Sets an orthographic projection and defines a parallel clipping
 *   volume. All objects with the same dimension appear the same size,
 *   regardless of whether they are near or far from the camera. The
 *   parameters to this function specify the clipping volume where `left`
 *   and `right` are the minimum and maximum x values, `top` and `bottom` are
 *   the minimum and maximum y values, and `near` and `far` are the minimum
 *   and maximum z values. If no parameters are given, the default is
 *   used: `(ortho 0 width 0 height -10 10)`
 */
quil.core.ortho = (function quil$core$ortho(var_args){
var G__941 = arguments.length;
switch (G__941) {
case 0:
return quil.core.ortho.cljs$core$IFn$_invoke$arity$0();

break;
case 4:
return quil.core.ortho.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return quil.core.ortho.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.ortho.cljs$core$IFn$_invoke$arity$0 = (function (){
return quil.core.current_graphics.call(null).ortho();
}));

(quil.core.ortho.cljs$core$IFn$_invoke$arity$4 = (function (left,right,bottom,top){
return quil.core.current_graphics.call(null).ortho(left,right,bottom,top);
}));

(quil.core.ortho.cljs$core$IFn$_invoke$arity$6 = (function (left,right,bottom,top,near,far){
return quil.core.current_graphics.call(null).ortho(left,right,bottom,top,near,far);
}));

(quil.core.ortho.cljs$lang$maxFixedArity = 6);

/**
 * Sets a perspective projection applying foreshortening, making
 *   distant objects appear smaller than closer ones. The parameters
 *   define a viewing volume with the shape of truncated pyramid. Objects
 *   near to the front of the volume appear their actual size, while
 *   farther objects appear smaller. This projection simulates the
 *   perspective of the world more accurately than orthographic
 *   projection. The version of perspective without parameters sets the
 *   default perspective and the version with four parameters allows the
 *   programmer to set the area precisely. The default values are:
 *   `perspective(PI/3.0, width/height, cameraZ/10.0, cameraZ*10.0)` where
 *   `cameraZ` is `((height/2.0) / tan(PI*60.0/360.0))`
 */
quil.core.perspective = (function quil$core$perspective(var_args){
var G__944 = arguments.length;
switch (G__944) {
case 0:
return quil.core.perspective.cljs$core$IFn$_invoke$arity$0();

break;
case 4:
return quil.core.perspective.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.perspective.cljs$core$IFn$_invoke$arity$0 = (function (){
return quil.core.current_graphics.call(null).perspective();
}));

(quil.core.perspective.cljs$core$IFn$_invoke$arity$4 = (function (fovy,aspect,z_near,z_far){
return quil.core.current_graphics.call(null).perspective(fovy,aspect,z_near,z_far);
}));

(quil.core.perspective.cljs$lang$maxFixedArity = 4);

/**
 * It makes it possible for Processing to render using all of the pixels
 *   on high resolutions screens like Apple Retina displays and Windows
 *   High-DPI displays. Possible values 1 or 2. Must be called only from
 *   `:settings` handler. To get density of the current screen you can use
 *   the [[display-density]] function.
 */
quil.core.pixel_density = (function quil$core$pixel_density(density){
return quil.sketch.current_applet.call(null).pixelDensity(density);
});
/**
 * Array containing the values for all the pixels in the display
 *   window or image. This array is therefore the size of the display window. If
 *   this array is modified, the [[update-pixels]] function must be called to
 *   update the changes. Calls `.loadPixels` before obtaining the pixel array.
 */
quil.core.pixels = (function quil$core$pixels(var_args){
var G__947 = arguments.length;
switch (G__947) {
case 0:
return quil.core.pixels.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return quil.core.pixels.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.pixels.cljs$core$IFn$_invoke$arity$0 = (function (){
return quil.core.pixels.call(null,quil.core.current_graphics.call(null));
}));

(quil.core.pixels.cljs$core$IFn$_invoke$arity$1 = (function (img){
img.loadPixels();

return img.pixels;
}));

(quil.core.pixels.cljs$lang$maxFixedArity = 1);

/**
 * Draw a plane with given `width` and `height`.
 */
quil.core.plane = (function quil$core$plane(width,height){
return quil.core.current_graphics.call(null).plane(width,height);
});
/**
 * Horizontal coordinate of the mouse in the previous frame
 */
quil.core.pmouse_x = (function quil$core$pmouse_x(){
return quil.sketch.current_applet.call(null).pmouseX;
});
/**
 * Vertical coordinate of the mouse in the previous frame
 */
quil.core.pmouse_y = (function quil$core$pmouse_y(){
return quil.sketch.current_applet.call(null).pmouseY;
});
/**
 * Draws a point, a coordinate in space at the dimension of one
 *   pixel.
 * 
 *   Parameters:
 *   * `x` - the horizontal value for the point
 *   * `y` - the vertical value for the point
 *   * `z` - the depth value (optional)
 * 
 *   Drawing this shape in 3D using the `z` parameter requires the `:p3d`
 *   or `:opengl` renderer to be used.
 */
quil.core.point = (function quil$core$point(var_args){
var G__950 = arguments.length;
switch (G__950) {
case 2:
return quil.core.point.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.core.point.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.point.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return quil.core.current_graphics.call(null).point(x,y);
}));

(quil.core.point.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return quil.core.current_graphics.call(null).point(x,y,z);
}));

(quil.core.point.cljs$lang$maxFixedArity = 3);

/**
 * Adds a point light. Lights need to be included in the draw() to
 *   remain persistent in a looping program. Placing them in the setup()
 *   of a looping program will cause them to only have an effect the
 *   first time through the loop. The affect of the `r`, `g`, and `b`
 *   parameters is determined by the current [[color-mode]]. The `x`, `y`, and `z`
 *   parameters set the position of the light
 */
quil.core.point_light = (function quil$core$point_light(r,g,b,x,y,z){
return quil.core.current_graphics.call(null).pointLight(r,g,b,x,y,z);
});
/**
 * Pops the current transformation matrix off the matrix
 *   stack. Understanding pushing and popping requires understanding the
 *   concept of a matrix stack. The [[push-matrix]] function saves the current
 *   coordinate system to the stack and [[pop-matrix]] restores the prior
 *   coordinate system. [[push-matrix]] and [[pop-matrix]] are used in conjunction
 *   with the other transformation methods and may be embedded to control
 *   the scope of the transformations.
 */
quil.core.pop_matrix = (function quil$core$pop_matrix(){
return quil.core.current_graphics.call(null).pop();
});
/**
 * Restores the prior settings on the 'style stack'. Used in
 *   conjunction with [[push-style]]. Together they allow you to change the
 *   style settings and later return to what you had. When a new style is
 *   started with [[push-style]], it builds on the current style information.
 *   The [[push-style]] and [[pop-style]] functions can be nested to provide more
 *   control
 */
quil.core.pop_style = (function quil$core$pop_style(){
return quil.core.current_graphics.call(null).pop();
});
/**
 * Facilitates exponential expressions. The [[pow]] function is an
 *   efficient way of multiplying numbers by themselves (or their
 *   reciprocal) in large quantities. For example, `(pow 3 5)` is
 *   equivalent to the expression `(* 3 3 3 3 3)` and `(pow 3 -5)` is
 *   equivalent to `(/ 1 (* 3 3 3 3 3))`.
 */
quil.core.pow = (function quil$core$pow(num,exponent){
return quil.sketch.current_applet.call(null).pow(num,exponent);
});
/**
 * Pushes the current transformation matrix onto the matrix
 *   stack. Understanding [[[push-matrix]] and [[pop-matrix]] requires
 *   understanding the concept of a matrix stack. The [[push-matrix]]
 *   function saves the current coordinate system to the stack and
 *   [[pop-matrix]] restores the prior coordinate system. [[push-matrix]] and
 *   [[pop-matrix]] are used in conjunction with the other transformation
 *   methods and may be embedded to control the scope of the
 *   transformations.
 */
quil.core.push_matrix = (function quil$core$push_matrix(){
return quil.core.current_graphics.call(null).push();
});
/**
 * Saves the current style settings onto a 'style stack'. Use with
 *   [[pop-style]] which restores the prior settings. Note that these
 *   functions are always used together. They allow you to change the
 *   style settings and later return to what you had. When a new style is
 *   started with [[push-style]], it builds on the current style
 *   information. The [[push-style]] and [[pop-style]] functions can be
 *   embedded to provide more control.
 * 
 *   The style information controlled by the following functions are
 *   included in the
 *   style: [[fill]], [[stroke]], [[tint]], [[stroke-weight]],
 *   [[stroke-cap]], [[stroke-join]], [[image-mode]], [[rect-mode]],
 *   [[ellipse-mode]], [[shape-mode]], [[color-mode]], [[text-align]],
 *   [[text-font]], [[text-mode]], [[text-size]], [[text-leading]],
 *   [[emissive]], [[specular]], [[shininess]], and [[ambient]].
 */
quil.core.push_style = (function quil$core$push_style(){
return quil.core.current_graphics.call(null).push();
});
/**
 * A quad is a quadrilateral, a four sided polygon. It is similar to a
 *   rectangle, but the angles between its edges are not constrained to
 *   be ninety degrees. The first pair of parameters `(x1,y1)` sets the
 *   first vertex and the subsequent pairs should proceed clockwise or
 *   counter-clockwise around the defined shape.
 */
quil.core.quad = (function quil$core$quad(x1,y1,x2,y2,x3,y3,x4,y4){
return quil.core.current_graphics.call(null).quad(x1,y1,x2,y2,x3,y3,x4,y4);
});
/**
 * Specifies vertex coordinates for quadratic Bezier curves. Each call to
 *   [[quadratic-vertex]] defines the position of one control points and one
 *   anchor point of a Bezier curve, adding a new segment to a line or shape.
 *   The first time [[quadratic-vertex]] is used within a [[begin-shape]] call, it
 *   must be prefaced with a call to [[vertex]] to set the first anchor point.
 *   This function must be used between [[begin-shape]] and [[end-shape]] and only
 *   when there is no MODE parameter specified to begin-shape. Using the 3D
 *   version requires rendering with `:p3d`.
 */
quil.core.quadratic_vertex = (function quil$core$quadratic_vertex(var_args){
var G__953 = arguments.length;
switch (G__953) {
case 4:
return quil.core.quadratic_vertex.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return quil.core.quadratic_vertex.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.quadratic_vertex.cljs$core$IFn$_invoke$arity$4 = (function (cx,cy,x3,y3){
return quil.core.current_graphics.call(null).quadraticVertex(cx,cy,x3,y3);
}));

(quil.core.quadratic_vertex.cljs$core$IFn$_invoke$arity$6 = (function (cx,cy,cz,x3,y3,z3){
return quil.core.current_graphics.call(null).quadraticVertex(cx,cy,cz,x3,y3,z3);
}));

(quil.core.quadratic_vertex.cljs$lang$maxFixedArity = 6);

/**
 * Converts a `degrees` measurement to its corresponding value in
 *   radians. Radians and degrees are two ways of measuring the same
 *   thing. There are 360 degrees in a circle and `2*PI` radians in a
 *   circle. For example, `90° = PI/2 = 1.5707964`. All
 *   trigonometric methods require their parameters to be specified in
 *   radians.
 */
quil.core.radians = (function quil$core$radians(degrees){
return quil.sketch.current_applet.call(null).radians(degrees);
});
/**
 * Generates random numbers. Each time the random function is called,
 *   it returns an unexpected value within the specified range. If one
 *   parameter is passed to the function it will return a `float` between
 *   zero and the value of the high parameter. The function call `(random
 *   5)` returns values between 0 and 5 (starting at zero, up to but not
 *   including 5). If two parameters are passed, it will return a `float`
 *   with a value between the parameters. The function call
 *   `(random -5 10.2)` returns values starting at -5 up to (but not
 *   including) 10.2.
 */
quil.core.random = (function quil$core$random(var_args){
var G__956 = arguments.length;
switch (G__956) {
case 1:
return quil.core.random.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.random.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.random.cljs$core$IFn$_invoke$arity$1 = (function (max){
return quil.sketch.current_applet.call(null).random(max);
}));

(quil.core.random.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return quil.sketch.current_applet.call(null).random(min,max);
}));

(quil.core.random.cljs$lang$maxFixedArity = 2);

/**
 * Returns a new 2D unit vector with a random direction
 */
quil.core.random_2d = (function quil$core$random_2d(){
var theta = quil.core.random.call(null,quil.core.TWO_PI);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos(theta),Math.sin(theta)], null);
});
/**
 * Returns a new 3D unit vector with a random direction
 */
quil.core.random_3d = (function quil$core$random_3d(){
var theta = quil.core.random.call(null,quil.core.TWO_PI);
var u = quil.core.random.call(null,(-1),(1));
var xy = Math.sqrt(((1) - (u * u)));
var vx = (xy * Math.cos(theta));
var vy = (xy * Math.sin(theta));
var vz = u;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vx,vy,vz], null);
});
/**
 * Returns a `float` from a random series of numbers having a mean of 0 and
 *   standard deviation of 1. Each time the [[random-gaussian]] function is called,
 *   it returns a number fitting a Gaussian, or normal, distribution.
 *   There is theoretically no minimum or maximum value that [[random-gaussian]]
 *   might return. Rather, there is just a very low probability that values far
 *   from the mean will be returned; and a higher probability that numbers near
 *   the mean will be returned.
 */
quil.core.random_gaussian = (function quil$core$random_gaussian(){
return quil.sketch.current_applet.call(null).randomGaussian();
});
/**
 * Sets the seed value for random. By default, random produces
 *   different results each time the program is run. Set the value
 *   parameter to a constant to return the same pseudo-random numbers
 *   each time the software is run.
 */
quil.core.random_seed = (function quil$core$random_seed(w){
return quil.sketch.current_applet.call(null).randomSeed(w);
});
/**
 * Contains the value of the most recent key on the keyboard that was
 *   used (either pressed or released).
 * 
 *   For non-ASCII keys, use [[key-code]]. The keys included in
 *   the ASCII specification (`BACKSPACE`, `TAB`, `ENTER`, `RETURN`, `ESC`, and
 *   `DELETE`) do not require checking to see if the key is coded, and you
 *   should simply use [[raw-key]] instead of [[key-code]]. If you're
 *   making cross-platform projects, note that the `ENTER` key is commonly
 *   used on PCs and Unix and the `RETURN` key is used instead on
 *   Macintosh. Check for both `ENTER` and `RETURN` to make sure your program
 *   will work for all platforms.
 */
quil.core.raw_key = (function quil$core$raw_key(){
return quil.sketch.current_applet.call(null).key;
});
/**
 * Draws a rectangle to the screen. A rectangle is a four-sided shape
 *   with every angle at ninety degrees. By default, the first two
 *   parameters set the location of the upper-left corner, the third
 *   sets the width, and the fourth sets the height. These parameters
 *   may be changed with [[rect-mode]].
 * 
 *   To draw a rounded rectangle, add a fifth parameter, which is used as
 *   the radius value for all four corners. To use a different radius value
 *   for each corner, include eight parameters.
 */
quil.core.rect = (function quil$core$rect(var_args){
var G__959 = arguments.length;
switch (G__959) {
case 4:
return quil.core.rect.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return quil.core.rect.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 8:
return quil.core.rect.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.rect.cljs$core$IFn$_invoke$arity$4 = (function (x,y,width,height){
return quil.core.current_graphics.call(null).rect(x,y,width,height);
}));

(quil.core.rect.cljs$core$IFn$_invoke$arity$5 = (function (x,y,width,height,r){
return quil.core.current_graphics.call(null).rect(x,y,width,height,r);
}));

(quil.core.rect.cljs$core$IFn$_invoke$arity$8 = (function (x,y,width,height,top_left_r,top_right_r,bottom_right_r,bottom_left_r){
return quil.core.current_graphics.call(null).rect(x,y,width,height,top_left_r,top_right_r,bottom_right_r,bottom_left_r);
}));

(quil.core.rect.cljs$lang$maxFixedArity = 8);

/**
 * Modifies the location from which rectangles draw. The default `mode`
 *   is `:corner`. Available modes are:
 * 
 *   * `:corner`  - Specifies the location to be the upper left corner of the
 *               shape and uses the third and fourth parameters of [[rect]] to
 *               specify the width and height.
 *   * `:corners` - Uses the first and second parameters of [[rect]] to set the
 *               location of one corner and uses the third and fourth
 *               parameters to set the opposite corner.
 *   * `:center`  - Draws the image from its center point and uses the third
 *               and fourth parameters of [[rect]] to specify the image's width
 *               and height.
 *   * `:radius`  - Draws the image from its center point and uses the third
 *               and forth parameters of [[rect]] to specify half of the
 *               image's width and height.
 */
quil.core.rect_mode = (function quil$core$rect_mode(mode){
var mode__$1 = quil.util.resolve_constant_key.call(null,mode,quil.core.rect_modes);
return quil.core.current_graphics.call(null).rectMode(mode__$1);
});
/**
 * Prints the provided arguments for the first `n` iterations.
 */
quil.core.print_first_n = (function quil$core$print_first_n(var_args){
var args__5732__auto__ = [];
var len__5726__auto___963 = arguments.length;
var i__5727__auto___964 = (0);
while(true){
if((i__5727__auto___964 < len__5726__auto___963)){
args__5732__auto__.push((arguments[i__5727__auto___964]));

var G__965 = (i__5727__auto___964 + (1));
i__5727__auto___964 = G__965;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return quil.core.print_first_n.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(quil.core.print_first_n.cljs$core$IFn$_invoke$arity$variadic = (function (n,more){
if((quil.core.frame_count.call(null) <= n)){
return cljs.core.apply.call(null,cljs.core.println,more);
} else {
return null;
}
}));

(quil.core.print_first_n.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(quil.core.print_first_n.cljs$lang$applyTo = (function (seq961){
var G__962 = cljs.core.first.call(null,seq961);
var seq961__$1 = cljs.core.next.call(null,seq961);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__962,seq961__$1);
}));

/**
 * Prints the provided arguments every `n` milliseconds.
 */
quil.core.print_every_n_millisec = (function quil$core$print_every_n_millisec(var_args){
var args__5732__auto__ = [];
var len__5726__auto___968 = arguments.length;
var i__5727__auto___969 = (0);
while(true){
if((i__5727__auto___969 < len__5726__auto___968)){
args__5732__auto__.push((arguments[i__5727__auto___969]));

var G__970 = (i__5727__auto___969 + (1));
i__5727__auto___969 = G__970;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return quil.core.print_every_n_millisec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(quil.core.print_every_n_millisec.cljs$core$IFn$_invoke$arity$variadic = (function (n,more){
var elapsed = quil.core.millis.call(null);
var state = quil.core.internal_state.call(null);
if((n < (elapsed - cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"last-time","last-time",-1707132740),(0))))){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"last-time","last-time",-1707132740),elapsed);

return cljs.core.apply.call(null,cljs.core.println,more);
} else {
return null;
}
}));

(quil.core.print_every_n_millisec.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(quil.core.print_every_n_millisec.cljs$lang$applyTo = (function (seq966){
var G__967 = cljs.core.first.call(null,seq966);
var seq966__$1 = cljs.core.next.call(null,seq966);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__967,seq966__$1);
}));

/**
 * Extracts the red value from a color, scaled to match the current
 *   [[color-mode]].
 */
quil.core.red = (function quil$core$red(c){
return quil.core.current_graphics.call(null).red(quil.util.clj_unchecked_int.call(null,c));
});
/**
 * Executes the code within the `draw` function one time (or n times in cljs).
 *   This function allows the program to update the display window only
 *   when necessary, for example when an event registered by [[mouse-pressed?]] or
 *   [[key-pressed?]] occurs.
 * 
 *   In structuring a program, it only makes sense to call [[redraw]]
 *   within events such as [[mouse-pressed?]]. This is because [[redraw]] does
 *   not run draw immediately (it only sets a flag that indicates an
 *   update is needed).
 * 
 *   Calling [[redraw]] within `draw` has no effect because `draw` is
 *   continuously called anyway.
 */
quil.core.redraw = (function quil$core$redraw(var_args){
var G__972 = arguments.length;
switch (G__972) {
case 0:
return quil.core.redraw.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return quil.core.redraw.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.redraw.cljs$core$IFn$_invoke$arity$0 = (function (){
return quil.core.redraw.call(null,(1));
}));

(quil.core.redraw.cljs$core$IFn$_invoke$arity$1 = (function (n){
var applet = quil.sketch._STAR_applet_STAR_;
return Promise.resolve().then((function (){
return applet.redraw(n);
}));
}));

(quil.core.redraw.cljs$lang$maxFixedArity = 1);

/**
 * Replaces the current matrix with the identity matrix. The
 *   equivalent function in OpenGL is `glLoadIdentity()`
 */
quil.core.reset_matrix = (function quil$core$reset_matrix(){
return quil.core.current_graphics.call(null).resetMatrix();
});
/**
 * Resize the image to a new width and height.
 *   To make the image scale proportionally, use 0 as the value for the wide or
 *   high parameter. For instance, to make the width of an image 150 pixels,
 *   and change the height using the same proportion, use `(resize 150 0)`.
 * 
 *   Even though a `PGraphics` is technically a `PImage`, it is not possible
 *   to rescale the image data found in a `PGraphics`.
 *   (It's simply not possible to do this consistently across renderers:
 *   technically infeasible with P3D, or what would it even do with PDF?)
 *   If you want to resize `PGraphics` content, first get a copy of its image data
 *   using the get() method, and call resize() on the `PImage` that is returned.
 */
quil.core.resize = (function quil$core$resize(img,w,h){
return img.resize(w,h);
});
/**
 * Resizes sketch.
 *   Note about ClojureScript version: if the `div` element is resized externally
 *   (for example from js on a page then you still need to call this
 *   method in order to tell Quil that size has changed. Currently there is no
 *   good way to automatically detect that size of the `<div>` element changed.
 */
quil.core.resize_sketch = (function quil$core$resize_sketch(width,height){
return quil.sketch.set_size.call(null,quil.sketch.current_applet.call(null),width,height);
});
/**
 * Rotates a shape the amount specified by the `angle` parameter. Angles
 *   should be specified in radians (values from 0 to TWO-PI) or
 *   converted to radians with the [[radians]] function.
 * 
 *   Objects are always rotated around their relative position to the
 *   origin and positive numbers rotate objects in a clockwise
 *   direction. Transformations apply to everything that happens after
 *   and subsequent calls to the function accumulates the effect. For
 *   example, calling `(rotate HALF-PI)` and then `(rotate HALF-PI)` is the
 *   same as `(rotate PI)`. All transformations are reset when draw begins
 *   again.
 * 
 *   Technically, rotate multiplies the current transformation matrix by
 *   a rotation matrix. This function can be further controlled by the
 *   [[push-matrix]] and [[pop-matrix]] functions.
 * 
 *   When 4 arguments are provided it produces a rotation of `angle` degrees
 *   around the vector `vx` `vy` `vz`. Check examples to better understand.
 *   This rotation follows the right-hand rule, so if the vector x y z points
 *   toward the user, the rotation will be counterclockwise.
 */
quil.core.rotate = (function quil$core$rotate(var_args){
var G__975 = arguments.length;
switch (G__975) {
case 1:
return quil.core.rotate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return quil.core.rotate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.rotate.cljs$core$IFn$_invoke$arity$1 = (function (angle){
return quil.core.current_graphics.call(null).rotate(angle);
}));

(quil.core.rotate.cljs$core$IFn$_invoke$arity$4 = (function (angle,vx,vy,vz){
return quil.core.current_graphics.call(null).rotate(angle,[vx,vy,vz]);
}));

(quil.core.rotate.cljs$lang$maxFixedArity = 4);

/**
 * Rotates a shape around the x-axis the amount specified by the `angle`
 *   parameter. Angles should be specified in radians (values from 0 to
 *   (* PI 2)) or converted to radians with the [[radians]] function. Objects
 *   are always rotated around their relative position to the origin and
 *   positive numbers rotate objects in a counterclockwise
 *   direction. Transformations apply to everything that happens after
 *   and subsequent calls to the function accumulates the effect. For
 *   example, calling `(rotate-x HALF-PI)` and then `(rotate-x HALF-PI)` is
 *   the same as `(rotate-x PI)`. If [[rotate-x]] is called within the draw
 *   function, the transformation is reset when the loop begins again. This
 *   function requires either the `:p3d` or `:opengl` renderer.
 */
quil.core.rotate_x = (function quil$core$rotate_x(angle){
return quil.core.current_graphics.call(null).rotateX(angle);
});
/**
 * Rotates a shape around the y-axis the amount specified by the `angle`
 *   parameter. Angles should be specified in radians (values from 0
 *   to (* PI 2)) or converted to radians with the [[radians]] function.
 *   Objects are always rotated around their relative position to the
 *   origin and positive numbers rotate objects in a counterclockwise
 *   direction. Transformations apply to everything that happens after
 *   and subsequent calls to the function accumulates the effect. For
 *   example, calling `(rotate-y HALF-PI)` and then `(rotate-y HALF-PI)` is
 *   the same as `(rotate-y PI)`. If [[rotate-y]] is called within the draw
 *   function, the transformation is reset when the loop begins again. This
 *   function requires either the `:p3d` or `:opengl` renderer.
 */
quil.core.rotate_y = (function quil$core$rotate_y(angle){
return quil.core.current_graphics.call(null).rotateY(angle);
});
/**
 * Rotates a shape around the z-axis the amount specified by the `angle`
 *   parameter. Angles should be specified in radians (values from 0
 *   to (* PI 2)) or converted to radians with the [[radians]] function.
 *   Objects are always rotated around their relative position to the
 *   origin and positive numbers rotate objects in a counterclockwise
 *   direction. Transformations apply to everything that happens after
 *   and subsequent calls to the function accumulates the effect. For
 *   example, calling `(rotate-z HALF-PI)` and then `(rotate-z HALF-PI)` is
 *   the same as `(rotate-z PI)`. If [[rotate-y]] is called within the draw
 *   function, the transformation is reset when the loop begins again. This
 *   function requires either the `:p3d` or `:opengl` renderer.
 */
quil.core.rotate_z = (function quil$core$rotate_z(angle){
return quil.core.current_graphics.call(null).rotateZ(angle);
});
/**
 * Calculates the integer closest to the value parameter. For example,
 *   `(round 9.2)` returns the value 9.
 */
quil.core.round = (function quil$core$round(val){
return quil.sketch.current_applet.call(null).round(val);
});
/**
 * Extracts the saturation value from a color.
 */
quil.core.saturation = (function quil$core$saturation(c){
return quil.core.current_graphics.call(null).saturation(quil.util.clj_unchecked_int.call(null,c));
});
/**
 * Saves an image from the display window. Images are saved in TIFF,
 *   TARGA, JPEG, and PNG format depending on the extension within the
 *   filename parameter. For example, image.tif will have a TIFF image
 *   and image.png will save a PNG image. If no extension is included in
 *   the filename, the image will save in TIFF format and .tif will be
 *   added to the name. All images saved from the main drawing window
 *   will be opaque. To save images without a background, use
 *   [[create-graphics]].
 */
quil.core.save = (function quil$core$save(filename){
return quil.core.current_graphics.call(null).save(cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename));
});
/**
 * Increases or decreases the size of a shape by expanding and
 *   contracting vertices. Objects always scale from their relative
 *   origin to the coordinate system. Scale values are specified as
 *   decimal percentages. For example, the function call `(scale 2)`
 *   increases the dimension of a shape by 200%. Transformations apply to
 *   everything that happens after and subsequent calls to the function
 *   multiply the effect. For example, calling `(scale 2)` and then
 *   `(scale 1.5)` is the same as `(scale 3)`. If scale is called within
 *   draw, the transformation is reset when the loop begins again. Using
 *   this function with the `sz` parameter requires specifying `:p3d` or `:opengl`
 *   as the renderer. This function can be further controlled by
 *   [[push-matrix]] and [[pop-matrix]].
 */
quil.core.scale = (function quil$core$scale(var_args){
var G__978 = arguments.length;
switch (G__978) {
case 1:
return quil.core.scale.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.scale.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.core.scale.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.scale.cljs$core$IFn$_invoke$arity$1 = (function (s){
return quil.core.current_graphics.call(null).scale(s);
}));

(quil.core.scale.cljs$core$IFn$_invoke$arity$2 = (function (sx,sy){
return quil.core.current_graphics.call(null).scale(sx,sy);
}));

(quil.core.scale.cljs$core$IFn$_invoke$arity$3 = (function (sx,sy,sz){
return quil.core.current_graphics.call(null).scale(sx,sy,sz);
}));

(quil.core.scale.cljs$lang$maxFixedArity = 3);

/**
 * Returns the current second as a value from 0 - 59.
 */
quil.core.seconds = (function quil$core$seconds(){
return quil.sketch.current_applet.call(null).second();
});
/**
 * Changes the color of any pixel in the display window. The `x` and `y`
 *   parameters specify the pixel to change and the `c` parameter
 *   specifies the color value. The color parameter is affected by the
 *   current [[color-mode]] (the default is RGB values from 0 to 255).
 * 
 *   Setting the color of a single pixel with `(set-pixel x y)` is easy, but not
 *   as fast as putting the data directly into [[pixels]].
 * 
 *   This function ignores [[image-mode]].
 * 
 *   Due to what appears to be a bug in Apple's Java implementation, the
 *   [[point]] and [[set-pixel]] methods are extremely slow in some circumstances
 *   when used with the default renderer. Using `:p2d` or `:p3d` will fix the
 *   problem. Grouping many calls to [[point]] or [[set-pixel]] together can also
 *   help. (Bug 1094)
 */
quil.core.set_pixel = (function quil$core$set_pixel(var_args){
var G__981 = arguments.length;
switch (G__981) {
case 3:
return quil.core.set_pixel.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quil.core.set_pixel.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.set_pixel.cljs$core$IFn$_invoke$arity$3 = (function (x,y,c){
return quil.core.set_pixel.call(null,quil.core.current_graphics.call(null),x,y,c);
}));

(quil.core.set_pixel.cljs$core$IFn$_invoke$arity$4 = (function (img,x,y,c){
return img.set((x | (0)),(y | (0)),c);
}));

(quil.core.set_pixel.cljs$lang$maxFixedArity = 4);

/**
 * Writes an image directly into the display window. The `x` and `y`
 *   parameters define the coordinates for the upper-left corner of the
 *   image.
 */
quil.core.set_image = (function quil$core$set_image(x,y,src){
return quil.core.current_graphics.call(null).set((x | (0)),(y | (0)),src);
});
/**
 * Applies the shader specified by the parameters. It's compatible with the `:p2d`
 *   and `:p3d` renderers, but not with the default `:java2d` renderer.
 *   In clj mode you can pass an optional `kind` parameter that specifies
 *   the type of shader, either `:points`, `:lines`, or `:triangles`
 */
quil.core.shader = (function quil$core$shader(shader){
return quil.core.current_graphics.call(null).shader(shader);
});
/**
 * Displays shapes to the screen. The shapes must have been loaded
 *   with [[load-shape]]. Processing currently works with SVG shapes
 *   only. The `sh` parameter specifies the shape to display and the `x` and
 *   `y` parameters define the location of the shape from its upper-left
 *   corner. The shape is displayed at its original size unless the `width`
 *   and `height` parameters specify a different size. The [[shape-mode]]
 *   function changes the way the parameters work. A call to
 *   `(shape-mode :corners)` for example, will change the width and height
 *   parameters to define the x and y values of the opposite corner of
 *   the shape.
 * 
 *   Note complex shapes may draw awkwardly with the renderers `:p2d`, `:p3d`, and
 *   `:opengl`. Those renderers do not yet support shapes that have holes
 *   or complicated breaks.
 */
quil.core.shape = (function quil$core$shape(sh){
return quil.core.current_graphics.call(null).model(sh);
});
/**
 * Shears a shape around the x-axis the amount specified by the `angle`
 *   parameter. Angles should be specified in radians (values from 0 to
 *   PI*2) or converted to radians with the [[radians]] function. Objects
 *   are always sheared around their relative position to the origin and
 *   positive numbers shear objects in a clockwise direction.
 *   Transformations apply to everything that happens after and
 *   subsequent calls to the function accumulates the effect. For
 *   example, calling `(shear-x (/ PI 2))` and then `(shear-x (/ PI 2))` is
 *   the same as `(shear-x PI)`. If [[shear-x]] is called within the draw
 *   function, the transformation is reset when the loop begins again. This
 *   function works in P2D or JAVA2D mode.
 * 
 *   Technically, [[shear-x]] multiplies the current transformation matrix
 *   by a rotation matrix. This function can be further controlled by the
 *   [[push-matrix]] and [[pop-matrix]] functions.
 */
quil.core.shear_x = (function quil$core$shear_x(angle){
return quil.core.current_graphics.call(null).shearX(angle);
});
/**
 * Shears a shape around the y-axis the amount specified by the `angle`
 *   parameter. Angles should be specified in radians (values from 0 to
 *   PI*2) or converted to radians with the [[radians]] function. Objects
 *   are always sheared around their relative position to the origin and
 *   positive numbers shear objects in a clockwise direction.
 *   Transformations apply to everything that happens after and
 *   subsequent calls to the function accumulates the effect. For
 *   example, calling `(shear-y (/ PI 2))` and then `(shear-y (/ PI 2))` is
 *   the same as `(shear-y PI)`. If [[shear-y]] is called within the draw
 *   function, the transformation is reset when the loop begins again. This
 *   function works in P2D or JAVA2D mode.
 * 
 *   Technically, [[shear-y]] multiplies the current transformation matrix
 *   by a rotation matrix. This function can be further controlled by the
 *   [[push-matrix]] and [[pop-matrix]] functions.
 */
quil.core.shear_y = (function quil$core$shear_y(angle){
return quil.core.current_graphics.call(null).shearY(angle);
});
/**
 * Sets the amount of gloss in the surface of shapes. Used in
 *   combination with [[ambient]], [[specular]], and [[emissive]] in setting
 *   the material properties of shapes.
 */
quil.core.shininess = (function quil$core$shininess(shine){
return quil.core.current_graphics.call(null).shininess(shine);
});
/**
 * Calculates the sine of an angle. This function expects the values
 *   of the angle parameter to be provided in radians (values from 0 to
 *   6.28). A `float` within the range -1 to 1 is returned.
 */
quil.core.sin = (function quil$core$sin(angle){
return quil.sketch.current_applet.call(null).sin(angle);
});
/**
 * Draws all geometry with smooth (anti-aliased) edges. This will slow
 *   down the frame rate of the application, but will enhance the visual
 *   refinement.
 * 
 *   Must be called inside `:settings` handler.
 * 
 *   The `level` parameter (int) increases the level of smoothness with the
 *   `:p2d` and `:p3d` renderers. This is the level of over sampling applied to
 *   the graphics buffer. The value `2` will double the rendering size
 *   before scaling it down to the display size. This is called `2x
 *   anti-aliasing`. The value `4` is used for `4x anti-aliasing` and `8` is
 *   specified for `8x anti-aliasing`. If level is set to `0`, it will disable
 *   all smoothing; it's the equivalent of the function [[no-smooth]].
 *   The maximum anti-aliasing level is determined by the hardware of the
 *   machine that is running the software.
 * 
 *   Note that smooth will also improve image quality of resized images.
 */
quil.core.smooth = (function quil$core$smooth(var_args){
var G__984 = arguments.length;
switch (G__984) {
case 0:
return quil.core.smooth.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return quil.core.smooth.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.smooth.cljs$core$IFn$_invoke$arity$0 = (function (){
return quil.core.current_graphics.call(null).smooth();
}));

(quil.core.smooth.cljs$core$IFn$_invoke$arity$1 = (function (level){
return quil.core.current_graphics.call(null).smooth((level | (0)));
}));

(quil.core.smooth.cljs$lang$maxFixedArity = 1);

/**
 * Sets the specular color of the materials used for shapes drawn to
 *   the screen, which sets the color of highlights. Specular refers to
 *   light which bounces off a surface in a preferred direction (rather
 *   than bouncing in all directions like a diffuse light). Used in
 *   combination with [[emissive]], [[ambient]], and [[shininess]] in setting
 *   the material properties of shapes.
 */
quil.core.specular = (function quil$core$specular(var_args){
var G__987 = arguments.length;
switch (G__987) {
case 1:
return quil.core.specular.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return quil.core.specular.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.specular.cljs$core$IFn$_invoke$arity$1 = (function (gray){
return quil.core.current_graphics.call(null).specularMaterial(gray);
}));

(quil.core.specular.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return quil.core.current_graphics.call(null).specularMaterial(x,y,z);
}));

(quil.core.specular.cljs$lang$maxFixedArity = 3);

/**
 * Generates a hollow ball made from tessellated triangles.
 */
quil.core.sphere = (function quil$core$sphere(radius){
return quil.core.current_graphics.call(null).sphere(radius);
});
/**
 * Squares a number (multiplies a number by itself). The result is
 *   always a positive number, as multiplying two negative numbers always
 *   yields a positive result. For example, -1 * -1 = 1.
 */
quil.core.sq = (function quil$core$sq(a){
return quil.sketch.current_applet.call(null).sq(a);
});
/**
 * Calculates the square root of a number. The square root of a number
 *   is always positive, even though there may be a valid negative
 *   root. The square root s of number a is such that (= a (* s s)). It
 *   is the opposite of squaring.
 */
quil.core.sqrt = (function quil$core$sqrt(a){
return quil.sketch.current_applet.call(null).sqrt(a);
});
/**
 * Causes Processing to continuously execute the code within
 *   draw. If [[no-loop]] is called, the code in draw stops executing.
 */
quil.core.start_loop = (function quil$core$start_loop(){
quil.sketch.current_applet.call(null).loop();

return cljs.core.swap_BANG_.call(null,quil.core.internal_state.call(null),cljs.core.assoc,new cljs.core.Keyword(null,"looping?","looping?",78344245),true);
});
/**
 * Save current stroke color vector in the internal state. It can be accessed
 *   using the [[current-stroke]] function.
 */
quil.core.save_current_stroke = (function quil$core$save_current_stroke(color){
return cljs.core.swap_BANG_.call(null,quil.core.internal_state.call(null),cljs.core.assoc,new cljs.core.Keyword(null,"current-stroke","current-stroke",-1338415274),color);
});
/**
 * Sets the color used to draw lines and borders around shapes. This
 *   color is either specified in terms of the RGB or HSB color depending
 *   on the current [[color-mode]] (the default color space is RGB, with
 *   each value in the range from 0 to 255).
 *   If nil is passed it removes any stroke color; equivalent to [[no-stroke]].
 */
quil.core.stroke = (function quil$core$stroke(var_args){
var G__990 = arguments.length;
switch (G__990) {
case 1:
return quil.core.stroke.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.stroke.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.core.stroke.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quil.core.stroke.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.stroke.cljs$core$IFn$_invoke$arity$1 = (function (gray){
if(cljs.core.vector_QMARK_.call(null,gray)){
return cljs.core.apply.call(null,quil.core.stroke,gray);
} else {
if((gray == null)){
return quil.core.no_stroke.call(null);
} else {
quil.core.current_graphics.call(null).stroke(quil.core.cast_color.call(null,gray));

return quil.core.save_current_stroke.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gray], null));

}
}
}));

(quil.core.stroke.cljs$core$IFn$_invoke$arity$2 = (function (gray,alpha){
quil.core.current_graphics.call(null).stroke(quil.core.cast_color.call(null,gray),alpha);

return quil.core.save_current_stroke.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gray,alpha], null));
}));

(quil.core.stroke.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
quil.core.current_graphics.call(null).stroke(x,y,z);

return quil.core.save_current_stroke.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null));
}));

(quil.core.stroke.cljs$core$IFn$_invoke$arity$4 = (function (x,y,z,alpha){
quil.core.current_graphics.call(null).stroke(x,y,z,alpha);

return quil.core.save_current_stroke.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [z,y,z,alpha], null));
}));

(quil.core.stroke.cljs$lang$maxFixedArity = 4);

/**
 * Sets the style for rendering line endings. These ends are either
 *   squared, extended, or rounded and specified with the corresponding
 *   parameters `:square`, `:project`, and `:round`. The default cap is `:round`.
 */
quil.core.stroke_cap = (function quil$core$stroke_cap(cap_mode){
var cap_mode__$1 = quil.util.resolve_constant_key.call(null,cap_mode,quil.core.stroke_cap_modes);
return quil.core.current_graphics.call(null).strokeCap(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cap_mode__$1));
});
/**
 * Sets the style of the joints which connect line
 *   segments. These joints are either mitered, beveled, or rounded and
 *   specified with the corresponding parameters `:miter`, `:bevel`, and
 *   `:round`. The default joint is `:miter`.
 * 
 *   This function is not available with the `:p2d`, `:p3d`, or `:opengl`
 *   renderers.
 */
quil.core.stroke_join = (function quil$core$stroke_join(join_mode){
var join_mode__$1 = quil.util.resolve_constant_key.call(null,join_mode,quil.core.stroke_join_modes);
return quil.core.current_graphics.call(null).strokeJoin(cljs.core.str.cljs$core$IFn$_invoke$arity$1(join_mode__$1));
});
/**
 * Sets the width of the stroke used for lines, points, and the border
 *   around shapes. All widths are set in units of pixels. 
 */
quil.core.stroke_weight = (function quil$core$stroke_weight(weight){
return quil.core.current_graphics.call(null).strokeWeight(weight);
});
/**
 * Calculates the ratio of the sine and cosine of an angle. This
 *   function expects the values of the angle parameter to be provided in
 *   radians (values from 0 to PI*2). Values are returned in the range
 *   infinity to -infinity.
 */
quil.core.tan = (function quil$core$tan(angle){
return quil.sketch.current_applet.call(null).tan(angle);
});
/**
 * Returns the target framerate specified with the function [[frame-rate]]
 */
quil.core.target_frame_rate = (function quil$core$target_frame_rate(){
return new cljs.core.Keyword(null,"frame-rate","frame-rate",-994918942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quil.core.internal_state.call(null)));
});
/**
 * Draws a char to the screen in the specified position. See the
 *   [[text]] function for more details.
 */
quil.core.text_char = (function quil$core$text_char(var_args){
var G__993 = arguments.length;
switch (G__993) {
case 3:
return quil.core.text_char.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quil.core.text_char.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.text_char.cljs$core$IFn$_invoke$arity$3 = (function (c,x,y){
if(cljs.core.truth_(quil.core.current_fill.call(null))){
return quil.core.current_graphics.call(null).text(cljs.core.char$.call(null,c),x,y);
} else {
return null;
}
}));

(quil.core.text_char.cljs$core$IFn$_invoke$arity$4 = (function (c,x,y,z){
if(cljs.core.truth_(quil.core.current_fill.call(null))){
return quil.core.current_graphics.call(null).text(cljs.core.char$.call(null,c),x,y,z);
} else {
return null;
}
}));

(quil.core.text_char.cljs$lang$maxFixedArity = 4);

/**
 * Draws a number to the screen in the specified position. See the
 *   [[text]] function for more details.
 */
quil.core.text_num = (function quil$core$text_num(var_args){
var G__996 = arguments.length;
switch (G__996) {
case 3:
return quil.core.text_num.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quil.core.text_num.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.text_num.cljs$core$IFn$_invoke$arity$3 = (function (num,x,y){
if(cljs.core.truth_(quil.core.current_fill.call(null))){
return quil.core.current_graphics.call(null).text(num,x,y);
} else {
return null;
}
}));

(quil.core.text_num.cljs$core$IFn$_invoke$arity$4 = (function (num,x,y,z){
if(cljs.core.truth_(quil.core.current_fill.call(null))){
return quil.core.current_graphics.call(null).text(num,x,y,z);
} else {
return null;
}
}));

(quil.core.text_num.cljs$lang$maxFixedArity = 4);

/**
 * Draws text to the screen in the position specified by the `x` and `y`
 *   parameters (and the optional `z` parameter in clj). A default font
 *   will be used unless a font is set with the [[text-font]]
 *   function. Change the color of the text with the [[fill]]
 *   function. The text displays in relation to the
 *   [[text-align]] function, which gives the option to draw to the left,
 *   right, and center of the coordinates.
 * 
 *   The `x1`, `y1`, `x2` and `y2` parameters define a rectangular area
 *   to display within and may only be used with string data. For text
 *   drawn inside a rectangle, the coordinates are interpreted based on
 *   the current [[rect-mode]] setting.
 */
quil.core.text = (function quil$core$text(var_args){
var G__999 = arguments.length;
switch (G__999) {
case 3:
return quil.core.text.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return quil.core.text.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.text.cljs$core$IFn$_invoke$arity$3 = (function (s,x,y){
if(cljs.core.truth_(quil.core.current_fill.call(null))){
return quil.core.current_graphics.call(null).text(s,x,y);
} else {
return null;
}
}));

(quil.core.text.cljs$core$IFn$_invoke$arity$5 = (function (s,x1,y1,x2,y2){
if(cljs.core.truth_(quil.core.current_fill.call(null))){
return quil.core.current_graphics.call(null).text(s,x1,y1,x2,y2);
} else {
return null;
}
}));

(quil.core.text.cljs$lang$maxFixedArity = 5);

/**
 * Sets the current alignment for drawing text. Available modes are:
 * 
 *   horizontal - `:left`, `:center`, and `:right`
 *   vertical   - `:top`, `:bottom`, `:center`, and `:baseline`
 * 
 *   An optional second parameter specifies the vertical alignment
 *   mode. `:baseline` is the default. The `:top` and `:center` parameters are
 *   straightforward. The `:bottom` parameter offsets the line based on the
 *   current [[text-descent]]. For multiple lines, the final line will be
 *   aligned to the bottom, with the previous lines appearing above it.
 * 
 *   When using text with width and height parameters, `:baseline` is
 *   ignored, and treated as `:top`. (Otherwise, text would by default draw
 *   outside the box, since `:baseline` is the default setting. `:baseline` is
 *   not a useful drawing mode for text drawn in a rectangle.)
 * 
 *   The vertical alignment is based on the value of [[text-ascent]], which
 *   many fonts do not specify correctly. It may be necessary to use a
 *   hack and offset by a few pixels by hand so that the offset looks
 *   correct. To do this as less of a hack, use some percentage of
 *   [[text-ascent]] or [[text-descent]] so that the hack works even if you
 *   change the size of the font.
 */
quil.core.text_align = (function quil$core$text_align(var_args){
var G__1002 = arguments.length;
switch (G__1002) {
case 1:
return quil.core.text_align.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.text_align.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.text_align.cljs$core$IFn$_invoke$arity$1 = (function (align){
var align__$1 = quil.util.resolve_constant_key.call(null,align,quil.core.horizontal_alignment_modes);
return quil.core.current_graphics.call(null).textAlign(align__$1);
}));

(quil.core.text_align.cljs$core$IFn$_invoke$arity$2 = (function (align_x,align_y){
var align_x__$1 = quil.util.resolve_constant_key.call(null,align_x,quil.core.horizontal_alignment_modes);
var align_y__$1 = quil.util.resolve_constant_key.call(null,align_y,quil.core.vertical_alignment_modes);
return quil.core.current_graphics.call(null).textAlign(align_x__$1,align_y__$1);
}));

(quil.core.text_align.cljs$lang$maxFixedArity = 2);

/**
 * Returns the ascent of the current font at its current size. This
 *   information is useful for determining the height of the font above
 *   the baseline. For example, adding the [[text-ascent]] and [[text-descent]]
 *   values will give you the total height of the line.
 */
quil.core.text_ascent = (function quil$core$text_ascent(){
return quil.core.current_graphics.call(null).textAscent();
});
/**
 * Returns descent of the current font at its current size. This
 *   information is useful for determining the height of the font below
 *   the baseline. For example, adding the [[text-ascent]] and [[text-descent]]
 *   values will give you the total height of the line.
 */
quil.core.text_descent = (function quil$core$text_descent(){
return quil.core.current_graphics.call(null).textDescent();
});
/**
 * Sets the current font that will be drawn with the text
 *   function. Fonts must be loaded with [[load-font]] before it can be
 *   used. This font will be used in all subsequent calls to the [[text]]
 *   function. If no `size` parameter is input, the font will appear at its
 *   original size until it is changed with [[text-size]].
 * 
 *   Because fonts are usually bitmaped, you should create fonts at the
 *   sizes that will be used most commonly. Using [[text-font]] without the
 *   `size` parameter will result in the cleanest-looking text.
 * 
 *   With the default (JAVA2D) and PDF renderers, it's also possible to
 *   enable the use of native fonts via the command
 *   `(hint :enable-native-fonts)`. This will produce vector text in JAVA2D
 *   sketches and PDF output in cases where the vector data is available:
 *   when the font is still installed, or the font is created via the
 *   [[create-font]] function.
 */
quil.core.text_font = (function quil$core$text_font(var_args){
var G__1005 = arguments.length;
switch (G__1005) {
case 1:
return quil.core.text_font.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.text_font.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.text_font.cljs$core$IFn$_invoke$arity$1 = (function (font){
return quil.core.current_graphics.call(null).textFont(font);
}));

(quil.core.text_font.cljs$core$IFn$_invoke$arity$2 = (function (font,size){
return quil.core.current_graphics.call(null).textFont(font,(size | (0)));
}));

(quil.core.text_font.cljs$lang$maxFixedArity = 2);

/**
 * Sets the spacing between lines of text in units of pixels. This
 *   setting will be used in all subsequent calls to the [[text]] function.
 */
quil.core.text_leading = (function quil$core$text_leading(leading){
return quil.core.current_graphics.call(null).textLeading(leading);
});
/**
 * Sets the current font size. This size will be used in all
 *   subsequent calls to the [[text]] function. Font size is measured in
 *   units of pixels.
 */
quil.core.text_size = (function quil$core$text_size(size){
return quil.core.current_graphics.call(null).textSize(size);
});
/**
 * Sets/gets the style of the text for system fonts to `:normal`, `:italic`,
 *   or `:bold` or `:bolditalic`.
 * 
 *   Note: this may be overridden by CSS styling. For non-system
 *   fonts (opentype, truetype, etc.) please load styled fonts instead.
 */
quil.core.text_style = (function quil$core$text_style(style){
var s = quil.util.resolve_constant_key.call(null,style,quil.core.text_styles);
return quil.core.current_graphics.call(null).textStyle(s);
});
/**
 * Sets a texture to be applied to vertex points. The [[texture]] function must
 *   be called between [[begin-shape]] and [[end-shape]] and before any calls to
 *   [[vertex]].
 * 
 *   When textures are in use, the fill color is ignored. Instead, use
 *   [[tint]] to specify the color of the texture as it is applied to the
 *   shape.
 */
quil.core.texture = (function quil$core$texture(img){
return quil.core.current_graphics.call(null).texture(img);
});
/**
 * Calculates and returns the width of any text string.
 */
quil.core.text_width = (function quil$core$text_width(data){
return quil.core.current_graphics.call(null).textWidth(data);
});
/**
 * Sets the fill value for displaying images. Images can be tinted to
 *   specified colors or made transparent by setting the `alpha`.
 * 
 *   To make an image transparent, but not change it's color, use white
 *   as the tint color and specify an `alpha` value. For instance,
 *   `(tint 255 128)` will make an image 50% transparent (unless
 *   [[color-mode]] has been used).
 * 
 *   The value for the parameter gray must be less than or equal to the
 *   current maximum value as specified by [[color-mode]]. The default
 *   maximum value is 255.
 * 
 *   Also used to control the coloring of textures in 3D.
 */
quil.core.tint = (function quil$core$tint(var_args){
var G__1008 = arguments.length;
switch (G__1008) {
case 1:
return quil.core.tint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.tint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.core.tint.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quil.core.tint.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.tint.cljs$core$IFn$_invoke$arity$1 = (function (gray){
return quil.core.current_graphics.call(null).tint(gray);
}));

(quil.core.tint.cljs$core$IFn$_invoke$arity$2 = (function (gray,alpha){
return quil.core.current_graphics.call(null).tint(gray,alpha);
}));

(quil.core.tint.cljs$core$IFn$_invoke$arity$3 = (function (r,g,b){
return quil.core.current_graphics.call(null).tint(r,g,b);
}));

(quil.core.tint.cljs$core$IFn$_invoke$arity$4 = (function (r,g,b,a){
return quil.core.current_graphics.call(null).tint(r,g,b,a);
}));

(quil.core.tint.cljs$lang$maxFixedArity = 4);

/**
 * Draw a torus with given `radius` and `tube-radius`.
 * 
 *    Optional parameters:
 *      * `detail-x` - number of segments, the more segments the smoother geometry default is 24
 *      * `detail-y` - number of segments, the more segments the smoother geometry default is 16
 */
quil.core.torus = (function quil$core$torus(var_args){
var G__1011 = arguments.length;
switch (G__1011) {
case 2:
return quil.core.torus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.core.torus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quil.core.torus.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.torus.cljs$core$IFn$_invoke$arity$2 = (function (radius,tube_radius){
return quil.core.current_graphics.call(null).torus(radius,tube_radius);
}));

(quil.core.torus.cljs$core$IFn$_invoke$arity$3 = (function (radius,tube_radius,detail_x){
return quil.core.current_graphics.call(null).torus(radius,tube_radius,(detail_x | (0)));
}));

(quil.core.torus.cljs$core$IFn$_invoke$arity$4 = (function (radius,tube_radius,detail_x,detail_y){
return quil.core.current_graphics.call(null).torus(radius,tube_radius,(detail_x | (0)),(detail_y | (0)));
}));

(quil.core.torus.cljs$lang$maxFixedArity = 4);

/**
 * Specifies an amount to displace objects within the display
 *   window. The `tx` parameter specifies left/right translation, the `ty`
 *   parameter specifies up/down translation, and the `tz` parameter
 *   specifies translations toward/away from the screen.  Transformations
 *   apply to everything that happens after and subsequent calls to the
 *   function accumulates the effect. For example, calling `(translate 50
 *   0)` and then `(translate 20, 0)` is the same as `(translate 70, 0)`. If
 *   [[translate]] is called within draw, the transformation is reset when
 *   the loop begins again. This function can be further controlled by
 *   the [[push-matrix]] and [[pop-matrix]] functions.
 */
quil.core.translate = (function quil$core$translate(var_args){
var G__1014 = arguments.length;
switch (G__1014) {
case 1:
return quil.core.translate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.translate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.core.translate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.translate.cljs$core$IFn$_invoke$arity$1 = (function (v){
return cljs.core.apply.call(null,quil.core.translate,v);
}));

(quil.core.translate.cljs$core$IFn$_invoke$arity$2 = (function (tx,ty){
return quil.core.current_graphics.call(null).translate(tx,ty);
}));

(quil.core.translate.cljs$core$IFn$_invoke$arity$3 = (function (tx,ty,tz){
return quil.core.current_graphics.call(null).translate(tx,ty,tz);
}));

(quil.core.translate.cljs$lang$maxFixedArity = 3);

/**
 * A triangle is a plane created by connecting three points. The first
 *   two arguments specify the first point, the middle two arguments
 *   specify the second point, and the last two arguments specify the
 *   third point.
 */
quil.core.triangle = (function quil$core$triangle(x1,y1,x2,y2,x3,y3){
return quil.core.current_graphics.call(null).triangle(x1,y1,x2,y2,x3,y3);
});
/**
 * Unpack a binary string to an integer. See [[binary]] for converting
 *   integers to strings.
 */
quil.core.unbinary = (function quil$core$unbinary(str_val){
return parseInt(str_val,(2));
});
/**
 * Converts a String representation of a hexadecimal number to its
 *   equivalent integer value.
 */
quil.core.unhex = (function quil$core$unhex(hex_str){
return quil.sketch.current_applet.call(null).unhex(cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex_str));
});
/**
 * Updates the display window or image with the data in the pixels array.
 *   Use in conjunction with [[pixels]]. If you're only reading pixels from
 *   the array, there's no need to call [[update-pixels]] unless there are
 *   changes.
 * 
 *   Certain renderers may or may not seem to require [[pixels]] or
 *   [[update-pixels]]. However, the rule is that any time you want to
 *   manipulate the `pixels` array, you must first call [[pixels]], and
 *   after changes have been made, call [[update-pixels]]. Even if the
 *   renderer may not seem to use this function in the current Processing
 *   release, this will always be subject to change.
 */
quil.core.update_pixels = (function quil$core$update_pixels(var_args){
var G__1017 = arguments.length;
switch (G__1017) {
case 0:
return quil.core.update_pixels.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return quil.core.update_pixels.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.update_pixels.cljs$core$IFn$_invoke$arity$0 = (function (){
return quil.core.update_pixels.call(null,quil.core.current_graphics.call(null));
}));

(quil.core.update_pixels.cljs$core$IFn$_invoke$arity$1 = (function (img){
return img.updatePixels();
}));

(quil.core.update_pixels.cljs$lang$maxFixedArity = 1);

/**
 * All shapes are constructed by connecting a series of
 *   vertices. [[vertex]] is used to specify the vertex coordinates for
 *   points, lines, triangles, quads, and polygons and is used
 *   exclusively within the [[begin-shape]] and [[end-shape]] functions.
 * 
 *   Drawing a vertex in 3D using the `z` parameter requires the `:p3d` or
 *   `:opengl` renderers to be used.
 * 
 *   This function is also used to map a texture onto the geometry. The
 *   [[texture]] function declares the texture to apply to the geometry and the `u`
 *   and `v` coordinates set define the mapping of this texture to the
 *   form. By default, the coordinates used for `u` and `v` are specified in
 *   relation to the image's size in pixels, but this relation can be
 *   changed with [[texture-mode]].
 */
quil.core.vertex = (function quil$core$vertex(var_args){
var G__1020 = arguments.length;
switch (G__1020) {
case 2:
return quil.core.vertex.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.core.vertex.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quil.core.vertex.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return quil.core.vertex.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.core.vertex.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return quil.core.current_graphics.call(null).vertex(x,y);
}));

(quil.core.vertex.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return quil.core.current_graphics.call(null).vertex(x,y,z);
}));

(quil.core.vertex.cljs$core$IFn$_invoke$arity$4 = (function (x,y,u,v){
return quil.core.current_graphics.call(null).vertex(x,y,(0),u,v);
}));

(quil.core.vertex.cljs$core$IFn$_invoke$arity$5 = (function (x,y,z,u,v){
return quil.core.current_graphics.call(null).vertex(x,y,z,u,v);
}));

(quil.core.vertex.cljs$lang$maxFixedArity = 5);

/**
 * Returns the current year as an integer (2003, 2004, 2005, etc).
 */
quil.core.year = (function quil$core$year(){
return quil.sketch.current_applet.call(null).year();
});
/**
 * Width of the display window. The value of width is zero until size is
 *   called.
 */
quil.core.width = (function quil$core$width(){
return quil.sketch.current_applet.call(null).width;
});
var ret__5781__auto___1029 = (function (){
/**
 * Temporarily set the fill color for the body of this macro.
 * The code outside of the [[with-fill]] form will have the previous
 * fill color set.
 * 
 * A fill argument of nil disables the fill.
 * 
 * Examples:
 * ```
 * (with-fill 255 ...)
 * (with-fill [10 80 98] ...)
 * (with-fill nil ...)
 * ```
 */
quil.core.with_fill = (function quil$core$with_fill(var_args){
var args__5732__auto__ = [];
var len__5726__auto___1030 = arguments.length;
var i__5727__auto___1031 = (0);
while(true){
if((i__5727__auto___1031 < len__5726__auto___1030)){
args__5732__auto__.push((arguments[i__5727__auto___1031]));

var G__1032 = (i__5727__auto___1031 + (1));
i__5727__auto___1031 = G__1032;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return quil.core.with_fill.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(quil.core.with_fill.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fill,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fill__1022__auto__","fill__1022__auto__",908537325,null),null,(1),null)),(new cljs.core.List(null,fill,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"previous-fill__1023__auto__","previous-fill__1023__auto__",1258506546,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("quil.core","current-fill","quil.core/current-fill",269663137,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"fill__1022__auto__","fill__1022__auto__",908537325,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("quil.core","fill","quil.core/fill",814613078,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"fill__1022__auto__","fill__1022__auto__",908537325,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("quil.core","fill","quil.core/fill",814613078,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"fill__1022__auto__","fill__1022__auto__",908537325,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"return-val__1024__auto__","return-val__1024__auto__",-1876068868,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"previous-fill__1023__auto__","previous-fill__1023__auto__",1258506546,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("quil.core","no-fill","quil.core/no-fill",-389901598,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("quil.core","fill","quil.core/fill",814613078,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"previous-fill__1023__auto__","previous-fill__1023__auto__",1258506546,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"return-val__1024__auto__","return-val__1024__auto__",-1876068868,null),null,(1),null))))),null,(1),null)))));
}));

(quil.core.with_fill.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(quil.core.with_fill.cljs$lang$applyTo = (function (seq1025){
var G__1026 = cljs.core.first.call(null,seq1025);
var seq1025__$1 = cljs.core.next.call(null,seq1025);
var G__1027 = cljs.core.first.call(null,seq1025__$1);
var seq1025__$2 = cljs.core.next.call(null,seq1025__$1);
var G__1028 = cljs.core.first.call(null,seq1025__$2);
var seq1025__$3 = cljs.core.next.call(null,seq1025__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1026,G__1027,G__1028,seq1025__$3);
}));

return null;
})()
;
(quil.core.with_fill.cljs$lang$macro = true);

var ret__5781__auto___1040 = (function (){
/**
 * Temporarily set the stroke color for the body of this macro.
 * The code outside of the [[with-stroke]] form will have the previous
 * stroke color set.
 * 
 * A stroke argument of nil disables the stroke.
 * 
 * Examples:
 * ```
 * (with-stroke 255 ...)
 * (with-stroke [10 80 98] ...)
 * (with-stroke nil ...)
 * ```
 */
quil.core.with_stroke = (function quil$core$with_stroke(var_args){
var args__5732__auto__ = [];
var len__5726__auto___1041 = arguments.length;
var i__5727__auto___1042 = (0);
while(true){
if((i__5727__auto___1042 < len__5726__auto___1041)){
args__5732__auto__.push((arguments[i__5727__auto___1042]));

var G__1043 = (i__5727__auto___1042 + (1));
i__5727__auto___1042 = G__1043;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return quil.core.with_stroke.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(quil.core.with_stroke.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,stroke,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"stroke__1033__auto__","stroke__1033__auto__",1179765514,null),null,(1),null)),(new cljs.core.List(null,stroke,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"previous-stroke__1034__auto__","previous-stroke__1034__auto__",-1338014587,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("quil.core","current-stroke","quil.core/current-stroke",-1148124489,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"stroke__1033__auto__","stroke__1033__auto__",1179765514,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("quil.core","stroke","quil.core/stroke",577473004,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"stroke__1033__auto__","stroke__1033__auto__",1179765514,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("quil.core","stroke","quil.core/stroke",577473004,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"stroke__1033__auto__","stroke__1033__auto__",1179765514,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"return-val__1035__auto__","return-val__1035__auto__",-1016639816,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"previous-stroke__1034__auto__","previous-stroke__1034__auto__",-1338014587,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("quil.core","no-stroke","quil.core/no-stroke",779188421,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("quil.core","stroke","quil.core/stroke",577473004,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"previous-stroke__1034__auto__","previous-stroke__1034__auto__",-1338014587,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"return-val__1035__auto__","return-val__1035__auto__",-1016639816,null),null,(1),null))))),null,(1),null)))));
}));

(quil.core.with_stroke.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(quil.core.with_stroke.cljs$lang$applyTo = (function (seq1036){
var G__1037 = cljs.core.first.call(null,seq1036);
var seq1036__$1 = cljs.core.next.call(null,seq1036);
var G__1038 = cljs.core.first.call(null,seq1036__$1);
var seq1036__$2 = cljs.core.next.call(null,seq1036__$1);
var G__1039 = cljs.core.first.call(null,seq1036__$2);
var seq1036__$3 = cljs.core.next.call(null,seq1036__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1037,G__1038,G__1039,seq1036__$3);
}));

return null;
})()
;
(quil.core.with_stroke.cljs$lang$macro = true);

var ret__5781__auto___1049 = (function (){
/**
 * Performs body with translation, restores current transformation on
 *   exit.
 */
quil.core.with_translation = (function quil$core$with_translation(var_args){
var args__5732__auto__ = [];
var len__5726__auto___1050 = arguments.length;
var i__5727__auto___1051 = (0);
while(true){
if((i__5727__auto___1051 < len__5726__auto___1050)){
args__5732__auto__.push((arguments[i__5727__auto___1051]));

var G__1052 = (i__5727__auto___1051 + (1));
i__5727__auto___1051 = G__1052;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return quil.core.with_translation.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(quil.core.with_translation.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,translation_vector,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"tr__1044__auto__","tr__1044__auto__",66208509,null),null,(1),null)),(new cljs.core.List(null,translation_vector,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("quil.core","push-matrix","quil.core/push-matrix",1356326676,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("quil.core","translate","quil.core/translate",150889028,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"tr__1044__auto__","tr__1044__auto__",66208509,null),null,(1),null))))),null,(1),null)),body,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"finally","finally",-1065347064,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("quil.core","pop-matrix","quil.core/pop-matrix",310892617,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(quil.core.with_translation.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(quil.core.with_translation.cljs$lang$applyTo = (function (seq1045){
var G__1046 = cljs.core.first.call(null,seq1045);
var seq1045__$1 = cljs.core.next.call(null,seq1045);
var G__1047 = cljs.core.first.call(null,seq1045__$1);
var seq1045__$2 = cljs.core.next.call(null,seq1045__$1);
var G__1048 = cljs.core.first.call(null,seq1045__$2);
var seq1045__$3 = cljs.core.next.call(null,seq1045__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1046,G__1047,G__1048,seq1045__$3);
}));

return null;
})()
;
(quil.core.with_translation.cljs$lang$macro = true);

var ret__5781__auto___1058 = (function (){
/**
 * Performs body with rotation, restores current transformation on exit.
 *   Accepts a vector `[angle]` or `[angle x y z]`.
 * 
 *   When 4 arguments provides it produces a rotation of angle degrees
 *   around the vector x y z. Check examples to better understand.
 *   This rotation follows the right-hand rule, so if the vector x y z points
 *   toward the user, the rotation will be counterclockwise.
 * 
 *   Example:
 *   ```
 *  (with-rotation [angle]
 *    (vertex 1 2))
 *   ```
 */
quil.core.with_rotation = (function quil$core$with_rotation(var_args){
var args__5732__auto__ = [];
var len__5726__auto___1059 = arguments.length;
var i__5727__auto___1060 = (0);
while(true){
if((i__5727__auto___1060 < len__5726__auto___1059)){
args__5732__auto__.push((arguments[i__5727__auto___1060]));

var G__1061 = (i__5727__auto___1060 + (1));
i__5727__auto___1060 = G__1061;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return quil.core.with_rotation.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(quil.core.with_rotation.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rotation,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"tr__1053__auto__","tr__1053__auto__",128742249,null),null,(1),null)),(new cljs.core.List(null,rotation,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("quil.core","push-matrix","quil.core/push-matrix",1356326676,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("quil.core","rotate","quil.core/rotate",-1944995048,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"tr__1053__auto__","tr__1053__auto__",128742249,null),null,(1),null))))),null,(1),null)),body,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"finally","finally",-1065347064,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("quil.core","pop-matrix","quil.core/pop-matrix",310892617,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(quil.core.with_rotation.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(quil.core.with_rotation.cljs$lang$applyTo = (function (seq1054){
var G__1055 = cljs.core.first.call(null,seq1054);
var seq1054__$1 = cljs.core.next.call(null,seq1054);
var G__1056 = cljs.core.first.call(null,seq1054__$1);
var seq1054__$2 = cljs.core.next.call(null,seq1054__$1);
var G__1057 = cljs.core.first.call(null,seq1054__$2);
var seq1054__$3 = cljs.core.next.call(null,seq1054__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1055,G__1056,G__1057,seq1054__$3);
}));

return null;
})()
;
(quil.core.with_rotation.cljs$lang$macro = true);

quil.core.begin_draw = (function quil$core$begin_draw(graphics){
return null;
});
quil.core.end_draw = (function quil$core$end_draw(graphics){
return null;
});
var ret__5781__auto___1067 = (function (){
/**
 * All subsequent calls of any drawing function will draw on given
 *   graphics. [[with-graphics]] cannot be nested (you can draw simultaneously
 *   only on 1 graphics)
 */
quil.core.with_graphics = (function quil$core$with_graphics(var_args){
var args__5732__auto__ = [];
var len__5726__auto___1068 = arguments.length;
var i__5727__auto___1069 = (0);
while(true){
if((i__5727__auto___1069 < len__5726__auto___1068)){
args__5732__auto__.push((arguments[i__5727__auto___1069]));

var G__1070 = (i__5727__auto___1069 + (1));
i__5727__auto___1069 = G__1070;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return quil.core.with_graphics.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(quil.core.with_graphics.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,graphics,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"gr__1062__auto__","gr__1062__auto__",-2137162683,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"/Users/unclebob/.cljs/.aot_cache/1.11.132/E2B0490/quil/core.cljc",null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,4862,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,21,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,4862,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,24,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("quil.core","PGraphics","quil.core/PGraphics",-1265754815,null),null,(1),null))))))),null,(1),null)),(new cljs.core.List(null,graphics,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("quil.core","*graphics*","quil.core/*graphics*",-1088142302,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"gr__1062__auto__","gr__1062__auto__",-2137162683,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("quil.core","begin-draw","quil.core/begin-draw",454448665,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"gr__1062__auto__","gr__1062__auto__",-2137162683,null),null,(1),null))))),null,(1),null)),body,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("quil.core","end-draw","quil.core/end-draw",1718268198,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"gr__1062__auto__","gr__1062__auto__",-2137162683,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(quil.core.with_graphics.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(quil.core.with_graphics.cljs$lang$applyTo = (function (seq1063){
var G__1064 = cljs.core.first.call(null,seq1063);
var seq1063__$1 = cljs.core.next.call(null,seq1063);
var G__1065 = cljs.core.first.call(null,seq1063__$1);
var seq1063__$2 = cljs.core.next.call(null,seq1063__$1);
var G__1066 = cljs.core.first.call(null,seq1063__$2);
var seq1063__$3 = cljs.core.next.call(null,seq1063__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1064,G__1065,G__1066,seq1063__$3);
}));

return null;
})()
;
(quil.core.with_graphics.cljs$lang$macro = true);

/**
 * Create and start a new visualisation applet. Can be used to create
 *   new sketches programmatically. See documentation for [[defsketch]] for
 *   list of available options.
 */
quil.core.sketch = (function quil$core$sketch(var_args){
var args__5732__auto__ = [];
var len__5726__auto___1072 = arguments.length;
var i__5727__auto___1073 = (0);
while(true){
if((i__5727__auto___1073 < len__5726__auto___1072)){
args__5732__auto__.push((arguments[i__5727__auto___1073]));

var G__1074 = (i__5727__auto___1073 + (1));
i__5727__auto___1073 = G__1074;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return quil.core.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(quil.core.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
return cljs.core.apply.call(null,quil.sketch.sketch,opts);
}));

(quil.core.sketch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(quil.core.sketch.cljs$lang$applyTo = (function (seq1071){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1071));
}));

var ret__5781__auto___1079 = (function (){
/**
 * Define and start a sketch and bind it to a var with the symbol
 *   `app-name`. If any of the options to the various callbacks are
 *   symbols, it wraps them in a call to var to ensure they aren't
 *   inlined and that redefinitions to the original functions are reflected in
 *   the visualisation.
 * 
 *   * `:size`           - A vector of width and height for the sketch or
 *                      `:fullscreen`. Defaults to `[500 300]`. If you're using
 *                      `:fullscreen` you may  want to enable present mode using
 *                      `:features [:present]`. `:fullscreen` size works only in
 *                      Clojure. In ClojureScript all sketches support
 *                      fullscreen when you press `F11`.
 *   * `:renderer`       - Specifies the renderer type. One of `:p2d`, `:p3d`,
 *                      `:java2d`, `:opengl`, `:pdf`, `:svg`, `:fx2d`). Defaults
 *                      to `:java2d` in Clojure and `:p2d` in ClojureScript.
 *                      `:dxf` renderer can't be used as sketch renderer.
 *                      Use [[begin-raw]] method instead. In Clojurescript only
 *                      `:p2d` and `:p3d` renderers are supported.
 *                      More info on Clojure renderers:
 *                      https://processing.org/reference/environment/#Renderers
 *   * `:output-file`    - Specifies an output file path. Only used in `:pdf` and
 *                      `:svg` modes. Not supported in Clojurescript. When
 *                      writing to a file, call [[exit]] at the end of the
 *                      `draw` call to end the sketch and not write repeatedly
 *                      to the file.
 *   * `:title`          - A string which will be displayed at the top of
 *                      the sketch window. Not supported in Clojurescript.
 *   * `:features`       - A vector of keywords customizing sketch behaviour.
 *                      Supported features:
 *  - `:keep-on-top`   - Sketch window will always be above other windows.
 *                       Note: some platforms might not support always-on-top
 *                       windows. Not supported in clojurescript.
 *  - `:exit-on-close` - Shutdown JVM  when sketch is closed.
 *                       Not supported in Clojurescript.
 *  - `:resizable`     - Makes sketch resizable. Not supported in Clojurescript.
 *  - `:no-safe-fns`   - Do not catch and print exceptions thrown inside
 *                       functions provided to sketch (like draw,
 *                       [[mouse-pressed?]], [[key-pressed?]] and others). By
 *                       default all exceptions thrown inside these functions
 *                       are caught. This prevents the sketch from breaking when
 *                       a bad function is provided and allows you to fix it and
 *                       reload it on the fly. You can disable this behaviour by
 *                       enabling the `:no-safe-fns` feature. Not supported in
 *                       Clojurescript.
 *  - `:present`       - Switch to present mode (fullscreen without borders, OS
 *                       panels). You may want to use this feature together with
 *                       `:size :fullscreen`. Not supported in ClojureScript. In
 *                       ClojureScript fullscreen is enabled by pressing F11 and
 *                       it's enabled on all sketches automatically.
 *  - `:no-start`      - Disables autostart if sketch was created using the
 *                       [[defsketch]] macro. To start sketch you have to call
 *                       function created [[defsketch]]. Supported only in
 *                       ClojureScript.
 *                      Usage example: `:features [:keep-on-top :present]`
 *   * `:bgcolor`        - Sets background color for unused space in present mode.
 *                      Color is specified in hex format for example
 *                      `:bgcolor "#00FFFF"` (cyan background)
 *                      Not supported in ClojureScript.
 *   * `:display`        - Sets what display should be used by this sketch.
 *                      Displays are numbered starting from 0.
 *                      Example: `:display 1`.
 *                      Not supported in ClojureScript.
 *   * `:setup`          - A function to be called once when setting the sketch up.
 *   * `:draw`           - A function to be repeatedly called at most n times per
 *                      second where n is the target [[frame-rate]] set for
 *                      the visualisation.
 *   * `:host`           - String id of canvas element or DOM element itself.
 *                      Specifies host for the sketch. Must be specified in
 *                      sketch, may be omitted in defsketch. If omitted in
 *                      [[defsketch]], `:host` is set to the name of the sketch.
 *                      If element with specified id is not found on the page
 *                      and page is empty, a new canvas element will be created.
 *                      Used in ClojureScript.
 *   * `:focus-gained`   - Called when the sketch gains focus.
 *                      Not supported in ClojureScript.
 *   * `:focus-lost`     - Called when the sketch loses focus. Not supported in
 *                      ClojureScript.
 *   * `:mouse-entered`  - Called when the mouse enters the sketch window.
 *   * `:mouse-exited`   - Called when the mouse leaves the sketch window
 *   * `:mouse-pressed`  - Called every time a mouse button is pressed.
 *   * `:mouse-released` - Called every time a mouse button is released.
 *   * `:mouse-clicked`  - Called once after a mouse button has been pressed
 *                      and then released.
 *   * `:mouse-moved`    - Called every time the mouse moves and a button is
 *                      not pressed.
 *   * `:mouse-dragged`  - Called every time the mouse moves and a button is
 *                      pressed.
 *   * `:mouse-wheel`    - Called every time mouse wheel is rotated.
 *                      Takes 1 argument - wheel rotation, an `int`.
 *                      Negative values if the mouse wheel was rotated
 *                      up/away from the user, and positive values
 *                      if the mouse wheel was rotated down/towards the user.
 *   * `:key-pressed`    - Called every time any key is pressed.
 *   * `:key-released`   - Called every time any key is released.
 *   * `:key-typed`      - Called once every time non-modifier keys are
 *                      pressed.
 *   * `:on-close`       - Called once, when sketch is closed.
 *                      Not supported in ClojureScript.
 *   * `:middleware`     - Vector of middleware to be applied to the sketch.
 *                      Middleware will be applied in the same order as in
 *                      `comp` function: `[f g]` will be applied as
 *                      `(f (g options))`.
 *   * `:settings`       - Cousin of `:setup`. A function to be called once when
 *                      setting sketch up. Should be used only for [[smooth]]
 *                      and [[no-smooth]]. Due to Processing limitations these
 *                      functions cannot be used neither in `:setup` nor in
 *                      `:draw`.
 */
quil.core.defsketch = (function quil$core$defsketch(var_args){
var args__5732__auto__ = [];
var len__5726__auto___1080 = arguments.length;
var i__5727__auto___1081 = (0);
while(true){
if((i__5727__auto___1081 < len__5726__auto___1080)){
args__5732__auto__.push((arguments[i__5727__auto___1081]));

var G__1082 = (i__5727__auto___1081 + (1));
i__5727__auto___1081 = G__1082;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return quil.core.defsketch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(quil.core.defsketch.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,app_name,options){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("quil.sketch$macros","defsketch","quil.sketch$macros/defsketch",2065609719,null),null,(1),null)),(new cljs.core.List(null,app_name,null,(1),null)),options)));
}));

(quil.core.defsketch.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(quil.core.defsketch.cljs$lang$applyTo = (function (seq1075){
var G__1076 = cljs.core.first.call(null,seq1075);
var seq1075__$1 = cljs.core.next.call(null,seq1075);
var G__1077 = cljs.core.first.call(null,seq1075__$1);
var seq1075__$2 = cljs.core.next.call(null,seq1075__$1);
var G__1078 = cljs.core.first.call(null,seq1075__$2);
var seq1075__$3 = cljs.core.next.call(null,seq1075__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1076,G__1077,G__1078,seq1075__$3);
}));

return null;
})()
;
(quil.core.defsketch.cljs$lang$macro = true);

/**
 * Returns true if char `c` is a `coded` char i.e. it is necessary to
 *   fetch the [[key-code]] as an integer and use that to determine the
 *   specific key pressed. See [[key-as-keyword]].
 */
quil.core.key_coded_QMARK_ = (function quil$core$key_coded_QMARK_(c){
return cljs.core._EQ_.call(null,(65535),String(c).charCodeAt());
});
/**
 * Returns a keyword representing the currently pressed key. Modifier
 *   keys are represented as: `:up`, `:down`, `:left`, `:right`, `:alt`,
 *   `:control`, `:shift`, `:command`, `:f1-24`
 */
quil.core.key_as_keyword = (function quil$core$key_as_keyword(){
var key_char = quil.core.raw_key.call(null);
var code = quil.core.key_code.call(null);
if(quil.core.key_coded_QMARK_.call(null,key_char)){
return cljs.core.get.call(null,quil.core.KEY_CODES,code,new cljs.core.Keyword(null,"unknown-key","unknown-key",255305911));
} else {
var key_str = String(key_char);
var or__5002__auto__ = quil.core.KEY_MAP.call(null,key_str);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.keyword.call(null,key_str);
}
}
});

//# sourceMappingURL=core.js.map
