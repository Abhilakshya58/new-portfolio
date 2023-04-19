const icon=document.querySelector(".icon");
    var x= document.getElementById("menu-list");

    icon.addEventListener('click',()=>{

        if(x.style.display=="block"){
            x.style.display="none";
        }
        else{
            x.style.display="block";
        }
    })
  