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


/**
 * paging HTML strong tag로 변형
 */
function convertPaging(){

	$('.paging ol a').each(function() {
		var sPage = $(this).text() ? $(this).text() : 1;

		if (sPage == '['+getQueryString('page')+']') {
			$(this).parent().html('<strong title="현재페이지">'+sPage+'</strong>');
		} else {
			var sHref = $(this).attr('href');
			$(this).parent().html('<a href="'+sHref+'" title="'+sPage+'페이지로 이동">'+sPage+'</a>');
		}
	});
}