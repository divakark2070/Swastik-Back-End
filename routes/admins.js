var express = require("express");
var mongoose = require("mongoose");
var Admin = require("../models/Admin");
let fs = require("fs");

let router = express.Router();

// router.post("/save", async(req,res)=>{
//     let body = req.body;
//     let admin = new Admin();
//     if (body.data.id !=""){
//         admin = await Admin.findById(body.data.id);
//     }
//     admin.name = body.data.name;
//     admin.username = body.data.username;
//     admin.password = body.data.password;

//     admin.save().then((result)=>{
//         res.end(JSON.stringify({status:"success", data:result}))
//     },(err)=>{
//         res.end(JSON.stringify({status:"failed", data:err}))
//     })
// });

router.post("/",(req,res)=>{
    let body = req.body;
    let admins = new Admin(
        {
            name:body.name,
            username:body.username,
            password:body.password
        }
    );
    admins.save().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}))
    });
});

// router.post("/list", async(req,res)=>{
//     let admin = await Admin.find();
//     // console.log(admin);
//     res.end(JSON.stringify({status:"success", data:admin}));
// },(err)=>{
//     res.end(JSON.stringify({status:"failed", data:err}));
// });

router.get("/",(req,res)=>{
    Admin.find().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});

// router.post("/get", async(req,res)=>{
//     let body = req.body;
//     let admin = await Admin.findById(body.data.id);
//     res.end(JSON.stringify({status:"success", data:admin}));
// });

router.get("/:id",(req,res)=>{
    Admin.findById(req.params.id).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});

router.put("/:id",(req,res)=>{
    let body = req.body;
    Admin.findByIdAndUpdate(req.params.id, {name:body.name, username:body.username, password:body.password}).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});

// router.post("/delete", async(req,res)=>{
//     let body = req.body;
//     // console.log("delete : "+body);
//     await Admin.findByIdAndDelete(body.data.id);
//     res.end(JSON.stringify({status:"success"}));
// });

router.delete("/:id",(req,res)=>{
    Admin.findByIdAndDelete(req.params.id).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});




module.exports = router;