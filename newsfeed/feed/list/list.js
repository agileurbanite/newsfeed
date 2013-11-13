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
      var self = this;
      this.list = new Feed.List();
      this.element.html(initEJS(this.list));
      Feed.findAll({"beginId": Feed.beginId, "take": Feed.take}).done(function(response) {
        self.list.replace(response);
        Feed.beginId = $('.feeds .feed:last').attr('id');
      });

      // list append
      $('body').bind('feedlist', function(ev, response) {
        $.when(Feed.findAll({"beginId": Feed.beginId, "take": Feed.take})).then(function(response) {
          $.each(response, function() {
            self.list.push(this);
          });
          $('div#loadmoreajaxloader').hide();
          Feed.beginId = $('.feeds .feed:last').attr('id');
        });
      });
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