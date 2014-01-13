/* Modules */

var gulp     = require('gulp');
var stylus   = require('gulp-stylus');
var prefixer = require('gulp-autoprefixer');
var minify   = require('gulp-minify-css');
var exec     = require('gulp-exec');

/* Tasks */

gulp.task('css', function() {
  return gulp
    .src('_assets/stylus/style.styl')
    .pipe(stylus())
    .pipe(prefixer('last 2 versions'))
    .pipe(minify())
    .pipe(gulp.dest('assets/css/'));
});

gulp.task('font', function() {
  return gulp
    .src('_assets/font/**/*')
    .pipe(gulp.dest('assets/font/'));
});

gulp.task('img', function() {
  return gulp
    .src('_assets/img/**/*')
    .pipe(gulp.dest('assets/img/'));
});

gulp.task('js', function() {
  return gulp
    .src([
      'bower_components/html5shiv/dist/html5shiv.js',
      'bower_components/highlightjs/highlight.pack.js'
    ])
    .pipe(gulp.dest('assets/js/'));
});

gulp.task('copy', function() {
  gulp.run('font', 'img', 'js');
});

gulp.task('serve', function() {
  gulp.src('./')
    .pipe(exec('jekyll serve --watch'));
});

gulp.task('default', ['css', 'copy', 'serve'], function() {
  gulp.watch('_assets/stylus/**/*.styl', function() {
    gulp.run('css');
  });
});
