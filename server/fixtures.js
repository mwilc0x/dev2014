// code executes immediately when the server starts

if (LearningResources.find().count() === 0) {
    LearningResources.insert({
        title: 'Introducing Telescope',
        author: 'Sacha Greif',
        url: 'http://sachagreif.com/introducing-telescope/'
    });

    LearningResources.insert({
        title: 'Meteor',
        author: 'Tom Coleman',
        url: 'http://meteor.com'
    });

    LearningResources.insert({
        title: 'The Meteor Book',
        author: 'Tom Coleman',
        url: 'http://themeteorbook.com'
    });

    LearningResources.insert({
        title: 'AngularJS',
        author: 'Brad Green, Shyam Seshadri',
        url: 'http://shop.oreilly.com/product/0636920028055.do'
    });
}