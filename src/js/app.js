'use strict';
window.app = angular.module('creddit', ['ui.router', 'firebase'])

.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/", "home")

  $stateProvider
  .state('home', { 
    url: '/', 
    views: {
      'top' : {
        templateUrl: 'src/templates/home.html',
        controller: 'HomeCtrl'
      },
      'post' : { 
        templateUrl: 'src/templates/post.html',
        controller: 'PostCtrl'
      }
    }
  })
});
