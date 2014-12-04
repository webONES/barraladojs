var gulp = require('gulp'),
	gconcat = require('gulp-concat'),
	grename = require('gulp-rename'),
	guglify = require('gulp-uglify');

gulp.task('dist', function() {
  return gulp.src([
      'src/helper.js',
  		'src/barralado.js'
  	])
        .pipe(gconcat('barralado.js'))
        .pipe(gulp.dest('dist/'))
        .pipe(grename('barralado.min.js'))
        .pipe(guglify())
        .pipe(gulp.dest('dist/'));
});