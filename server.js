let http = require('http');
let users = [
    {id:3333,name:'zhufeng1'},
    {id:224,name:'zhufenffg2'},
    {id:227,name:'zhufeng3'}
]
let server = http.createServer(function(req,res){
  res.setHeader('Access-Control-Allow-Origin','*');
  if(req.url === '/api/users'){
      res.end(JSON.stringify(users));
  }else{
      res.end('Not Found');
  }
});
server.listen(3000,()=>{
    console.log('后端API接口服务器已经启动在3000端口！')
});