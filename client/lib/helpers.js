window.scrollToSection = function(sectionName) {
    $('html, body').animate({
        scrollTop: $("#" + sectionName).offset().top - 100
    });
};

Session.currentSignee = function() {
    var signeeId = Session.get('signeeId');
    if(signeeId) {
        return Signees.findOne(signeeId);
    }
};