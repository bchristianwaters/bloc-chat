(function() {
  function BlocChatCookies($firebase, $cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });

      $uibModal.open({
         templateUrl: 'templates/loginForm.html',
         controller: 'UsernameCtrl',
         controllerAs: 'usermodal',
         backdrop  : 'static',
         keyboard  : false
       });
    }

  angular
    .module('blocChat')
    .run(['$firebase', '$cookies', '$uibModal', BlocChatCookies]);
})();
