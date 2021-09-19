const shop = document.querySelector('.shop-cart');
const shopcart = document.querySelector('.shopcart');
const shopCartMainOnline = document.querySelector('.shopcart-main-online');
const shopCartMainTextbook = document.querySelector('.shopcart-main-textbook');
const closeOnline = document.querySelector('.shopcart-main .shop-close-online');
const closeTextbook = document.querySelector('.shopcart-main .shop-close-textbook');
const shopcartback = document.querySelector('.shopcart .shopcart-back');
const shopUl = document.querySelector('.shopUl');
const shopUl_1 = document.querySelector('.shopUl-1');
const shopUl_2 = document.querySelector('.shopUl-2');

shop.addEventListener("click",()=>{
    if(shopUl.style.display==="block"){
      shopUl.style.display="none";
    }else{
      shopUl.style.display="block";
    }
  })

  shopUl_1.addEventListener("click",  () => {
     
      
        shopcart.style.display = "block";
        shopCartMainOnline.style.display="block";
        shopCartMainOnline.style.right = '0';
        shopCartMainTextbook.style.display="none";
        shopUl.style.display="none";

  });
  shopUl_2.addEventListener("click",  () => {
    
        shopcart.style.display = "block";
        shopCartMainTextbook.style.display="block";
        shopCartMainTextbook.style.right = '0';
        shopCartMainOnline.style.display="none";
        shopUl.style.display="none";

  });
  closeOnline.addEventListener("click",  () => {
        shopcart.style.display = "none";
        shopCartMainOnline.style.right = '-350px';
        
  });
  closeTextbook.addEventListener("click",  () => {
        shopcart.style.display = "none";
        shopCartMainTextbook.style.right = '-350px';
        
  });
  shopcartback.addEventListener("click",  () => {
        shopcart.style.display = "none";
        shopcartmain.style.right = '-350px';
  });