$(document).ready(function(){

    // OPEN MENU MOBILE

    $(".js-open-menu").click(function(){
        $(".header__desktop").addClass("open");
        $("html").addClass("u-scroll-block");
    });

    $(".js-close-menu").click(function(){
        $(".header__desktop").removeClass("open");
        $("html").removeClass("u-scroll-block");
    });

    // STICKY

    function checkScroll() {
        if ($(window).scrollTop() >= 40) {
            $(".header").addClass("sticky");
        } else {
            $(".header").removeClass("sticky");
        }
    }
    checkScroll();
    $(window).on("scroll", function() {
        checkScroll();
    });


    // COMPANY / USERS OPTIONS

    function hiddenCompanyUserOptions() {
        if ($(window).scrollTop() >= 1) {
            $(".header-topbar, .module_article_header").addClass("hidden");
        } else {
            $(".header-topbar, .module_article_header").removeClass("hidden");
        }
    }
    hiddenCompanyUserOptions();
    $(window).on("scroll", function() {
        hiddenCompanyUserOptions();
    });
});
