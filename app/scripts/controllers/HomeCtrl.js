(function() {
    function HomeCtrl(Item) {
      // this.items = Item.all;
      //
      // this.createToDo = function(name, priority) {
      //     Item.createItem(name, priority);
      //     des.value = '';
      // };
      //
      // this.deleteToDo = function(item) {
      //   Item.confirmCompleted(item)
      // }
      //
      // this.expire = function(item) {
      //   if(item.createdAt < Date.now() - 604800000) {
      //     item.expired = true;
      //     item.active = false
      //   };
      //   if(item.active === false) {
      //     return true;
      //   }
      // }

      this.items = Item.all;

      this.createToDo = function(name, priority) {
        var item = Item.createItem(name, priority);
        this.items.push(item);
        des.value = '';
      };

      this.expire = function(item) {
        if(parseInt(item.created_at) * 1000 < Date.now() - 604800000) {
          item.expired = true;
          item.active = false
        };
        if(item.active === false) {
          return true;
        }
      }

      this.deleteToDo = function(item) {
        Item.confirmCompleted(item)
      };
    }

    angular
        .module('blocItOffFE')
        .controller('HomeCtrl', ['Item', HomeCtrl]);
})();
