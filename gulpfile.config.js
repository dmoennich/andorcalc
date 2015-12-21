'use strict';
var GulpConfig = (function () {
	function gulpConfig() {
		//Got tired of scrolling through all the comments so removed them
		//Don't hurt me AC :-)
		//this.source = './public/dist';
		//this.sourceApp = './browser/ts';
		this.tsOutputPath = './public/dist/js';
		//this.allJavaScript = [this.source + '/js/**/*.js'];
		this.allTypeScript = './browser/ts/**/*.ts';

		this.typings = './typings/';
		this.libraryTypeScriptDefinitions = './typings/**/*.ts';
	}
	return gulpConfig;
})();
module.exports = GulpConfig;