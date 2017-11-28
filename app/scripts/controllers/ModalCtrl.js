(function() {
    function ModalCtrl(Room, $uibModalInstance) {
      var mc = this;
      this.roomName = "";
      this.cancel = function() {
        $uibModalInstance.close();
      };
      this.createRoom = function() {
        Room.add(mc.roomName);
        $uibModalInstance.close();
      };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
