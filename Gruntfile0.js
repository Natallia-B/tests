module.exports = function(grunt){
    grunt.initConfig({

    jshint: {
        pkg: grunt.file.readJSON('package.json'),
        options: {
          reporter: require('jshint-stylish') 
        },
           dest:'*.js',
           filter: 'isFile'
        // build: ['Gruntfile.js', '.js']
      }
      
   
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['jshint']); 
  
}
