/* eslint-disable no-undef */
require(["jquery"], function($){
    console.log('jq добавление функциональности');
    $.fn.extend({
        animateCss: function (animationName) {
            return this.each(function () {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

                $(this).css({visibility: "visible"});

                $(this).addClass('animated ' + animationName)
                    .one(animationEnd, function () {
                        $(this).removeClass('animated ' + animationName);
                    });
            });
        },
        hiddenAn: function () {
            return this.each(function () {
                $(this).css({visibility: "hidden"});
            });
        }
    });
});

require(['jquery', 'waypoint'], function($){
    console.log('jq плагин с анимацией');
    var anim = $('[data-animation]');
    anim.hiddenAn();

    anim.waypoint({
        handler: function (direction) {
            var el = $(this.element);
            var a_type = $(el).data('animation');
            switch (direction) {
                case 'up':
                    el.hiddenAn();
                    break;
                case 'down':
                    el.animateCss(a_type);
                    break;
            }
        },
        offset: function () {
            var offset;
            var persent = $(this.element).data('offset');
            if (persent) {
                var p = parseInt(persent);
                offset = this.context.innerHeight() * p / 100;
            } else {
                offset = this.context.innerHeight() - this.adapter.outerHeight();
            }
            return offset;
        }
    });

});

