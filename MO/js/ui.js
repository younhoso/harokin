$(document).ready(function() {

    //input elements autocomplete off
    $("input[type=text], input[type=password]").attr('autocomplete', 'off');

    //header 의 검색폼 
    var laySearchWrap = $('header .mSearch');
    var laySearchTrigger = $('.gHeader .search img');
    var laySearchUrl = "http://img.echosting.cafe24.com/mobileWeb/common/btn_search"

    //검색창
    if ($('#keyword').val() == undefined) {
        $(laySearchTrigger).click(function(e) {
            if ($(laySearchWrap).css("display") == "block") {
                $(laySearchWrap).hide();
                $(this).attr("src",laySearchUrl+"Open.png");
            } else {
                $(laySearchWrap).show().mouseleave(function(e){
                    $(laySearchWrap).hide()
                    $(laySearchTrigger).attr("src", laySearchUrl+"Open.png");
                });
                $(this).attr("src",laySearchUrl+"Close.png");
            }
        });
    }

    //회원가입페이지 스타일 처리
    if ($('#member_name_cert_flag').val() != undefined) {
		if ($('#member_name_cert_flag').val() == 'F') {
			$('#auth_tr').html('');
			$('#rname_tr').html('');
			$('#rssn_tr').html('');
			$('#ipin_tr').html('');
			$('#name_tr').show();
			$('#ssn_tr').show();
		} else {
			$('#auth_tr').show();
		}

        if ($('#is_display_register_ssn').val() == 'F') $('#ssn_tr').hide();

        $('#phone2').get(0).type = 'tel';
        $('#phone3').get(0).type = 'tel';
        $('#mobile2').get(0).type = 'tel';
        $('#mobile3').get(0).type = 'tel';
    }

    //장바구니 페이지 수량폼 Type 변경
    $('[id^="quantity"]').each(function() {
        $(this).get(0).type = 'number';
    });
    
    //로그인폼 placeholder 추가
    if ($('.loginForm').val() != undefined) {
        $('#member_id').attr('placeholder', '아이디');
        $('#member_passwd').attr('placeholder', '패스워드');
    }

    //비회원 성인인증 placeholder 추가
    if ($('#adult_login').val() == 'T') {
        $('#realname').attr('placeholder', '이름(실명)');
        $('#ssn').attr('placeholder', '주민번호(\'-\'제외)');
    }

    //비회원의 경우만 주문자 주소지 입력창 노출
    $('.eAddress').each(function() {
        if ($('#member_id').val() == '') {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
});

// 이용약관, 개인정보취급방침 동의 체크
function joinMember() {
    if ($('#agree_service_check').attr('checked') === false) {
        alert('이용약관에 동의하셔야 합니다.');
        return false;
    }
    if ($('#agree_privacy_check').attr('checked') === false) {
        alert('개인정보취급방침에 동의하셔야 합니다.');
        return false;
    }
    location.href = '/member/join.html';
}

// 우편번호 찾기 레이어 보여주기
function fnZipCode() {
    $('#dZipcode').show();
}

// 장바구니 선택상품 삭제
function selBasketDel(id) {
    $('[id^="'+BASKET_CHK_ID_PREFIX+'"]').attr('checked', false);
    $('[id="'+id+'"]').attr('checked', true);
    Basket.deleteBasket();
}

// 주문 상품 전체 보기
function orderDetail() {
    window.open('/myshop/order/order_detail_more.html?order_id='+$('#order_id').val());
}

// 주소 검색
function findAddress(zipId1, zipId2, addrId) {
    var url = '/protected/zipcode_mobile.html?zip1=' + zipId1 + '&zip2=' + zipId2 + '&addr=' + addrId;
    window.open(url, 'Zipcode', 'width=500, height=350, toolbar=0, menubar=0, scrollbars=0');
}

// 주문 결제 완료 전체 보기
function orderResultDetail() {
    window.open('/order/order_result_detail.html?order_id='+$('#order_id').val());
}

// 개인정보취급방침 보기
function viewPersonAgree() {
    window.open('/order/personagree.html?basket_type='+$('#basket_type').val());
}

// 청약철회방침 보기
function viewSubscription() {
    window.open('/order/subscription.html?basket_type='+$('#basket_type').val());
}

// PC버전 바로 가기
function isPCver() {
    var sUrl = window.location.hostname;
    var aTemp = sUrl.split(".");

    if (aTemp[0] == 'm' || aTemp[0] == 'skin-mobile' || aTemp[0] == 'mobile') {
        sUrl = sUrl.replace(aTemp[0]+'.', '');
    }

    window.location.href = 'http://'+sUrl+'/?is_pcver=T';
}

// 배송지 선택
$('#AddrList').change(function() {
    if (this.value != '') {
        var aZipCode = myshopAddr.oAddrData[this.value].ma_rcv_zipcode.split("-");
        var aPhone = myshopAddr.oAddrData[this.value].ma_rcv_phone.split("-");
        var aMobile = myshopAddr.oAddrData[this.value].ma_rcv_mobile_no.split("-");
        
        $('#rname').attr('value',myshopAddr.oAddrData[this.value].ma_rcv_name);
        $('#rzipcode1').attr('value',aZipCode[0]);
        $('#rzipcode2').attr('value',aZipCode[1]);
        $('#raddr1').attr('value',myshopAddr.oAddrData[this.value].ma_rcv_addr1);
        $('#raddr2').attr('value',myshopAddr.oAddrData[this.value].ma_rcv_addr2);
        $('#rphone1_1').attr('value',aPhone[0]);
        $('#rphone1_2').attr('value',aPhone[1]);
        $('#rphone1_3').attr('value',aPhone[2]);
        $('#rphone2_1').attr('value',aMobile[0]);
        $('#rphone2_2').attr('value',aMobile[1]);
        $('#rphone2_3').attr('value',aMobile[2]);
        $('#sameaddr1').attr('checked', true);
        $('#raddr2').blur();
    }
});

// 장바구니 페이지 가격정보 더 보기
$('.trigger').click(function() {
    var ulNode = $(this.parentNode).find('ul');
    var imgNode = $(this).find('img');

    if (ulNode.css("display") == "none") {
        imgNode.attr('src', imgNode.attr('src').replace('Opener.png', 'Closer.png'));
        ulNode.show();
    } else {
        imgNode.attr('src', imgNode.attr('src').replace('Closer.png', 'Opener.png'));
        ulNode.hide();
    }
});

// 비회원 구매 개인정보 취급방침에 동의
$('#personAgree').click(function() {
    if ($(this).attr('checked') === true) {
        $('#nm_agreement0').attr('checked', true);
    } else {
        $('#nm_agreement1').attr('checked', true);
    }
});

//청약 철회 방침에 동의
$('#subscription').click(function() {
    if ($(this).attr('checked') === true) {
        $('#subscription_agreement0').attr('checked', true);
    } else {
        $('#subscription_agreement1').attr('checked', true);
    }
});

// 상품검색
$('#goSearch').click(function() {
    location.href = '/product/search.html?keyword=' + $('#search_keyword').val();
});

// 약관동의 및 개인정보취급방침 더보기 버튼 이벤트
$('.mAgree .agree .btn').click(function() {
    var divNode = $(this.parentNode).find('div');
    var imgNode = $(this).find('img');

    if (divNode.height() == '100') {
        divNode.height('auto');
        imgNode.attr('src', imgNode.attr('src').replace('Opener.png', 'Closer.png'));
    } else {
        divNode.height('100');
        imgNode.attr('src', imgNode.attr('src').replace('Closer.png', 'Opener.png'));
    }
});