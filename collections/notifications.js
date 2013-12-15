Notifications = new Meteor.Collection('notifications');

Notifications.allow({
    update: ownsDocument
});

createCommentNotification = function(comment) {
    var resource = LearningResources.findOne(comment.resourceId);
    if (comment.userId !== resource.userId) {
        Notifications.insert({
            userId: resource.userId,
            resourceId: resource._id,
            commentId: comment._id,
            commenterName: comment.author,
            read: false
        });
    }
};