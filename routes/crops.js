var express = require("express");
var mongoose = require("mongoose");
var Crop = require("../models/Crop");
let fs = require("fs")

let router = express.Router();

router.post("/",async(req,res)=>{
    let body = req.body;
    let crops = new Crop(body)
    crops.save().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}))
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}))
    })
});

module.exports = router;
