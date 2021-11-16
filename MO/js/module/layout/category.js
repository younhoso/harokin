/**
 * 카테고리 마우스 오버 이미지
 * 카테고리 서브 메뉴 출력
 */


$(document).ready(function(){

    var methods = {
        aCategory    : [],
        aSubCategory : {},

        get: function()
        {
             $.ajax({
                url : '/exec/front/Product/SubCategory',
                dataType: 'json',
                success: function(aData) {

                    if (aData == null || aData == 'undefined') return;
                    for (var i=0; i<aData.length; i++)
                    {
                        var sParentCateNo = aData[i].parent_cate_no;

                        if (!methods.aSubCategory[sParentCateNo]) {
                            methods.aSubCategory[sParentCateNo] = [];
                        }
                        methods.aSubCategory[sParentCateNo].push( aData[i] );
                    }
                }
            });
        },

        getParam: function(sUrl, sKey) {

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
        },


        show: function(overNode, iCateNo) {
            var aHtml = [];
            aHtml.push('<ul class="subCategory active">');
            $(methods.aSubCategory[iCateNo]).each(function() {
                aHtml.push('<li><a href="/product/list.html'+this.param+'">'+this.name+'</a></li> ');
            });
            aHtml.push('</ul>');

            var offset = $(overNode).offset();
            $('<div class="sub-category"></div>')
                .appendTo(overNode)
                .html(aHtml.join(''))
                .find('li').click(function(e) {
                    $(this).addClass('over');
                });
        },

        close: function() {
            $('.sub-category').remove();
        }
    };

    methods.get();

    $('.opener').click(function(e) {
        var iCateNo = Number(methods.getParam($(this).attr('cate'), 'cate_no'));

        var src = $(this).attr('src');
        if (src.indexOf('Opener.png') === -1) {
            $(this).attr('src', src.replace('Closer.png', 'Opener.png'));
            methods.close();
        } else {
            $('.opener').attr('src', src.replace('Closer.png', 'Opener.png'));
            $(this).attr('src', src.replace('Opener.png', 'Closer.png'));
            if (!iCateNo) return
            methods.close();
            methods.show(this.parentNode.parentNode, iCateNo);
        }
    });
});
