var add = document.querySelector("#insert");
var del = document.querySelector("#delete");
var inp = document.querySelector("input");
var ul= document.querySelector('ul');
var li;
add.addEventListener("click",function(){
    if(
        inp.value.trim()===''){}
    else{
        li=document.createElement("li");
       li.textContent = inp.value;
         ul.appendChild(li);
         inp.value='';
    }
})
del.addEventListener("click",function(){
         ul.removeChild(li);
})