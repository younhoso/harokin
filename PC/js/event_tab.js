jQuery(document).ready(function() {	

	var ibNo = getQueryString('category_no');
	var board_title_now = jQuery('.titleArea h2 font').text();

	/* 이벤트 게시판 탭 변경.   */
	if ( board_title_now == 'EVENT' || board_title_now == '이벤트' || board_title_now == '갤러리' )  {
		if ( ibNo == "1" ) {
			jQuery(".event_tab li").removeClass('active');
			jQuery(".event_tab li:first-child").addClass('active');
			jQuery(".xans-board-listpackage-8 .xans-board-list-8 li").css('opacity','1');
		} else if (ibNo == "2") {
			jQuery(".event_tab li").removeClass('active');
			jQuery(".event_tab li:first-child + li").addClass('active');
			jQuery(".xans-board-listpackage-8 .xans-board-list-8 li").css('opacity','1');
			jQuery(".xans-board-listpackage-8 .xans-board-list-8 li .imgLink img").css('opacity','0.6');
		} else { 
			document.location.href='/board/event/8/?board_no=8&category_no=1'
		}
	}

	/* 나머지 게시판 탭 변경.   */
	jQuery( ".event_tab li" ).each(function( index ) {
		var board_title_name = jQuery(this).attr("rel");
		if ( board_title_now == board_title_name )  {
			jQuery(this).addClass('active');
		}
	});
});

