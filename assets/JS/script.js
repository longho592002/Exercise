$(document).ready(function () {
    $('#control-slide--right').click(function (e) { 
        var slide_next =  $('slide-active').next();
        $('slide-active').addClass('remove-slide-left');
        slide_next.addClass('slide-active').addClass('go-to-right');
    });
});