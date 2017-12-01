(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
      // Filter the messages by their room ID.
      var messageArray = [];
      ref.orderByChild('roomId').equalTo(roomId).on('value', function(snapshot) {
        messageArray.push(snapshot.val());
      });
      return messageArray;
    };

    Message.send = function(newMessage) {
      console.log("newMessage");
      messages.$add(newMessage);
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
