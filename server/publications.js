Meteor.publish('learningResources', function() {
    return LearningResources.find();
});