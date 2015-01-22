Meteor.startup(function () {
    $('#moreAboutMeFormContainer').hide();
});


AutoForm.addHooks(['signUpForm'], {
    onSuccess: function() {
        $('#signUpFormContainer').slideUp();
        $('#moreAboutMeFormContainer').slideDown();
    }
});

Template.signup.helpers({
    signees: function() {
        return Signees.find();
    }
});