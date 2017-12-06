(function() {
    function HomeCtrl(User, Message, Room, $uibModal, $document, $cookies, $fireBase) {
      var hc = this;
      this.rooms = Room.all;
      this.currentRoom = localStorage.currentRoom || "";
      this.currentRoomId = localStorage.currentRoomId || "";
      this.currentMessage = "";
      this.messages = Message.getByRoomId(this.currentRoomId);
      this.User = User;

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

      this.sendMessage = function(){
        var currentDate = new Date();
        var currentTime = currentDate.getHours()+":"+currentDate.getMinutes();
        var un = hc.User.username;
        var messageObject = {
          content: hc.currentMessage,
          roomId: hc.currentRoomId,
          sentAt: currentTime,
          username: un
        }
        Message.send(messageObject);
        hc.currentMessage = "";
      }

      this.signOut = function(){
        User.signOut()
      }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['User', 'Message', 'Room', '$uibModal', '$document', '$cookies', '$firebase', HomeCtrl]);
})();
