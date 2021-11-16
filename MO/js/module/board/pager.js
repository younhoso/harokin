$(document).ready(function(){
    // 게시판 리스트
    $('.xans-board-paging ol a, .xans-board-paging ol strong').each(function() {
        PAGER.setPaging($(this), getQueryString('page'));
    });
    
    // 댓글 리스트
    $('.xans-board-commentpaging ol a, .xans-board-commentpaging ol strong').each(function() {
        PAGER.setPaging($(this), getQueryString('c_page'));
    });
    
    // 마이 게시물 리스트
    $('.xans-myshop-boardlistpaging ol a, .xans-myshop-boardlistpaging ol strong').each(function() {
        PAGER.setPaging($(this), getQueryString('page'));
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
});

var PAGER = {
    /**
     * 페이징
     */
    setPaging : function(obj, sNowPage)
    {
        var sPage = (obj.text() != '')? obj.text() : 1;

        if (sNowPage == undefined) sNowPage = 1;

        if (sPage == sNowPage)
        {            
            obj.parent().html('<strong title="현재페이지">'+sPage+'</strong>');
        } else {
            var sHref = obj.attr('href');
            obj.parent().html('<a href="'+sHref+'" title="'+sPage+' 페이지로 이동">'+sPage+'</a>');
        }
    }
};
