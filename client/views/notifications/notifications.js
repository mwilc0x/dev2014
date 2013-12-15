Template.notifications.helpers({
    notifications: function() {
        return Notifications.find({userId: Meteor.userId(), read: false});
    },
    notificationCount: function(){
        return Notifications.find({userId: Meteor.userId(), read: false}).count();
    }
});

Template.notification.helpers({
    notificationPostPath: function() {
        return Router.routes.resourcePage.path({_id: this.resourceId});
    }
})

Template.notification.events({
    'click a': function() {
        Notifications.update(this._id, {$set: {read: true}});
    }
})