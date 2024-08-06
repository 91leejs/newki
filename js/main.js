$(function(){
    $(".main > li, .sub_bg").hover(function(){
        $(".sub, .sub_bg").stop().slideDown();
    },
    function(){
        $(".sub, .sub_bg").stop().slideUp();
    })//

    $(".f_main > li , .f_sub_bg").hover(function(){
        $(".f_sub , .f_sub_bg").stop().slideDown();
    },
    function(){
        $(".f_sub , .f_sub_bg").stop().slideUp();
    })//

    $(".pop_click").click(function(){
        $(".pop_up").slideDown();
    })//

    $(".close").click(function(){
        $(".pop_up").slideUp();
    })//

    $(".move").slick({
        autoplay:true,
        autoplaySpeed:2000,
        appendArrows:$(".btn button"),
        prevArrow:$(".left"),
        nextArrow:$(".right"),
        dots:true,
        arrows:true,
    })//move slick

    $(".m_move").slick({
        autoplay:true,
        autoplaySpeed:2000,
        appendArrows:$(".btn button"),
        prevArrow:$(".left"),
        nextArrow:$(".right"),
        dots:true,
    })//move slick

    // $(".move").bxSlider({
    //     auto:true,
    //     mode:"horizontal",
    //     speed:700,
    //     controls:true,
    //     pager:true,

    // })//move bxslider

    // $(".m_move").bxSlider({
    //     auto:true,
    //     mode:"horizontal",
    //     speed:700,
    //     controls:true,
    //     pager:true,
    // })//move bxslider

    $(".hamburger").click(function(){
        $(this).toggleClass("act");
    })//
    
    $("a").click(function(event){
        event.preventDefault();
    })//

    $(".t_menu ul li:nth-child(1) a , .m_search ").click(function(){
        $(".search_pop").slideDown();
    })//

    $(".sp_close").click(function(){
        $(".search_pop").slideUp();
    })//

    $(".col").click(function(){
        $(".slide_menu").toggleClass("on");
    })//

    // $(".sl_main > li > a").click(function(){
    //     $(".sl_sub").slideUp();
    //     $(this).siblings().slideDown();
    // })//


    $(".sl_main > li > a").click(function(e) {
        e.preventDefault(); // Prevent default link behavior
        
        var $submenu = $(this).next(".sl_sub");

        // Slide up all submenus
        $(".sl_sub").not($submenu).slideUp();

        // Toggle visibility of the related submenu
        $submenu.slideToggle();
        
        // Stop click event from propagating to the document
        e.stopPropagation();
    });

    // Handle clicks anywhere in the document
    $(document).click(function() {
        $(".sl_sub").slideUp();
    });

    // Prevent clicks inside the submenu from hiding the menu
    $(".sl_sub").click(function(e) {
        e.stopPropagation();
    });


})//jQuery

$(window).scroll(function(){
    var top = $(this).scrollTop();
    console.log(top);

    if( top >= 250 ){
        $(".fix").addClass("on");
    }else{
        $(".fix").removeClass("on");
    }
})//scroll