(function() {
  function User($firebaseArray) {
    var User = {};
    var currentUser = null;
    User.username = null;
    User.updateInfo = function(){
      var currentUser = firebase.auth().currentUser;
      User.username = currentUser.displayName;
    };

    User.setUsername = function(username){
      var user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: username,
      }).then(function() {
        // Update successful.
      }).catch(function(error) {
        // An error happened.
      });
    }

    User.signOut = function() {
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
        alert(error.message);
      });
    };

    return User;
  }

  angular
    .module('blocChat')
    .factory('User', ['$firebase', User]);
})();
