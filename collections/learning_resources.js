// eliminate using var to make LearningResources available to whole app
LearningResources = new Meteor.Collection('learningResources');
LearningResources.allow({
    insert: function(userId, doc) {
        // only allow posting if you are logged in
        return !! userId;
    }
});