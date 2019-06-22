function start() {
    $('.btn-up').css('display', 'none');
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            $('#return-to-top').css('display', 'block');
        } else {
            $('#return-to-top').css('display', 'none');
        }
    }


}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}