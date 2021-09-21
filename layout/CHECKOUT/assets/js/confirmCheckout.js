var ETerms = document.getElementById('E-Terms');
var termsModel = document.getElementsByClassName('termsModel')[0];
var closeTerms = document.getElementsByClassName('closeTerms')[0];

ETerms.addEventListener("click",()=>{
    termsModel.style.display="block";
    setTimeout(()=>{
        termsModel.style.opacity=1;
    },100)
})

closeTerms.addEventListener("click",()=>{
    termsModel.style.opacity=0;
    termsModel.style.display="none";
    
})