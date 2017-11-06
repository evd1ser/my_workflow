/* eslint-disable no-undef */
requirejs.config({
  //By default load any module IDs from js/lib
  baseUrl: 'assets/js',
  shim: {
    'bootstrap': {
      'deps': [
        'popper',
        'jquery'
      ]
    },
    'waypoint': {
      'deps': [
        'jquery'
      ]
    },
    'swiper': {
      'deps': [
        'jquery'
      ]
    }
  },
  paths: {
    /**
     * Libs for apps
     */
    'jquery': 'jquery.min',
    'popper': 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.5/umd/popper.min',
    'bootstrap': 'bootstrap.min',
    'waypoint': 'jquery.waypoints.min',
    'swiper': 'swiper.min',

    /**
     * my modules
     */
    'animate': 'app.animate',
    'initGallary': 'app.sliders',
    'initSoftScroll': 'app.scroll'
  }
});

require(['jquery', 'bootstrap', 'animate', 'initGallary'], function ( $ ){
  console.log('точка входа');
  // Twitter Bootstrap 3 carousel plugin
  //     $("body").html('Hi RequireJS!');
});

require(['popper'], function ( p ){
  window.Popper = p;
});