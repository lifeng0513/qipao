$(function(){
    $('a').click(function(){
        $(this).css('text-decoration','none');
    })
    $(".geren").hover(function(){
        //$(this).addClass('zibai');
        //$(this).removeClass('zihei');
        $(".gr-jt").show();
    },function(){
        //$(this).removeClass('zibai');
        //$(this).addClass('zihei');
        $(".gr-jt").hide();
    })
    $(".gonggao").hover(function(){
        $(".tpyc").show();
    },function(){
        $(".tpyc").hide();
    })


    //修改密码
    //遮罩部分
    $(".zzqx").click(function(){
        $(".tcym").hide();
        $(".zz").hide();
        $(".xgtips").hide();
    })
    $(".zzgb").click(function(){
        $(".zz").hide();
        $(".xgtips").hide();
    })
    $(".zzbc").click(function(){
        var tmparr=[];
        if($($(".zzbd input")[0]).val()==""||$($(".zzbd input")[1]).val()==""||$($(".zzbd input")[2]).val()==""){
            return
        }
        if($($(".zzbd input")[1]).val()!=$($(".zzbd input")[2]).val()){
            $(".gaisucc").show();
            $(".gaisucc").text("密码不一致");
            console.log(1)
            return;
        }
        for(var i=0;i<3;i++){
            tmparr.push($($(".zzbd input")[i]).val())
        }
        $(".gaisucc").show();
        $(".gaisucc").text("修改成功");
        $(".zz").hide();
        $(".xgtips").hide();
        localStorage.newpass=$($(".zzbd input")[1]).val();
        location.href="../index.html";
        //本地调到logn.html,这个用于演示;
    })
    $("#xgmm").click(function(){
        $(".zz").show();
        $(".xgtips").show();
    })
    $("#tcdl").click(function(){
        $(".zz").show();
        $(".tcym").show();
        //本地调到logn.html,这个用于演示;
    })



    $(".yin1").click(function() {
        var index = $(".yin1").index(this);
        $($(".list-menu")[index]).slideToggle();
        //$($("span.yy")[index]).slideToggle();
        if($($("span.yy")[index]).hasClass('glyphicon-menu-right')){
            console.log(1)
            $($("span.yy")[index]).addClass('glyphicon-menu-down')
            $($("span.yy")[index]).removeClass('glyphicon-menu-right')
        }else if($($("span.yy")[index]).hasClass('glyphicon-menu-down')){
            $($("span.yy")[index]).addClass('glyphicon-menu-right')
            $($("span.yy")[index]).removeClass('glyphicon-menu-down')
        }

    })
    //左侧导航收缩按钮
    $('.menus').click(function(){
        console.log($('.wenzi'))
        if($(this).attr('mwidth')=='11'){
            $('.cd').css('width','2.5%');
            $('.r-con').css('width','96.5%');
            $('.cd').css('text-align','center');
            $('.wenzi').hide();
            $(this).css('margin-right','0')
            $(this).css('float','none');
            $(this).attr('mwidth',2)
        }else if($(this).attr('mwidth')=='2'){
            $('.cd').width('11%');
            $('.r-con').css('width','88%');
            $('.cd').css('text-align','left');
            $(this).css('margin-right','10%');
            $(this).css('float','right');
            $('.wenzi').show();
            $(this).attr('mwidth',11)
        }
    })
    $('.gb').click(function(){
        $(this).parent().hide();
        $('.zz').hide();
    })



})