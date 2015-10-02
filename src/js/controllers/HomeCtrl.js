
app.controller('HomeCtrl', function($scope, UserService) {
  $scope.register = false;
  $scope.error = "";

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

  var post = {
    title: 'Hello world',
    author: 'RoboCade',
    subreddit: 'general',
    createdAt: Date.now(),
    score: 1,
    content: 'https://myavantiservices.files.wordpress.com/2015/02/helloworld.gif',
    comments: []
  };
  $scope.posts = [post, post, post];

  $scope.convertTime = function(time) {
    return moment(time).fromNow();
  };


  $scope.loginClick = function() {
    if(!($scope.checkEmail() && $scope.checkPass())) {
      return;
    }
    UserService.login({
      email: $scope.email,
      password: $scope.password
    }, function(err, user) {
      $scope.error = err.toString();
      err || $('#loginModal').modal('hide')
    });
  };
  $scope.registerClick = function() {
    if(!($scope.checkUsername() && $scope.checkPass() && $scope.checkPass2() && $scope.checkEmail())) {
      return;
    }
    UserService.create({
      username: $scope.username,
      email: $scope.email,
      password: $scope.password
    }, function(err, user) {
      $scope.error = err.toString();
      err || $('#loginModal').modal('hide');
    });
  };

  
});