// eliminate using var to make LearningResources available to whole app
LearningResources = new Meteor.Collection('learningResources');

LearningResources.allow({
    update: ownsDocument,
    remove: ownsDocument
});

LearningResources.deny({
    update: function(userId, post, fieldNames) {
        // may only edit the following two fields:
        return (_.without(fieldNames, 'url', 'title').length > 0);
    }
});

// these methods are available to both server and client
Meteor.methods({
    resource: function(resourceAttributes) {
        var user = Meteor.user(),
            resourceWithSameLink = LearningResources.findOne({url: resourceAttributes.url});

        // ensure the user is logged in
        if (!user)
            throw new Meteor.Error(401, "You need to login to post new stories");

        // ensure the post has a title
        if (!resourceAttributes.title)
            throw new Meteor.Error(422, 'Please fill in a headline');

        // check that there are no previous posts with the same link
        if (resourceAttributes.url && resourceWithSameLink) {
            throw new Meteor.Error(302,
                'This link has already been posted',
                resourceWithSameLink._id);
        }

        // pick out the whitelisted keys
        var resource = _.extend(_.pick(resourceAttributes, 'url', 'message'), {
            title: resourceAttributes.title + (this.isSimulation ? '(client)' : '(server)'),
            userId: user._id,
            author: user.username,
            submitted: new Date().getTime()
        });

        // wait for 5 seconds
        if (! this.isSimulation) {
            var Future = Npm.require('fibers/future');
            var future = new Future();
            Meteor.setTimeout(function() {
                future.return();
            }, 5 * 1000);
            future.wait();
        }

        var resourceId = LearningResources.insert(resource);

        return resourceId;
    }
});