/* Modules */

var gulp     = require('gulp');
var stylus   = require('gulp-stylus');
var prefixer = require('gulp-autoprefixer');
var minify   = require('gulp-minify-css');
var exec     = require('gulp-exec');

/* Configuration */

var config = {
  stylus: {
    all: '_assets/stylus/**/*.styl',
    src: '_assets/stylus/style.styl',
    dest: 'assets/css/'
  },
  prefixer: {
    browsers: 'last 2 versions'
  },
  exec: {
    serve: 'jekyll serve --watch'
  }
};

/* Tasks */

gulp.task('css', function() {
  return gulp
    .src(config.stylus.src)
    .pipe(stylus())
    .pipe(prefixer(config.prefixer.browsers))
    .pipe(minify())
    .pipe(gulp.dest(config.stylus.dest));
});

gulp.task('serve', function() {
  gulp.src('./')
    .pipe(exec(config.exec.serve));
});

gulp.task('default', ['css', 'serve'], function() {
  gulp.watch(config.stylus.all, function() {
    gulp.run('css');
  });
});
