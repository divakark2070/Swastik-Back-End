var express = require("express");
var mongoose = require("mongoose");
var Farmer = require("../models/Farmer");
let fs = require("fs");

let router = express.Router();

router.post("/", async(req,res)=>{
    let body = req.body;
    let farmers = new Farmer(body);


    farmers.save().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}))
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}))
    })
});

router.get("/", async(req,res)=>{
    Farmer.find().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});

router.get("/:id", async(req,res)=>{
    Farmer.findById(req.params.id).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
    // let body = req.body;
    // let farmers = await Farmer.findById(body.data.id);
    // res.end(JSON.stringify({status:"success", data:farmers}));
});

router.put("/:id",(req,res)=>{
    let body = req.body;
    Farmer.findByIdAndUpdate(req.params.id,body).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});

router.delete("/:id",(req,res)=>{
    Farmer.findByIdAndDelete(req.params.id).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});


module.exports = router;