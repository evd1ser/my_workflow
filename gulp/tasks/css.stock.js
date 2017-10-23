'use strict';

module.exports = function() {
  $.gulp.task('css.stock', function() {
    return $.gulp.src($.path.cssStock)
      .pipe($.gp.csso())
      .pipe($.gulp.dest($.config.root + '/assets/css'))
  })
};
