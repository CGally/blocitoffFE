(function() {
    function FinishedCtrl( Item) {

      this.items = Item.all;

      this.expire = function(item) {
        if(item.active === false) {
          return true;
        }
      }
    }

    angular
        .module('blocItOffFE')
        .controller('FinishedCtrl', ['Item', FinishedCtrl]);
})();
