Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() { return Meteor.subscribe('learningResources'); }
});

Router.map(function() {
    this.route('mainList', {path: '/'});
});