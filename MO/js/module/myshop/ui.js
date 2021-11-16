/**
 * 관심상품 리스트 UI
 */
$(document).ready(function(){
    $('.show_opt').each(function() {
        var node = $(this.parentNode.parentNode).find('ul');
         
        if (node.attr("class") != undefined) {
            var sOptDisplay = 'F';
            $(node).each(function(index, el) {
                if ($(el).html() != '') sOptDisplay = 'T';
            });
            if (sOptDisplay == 'T') $(this).html('<span>옵션보기</span>');
            $(this).click(function() {
                if (node.css("display") == "block") {
                    node.hide();
                    $(this).html('<span>옵션보기</span>');
                }else {
                    node.show();
                    $(this).html('<span>옵션닫기</span>');
                }
            });
        }
    });
});