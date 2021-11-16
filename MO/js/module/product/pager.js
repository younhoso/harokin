$(document).ready(function(){

    $('.xans-product-normalpaging ol a, .xans-product-normalpaging ol strong').each(function() {
        var sPage = $(this).text() ? $(this).text() : 1;

        if (sPage == getQueryString('page'))
        {
            $(this).parent().html('<strong title="현재페이지">'+sPage+'</strong>');
        } else {
            var sHref = $(this).attr('href');
            $(this).parent().html('<a href="'+sHref+'" title="'+sPage+'페이지로 이동">'+sPage+'</a>');
        }
    });
    
    $('.xans-search-paging ol a, .xans-search-paging ol strong').each(function() {
        var sPage = $(this).text() ? $(this).text() : 1;

        if (sPage == getQueryString('page'))
        {
            $(this).parent().html('<strong title="현재페이지">'+sPage+'</strong>');
        } else {
            var sHref = $(this).attr('href');
            $(this).parent().html('<a href="'+sHref+'" title="'+sPage+'페이지로 이동">'+sPage+'</a>');
        }
    });
    
    $('#order_by').change(function() {
        if ($('#order_by').val()) {
            $('#searchForm').submit();
        }
    });
});

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

function getParam(sUrl, sKey) {
    var aUrl         = sUrl.split('?');
    var sQueryString = aUrl[1];
    var aParam       = {};

    if (sQueryString) {
        var aFields = sQueryString.split("&");
        var aField  = [];
        for (var i=0; i<aFields.length; i++) {
            aField = aFields[i].split('=');
            aParam[aField[0]] = aField[1];
        }
    }
    return sKey ? aParam[sKey] : aParam;
}