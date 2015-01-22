Schemas = {};

Meteor.isClient && Template.registerHelper("Schemas", Schemas);

Schemas.Signee = new SimpleSchema({
    mobile: {
        type: String,
        unique: true
    },
    city: {
        type: String
    },
    email: {
        type: String,
        optional: true
    },
    name: {
        type: String,
        optional: true
    },
    languagePreference: {
        type: String,
        optional: true
    }
});
