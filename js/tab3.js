var lis=document.getElementsByClassName("content")[0].getElementsByTagName("aside")[0].getElementsByTagName("li");
    var sectionRights=document.getElementsByClassName("sectionRight");
    for(var i=0;i<lis.length;i++){//遍历
        lis[i].onclick=function(){
            for(var j=0;j<lis.length;j++){
                if(lis[j]==this){//匹配
                    lis[j].className="show";
                    sectionRights[j].style.display="block";
                }else{
                    lis[j].className="";
                    sectionRights[j].style.display="none";
                }
            }
        }
    }