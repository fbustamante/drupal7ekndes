/* ------------------------------------------------------------------------
Main Navigation
 * ------------------------------------------------------------------------- */
function initScrollTop() {
    var change_speed = 1200;
    jQuery('a.link-top').click(function () {
        if (!jQuery.browser.opera) {
            jQuery('body').animate({
                scrollTop: 0
            }, {
                queue: false,
                duration: change_speed
            })
        }
        jQuery('html').animate({
            scrollTop: 0
        }, {
            queue: false,
            duration: change_speed
        });
        return false
    })
}

jQuery(window).load(function () {

		/* View Make Fade Function */		
		jQuery('.view-make-browser .views-row').hover(function(){
				jQuery(this).siblings().addClass('fade');
		}, function(){
				jQuery(this).siblings().removeClass('fade');
		});

		initScrollTop();
		var nav = jQuery("#block-system-main-menu");
		var duration = 300;
		jQuery(nav).find("li.expanded").each(function () {
        var height = jQuery(this).find("> ul.menu").height();
        jQuery(this).find("> ul.menu").css({
            display: "none",
            height: 0,
            overflow: "hidden"
        });
        jQuery(this).find("li.expanded > ul.menu").css({
            display: "none",
            width: 0
        });
        if (!jQuery.browser.msie) {
            jQuery(this).find("> ul.menu").css({
                "opacity": 0
            });
            jQuery(this).find("> ul.menu").css({
                "opacity": 0
            })
        }
        jQuery(this).mouseenter(function () {
            jQuery(this).addClass("hover");
            var drop = jQuery(this).find("> ul.menu");
            if (jQuery.browser.msie) {
                jQuery(drop).css({
                    display: "block"
                }).stop().animate({
                    "height": height
                }, duration, function () {
                    jQuery(this).css({
                        "overflow": "visible"
                    })
                })
            } else {
                jQuery(drop).css({
                    display: "block"
                }).stop().animate({
                    "height": height,
                    "opacity": 1
                }, duration, function () {
                    jQuery(this).css({
                        "overflow": "visible"
                    })
                })
            }
        }).mouseleave(function () {
            var _this = jQuery(this);
            if (jQuery.browser.msie) {
                jQuery(this).find("> ul.menu").stop().css({
                    "overflow": "hidden"					
                }).animate({
                    "height": 0
                }, duration, function () {
                    jQuery(_this).find("> ul.menu").css({
                    "display": "none" })									
                })
            } else {
                jQuery(this).find("> ul.menu").stop().css({
                    "overflow": "hidden"
                }).animate({
                    "height": 0,
                    "opacity": 0
                }, duration, function () {
                    jQuery(_this).removeClass("hover")
                })
            }
        });
		
		
		
        
    })
});	

// Auto-Fill Plugin
// Written by Joe Sak http://www.joesak.com/2008/11/19/a-jquery-function-to-auto-fill-input-fields-and-clear-them-on-click/
(function($){
  $.fn.autofill = function(options){
    var defaults = {
      value:'',
      defaultTextColor:"#AAAAAA",
      activeTextColor:"#000000",
      password: false
    };
    var options = $.extend(defaults,options);
    return this.each(function(){
      var obj=$(this);
      obj.css({color:options.defaultTextColor})
        .val(options.value)
        .focus(function(){
          if(obj.val()==options.value){
            obj.val("").css({color:options.activeTextColor});
            if (options.password && obj.attr('type') == 'text') {
              obj.attr('type', 'password');
            }
          }
        })
        .blur(function(){
          if(obj.val()==""){
            obj.css({color:options.defaultTextColor}).val(options.value);
            if (options.password && obj.attr('type') == 'password') {
              obj.attr('type', 'text');
            }
          }
        });
    });
  };
})(jQuery);

(function ($) {
Drupal.behaviors.corporatex = {
  attach: function (context) {
    $('#edit-search-block-form--2', context).autofill({
      value: "Search an Address, City, Town, Estate or Postal Code."
    });
  } 
};
})(jQuery);
