
$(document).ready(function(){
    $("#spreadBtn").click(function(){
            if($("#hiddenList").is(":visible")){
                            /*toggleClass(기존클래스명 바꿀클래스명);*/
                            $("#spreadBtn").toggleClass("btn01 btn02");
                $("#hiddenList").slideUp();
            }else{
                            $("#spreadBtn").toggleClass("btn02 btn01");
                $("#hiddenList").slideDown();
            }
        });
});
