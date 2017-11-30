(function() {
    function HomeCtrl(Message, Room, $uibModal, $document) {
      var hc = this;
      this.rooms = Room.all;
      this.currentRoom = localStorage.currentRoom || "";
      this.currentRoomId = localStorage.currentRoomId || "";
      this.messages = Message.getByRoomId(this.currentRoomId);
      this.newRoom = function(){
          $uibModal.open({
            templateUrl: 'templates/newRoomForm.html',
            controller: 'ModalCtrl',
            controllerAs: 'modal'
          });
      }
      this.selectRoom = function(room, roomId){
        this.currentRoom = room;
        localStorage.currentRoom = room;
        this.currentRoomId = roomId;
        localStorage.currentRoomId = roomId;
        this.messages = Message.getByRoomId(roomId)
      }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Message', 'Room', '$uibModal', '$document', HomeCtrl]);
})();
