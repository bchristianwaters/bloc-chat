(function() {
    function HomeCtrl(Room, $uibModal, $document) {
      this.rooms = Room.all;
      this.newRoom = function(){
          $uibModal.open({
            templateUrl: 'templates/newRoomForm.html',
            controller: 'ModalCtrl',
            controllerAs: 'modal'
          });
      }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', '$document', HomeCtrl]);
})();
