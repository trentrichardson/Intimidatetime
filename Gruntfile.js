'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		// Metadata.
		pkg: grunt.file.readJSON('Intimidatetime.jquery.json'),
		banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
			'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
			'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
			' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
		// Task configuration.
		clean: {
			files: ['dist']
		},
		copy: {
			dist: {
				files: [
					//{ src: 'src/index.html', dest: 'dist/index.html' },
					{ src: 'src/i18n/<%= pkg.name %>-*.js', dest: 'dist/i18n/', expand:true, flatten: true },
				]
			}
		},
		concat: {	
			dist: {
				options: {
					banner: '<%= banner %>',
					stripBanners: true
				},
				src: ['src/<%= pkg.name %>.js'],
				dest: 'dist/<%= pkg.name %>.js'
			},
			docs: {
				src: [
						'src/docs/header.html',
						'src/docs/intro.html',
						'src/docs/options.html',
						'src/docs/methods.html',
						'src/docs/events.html',
						'src/docs/formatting.html',
						'src/docs/i18n.html',
						'src/docs/examples.html',
						'src/docs/footer.html'
					],
				dest: 'dist/index.html'
			}
		},
		less: {
			dist: {
				options: {
				},
				files: {
					"dist/<%=pkg.name %>.css": "src/<%=pkg.name %>.less"
				}
			}
		},
		uglify: {
			options: {
				banner: '<%= banner %>'
			},
			dist: {
				src: '<%= concat.dist.dest %>',
				dest: 'dist/<%= pkg.name %>.min.js'
			},
		},
		cssmin: {
			options: {
				banner: '<%= banner %>'
			},
			dist: {
				src: 'dist/<%= pkg.name %>.css',
				dest: 'dist/<%= pkg.name %>.min.css'
			},
		},
		qunit: {
			files: ['test/**/*.html']
		},
		jshint: {
			gruntfile: {
				options: {
					jshintrc: '.jshintrc'
				},
				src: 'Gruntfile.js'
			},
			src: {
				options: {
					jshintrc: 'src/.jshintrc'
				},
				src: ['src/**/*.js']
			},
			test: {
				options: {
					jshintrc: 'test/.jshintrc'
				},
				src: ['test/**/*.js']
			},
		},
		watch: {
			gruntfile: {
				files: '<%= jshint.gruntfile.src %>',
				tasks: ['jshint:gruntfile']
			},
			src: {
				files: 'src/**',//'<%= jshint.src.src %>',
				tasks: ['jshint:src', 'clean', 'less', 'copy', 'concat', 'uglify', 'cssmin']
			},
			test: {
				files: '<%= jshint.test.src %>',
				tasks: ['jshint:test', 'qunit']
			},
		},
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task.
	grunt.registerTask('default', ['jshint', 'qunit', 'clean', 'less', 'copy', 'concat', 'uglify', 'cssmin']);

};
