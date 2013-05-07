(function($){
  $('body').append("<ul class='euler1'></ul>");
  for(var i=0; i<1000; i+=3) {
    $('.euler1').append("<li id='" + i + "'>" + i + "</li>");
  }
  for(var i=0; i<1000; i+=5) {
    if($('#' + i, '.euler1').length === 0)
      $('.euler1').append("<li id='" + i + "'>"+i+"</li>");
  }
  var sum = 0;
  $('li','.euler1').each(function() {
      sum += parseInt($(this).attr('id'));
    });
  $('.euler1').hide();
  $('body').append("<p id='3_5_sum'>" + sum + "</li>");
})(jQuery);
