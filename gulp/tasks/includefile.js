'use strict';

module.exports = function() {

    $.gulp.task('inject.css', function(cb) {

        var target = gulp.src($.config.root + '*.html');
        // It's not necessary to read the files (will speed up things), we're only after their paths:
        var sources = gulp.src([$.config.root + './assets/js/**/*.js', $.config.root + '/assets/css/**/*.css'], {read: false});

        return target.pipe($.gp.inject(sources))
            .pipe($.gulp.dest($.config.root + '/assets/fonts'));

    });
};