$(document).ready(function() {

    // Parallax scrolling and motion blur
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        // Parallax Scrolling
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);

        // Directional blur and height streach on main section
        $('.section-1').css({
            // "filter": "blur(5px)"
            "transform": "scaleY(1.8)",,
            "filter": "blur(1px)",
            "transition-duration": "0.6s"
        });

        // Reset the directional blur and height streach
        setTimeout(function() {
            $('.section-1').css({
                "transform": "",
                "filter": ""
            });
        }, 400);
    });

    //Activate animation when the content scrolls into view
    $('.coffee-cup-image').waypoint(function() {
        $('.coffee-cup-image').css({
        animation: "bounce 1s",
        "animation-duration": "ease"
        });
    }, { offset: '75%' });

});