'use strict';
// File where the favicon markups are stored
// Generate the icons. This task takes a few seconds to complete.
// You should run it at least once to create the icons. Then,
// you should run it whenever RealFaviconGenerator updates its
// package (see the check-for-favicon-update task below).

module.exports = function() {
    $.gulp.task('favicon', $.gulp.series(
        $.gulp.parallel(
            'favicon-generate',
            'pug'
        ),
        'favicon-inject'
    ));
};