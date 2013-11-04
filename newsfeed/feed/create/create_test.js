steal('funcunit', 
	'./create.js',
	'newsfeed/models/feed.js',
	'newsfeed/models/fixtures', 
	function (S, FeedCreate, Feed, feedStore ) {

	module("newsfeed/feed/create", {
		setup: function(){
			$("#qunit-test-area").append("<form id='create'></form>");
			new FeedCreate("#create");
		},
		teardown: function(){
			$("#qunit-test-area").empty();
			feedStore.reset();
		}
	});
	
	test("create feeds", function () {
		stop();
		
		Feed.bind("created",function(ev, feed){
			ok(true, "Ice Water added");
			equals(feed.name, "Ice Water", "name set correctly");
			equals(feed.description, 
				"Pour water in a glass. Add ice cubes.", 
				"description set correctly");
			start();
			Feed.unbind("created",arguments.callee);
		})
		
		S("[name=name]").type("Ice Water");
		S("[name=description]").type("Pour water in a glass. Add ice cubes.");
		
		S("[type=submit]").click();
		
		S("[type=submit]").val("Creating...","button text changed while created");
		S("[type=submit]").val("Create", function(){
			ok(true, "button text changed back after create");
			equals(S("[name=name]").val(), "", "form reset");
			equals(S("[name=description]").val(), "", "form reset");
		});
	});

});