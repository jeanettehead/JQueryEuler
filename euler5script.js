$(window).bind("load",(function($){
  $('body').append("<ul class='euler5'></ul>");
  for(var z = 2; z <= 20; z++){
  var factorize = z;
  var squareRoot = 2;
  var greaterSquare = 4;
  var mult = 1;
  var product = 1;
 // if(factorize % 2 === 0)
  //  mult = 2;
  //$('.euler5').append("<li id='" + 2 + "' class='prime'>" + 2 + "</li>");
  for(var i = 2; i <= factorize; i+=2) {
     if(mult === factorize){
          break;
		}
    if(i > squareRoot){
	  squareRoot ++;
      greaterSquare = squareRoot * squareRoot;
	}
      var isPrime = true;
      $('.prime','.euler5').each(function() {
	  var val = parseInt($(this).attr('id'));
      if( val < greaterSquare && val < i && i%val===0){
	    isPrime = false;
	    return;
	  }
      });
      if(isPrime) {
        
	  var n = 0;
          if(factorize%i === 0) {
	    $('#' + i,'.euler5').addClass('factor'); 
	    var currentVal = factorize;
	    while(currentVal%i === 0) {
	    currentVal/=i;
	    n++;
         }
	 if($('#' + i,'.euler5').length > 0) {
	   if(parseInt($('#' + i,'.euler5').text()) < n) {
	     $('#' + i,'.euler5').text(n);
	   }
	 }
	 else {
	   $('.euler5').append("<li id='" + i + "' class='prime'>" + n + "</li>");
	 }
	 mult *= (i*n);
        }
	  //else
	    //$('#' + i,'.euler5').hide();
    }
      if(i === 2)
        i = 1;
    }
    }
   // $('.euler5').hide();
    $('.prime','.euler5').each(function() {
	  var val = parseInt($(this).attr('id'));
	  var n = parseInt($(this).text());
	  product *= Math.pow(val, n);
      });
    $('body').append("<p id='product'>" + product + "</li>");
  
})(jQuery));

