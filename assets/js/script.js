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
            // "-webkit-filter": "blur(5px)",
            // "filter": "blur(5px)"
            "transform": "scaleY(1.8)",
            // "flex-direction": "row",
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

    

});