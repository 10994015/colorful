const shop = document.querySelector('.shop-cart');
const shopUl = document.querySelector('.shopUl');


shop.addEventListener("click",()=>{
    if(shopUl.style.display==="block"){
      shopUl.style.display="none";
    }else{
      shopUl.style.display="block";
    }
  })

  