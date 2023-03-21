var express = require("express");
var mongoose = require("mongoose");
var Recommendation = require("../models/Recommendation");
let fs = require("fs");

let router = express.Router();

router.post("/", async(req,res)=>{
    let body = req.body;
    let recommendations = new Recommendation(body);


    recommendations.save().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}))
    }).catch(err=>{
        res.end(JSON.stringify({status:"failed", data:err}))
    });
});

router.get("/", async(req,res)=>{
    Recommendation.find().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});

router.get("/:id", async(req,res)=>{
    Recommendation.findById(req.params.id).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:"Record Not Found"}));
    })
    
});

router.put("/:id",(req,res)=>{
    let body = req.body;
    Recommendation.findByIdAndUpdate(req.params.id,body).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});

router.delete("/:id",(req,res)=>{
    Recommendation.findByIdAndDelete(req.params.id).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});

module.exports = router;