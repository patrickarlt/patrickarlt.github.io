'use strict';

var watchify = require('watchify');
var browserify = require('browserify');
var babelify = require('babelify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var assign = require('lodash.assign');
var reload = require('browser-sync').reload;
var reload = require('browser-sync').reload;

function create(options){
  options = assign({
    entries: './src/js/main.js',
    debug: true,
    transform: [babelify]
  }, options);

  return browserify(options);
}

function build(b){
  return b.bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/js/'))
    .pipe(reload({stream:true}));
}

gulp.task('browserify', ['clean'], function () {
  return build(create());
});

var b = watchify(create(watchify.args));

gulp.task('watchify', ['clean'], function(){
  build(b);
}); // so you can run `gulp js` to build the file

b.on('update', function(){
  build(b);
}); // on any dep update, runs the bundler

b.on('log', gutil.log); // output build logs to terminal