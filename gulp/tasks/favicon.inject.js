'use strict';
// var fs = require('fs');

// Inject the favicon markups in your HTML pages. You should run
// this task whenever you modify a page. You can keep this task
// as is or refactor your existing HTML pipeline.
module.exports = function() {
    $.gulp.task('favicon-inject', function () {
        return $.gulp.src($.config.root + '/**.html')
            .pipe($.gp.realFavicon.injectFaviconMarkups(JSON.parse($.fs.readFileSync($.config.favicon_data_file)).favicon.html_code))
            .pipe($.gulp.dest($.config.root));
    });
};
/*
// Check for updates on RealFaviconGenerator (think: Apple has just
// released a new Touch icon along with the latest version of iOS).
// Run this task from time to time. Ideally, make it part of your
// continuous integration system.
module.exports = function() {
    $.gulp.task('check-for-favicon-update', function (done) {
        var currentVersion = JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).version;
        $.gp.realFavicon.checkForUpdates(currentVersion, function (err) {
            if (err) {
                throw err;
            }
        });
    });
};
    */