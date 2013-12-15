Template.resourceSubmit.events({
    'submit form': function(e) {
        e.preventDefault();

        var resource = {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val(),
            message: $(e.target).find('[name=message]').val()
        }

        Meteor.call('resource', resource, function(error, id) {
            if (error)
                return alert(error.reason);
        });

        Router.go('listPage');
    }
});