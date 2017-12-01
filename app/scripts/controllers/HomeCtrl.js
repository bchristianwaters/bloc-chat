(function() {
    function HomeCtrl(Message, Room, $uibModal, $document, $cookies) {
      var hc = this;
      this.rooms = Room.all;
      this.currentRoom = localStorage.currentRoom || "";
      this.currentRoomId = localStorage.currentRoomId || "";
      this.currentMessage = "";
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
      this.test = function(){
        console.log("blah");
      }
      this.sendMessage = function(){
        var currentDate = new Date();
        var currentTime = currentDate.getHours()+":"+currentDate.getMinutes();
        var messageObject = {
          content: hc.currentMessage,
          roomId: hc.currentRoomId,
          sentAt: currentTime,
          username: $cookies.get('blocChatCurrentUser')
        }
        Message.send(messageObject);
        hc.currentMessage = "";
      }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Message', 'Room', '$uibModal', '$document', '$cookies', HomeCtrl]);
})();
