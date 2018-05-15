var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
	var files = [
		'./main.css',
		'index.html',
		'./main.js'
	];
    browserSync.init(files, {
        server: {
            baseDir: "./"
        }
    });
});