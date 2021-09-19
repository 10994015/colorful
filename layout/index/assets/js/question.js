 $(function(){
    let qaIdx = 0;       
    
    $('.question').click(function(){
      qaIdx = Number(this.className.substr(17));
      $('.ans'+qaIdx).slideToggle(200);
      var qaClass = $('.question'+qaIdx+' i');
      qaClass.toggleClass("fa-angle-up");  
    })                    
})  
        

