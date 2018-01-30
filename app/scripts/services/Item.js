(function() {
  function Item($firebaseArray) {
    var Item = {};
    var ref = firebase.database().ref().child("items");
    var items = $firebaseArray(ref);

    Item.all = items;

    Item.createItem = function(description, priority) {
        items.$add({
          description: description,
          createdAt: Date.now(),
          completed: false,
          expired: false,
          active: true,
          priority: priority
        });
    };

    return Item;
  }

  angular
    .module('blocItOffFE')
    .factory('Item', ['$firebaseArray', Item]);
})();
