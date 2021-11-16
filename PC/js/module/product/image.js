/*이미지뷰::Philip Kim(추가)*/
$(document).ready(function(){
	var $big_image_list=$("#big_image_list .slides");
	var $small_image=$("#small_image_list img");

	var i=0;
	$small_image.each(function(){
		if(i!=0){
			var src=$(this).attr("src");
			src=src.replace("/product/extra/small","/product/extra/big");
			var image="<li><img src='"+src+"'></li>";
			$big_image_list.append(image);
		}
		i++;
	});

	$big_image_list.find("#zoomMouseGiude").remove();


	$big_image_list=jQuery1_11_2("#big_image_list");
	$big_image_list.find(".slides").slick({
 		dots: true,
 		infinite: true,
 		speed: 300,
 		slidesToShow: 1
	});

});



/*
 * 옵션선택 박스 설정
 * @todo totalproduct id를 컨트롤러로 밀어야함
 */
function setOptionBox(sItemCode, sOptionText, iPrice, bSoldOut, sSelectElementId, sIsReserveStat, iManualQuantity)
{
    var sReadonly = '';
    var oSelect = $("#"+sSelectElementId);

    // 필수 추가옵션 작성여부 검증
    if (checkAddOption() !== true) {
        delete oProductList[sItemCode];
        NEWPRD_ADD_OPTION.resetSelectElement(oSelect);

        // 독립선택형 옵션별로 한개씩 선택시
        if (typeof(is_onlyone) === 'string' && is_onlyone === 'T' && isNewProductSkin() === true) {
            oSelect.removeAttr('is_selected');
        }

        return false;
    }

    if (checkOptionBox(sItemCode) === true) {
        alert(__('이미 선택되어 있는 옵션입니다.'));
        NEWPRD_OPTION.resetSelectElement(oSelect);
        return false;
    }

    var iBuyUnit  = EC_FRONT_NEW_PRODUCT_QUANTITY_VALID.getBuyUnitQuantity('base');
    var iProductMin = EC_FRONT_NEW_PRODUCT_QUANTITY_VALID.getProductMinQuantity();

    if (parseInt(buy_unit,10) > 1) {
        sReadonly = 'readonly';
    }

    var sStrPrice = SHOP_PRICE_FORMAT.toShopPrice(iPrice);

    var iQuantity = (iBuyUnit >= iProductMin ? iBuyUnit : iProductMin);
    if (typeof(iManualQuantity) !== 'undefined') {
        iQuantity = iManualQuantity;
    }


    // 적립금 추가 필요
    var iMileageVal = 0;
    var sMileageIcon = (typeof(mileage_icon) != 'undefined') ? mileage_icon : '//img.echosting.cafe24.com/design/common/icon_sett04.gif';
    var sMileageAlt  = (typeof(mileage_icon_alt) != 'undefined') ? mileage_icon_alt : '';

    if (typeof(option_stock_data) !== 'undefined') {
        var aStockData = $.parseJSON(option_stock_data);
    }

    if (typeof (mileage_val) != 'undefined') {
        var iStockPrice = 0;
        if (Olnk.isLinkageType(option_type) === true) {
            var aOptionTmp = sItemCode.split('||');
            var aOptionIdTmp = new Array;
            var sItemCodeTemp = '';
            for ( i = 0 ; i < aOptionTmp.length ; i++ ) {
                if (aOptionTmp[i] !== '' ) {
                    aOptionIdTmp = aOptionTmp[i].split('_');
                    if (/^\*+$/.test(aOptionIdTmp[0]) === false )  {
                        iStockPrice = parseFloat(aStockData[aOptionIdTmp[0]].option_price);
                    }
                }
            }
        } else if (typeof (aStockData[sItemCode].stock_price) != 'undefined' ) {
            iStockPrice = aStockData[sItemCode].stock_price;
        }
        iMileageVal = TotalAddSale.getMileageGenerateCalc(sItemCode, iQuantity);
    }
    var sMileageVal = SHOP_PRICE_FORMAT.toShopMileagePrice(iMileageVal);
    // ECHOSTING-58174
    if (sIsDisplayNonmemberPrice == 'T') {
        sStrPrice = sNonmemberPrice;
        sMileageVal = sNonmemberPrice;
    }


    var sProductName = product_name;
    if (sProductName != null) {
        sProductName = product_name.replace(/\\"/g, '"');
    }

    var aAddOption = NEWPRD_ADD_OPTION.getCurrentAddOption();

    var sAddOptionTitle = NEWPRD_ADD_OPTION.getCurrentAddOptionTitle(aAddOption);

    var iIndex = 1;
    if (parseInt($('#totalProducts > table > tbody').find('tr.option_product').length) > 0) {
        // max
        iIndex = parseInt($('#totalProducts > table > tbody').find('tr.option_product:last').data('option-index')) + 1;
    }
    var iTargetKey = iProductNo;
    if (option_type === 'F') {
        iTargetKey = iProductNo+'|'+ EC_SHOP_FRONT_NEW_OPTION_COMMON.getOptionSortNum(oSelect);
    }

    var sDisplayOption = '';
    /**
     * 옵션선택시 바로 장바구니 담기 상태라면 hide처리
     * @see EC_SHOP_FRONT_NEW_OPTION_EXTRA_DIRECT_BASKET.setUseDirectBasket()
     */
    if (typeof(EC_SHOP_FRONT_NEW_OPTION_EXTRA_DIRECT_BASKET) !== 'undefined' && EC_SHOP_FRONT_NEW_OPTION_EXTRA_DIRECT_BASKET.isAvailableDirectBasket(oSelect) === true) {
        sDisplayOption = 'displaynone';
    }

    var sOptionBoxId = 'option_box' + iIndex;
    var sOptionId = (typeof(aStockData[sItemCode]) != 'undefined' && typeof(aStockData[sItemCode].option_id) != 'undefined') ? aStockData[sItemCode].option_id : '';
    var sTableRow = '<tr class="option_product ' + sDisplayOption + '" data-option-index="'+iIndex+'" target-key="'+iTargetKey+'">';

    if (EC_MOBILE === true || EC_MOBILE_DEVICE === true) {
        sTableRow += '<td>';
        sOptionText = '<p class="product"><strong>' + sProductName + '</strong><br /> - <span>' + sAddOptionTitle + sOptionText + '</span></p>';

        if (bSoldOut === true) {
            try {
                if ($('#NaverChk_Button').length > 0 && $('#NaverChk_Button').children().length > 0) {
                    $('#NaverChk_Button').css('display', 'none');
                }
            } catch(e) {}

            sTableRow += '<input type="hidden" class="soldout_option_box_id" id="'+sOptionBoxId+'_id" value="'+sItemCode+'">'+sOptionText;
            sTableRow += '<p><input type="number" readonly value="0"/> ';
            sTableRow += '<a href="#none"><img width="30" height="27" src="//img.echosting.cafe24.com/mobileWeb/common/btn_quantity_up.png" class="up"/></a> &nbsp;';
            sTableRow += '<a href="#none"><img width="30" height="27" src="//img.echosting.cafe24.com/mobileWeb/common/btn_quantity_down.png" class="down"/></a></span></p></td>';
            sTableRow += '<td class="right"><strong class="price">'+sStrPrice+'</strong></td>';
            sTableRow += '<td class="center"><a href="#none"><img src="//img.echosting.cafe24.com/design/skin/default/product/btn_price_delete.gif" alt="삭제" id="'+sOptionBoxId+'_del" class="option_box_del" /></a></td>';
        } else {

            //ECHOSTING 162635 예약주문 속성추가
            var sInputHiddenReserved = 'data-item-reserved="' + sIsReserveStat + '" ';

            sTableRow += '<input type="hidden" class="option_box_id" id="'+sOptionBoxId+'_id" value="'+sItemCode+'" name="item_code[]" data-item-add-option="'+escape(aAddOption.join(NEWPRD_OPTION.DELIMITER_SEMICOLON))+'"' + sInputHiddenReserved + ' data-option-id="'+sOptionId+'">'+sOptionText;
            sTableRow += '<p><input type="number" id="'+sOptionBoxId+'_quantity" name="quantity_opt[]" autocomplete="off" class="quantity_opt eProductQuantityClass" '+sReadonly+' value="'+iQuantity+'" product-no="'+iProductNo+'"/> ';
            sTableRow += '<a href="#none"><img width="30" height="30" style="width:10px !important; height:10px !important; top: 5px !important;" src="/web/img/up.png" id="'+sOptionBoxId+'_up" class="up option_box_up" alt="up" /></a> &nbsp;';
            sTableRow += '<a href="#none"><img width="30" height="30" style="width:10px !important; height:10px !important; top: 5px !important; left: 10px !important;" src="/web/img/down.png" id="'+sOptionBoxId+'_down" class="down option_box_down" alt="down" /></a></p></td>';
            sTableRow += '<td class="right"><strong id="'+sOptionBoxId+'_price" class="price"><input type="hidden" class="option_box_price" value="'+iPrice+'" product-no="'+iProductNo+'" item_code="'+sItemCode+'"><span class="ec-front-product-item-price" code="' + sItemCode + '" product-no="'+iProductNo+'">'+sStrPrice+'</span></strong>';
            if (TotalAddSale.checkVaildMileageValue(iMileageVal) === true && sIsMileageDisplay === 'T') {
                sTableRow += '<span class="mileage">(<img src="'+sMileageIcon+'" alt="'+sMileageAlt+'" /> <span id="'+sOptionBoxId+'_mileage" class="mileage_price" code="' + sItemCode + '">'+sMileageVal+'</span>)</span>';
            }
            sTableRow += '</td>';
            sTableRow += '<td class="center"><a href="#none" class="delete"><img src="//img.echosting.cafe24.com/design/skin/default/product/btn_price_delete.gif" alt="삭제" id="'+sOptionBoxId+'_del" class="option_box_del" /></a></td>';
        }
        sTableRow += '</tr>';

        if (EC_SHOP_FRONT_PRODUCT_OPTIONLAYER.isDisplayLayer(true) === true) {
            parent.$('#totalProducts > table > tbody:last').append(sTableRow);
        }
        if (EC_SHOP_FRONT_PRODUCT_OPTIONLAYER.isExistLayer() === true) {
            if (EC_SHOP_FRONT_PRODUCT_OPTIONLAYER.isDisplayLayer() === false) {
                $("#productOptionIframe").contents().find('#totalProducts > table > tbody:last').append(sTableRow);
            }
        }
    } else {
        sOptionText = '<p class="product">' + sProductName + '<br /> - <span>' + sAddOptionTitle + sOptionText + '</span></p>';

        if (bSoldOut === true) {
            try {
                if ($('#NaverChk_Button').length > 0 && $('#NaverChk_Button').children().length > 0) {
                    $('#NaverChk_Button').css('display', 'none');
                }
            } catch(e) {}
            sTableRow += '<td><input type="hidden" class="soldout_option_box_id" id="'+sOptionBoxId+'_id" value="'+sItemCode+'">'+sOptionText+'</td>';
            sTableRow += '<td><span class="quantity" style="width:65px;"><input type="text" '+sReadonly+' value="0"/><a href="#none"><img src="/web/img/up.png" class="up" alt="수량증가" style="width:10px !important; height:10px !important; top: 5px !important;"/></a><a href="#none"><img src="/web/img/down.png" class="down" alt="수량감소"  style="width:10px !important; height:10px !important; left: 10px !important; top: 5px !important;"/></a></span>';
            sTableRow += '<a href="#none" class="delete"><img src="//img.echosting.cafe24.com/design/skin/default/product/btn_price_delete.gif" alt="삭제" id="'+sOptionBoxId+'_del" class="option_box_del" /></a></td>';
            sTableRow += '<td class="right"><span id="'+sOptionBoxId+'_price"><span>'+sStrPrice+'</span></span>';
        } else {

            //ECHOSTING 162635 예약주문 속성추가
            var sInputHiddenReserved = 'data-item-reserved="' + sIsReserveStat + '" ';
            sTableRow += '<td><input type="hidden" class="option_box_id" id="'+sOptionBoxId+'_id" value="'+sItemCode+'" name="item_code[]" data-item-add-option="'+escape(aAddOption.join(NEWPRD_OPTION.DELIMITER_SEMICOLON))+'"' + sInputHiddenReserved + ' data-option-id="\'+sOptionId+\'">'+sOptionText+'</td>';
            sTableRow += '<td><span class="quantity" style="width:65px;">';
            sTableRow += '<input type="text" id="'+sOptionBoxId+'_quantity" name="quantity_opt[]" class="quantity_opt eProductQuantityClass" '+sReadonly+' value="'+iQuantity+'" product-no="'+iProductNo+'"/>';
            sTableRow += '<a href="#none"><img src="/web/img/up.png" id="'+sOptionBoxId+'_up" class="up option_box_up" alt="수량증가" style="width:10px !important; height:10px !important; top: 5px !important;" /></a>';
            sTableRow += '<a href="#none"><img src="/web/img/down.png" id="'+sOptionBoxId+'_down" class="down option_box_down" alt="수량감소" style="width:10px !important; height:10px !important; top: 5px !important; left: 10px !important;" /></a>';
            sTableRow += '</span>';
            sTableRow += '<a href="#none" class="delete"><img src="//img.echosting.cafe24.com/design/skin/default/product/btn_price_delete.gif" alt="삭제" id="'+sOptionBoxId+'_del" class="option_box_del" /></a></td>';
            sTableRow += '<td class="right"><span id="'+sOptionBoxId+'_price">';
            sTableRow += '<input type="hidden" class="option_box_price" value="'+iPrice+'" product-no="'+iProductNo+'" item_code="'+sItemCode+'">';
            sTableRow += '<span class="ec-front-product-item-price" code="' + sItemCode + '" product-no="'+iProductNo+'">'+sStrPrice+'</span></span>';
        }

        if (TotalAddSale.checkVaildMileageValue(iMileageVal) === true && sIsMileageDisplay === 'T') {
            sTableRow += '<span class="mileage">(<img src="'+sMileageIcon+'" alt="'+sMileageAlt+'" /> <span id="'+sOptionBoxId+'_mileage" class="mileage_price" code="' + sItemCode + '">'+sMileageVal+'</span>)</span>';
        }

        sTableRow += '</td></tr>';
    }

    if (0 == $('#totalProducts > table > tbody.option_products').length) {
        $('#totalProducts > table > tbody:last').addClass("option_products").after($('<tbody class="add_products"/>'));
    }

    $('#totalProducts > table > tbody.option_products').append(sTableRow);
    // 총 주문금액/수량 처리
    setTotalData();

    //적립금 / 품목금액 업데이트
    TotalAddSale.updatePrice(sOptionBoxId, sItemCode);
}