(function() {
    function UsernameCtrl($firebase, $uibModalInstance, $cookies) {
      var umc = this;
      this.email = "";
      this.password = "";
      this.state = "Log In";

      this.register = function() {
          firebase.auth().createUserWithEmailAndPassword(umc.email, umc.password).then(function() {
            // Sign-out successful.
            $uibModalInstance.close();
          }).catch(function(error) {
            // An error happened.
            alert(error.message);
          });
      };

      this.signin = function() {
          firebase.auth().signInWithEmailAndPassword(umc.email, umc.password).then(function() {
            // Sign-out successful.
            $uibModalInstance.close();
          }).catch(function(error) {
            // An error happened.
            alert(error.message);
          });
      };
    }

    angular
        .module('blocChat')
        .controller('UsernameCtrl', ['$firebase', '$uibModalInstance', '$cookies', UsernameCtrl]);
})();
