var gulp = require('gulp');
    ws = require('./gulpfile.webserver')
    build = require('./gulpfile.build'),




gulp.task('ws', ['webserver']);
gulp.task('bu', ['tpl2js']);
// gulp.task('deploy', ['defualt']);