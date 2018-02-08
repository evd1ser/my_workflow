'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.iswatch = true;

    $.gulp.watch(['./source/svg/**/*.svg', '!source/svg/iconsPack.svg'], $.gulp.series('sprite.svg'));
    $.gulp.watch('./source/js/**/*.js', $.gulp.series('js.process'));
    $.gulp.watch('./source/style/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./source/template/**/*.pug', $.gulp.series('pug'))
      .on('all', function (event, filepath) {
        $.emittyChangedFile = filepath;
      });
    $.gulp.watch('./source/images/**/*.*', $.gulp.series('copy.image'));
  });
};