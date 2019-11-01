'use strict'
var gulp = require('gulp');

// Hello World
gulp.task('hello', function(done) {
    console.log('hello world');
    done();
});


// SSCC to CSS and minify

//  require gulp-sass plugin 
var sass = require('gulp-sass');
sass.compiler = require('node-sass');

gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

//  Minify Javascript 
const minify = require('gulp-minify');

gulp.task('compress', function(done) {
  gulp.src(['lib/*.js', 'lib/*.mjs'])
    .pipe(minify())
    .pipe(gulp.dest('dist'))
    done();
});