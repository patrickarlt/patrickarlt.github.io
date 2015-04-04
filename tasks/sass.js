var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var reload = require('browser-sync').reload;
var filter = require('gulp-filter');

gulp.task('sass', function () {
  gulp.src('src/css/**/*.scss')
      .pipe(sass({errLogToConsole: true}))
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(autoprefixer('last 2 versions'))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('dist/css'))
      .pipe(filter('**/*.css'))
      .pipe(reload({stream:true}));
});