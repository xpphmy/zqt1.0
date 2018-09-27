function div_alert1(){
    var obj={
       type:"showSweetAlert",
       title:"河南政企通综合服务平台",
       content:"<div>请输入用户名",
       area:["300px","auto"],
       btn:["确定",0]
       };
       method.msg_layer(obj);
       return false;
};
function div_alert2(){
    var obj={
       type:"showSweetAlert",
       title:"河南政企通综合服务平台",
       content:"<div>请输入密码",
       area:["330px","auto"],
       btn:["确定",0]
       };
       method.msg_layer(obj);
       return false;
};
function div_alert3(){
    var obj={
       type:"showSweetAlert",
       title:"河南政企通综合服务平台",
       content:"<div>登陆成功",
       area:["330px","auto"],
       btn:["确定",0]
       };
       method.msg_layer(obj);
       return false;
};
function div_alert4(){
    var obj={
       type:"showSweetAlert",
       title:"河南政企通综合服务平台",
       content:"<div>密码输入错误",
       area:["330px","auto"],
       btn:["确定",0]
       };
       method.msg_layer(obj);
       return false;
};
    function div_alert5(){
    var obj={
       type:"showSweetAlert",
       title:"河南政企通综合服务平台",
       content:"<div>用户名错误",
       area:["330px","auto"],
       btn:["确定",0]
       };
       method.msg_layer(obj);
       return false;
};
function div_alert6(){
    var obj={
       type:"showSweetAlert",
       title:"河南政企通综合服务平台",
       content:"<div>请再次输入密码",
       area:["330px","auto"],
       btn:["确定",0]
       };
       method.msg_layer(obj);
       return false;
};
function div_alert7(){
    var obj={
       type:"showSweetAlert",
       title:"河南政企通综合服务平台",
       content:"<div>请输入验证码",
       area:["330px","auto"],
       btn:["确定",0]
       };
       method.msg_layer(obj);
       return false;
};


var val=document.getElementsByClassName("val")[0];
function clickButton(obj){
    var obj = $(obj);
    obj.attr("disabled","disabled");/*按钮倒计时*/
    var time = 30;
    var set=setInterval(function(){
    obj.val(--time+"(s)");
    }, 1000);/*等待时间*/
    setTimeout(function(){
    obj.attr("disabled",false).val("重新获取验证码");/*倒计时*/
    clearInterval(set);
    }, 30000);
}



