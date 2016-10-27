var gulp = require('gulp');
var webserver = require('gulp-webserver');
var url = require('url');
var tmpl2js = require('gulp-tmpl2js');

var through = require('through2');

function prefixStream(prefixText) {
  var stream = through();
  stream.write(prefixText);
  return stream;
}

// 插件级别函数 (处理文件)
function gulpPrefixer(render) {
// console.log(prefixText)
  // if (!prefixText) {
  //   throw new PluginError(PLUGIN_NAME, 'Missing prefix text!');
  // }
  // prefixText = new Buffer(prefixText); // 预先分配

  // 创建一个让每个文件通过的 stream 通道
  return through.obj(function(file, enc, cb) {
    var str = file.contents.toString();
    render(str);
    console.log(str);
    console.log('aaaa');

    // if (file.isNull()) {
    //   // 返回空文件
    //   cb(null, file);
    // }
    // if (file.isBuffer()) {
    //   file.contents = Buffer.concat([prefixText, file.contents]);
    // }
    // if (file.isStream()) {
    //   file.contents = file.contents.pipe(prefixStream(prefixText));
    // }

    // cb(null, file);

  });

};

gulp.task('ws', function () {
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
            if (/\.tpl.js/.test(pn)) {
                return gulp.src('./tpl/index.tpl')
                    .pipe(tmpl2js())
                    .pipe(
                        through.obj(
                            function(file, enc, cb) {
                                var str = file.contents.toString();
                                console.log(str);
                                res.end(str);
                                cb(null, file);
                            }
                        )
                    ).on('finish', function () {
                        res.end('var b = aaa');
                        console.log('finish');
                        next();
                    });
                console.log(tpl);
                res.setHeader('Content-Type', 'application/javascript');
                // res.end('var b = aaa');
                // res.setHeader('Content-Type', 'application/json');
                // res.end(JSON.stringify(data));
                console.log('xxxx');
            }
            // next();
            // switch (urlObj.pathname) {
            //     case '/api/orders':
            //         var data = {
            //             "status": 0,
            //             "errmsg": "",
            //             "data": [{}]
            //         };
            //         res.setHeader('Content-Type', 'application/json');
            //         res.end(JSON.stringify(data));
            //         return;
            //     case :
            //         // ...
            //         return;
            //     case '/api/images':
            //         // ...
            //         return;
            //     default:
            //         ;
            // }
        }

    }));
});