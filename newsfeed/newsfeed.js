steal(
	'newsfeed/feed/list',
	'./models/fixtures/fixtures.js',
function(FeedList){
	new FeedList('.feeds');
}).then('newsfeed/vendor/waypoints.js', function() {
  console.log('feeds loaded');
});