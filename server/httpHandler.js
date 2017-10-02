exports.main = function(req,res){
    const path = req.url;
    res.write("hello worlds. you requested " + path);
    res.end();
});