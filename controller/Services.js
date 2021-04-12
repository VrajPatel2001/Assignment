const express = require('express')
const router = express.Router();
const userModel = require("../model/User");
const movieModel = require("../model/Movies.js");
require("dotenv").config({ path: 'keys.env' });
const isLoggedIn = require("../middleware/auth.js");
const userDashboard = require("../middleware/authorization.js");
const isAdmin= require("../middleware/identifyAdmin.js");


router.get("/createMovie",isLoggedIn,isAdmin,(req,res)=>{

})

router.get("/updateMovie",isLoggedIn,isAdmin,(req,res)=>{

})

router.get("/deleteMovie",isLoggedIn,isAdmin,(req,res)=>{

})

module.exports = router;
