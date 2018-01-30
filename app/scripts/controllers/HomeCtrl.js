(function() {
    function HomeCtrl($uibModal, Item) {

      this.items = Item.all;

      this.open = function() {
        $uibModal.open({
          ariaLabelledBy: 'my-modal-title',
          ariaDescribedBy: 'my-modal-body',
          animation: true,
          templateUrl: '/templates/modal.html',
          controller: 'ModalInstanceCtrl',
          controllerAs: 'modal',
          keyboard: true,
        });
      };

      this.expire = function(item) {
        if(item.createdAt < Date.now() - 604800000) {
          item.expired = true;
        };
        if(item.expired === true || item.completed === true) {
          return true;
        }
      }
    }

    angular
        .module('blocItOffFE')
        .controller('HomeCtrl', ['$uibModal', 'Item', HomeCtrl]);
})();
