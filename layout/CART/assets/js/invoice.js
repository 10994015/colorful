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


