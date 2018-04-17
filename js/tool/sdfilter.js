//页面加载
function get3dfilterAll(page_in, page_out, json, ele_mask){   
    
    $(".footer-wrapper").hide(); 
    $("html").attr("style", "font-size:100%");//单个属性的设置    
   $(".bd").find("a").unbind("click").click(function(){
        if($(this).attr("class") == "color_red"){
             $(this).removeClass()   
        } else {
             $(this).attr("class", "color_red")  
        }
    });
    var Request = GetParams(page_in.getAttribute("trans-params"));
    if (Request['flag'] == "home") {
       deleteCookie('condition'); 
    }
     //if (Request['type'] == "pl3") {
//       $("#p3_title").text("排列三过滤工具"); 
//    }else{
//       $("#p3_title").text("福彩3D过滤工具");
//    }
  //  deleteCookie('condition');  
   var headerhide = getCookie("TOOL_HEADER_HIDE");   
    if(headerhide == "hide"){
		//旧app的对应
       setCookie("TOOL_HEADER_HIDE","hide");    
       $(".header").css("display","none");  
       $(".content").css("top",".2em"); 
       $("#3d_fuzhi").css("display","block"); 
       $("#app_xiazai_3d").css("display","none");	   
    }else{
		var appflg =getQueryString("appflg");		
		if(appflg =="" || appflg ==null)
		{
		   var fromCookie = getCookie("TOOL_APP_FLG");
		   if(fromCookie =="1" || fromCookie =="2")
		   {
			  $("#3d_fuzhi").css("display","block");
			  $("#app_xiazai_3d").css("display","none"); 		  
		   } else
		   {
			  $("#3d_fuzhi").css("display","none");
			  $("#app_xiazai_3d").css("display","block"); 		  
		   }
		}else
		{
		     $("#3d_fuzhi").css("display","block");
			 $("#app_xiazai_3d").css("display","none"); 
		}		
         
    }
	
}


//直选组选切换
function settab(obj,num,count){
    for(var i=1;i<=count;i++){
       $("#"+ obj + '_' + i).removeClass();
       $("#"+ obj + '_con_' + i).hide();
       $("#"+ obj + '_content_' + i).hide();      
    }
     $("#"+ obj + '_' + num).attr("class", "on"); 
     $("#"+ obj + '_con_' + num).show(); 
     $("#"+ obj + '_content_' + num).show(); 
     $("#3dfilter_dm_zdx").val(num);  
     $("#glConditions_3d").empty();
     deleteCookie('condition');
      $("#fc3d_result").html('');          
}


//全选
function selectAll(obj)   
{                        
    $("#" + obj).find("li").each(function(){
         $(this).find("a").each(function () {
            if($(this).text() != "组三" && $(this).text() != "组六"){
                $(this).attr("class", "color_red"); 
            }
         });
    });
}
//反选
function selectRev(obj)
{    
     $("#" + obj).find("li").each(function(){ 
        $(this).find("a").each(function () {
            if($(this).text() != "组三" && $(this).text() != "组六"){   
                if($(this).attr("class") == "color_red"){
                   $(this).removeClass(); 
                }else{
                    $(this).attr("class", "color_red"); 
                }
            }
        });
    });
}
//清除
function removeAll(obj)
{
     $("#" + obj).find("li").each(function(){
         $(this).find("a").each(function () {
            if($(this).text() != "组三" && $(this).text() != "组六"){   
                $(this).removeClass(); 
            }
         });
    });
}

function addCookie(name,value,expiresHours){
        var cookieString=name+"="+escape(value);
        //判断是否设置过期时间
        if(expiresHours>0){
        var date=new Date();
        date.setTime(date.getTime()+expiresHours*3600*1000);
        cookieString=cookieString+";expires="+date.toGMTString();
        }
        document.cookie=cookieString;
} 
    
function getCookie(name){
        var strCookie=document.cookie;
        var arrCookie=strCookie.split("; ");
        for(var i=0;i<arrCookie.length;i++){
        var arr=arrCookie[i].split("=");
        if(arr[0]==name)return arr[1];
        }
        return "";
} 
    
function deleteCookie(name){
        var date=new Date();
        date.setTime(date.getTime()-10000);
        document.cookie=name+"=v;expires="+date.toGMTString();   
        
         $("#glConditions_3d").empty();      
         $("#fc3d_result").html('');
         $("#sd_zhu").text(0); 
         $("#sd_money").text(0); 
        $(".content_filter").each(function(){
             $(this).find("a").each(function(){
                 $(this).removeClass(); 
             });
        });  
        
} 

/**
 * 保存指标
 * strConditions ：条件内容
 */                    
function savecookie(strConditions,pageid){
   $("li").remove("#gl_3d_"+pageid);
   if(strConditions!='') {  
    $('#glConditions_3d').append('<li id="gl_3d_'+ pageid+'">' + strConditions + '</li>'); 
      }

    var terms = "";
    $("body").find("#glConditions_3d li").each(function (){
        terms = terms + $(this).text() + "#";
        
    });
    terms = clickZhYw(terms);
    
    addCookie('condition', terms, 0);
    
    
}


/*执行过滤*/
function getDatasoure(num){     
    var url = "https://tools.cjcp.com.cn/ssc/apiPage.action";
    var terms = getCookie("condition");
    var playname = ""; //sxzx
    var reds = ""; 
    var dz =  $("#3dfilter_dm_zdx").val();//1为直选 2为组选
    if(dz == 1){
        playname = 'sxdx';
        var dyw="";
        var derw="";
        var dsw="";
        $("#3dfilter_con_1").find("li").eq(0).find("a[class=color_red]").each(function(){
            if(dyw == ''){ 
                   dyw = $.trim($(this).text());
            }else{
                   dyw = dyw+','+$.trim($(this).text());
            }
        });
        $("#3dfilter_con_1").find("li").eq(1).find("a[class=color_red]").each(function(){
            if(derw == ''){ 
                   derw = $.trim($(this).text());
            }else{
                   derw = derw+','+$.trim($(this).text());
            }
        });
        $("#3dfilter_con_1").find("li").eq(2).find("a[class=color_red]").each(function(){
            if(dsw == ''){ 
                   dsw = $.trim($(this).text());
            }else{
                   dsw = dsw+','+$.trim($(this).text());
            }
        });
        if(dyw!="" && derw !=""&& dsw !=""){
           reds= dyw + "!" + derw+ "!" + dsw;
        }
    }
   else if(dz == 2){  
        playname = 'sxzx';
        var str = '';
        //组选的判断是否选择了组三组六
        $("#3dfilter_con_2").find("li").eq(1).find("a[class=color_red]").each(function(){
              if(str == ''){ 
                   str = $.trim($(this).attr('name'));
               }else{
                   str = str+','+$.trim($(this).attr('name'));
               }
        });
        if(str !='')
        {
          if(terms == ''){ 
               terms = "sxzx_0_dzh_dzh_0_0_0_" + str ;
          }else{
               terms = terms + escape( "#" + "sxzx_0_dzh_dzh_0_0_0_" + str ); 
          } 
       } 
        $("#3dfilter_con_2").find("li").eq(0).find("a[class=color_red]").each(function(){
            if(reds == ''){ 
                   reds = $.trim($(this).text());
            }else{
                   reds = reds+','+$.trim($(this).text());
            }
        });
         
    }
   if(reds == ""){
       alert("请选择号码");
   } else{
        url = url + "?terms=" + terms + "&playname=" + playname + "&reds=" + reds;       
        getAjaxJsonpData(url, true, function (jsonResponse) {    
           response = jsonResponse;  
           if(response.result.length>0){ 
            /*在结果中机选20注*/  
              if(num=='20' && response.result.length>20){
                 var rndarr = RndNum(20,response.result.length);        
                 for(var r=0;r<20;r++){
                     var rnd = rndarr[r];  
                     response.result[r] = response.result[rnd];
                 } 
                 response.result.length = 20;
               }                                                                    
              var html='';
              for(var i =1 ; i<=response.result.length;i++){     
              response.result[i-1]= response.result[i-1].join('');   
              //response.result[i-1] = response.result[i-1].replace(",","");       
                  if(html == ''){ 
                       html = response.result[i-1];
                  }else{
                      /* if((i-1)%5 == 0 && i!=1){     
                          html = html + '<br>' + response.result[i-1]; 
                       }else{
                          html = html+'|'+response.result[i-1];
                       } */
                       if((i-1)%5 == 0 && i!=1){     
                          html = html + ' ' + response.result[i-1]; 
                       }else{
                          html = html+','+response.result[i-1];
                       } 
                  }
              }     
               if(html.length<4)
               {
                  $("#fc3d_result").html(html+''); 
               }else{
                  $("#fc3d_result").html(html);  
               } 
               //$("#fc3d_result").html(html+'');  
               $("#sd_zhu").text(response.result.length); 
               $("#sd_money").text(response.result.length*2); 
           } else{
               $("#fc3d_result").text('');  
               $("#sd_zhu").text(0); 
               $("#sd_money").text(0); 
              alert("您选择的过滤条件没有符合的号码，请重新选择");
           } 
        }); 
        //$("#fc3d_result").focus();   
   }
}






