Template.resourceSubmit.events({
    'submit form': function(e) {
        e.preventDefault();

        var resource = {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val(),
            message: $(e.target).find('[name=message]').val()
        }

        Meteor.call('resource', resource, function(error, id) {
            if (error) {
                // display the error to the user
                throwError(error.reason);
                if (error.error === 302)
                    Router.go('listPage', {_id: error.details})
            } else {
                Router.go('listPage', {_id: id});
            }
        });
    }
});