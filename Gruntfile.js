//this grunt file is wrong
module.exports = function(grunt) {
	grunt.initConfig({
		less: {
			style: {
				files: {
					'source/css/style.css": "source/css/less/style.less'
				}
			}
		},
        watch: {
			css: {
				files: ['source/css/less/*.less'],
				tasks: ['less:style']
			},
			js: {

			}
		},
		
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch']);
};