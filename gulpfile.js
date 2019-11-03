'use strict'
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var del = require('del');

// useref 
gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulp.dest('dist'))
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'))
});

// Watch Function 
gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', gulp.series('sass')); 
})

//  require gulp-sass plugin 
sass.compiler = require('node-sass');

// SSCC to CSS and minify
gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('app/css'))
});

//del
gulp.task('clean:dist', function() {
  return del.sync('dist');
})