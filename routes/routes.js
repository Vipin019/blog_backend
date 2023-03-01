const express=require('express')
const userauthTempletCopy=require("../models/userauth")
const userdetailTempletCopy=require("../models/userdetail")
const allpostTempletCopy=require("../models/allpost")

const router=express.Router();


// userauth
router.post('/userauth',function(req,res){
    const userAuth=new userauthTempletCopy({
        name: req.body.name,
        userName: req.body.userName,
        email: req.body.email,
        passward: req.body.passward,
        dob: req.body.dob,
        contactNo: req.body.contactNo
    });
    userAuth.save()
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })

});

router.route('/userauth').get((req,res) => {
    userauthTempletCopy.find()
    .then(foundLink=>res.json(foundLink))
})

// userdetail

router.post('/userdetail',function(req,res){
    const userDetail=new userdetailTempletCopy({
        name: req.body.name,
        userName: req.body.userName,
        avtar: req.body.avtar,
        about: req.body.about,
        bio: req.body.bio,
        email: req.body.email,
        contactNo: req.body.contactNo,
        whatsappNo: req.body.whatsappNo,
        twiter: req.body.twiter,
        insta: req.body.insta,
        faceboook: req.body.faceboook,
        linkdin: req.body.linkdin,
        highestEducation:{
            degree: req.body.highestEducation.degree,
            collegeName: req.body.highestEducation.collegeName,
        },
        interest: req.body.interest,
        address:{
            counter: req.body.address.counter,
            city: req.body.address.city
        }
        
    });
    userDetail.save()
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })

});

router.route('/userdetail').get((req,res) => {
    userdetailTempletCopy.find()
    .then(foundLink=>res.json(foundLink))
})

// allpost
router.post('/allpost',function(req,res){
    const allPost=new allpostTempletCopy({
        postNo: req.body.postNo,
        userName: req.body.userName,
        post:{
            heading:req.body.post.heading,
            details:req.body.post.details
        }
    });
    allPost.save()
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })

});

router.route('/allpost').get((req,res) => {
    allpostTempletCopy.find()
    .then(foundLink=>res.json(foundLink))
})

module.exports=router; 