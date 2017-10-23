'use strict';

module.exports = function() {
  $.gulp.task('js.stock', function() {
    return $.gulp.src($.path.jsStock)
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};