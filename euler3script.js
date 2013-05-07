(function($){
  $('body').append("<ul class='euler3'></ul>");
  //$('.euler3').append("<li id='" + 2 + "' class='prime'>" + 2 + "</li>");
  var factorize = 600851475143;
  var squareRoot = 2;
  var greaterSquare = 4;
  var mult = 1;
  for(var i = 3; i < factorize; i+=2) {
     if(mult === factorize){
          break;
		}
    if(i > squareRoot){
	  squareRoot ++;
      greaterSquare = squareRoot * squareRoot;
	}
  	var isPrime = true;
    $('.prime','.euler3').each(function() {
	  var val = parseInt($(this).attr('id'));
      if( val < greaterSquare && i%val===0){
	    isPrime = false;
	    return;
	  }
	});
	if(isPrime)
	{
	  $('.euler3').append("<li id='" + i + "' class='prime'>" + i + "</li>");
	  var n = 0;
	  if(factorize%i === 0) {
	    $('#' + i,'.euler3').addClass('factor'); 
	    var currentVal = factorize;
	    while(currentVal%i === 0) {
	    currentVal/=i;
		n++;
      }
	   mult *= (i*n);
	  }
	  else
	    $('#' + i,'.euler3').hide();
	}
  }
  
       var max = parseInt($('.factor', '.euler3').last().attr('id'))
        $('.euler3').hide();
	$('body').append("<p id='big_factor'>" + max + "</li>");    
})(jQuery);

