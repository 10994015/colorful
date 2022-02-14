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


var pi1 = document.getElementById('pi1');
var pi2 = document.getElementById('pi2');
var pi3 = document.getElementById('pi3');
var pi2Text = document.getElementById('pi2Text');
var pi3Text = document.getElementById('pi3Text');
var invoiceInfoSelect = document.getElementById('invoiceInfoSelect');
var personalInvoice = document.getElementsByClassName('personalInvoice')[0];
var compileInvoices = document.getElementsByClassName('compileInvoices')[0];
var donationInvoice = document.getElementsByClassName('donationInvoice')[0];
pi1.addEventListener("click",checkInvoice);
pi2.addEventListener("click",checkInvoice);
pi3.addEventListener("click",checkInvoice);
personalInvoice.style.display="flex";
invoiceInfoSelect.addEventListener("change",()=>{
    clearDIV2Invoice();
    if(invoiceInfoSelect.value==="personalInvoice"){
        personalInvoice.style.display="flex";
    }
    if(invoiceInfoSelect.value==="compileInvoices"){
        compileInvoices.style.display="block";
    }
    if(invoiceInfoSelect.value==="donationInvoice"){
        donationInvoice.style.display="block";
    }
    
})

function checkInvoice(){
    clearDIVInvoice();
    if(pi2.checked){
        pi2Text.style.display="block";
    }
    if(pi3.checked){
        pi3Text.style.display="block";
    }
}
function clearDIVInvoice(){
    pi2Text.style.display="none";
    pi3Text.style.display="none";
}
function clearDIV2Invoice(){
    personalInvoice.style.display="none";
    compileInvoices.style.display="none";
    donationInvoice.style.display="none";
}


var ETerms = document.getElementById('E-Terms');
var termsModel = document.getElementsByClassName('termsModel')[0];
var closeTerms = document.getElementsByClassName('closeTerms')[0];
var gotoCheckout = document.getElementById('gotoCheckout');
var checkoutPage = document.getElementsByClassName('checkoutPage')[0];

ETerms.addEventListener("click",()=>{
    termsModel.style.display="block";
    setTimeout(()=>{
        termsModel.style.opacity=1;
    },100)
})

closeTerms.addEventListener("click",()=>{
    termsModel.style.opacity=0;
    termsModel.style.display="none";
    
});


$(function(){
    gotoCheckout.addEventListener("click",()=>{
        checkoutPage.style.display="block";
        setTimeout(()=>{
            var gotoCheckoutTop =$("#gotoCheckout").offset().top;
            $("html,body").scrollTop(gotoCheckoutTop);
        },10)
    })
    console.log(checkoutPageTop);
    
})
