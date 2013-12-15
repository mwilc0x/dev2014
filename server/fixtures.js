// code executes immediately when the server starts

// Fixture data
if (LearningResources.find().count() === 0) {
    var now = new Date().getTime();

    // create two users
    var mikeId = Meteor.users.insert({
        profile: { name: 'Mike Wilcox' }
    });
    var mike = Meteor.users.findOne(mikeId);
    var sachaId = Meteor.users.insert({
        profile: { name: 'Sacha Greif' }
    });
    var sacha = Meteor.users.findOne(sachaId);

    var telescopeId = LearningResources.insert({
        title: 'Introducing Telescope',
        userId: sacha._id,
        author: sacha.profile.name,
        url: 'http://sachagreif.com/introducing-telescope/',
        submitted: now - 7 * 3600 * 1000,
        commentsCount: 2
    });

    Comments.insert({
        postId: telescopeId,
        userId: mike._id,
        author: mike.profile.name,
        submitted: now - 5 * 3600 * 1000,
        body: 'This is a good resource.'
    });

    Comments.insert({
        postId: telescopeId,
        userId: sacha._id,
        author: sacha.profile.name,
        submitted: now - 3 * 3600 * 1000,
        body: 'I agree!'
    });

    LearningResources.insert({
        title: 'Meteor',
        userId: mike._id,
        author: mike.profile.name,
        url: 'http://meteor.com',
        submitted: now - 10 * 3600 * 1000,
        commentsCount: 0
    });

    LearningResources.insert({
        title: 'The Meteor Book',
        userId: mike._id,
        author: mike.profile.name,
        url: 'http://themeteorbook.com',
        submitted: now - 12 * 3600 * 1000,
        commentsCount: 0
    });
}