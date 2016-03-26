var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    useragent = require('express-useragent');



app.use(useragent.express());


app.get("/", function(req, res) {
    var metadata = {
        browser: req.useragent.browser,
        OS: req.useragent.os,
        language: req.headers["accept-language"],
        clientIp: req.connection.remoteAddress,
    }




    res.send(metadata);


});



app.listen(port, function() {
    console.log("Server Started on port " + 3000);
})
