const x=document.getElementById("me");
  function myfunction(){

      if(x.style.display=="none"){
        x.style.display="block";
      }else{
        x.style.display="none";
      }
    }

     function myhh(){
        if(window.innerWidth > 991){
            x.style.display="flex";
        } else if(window.innerWidth <991){
            x.style.display="none";
        }
     }

     window.addEventListener("resize",myhh);