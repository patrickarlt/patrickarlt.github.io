var gulp = require('gulp');

gulp.task('default', ['watch', 'watchify', 'acetate:watch', 'browser-sync']);
gulp.task('deploy', ['watch', 'watchify', 'browser-sync']);