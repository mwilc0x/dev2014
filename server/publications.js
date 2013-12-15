Meteor.publish('learningResources', function() {
    return LearningResources.find();
});

Meteor.publish('comments', function() {
    return Comments.find();
});