$(function(){
    //第一步
    $('#first').click(function(){
        $('#yi input').each(function(){
            if($(this).val()==''){
                return;
            }
        })
        $('#yi').hide();
        $('#er').show();
        $(".po-ap").removeClass("xxkts-bor");
        $(".one-info").addClass("xxkts-bor");
    })
    //第二步
    $('#second').click(function(){
        $('#yi input').each(function(){
            if($(this).val()==''){
                return;
            }
        })
        $('#er').hide();
        $('#san').show();
        $(".po-ap").removeClass("xxkts-bor");
        $(".one-info").removeClass("xxkts-bor");
        $(".zc-succ").addClass("xxkts-bor");
        var i=0;
        setTimeout(function(){
            i++;
            $('.count').text('i');
            location.href='index.html';
        },5000)
    })



})