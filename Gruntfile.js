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
				src: '**/*.*',
				dest: 'web/'
			},
			ghpages: {
				expand: true,
				cwd: 'www/',
				src: '**/*.*',
				dest: './'
			},
			assets: {
				files: [
					{expand: true, cwd: 'node_modules/bootstrap/js/', src: ['**'], dest: '_site/public/js/vendor/', filter: 'isFile'},
					{expand: true, cwd: 'node_modules/jquery/dist/', src: ['**'], dest: '_site/public/js/vendor/', filter: 'isFile'},
					{expand: true, cwd: 'bower_components/html5shiv/dist/', src: ['**'], dest: '_site/public/js/vendor/', filter: 'isFile'},
					{expand: true, cwd: 'bower_components/jquery-cycle2/build/', src: ['**'], dest: '_site/public/js/vendor/', filter: 'isFile'},
					{expand: true, cwd: 'bower_components/matchMedia/build/', src: ['*.js'], dest: '_site/public/js/vendor/', filter: 'isFile'},
					{expand: true, cwd: 'bower_components/requirejs/', src: ['*.js'], dest: '_site/public/js/vendor/', filter: 'isFile'},
					{expand: true, cwd: 'bower_components/respond/dest/', src: ['**'], dest: '_site/public/js/vendor/', filter: 'isFile'}
				]
			}
		},
		less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "_site/public/css/bootstrap.css":"node_modules/bootstrap/less/bootstrap.less",
                    "_site/public/css/theme.css":"node_modules/bootstrap/less/theme.less"
                }
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