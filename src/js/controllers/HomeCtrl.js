
app.controller('HomeCtrl', function($scope) {
  $scope.register = false;
  var post = {
    title: 'Hello world',
    author: 'RoboCade',
    subreddit: 'general',
    createdAt: Date.now(),
    score: 1,
    content: 'https://myavantiservices.files.wordpress.com/2015/02/helloworld.gif',
    comments: []
  };

  $scope.convertTime = function(time) {
    return moment(time).fromNow();
  }

  $scope.posts = [post, post, post];

  $scope.checkUsername = function() {
    return $scope.username && $scope.username.length > 2;
  }

  $scope.checkPass = function() {
    return $scope.password && $scope.password.length > 4 && $scope.password !== $scope.username;
  }

  $scope.checkPass2 = function () {
    return $scope.password2 && $scope.password2.length > 0 && $scope.password === $scope.password2;
  }

  $scope.checkEmail = function() {
    return $scope.email && $scope.email.length > 4 && $scope.email.indexOf('@') > 0 && $scope.email.indexOf('.') > 0;
  }
});