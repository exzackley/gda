Template.signup.rendered = function() {
    $('#moreAboutMeFormContainer').hide();
    $('#thankForSigningUp').hide();
};

AutoForm.addHooks(['signUpForm'], {
    onSuccess: function(operation, result) {
        Session.set('signeeId', result);
        $('#signUpFormContainer').slideUp();
        $('#moreAboutMeFormContainer').slideDown();
        scrollToSection('signup');
    }
});

AutoForm.addHooks(['moreAboutMeForm'], {
    onSuccess: function() {
        $('#moreAboutMeFormContainer').slideUp();
        $('#thankForSigningUp').slideDown();
    }
});

Template.signup.helpers({
    signees: function() {
        return Signees.find();
    },
    currentSignee: function() {
        return Session.currentSignee();
    }
});