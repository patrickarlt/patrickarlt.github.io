var Acetate = require('acetate');
var server = require('acetate/lib/modes/server');
var gulp = require('gulp');

gulp.task('acetate:server',function (callback) {
  var acetate = new Acetate({
    outDir: 'dist'
  });
  server(acetate);
});

gulp.task('acetate:build', function () {
  var acetate = new Acetate({
    outDir: 'dist'
  });
  acetate({
    outDir: 'dist'
  });
});
