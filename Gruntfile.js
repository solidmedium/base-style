module.exports = function(grunt) {
	grunt.initConfig({
		less: {
			style: {
				files: {
					'source/css/style.css': ['source/less/style.less']
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
				tasks: ['less:style','notify:less']
			},
			libraries: {
				files: ['source/js/libraries/*.js'],
				tasks: ['concat','notify:concat']
			},
			custom: {
				files: ['source/js/custom.js'],
				tasks: ['jshint','notify:jshint']
			},
			minify: {
				files: ['source/js/lib-combined.js'],
				tasks: ['uglify','notify:uglify']
			}
		},
		notify: {
			less: {
				options: {
					title: 'LESS TASK COMPLETE',
					message: 'Everything in less/style.less has been compiled to css/style.css'
				}
			},
			concat: {
				options: {
					title: 'JS CONCAT TASK COMPLETE',
					message: 'Everything in js/libraries/is complied to js/lib-combined.js'
				}
			},
			jshint: {
				options: {
					title: 'JS HINT TASK COMPLETE',
					max_jshint_notifications: 5,
					message: 'js/custom.js is lint free'
				}
			},
			uglify: {
				options: {
					title: 'JS UGLIFY TASK COMPLETE',
					message: 'js/lib-combined.js has been minified to js/lib-combined.min.js'
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
	grunt.registerTask('default', ['watch','less','concat','jshint','uglify']);
};