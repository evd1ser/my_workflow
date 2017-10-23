'use strict';

module.exports = function() {
  $.gulp.task('jade', function() {
    return $.gulp.src($.path.template)
      .pipe($.gp.jade({ pretty: true }))
      .on('error', $.gp.notify.onError(function(error) {
        return {
          title: 'Jade',
          message:  error.message
        }
       }))
      .pipe($.gulp.dest($.config.root));
  });
};
