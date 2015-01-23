Template.nominate.events = {
    'click #nominateMyself': function (event, template) {
        function copyField(myself, key) {
            $(template.find("input[name='" + key + "']")).val(myself[key]);
        }

        var myself = Session.currentSignee();
        copyField(myself, 'name');
        copyField(myself, 'mobile');
        copyField(myself, 'city');
        copyField(myself, 'email');
    }
};
