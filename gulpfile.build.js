var gulp = require('gulp'),
    tmpl2js = require('gulp-tmpl2js'),
    changed = require('gulp-changed'),
    webserver = require('gulp-webserver'),
    less = require('gulp-less'),
    path = require('path'),

    //当发生异常时提示错误 确保本地安装gulp-notify和gulp-plumber
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber');

var tplFiles = 'tpl/**/*.tpl';
var lessFiles = 'css/**/*.less';

gulp.task('tpl2js', function () {
    var ext = '.tpl.js';
    var tplPath = './tpl';
    return gulp.src(tplFiles)
        .pipe(changed(tplPath, {extension: ext}))
        .pipe(tmpl2js({
            mode: 'compress',
            wrap: 'amd',
            ext: ext,
        }))
        .pipe(gulp.dest(tplPath));
});

gulp.task('less', function () {
    var lessPath = './css';
    return gulp.src(lessFiles)
        .pipe(changed(lessPath, {extension: '.css'}))
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less({
            paths: [ path.join(__dirname, 'css', 'includes')]
        }))
        .pipe(gulp.dest(lessPath));
});

// gulp.task('watch', function () {
//     gulp.watch(tplFiles, ['tpl2js']);
//     gulp.watch(lessFiles, ['less']);
// });


gulp.task('default', ['watch', 'tpl2js', 'less']);
