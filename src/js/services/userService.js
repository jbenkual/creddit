
app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://docs-sandbox.firebaseio.com");
    return $firebaseAuth(ref);
  }
]);

app.service('UserService', function(Auth) {
  this.user = Auth.$getAuth();

  this.login = function (user, cb) {
    console.log("loggin in", user)
    Auth.$authWithPassword(user).then( function(authData) {
      cb("", authData);
      console.log("Authenticated successfully with payload:", authData);
    }).catch(function(error) {
      cb(error);
      console.log("Login Failed!", error);
    });
  };

  this.create = function(user, cb) {
    Auth.$createUser(user).then(function(userData) {
      cb("", userData)
      console.log("Successfully created user account with uid:", userData.uid);
    }).catch(function(error) {
      cb(error);
      console.log("Error creating user:", error);
    });
  };

  this.all = function() {

  };



  this.logout = function () {
    Auth.$unauth();
    this.user = {};
  };

  this.removeUser = function(user) {
    Auth.$removeUser(user).then(function() {
      console.log("User removed");
    }).catch(function(error) {
      console.error(error);
    });
  };
});