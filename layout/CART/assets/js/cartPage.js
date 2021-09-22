var cardel = document.getElementsByClassName('cardel');
    var closeConvert = document.getElementsByClassName('closeConvert')[0];
    var enterCode = document.getElementsByClassName('enterCode')[0];
    var convert = document.getElementsByClassName('convert')[0];
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