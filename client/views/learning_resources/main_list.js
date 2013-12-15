// In Meteor, find() returns a cursor, which is a reactive data source.
// When we want to log its contents, we can then use fetch() on that cursor to transform it into an array .

Template.mainList.helpers({
    items: function() {
        return LearningResources.find();
    }
});

Template.mainList.helpers({
    posts: function() {
        return LearningResources.find({}, {sort: {submitted: -1}});
    }
});