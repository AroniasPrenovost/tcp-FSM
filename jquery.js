(function($){
    $('#myform').submit(function(e){
        var val = $(this).find('#in').val();

       $('p.list').append('[' + val + ']' + ' =>  ' + '"' + 'final state here' + '".' + '<br>'); 
        e.preventDefault(); 
    });
})(jQuery);
