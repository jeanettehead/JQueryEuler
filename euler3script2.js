
(

function($){
  $('body').append("<ul class='squares'></ul>");
  $('body').append("<ul class='euler3'></ul>");
  $('.euler3').append("<li id='" + 2 + "' class='prime'>" + 2 + "</li>");
  //var primes = new Array();
  //primes.push(2);
  $('.squares').hide();
  for(var i = 2; i < 30; i ++)
  {
    $('.squares').append("<li id='" + i + "' class='square'>" + i * i + "</li>");
  }
  var squareRoot = 2;
  var greaterSquare = 4;
  for(var i = 3; i < 900; i+=2) {
    if(i > greaterSquare){
	  squareRoot ++;
      greaterSquare = parseInt($('#' + squareRoot, '.squares').text());
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
	  $('.euler3').append("<li id='" + i + "' class='prime'>" + i + "</li>");
  }

	
	var factorize = 600851475143;
	//var factorize = 20;
	$('.prime','.euler3').each(function() {
	  var val = parseInt($(this).attr('id'));
      if(factorize%val===0){
	    $(this).addClass('factor');
        $('.euler3').append("<li id='" + factorize/val + "' class='factor'>" + factorize/val + "</li>");
	  }
	  else
	    $(this).hide();
    });
	
	
})(jQuery);

