var Collections = {};

Meteor.isClient && Template.registerHelper("Collections", Collections);

Signees = Collections.Signees = new Mongo.Collection("Signees");
Signees.attachSchema(Schemas.Signee);

Signees.allow({
    insert: function () {
        return true;
    }
});


Introductions = Collections.Introductions = new Mongo.Collection("Introductions");
Introductions.attachSchema(Schemas.Introduction);

Introductions.allow({
    insert: function () {
        return true;
    }
});