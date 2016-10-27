var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    url = require('url'),
    html2js = require('html2js'),
    less = require('less'),
    path = require('path'),
    fs = require('fs');

gulp.task('webserver', function () {
  gulp.src('./')
    .pipe(webserver({
        livereload: true,
        directoryListing: true,
        // open: true,
        port: 8000,
        // open: 'http://page.gzh.qq.com/app.html',
        middleware: function(req, res, next) {
            var urlObj = url.parse(req.url, true),
                method = req.method;
            var pn = urlObj.pathname;
            var localPath = __dirname + urlObj.path;
            if (/\.html.js$/.test(pn)) {
                var tplPath = localPath.replace(/.js$/, '');
                if (fs.existsSync(tplPath)) {
                    var file = fs.readFileSync(tplPath, 'utf-8');
                    res.setHeader('Content-Type', 'application/javascript');
                    res.end(html2js(file, {
                        mode: 'compress',
                        wrap: 'amd'
                    }));
                }

            }
            // else if (/\.css$/.test(pn)) {
            //     var lessPath = localPath.replace(/\.css$/, '.less');
            //     if (fs.existsSync(lessPath)) {
            //         var file = fs.readFileSync(lessPath, 'utf-8');
            //         less.render(file, {
            //             paths: [ path.join(__dirname, 'css')]
            //         }, function (err, output) {
            //             if (err) {
            //                 console.log(err);
            //                 return next(err);
            //             }
            //             res.setHeader('Content-Type', 'text/css; charset=utf-8');
            //             res.end(output.css);
            //             next();
            //         });
            //     }
            //     return;
            // }
            next();

        }

    }));
});