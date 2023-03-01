const mongoose=require('mongoose')

const userdetailTemplet=new mongoose.Schema({
    name :{
        type:String,
        require:true
    },
    userName :{
        type:String,
        require:true
    },
    avtar :{
        type:String,
    },
    about :{
        type:String,
    },
    bio :{
        type:String,
    },
    email :{
        type:String,
        require:true
    },
    contactNo :{
        type:String,
    },
    whatsappNo :{
        type:String,
    },
    twiter :{
        type:String,
    },
    inta :{
        type:String,
    },
    faceboook :{
        type:String,
    },
    linkdin :{
        type:String,
    },
    highestEducation :{
        degree :{
            type:String,
            require:true
        },
        collegeName :{
            type:String,
            require:true
        },
    },
    interest :{
        type:String,
        require:true
    },
    address :{
        country :{
            type:String,
            require:true
        },
        city :{
            type:String,
            require:true
        }
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('userdetail',userdetailTemplet)