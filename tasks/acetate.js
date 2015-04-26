var acetate = require('acetate');
var gulp = require('gulp');
var reload = require('browser-sync').reload;

gulp.task('acetate:watch', ['clean'], function () {
  var site = acetate({
    dest: 'dist',
    watcher: true
  });

  site.on('build', reload);
});

gulp.task('acetate:build', function () {
  acetate({
    dest: 'dist'
  });
});
