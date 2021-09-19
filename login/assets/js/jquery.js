 $(document).ready(function(){
          var t =200;
            $('.question1').click(function(){
              $('.ans1').slideToggle(t);
            })
            $('.question2').click(function(){
              $('.ans2').slideToggle(t);
            })
            $('.question3').click(function(){
              $('.ans3').slideToggle(t);
            })
            $('.question4').click(function(){
              $('.ans4').slideToggle(t);
            })
            $('.question5').click(function(){
              $('.ans5').slideToggle(t);
            })
            

           
        })  
        
        function icontoggle(i){
          const icon = document.querySelector('.question'+i+' .fas');
          const ans = document.querySelector('.ans'+i);
          if(ans.style.display=='block'){
            icon.classList.remove('fa-angle-up');
          }else{
            icon.classList.add('fa-angle-up');
          }
         }