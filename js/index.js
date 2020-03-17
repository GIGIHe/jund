$(function(){

    $(window).scroll(function(){
        // 注入ht
        var top = $(".zgm1").offset().top;//获取指定位置
        var scrollTop = $(window).scrollTop();
        if(scrollTop>top){
            $(".navbar").addClass('active');
        }else{
            $(".navbar").removeClass('active');
        }
    })
    $(".nav span").each(function (index) {
        $(this).click(function () {
            $(this).addClass('on').siblings('span').removeClass('on');
            $(".contab").hide().eq(index).show()
        })
    })
    // a href 对应跳转位置的id
    $('.dt .a1').click(function () {
        $('html, body').animate({
            scrollTop: $("#itm1").offset().top
        }, 500);
        return false;
    });
    $('.dt .a2').click(function () {
        $('html, body').animate({
            scrollTop: $(".conb").offset().top 
        }, 500);
        return false;
    });
    $('.dt .a3').click(function () {
        $('html, body').animate({
            scrollTop: $("#itm3").offset().top
        }, 500);
        return false;
    });
    $(".ercd span").click(function () {
        $(".mask,.ercd").fadeOut()
    })
    $(".cont a").each(function (index) {

        $(this).click(function () {
            console.log(index)
            $(".mask").fadeIn()
            $(".ercd").hide()
            $(".ercd").eq(index).fadeIn()
        })
    })
 
})