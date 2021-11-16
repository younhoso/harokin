//window popup script
function winPop(url) {
    window.open(url, "popup", "width=300,height=300,left=10,top=10,resizable=no,scrollbars=no");
}
/**
 * document.location.href split
 * return array Param
 */
function getQueryString(sKey)
{
    var sQueryString = document.location.search.substring(1);
    var aParam       = {};

    if (sQueryString) {
        var aFields = sQueryString.split("&");
        var aField  = [];
        for (var i=0; i<aFields.length; i++) {
            aField = aFields[i].split('=');
            aParam[aField[0]] = aField[1];
        }
    }

    aParam.page = aParam.page ? aParam.page : 1;
    return sKey ? aParam[sKey] : aParam;
};

$(document).ready(function(){
    // tab
    $.eTab = function(ul){
        $(ul).find('a').click(function(){
            var _li = $(this).parent('li').addClass('selected').siblings().removeClass('selected'),
                _target = $(this).attr('href'),
                _siblings = '.' + $(_target).attr('class');
            $(_target).show().siblings(_siblings).hide();
            return false
        });
    }
    if ( window.call_eTab ) {
        call_eTab();
    };
});
/* ==========================================================
 * MobilySlider
 * date: 20.1.2010
 * author: Marcin Dziewulski
 * last update: 02.02.2011
 * web: http://www.mobily.pl or http://playground.mobily.pl
 * email: hello@mobily.pl
 * Free to use under the MIT license.
 * ========================================================== */
(function($){$.fn.mobilyslider=function(options){
	var defaults={content:".sliderContent",
	children:"div",
		transition:"horizontal",
		animationSpeed:300,
		autoplay:false,
		autoplaySpeed:3000,
		pauseOnHover:false,
		bullets:true,
		arrows:true,
		arrowsHide:true,
		prev:"prev",
		next:"next",
		animationStart:function(){},
		animationComplete:function(){}};
	var sets=$.extend({},defaults,options);
	return this.each(function(){var $t=$(this),item=$t.children(sets.content).children(sets.children),l=item.length-1,w=item.width(),h=item.height(),step=0,play,bullets,arrows,z,active,bullet;var slider={init:function(){slider.data();if(sets.bullets){slider.bullets.create()}if(sets.arrows){slider.arrows.create()}if(sets.autoplay){slider.autoplay()}slider.triggers()},data:function(){item.each(function(i){$(this).css("z-index",-(i-l))});if(sets.transition=="fade"){item.hide().eq(0).show()}},zindex:{prev:function(){step==l?item.eq(0).css("z-index",l+3):item.css("z-index",l+1);item.eq(step).css("z-index",l+4).next(item).css("z-index",l+2)},next:function(){item.css("z-index",l+1).eq(step).css("z-index",l+3).prev(item).css("z-index",l+2)},bullets:function(){item.css("z-index",l+1).eq(active).css("z-index",l+2);item.eq(step).css("z-index",l+3)},trigger:function(){if(z==1){slider.zindex.next()}else{if(z==-1){slider.zindex.prev()}else{if(z==0){slider.zindex.bullets()}}}}},slide:{left:function(sign){sets.animationStart.call(this);item.eq(step).animate({left:sign+"="+w},sets.animationSpeed,function(){slider.zindex.trigger()}).animate({left:0},sets.animationSpeed+200,function(){sets.animationComplete.call(this)})},top:function(sign){sets.animationStart.call(this);item.eq(step).animate({top:sign+"="+h},sets.animationSpeed,function(){slider.zindex.trigger()}).animate({top:0},sets.animationSpeed+200,function(){sets.animationComplete.call(this)})},fade:function(){sets.animationStart.call(this);item.fadeOut(sets.animationSpeed).eq(step).fadeIn(sets.animationSpeed,function(){sets.animationComplete.call(this)})}},animation:{previous:function(){step==0?step=l:step--;z=-1;switch(sets.transition){case"horizontal":slider.slide.left("-");break;case"vertical":slider.slide.top("+");break;case"fade":slider.slide.fade();break}},next:function(){step==l?step=0:step++;z=1;switch(sets.transition){case"horizontal":slider.slide.left("+");break;case"vertical":slider.slide.top("-");break;case"fade":slider.slide.fade();break}}},autoplay:function(){play=setInterval(function(){slider.animation.next();if(sets.bullets){setTimeout(function(){slider.bullets.update()},sets.animationSpeed+300)}},sets.autoplaySpeed)},pause:function(){clearInterval(play)},bullets:{create:function(){$t.append($("<div />").addClass("sliderBullets"));bullets=$t.find(".sliderBullets");for(i=0;i<=l;i++){bullets.append($("<a />").attr({href:"#",rel:i}).text(i))}},trigger:function(){bullet=bullets.find("a");bullet.eq(0).addClass("active");bullet.click(function(){var b=$(this),rel=b.attr("rel");active=bullet.filter(".active").attr("rel");step=rel;sign=rel>active?"+":"-";z=0;if(!b.hasClass("active")){switch(sets.transition){case"horizontal":slider.slide.left(sign);break;case"vertical":slider.slide.top(sign);break;case"fade":slider.slide.fade();break}}bullet.removeClass("active");b.addClass("active");return false})},update:function(){bullet.removeClass("active").eq(step).addClass("active")}},arrows:{create:function(){$t.append($("<div />").addClass("sliderArrows"));arrows=$t.find(".sliderArrows");arrows.append($("<a />").attr("href","#").addClass(sets.prev).text("Previous"));arrows.append($("<a />").attr("href","#").addClass(sets.next).text("Next"))},trigger:function(){arrows.find("."+sets.prev).click(function(){slider.animation.previous();if(sets.bullets){slider.bullets.update()}return false});arrows.find("."+sets.next).click(function(){slider.animation.next();if(sets.bullets){slider.bullets.update()}return false});if(sets.arrowsHide){arrows.hide();$t.hover(function(){arrows.show()},function(){arrows.hide()})}}},triggers:function(){if(sets.arrows){slider.arrows.trigger()}if(sets.bullets){slider.bullets.trigger()}if(sets.pauseOnHover){$t.hover(function(){slider.pause()},function(){slider.autoplay()})}}};slider.init()})}}(jQuery));


$(document).ready(function(){

	$('#cateBanner').mobilyslider({
		content: '.sliderContent',
		children: 'div',
		transition: 'vertical',
		animationSpeed: 50,
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnHover: false,
		bullets: true,
		arrows: false,
		arrowsHide: false,
		prev: 'prev',
		next: 'next',
		animationStart: function(){},
		animationComplete: function(){}
	});

	$('#mainSlider').mobilyslider({
		content: '.sliderContent',
		children: 'div',
		transition: 'fade',
		animationSpeed: 500,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: false,
		bullets: true,
		arrows: true,
		arrowsHide: false,
		prev: 'prev',
		next: 'next',
		animationStart: function(){},
		animationComplete: function(){}
	});

	$('#sliderSubBanner').mobilyslider({
		content: '.sliderContent',
		children: 'div',
		transition: 'horizontal',
		animationSpeed: 50,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		bullets: true,
		arrows: true,
		arrowsHide: false,
		prev: 'prev',
		next: 'next',
		animationStart: function(){},
		animationComplete: function(){}
	});

	$('#loginSpecialBox').mobilyslider({
		content: '.sliderContent',
		children: 'div',
		transition: 'vertical',
		animationSpeed: 50,
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnHover: true,
		bullets: true,
		arrows: true,
		arrowsHide: false,
		prev: 'prev',
		next: 'next',
		animationStart: function(){},
		animationComplete: function(){}
	});

	$(function(){
		$("img.rollover").hover(
		function() { this.src = this.src.replace("Off", "On");
		},
		function() { this.src = this.src.replace("On", "Off");
		});
	});





	/** 메인이미지 롤링 */
	; (function ($) {

		// 슬라이드 쇼 플러그인
		// 사용 법
		// $('#slidesContainer').slideShow({currentPosition:0, slideWidth: 260});
		//				==> {currentPosition:0, slideWidth: 260} 넣지 않을 경우 기본 값

		$.fn.slideShow = function(options) {

			var opts = jQuery.extend({}, jQuery.fn.slideShow.defaults, options);
			 
			return this.each(function() {
		
				/* 슬라이드 구성 */
				var $slides = $('.'+opts.slideId);				//슬라이드 자식들 가져오기			
				var numberOfSlides = $slides.length;		//슬라이드 자식들 갯수			
				var $leftBtn = $('#'+opts.leftBtnId);		//슬라이드 이전 버튼			
				var $rigthBtn = $('#'+opts.rigthBtnId);	//슬라이드 다음 버튼
				var strLoopWay = 'next';							//롤링 방향
				/* 슬라이드 구성 */

				/* 자동롤링 정보 */			
				var strAutoPlay = '';									//반복 Interval 정보	
				var $AutoDiv = $('#'+opts.AutoDivId);	//마우스 오버/ 아웃시 반복 멈추고 제시작할 div 
				/* 자동롤링 정보 */

				//반복하지 않고 시작점이 0 일 경우 왼쪽 버튼 숨기기   slideLoop : false 경우
				if( !opts.slideLoop && opts.currentPosition == 0 ) $leftBtn.hide();
				if( !opts.slideLoop && opts.currentPosition == (numberOfSlides - 1) ) $rigthBtn.hide();

				//이전, 다음 버튼에 액션 추가
				$leftBtn.click(function(){
					strLoopWay = 'pre'
					Slide();
				});
				$rigthBtn.click(function(){
					strLoopWay = 'next'
					Slide();
				});

				//자동 롤링 제어
				$AutoDiv.mouseover(function(){
					AutoPlayStop();
				});
				$AutoDiv.mouseout(function(){
					AutoPlayStart();
				});


				//자식노드를 새로운 div 에 담기
				//익스플로러9 일 경우 예외
				if( navigator.appVersion.indexOf("MSIE 9") > -1 ) 
				{
					div = document.createElement("DIV");
					div.id = opts.slideShowId;

					$slides.wrapAll(div).css({'width' : opts.slideWidth, 'height': opts.slideHeight});
				} 
				else  
				{
					$slides.wrapAll('<div id="'+opts.slideShowId+'"></div>').css({'width' : opts.slideWidth, 'height': opts.slideHeight});
				}			

				//새 객체 담기
				var $sliderInner = $('#'+opts.slideShowId);
				$sliderInner.css('width', opts.slideWidth * numberOfSlides);

				//좌우 슬라이드 일 경우
				if( opts.slideWay == 'left' )
				{
					$slides.css({'float':'left'});
					$sliderInner.animate({
						'marginLeft' : opts.slideWidth * (-opts.currentPosition)
					});
				}
				else	//상하 슬라이드일 경우
				{
					$sliderInner.animate({
						'marginTop' : opts.slideHeight * (-opts.currentPosition)
					});
				}

				//버튼 클릭시 실행 함수
				function Slide() 
				{			
					if( strLoopWay == 'pre' )
					{
						opts.currentPosition = opts.currentPosition - 1;

						//루프이면서 현재 위치가 0보다 작을 경우
						if( opts.slideLoop )
						{
							if( opts.currentPosition < 0 )
							{
								opts.currentPosition = 1;
								
								if( opts.slideWay == 'left' ) $sliderInner.css( 'marginLeft', opts.slideWidth * (-opts.currentPosition) );
								else $sliderInner.css( 'marginTop', opts.slideHeight * (-opts.currentPosition) );

								$('#'+opts.slideShowId +' div:last-child').insertBefore($('#'+opts.slideShowId +' div:first-child'));
								opts.currentPosition = 0;
							}
						}
						else if( !opts.slideLoop && opts.currentPosition <= 0 )
						{
							opts.currentPosition = 0;
							$rigthBtn.show();
							$leftBtn.hide();
						}
					}
					else
					{
						opts.currentPosition = opts.currentPosition + 1;
						
						//루프이면서 현재위치가 전체보다 클 경우
						if( opts.slideLoop )
						{
							if( opts.currentPosition > numberOfSlides - 1 )
							{
								opts.currentPosition = numberOfSlides - 2;

								if( opts.slideWay == 'left' ) $sliderInner.css( 'marginLeft', opts.slideWidth * (-opts.currentPosition) );
								else $sliderInner.css( 'marginTop', opts.slideHeight * (-opts.currentPosition) );

								$('#'+opts.slideShowId +' div:first-child').insertAfter($('#'+opts.slideShowId +' div:last-child'));
								opts.currentPosition = opts.currentPosition + 1;
							}
						}
						else if( !opts.slideLoop && opts.currentPosition >= numberOfSlides - 1 )
						{
							opts.currentPosition = numberOfSlides - 1;
							$leftBtn.show();
							$rigthBtn.hide();
						}
					}

					//상하, 좌우슬라이드 액션 실행
					if( opts.slideWay == 'left' )
					{
						$sliderInner.animate({
							'marginLeft' : opts.slideWidth * (-opts.currentPosition)
						});
					}
					else
					{
						$sliderInner.animate({
							'marginTop' : opts.slideHeight * (-opts.currentPosition)
						});
					}
				}

				//자동롤링 시작
				function AutoPlayStart()
				{
					strAutoPlay = window.setInterval( function() {
						Slide();
					}, opts.AutoPlayTime);
				}

				//자동롤링 종료
				function AutoPlayStop()
				{
					window.clearInterval(strAutoPlay);
				}

				//자동롤링 설정
				if( opts.slideAuto ) AutoPlayStart();			

			});
		};

		//slideShow 플러그인의 기본 옵션들이다.
		jQuery.fn.slideShow.defaults = {
			currentPosition: 0,				//시작점
			slideWidth: 910,					//가로사이즈
			slideHeight: 490,					//세로사이즈
			slideId: 'slide',						//자식노드 아이디
			leftBtnId: 'left',						//이전버튼 아이디
			rigthBtnId: 'right',				//다음버튼 아이디
			slideShowId: 'slideInner',	//슬라이드 부모 생성할 아이디
			slideWay: 'left',					//슬라이드 방향	빈값일 경우 위로
			slideLoop: true,					//반복 여부  false 일 경우 스톱
			slideAuto: true,					//자동롤링 여부
			AutoDivId: 'slideshow',		//마우스 오버/아웃시 오토롤링 제어
			AutoPlayTime: 5000			//자동롤링 시간
		};

	}) (jQuery);


});


(function($) {
  $(function() {     
	$('#slideshow').slideShow();  // 좌/우
	//$('#slidesContainer').slideShow({slideWay:''}); // 상/하
  });
 }) (jQuery);



(function(a){var b=["Webkit","Moz","O","Ms","Khtml",""];a.fn.cssSetQueue=function(b,c){v=this;var d=v.data("cssQueue")?v.data("cssQueue"):[];var e=v.data("cssCall")?v.data("cssCall"):[];var f=0;var g={};a.each(c,function(a,b){g[a]=b});while(1){if(!e[f]){e[f]=g.complete;break}f++}g.complete=f;d.push([b,g]);v.data({cssQueue:d,cssRunning:true,cssCall:e})};a.fn.cssRunQueue=function(){v=this;var a=v.data("cssQueue")?v.data("cssQueue"):[];if(a[0])v.cssEngine(a[0][0],a[0][1]);else v.data("cssRunning",false);a.shift();v.data("cssQueue",a)};a.cssMerge=function(b,c,d){a.each(c,function(c,e){a.each(d,function(a,d){b[d+c]=e})});return b};a.fn.cssAnimationData=function(a,b){var c=this;var d=c.data("cssAnimations");if(!d)d={};if(!d[a])d[a]=[];d[a].push(b);c.data("cssAnimations",d);return d[a]};a.fn.cssAnimationRemove=function(){var b=this;var c=b.data("cssAnimations");var d=b.data("identity");a.each(c,function(a,b){c[a]=b.splice(d+1,1)});b.data("cssAnimations",c)};a.css3D=function(c){a("body").data("cssPerspective",isFinite(c)?c:c?1e3:0).css(a.cssMerge({},{TransformStyle:c?"preserve-3d":"flat"},b))};a.cssAnimateSupport=function(){var c=false;a.each(b,function(a,b){c=document.body.style[b+"AnimationName"]!==undefined?true:c});return c};a.fn.cssEngine=function(c,d){function f(a){return String(a).replace(/([A-Z])/g,"-$1").toLowerCase()}var e=this;if(typeof d.complete=="number")e.data("cssCallIndex",d.complete);var g={linear:"linear",swing:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out"};var h={};var i=a("body").data("cssPerspective");if(c.transform)a.each(b,function(a,b){var d=b+(b?"T":"t")+"ransform";var g=e.css(f(d));var j=c.transform;if(!g||g=="none")h[d]="scale(1)";c[d]=(i&&!/perspective/gi.test(j)?"perspective("+i+") ":"")+j});if(c.borderRadius)a.each(b,function(a,b){c[b+(b?"B":"b")+"orderRadius"]=c.borderRadius});if(c.boxShadow)a.each(b,function(a,b){c[b+(b?"B":"b")+"oxShadow"]=c.boxShadow});var j=[];a.each(c,function(a,b){j.push(f(a))});var k=false;var l=[];var m=[];for(var n=0;n<j.length;n++){l.push(String(d.duration/1e3)+"s");m.push(g[d.easing])}l=e.cssAnimationData("dur",l.join(", ")).join(", ");m=e.cssAnimationData("eas",m.join(", ")).join(", ");var o=e.cssAnimationData("prop",j.join(", "));e.data("identity",o.length-1);o=o.join(", ");var p={TransitionDuration:l,TransitionProperty:o,TransitionTimingFunction:m};var q={};q=a.cssMerge(q,p,b);var r=c;a.extend(q,c);if(q.display=="callbackHide")k=true;else if(q.display)h["display"]=q.display;e.css(h);setTimeout(function(){e.css(q);var b=e.data("runningCSS");b=!b?r:a.extend(b,r);e.data("runningCSS",b);setTimeout(function(){e.data("cssCallIndex","a");if(k)e.css("display","none");e.cssAnimationRemove();if(d.queue)e.cssRunQueue();if(typeof d.complete=="number"){e.data("cssCall")[d.complete].call(e);e.data("cssCall")[d.complete]=0}else d.complete.call(e)},d.duration)},0)};a.str2Speed=function(a){return isNaN(a)?a=="slow"?1e3:a=="fast"?200:600:a};a.fn.cssAnimate=function(b,c,d,e){var f=this;var g={duration:0,easing:"swing",complete:function(){},queue:true};var h={};h=typeof c=="object"?c:{duration:c};h[d?typeof d=="function"?"complete":"easing":0]=d;h[e?"complete":0]=e;h.duration=a.str2Speed(h.duration);a.extend(g,h);if(a.cssAnimateSupport()){f.each(function(c,d){d=a(d);if(g.queue){var e=!d.data("cssRunning");d.cssSetQueue(b,g);if(e)d.cssRunQueue()}else d.cssEngine(b,g)})}else f.animate(b,g);return f};a.cssPresetOptGen=function(a,b){var c={};c[a?typeof a=="function"?"complete":"easing":0]=a;c[b?"complete":0]=b;return c};a.fn.cssFadeTo=function(b,c,d,e){var f=this;opt=a.cssPresetOptGen(d,e);var g={opacity:c};opt.duration=b;if(a.cssAnimateSupport()){f.each(function(b,d){d=a(d);if(d.data("displayOriginal")!=d.css("display")&&d.css("display")!="none")d.data("displayOriginal",d.css("display")?d.css("display"):"block");else d.data("displayOriginal","block");g.display=c?d.data("displayOriginal"):"callbackHide";d.cssAnimate(g,opt)})}else f.fadeTo(b,opt);return f};a.fn.cssFadeOut=function(b,c,d){if(a.cssAnimateSupport()){if(!this.css("opacity"))this.css("opacity",1);this.cssFadeTo(b,0,c,d)}else this.fadeOut(b,c,d);return this};a.fn.cssFadeIn=function(b,c,d){if(a.cssAnimateSupport()){if(this.css("opacity"))this.css("opacity",0);this.cssFadeTo(b,1,c,d)}else this.fadeIn(b,c,d);return this};a.cssPx2Int=function(a){return a.split("p")[0]*1};a.fn.cssStop=function(){var c=this,d=0;c.data("cssAnimations",false).each(function(f,g){g=a(g);var h={TransitionDuration:"0s"};var i=g.data("runningCSS");var j={};if(i)a.each(i,function(b,c){c=isFinite(a.cssPx2Int(c))?a.cssPx2Int(c):c;var d=[0,1];var e={color:["#000","#fff"],background:["#000","#fff"],"float":["none","left"],clear:["none","left"],border:["none","0px solid #fff"],position:["absolute","relative"],family:["Arial","Helvetica"],display:["none","block"],visibility:["hidden","visible"],transform:["translate(0,0)","scale(1)"]};a.each(e,function(a,c){if((new RegExp(a,"gi")).test(b))d=c});j[b]=d[0]!=c?d[0]:d[1]});else i={};h=a.cssMerge(j,h,b);g.css(h);setTimeout(function(){var b=a(c[d]);b.css(i).data({runningCSS:{},cssAnimations:{},cssQueue:[],cssRunning:false});if(typeof b.data("cssCallIndex")=="number")b.data("cssCall")[b.data("cssCallIndex")].call(b);b.data("cssCall",[]);d++},0)});return c};a.fn.cssDelay=function(a){return this.cssAnimate({},a)}})(jQuery)

/*
 * touchSwipe - jQuery Plugin
 * http://plugins.jquery.com/project/touchSwipe
 * http://labs.skinkers.com/touchSwipe/
 *
 * Copyright (c) 2010 Matt Bryson (www.skinkers.com)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * $version: 1.2.5
 *
 * Changelog
 * $Date: 2010-12-12 (Wed, 12 Dec 2010) $
 * $version: 1.0.0 
 * $version: 1.0.1 - removed multibyte comments
 *
 * $Date: 2011-21-02 (Mon, 21 Feb 2011) $
 * $version: 1.1.0 	- added allowPageScroll property to allow swiping and scrolling of page
 *					- changed handler signatures so one handler can be used for multiple events
 * $Date: 2011-23-02 (Wed, 23 Feb 2011) $
 * $version: 1.2.0 	- added click handler. This is fired if the user simply clicks and does not swipe. The event object and click target are passed to handler.
 *					- If you use the http://code.google.com/p/jquery-ui-for-ipad-and-iphone/ plugin, you can also assign jQuery mouse events to children of a touchSwipe object.
 * $version: 1.2.1 	- removed console log!
 *
 * $version: 1.2.2 	- Fixed bug where scope was not preserved in callback methods. 
 *
 * $Date: 2011-28-04 (Thurs, 28 April 2011) $
 * $version: 1.2.4 	- Changed licence terms to be MIT or GPL inline with jQuery. Added check for support of touch events to stop non compatible browsers erroring.
 *
 * $Date: 2011-27-09 (Tues, 27 September 2011) $
 * $version: 1.2.5 	- Added support for testing swipes with mouse on desktop browser (thanks to https://github.com/joelhy)

 * A jQuery plugin to capture left, right, up and down swipes on touch devices.
 * You can capture 2 finger or 1 finger swipes, set the threshold and define either a catch all handler, or individual direction handlers.
 * Options:
 * 		swipe 		Function 	A catch all handler that is triggered for all swipe directions. Handler is passed 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
 * 		swipeLeft	Function 	A handler that is triggered for "left" swipes. Handler is passed 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
 * 		swipeRight	Function 	A handler that is triggered for "right" swipes. Handler is passed 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
 * 		swipeUp		Function 	A handler that is triggered for "up" swipes. Handler is passed 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
 * 		swipeDown	Function 	A handler that is triggered for "down" swipes. Handler is passed 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
 *		swipeStatus Function 	A handler triggered for every phase of the swipe. Handler is passed 4 arguments: event : The original event object, phase:The current swipe face, either "start?, "move?, "end? or "cancel?. direction : The swipe direction, either "up?, "down?, "left " or "right?.distance : The distance of the swipe.
 *		click		Function	A handler triggered when a user just clicks on the item, rather than swipes it. If they do not move, click is triggered, if they do move, it is not.
 *
 * 		fingers 	int 		Default 1. 	The number of fingers to trigger the swipe, 1 or 2.
 * 		threshold 	int  		Default 75.	The number of pixels that the user must move their finger by before it is considered a swipe.
 *		triggerOnTouchEnd Boolean Default true If true, the swipe events are triggered when the touch end event is received (user releases finger).  If false, it will be triggered on reaching the threshold, and then cancel the touch event automatically.
 *		allowPageScroll String Default "auto". How the browser handles page scrolls when the user is swiping on a touchSwipe object. 
 *										"auto" : all undefined swipes will cause the page to scroll in that direction.
 *										"none" : the page will not scroll when user swipes.
 *										"horizontal" : will force page to scroll on horizontal swipes.
 *										"vertical" : will force page to scroll on vertical swipes.
 *
 * This jQuery plugin will only run on devices running Mobile Webkit based browsers (iOS 2.0+, android 2.2+)
 */

jQuery(function(){  var $ = jQuery;
(function($) 
{	
	$.fn.swipe = function(options) 
	{
		if (!this) return false;
		
		// Default thresholds & swipe functions
		var defaults = {
					
			fingers 		: 1,								// int - The number of fingers to trigger the swipe, 1 or 2. Default is 1.
			threshold 		: 75,								// int - The number of pixels that the user must move their finger by before it is considered a swipe. Default is 75.
			
			swipe 			: null,		// Function - A catch all handler that is triggered for all swipe directions. Accepts 2 arguments, the original event object and the direction of the swipe : "left", "right", "up", "down".
			swipeLeft		: null,		// Function - A handler that is triggered for "left" swipes. Accepts 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
			swipeRight		: null,		// Function - A handler that is triggered for "right" swipes. Accepts 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
			swipeUp			: null,		// Function - A handler that is triggered for "up" swipes. Accepts 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
			swipeDown		: null,		// Function - A handler that is triggered for "down" swipes. Accepts 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
			swipeStatus		: null,		// Function - A handler triggered for every phase of the swipe. Handler is passed 4 arguments: event : The original event object, phase:The current swipe face, either "start?, "move?, "end? or "cancel?. direction : The swipe direction, either "up?, "down?, "left " or "right?.distance : The distance of the swipe.
			click			: null,		// Function	- A handler triggered when a user just clicks on the item, rather than swipes it. If they do not move, click is triggered, if they do move, it is not.
			
			triggerOnTouchEnd : true,	// Boolean, if true, the swipe events are triggered when the touch end event is received (user releases finger).  If false, it will be triggered on reaching the threshold, and then cancel the touch event automatically.
			allowPageScroll : "auto" 	/* How the browser handles page scrolls when the user is swiping on a touchSwipe object. 
											"auto" : all undefined swipes will cause the page to scroll in that direction.
 											"none" : the page will not scroll when user swipes.
 											"horizontal" : will force page to scroll on horizontal swipes.
 											"vertical" : will force page to scroll on vertical swipes.
										*/
		};		
		
		//Constants
		var LEFT = "left";
		var RIGHT = "right";
		var UP = "up";
		var DOWN = "down";
		var NONE = "none";
		var HORIZONTAL = "horizontal";
		var VERTICAL = "vertical";
		var AUTO = "auto";		
		var PHASE_START="start";
		var PHASE_MOVE="move";
		var PHASE_END="end";
		var PHASE_CANCEL="cancel";		
	    var hasTouch = 'ontouchstart' in window,
        START_EV = hasTouch ? 'touchstart' : 'mousedown',
        MOVE_EV = hasTouch ? 'touchmove' : 'mousemove',
        END_EV = hasTouch ? 'touchend' : 'mouseup',
        CANCEL_EV = 'touchcancel';		
		var phase="start";
		
		if (options.allowPageScroll==undefined && (options.swipe!=undefined || options.swipeStatus!=undefined))options.allowPageScroll=NONE;
		
		if (options)$.extend(defaults, options);		
		
		/*
		 * Setup each object to detect swipe gestures
		 */
		return this.each(function() 
		{
            var that = this;
			var $this = $(this);
			
			var triggerElementID = null; 	// this variable is used to identity the triggering element
			var fingerCount = 0;			// the current number of fingers being used.	
			
			//track mouse points / delta
			var start={x:0, y:0};
			var end={x:0, y:0};
			var delta={x:0, y:0};			
			
			/*
			* Event handler for a touch start event. 
			* Stops the default click event from triggering and stores where we touched
			*/

			function touchStart(event) 
			{
                var evt = hasTouch ? event.touches[0] : event; 
				phase = PHASE_START;
		
                if (hasTouch) {
                    // get the total number of fingers touching the screen
                    fingerCount = event.touches.length;
                }
				
				//clear vars..
				distance=0;
				direction=null;
				
				// check the number of fingers is what we are looking for
				if (fingerCount == defaults.fingers || !hasTouch) 
				{
					// get the coordinates of the touch
					start.x = end.x = evt.pageX;
					start.y = end.y = evt.pageY;
					
					if (defaults.swipeStatus)
						triggerHandler(event, phase);
				} 
				else 
				{
					//touch with more/less than the fingers we are looking for
					touchCancel(event);
				}

				that.addEventListener(MOVE_EV, touchMove, false);
				that.addEventListener(END_EV, touchEnd, false);
			}

			/*
			* Event handler for a touch move event. 
			* If we change fingers during move, then cancel the event
			*/
			function touchMove(event) 
			{
				if (phase == PHASE_END || phase == PHASE_CANCEL)
					return;
                
                var evt = hasTouch ? event.touches[0] : event; 
				
				end.x = evt.pageX;
				end.y = evt.pageY;
					
				direction = caluculateDirection();
                if (hasTouch) {
                    fingerCount = event.touches.length;
                }
				
				phase = PHASE_MOVE
				
				//Check if we need to prevent default evnet (page scroll) or not
				validateDefaultEvent(event, direction);
		
				if ( fingerCount == defaults.fingers || !hasTouch) 
				{
					distance = caluculateDistance();
					
					if (defaults.swipeStatus)
						triggerHandler(event, phase, direction, distance);
					
					//If we trigger whilst dragging, not on touch end, then calculate now...
					if (!defaults.triggerOnTouchEnd)
					{
						// if the user swiped more than the minimum length, perform the appropriate action
						if ( distance >= defaults.threshold ) 
						{
							phase = PHASE_END;
							triggerHandler(event, phase);
							touchCancel(event); // reset the variables
						}
					}
				} 
				else 
				{
					phase = PHASE_CANCEL;
					triggerHandler(event, phase); 
					touchCancel(event);
				}
			}
			
			/*
			* Event handler for a touch end event. 
			* Calculate the direction and trigger events
			*/
			function touchEnd(event) 
			{
				event.preventDefault();
				
				distance = caluculateDistance();
				direction = caluculateDirection();
						
				if (defaults.triggerOnTouchEnd)
				{
					phase = PHASE_END;
					// check to see if more than one finger was used and that there is an ending coordinate
					if ( (fingerCount == defaults.fingers  || !hasTouch) && end.x != 0 ) 
					{
						// if the user swiped more than the minimum length, perform the appropriate action
						if ( distance >= defaults.threshold ) 
						{
							triggerHandler(event, phase);
							touchCancel(event); // reset the variables
						} 
						else 
						{
							phase = PHASE_CANCEL;
							triggerHandler(event, phase); 
							touchCancel(event);
						}	
					} 
					else 
					{
						phase = PHASE_CANCEL;
						triggerHandler(event, phase); 
						touchCancel(event);
					}
				}
				else if (phase == PHASE_MOVE)
				{
					phase = PHASE_CANCEL;
					triggerHandler(event, phase); 
					touchCancel(event);
				}
				that.removeEventListener(MOVE_EV, touchMove, false);
				that.removeEventListener(END_EV, touchEnd, false);
			}
			
			/*
			* Event handler for a touch cancel event. 
			* Clears current vars
			*/
			function touchCancel(event) 
			{
				// reset the variables back to default values
				fingerCount = 0;
				
				start.x = 0;
				start.y = 0;
				end.x = 0;
				end.y = 0;
				delta.x = 0;
				delta.y = 0;
			}
			
			
			/*
			* Trigger the relevant event handler
			* The handlers are passed the original event, the element that was swiped, and in the case of the catch all handler, the direction that was swiped, "left", "right", "up", or "down"
			*/
			function triggerHandler(event, phase) 
			{
				//update status
				if (defaults.swipeStatus)
					defaults.swipeStatus.call($this,event, phase, direction || null, distance || 0);
				
				
				if (phase == PHASE_CANCEL)
				{
					if (defaults.click && (fingerCount==1 || !hasTouch) && (isNaN(distance) || distance==0))
						defaults.click.call($this,event, event.target);
				}
				
				if (phase == PHASE_END)
				{
					//trigger catch all event handler
					if (defaults.swipe)
				{
						
						defaults.swipe.call($this,event, direction, distance);
						
				}
					//trigger direction specific event handlers	
					switch(direction)
					{
						case LEFT :
							if (defaults.swipeLeft)
								defaults.swipeLeft.call($this,event, direction, distance);
							break;
						
						case RIGHT :
							if (defaults.swipeRight)
								defaults.swipeRight.call($this,event, direction, distance);
							break;

						case UP :
							if (defaults.swipeUp)
								defaults.swipeUp.call($this,event, direction, distance);
							break;
						
						case DOWN :	
							if (defaults.swipeDown)
								defaults.swipeDown.call($this,event, direction, distance);
							break;
					}
				}
			}
			
			
			/*
			 * Checks direction of the swipe and the value allowPageScroll to see if we should allow or prevent the default behaviour from occurring.
			 * This will essentially allow page scrolling or not when the user is swiping on a touchSwipe object.
			 */
			function validateDefaultEvent(event, direction)
			{
				if( defaults.allowPageScroll==NONE )
				{
					event.preventDefault();
				}
				else 
				{
					var auto=defaults.allowPageScroll==AUTO;
					
					switch(direction)
					{
						case LEFT :
							if ( (defaults.swipeLeft && auto) || (!auto && defaults.allowPageScroll!=HORIZONTAL))
								event.preventDefault();
							break;
						
						case RIGHT :
							if ( (defaults.swipeRight && auto) || (!auto && defaults.allowPageScroll!=HORIZONTAL))
								event.preventDefault();
							break;

						case UP :
							if ( (defaults.swipeUp && auto) || (!auto && defaults.allowPageScroll!=VERTICAL))
								event.preventDefault();
							break;
						
						case DOWN :	
							if ( (defaults.swipeDown && auto) || (!auto && defaults.allowPageScroll!=VERTICAL))
								event.preventDefault();
							break;
					}
				}
				
			}
			
			
			
			/*
			* Calcualte the length / distance of the swipe
			*/
			function caluculateDistance()
			{
				return Math.round(Math.sqrt(Math.pow(end.x - start.x,2) + Math.pow(end.y - start.y,2)));
			}
			
			/**
			* Calcualte the angle of the swipe
			*/
			function caluculateAngle() 
			{
				var X = start.x-end.x;
				var Y = end.y-start.y;
				var r = Math.atan2(Y,X); //radians
				var angle = Math.round(r*180/Math.PI); //degrees
				
				//ensure value is positive
				if (angle < 0) 
					angle = 360 - Math.abs(angle);
					
				return angle;
			}
			
			/*
			* Calcualte the direction of the swipe
			* This will also call caluculateAngle to get the latest angle of swipe
			*/
			function caluculateDirection() 
			{
				var angle = caluculateAngle();
				
				if ( (angle <= 45) && (angle >= 0) ) 
					return LEFT;
				
				else if ( (angle <= 360) && (angle >= 315) )
					return LEFT;
				
				else if ( (angle >= 135) && (angle <= 225) )
					return RIGHT;
				
				else if ( (angle > 45) && (angle < 135) )
					return DOWN;
				
				else
					return UP;
			}
			

			// Add gestures to all swipable areas if supported
			try
			{

				this.addEventListener(START_EV, touchStart, false);
				this.addEventListener(CANCEL_EV, touchCancel);
			}
			catch(e)
			{
				//touch not supported
			}
				
		});
	};


})(jQuery);});

jQuery(function(){  var $ = jQuery;

(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery)
});

(function (a, b){
var interval;
var autoRoll = "start";

    function j(a, b){
        setInterval(function () {}, 100)
    }
    function i(b, c){
        if (a.browser.msie) {
            b.find(".paradigm-preloader").animate({
                opacity : "0.0"
            },
            {
                duration : 300, queue : false
            })
        }
        else {
            b.find(".paradigm-preloader").animate({
                opacity : "0.0"
            },
            {
                duration : 300, queue : false
            })
        }
        setTimeout(function ()
        {
            b.find(".paradigm-preloader").remove()
        }, 300)
    }
    function h(a, b){
        a.find("ul:first").wrap('<div class="main-container" style="z-index:7;width:' + b.width + "px;height:" + b.height + 'px;overflow:hidden;position:relative"><div class="slider_holder" style="position:relative;width:' + b.width + "px;height:" + b.height + 'px;overflow:hidden"></div></div>');

		var c = a.find(".maincontainer");
		var d = a.parent(".productWrap");
		var wrapWidth  = d.css("padding-left").replace("px","")*2 + b.width  + 58;
		var wrapHeight = d.css("padding-bottom").replace("px","")*2 + b.height  + 26;
		d.css({
			"width":wrapWidth+"px",
			"height":wrapHeight+"px"
		})
        b.padtop = parseInt(c.css("paddingTop"), 0);
        b.padleft = parseInt(c.css("paddingLeft"), 0);
        b.padright = parseInt(c.css("paddingRight"), 0);
        b.padbottom = parseInt(c.css("paddingBottom"), 0)
    }
    function g(b, c){

        c.slidewidths = (c.width - (c.slideAmount - 1) * c.slideSpacing) / c.slideAmount;
        c.positionArray = [];
        c.positionArray[0] = 0 - c.slidewidths;
        b.find("ul:first").wrap('<div style="position:absolute;top:0px;left:0px" class="services-wrapper-top"></div>');
        c.top = b.find(".services-wrapper-top");
        c.maxitem = 0;

        b.find("ul:first > li").each(function (b){
            c.maxitem = c.maxitem + 1;
            var d = a(this);
            c.positionArray[b] = (c.slidewidths + c.slideSpacing) * b;
            d.wrapInner('<div class="slide" style="position:absolute;overflow:hidden;width:' + c.slidewidths + "px;top:0px;left:" + c.positionArray[b] + 'px;"></div>');
            var f = d.find(".slide");
            f.css({
                left : c.positionArray[b] + "px", position : "absolute"
            });
            f.data("pagemore", "");
            f.find(".page-more").each(function ()
            {
                var b = a(this);
                f.data("pagemore", b.html());
                b.remove();
            });
            f.data("id", b);
            var g = f.find("img.thumb");
				g.wrap('<div class="imgholder" style="cursor:pointer;position:relative;.display:inline-block"></div>');
				g.css({"border":c.imageBoarder+"px solid"+c.imageBoarderColor+"","padding":c.imagePadding+"px"});
				g.css({"width":"0px"});

			var h = f.find(".imgholder");
			var hwidth = parseInt(h.width()-c.imageBoarder*2-c.imagePadding*2);
				g.css({"width":hwidth+"px","height":hwidth+"px"});

            var i = parseInt(g.css("border-left-width"), 0);
            var j = parseInt(g.css("paddingLeft"), 0);
            var k = parseInt(g.css("marginLeft"), 0);
            if (!i > 0) {
                i = 0;
            }
            if (!j > 0) {
                j = 0;
            }
            if (!k > 0) {
                k = 0;
            }
            var l = i + j + k;
            var m = parseInt(g.css("border-top-width"), 0);
            var n = parseInt(g.css("paddingTop"), 0);
            var o = parseInt(g.css("marginTop"), 0);
            if (!m > 0) {
                m = 0;
            }
            if (!n > 0) {
                n = 0;
            }
            if (!o > 0) {
                o = 0;
            }
            var p = m + n + o;
            h.append('<img class="bw" src="' + g.data("bw") + '" width="'+hwidth+'" height="'+hwidth+'">');
            h.find(".bw").css({
                position : "absolute", "z-index" : "1000", opacity : "0.0", left : l + "px", top : p + "px"
            });
            if (f.data("pagemore").length > 0) {
                f.find(".imgholder").click(function () 
                {
                    e(f, c);
                    return false;
                });
            }
            f.hover(function ()
            {
                var b = a(this);
				autoRoll = "stop";
				

                b.addClass("mouseover");
                b.parent().parent().find("li").each(function (b)
                {
                    var c = a(this);
                    if (!c.find(".slide").hasClass("mouseover"))
                    {
                        c.find(".slide .imgholder .bw").stop();
                        c.find(".slide *").stop();
                        c.find(".slide .imgholder .bw").animate({
                            opacity : "1.0"
                        },
                        {
                            duration : 400, queue : false
                        });
                        if (a.browser.msie && a.browser.version < 8) {}
                        else
                        {
                            c.find(".slide *").each(function ()
                            {
                                var b = a(this);
                                if (!b.hasClass("buttonlight") && !b.hasClass("imgholder")) {
                                    b.animate({
                                        opacity : "1" 
                                    },
                                    {
                                        duration : 400, queue : false 
                                    });
                                }
                                if (b.hasClass("thumb")) {
                                    b.animate({
                                        opacity : "1" 
                                    },
                                    {
                                        duration : 400, queue : false 
                                    });
                                }
                            })
                        }
                        clearTimeout(c.data("to"))
                    }
                    else
                    {
                        clearTimeout(c.data("to"));
                        c.find(".slide .imgholder .bw").stop();
                        c.find(".slide *").stop();
                        c.find(".slide  .imgholder .bw").animate({
                            opacity : "0.0"
                        },
                        {
                            duration : 400, queue : false
                        });
                        if (a.browser.msie && a.browser.version < 8) {}
                        else
                        {
                            c.find(".slide *").each(function ()
                            {
                                var b = a(this);
                                if (!b.hasClass("buttonlight") && !b.hasClass("imgholder") && !b.hasClass("bw")) {
                                    b.animate({opacity : "1.0" },{
                                        duration : 400, queue : false 
                                    });
                                }
                            })
                        }
                    }
                })
            },
            function ()
            {
                var b = a(this);
				autoRoll = "start";

                b.removeClass("mouseover");
                b.parent().parent().find("li").each(function (b)
                {
                    var c = a(this);
                    c.data("to", setTimeout(function ()
                    {
                        c.find(".slide .imgholder .bw").stop();
                        c.find(".slide *").stop();
                        c.find(".slide .imgholder .bw").animate({
                            opacity : "0.0"
                        },
                        {
                            duration : 400, queue : false
                        });
                        if (a.browser.msie && a.browser.version < 8) {}
                        else
                        {
                            c.find(".slide *").each(function ()
                            {
                                var b = a(this);
                                if (!b.hasClass("buttonlight") && !b.hasClass("imgholder") && !b.hasClass("bw")) {
                                    b.animate({
                                        opacity : "1.0" 
                                    },
                                    {
                                        duration : 400, queue : false 
                                    });
                                }
                            })
                        }
                    }, 250))
                })
            })
        });
        c.positionArray[c.maxitem + 1] = (c.slidewidths + c.slideSpacing) * (c.maxitems + 1) + c.slideSpacing;
        d(c, "visible");
        if (c.maxitem <= c.slideAmount) {
            d(c, "none");
        }
        b.find("ul:first").css({
            visibility : "visible"
        })
    }
    function f(b, c, d)
    {

        var e = 0 - (c.slidewidths + c.slideSpacing) + c.slideSpacing;
        var f = (c.slidewidths + c.slideSpacing) * c.slideAmount + c.slideSpacing;
        c.transition = 1;
        b.find("ul:first >li .slide").each(function (b)
        {
            var g = a(this);
            if (d == 0)
            {
                if (g.data("id") == c.maxitem - 1) {
                    g.cssAnimate({
                        left : 1 * e + "px"
                    },
                    {
                        duration : 300, queue : false
                    })
                }
                else
                {
                    if (g.position().left < 0) {
                        g.cssAnimate({
                            left : f + "px"
                        },
                        {
                            duration : 1
                        })
                    }
                    else
                    {
                        setTimeout(function ()
                        {
                            g.cssAnimate({
                                left : c.positionArray[g.data("id")] + "px"
                            },
                            {
                                duration : 300, queue : false
                            })
                        }, 100)
                    }
                }
            }
            else
            {
                if (g.data("id") == c.slideAmount) {
                    g.cssAnimate({
                        left : f + "px"
                    },
                    {
                        duration : 500, queue : false
                    })
                }
                else
                {
                    if (g.position().left >= c.positionArray[c.maxitem - 1]) {
                        g.cssAnimate({
                            left : e + "px"
                        },
                        {
                            duration : 2
                        })
                    }
                    setTimeout(function ()
                    {
                        g.cssAnimate({
                            left : c.positionArray[g.data("id")] + "px"
                        },
                        {
                            duration : 300, queue : false
                        })
                    }, 100)
                }
            }
        })
    }
    function e(b, c, e)
    {
		autoRoll = "stop";

        var k = c.topcontainer.find(".toolbar");
		k.css("display","none");
        d(c, "visible");
        c.top.animate({
            top : c.height * 1.5 + "px"
        },
        {
            duration : 300, queue : false
        });
		clearInterval(interval);

		c.actSlide = b.parent().index();
        c.top.parent().append('<div class="page-more" style="display:inline;position:absolute;z-index:9999;width:'+c.width+"px;height:"+c.height+'px">' + b.data("pagemore") + "</div>");
        var g = c.top.parent().find(".page-more");
			g.css({
				visibility : "visible"
			});
        if (e == 2)
        {
            g.css({
                left : "-150px", opacity : "0.0"
            });
            g.animate({
                left : "0px", opacity : "1.0"
            },
            {
                duration : 500, queue : false
            })
        }
        else
        {
            if (e == 1)
            {
                g.css({
                    left : "150px", opacity : "0.0"
                });
                g.animate({
                    left : "0px", opacity : "1.0"
                },
                {
                    duration : 500, queue : false
                })
            }
            else
            {
                g.css({
                    top : 0 - c.height * 1.5 + "px"
                });
                g.animate({
                    top : "0px"
                },
                {
                    duration : 500, queue : false
                })
            }
        }
        g.parent().css({
            overflow : "visible"
        });
        c.top.parent().find(".page-more").find(".closer").click(function ()
        {
            var b = a(this).closest(".page-more");
			k.css("display","block");

            c.top.animate({
                top : "0px"
            },
            {
                duration : 300, queue : false
            });
            b.animate({
                top : 0 - c.height + "px"
            },
            {
                duration : 100, queue : false
            });
            setTimeout(function ()
            {
                b.remove()
            }, 100);
            b.parent().css({
                overflow : "hidden"
            });
            c.actSlide =- 1;
            if (c.maxitem <= c.slideAmount) {
                d(c, "none");
            }
        })
    }
    function d(a, b)
    {
        var c = a.topcontainer.find(".toolbar");
        if (b == "none") {
            c.css({
                visibility : "hidden"
            })
        }
        else {
            c.css({
                visibility : "visible"
            })
        }
    }

    function c(b, c)
    {
        var d = b.find(".toolbar");
        var g = d.find(".left");
        var h = d.find(".right");
		var gheight = g.height();
		g.css("top",""+c.height/2-gheight/2+20+"px");
		h.css("top",""+c.height/2-gheight/2+20+"px");
        h.click(function ()
        {
            if (!b.hasClass("DuringAnimation"))
            {
                b.addClass("DuringAnimation");
                setTimeout(function ()
                {
                    b.removeClass("DuringAnimation")
                }, 500);
                if (c.actSlide >= 0)
                {

                    var d = null;
                    var g = c.actSlide;
                    var h = b.parent().find("ul:first >li .slide");
                    for (var i = 0; i < h.length; i++)
                    {
                        g++;
                        if (g == h.length) {
                            g = 0;
                        }
                        var j = b.parent().find("ul:first >li").eq(g).find(".slide").data("pagemore");
                        if (d == null && j.length > 0) {
                            d = b.parent().find("ul:first >li").eq(g).find(".slide");
                        }
                    }
					/*
                    if (d != null)
                    {

                        b.parent().find(".page-more").css({
                            left : "0px"
                        }).addClass("page-more-old").removeClass("page-more");
                        b.parent().find(".page-more-old").cssAnimate({
                            left :- 150 + "px", opacity : 0
                        },
                        {
                            duration : 300, queue : false
                        });
                        e(d, c, 1);
                        setTimeout(function ()
                        {
                            b.parent().find(".page-more-old").remove()
                        }, 500)
                    }
					*/
                }
                if (c.maxitem > c.slideAmount)
                {
                    b.find("ul:first >li .slide").each(function ()
                    {
                        var b = a(this);
                        b.data("id", b.data("id") - 1);
                        if (b.data("id") < 0) {
                            b.data("id", c.maxitem - 1);
                        }
                    });
                    f(b, c, 0)
                }
            }
        });


		var interval;
			if(c.autoscroll=="true"){
			b.find("ul:first >li .slide, .left ,.right").hover(
				function() {
					clearInterval(interval);
				},
				function() {
					interval = AutoPlay();
				}
			);
				interval = AutoPlay();
		}
		function AutoPlay() {
			if(c.autoscroll=="true" && autoRoll=="start"){
				return setInterval(function() {
						h.click();
				},  c.autoscrollTime);  
			}
		}
		function AutoStop() {
			clearInterval(interval);
		}

        g.click(function ()
        {
            if (!b.hasClass("DuringAnimation"))
            {
                b.addClass("DuringAnimation");
                setTimeout(function ()
                {
                    b.removeClass("DuringAnimation")
                }, 500);
                if (c.actSlide >= 0)
                {
                    var d = null;
                    var g = c.actSlide;
                    var h = b.parent().find("ul:first >li .slide");
                    for (var i = 0; i < h.length; i++)
                    {
                        g--;
                        if (g ==- 1) {
                            g = h.length - 1;
                        }
                        var j = b.parent().find("ul:first >li").eq(g).find(".slide").data("pagemore");
                        if (d == null && j.length > 0) {
                            d = b.parent().find("ul:first >li").eq(g).find(".slide");
                        }
                    }
					/*
                    if (d != null)
                    {
                        b.parent().find(".page-more").css({
                            left : "0px"
                        }).addClass("page-more-old").removeClass("page-more");
                        b.parent().find(".page-more-old").cssAnimate({
                            left : 150 + "px", opacity : 0
                        },
                        {
                            duration : 300, queue : false
                        });
                        e(d, c, 2);
                        setTimeout(function ()
                        {
                            b.parent().find(".page-more-old").remove()
                        }, 500)
                    }
					*/
                }
                if (c.maxitem > c.slideAmount)
                {
                    b.find("ul:first >li .slide").each(function ()
                    {
                        var b = a(this);
                        b.data("id", b.data("id") + 1);
                        if (b.data("id") == c.maxitem) {
                            b.data("id", 0);
                        }
                    });
                    f(b, c, 1)
                }
            }
        })
    }
    a.fn.extend(
    {
        services : function (b)
        {
            var d = 
            {
                width : 938, 
				height : 280, 
				slideAmount : 3, 
				slideSpacing : 20, 
				autoscroll:"true",
				autoscrollTime:3000,
				imageBoarder : 0, 
				imageBoarderColor:"#000",
				imagePadding:0,
				touchenabled : "on", 
				transition : 0, 
                mouseWheel : "on"
            };
            b = a.extend({}, a.fn.services.defaults, b);
            return this.each(function ()
            {
                var d = b;
                var e = a(this);
                d.topcontainer = e;
                h(e, d);
                g(e, d);
                c(e, d);
                if (d.timer > 0) {
                    j(e, d);
                }
                if (d.touchenabled == "on")
                {
                    e.swipe( 
                    {
                        data : e,
                        swipeLeft : function () 
                        {
                            var b = a(this);
                            var c = b.find(".toolbar");
                            var d = c.find(".right");
                            d.click();
                        },
                        swipeRight : function () 
                        {
                            var b = a(this);
                            var c = b.find(".toolbar");
                            var d = c.find(".left");
                            d.click() 
                        },

                        allowPageScroll : "auto" 
                    });
                }

                if (d.mouseWheel == "on")
                {
                    e.bind("mousewheel", function (b, c)
                    {
                        var d = a(this);
                        var e = d.find(".toolbar");
                        var f = e.find(".left");
                        var g = e.find(".right");
                        clearTimeout(d.data("mw"));
                        if (c < 0) {
                            d.data("mw", setTimeout(function () 
                            {
                                g.click();
                            }, 100));
                        }
                        else {
                            d.data("mw", setTimeout(function () 
                            {
                                f.click(); 
                            }, 100));
                        }
                        return false;
                    })
                }

			})

        }
    });
})(jQuery)


$(document).ready(function() {
	jQuery('#best01').services({										
		width:320,          //가로사이즈(총 사이즈는 +60픽셀이 더 적용됩니다(디자인여백때문)
		height:300,		    //세로크기(지정된 사이즈값보다 총세로길이는 +40픽셀 추가됩니다.)
		slideAmount:2,      //한화면에 보일 아이템 갯수(지정된 값에 따라 이미지 및 영역이 자동으로 리사이즈를 합니다.)
		autoscroll:"true",  //자동 롤링
		autoscrollTime:3000,//자동 롤링 시간
		slideSpacing:5,	//아이템별 간격				 		
		imageBoarder:1,     //이미지 테두리 두께
		imageBoarderColor:"#FF0000",  //이미지 테두리 색상
		imagePadding:0,     //이미지와 테두리 간격
		touchenabled:"on",  //모바일 터치 지원
		mouseWheel:"off"     //마우스 휠 지원
	});
    jQuery('#best02').services({										
		width:320,          //가로사이즈(총 사이즈는 +60픽셀이 더 적용됩니다(디자인여백때문)
		height:300,		    //세로크기(지정된 사이즈값보다 총세로길이는 +40픽셀 추가됩니다.)
		slideAmount:2,      //한화면에 보일 아이템 갯수(지정된 값에 따라 이미지 및 영역이 자동으로 리사이즈를 합니다.)
		autoscroll:"true",  //자동 롤링
		autoscrollTime:3000,//자동 롤링 시간
		slideSpacing:5,	//아이템별 간격				 		
		imageBoarder:1,     //이미지 테두리 두께
		imageBoarderColor:"#FF0000",  //이미지 테두리 색상
		imagePadding:0,     //이미지와 테두리 간격
		touchenabled:"on",  //모바일 터치 지원
		mouseWheel:"off"     //마우스 휠 지원
	});
    jQuery('#best03').services({										
		width:1100,          //가로사이즈(총 사이즈는 +60픽셀이 더 적용됩니다(디자인여백때문)
		height:320,		    //세로크기(지정된 사이즈값보다 총세로길이는 +40픽셀 추가됩니다.)
		slideAmount:4,      //한화면에 보일 아이템 갯수(지정된 값에 따라 이미지 및 영역이 자동으로 리사이즈를 합니다.)
		autoscroll:"true",  //자동 롤링
		autoscrollTime:2000,//자동 롤링 시간
		slideSpacing:35,	//아이템별 간격				 		
		imageBoarder:1,     //이미지 테두리 두께
		imageBoarderColor:"#FF0000",  //이미지 테두리 색상
		imagePadding:0,     //이미지와 테두리 간격
		touchenabled:"on",  //모바일 터치 지원
		mouseWheel:"off"     //마우스 휠 지원
	});
    jQuery('#best04').services({										
		width:1100,          //가로사이즈(총 사이즈는 +60픽셀이 더 적용됩니다(디자인여백때문)
		height:320,		    //세로크기(지정된 사이즈값보다 총세로길이는 +40픽셀 추가됩니다.)
		slideAmount:4,      //한화면에 보일 아이템 갯수(지정된 값에 따라 이미지 및 영역이 자동으로 리사이즈를 합니다.)
		autoscroll:"true",  //자동 롤링
		autoscrollTime:2000,//자동 롤링 시간
		slideSpacing:35,	//아이템별 간격				 		
		imageBoarder:1,     //이미지 테두리 두께
		imageBoarderColor:"#FF0000",  //이미지 테두리 색상
		imagePadding:0,     //이미지와 테두리 간격
		touchenabled:"on",  //모바일 터치 지원
		mouseWheel:"off"     //마우스 휠 지원
	});
    
    function main_tab_display(y){
        $('#best_item_02').css('display','none');
        $('#best_item_03').css('display','none');
        $('#best_item_04').css('display','none');

        document.getElementById('main_tab_01').src = "/SkinImg/main_tab_01_over_c.jpg";
        $('#best_item_01').css('display','block');
    }
    main_tab_display();
});