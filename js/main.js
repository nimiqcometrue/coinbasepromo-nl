$( document ).ready(function() {
    setTimeout(function() {
        $('body').attr('class', 'is-playing');
        setTimeout(function() {
            $('body').attr('class', 'is-ready');
        }, 3000);
    }, 100);
});
