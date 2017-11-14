module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
   // CONFIG ===================================/

    watch: {
      compass: {
        files: ['public/styles/**/*.{scss,sass}'],
        tasks: ['compass:dev']
      },
      js: {
        files: ['public/js/js-main/*.js'],
        tasks: ['uglify']
      },
      css: {
        files: ['public/styles/css/*.css'],
        tasks: ['cssmin']
      }
    },
    compass: {
      dev: {
        options: {              
          sassDir: ['public/styles/sass'],
          cssDir: ['public/styles/css'],
          environment: 'development'
        }
      },
    },
    uglify: {
      all: {
        files: {
            'public/js/dist/main.min.js': [

              'public/js/js-main/scripts.js'

            ]
          }
      },
    },
    cssmin: {
      dist: {
        options: {
           banner: '/*! man.js 1.0.0 | Sevensigns (@Sevensigns) | MIT Licensed */'
        },
        files: {
           'public/styles/dist/main.min.css': [

              'public/styles/css/main.css'

           ]
        }
      }
    },

  });

  // DEPENDENT PLUGINS =========================/

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // TASKS =====================================/

  grunt.registerTask('default', ['compass:dev' , 'uglify' , 'watch', 'cssmin']);

};