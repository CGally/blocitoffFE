(function() {
  function ItemResource($resource) {
    return $resource('http://localhost:4000/api/users/1/items/:id', { id: '@id' }, {
      update: {
        method: 'PUT'
      }
    });
  }

  angular
    .module('blocItOffFE')
    .factory('ItemResource', ['$resource', ItemResource]);
})();
