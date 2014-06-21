module.exports = function(grunt) {
	grunt.initConfig({
		less: {
			style: {
				files: {
					'source/css/style.css': 'source/less/style.less'
				}
			}
		},
		concat: {
	        js : {
	            src: ['source/js/libraries/*.js'],
	            dest: 'source/js/lib-combined.js'
	        }
	    },
	    jshint: {
			files: ['source/js/custom.js']
		},
	    uglify: {
			js: {
                files: {
                    'source/js/lib-combined.js': ['source/js/lib-combined.min.js']
                }
            }
		},
		watch: {
			css: {
				files: ['source/less/*.less'],
				tasks: ['less:style','notify:less']
			},
			libraries: {
				files: ['source/js/libraries/*.js'],
				tasks: ['concat','notify:less']
			},
			custom: {
				files: ['source/js/*.js'],
				tasks: ['jshint','notify:less']
			}
		},
		notify: {
			less: {
				options: {
					title: 'GRUNT TASK COMPLETE',
					message: 'You Are Awesome, Fucking Awesome!',
				}
			}
		}
        
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-notify');
	grunt.registerTask('default', ['watch']);
};