steal('can', function (can) {
	/**
	 * @constructor newsfeed/models/feed
	 * @alias Feed
	 * @parent newsfeed
	 * @inherits can.Model
	 *
	 * Wraps backend feed services.
	 */
	return can.Model('Feed',
	/* @static */
	{
    beginId: 0,
    take: 12,
    imageUrlBase: '/images/',
		/**
 		 * Find all feeds
		 */
		findAll : function(params) {
      return $.get("/GetNewsFeedGet", params);
    },
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