var allimg=Array.from( document.querySelectorAll("img"));
var popup=document.querySelector(".popuprgba");
var close=document.getElementById("close");
var next=document.getElementById("next");
var prev=document.getElementById("prev");
var popupchild=document.querySelector(".popupchild");
var currentindex=0;
    
for(var i=0;i<allimg.length;i++){
allimg[i].addEventListener("click",showpopup)
}

function showpopup(eventinfo){
    currentindex=allimg.indexOf(eventinfo.target);

    var imgsrc=eventinfo.target.getAttribute("src");
    popupchild.style.backgroundImage="url("+imgsrc+")";
    popup.style.display="flex";
}

close.addEventListener("click",closepopup)

function closepopup(){
    popup.style.display="none";
}

next.addEventListener("click",nextimage)
function nextimage(){
    currentindex ++;
    if(currentindex==allimg.length){
        currentindex=0;
    }
    var imgsrc=allimg[currentindex].getAttribute("src");
    popupchild.style.backgroundImage="url("+imgsrc+")";

}

prev.addEventListener("click",previmage)
function previmage(){
    currentindex --;
    if(currentindex<0){
        currentindex=allimg.length-1;
    }
    var imgsrc=allimg[currentindex].getAttribute("src");
    popupchild.style.backgroundImage="url("+imgsrc+")";

}