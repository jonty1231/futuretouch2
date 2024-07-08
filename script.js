const nav=document.querySelector("nav")
let toggle=false
const  showNav=()=>{

    if(scrollY <= 40){
        nav.style.top="60px"
    }
    else{
        nav.style.top="0px"
    }
    toggle?nav_toggle():""
   
}

const nav_ul=document.querySelector(".nav_ul")


const nav_toggle=()=>{

 toggle? nav_ul.style.display="none":nav_ul.style.display="inline-block";
toggle=!toggle
}