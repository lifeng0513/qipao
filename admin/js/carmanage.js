/**
 * Created by Administrator on 2016/6/22.
 */
$(function(){
    //table中的input
    $('.c-b-fx input').click(function(){
        if($(this).prop("checked")){
            $('.contable input[type=checkbox]').each(function(){
                console.log($(this).prop("checked"))
                if($(this).prop("checked")){
                   $(this).prop('checked',false)
                }else{
                    $(this).prop('checked',true)
                }
            })
        }else{
            $('.contable input[type=checkbox]').each(function(){
                console.log($(this).prop("checked"))
                if($(this).prop("checked")){
                    $(this).prop('checked',false)
                }else{
                    $(this).prop('checked',true)
                }

            })
        }
    })
    //table--全删
    $('.c-b-sc').click(function(){
        $('.contable input[type=checkbox]').each(function(){
            if($(this).prop('checked')){
                console.log(1)
                $(this).parent().parent().remove();
            }
        })
    })
    //table--编辑
    $('.tablebianji').click(function(){

    })
    //table--删除
    $('.tabledel').click(function(){
        $(this).parent().parent().remove();
    })

    //新增车型
    //新增
    $('.c-b-xz').click(function(){
        $('.zz').show();
        $('.addcx').show();
        $('.addcx-con').show();
    })
    //取消
    $('.addqx').click(function(){
        $('.zz').hide();
        $('.addcx').hide();
        $('.addcx-con').hide();
    })
    var addvxinput={};
    //下一步
    $('.addxyb').click(function(){
        var name,val;
        for(var i=0;i<$('.addcx-con input').length;i++){
            if($($('.addcx-con input')[i]).val()==''){
                $('.addzi').text('带*的必填,请填写');
               $('.addtips').show();
                return false;
            }
            //addvxinput.push($($('.addcx-con input')[i]).val());
            name=$($('.addcx-con input')[i]).attr('name');
            val=$($('.addcx-con input')[i]).val();
            addvxinput[name]=val;
        }
        for(var i=0;i<$('.addcx-con select').length;i++){
            name=$($('.addcx-con select')[i]).attr('name');
            val=$($('.addcx-con select')[i]).val();
            addvxinput[name]=val;
        }
        console.log(addvxinput);
        $('.addcx-con').hide();
        $('.addcx-jgsd').show();
    })
    //带星号必填的提示
    $('.addtipsbtn').click(function(){
        $('.addtips').hide();
    })
    //上一步
    $('.addsyb').click(function(){
        $('.addcx-con').show();
        $('.addcx-jgsd').hide();
        addvxinput=[];
    })
    $('.addbc').click(function(){
        var name,val;
        for(var i=0;i<$('.addcx-jgsd input').length;i++){
            if($($('.addcx-jgsd input')[i]).val()==''){
                $('.addzi').text('带*的必填,请填写');
               $('.addtips').show();
                return false;
            }
            name=$($('.addcx-jgsd input')[i]).attr('name');
            val=$($('.addcx-jgsd input')[i]).val();
            addvxinput[name]=val;
        }
        console.log(addvxinput);
        //$.post({
        //    url:'http://192.168.1.102:8098/car-admin/car/carmodel/save',
        //    data:addvxinput,
        //    type:'jsonp',
        //    success:function(){
        //        $('.addzi').text('保持成功');
        //        $('.addtips').show();
        //        $('.addcx-con').hide();
        //        $('.addcx-jgsd').hide();
        //        $('.zz').hide();
        //        $('.addcx').hide();
        //    }
        //})
        $.ajax({
            "dataType" : 'jsonp',
            "type" : "POST",
            "url" : "http://www.baidu.com",
            //"data" : {id:1,pl:"2"},
            "cache" : false,
            "success" : function(response) {
                //debugger
                //if (response != null && response.ret == '0') {
                //    $('#action').val("");
                //
                //} else {
                //    alert(response.desp);
                //}
                console.log(0)
            }
        });

    })
    $('.xiangqing').click(function(){
        location.href='carxiangqing.html'
    })
})