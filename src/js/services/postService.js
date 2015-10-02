app.service('PostService', function(Auth, $firebaseArray) {
  var postsRef = new Firebase("https://credditor.firebaseio.com/posts");
  this.posts = $firebaseArray(postsRef);
  this.create = function (uid, post, cb) {
    this.posts.$add({
      author: uid,
      title: post.title,
      link: post.link,
      desc: post.desc,
      comments: [],
      score 
    }).then(function(ref) {
      console.log("add post ", ref);
      cb(ref);
    });
  };
});