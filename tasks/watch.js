var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('watch', ['clean', 'watchify'], function(){
  watch('src/css/**/*.scss', function(){
    gulp.start('sass');
  });
})