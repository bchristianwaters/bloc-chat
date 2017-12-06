(function() {
    function LoginCtrl(User, $firebase, $uibModalInstance, $scope) {
      var umc = this;
      this.email = "";
      this.password = "";
      this.username = "";
      this.state = "Log In";

      this.register = function() {
          firebase.auth().createUserWithEmailAndPassword(umc.email, umc.password).then(function() {
            // Sign-out successful.
            User.setUsername(umc.username);
            $uibModalInstance.close();
            $scope.$apply();
          }).catch(function(error) {
            // An error happened.
            alert(error.message);
          });
      };

      this.signin = function() {
          firebase.auth().signInWithEmailAndPassword(umc.email, umc.password).then(function() {
            // Sign-out successful.
            $uibModalInstance.close();
            $scope.$apply();
          }).catch(function(error) {
            // An error happened.
            alert(error.message);
          });
      };
    }

    angular
        .module('blocChat')
        .controller('LoginCtrl', ['User', '$firebase', '$uibModalInstance', '$scope', LoginCtrl]);
})();
