// 大图轮播
var outer=document.getElementsByClassName("outer")[0];
var imgs=document.getElementsByClassName("imgs");
var lisBox=document.getElementById("box").getElementsByTagName("li");
// var op=document.getElementById("box").getElementsByTagName("p");
var x=0,timer=null,timer2=null;
function move(){
    clearInterval(timer);
    var start=outer.scrollLeft;
    var end=imgs[0].offsetWidth*x;
    var step=0;
    var maxStep=7;
    var everyStep=(end-start)/maxStep;
    timer=setInterval(function(){
        step++;
        if(step>=maxStep){
            step=0;
            clearInterval(timer);
        }
        outer.scrollLeft+=everyStep;
    },20);
}
function autoMove(){
    clearInterval(timer2);
    timer2=setInterval(function(){
        x++;
        if(x>=imgs.length){
            x=0;
        }
        //console.log(x);
        move();
        fn_style();
    },5000);
}
autoMove();
function fn_style(){
    for(var i=0;i<lisBox.length;i++){
        lisBox[i].className="";
    }
    lisBox[x].className="select";
}
// for(var m=0;m<lisBox.length;m++){
//     lisBox[m].onmouseover=function(){
//         for(var n=0;n<lisBox.length;n++){
//             if(lisBox[n]==this){
//                 x=n;
//                 clearInterval(timer2);
//                 move();
//                 fn_style();
//                 autoMove();
//             }
//         }
//     }
// }
// op[0].onclick=function(){
//     clearInterval(timer2);
//     if(x<=0){
//         x=imgs.length;
//     }
//     x--;
//     move();
//     fn_style();
//     autoMove();
// }
// op[1].onclick=function(){
//     clearInterval(timer2);
//     x++;
//     if(x>=imgs.length){
//         x=0;
//     }
//     move();
//     fn_style();
//     autoMove();
// }

//NEWS
var outerNews=document.getElementsByClassName("bdd")[0];
var bddlis=document.getElementsByClassName("bdd")[0].getElementsByTagName("li");
// var hdds=document.getElementsByClassName("hdd")[0].getElementsByClassName("hddImg");
var y=0,timers1=null,timers2=null;
function move_style(){
    clearInterval(timers1);
    var start2=outerNews.scrollTop;
    var end2=bddlis[0].offsetHeight*y;
    var step2=0;
    var maxStep2=5;
    var everyStep2=(end2-start2)/maxStep2;
    timers1=setInterval(function(){
        step2++;
        if(step2>=maxStep2){
            step2=0;
            clearInterval(timers1);
        }
        outerNews.scrollTop+=everyStep2;
    },100);
}
function autoMove_style(){
    clearInterval(timers2);
    timers2=setInterval(function(){
        y++;
        if(y>=bddlis.length){
            y=0;
        }
        console.log(y);
        move_style();
    },3000);
}
autoMove_style();
// hdds[0].onclick=function(){
//     clearInterval(timers2);
//     if(y<=0){
//         y=bddlis.length;
//     }
//     y--;
//     move_style();
//     autoMove_style();
// }
// hdds[1].onclick=function(){
//     clearInterval(timers2);
//     y++;
//     if(y>=bddlis.length){
//         y=0;
//     }
//     move_style();
//     autoMove_style();
// }