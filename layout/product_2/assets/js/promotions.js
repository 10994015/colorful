var promotions = document.getElementsByClassName('openPromotionsBox');
var promotionClose = document.getElementsByClassName("promotionClose")[0];
var promotionsBoxBack = document.getElementsByClassName('promotionsBoxBack')[0];
var promotionsBox = document.getElementsByClassName('promotionsBox')[0];


var deliveryBox = document.getElementsByClassName('deliveryBox')[0];
var openDeliveryBox = document.getElementsByClassName('openDeliveryBox')[0];
var deliveryClose = document.getElementsByClassName('deliveryClose')[0];
var deliveryBoxBack = document.getElementsByClassName('deliveryBoxBack')[0];

var addpayBox = document.getElementsByClassName('addpayBox')[0];
var openAddpayBox = document.getElementsByClassName('openAddpayBox')[0];
var addpayBoxBack = document.getElementsByClassName('addpayBoxBack')[0];
var addpayBoxClose = document.getElementsByClassName('addpayBoxClose')[0];

// var rvpLeft = document.getElementsByClassName("rvpLeft")[0];
// var rvpRight = document.getElementsByClassName("rvpRight")[0];
// var rvpItme = document.getElementsByClassName('rvpItem');
// var rvpIdx = 0;
// console.log(rvpItme.length);

// rvpRight.addEventListener("click",function(){
//     rvpIdx++;
    
//     if(rvpIdx>rvpItme.length-4){
//         rvpIdx = 0;
//     }
//     for(let r=0;r<rvpItme.length;r++){
//         rvpItme[r].style.transform = 'translateX(-'+rvpIdx+'00%)';
//     }
// })
// rvpLeft.addEventListener("click",function(){
//     rvpIdx--;
    
//     if(rvpIdx<0){
//         rvpIdx =rvpItme.length-5;
//     }
//     for(let r=0;r<rvpItme.length;r++){
//         rvpItme[r].style.transform = 'translateX(+'+rvpIdx+'00%)';
//     }
// })

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



openDeliveryBox.addEventListener("click",()=>{
    deliveryBox.style.display = "block";
})
deliveryClose.addEventListener("click",()=>{
    deliveryBox.style.display = "none";
})
deliveryBoxBack.addEventListener("click",()=>{
    deliveryBox.style.display = "none";
})


openAddpayBox.addEventListener("click",()=>{
    addpayBox.style.display = "block";
})
addpayBoxBack.addEventListener("click",()=>{
    addpayBox.style.display = "none";
})
addpayBoxClose.addEventListener("click",()=>{
    addpayBox.style.display = "none";
})