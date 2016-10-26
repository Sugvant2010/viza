var gulp = require('gulp');
var browsersync = require('browser-sync');
var include = require('gulp-file-include');
var config = require('../../config.js');
gulp.task('html', function() {
    return gulp.src([config.html.src, '*.html', 'components/*/**.html'])
        .pipe(include({
            context: {
                default: false
            },
            prefix: '@@',
            basepath: './app/layouts/components/'
        }))
        .pipe(gulp.dest(config.html.dest))
        .pipe(browsersync.stream());
});
