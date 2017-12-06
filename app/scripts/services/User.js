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
      console.log(username);
      var user = firebase.auth().currentUser;
      console.log(user);
      user.updateProfile({
        displayName: username,
      }).then(function() {
        // Update successful.
        console.log(username);
      }).catch(function(error) {
        // An error happened.
        console.log(error);
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
