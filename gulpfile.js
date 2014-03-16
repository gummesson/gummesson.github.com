/* Modules */

var gulp     = require('gulp');
var stylus   = require('gulp-stylus');
var prefixer = require('gulp-autoprefixer');
var pixrem   = require('gulp-pixrem');
var minify   = require('gulp-minify-css');
var rename   = require('gulp-rename');
var exec     = require('gulp-exec');

/* Tasks */

gulp.task('css', function() {
  return gulp
    .src('_assets/styl/index.styl')
    .pipe(stylus({
      set: ['include css']
    }))
    .pipe(prefixer())
    .pipe(pixrem())
    .pipe(minify())
    .pipe(rename('style.css'))
    .pipe(gulp.dest('assets/css/'));
});

gulp.task('img', function() {
  return gulp
    .src('_assets/img/**/*')
    .pipe(gulp.dest('assets/img/'));
});

gulp.task('serve', function() {
  gulp.src('./')
    .pipe(exec(
    'jekyll serve --watch', {
      silent: false
    }));
});

gulp.task('watch', function() {
  gulp.watch('_assets/styl/**/*.styl', ['css']);
});

gulp.task('assets', [
  'img',
  'css'
]);

gulp.task('default', [
  'assets',
  'serve',
  'watch'
]);