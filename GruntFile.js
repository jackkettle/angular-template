/**
 * Created by Jack Kettle on 29/10/2014.
 */

module.exports = function (grunt) {
    grunt.initConfig({

        // concat all js files
        concat: {
          js: {
            src: ['js/dev/main.js', 'js/dev/**/*.js'],
            dest: 'js/dest/concat.js'
          },
          less: {
            src: ['less/dev/style.less', 'less/dev/**/*.less'],
            dest: 'less/dest/concat.less'
          }
        },
        
        // Compile specified less files
        less: {
            compile: {
                options: {
                    paths: ["less/dest/**"]
                },
                files: {
                    "css/style.css": "less/dest/concat.less"
                }
            }
        },
        
        // minifyjs
        uglify: {
            options: {
                compress: false,
                mangle: false,
                beautify: true
            },
            js: {
                files: {
                'js/dest/main.min.js': ['js/dest/concat.js']
                }
            }
        },
        
        watch: {
            scripts: {
                files: ["js/dev/**/*.js"],
                tasks: ['concat:js', 'uglify']
            },
            styles: {
                files: ["less/dev/**/*.less"],
                tasks: ['concat:less', 'less']
            }
        }

    });

    // Load tasks so we can use them
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // The dev task will be used during development
    grunt.registerTask("default", ["watch"]);
};