window.onload=function(){
    var groupProdBox = document.getElementsByClassName('groupProdBox');
    console.log(document.body.clientWidth);

    if(document.body.clientWidth>=1024){
            for(let g=0;g<groupProdBox.length;g++){
              groupProdBox[g].style.width="30%";
          }
          if(groupProdBox.length==2){
            for(let g=0;g<groupProdBox.length;g++){
              groupProdBox[g].style.width="40%";
            }
            console.log(groupProdBox[0].style.width);
            return;
          }
          if(groupProdBox.length==3){
            for(let g=0;g<groupProdBox.length;g++){
              groupProdBox[g].style.width="30%";
            }
            console.log(groupProdBox[0].style.width);
            return;
          }
          if(groupProdBox.length>=4){
            for(let g=0;g<groupProdBox.length;g++){
              groupProdBox[g].style.width="20%";
            }
            console.log(groupProdBox[0].style.width);
            return;
          }
          

          return;
    }

    if(document.body.clientWidth>=768){
            for(let g=0;g<groupProdBox.length;g++){
              groupProdBox[g].style.width="30%";
          }
          
          if(groupProdBox.length==2){
            for(let g=0;g<groupProdBox.length;g++){
              groupProdBox[g].style.width="40%";
            }
            console.log(groupProdBox[0].style.width);
            return;
          }
          if(groupProdBox.length==3){
            for(let g=0;g<groupProdBox.length;g++){
              groupProdBox[g].style.width="28%";
            }
            console.log(groupProdBox[0].style.width);
            return;
          }
          if(groupProdBox.length==4){
            for(let g=0;g<groupProdBox.length;g++){
              groupProdBox[g].style.width="40%";
            }
            console.log(groupProdBox[0].style.width);
            return;
          }
          if(groupProdBox.length>=5){
            for(let g=0;g<groupProdBox.length;g++){
              groupProdBox[g].style.width="28%";
            }
            console.log(groupProdBox[0].style.width);
            return;
          }
          return;
    }

    if(document.body.clientWidth<768){
            for(let g=0;g<groupProdBox.length;g++){
              groupProdBox[g].style.width="90%";
          }
          return;
    }
}

const btnA1 = document.querySelector('.productIllustrateBtnA1');
const btnA2 = document.querySelector('.productIllustrateBtnA2');
const btnA3 = document.querySelector('.productIllustrateBtnA3');

const content1 = document.querySelector('.productIllustrateContent1');
const content2 = document.querySelector('.productIllustrateContent2');
const content3 = document.querySelector('.productIllustrateContent3');

const bigImg = document.getElementById("productListBigImg");
const classImg = document.getElementsByClassName('productListSmallImg');
let classIdx = 0;




bigImg.src = classImg[0].src;
classImg[0].style.opacity = "1";
for(var i=0;i<classImg.length;i++){
	classImg[i].addEventListener("click",showImg);
}
function showImg(){
	bigImg.src = this.src;
	allHidn();
	this.style.opacity="1";
}
function allHidn(){
	for(var n=0;n<classImg.length;n++){
		classImg[n].style.opacity = ".5";
	}
}

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

var addpayBox = document.getElementsByClassName('addpayBox')[0];
var openAddpayBox = document.getElementsByClassName('openAddpayBox')[0];
var addpayBoxBack = document.getElementsByClassName('addpayBoxBack')[0];
var addpayBoxClose = document.getElementsByClassName('addpayBoxClose')[0];

var rvpItme = document.getElementsByClassName('rvpItem');
var rvpIdx = 0;

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


openAddpayBox.addEventListener("click",()=>{
    addpayBox.style.display = "block";
})
addpayBoxBack.addEventListener("click",()=>{
    addpayBox.style.display = "none";
})
addpayBoxClose.addEventListener("click",()=>{
    addpayBox.style.display = "none";
})