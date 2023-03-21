let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let schema = new Schema(
    {
        name:{type:String, required:true},
    }
)

let Crop = mongoose.model("crops",schema);
module.exports = Crop;