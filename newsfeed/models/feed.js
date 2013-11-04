steal('can', function (can) {
	/**
	 * @constructor newsfeed/models/feed
	 * @alias Feed
	 * @parent newsfeed
	 * @inherits can.Model
	 *
	 * Wraps backend feed services.
	 */
	return can.Model(
	/* @static */
	{
		/**
 		 * Find all feeds
		 */
		findAll : "GET /feeds",
		/**
 		 * Find one feed
		 */
		findOne : "GET /feeds/{id}",
		/**
 		 * Create a feed
		 */
		create : "POST /feeds",
		/**
		 * Update a feed
		 */
		update : "PUT /feeds/{id}",
		/**
		 * Destroy a feed
		 */
		destroy : "DELETE /feeds/{id}"
	},
	/* @Prototype */
	{});
});