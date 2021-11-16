//$('#tab_01').attr('src','/SkinImg/img/01_over.jpg');
$('#tab_01').addClass('on');

$('.tab_bt ul li').click(function(){
    $('.tab_bt ul li').removeClass('on');
    $(this).addClass('on');
})
function tab_open(x){
    for(var i = 1; i < 5; i++){
        $('#tab_area_0'+i).css('display','none');
        //$('#tab_0'+i).attr('src','/SkinImg/img/0'+i+'.jpg');
    }
    $('#tab_area_'+x).css('display','block');
    //$('#tab_'+x).attr('src','/SkinImg/img/'+x+'_over.jpg');
}