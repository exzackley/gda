Schemas = {};

Meteor.isClient && Template.registerHelper("Schemas", Schemas);

var allLanguages = [
    "Arabic", "English", "Chinese", "French", "German", "Hindi", "Japanese",
    "Korean", "Portuguese", "Russian", "Spanish", "Urdu"
];

Schemas.Signee = new SimpleSchema({
    mobile: {
        type: String
    },
    carType: {
        type: String,
        allowedValues: ["Uber X", "Uber XL", "Uber Black"],
        autoform: {
            afFieldInput: {
                firstOption: "(Select a Type)"
            }
        }
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
        optional: true,
        allowedValues: allLanguages,
        autoform: {
            afFieldInput: {
                firstOption: "(Select a Language)"
            }
        }
    },
    languagesSpoken: {
        type: String,
        optional: true
    },
    otherLanguages: {
        type: String,
        optional: true
    },
    postalCode: {
        type: String,
        optional: true
    },
    startYear: {
        type: Number,
        optional: true,
        allowedValues: [2015, 2014, 2013, 2012, 2011, 2010, 2009],
        autoform: {
            afFieldInput: {
                firstOption: "(Select a Year)"
            }
        }
    }
});

Schemas.Introduction = new SimpleSchema({
    type: {
        type: String,
        allowedValues: ['nominate', 'suggest']
    },
    name: {
        type: String
    },
    mobile: {
        type: String,
        optional: true
    },
    email: {
        type: String,
        optional: true
    },
    city: {
        type: String,
        optional: true
    }
});