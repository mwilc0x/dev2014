Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() { return Meteor.subscribe('learningResources'); }
});

Router.map(function() {
    this.route('mainList', {path: '/'});
    this.route('listPage', {
        path: '/resource/:_id',
        data: function() { return LearningResources.findOne(this.params._id); }
    });
});