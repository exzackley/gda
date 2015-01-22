window.scrollToSection = function(sectionName) {
    $('html, body').animate({
        scrollTop: $("#" + sectionName).offset().top - 100
    });
};