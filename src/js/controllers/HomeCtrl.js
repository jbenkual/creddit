
app.controller('HomeCtrl', function($scope, UserService) {
  $scope.register = false;
  $scope.error = "";
  $scope.user = UserService.user;
  if($scope.user) {
    $scope.loggedIn = true;
  }

  var post = {
    title: 'Hello world',
    author: 'RoboCade',
    subreddit: 'general',
    createdAt: Date.now(),
    score: 1,
    link: 'https://myavantiservices.files.wordpress.com/2015/02/helloworld.gif',
    comments: []
  };
  $scope.posts = [post, post, post];

  $scope.convertTime = function(time) {
    return moment(time).fromNow();
  };


  $scope.loginClick = function(data) {
    UserService.login({
      email: data.email,
      password: data.password
    }, function(err, user) {
      if(err) {
        $scope.error = err.toString();
      } else {
        $('#loginModal').modal('hide') ;
        $scope.loggedIn = true;
        $scope.error = "";
      } 
    });
  };
  $scope.registerClick = function(data) {
    UserService.create({
      username: data.username,
      email: data.email,
      password: data.password
    }, function(err, user) {
      if(err) {
        $scope.error = err.toString();
      }
      else {
        $('#loginModal').modal('hide');
        UserService.user = user;
        $scope.register = false;
        $scope.loginClick();
        $scope.error = "";
      }
    });
  };

  $scope.logout = function () {
    UserService.logout();
    $scope.loggedIn = false;
    $scope.user = {};
  };

  
});