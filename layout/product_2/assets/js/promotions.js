var promotions = document.getElementsByClassName('openPromotionsBox');
var promotionClose = document.getElementsByClassName("promotionClose")[0];
var promotionsBoxBack = document.getElementsByClassName('promotionsBoxBack')[0];
var promotionsBox = document.getElementsByClassName('promotionsBox')[0];

for(var p=0;p<promotions.length;p++){
    promotions[p].addEventListener("click",()=>{
    if(promotionsBox.style.display==="block"){
        promotionsBox.style.display="none";
    }else{
        promotionsBox.style.display="block";
    }
})
}

promotionClose.addEventListener("click",()=>{
    promotionsBox.style.display="none";
})
promotionsBoxBack.addEventListener("click",()=>{
    promotionsBox.style.display="none";
})