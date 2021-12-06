var cardel = document.getElementsByClassName('cardel');
var closeConvert = document.getElementsByClassName('closeConvert')[0];
var enterCode = document.getElementsByClassName('enterCode')[0];
var convert = document.getElementsByClassName('convert')[0];
var delproduct = document.getElementsByClassName('delproduct');
var addPurchaseModel = document.getElementsByClassName('addPurchaseModel')[0];
var addPurchaseModelBack = document.getElementsByClassName('addPurchaseModelBack')[0];
var addpurClose = document.getElementsByClassName('addpurClose')[0];
var question1 = document.querySelector('.AddPurchase .fa-question-circle');

var giveawayModel = document.getElementsByClassName('giveawayModel')[0];
var giveawayModelBack = document.getElementsByClassName('giveawayModelBack')[0];
var giveawayClose = document.getElementsByClassName('giveawayClose')[0];
var question2 = document.querySelector('.giveawayArea .fa-question-circle');

var confirmCheckoutInput = document.getElementById("confirmCheckoutInput");
var checkBtn = document.getElementById("checkBtn");
confirmCheckoutInput.addEventListener("change",()=>{
  if(confirmCheckoutInput.checked){
    checkBtn.disabled=false;
    checkBtn.style.background="#1484c4";
  }else{
    checkBtn.disabled=true;
    checkBtn.style.background="#ccc";
  }
})

question1.addEventListener("click",()=>{
  addPurchaseModel.style.display="block";
})
addpurClose.addEventListener("click",()=>{
  addPurchaseModel.style.display="none";
})
addPurchaseModelBack.addEventListener("click",()=>{
  addPurchaseModel.style.display="none";
})


question2.addEventListener("click",()=>{
  giveawayModel.style.display="block";
})
giveawayClose.addEventListener("click",()=>{
  giveawayModel.style.display="none";
})
giveawayModelBack.addEventListener("click",()=>{
  giveawayModel.style.display="none";
})


    for(var i=0;i<cardel.length;i++){
    
      cardel[i].addEventListener("click",delCart);
    }

    function delCart(){
      confirm("確定要刪除嗎???")
    }
    convert.style.display="none";

    enterCode.addEventListener("click",()=>{
      convert.style.display="block";
      setTimeout(function(){
        convert.style.opacity=1;
      },100)
    })
    closeConvert.addEventListener("click",()=>{
      convert.style.display="none";
      convert.style.opacity=0;
      
    });
   
for(var x=0;x<delproduct.length;x++){
  delproduct[x].addEventListener("click",delproductConfirm);
}
function delproductConfirm(){
  confirm("確定要刪除嗎???");
}