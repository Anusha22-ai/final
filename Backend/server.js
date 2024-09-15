var http=require('http');
http.createServer(function(req,res){

    const {url,method}=req
    if(url==="/login"){
        res.write("Login Page")
    }
    else if(url==="/signup"){
        res.write("Signup page")
    }
    else{
        res.write("Home page")
    }
    res.end()

}).listen(8080)