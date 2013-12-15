Meteor.publish('learningResources', function(options) {
    return LearningResources.find({}, options);
});

Meteor.publish('comments', function(resourceId) {
    return Comments.find({resourceId: resourceId});
});

Meteor.publish('notifications', function() {
    return Notifications.find({userId: this.userId});
});