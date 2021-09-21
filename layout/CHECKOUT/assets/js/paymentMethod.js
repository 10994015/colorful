var paymentMethod = document.getElementById('paymentMethod');
var creditCard = document.getElementsByClassName('creditCard')[0];
var networkATM = document.getElementsByClassName('networkATM')[0];
var cashOnDelivery = document.getElementsByClassName('cashOnDelivery')[0];

creditCard.style.display="block";
paymentMethod.addEventListener("change",()=>{
    clearPayMethod();
   if(paymentMethod.value==="creditCard"){
    
    creditCard.style.display="block";
    }
    if(paymentMethod.value==="networkATM"){
        networkATM.style.display="block";
    }
    if(paymentMethod.value==="cashOnDelivery"){
        cashOnDelivery.style.display="flex";
    }

})
function clearPayMethod(){
    creditCard.style.display="none";
    networkATM.style.display="none";
    cashOnDelivery.style.display="none";

}
    
