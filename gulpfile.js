'use strict'
var gulp = require('gulp');

// Hello World
gulp.task('hello', function(done) {
    console.log('hello world');
    done();
});

//  require gulp-sass plugin 
var sass = require('gulp-sass');
sass.compiler = require('node-sass');


// SSCC to CSS and minify
gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('app/css'))

});

gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', gulp.series('sass')); 
})

//  Minify Javascript 
const minify = require('gulp-minify');

gulp.task('compress', function(done) {
  gulp.src(['lib/*.js', 'lib/*.mjs'])
    .pipe(minify())
    .pipe(gulp.dest('dist'))
    done();
});