(function() {
    function HomeCtrl(Message, Room, $uibModal, $document, $cookies, $fireBase) {
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

      this.signOut = function(){
        firebase.auth().signOut().then(function() {
          // Sign-out successful.
          $uibModal.open({
             templateUrl: 'templates/loginForm.html',
             controller: 'UsernameCtrl',
             controllerAs: 'usermodal',
             backdrop  : 'static',
             keyboard  : false
           });
        }).catch(function(error) {
          // An error happened.
          alert(error.message);
        });
      }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Message', 'Room', '$uibModal', '$document', '$cookies', '$firebase', HomeCtrl]);
})();
