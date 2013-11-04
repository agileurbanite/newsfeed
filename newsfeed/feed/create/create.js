steal('can', 'newsfeed/models/feed.js', './init.ejs', 'jquery/dom/form_params',
	function (can, Feed, initEJS) {

	/**
	 * @constructor newsfeed/feed/create
	 * @alias FeedCreate
	 * @parent newsfeed
	 * @inherits can.Control
	 * Creates feeds
	 */
	return can.Control(
	/** @Prototype */
	{
		/**
		 *  Render the initial template
		 */
		init: function () {
			this.element.html(initEJS());
		},
		/**
		 *  Submit handler. Create a new feed from the form.
		 */
		submit: function (el, ev) {
			ev.preventDefault();
			el.find('[type=submit]').val('Creating...')
			new Feed(el.formParams()).save(function() {
				el.find('[type=submit]').val('Create');
				el[0].reset()
			});
		}
	});
});