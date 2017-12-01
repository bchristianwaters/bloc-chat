(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      // Do something to allow users to set their username
      $uibModal.open({
         templateUrl: 'templates/usernameForm.html',
         controller: 'UsernameCtrl',
         controllerAs: 'usermodal',
         backdrop  : 'static',
         keyboard  : false
       });
      var currentUser = $cookies.get('blocChatCurrentUser');
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
