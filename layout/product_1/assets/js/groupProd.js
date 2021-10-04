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