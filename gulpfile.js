/* eslint-disable no-undef */
'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    template: require('./gulp/paths/template.js'),
    jsStock: require('./gulp/paths/js.stock.js'),
    cssStock: require('./gulp/paths/css.stock.js'),
    app: require('./gulp/paths/app.js')
  },
  gulp: require('gulp'),
  rimraf: require('rimraf'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')(),
  image: require('gulp-imagemin'),
  csscomb: require('gulp-csscomb'),
  ftp: require('gulp-ftp'),
  gcmq: require('gulp-group-css-media-queries'),
  fs: require('fs'),
  through2: require('through2'),
  emitty: require('emitty').setup('source/template', 'pug')
}
;
$.emitty.scan();


$.path.task.forEach(function ( taskPath ){
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  'sprite.svg',
  $.gulp.parallel(
    'sass',
    'pug',
    'js.stock',
    'js.process',
    'copy.image',
    'copy.fonts',
    'css.stock'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));