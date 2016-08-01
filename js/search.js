/*globals lunr: true */

$(function() {
  console.log("Setting up search", $);


  var index = lunr(function () {
    this.field('id');
    this.field('title', { boost: 25 });
    this.field('category');
    this.field('content', { boost: 10 });
  });

  console.log("Created index");
  var fetch = $.getJSON('index.json');

  fetch.fail(function(error) {
    console.log("Error getting index", error);
  });

  fetch.done(function(data) {
    console.log("Got post data", data);
    data.forEach(function(post) {
      index.add(post);
    });
    console.log("Got results", index.search('share'));

  });
});
