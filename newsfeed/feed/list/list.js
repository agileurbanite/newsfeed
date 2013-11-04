steal('can', './init.ejs', 'newsfeed/models/feed.js',
function (can, initEJS, Feed) {
	/**
	 * @constructor newsfeed/feed/list
	 * @alias FeedList
	 * @parent newsfeed
	 * @inherits can.Control
	 * Lists feeds and lets you destroy them.
	 */
	return can.Control(
	/** @Static */
	{
		/**
		 * adding default options
		 */
		defaults : {
			Feed: Feed
		}
	},
	/** @Prototype */
	{
		/**
		 * Create a feed list, render it, and make a request for finding all feeds.
		 */
		init: function () {
			this.list = new Feed.List();
			this.element.html(initEJS(this.list));
			this.list.replace(Feed.findAll());
		},
		/**
		 * Click handler for destroy link.
		 */
		'.destroy click': function (el) {
			if (confirm("Are you sure you want to destroy?")) {
				el.closest('.feed').data('feed').destroy();
			}
		},
		/**
		 * Handler for feed creation.  Pushes to the list of instances.
		 */
		"{Feed} created": function (Model, ev, instance) {
			this.list.push(instance);
		}
	});
});