module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    shell: {
        hologram: {
            command: 'hologram'
        }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'vendor/assets/stylesheets',
          src: ['*.sass'],
          dest: 'public',
          ext: '.css'
        }]
      }
    },
    watch: {
      css: {
        files: ['./vendor/assets/stylesheets/**/*.sass'],
        tasks: ['sass', 'shell:hologram']
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');


  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass', 'watch']);

};
