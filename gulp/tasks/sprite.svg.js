'use strict';

module.exports = function() {
  $.gulp.task('sprite.svg', function() {
    return $.gulp.src([
      './source/svg/*.svg',
      '!./source/svg/iconsPack.svg',
    ])
      .pipe($.image({
        svgoPlugins: [{
          removeViewBox: false
        }]
      }))

      .pipe($.gp.svgSprites({
        mode: "symbols",
        // selector: "icon-%f",
        cssFile: "./source/style/common/_sprite.scss",
        svg: {
          symbols: "../../build/assets/img/iconsPack.svg"
        },
        preview: {
          sprite: "index.html"
        },
        baseSize: 16,
        // preview: false,
        // templates: {
        //     scss: true
        // }
      }))
      .pipe($.gulp.dest('./source/svg/'))
  })
};
