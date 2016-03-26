var express = require('express'),
    app     = express(),
    port 	= process.env.PORT || 3000;


app.get("/",function (req,res) {
	console.log(req.headers)

});



app.listen(port,function(){
	console.log("Server Started on port " + 3000);
})