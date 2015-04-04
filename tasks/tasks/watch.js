var config = require('../config');
var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('watch', ['watchify'], function(){
  watch(config.sass, function(){
    gulp.start('css');
  });
})