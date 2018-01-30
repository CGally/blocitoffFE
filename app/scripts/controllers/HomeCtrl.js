(function() {
    function HomeCtrl($uibModal, Item) {
      this.items = Item.all;

      this.createToDo = function(name, priority) {
          Item.createItem(name, priority);
          des.value = '';
      };

      this.deleteToDo = function(item) {
        Item.confirmCompleted(item)
      }

      this.expire = function(item) {
        if(item.createdAt < Date.now() - 604800000) {
          item.expired = true;
          item.active = false
        };
        if(item.active === false) {
          return true;
        }
      }
    }

    angular
        .module('blocItOffFE')
        .controller('HomeCtrl', ['$uibModal', 'Item', HomeCtrl]);
})();
