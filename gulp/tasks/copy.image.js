'use strict';

module.exports = function() {
  $.gulp.task('copy.image', function() {
    return $.gulp.src(['./source/images/*.*'], { since: $.gulp.lastRun('copy.image') })
        .pipe($.image({
            interlaced: true,
            progressive: true,
            optimizationLevel: 5,
            svgoPlugins: [{removeViewBox: true}]
        }))
        .pipe($.gulp.dest($.config.root + '/assets/img'));
  });
};
