'use strict';
window.app = angular.module('creddit', ['ui.router', 'firebase'])

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('home', { 
    url: '/', 
    templateUrl: 'src/templates/home.html',
    controller: 'HomeCtrl'
  })
}); 