'use strict';

var gulp = require('gulp'),
	//debug = require('gulp-debug'),
	//inject = require('gulp-inject'),
	tsc = require('gulp-typescript'),
	tslint = require('gulp-tslint'),
	sourcemaps = require('gulp-sourcemaps'),
	del = require('del'),
	//Config = require('./gulpfile.config'),
	tsProject = tsc.createProject('tsconfig.json'),
	config = {
		'tsOutputPath': './public/js',
		'allTypeScript': './browser/ts/**/*.ts',
		'typings': './typings/',
		'libraryTypeScriptDefinitions': './typings/**/*.ts'
	};

/**
 * Generates the app.d.ts references file dynamically from all application *.ts files.
 */
// gulp.task('gen-ts-refs', function () {
//     var target = gulp.src(config.appTypeScriptReferences);
//     var sources = gulp.src([config.allTypeScript], {read: false});
//     return target.pipe(inject(sources, {
//         starttag: '//{',
//         endtag: '//}',
//         transform: function (filepath) {
//             return '/// <reference path="../..' + filepath + '" />';
//         }
//     })).pipe(gulp.dest(config.typings));
// });

/**
 * Lint all custom TypeScript files.
 */
gulp.task('ts-lint', function () {
	return gulp.src(config.allTypeScript).pipe(tslint()).pipe(tslint.report('prose'));
});

/**
 * Compile TypeScript and include references to library and app .d.ts files.
 */
gulp.task('ts-compile', ["ts-clean"], function () {
	var sourceTsFiles = [config.allTypeScript,                //path to typescript files
		config.libraryTypeScriptDefinitions]; //reference to library .d.ts files


	var tsResult = gulp.src(sourceTsFiles)
		.pipe(sourcemaps.init())
		.pipe(tsc(tsProject));

	tsResult.dts.pipe(gulp.dest(config.tsOutputPath));
	return tsResult.js
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.tsOutputPath));
});

/**
 * Remove all generated JavaScript files from TypeScript compilation.
 */
gulp.task('ts-clean', function () {
	var typeScriptGenFiles = [
		config.tsOutputPath +'/**/*.js',    // path to all JS files auto gen'd by editor
		config.tsOutputPath +'/**/*.js.map', // path to all sourcemap files auto gen'd by editor
		'!' + config.tsOutputPath + '/lib'
	];

	// delete the files
	return del(typeScriptGenFiles);
});

gulp.task('watch', function() {
	gulp.watch([config.allTypeScript], ['ts-lint', 'ts-compile']);
});

gulp.task('default', ['ts-lint', 'ts-compile']);