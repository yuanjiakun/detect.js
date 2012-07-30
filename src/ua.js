/**
 * @fileOverview 统一环境检测包[Detect] UA检测
 * @author SMbey0nd http://github.com/SMbey0nd
 * @version 0.1
 * MIT Licensed.
 */
// --------------------------------
// Thanks to:
//  - boomerang http://lognormal.github.com/boomerang/doc/howtos/index.html
//  - zepto 
//
// TODO: 
//  - 

(function(w) {

	DETECT = DETECT || {};
	DETECT.plugins = DETECT.plugins || {};

	var init = {};

	DETECT.plugins.UA = {
		init: function(config){
			DETECT.utils.pluginConfig(init, config, "UA", ["A", "B", "C"]);
		}
	}

}(window));