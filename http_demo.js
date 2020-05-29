const http = require("http")

const my_s = http.createServer();

my_s.on("request" , function(request , response){
    console.log("有人来访问服务器了...")
    // response.write("525")
    // response.end("123")

    
    response.setHeader("Content-Type" , "text/html; charset=utf-8")


    var tmp_url = request.url 
    var tmp_path = tmp_url.indexOf("?") == -1 ? tmp_url : tmp_url.split("?")[0]
    switch (tmp_path){
    case '/aaa':
      response.end("aaa界面")
      break;
    case '/bbb':
      response.end("bbb界面")
      break;
    default:
      response.end("404界面")
      break;
}
    response.end("123")

})











my_s.listen("3000" , function(){
    console.log("server is running on 3000...")
})