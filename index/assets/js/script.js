	    window.addEventListener("scroll", function(){
        const header = document.querySelector("header");
        header.classList.toggle('sticky', window.scrollY > 0);
        });

        const menuBtn = document.querySelector(".menu-btn");
        const navigation = document.querySelector(".navigation");
        const navigationItems = document.querySelectorAll(".navigation a")

        menuBtn.addEventListener("click",  () => {
          menuBtn.classList.toggle("active");
          navigation.classList.toggle("active");
        });

        navigationItems.forEach((navigationItem) => {
          navigationItem.addEventListener("click", () => {
            menuBtn.classList.remove("active");
            navigation.classList.remove("active");
          });
        });
        const scrollBtn = document.querySelector(".scrollToTop-btn");

        window.addEventListener("scroll", function(){
          scrollBtn.classList.toggle("active", window.scrollY > 500);
        });

        scrollBtn.addEventListener("click", () => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        });

       


        window.addEventListener("scroll", reveal);

        function reveal(){
          var reveals = document.querySelectorAll(".reveal");

          for(var i = 0; i < reveals.length; i++){
            var windowHeight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealPoint = 50;

            if(revealTop < windowHeight - revealPoint){
              reveals[i].classList.add("active");
            }
          }
        }

        
         
          const buy = document.querySelector('.store .prod-buy');
          const leftSidebarClose = document.querySelector('.left-sidebar-close');
          const leftSidebar = document.querySelector('.left-sidebar');
          const filter = document.querySelector('.filter');


          
         
          
          filter.addEventListener("click",  () => {
                leftSidebar.style.left = "0px";
                leftSidebar.style.opacity = "1";
          });
          leftSidebarClose.addEventListener("click",  () => {
                leftSidebar.style.left = "-300px";
                leftSidebar.style.opacity = "0";
          });
          if(leftSidebar.style.left=="0px"){
            leftSidebarClose.addEventListener("click",  () => {
                leftSidebar.style.left = "-300px";
                leftSidebar.style.opacity = "0";
          });
          }


          



       

       function prodlist(x){
          const prodclass = document.querySelector('.prod-class'+x);
          const prodclasslist = document.querySelector('.prod-class-list'+x);

          if(prodclasslist.style.display=="block"){
              prodclasslist.style.display = "none";
            }else{
              prodclasslist.style.display = "block";
            }
       }


       

         
         



