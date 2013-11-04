module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      compass: {
        files: 'newsfeed/sass/**',
        tasks: ['compass']
      }
    },
    compass: {
      options: {
        config: 'config/compass.rb'
      },
      dev: {
        options: {}
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('default', ['compass']);
};