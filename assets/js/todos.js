// Check off specific todos by click

$('ul').on("click", "li", function() {
   $(this).toggleClass('completed');
});

$('ul').on("click", "span", function(e) {
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    }); 
    e.stopPropagation();
});

$("input[type='text']").keypress(function(e) {
    if (e.which === 13) {
        //new todo from input
        var todoText = $(this).val();
        $(this).val("");
        //create new li and add to ul
        $('ul').append("<li><span>X</span> " + todoText + "</li>");
    }
});

$("#plus").click(function() {
    $("input[type = 'text']").fadeToggle();
});

