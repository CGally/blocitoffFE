(function() {
  function User($resource) {
    return $resource('http://localhost:4000/api/users/', {}, {
      sign_in: {
        url: 'http://localhost:4000/api/users/sign_in',
        method: 'POST'
      },
      sign_out: {
        method: 'DELETE'
      }
    });
  }

  angular
    .module('blocItOffFE')
    .factory('User', ['$resource', User]);
})();
