(function($) {
    $.fn.outAndInFade = function(customOptions) {
        var options = $.extend({}, $.fn.outAndInFade.defaultOptions, customOptions || {});

        return this.each(function() {
            $(this).fadeOut().fadeIn('normal', function() { // Callback for fadeIn()
                // Call complete() function, pass it "this"
                if ($.isFunction(options.complete)){
                    options.complete.apply(this);
                }
            });
        });
    };

    $.fn.outAndInFade.defaultOptions = {
        complete: null // No default function
    };
})(jQuery);

jQuery('div').outAndInFade({
    // Change background-color of the element being animated on complete.
    // Note: "this" will refer to the DOM element in the wrapper set.
    complete: function(){
        $(this).css('background', '#ff9');
    }
});