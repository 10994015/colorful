var tablist = ["autotab","autotab2"];

    var functionkey = [8,9,16,17,18,20,33,34,35,36,37,38,39,40,45,46,93,144];
    tablist.forEach(function(element) {
      $("."+element).on( "keydown", function( event ) {
            //next
            if ($(this).attr("maxLength") == $(this).val().length && (functionkey.indexOf(event.keyCode)==-1)) 
                $(this).nextAll("."+element).first().focus();
            //prev
            if($(this).val().length==0 && event.keyCode==8) {
              $(this).prevAll("."+element).first().focus();
            }
      });
    });