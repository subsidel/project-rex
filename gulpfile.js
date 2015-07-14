var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');

var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('build', function () {
  browserify({
    entries: 'jsx/index.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(gulp.dest('public/js/'));
});

gulp.task('watch', function() {
  gulp.watch(['jsx/**/*'], ['build']);
});

gulp.task('default', ['build', 'watch']);
