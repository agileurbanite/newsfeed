steal(
	'newsfeed/feed/create',
	'newsfeed/feed/list',
	'./models/fixtures/fixtures.js',
function(FeedCreate, FeedList){
	
	new FeedList('.feeds');
	new FeedCreate('#create');
})