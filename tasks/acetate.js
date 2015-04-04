var acetate = require('acetate');
var gulp = require('gulp');
var path = require('path');
var reload = require('browser-sync').reload;
var config = path.join(process.cwd(), 'acetate.conf.js');

gulp.task('acetate:watch', ['clean'], function () {
  var site = acetate({
    config: config,
    watcher: true
  });

  site.on('build', reload);
});

gulp.task('acetate:build', ['clean'], function (callback) {
  acetate({
    config: config
  }, callback);
});
