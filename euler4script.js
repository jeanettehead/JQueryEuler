
(function($){
  $('body').append("<ul class='euler4'></ul>");
  var id = 0;
  var startingPoint = 999;
  var min = startingPoint*9/10;
    for(var i = startingPoint; i > min; i--) {
      for(var j = i; j > min; j--) {
        var val = i * j;
	val += "";
	var split = val.split("");
	var len = split.length;
	var middle = Math.floor(len/2) - 1;
	var pallendrome = true;
	if(len%2 == 0) 
	  var offset = 1;
	else
	  var offset = 2;
	for(var k = middle; k >= 0; k--)
        {	
	  if(!(split[k] === split[k + offset])) {
	    var v = parseInt(split[k]) - parseInt(split[k+offset]);
	    if(v > 0){
	      v *= Math.pow(10,(k));
	      var x = Math.floor(v/(j - 1));
	    }
	    else {
	      var x =  parseInt(split[k]) - parseInt(split[k+offset]) + 10;
	      x *= Math.pow(10,(k));
	      x = Math.floor(x/(j - 1));
	    }
	    if(x > 0)
	      j -= (x - 1);
	    pallendrome = false;
	    break;
	  }
	  offset += 2;
	}
	if(pallendrome) {
          $('.euler4').append("<li id='" + id + "' class='pallendrome'>" + val + "</li>");
	  i--;
	  break;
	}
	else {
          $('.euler4').append("<li id='" + id + "' class='product' style='display: none; '>" + val + "</li>");
	}
        id++;
      }
    }
    $('.euler4').hide();
    var max = 0;
    //$('.pallendrome', '.euler4').first().remove();
      $('.pallendrome', '.euler4').each( function() {
        var temp = parseInt($(this).text());
	if(temp > max)
	  max = temp;
	  });
	  
	$('body').append("<p id='max'>" + max + "</li>");    
})(jQuery);
