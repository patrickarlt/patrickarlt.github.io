var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('src/css/**/*.scss')
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(autoprefixer('last 2 versions'))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('dist/css'))
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/css/**/*.scss', ['sass']);
});
