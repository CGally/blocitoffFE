(function() {
  function config($locationProvider, $stateProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl as home',
        templateUrl: '/templates/home.html'
      })
      .state('finished', {
        url: '/finished',
        controller: 'FinishedCtrl as finished',
        templateUrl: '/templates/finished.html'
      })
      .state('session', {
        url: '/session',
        controller: 'SessionCtrl as session',
        templateUrl: '/templates/session.html'
      });
    }

  angular
    .module('blocItOffFE', ['ui.router', 'Devise', 'ngResource'])
    .config(config);
})();
