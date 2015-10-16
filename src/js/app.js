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
})

.directive('authModal', function(){
  return {
    restrict: 'E',
    scope: {
      modalId: "@",
      registerFields: "@",
      loginHandler: "=",
      registerHandler: "=",
      loggedIn: "="
    },
    templateUrl: 'src/templates/authModal.html',
    controller: ['$scope', '$window', '$filter', function($scope, $window, $filter){
      $scope.register = false;
      $scope.error = "";

      $scope.loginClick = function() {
        if(!($scope.checkEmail() && $scope.checkPass())) {
          return;
        }
        $scope.loginHandler({
          email: $scope.email,
          password: $scope.password
        })
      }

      $scope.registerClick = function() {
        if(!($scope.checkUsername() && $scope.checkPass() && $scope.checkPass2() && $scope.checkEmail())) {
          return;
        }
        $scope.registerHandler({
          email: $scope.email,
          username: $scope.username,
          password: $scope.password
        })
      }

      $scope.checkUsername = function() {
        return $scope.username && $scope.username.length > 2;
      };
      $scope.checkPass = function() {
        return $scope.password && $scope.password.length > 4 && $scope.password !== $scope.username;
      };
      $scope.checkPass2 = function () {
        return $scope.password2 && $scope.password2.length > 0 && $scope.password === $scope.password2;
      };
      $scope.checkEmail = function() {
        return $scope.email && $scope.email.length > 4 && $scope.email.indexOf('@') > 0 && $scope.email.indexOf('.') > 0;
      };

    }]
  }
});
