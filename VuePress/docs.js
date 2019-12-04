// var spawn = require('child_process').spawn;
// free = spawn('pwd')
// free = spawn('yarn',['docs:dev'])
// free.stdout.on('data', function (data) {

//     console.log('standard output:\n' + data);

// });

// free.stderr.on('data', function (data) {

//     console.log('standard error output:\n' + data);

// });

// free.on('exit', function (code, signal) {

//     console.log('child process eixt ,exit:' + code);

// });

var connect = require('connect');
var serveStatic = require('serve-static');
// var dirName="E:/Projects/hybird-app1/platforms/android/assets/www";
var dirName="./docs/.vuepress/dist/";
connect().use(serveStatic(dirName)).listen(8080, function(){
    console.log('Server running on port 8080...');
});