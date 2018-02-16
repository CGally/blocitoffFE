(function() {
  function Item(ItemResource) {
    var Item = {};
    // var ref = firebase.database().ref().child("items");
    // var items = $firebaseArray(ref);

    var items = [];
    var ref = ItemResource.query(function() {
      for(var i = 0; i < ref.length; i++) {
        items.push(ref[i]);
      }
    });

    Item.all = items;

    Item.createItem = function(description, priority) {
      this.item = new ItemResource();
      this.item.description = description;
      this.item.priority = priority;
      return ItemResource.save(this.item);
    };

    Item.confirmCompleted = function(item) {
      item.completed = true;
      item.active = false;
      item.$update(function() {
        alert("Saved");
      });
    }

    return Item;
  }

  angular
    .module('blocItOffFE')
    .factory('Item', ['ItemResource', Item]);
})();
