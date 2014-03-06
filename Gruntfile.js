module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        jshint: {
            options: {
                node: true
            },
            lib: {
                files: {
                    src: [
                        '**/*.js',
                        '!node_modules/**/*.js',
                        '!test/**/*.js'
                    ]
                }
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                },
                src: ['test/**/*.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.registerTask('default', ['jshint', 'mochaTest']);
};
