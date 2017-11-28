(function() {
    function ModalCtrl(Room, $uibModal) {
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModal', ModalCtrl]);
})();
