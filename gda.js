if (Meteor.isClient) {
    Meteor.startup(function () {
        $('body').attr('id', 'page-top');
        $('body').attr('class', 'index');
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
    });
}
