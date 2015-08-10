//引入http模块
var http = require('http');
//定义请求事件处理函数
var callback = function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Hello, world');
};
//创建一个server。。。处理http请求
var server = http.createServer(callback);
//监听在3000端口
server.listen(3000);

console.log("Server stared at port 3000;")
