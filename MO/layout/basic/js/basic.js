/**
 * 움직이는 배너 Jquery Plug-in
 * @author  cafe24
 */

;(function($){

    $.fn.floatBanner = function(options) {
        options = $.extend({}, $.fn.floatBanner.defaults , options);
        
        return this.each(function() {
            var aPosition = $(this).position();
            var node = this;
            
            $(window).scroll(function() {       
                var _top = $(document).scrollTop();
                _top = (aPosition.top < _top) ? _top : aPosition.top;

                setTimeout(function () {
                    $(node).stop().animate({top: _top}, options.animate);
                }, options.delay);
            });
        });
    };

    $.fn.floatBanner.defaults = { 
        'animate'  : 500,
        'delay'    : 500
    };

})(jQuery);
    
    
    
/**
 * 문서 구동후 시작
 */
$(document).ready(function(){    
    $('#quickR, #quickL').floatBanner();

	var agent = navigator.userAgent.toLowerCase();
    if (agent.indexOf('iphone') != -1 || agent.indexOf('android') != -1) {
        $('#mobileWeb').html('<a href="#none" onclick="javascript:location.href='http://m.'+document.domain;"><img src="http://img.cafe24.com/img1/ec_mobile/tle_txt.png" /></a>');
        $('#mobileWeb').attr('style', 'text-align:center;width:100%;height:50px;background-image:URL("http://img.cafe24.com/img1/ec_mobile/tle_bg.png")');
    }
});
