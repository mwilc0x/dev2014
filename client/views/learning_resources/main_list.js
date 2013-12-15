// In Meteor, find() returns a cursor, which is a reactive data source.
// When we want to log its contents, we can then use fetch() on that cursor to transform it into an array .

Template.mainList.helpers({
    items: function() {
        return LearningResources.find();
    }
});
Template.mainList.helpers({
    hasMorePosts: function(){
        this.items.rewind();
        return Router.current().limit() == this.items.fetch().length;
    }
});