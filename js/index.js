// 广告
$('#clos').click(function () {
    $('#banner').fadeOut("slow");
})
//轮播图
var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
//高亮显示当前盒子
$("#home-server").find("li").mouseenter(function () {
    $(this).css("opacity", 1).siblings("li").css("opacity", 0.3);
})
$("#home-server").mouseleave(function () {
    $(this).children().css("opacity", 1);
})
// =========顶部nav导航
$('.nav-center-li').mousemove(function () {
    // $(".nav-center-children").eq($(this).index()+1).stop().fadeIn(200).parent().siblings().children('div.nav-center-children').hide();
    $(this).children("div.nav-center-children").stop().fadeIn(200);
})
$('.nav-center-li').mouseleave(function () {
    $('.nav-center-children').fadeOut(200);
}) 
// ==========轮播图上面左边的导航
$('.home-nav > li').mousemove(function(){
    $(this).addClass('home-nav-bg').siblings().removeClass('home-nav-bg');
   $('.home-nav-div').eq($(this).index()).show();
})
$('.home-nav').mouseout(function(){
    $('.home-nav-li').removeClass('home-nav-bg');
     $('.home-nav-div').hide();
})
//=========nav 中登录的隐藏
$(".nav-right-login").mousemove(function(){
    $('.nav-right-login-item').stop().fadeIn(300)
})
$(".nav-right-login").mouseout(function(){
    $('.nav-right-login-item').stop().fadeOut(300)
})
//=========nav 中购物车的隐藏
$(".nav-right-shop").mousemove(function(){
    $('.nav-right-shop-items').stop().fadeIn(300)
})
$(".nav-right-shop").mouseout(function(){
    $('.nav-right-shop-items').stop().fadeOut(300)
})
// =====热品推荐轮播


$('.home-hot-header-left-btn').click(function(){
    $('.home-hot-layout-ul').animate({left:'0'});
})
$('.home-hot-header-right-btn').click(function(){
    $('.home-hot-layout-ul').animate({left:'-1240px'});
})

//tab栏切换
$('.home-shop-header-left-a').mousemove(function(){
    $('.home-shop-footer').eq($(this).index()-1).show().siblings().hide();
    $(this).addClass('bg').siblings().removeClass('bg')
})
