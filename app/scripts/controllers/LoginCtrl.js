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

      this.googlesignin = function() {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider);
        firebase.auth().getRedirectResult().then(function(result) {
        if (result.credential) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // ...
        }
        // The signed-in user info.
        var user = result.user;
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
      }
    }

    angular
        .module('blocChat')
        .controller('LoginCtrl', ['User', '$firebase', '$uibModalInstance', '$scope', LoginCtrl]);
})();
