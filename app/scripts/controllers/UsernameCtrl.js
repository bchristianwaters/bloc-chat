(function() {
    function UsernameCtrl($uibModalInstance, $cookies) {
      var umc = this;
      this.username = "";
      this.setUsername = function() {
        if (umc.username.length > 0){
          $cookies.put("blocChatCurrentUser", umc.username)
          $uibModalInstance.close();
        }
      };
    }

    angular
        .module('blocChat')
        .controller('UsernameCtrl', ['$uibModalInstance', '$cookies', UsernameCtrl]);
})();
