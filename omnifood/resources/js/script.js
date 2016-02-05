/*jslint browser: true*/
/*global $*/

$(document).ready(function () {
    "use strict";
    $('.js--section-features').waypoint(function (direction) {
        if (direction === "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '65px;'
    });


    /* button clicked */
    $('.js--im-hungry').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    
    $('.js--show-me-more').click(function () {
       $('html,body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
    });


    /* nav clicked */
    $(function () {
      $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    }); 
    
    /* animations */
    $('.js--wp-1').waypoint(function () {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function () {
        $('.js--wp-2').addClass('animated slideInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function () {
        $('.js--wp-3').addClass('animated fadeIn');
    });
    
    $('.js--wp-4').waypoint(function () {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    /* mobile nav */
    $('.js--mobile-nav-icon').click(function () {
        $('.main-nav').slideToggle(200);
        
        var icon = $('js--mobile-nav-icon i');
        if (icon.hasClass === 'ion-navicon-round') {
            icon.removeClass('ion-navicon-round');
            icon.addClass('ion-close-round');
        } else {
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');
        }
    });
    
    /* maps */
    var map = new GMaps({
      div: '.map',
      lat: 38.807398,
      lng: -77.14
    });

    map.addMarker({
      lat: 38.807398,
      lng: -77.1559237,
      title: 'HQ',
      infoWindow: {
          content: '<p>HQ</p>'
        }
    });
    
});