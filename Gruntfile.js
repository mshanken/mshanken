module.exports = function(grunt) {
	// load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    // show elapsed time at the end
    require('time-grunt')(grunt);
    
	grunt.initConfig({
		harp: {
			server: {
				server: true,
				source: '_site'
			},
			staticserver: {
				server:true,
				source: 'www',
				port: 8800
			},
			dist: {
				source: '_site',
				dest: 'www'
			}
		},
		copy: {
			web: {
				expand: true,
				cwd: 'www/',
				src: '*',
				dest: 'web/'
			},
			ghpages: {
				expand: true,
				cwd: 'www/',
				src: '*',
				dest: './'
			}
		}
	});

	grunt.registerTask('server', [
        'harp:server'
    ]);
	grunt.registerTask('compile', [
        'harp:dist'
    ]);
    grunt.registerTask('gh-pages', [
        'harp:dist',
        'copy:ghpages'
    ]);
};