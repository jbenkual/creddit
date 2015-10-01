app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://docs-sandbox.firebaseio.com");
    return $firebaseAuth(ref);
  }
]);

app.service('UserService', function(Auth) {
  this.user = {};
  this.create = function(user, cb) {
    Auth.$createUser(user).then(function(userData) {
      this.user = userData;
      cb("", userData);
      console.log("Successfully created user account with uid:", userData.uid);
    }).catch(function(error) {
      cb(error);
      console.log("Error creating user:", error);
    });
  };

  this.all = function() {

  };

  this.login = function (user, cb) {
    Auth.$authWithPassword(user, function(error, authData) {
      if (error) {
        cb(error);
        console.log("Login Failed!", error);
      } else {
        cb("", authData);
        console.log("Authenticated successfully with payload:", authData);
      }
    });
  };
});