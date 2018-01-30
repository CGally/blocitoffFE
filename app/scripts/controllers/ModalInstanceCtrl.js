(function() {
    function ModalInstanceCtrl($uibModalInstance, Item) {

        this.createToDo = function(name) {
            Item.createItem(name);
            $uibModalInstance.close();
        };

        this.cancel = function() {
            $uibModalInstance.close();
        };
    }

    angular
        .module('blocItOffFE')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', 'Item', ModalInstanceCtrl]);
})();
