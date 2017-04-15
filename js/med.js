$(document).ready(function(){
    $(".showj1").click(function(){
        $(".j1").show();
        $(".side-left").addClass('side-left1').fadeIn();
        $(".intro-content").hide().fadeOut();
        $('#Layer_1').show();
    });
    
    $(".showegypt").click(function(){
        $(".egypt").show();
       /* $(".side-left").addClass('side-left1').fadeIn();
        $(".intro-content").hide().fadeOut();
        $('#Layer_1').show();*/
    });
    
    $(".sell").click(function(){
        var me=$(this).data( "value" );
        var cash=$(".cash").html();
        $(".cash").html(parseInt(cash) + parseInt(me));
        $(this).unbind("click");
        $(this).css("color", "grey");
        $(this).css("cursor", "not-allowed");
        $(this).html("sold");
        
        
    });
   
    
     
    
});