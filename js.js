var img1 = document.querySelector("#one");
var img2 = document.querySelector("#two");
document.querySelector("button").addEventListener("click",function(){
    var src= img1.src;
    var src1=img2.src;
    img1.src= src1;
    img2.src=src;
})