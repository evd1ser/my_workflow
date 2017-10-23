'use strict';

module.exports = function() {
    $.gulp.task('up', function () {
        return $.gulp.src($.config.root + '/**', {since: $.gulp.lastRun('up')})
            .pipe($.ftp({
                host: $.config.ftp.host,
                user: $.config.ftp.user,
                pass: $.config.ftp.pass
            }));
    });
    $.gulp.task('up.css', function () {
        return $.gulp.src($.config.root + '/assets/css/**')
            .pipe($.ftp({
                host: $.config.ftp.host,
                user: $.config.ftp.user,
                pass: $.config.ftp.pass
            }));
    });
    $.gulp.task('up.js', function () {
        return $.gulp.src($.config.root + '/assets/js/**')
            .pipe($.ftp({
                host: $.config.ftp.host,
                user: $.config.ftp.user,
                pass: $.config.ftp.pass
            }));
    });
};