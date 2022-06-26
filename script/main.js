$(function(){
    scrollmenu();
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