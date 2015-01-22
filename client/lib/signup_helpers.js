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

UI.body.events({
    'click #skipMoreAboutMe': function(e) {
        e.preventDefault();
        scrollToSection('nominate');
    }
});

Template.signup.helpers({
    signees: function() {
        return Signees.find();
    },
    currentSignee: function() {
        var signeeId = Session.get('signeeId');
        if(signeeId) {
            return Signees.findOne(signeeId);
        }
    }
});