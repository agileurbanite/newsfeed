//js newsfeed/scripts/build.js

load("steal/rhino/rhino.js");
steal('steal/build',function(){
	steal.build('newsfeed/scripts/build.html',{to: 'newsfeed'});
});
