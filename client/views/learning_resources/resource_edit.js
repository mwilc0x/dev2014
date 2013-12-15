Template.resourceEdit.events({
    'submit form': function(e) {
        e.preventDefault();

        var currentResourceId = this._id;

        var resourceProperties = {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val()
        }

        LearningResources.update(currentResourceId, {$set: resourceProperties}, function(error) {
            if (error) {
                // display the error to the user
                throwError(error.reason);
            } else {
                Router.go('listPage', {_id: currentResourceId});
            }
        });
    },

    'click .delete': function(e) {
        e.preventDefault();

        if (confirm("Delete this learning resource?")) {
            var currentResourceId = this._id;
            LearningResources.remove(currentResourceId);
            Router.go('mainList');
        }
    }
});