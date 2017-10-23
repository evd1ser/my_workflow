'use strict';
// File where the favicon markups are stored
// Generate the icons. This task takes a few seconds to complete.
// You should run it at least once to create the icons. Then,
// you should run it whenever RealFaviconGenerator updates its
// package (see the check-for-favicon-update task below).

module.exports = function() {
    $.gulp.task('favicon-generate', function (done) {
        $.gp.realFavicon.generateFavicon({
            masterPicture: './source/favicon/icon.png',
            dest: $.config.root + '/favicon',
            iconsPath: 'favicon',
            design: {
                ios: {
                    pictureAspect: 'backgroundAndMargin',
                    backgroundColor: $.config.app.color,
                    margin: '14%',
                    assets: {
                        ios6AndPriorIcons: true,
                        ios7AndLaterIcons: true,
                        precomposedIcons: true,
                        declareOnlyDefaultIcon: true
                    },
                    appName: $.config.app.name
                },
                desktopBrowser: {},
                windows: {
                    pictureAspect: 'noChange',
                    backgroundColor: $.config.app.color,
                    onConflict: 'override',
                    assets: {
                        windows80Ie10Tile: true,
                        windows10Ie11EdgeTiles: {
                            small: true,
                            medium: true,
                            big: true,
                            rectangle: true
                        }
                    },
                    appName: $.config.app.name
                },
                androidChrome: {
                    pictureAspect: 'backgroundAndMargin',
                    margin: '17%',
                    backgroundColor: $.config.app.color,
                    themeColor: $.config.app.color,
                    manifest: {
                        name: $.config.app.name,
                        display: 'standalone',
                        orientation: 'notSet',
                        onConflict: 'override',
                        declared: true
                    },
                    assets: {
                        legacyIcon: true,
                        lowResolutionIcons: true
                    }
                },
                safariPinnedTab: {
                    pictureAspect: 'blackAndWhite',
                    threshold: 75,
                    themeColor: $.config.app.color
                }
            },
            settings: {
                scalingAlgorithm: 'Mitchell',
                errorOnImageTooSmall: false
            },
            markupFile: $.config.favicon_data_file
        }, function () {
            done();
        });
    });
};