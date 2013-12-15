Meteor.publish('learningResources', function(sort, limit) {
    return LearningResources.find({}, {sort: sort, limit: limit});
});
Meteor.publish('comments', function(resourceId) {
    return Comments.find({resourceId: resourceId});
});

Meteor.publish('notifications', function() {
    return Notifications.find({userId: this.userId});
});