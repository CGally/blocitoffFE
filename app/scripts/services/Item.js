(function() {
  function Item($firebaseArray) {
    var Item = {};
    var ref = firebase.database().ref().child("items");
    var items = $firebaseArray(ref);

    Item.all = items;

    Item.createItem = function(name) {
        items.$add({
          name: name,
          createdAt: Date.now(),
          completed: false,
          expired: false
        });
    };

    return Item;
  }

  angular
    .module('blocItOffFE')
    .factory('Item', ['$firebaseArray', Item]);
})();
