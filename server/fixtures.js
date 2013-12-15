// code executes immediately when the server starts

// Fixture data
if (LearningResources.find().count() === 0) {
    var now = new Date().getTime();

    // create two users
    var mikeId = Meteor.users.insert({
        profile: { name: 'Mike Wilcox' }
    });
    var mike = Meteor.users.findOne(mikeId);

    var angularjsId = LearningResources.insert({
        title: 'AngularJS',
        userId: mike._id,
        author: mike.profile.name,
        url: 'http://shop.oreilly.com/product/0636920028055.do',
        submitted: now - 7 * 3600 * 1000,
        commentsCount: 1
    });

    Comments.insert({
        resourceId: angularjsId,
        userId: mike._id,
        author: mike.profile.name,
        submitted: now - 5 * 3600 * 1000,
        body: 'Well written book.'
    });
}