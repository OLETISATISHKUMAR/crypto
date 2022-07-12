const mongoose = require("mongoose")

const CryptoSchema = mongoose.Schema({
    nonce:{
        type:Number,
        required:true,
        unique:true
    },
    precedingHash:{
        type:String,
        required:Boolean,
        unique:true,
    },
    currentHash:{
        type:String,
        required:Boolean,
        unique:true,
    },
    data:{
        type:String,
        required:Boolean
    },
    timeStamp:{
        type:Date,
        required:Boolean
    }
},{
    timestamps:true
})

module.exports = mongoose.Model("Crypto",CryptoSchema)