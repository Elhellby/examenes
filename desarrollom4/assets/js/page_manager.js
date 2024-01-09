;
(function() {

    "use strict";
    let body = $('#content_body');
    const time = 1000;
    var loadNewContent = async(page) => {
        body.slideUp(time);
        setTimeout(() => {
            $.ajax(page, {
                success: function(response) {
                    body.html(response);
                    body.slideDown(time);
                    $('[data-url]').click(function() {
                        let ref = $(this).data('url');
                        loadNewContent(ref);
                    });
                }
            });
        }, time);
    };
    var loadHome = async(page) => {
        $.ajax(page, {
            success: function(response) {
                body.html(response);
                body.slideDown(time);
                $('[data-url]').click(function() {
                    let ref = $(this).data('url');
                    loadNewContent(ref);
                });
            }
        });
    };
    loadHome('home.html');
})(jQuery);