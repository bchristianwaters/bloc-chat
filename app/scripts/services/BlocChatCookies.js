(function() {
  function BlocChatCookies($firebase, $cookies, $uibModal, User) {

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        User.username = user.displayName;
      } else {
        // No user is signed in.
        $uibModal.open({
           templateUrl: 'templates/loginForm.html',
           controller: 'LoginCtrl',
           controllerAs: 'usermodal',
           backdrop  : 'static',
           keyboard  : false
         });
      }
    });

    }

  angular
    .module('blocChat')
    .run(['$firebase', '$cookies', '$uibModal', 'User', BlocChatCookies]);
})();
