// map fixtures for this application
steal("can/util/fixture", function(fixture) {

	var store = fixture.store(5, function(i){
		return {
			name: "feed "+i,
			description: "feed " + i
		}
	});
	
	fixture({
		'GET /GetNewsFeedGet' : "newsfeed/models/fixtures/newsfeed2.json",
		'GET /feeds/{id}' : store.findOne,
		'POST /feeds' : store.create,
		'PUT /feeds/{id}' : store.update,
		'DELETE /feeds/{id}' : store.destroy
	});

	return store;
});