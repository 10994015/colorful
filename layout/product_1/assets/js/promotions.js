var promotions = document.getElementsByClassName('openPromotionsBox');
var promotionClose = document.getElementsByClassName("promotionClose")[0];
var promotionsBoxBack = document.getElementsByClassName('promotionsBoxBack')[0];
var promotionsBox = document.getElementsByClassName('promotionsBox')[0];

var openSizeBox = document.getElementsByClassName('openSizeBox')[0];
var sizeBox = document.getElementsByClassName('sizeBox')[0];
var sizeBoxClose = document.getElementsByClassName('sizeClose')[0];
var sizeBoxBack = document.getElementsByClassName('sizeBoxBack')[0];

var deliveryBox = document.getElementsByClassName('deliveryBox')[0];
var openDeliveryBox = document.getElementsByClassName('openDeliveryBox')[0];
var deliveryClose = document.getElementsByClassName('deliveryClose')[0];
var deliveryBoxBack = document.getElementsByClassName('deliveryBoxBack')[0];


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
});


openSizeBox.addEventListener("click",()=>{
    sizeBox.style.display = "block";
    console.log(123);
    
})
sizeBoxClose.addEventListener("click",()=>{
    sizeBox.style.display = "none";
})
sizeBoxBack.addEventListener("click",()=>{
    sizeBox.style.display = "none";
});

openDeliveryBox.addEventListener("click",()=>{
    deliveryBox.style.display = "block";
})
deliveryClose.addEventListener("click",()=>{
    deliveryBox.style.display = "none";
})
deliveryBoxBack.addEventListener("click",()=>{
    deliveryBox.style.display = "none";
})