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
	        compile : {
	            src: ['source/js/libraries/*.js'],
	            dest: 'source/js/lib-combined.js'
	        }
	    },
	    jshint: {
			files: ['source/js/custom.js']
		},
	    uglify: {
			min: {
                files: {
                    'source/js/lib-combined.min.js': ['source/js/lib-combined.js']
                }
            }
		},
		watch: {
			css: {
				files: ['source/less/*.less'],
				tasks: ['less:style','notify']
			},
			libraries: {
				files: ['source/js/libraries/*.js'],
				tasks: ['concat','notify']
			},
			minify: {
				files: ['source/js/lib-combined.js'],
				tasks: ['uglify','notify']
			},
			custom: {
				files: ['source/js/*.js'],
				tasks: ['jshint','notify']
			}
		},
		notify: {
			watch: {
				options: {
					title: 'GRUNT TASK COMPLETE',
					max_jshint_notifications: 5,
					message: 'You Are Awesome, Fucking Awesome!'
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