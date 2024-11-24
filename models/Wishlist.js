const Joi = require('joi');
const { string } = require('joi');
const mongoose = require('mongoose'); 
const { ENUM } = require('sequelize');
const { INTEGER } = require('sequelize');
const { STRING } = require('sequelize');

const wishlistschema = new mongoose.Schema({
    Productlist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }],
    total: {
        type: Number,  
    },
    Productnumber :{
        type: String,
        required: true
    },
    user :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required: true
    }
}, {
    timestamps: true
});

const Wishlist = mongoose.model("Wishlist", wishlistschema);
module.exports = { Wishlist };
