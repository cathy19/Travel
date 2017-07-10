/*
* @Author: cathy.chen
* @Date:   2017-07-07 11:50:03
* @Last Modified by:   cathy.chen
* @Last Modified time: 2017-07-07 14:48:20
*/
$(function(){

	'use strict';

	$("#myCarousel").carousel({
		interval : 4000,
	})

	$(".gotop").click(function(){
        $("html,body").animate({
            scrollTop:0
        },800);
    });
    $(window).scroll(function() {
        if ( $(this).scrollTop() > $(window).height()){
            $('.gotop').fadeIn("fast");
        } else {
            $('.gotop').fadeOut("fast");
        }
    });
    $(window).trigger('scroll');

    new WOW().init();


})