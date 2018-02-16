(function() {
    function FinishedCtrl(Item) {

      this.items = Item.all;

      this.expire = function(item) {
        if(parseInt(item.created_at) * 1000 < Date.now() - 604800000) {
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
