/* eslint-disable no-undef */
'use strict';

module.exports = function (){
  $.gulp.task('pug', function (){
    return $.gulp.src($.path.template)

      .pipe($.gp.if($.iswatch, $.emitty.stream($.emittyChangedFile)))


      .pipe($.gp.pug({pretty: true}))
      .on('error', $.gp.notify.onError(function ( error ){
        return {
          title: 'Pug',
          message: error.message
        };
      }))
      .pipe($.gulp.dest($.config.root))


      .pipe($.gp.w3cjs())
      .pipe($.through2.obj(function ( file, enc, cb ){
        if (file.w3cjs.messages.length){
          cb(file.w3cjs.messages, file);
        } else {
          cb(null, file);
        }
      }))
      .on('error', $.gp.notify.onError(function (error){
        // console.log(error.messages);
        return {
          title: 'Валидация',
          message: error[0].message
        };
      }))
      .pipe($.gulp.dest($.config.root));
  });
};