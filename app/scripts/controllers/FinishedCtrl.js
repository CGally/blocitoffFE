(function() {
    function FinishedCtrl( Item) {

      this.items = Item.all;

      this.expire = function(item) {
        if(item.expired === true || item.completed === true) {
          return true;
        }
      }
    }

    angular
        .module('blocItOffFE')
        .controller('FinishedCtrl', ['Item', FinishedCtrl]);
})();
