var gulp = require('gulp');
var requireDir = require('require-dir');

requireDir('./tasks', { recurse: true });

gulp.task('default', ['watchify','sass:watch', 'acetate:server']);
