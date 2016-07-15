var minifyAll = require("minify-all");

minifyAll("./test", { silent: true ,type: 'sqwish'}, function(err){
    if(err){
        console.log(err);
    }
});