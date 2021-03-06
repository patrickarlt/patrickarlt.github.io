var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', ['sass', 'browserify', 'acetate:build'], function () {
  return gulp.src('./dist/**/*')
    .pipe(ghPages({
      branch: 'master'
    }));
});
