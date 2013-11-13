steal(
	'newsfeed/feed/list',
	'./models/fixtures/fixtures.js',
function(FeedList){
	new FeedList('.feeds');
}).then(function() {
  $(window).scroll(function() {
    if($(window).scrollTop() >= $(document).height() - $(window).height()) {
      $('div#loadmoreajaxloader').show();
      $('.feeds').addClass('loading');
      if ($('.feeds').hasClass('loading')) {
        $('.feeds').removeClass('loading');
        $('body').trigger('feedlist');
      }
    }
  });
});