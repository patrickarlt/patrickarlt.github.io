var gulp = require('gulp');
var requireDir = require('require-dir');

requireDir('./tasks', { recurse: true });

gulp.task('default', [
  'sass',
  'watch',
  'watchify',
  'browser-sync',
  'acetate:watch'
]);