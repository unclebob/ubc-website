// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('quil.middleware');
goog.require('cljs.core');
goog.require('quil.middlewares.fun_mode');
goog.require('quil.middlewares.navigation_3d');
goog.require('quil.middlewares.navigation_2d');
/**
 * Introduces `function mode`. Adds `update` function which takes current state
 *   and returns new state. Makes all other functions (`setup`, `draw`,
 *   `mouse-click`, etc) state-aware.
 *   See [wiki](https://github.com/quil/quil/wiki/Functional-mode-%28fun-mode%29)
 *   for more details.
 */
quil.middleware.fun_mode = (function quil$middleware$fun_mode(options){
return quil.middlewares.fun_mode.fun_mode.call(null,options);
});
/**
 * Enables navigation in 3D space. Similar to how it is done in
 *   shooters: WASD navigation, space is go up, drag mouse to look around.
 *   This middleware requires [[fun-mode]].
 * 
 *   Navigation
 * 
 *   * Drag mouse to look around. You can change settings to bind
 *  mouse-moved instead of mouse-dragged to look around. See
 *  customization info below.
 * 
 *   * Keyboard:
 *  * `w` - go forward
 *  * `s` - go backward
 *  * `a` - strafe left
 *  * `d` - strafe right
 *  * `space` - go up
 *  * `z` - go down, can't bind to `ctrl`, limitation of Processing
 * 
 *   Customization
 * 
 *   You can customize this middleware by providing a map as
 *   `:navigation-3d` option in [[quil.sketch/defsketch]]/[[quil.sketch/sketch]].
 *   The map can have the following optional keys:
 * 
 *   * `:position` - vector of 3 numbers, initial camera position. Default
 *                is the same as in [[quil.core/camera]] function.
 * 
 *   * `:straight` - vector of 3 numbers, direction you'll be looking at.
 *                Default is `[0 0 -1]` (looking down).
 * 
 *   * `:up` - vector of 3 numbers, 'up' direction. Default is `[0 1 0]`.
 * 
 *   * `:pixels-in-360` - number, mouse sensitivity. Defines how many pixels
 *                     you need to move/drag your mouse to rotate 360 degrees.
 *                     The less the number the more sensitive the mouse.
 *                     Default is `1000`.
 * 
 *   * `:step-size` - number, number of pixels you move on each key event (wasd).
 *                 Default is `20`.
 * 
 *   * `:rotate-on` - keyword, either `:mouse-dragged` or `:mouse-moved`. Specifies
 *                 on which mouse event camera should rotate. Default is
 *                 `:mouse-dragged`.
 * 
 *   Accessing position information from a sketch
 * 
 *   [[navigation-3d]] uses [[fun-mode]] under the hood so all position-related
 *   information is stored in the state map. It means that you can access in
 *   draw/update/any handler and modify it if you need to. Position
 *   information is a map which is stored under `:navigation-3d` key in the
 *   state map. Position consists of 3 values: `:position`, `:straight` and `:up`.
 *   See "Customization" section above for more details.
 * 
 *   Example:
 *   ```
 *   (q/defsketch my-sketch
 *  ...
 *  :middleware [m/fun-mode m/navigation-3d])
 *   ```
 * 
 *   See wiki article for more(?) details:
 *   https://github.com/quil/quil/wiki/Navigation-3D
 */
quil.middleware.navigation_3d = (function quil$middleware$navigation_3d(options){
return quil.middlewares.navigation_3d.navigation_3d.call(null,options);
});
/**
 * Enables navigation over 2D sketch. Drag mouse to change the center of the
 *   sketch and mouse wheel controls zoom. This middleware requires [[fun-mode]].
 * 
 *   Customization
 * 
 *   You can customize this middleware by providing a map as
 *   `:navigation-2d` option in [[quil.sketch/defsketch]]/[[quil.sketch/sketch]].
 *   The map can have the following optional keys:
 * 
 *   * `:position` - vector of 2 numbers, x and y - center of the screen.
 *                Default is `width/2`, `height/2`.
 * 
 *   * `:zoom` - number indicating current zoom level. Default is `1`.
 * 
 *   * `:mouse-buttons` - set containing zero or more of the keys `:left`,
 *                     `:right`, and `center` indicating which mouse buttons
 *                     are used for panning the screen. Default is
 *                     `#{:left :right :center}`.
 * 
 *   Accessing position information from a sketch
 * 
 *   [[navigation-2d]] uses [[fun-mode]] under the hood so all position-related
 *   information is stored in the state map. It means that you can access in
 *   draw/update/any handler and modify it if you need to. Position
 *   information is a map which is stored under `:navigation-2d` key in the
 *   state map. Position consists of 2 values: `:position` and `:zoom`.
 *   See "Customization" section above for more details.
 * 
 *   Example:
 *   ```
 *   (q/defsketch my-sketch
 *  ...
 *  :middleware [m/fun-mode m/navigation-2d])
 *   ```
 */
quil.middleware.navigation_2d = (function quil$middleware$navigation_2d(options){
return quil.middlewares.navigation_2d.navigation_2d.call(null,options);
});

//# sourceMappingURL=middleware.js.map
