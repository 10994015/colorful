$(function(){
    let classIdx = 0;
   $('.summercamp-class-title').click(function(){
       console.log(this.className.substr(26));
       classIdx = Number(this.className.substr(26));
       console.log(classIdx);
       $('.summercamp-class-content'+classIdx).slideToggle(200);
       $('#summer-down'+classIdx).toggleClass('fa-angle-up');
       
   })
    
})