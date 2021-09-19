const myAccount = document.querySelector('.myAccount');
const myAccountUl = document.querySelector('.myAccountUl');

         
myAccount.addEventListener("click",myShow);

          function myShow(){
            if (myAccountUl.style.display==="block") {
              myAccountUl.style.display="none";
              }else{
                myAccountUl.style.display="block";
                
              }
          }
     