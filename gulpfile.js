const fileinclude = require('gulp-file-include');
const gulp = require('gulp');

gulp.task('publish', function() {
    gulp.src(['files/index.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./'));
});