(function() {
  function Item($firebaseArray) {
    var Item = {};
    var ref = firebase.database().ref().child("items");
    var items = $firebaseArray(ref);

    Item.all = items;

    Item.createItem = function(name) {
        items.$add(name);
    };

    return Item;
  }

  angular
    .module('blocItOffFE')
    .factory('Item', ['$firebaseArray', Item]);
})();
