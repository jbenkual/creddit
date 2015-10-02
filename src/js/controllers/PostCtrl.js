app.controller('PostCtrl', function($scope, UserService, PostService) {
  $scope.post = {};
  $scope.user = UserService.user;
  $scope.placeholderText = "Don't have a link? Type something interesting here instead!";
  $scope.charLimit = 1000;
  console.log(PostService.posts);

  $scope.submitClick = function () {
    if($scope.post.title === undefined) {
      return;
    }
    if($scope.post.desc === undefined) {
      $scope.post.desc = "";
    }
    if($scope.post.link === undefined) {
      $scope.post.link = "";
    }
    if($scope.post.link.length + $scope.post.desc.length <= 0) { 
      return;
    }
    console.log("submit pressed");
    PostService.create($scope.user.uid, $scope.post, function(data) {
      $scope.post = {};
      console.log(data);
    });


  };
});