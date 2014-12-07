var gulp = require('gulp'),
	gutil = require('gulp-util'),
	gconcat = require('gulp-concat'),
	grename = require('gulp-rename'),
	guglify = require('gulp-uglify'),
	gcoffee = require('gulp-coffee'),
	clean = require('gulp-clean'),
	jqc = require('gulp-jquery-closure'),
	gcoffeelint = require('gulp-coffeelint'),
	runSequence = require('run-sequence');


gulp.task('dist', function() {
  gulp.src(
		[
			'src/js/barrayuda.js',
			'src/js/delOtroLado.js',
			'src/js/barralado.js',

		]
	)
    .pipe(gconcat('barralado.js'))
    .pipe(gulp.dest('dist/'))
    .pipe(grename('barralado.min.js'))
    .pipe(guglify())
    .pipe(gulp.dest('dist/'));
});

gulp.task('lint', function (){
	gulp.src('src/coffee/*.coffee')
		.pipe(gcoffeelint())
		.pipe(gcoffeelint.reporter());
});

gulp.task('coffee', ['lint'], function (){
	gulp.src('src/coffee/*.coffee')
		.pipe(gcoffee({bare: true}).on('error', gutil.log))
		.pipe(gulp.dest('src/js/'));
});

gulp.task('clean', function (){
	gulp.src('dist/', {read: false})
		.pipe(clean());
});

gulp.task('build', function(){
	runSequence('clean', 'coffee', 'dist', function(){
		// console.log('Barralado.js has been built. ;)');
	});
});

gulp.task('default', ['build']);
