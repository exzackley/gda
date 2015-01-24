Router.route('gda/cn', function() {
    i18n.setLanguage('cn');
    this.render('index');
});

Router.route('gda', function () {
    i18n.setLanguage('en');
    this.render('index');
});
