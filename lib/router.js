Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() {
        return [Meteor.subscribe('learningResources'), Meteor.subscribe('comments')];
    }
});

Router.map(function() {
    this.route('mainList', {path: '/'});
    this.route('listPage', {
        path: '/resource/:_id',
        data: function() { return LearningResources.findOne(this.params._id); }
    });
    this.route('resourceEdit', {
        path: '/resources/:_id/edit',
        data: function() { return LearningResources.findOne(this.params._id); }
    });
    this.route('resourceSubmit', {
        path: '/submit'
    });
});
var requireLogin = function() {
    if (! Meteor.user()) {
        if (Meteor.loggingIn())
            this.render(this.loadingTemplate);
        else
            this.render('accessDenied');
        this.stop();
    }
}
Router.before(requireLogin, {only: 'resourceSubmit'});
Router.before(function() { clearErrors() });