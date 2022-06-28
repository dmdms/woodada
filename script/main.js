$(function(){
    scrollmenu();
    heart();
})


function scrollmenu(){
    $(window).scroll(function(){
        if($(window).scrollTop()){
            $(".header-wrap").css('background','rgb(253, 234, 146');
        } else{
            $(".header-wrap").css('background','white');
        }
    })
}
function heart(){
    $(".heart-1").click(function(){
        $(this).css('display', 'none');
        $(".heart-2").css('display','block');
        $(".heart-2").css('color','#e63462');
        $(".h-1").css('display','none');
        $(".h-2").css('display','block');
    })
    $(".heart-2").click(function(){
        $(this).css('display', 'none');
        $(".heart-1").css('display','block');
        $(".heart-1").css('color','#333');
        $(".h-2").css('display','none');
        $(".h-1").css('display','block');
    })
    $(".heart-3").click(function(){
        $(this).css('display', 'none');
        $(".heart-4").css('display','block');
        $(".heart-4").css('color','#e63462');
        $(".h-3").css('display','none');
        $(".h-4").css('display','block');
    })
    $(".heart-4").click(function(){
        $(this).css('display', 'none');
        $(".heart-3").css('display','block');
        $(".heart-3").css('color','#333');
        $(".h-4").css('display','none');
        $(".h-3").css('display','block');
    })
    $(".heart-5").click(function(){
        $(this).css('display', 'none');
        $(".heart-6").css('display','block');
        $(".heart-6").css('color','#e63462');
        $(".h-5").css('display','none');
        $(".h-6").css('display','block');
    })
    $(".heart-6").click(function(){
        $(this).css('display', 'none');
        $(".heart-5").css('display','block');
        $(".heart-5").css('color','#333');
        $(".h-6").css('display','none');
        $(".h-5").css('display','block');
    })
    $(".heart-7").click(function(){
        $(this).css('display', 'none');
        $(".heart-8").css('display','block');
        $(".heart-8").css('color','#e63462');
        $(".h-7").css('display','none');
        $(".h-8").css('display','block');
    })
    $(".heart-8").click(function(){
        $(this).css('display', 'none');
        $(".heart-7").css('display','block');
        $(".heart-7").css('color','#333');
        $(".h-8").css('display','none');
        $(".h-7").css('display','block');
    })
    $(".heart-9").click(function(){
        $(this).css('display', 'none');
        $(".heart-10").css('display','block');
        $(".heart-10").css('color','#e63462');
        $(".h-9").css('display','none');
        $(".h-10").css('display','block');
    })
    $(".heart-10").click(function(){
        $(this).css('display', 'none');
        $(".heart-9").css('display','block');
        $(".heart-9").css('color','#333');
        $(".h-10").css('display','none');
        $(".h-9").css('display','block');
    })
}

