$(document).ready(function(){
	
	/**
	 * function getQueryString
	 * include /js/common.js
	 */

	$('.xans-search-paging ol a, .xans-search-paging ol strong').each(function() {
		var sPage = $(this).text() ? $(this).text() : 1;
		

		if (sPage == '['+getQueryString('page')+']')
		{
			$(this).parent().html('<strong title="현재페이지">'+sPage+'</strong>');
		} else {
			var sHref = $(this).attr('href');
			$(this).parent().html('<a href="'+sHref+'" title="'+sPage+'페이지로 이동">'+sPage+'</a>');
		}
	});
});
