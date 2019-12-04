
var connect = require('connect');
var serveStatic = require('serve-static');
// dist 是最终生成的静态网站的目录
var dirName="./docs/.vuepress/dist/";
connect().use(serveStatic(dirName)).listen(8080, function(){
    console.log('Server running on port 8080...');
});