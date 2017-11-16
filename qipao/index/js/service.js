$(function(){
    //轮播
    var num=0;
    var t=setInterval(move,4000);
    function move(){
        num++;
        if(num==$(".banner-box .list").length-1){
            $(".banner-box").animate({marginLeft:-num*100+"%"},function(){
                $(".banner-box").css({marginLeft:0});
            })
            num=0;
        }else{
            $(".banner-box").animate({marginLeft:-num*100+"%"})
        }
        $('.btn1 li').css({background:"#fff",border:"none"});
        $('.btn1 li').eq(num).css({background:"#BE0403",width:"13px" ,height:"13px"});
    }
    $(".btn1 li").click(function(){
        var index=$(this).index(".btn1 li");
        num=index;
        console.log(index)
        $('.btn1 li').css({background:"#fff",border:"none"});
        $(this).css({background:"#BE0403",width:"13px" ,height:"13px"});
        $(".banner-box").animate({marginLeft:-num*100+"%"})
    });
    $(".banner").hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(move,4000);
    });

    //选项卡
    var count = 1;
    $($(".nav-box-r")[0]).show();
    $(".s-name").click(function(){
        $(".nav-box-r").hide();
        var count=$(".s-name").index(this);
        $(".s-name").addClass("s-back");
        $(".s-name").removeClass("s-back");
        $(this).removeClass("s-back");
        $(this).addClass("s-back");
        $($(".nav-box-r")[count]).show();
        $(".nav-txt").text($(this).text());
    });


});





