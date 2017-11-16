
/**
 * Created by Administrator on 2016/6/20.
 */
/*表格*/
    //title,select--父元素thead,courses--里面的字段--类型:数组,issort--是否排序
    var title=function(select,courses,issort,isfx){
        $(select).append('<tr>');
        var tmps='';
        if(isfx){
            tmps='<td class="fx"></td>'
        }
        if(issort){
            for(var i=0;i<courses.length;i++){
                tmps+=' <td>'+courses[i]+'<i class="sort desc  glyphicon-triangle-top"></i><i class="sort asc  glyphicon-triangle-bottom"></i></td>'
            }
        }else{
            for(var i=0;i<courses.length;i++){
                tmps+=' <td>'+courses[i]+'</td>'
            }
        }
        $(select+' tr').append(tmps);
        $(select+'td').width(100/(i-1)+'%');
    }
    //tbody select--父元素,data--数据--[{}],special--特殊的--[{name:name,c:class},...],sort--排序方式默认为正序,page--当前页
    var tbody=function(select,data,special,page){
        //sort=sort||'asc';
        var tmps1='';
        for(var k=0;k<data.length;k++){
            if(special){
                for(var i in data[k]){
                    for(var j=0;j<special.length;j++){
                        if(i==special[j].name){
                            tmps1 +='<td class="'+special[j].c+'">'+data[k][i]+'</td>'
                        }else{
                            tmps1 +='<td>'+data[k][i]+'</td>'
                        }
                    }
                }
            }else{
                for(var i in data[k]){
                    tmps1+='<td>'+data[k][i]+'</td>'
                }
            }
            $(select).append('<tr>');
            //if(sort=='asc'){
            //    $(select).append('<tr>')
            //}else{
            //    $(select).prepend('<tr>')
            //}
            $($(select+' tr')[k]).append(tmps1);
            tmps1='';
        }
        $(select+' tr').each(function(){
            if($(this).prev()){
                if($(this).prev().hasClass('white')){
                    $(this).addClass('ccc')
                }else{
                    $(this).addClass('white')
                }
            }else{
                $(this).addClass('white')
            }
        })
        $('tr').parent().parent().attr('page',''+page);
    }
//带复选框的表格主体
var tbodyfx=function(select,data,special,page){
    //sort=sort||'asc';
    var tmps1='<td class="fx"><input type="checkbox"></td>';
    for(var k=0;k<data.length;k++){
        if(special){
            for(var i in data[k]){
                for(var j=0;j<special.length;j++){
                    if(i==special[j].name){
                        tmps1 +='<td class="'+special[j].c+'">'+data[k][i]+'</td>'
                    }else{
                        tmps1 +='<td>'+data[k][i]+'</td>'
                    }
                }
            }
        }else{
            for(var i in data[k]){
                tmps1+='<td>'+data[k][i]+'</td>'
            }
        }
        $(select).append('<tr>');
        //if(sort=='asc'){
        //    $(select).append('<tr>')
        //}else{
        //    $(select).prepend('<tr>')
        //}
        $($(select+' tr')[k]).append(tmps1);
        tmps1='<td><input type="checkbox"></td>';
    }
    $(select+' tr').each(function(){
        if($(this).prev()){
            if($(this).prev().hasClass('white')){
                $(this).addClass('ccc')
            }else{
                $(this).addClass('white')
            }
        }else{
            $(this).addClass('white')
        }
    })
    $('tr').parent().parent().attr('page',''+page);
}
    //表格初始化,发送ajax,obj--
// {url:'aaa',data,function(data){
//       tbody(select,data,[special,sort]);
// }
    var tableinit=function(obj){
        $.post(obj.url,obj.data,obj.success);
    }

    //分页
    var pages=function(pages){
        var tmps='<li><a  aria-label="Previous" page="pre"><span aria-hidden="true">&laquo;</span></a></li>';
        console.log(pages);
        for(var i=1;i<pages+1;i++){
            tmps+='<li><a page="'+i+'">'+i+'</a></li>';
        }
        tmps+='<li><a  aria-label="Next" page="next"><span aria-hidden="true">&raquo;</span></a></li>'
        $('.pagination').append(tmps);
        $('.pagination a').click(function(){
            var page=0;
            $('.pagination a').removeClass('xz');
            $(this).addClass('xz');
            if($(this).attr('page')=='pre'){
                page=Number($(this).parent().parent().parent().find('table').attr('page'))-1;
                if(page==0){
                    page=pages;
                }
            }else if($(this).attr('page')=='next'){
                page=Number($(this).parent().parent().parent().find('table').attr('page'))+1;
                if(page==pages+1){
                    page=1;
                }
            }else {
                page=$(this).attr('page');
            }
            $(this).parent().parent().parent().find('table').attr('page',page)
            console.log(page);
        })
    }
    //input,spantext--数组,type--数组
    var input=function(select,spantext,type,names){
        var tmps='';
        for(var i=0;i<spantext.length;i++){
            tmps +='<div class="inputs" ><span>'+spantext[i]+'</span><input type="'+type[i]+'" name="'+names[i]+'"></div>';
        }
        $(select).append(tmps);
        $(select+' input').each(function(){
            $(this).change(function(){

            })
        })
    }
//input后边带东西的
var inputl=function(select,spantext,type,lasttext,names){
    var tmps='';
    for(var i=0;i<spantext.length;i++){
        tmps +='<div class="inputs"><span>'+spantext[i]+'</span><input name="'+names[i]+'" type="'+type[i]+'"><span style="width: auto">'+lasttext[i]+'</span></div>';
    }
    $(select).append(tmps);
    $(select+' input').each(function(){
        $(this).change(function(){

        })
    })
}
    //搜索
    var sousuo=function(select,value){
        var tmps='<input type="text" value="'+value+'"><div class="ss glyphicon glyphicon-search"></div>';
        $(select).append(tmps);
        $('input').focus(function(){
            var val=$(this).val();
            if(val=='请输入要搜索的内容'){
                $(this).attr('val',val);
                $(this).val('');
            }
        })
        $('input').blur(function(){
            var val=$(this).attr('val');

            if(val==$(this).val()||$(this).val()==''){
                $(this).val(val);
            }
        })
        $(select+' .ss').click(function(){
            var val=$(select+' input').val();
            alert(val);
        })
    }


