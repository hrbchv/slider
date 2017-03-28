'use strict';

var gulp = require('gulp');

var sass = require('gulp-sass');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var csscomb = require('gulp-csscomb');
var imagemin = require('gulp-imagemin');
var clean = require('gulp-contrib-clean');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('scripts', function() {
  gulp.src(['src/js/**/*.js'])
    // .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
    .pipe(browserSync.stream());
})

gulp.task('styles', function() {
  gulp.src(['src/sass/style.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    // .pipe(csscomb())
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.stream());

    gulp.src(['src/sass/lib/animation.scss'])
      .pipe(sass().on('error', sass.logError))
      // .pipe(csso())
      .pipe(gulp.dest('build/css/lib'))
      .pipe(browserSync.stream());
})

gulp.task('html', function() {
  gulp.src(['src/*.html'])
    .pipe(gulp.dest('build'))
    .pipe(browserSync.stream());
})

gulp.task('image', function() {
  gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'));
})

gulp.task('copy', function() {
  gulp.src(['src/img/**/*'])
    .pipe(gulp.dest('build/img'));
  gulp.src(['src/font/**/*'])
    .pipe(gulp.dest('build/font'));
})

gulp.task('serve', ['copy', 'styles', 'scripts', 'html', 'image'], function() {

  browserSync.init({
    server: "./build"
  });

  gulp.watch("src/sass/**/*.scss", ['styles']);
  gulp.watch("src/js/**/*.js", ['scripts']);
  gulp.watch("src/*.html", ['html']);
});

gulp.task('default', ['serve']);
