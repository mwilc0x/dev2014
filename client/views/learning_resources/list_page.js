Template.listPage.helpers({
    comments: function() {
        return Comments.find({resourceId: this._id});
    }
});