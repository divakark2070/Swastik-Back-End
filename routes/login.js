let express = require("express");
let bodyparser = require("body-parser");
let router = express.Router();

router.post("/", async(req,res)=>{
    let body = req.body;
    let status = "";
    if( body.username == "admin" && body.password == "admin")
        status = "success";
    else
        status = "failed";
    let data = {status:status};
    res.end(JSON.stringify(data));
});

module.exports = router;