var aa=document.getElementById("slides");
var box=document.getElementsByClassName("box")[0];
//var footer=document.getElementsByClassName("footer")[0];
if(window.screen.height>830){
 aa.style.height="100%";
 box.style.height="100%";
 //box.style.marginTop="5.5%";
//  footer.style.position="absolute";
//  footer.style.top="100%";
//  footer.style.height="15%";
}else{
 aa.style.height="830px";
 box.style.height="700px";
 box.style.marginTop="0px";
//  footer.style.position="static";
//  footer.style.height="130px";
}