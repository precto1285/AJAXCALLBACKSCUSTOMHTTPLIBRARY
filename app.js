const http = new easyHTTP;

// Get Posts
const posts = http.get('https://jsonplaceholder.typicode.com/posts', function (err, post) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

console.log(posts);