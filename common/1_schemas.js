Schemas = {};

Meteor.isClient && Template.registerHelper("Schemas", Schemas);

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
        allowedValues: ["English", "Spanish", "Hindi", "Mandarin"],
        autoform: {
            afFieldInput: {
                firstOption: "(Select a Language)"
            }
        }
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
