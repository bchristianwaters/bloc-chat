(function() {
    function HomeCtrl(Room, $uibModal, $document) {
      this.rooms = Room.all;
      this.newRoom = function(){
          console.log('blah');
          $uibModal.open({
            templateUrl: 'newRoomForm.html',
            appendTo: $document.find('main')
          });
      }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', '$document', HomeCtrl]);
})();
