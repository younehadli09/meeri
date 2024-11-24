const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { Wishlist} = require('../models/Wishlist');
const { User } = require('../models/User');
const multer = require('multer');

router.get('/wishlistuser/:id',async (req,res)=>{

})
router.post('/createwishlistuser',async (req,res)=>{
    const user = await User.findById(req.params.id);
    
    if(!user){
        return res.status(404).json({success : false, message : 'User not found'});
    }else {
        const wishlist = new Wishlist({
            user : user._id,
            products : req.body.products
            
        });
        await wishlist.save();
        res.status(200).json({success : true, wishlist : wishlist});
    }
})