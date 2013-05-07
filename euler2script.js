
(function($){
  $('body').append("<ul class='euler2'></ul>");
  var a = 1;
  var b = 1;
  var c = 0;
  while(c < 4000000) {
    c = a + b;
	a = b;
	b = c;
	if(c%2 === 0)
      $('.euler2').append("<li id='" + c + "'>" + c + "</li>");
  }
  
  var sum = 0;
  $('li','.euler2').each(function() {
      sum += parseInt($(this).attr('id'));
    });
  $('.euler2').hide();
  $('body').append("<p id='fib_sum'>" + sum + "</li>");    
})(jQuery);
