Meteor.startup(function () {
    $('#moreAboutMeFormContainer').hide();
    $('#thankForSigningUp').hide();
});


AutoForm.addHooks(['signUpForm'], {
    onSuccess: function(operation, result) {
        Session.set('signeeId', result);
        $('#signUpFormContainer').slideUp();
        $('#moreAboutMeFormContainer').slideDown();
    }
});

AutoForm.addHooks(['moreAboutMeForm'], {
    onSuccess: function(operation, result) {
        $('#moreAboutMeFormContainer').slideUp();
        $('#thankForSigningUp').slideDown();
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