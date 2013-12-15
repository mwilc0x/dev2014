Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() {
        return [Meteor.subscribe('learningResources'), Meteor.subscribe('notifications')];
    }
});

MainListController = RouteController.extend({
    template: 'mainList',
    increment: 5,
    limit: function() {
        return parseInt(this.params.mainLimit) || this.increment;
    },
    findOptions: function() {
        return {sort: {submitted: -1, _id: -1}, limit: this.limit()};
    },
    waitOn: function() {
        return Meteor.subscribe('learningResources', this.findOptions());
    },
    data: function() {
        return {
            items: LearningResources.find({}, this.findOptions()),
            nextPath: this.route.path({mainLimit: this.limit() + this.increment})
        };
    }
});

Router.map(function() {
    this.route('mainList', {
        path: '/'
    });
    this.route('listPage', {
        path: '/resource/:_id',
        waitOn: function() {
            return Meteor.subscribe('comments', this.params._id);
        },
        data: function() { return LearningResources.findOne(this.params._id); }
    });
    this.route('resourceEdit', {
        path: '/resource/:_id/edit',
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