(function() {
    function FinishedCtrl( Item) {

      this.items = Item.all;

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
        .controller('FinishedCtrl', ['Item', FinishedCtrl]);
})();
