var Acetate = require('acetate');
var server = require('acetate/lib/modes/server');
var builder = require('acetate/lib/modes/builder');
var gulp = require('gulp');

function acetate () {
  return new Acetate({
    outDir: 'dist'
  });
}

gulp.task('acetate:server', function (callback) {
  server(acetate());
});

gulp.task('acetate:build', function () {
  return builder(acetate());
});
