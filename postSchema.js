const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    PropertyType:{
        type:String,
        default:"House"
    },
    Negotiable:{
        type:String,
        default:"Yes"
    },
    Price:Number,
    Ownership:{
        type:String,
        default:"sold"  
    },
    PropertyAge:{
        type:String,
        default:"New"  
    },
    PropertyApproved:String,
    PropertyDiscription:String,
    BankLoan:{
        type:String,
        default:"Yes" 
    },
    length:String,
    Breath:String,
    Area:String,
    AreaUnit:String,
    bhk:String,
    floor:String,
    Furnished:String,
    car:String,
    Lift:String,
    Electricity:String,
    Facing:String,
    name:String,
    mobile:Number,
    posted_by:String,
    sale:String,
    fp:String,
    Pp:String,
    Email:String,
    City:String,
    AreaField:String,
    Pincode:String,
    Address:String,
    Landmark:String,
    Latitude:String,
    Longitude:String
})

const  postModal = mongoose.model("post",postSchema)

module.exports = postModal;