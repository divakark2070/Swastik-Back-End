let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let schema = new Schema(
    {
        adminid:{type:String, required:true},
        cropid:{type:String, required:true},
        rdate:{type:String, required:true},
        dose:{type:String, required:true},
        space:{type:String, required:true},
        drip:{type:String, required:true},
        sparewater:{type:String, required:true}
    }
)

let Recommendation = mongoose.model("recommendations",schema);
module.exports = Recommendation;