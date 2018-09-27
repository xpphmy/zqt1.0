//<!-- Initialize Swiper -->
    var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

///* News */
var outerNews=document.getElementsByClassName("bdd")[0];
var bddlis=document.getElementsByClassName("bdd")[0].getElementsByTagName("li");
//var hdds=document.getElementsByClassName("hdd")[0].getElementsByClassName("hddImg");
var y=0,timers1=null,timers2=null;
function move_style(){
    clearInterval(timers1);
    var start2=outerNews.scrollTop;
    var end2=bddlis[0].offsetHeight*y;
    var step2=0;
    var maxStep2=6;
    var everyStep2=(end2-start2)/maxStep2;
    timers1=setInterval(function(){
        step2++;
        if(step2>=maxStep2){
            step2=0;
            clearInterval(timers1);
        }
        outerNews.scrollTop+=everyStep2;
    },50);
}
function autoMove_style(){
    clearInterval(timers2);
    timers2=setInterval(function(){
        y++;
        if(y>=bddlis.length){
            y=0;
        }
        //console.log(y);
        move_style();
    },10000);
}
autoMove_style();