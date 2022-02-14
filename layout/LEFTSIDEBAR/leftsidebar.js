const buy = document.querySelector('.store .prod-buy');
const leftSidebarClose = document.querySelector('.left-sidebar-close');
const leftSidebar = document.querySelector('.left-sidebar'); 
const filter = document.getElementsByClassName('filter')[0];

const prodTwo = document.getElementsByClassName('prod-class-list-two');
const proThree = document.querySelectorAll('.prod-class-list-three');
console.log(proThree[0]);
for(var p=0;p<proThree.length;p++){
    prodTwo[p].addEventListener("click",function(){
        proThree[Number(this.className.substr(23))-1].classList.toggle('open');
        proThree[Number(this.className.substr(23))-1].classList.toggle('close');
    })
}

filter.addEventListener("click",()=>{
    if(leftSidebar.style.display==="block"){
        leftSidebar.style.left = "-300px";
        leftSidebar.style.opacity = "0";
        setTimeout(()=>{
            leftSidebar.style.display="none";
        },100)
    }else{
        leftSidebar.style.display="block";
        setTimeout(()=>{
            leftSidebar.style.left="0";
            leftSidebar.style.opacity=1;
        },100)
    }
    
    
})

leftSidebarClose.addEventListener("click",  () => {
    leftSidebar.style.left = "-300px";
    leftSidebar.style.opacity = "0";
    setTimeout(()=>{
        leftSidebar.style.display="none";
    },100)
});
if(leftSidebar.style.left=="0px"){
leftSidebarClose.addEventListener("click",  () => {
    leftSidebar.style.left = "-300px";
    leftSidebar.style.opacity = "0";
});
}
function prodlist(x){
    const prodclass = document.querySelector('.prod-class'+x);
    const prodclasslist = document.querySelector('.prod-class-list'+x);

    if(prodclasslist.style.display=="block"){
        prodclasslist.style.display = "none";
      }else{
        prodclasslist.style.display = "block";
      }
 }
