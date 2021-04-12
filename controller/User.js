const express = require('express')
const router = express.Router();
const userModel = require("../model/User");
require("dotenv").config({ path: 'keys.env' });
const bycrypt = require("bcryptjs");
const isLoggedIn = require("../middleware/auth.js");
const userDashboard = require("../middleware/authorization.js");
const isAdmin = require("../middleware/identifyAdmin.js");

router.get("/signUp", (req, res) => {
    res.render("User/signUp", { title: "SignUP" });
})

router.post("/signUp", (req, res) => {
    
    userModel.find()
        .then((users) => {

            const nameError = [];

            const newUser =
            {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
            if (newUser.name == "") {
                nameError.push("You must enter the name");
            }
            else if (newUser.name.length < 2) {
                nameError.push("Your name must be between 2 or more characters long");
            }
        
            const emailError = [];
        
            if (newUser.email == "") {
                emailError.push("You must enter the email");
            }
        
        
            const passError = [];
        
            let isNumber = 0;
            for (let i = 0; i < newUser.password.length; i++) {
                const patt = /[0-9]/g;
                if (patt.test(newUser.password[i])) {
                    isNumber = 1;
                }
            }
            if (newUser.password == "") {
                passError.push("You must enter the password");
            }
            else if (isNumber == 0) {
                passError.push("Your password should contain atleast one number");
            }
        

            users.forEach((user) => {
                if (user.email == newUser.email) {
                    emailError.push("This email is already registered.");
                   
                }})
   
        if (nameError.length > 0 || emailError.length > 0 || passError.length > 0) {
            res.render("User/signUp", { title: "SignUP", nameError, emailError, passError });
        }
        else {

            const user = new userModel(newUser);

            user.save()
                .then(() => {
                    const sgMail = require('@sendgrid/mail')
                    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
                    const msg = {
                        to: newUser.email, // Change to your recipient
                        from: 'vrajnp2001@gmail.com', // Change to your verified sender
                        subject: 'V-TV',
                        text: 'Hi, Welcome to V-TV',
                        html: '<strong>Thanks for sign up on V-TV. <br>Enjoy Free movies only on V-TV. <br>  </strong>',
                    }
                    sgMail
                        .send(msg)
                        .then(() => {
                            console.log('Email sent')
                        })
                        .catch((error) => {
                            console.error(error)
                        })
                       
                        res.redirect("/user/login");


                })
                .catch(err => console.log(`Error happened when adding user in the database: ${err}`));
            }
          })
        .catch(err => console.log(`Error happened when finding user in the database: ${err}`));

           


})



router.get("/login", (req, res) => {
    res.render("User/login", { title: "Login" });
})

router.post("/login", (req, res) => {

    const error = [];
 
    userModel.findOne({email:req.body.email})
    .then(user=>{ 
        //email is not found
        if(user==null)
        {
            error.push("Your email and/or password is incorrect");
            res.render("User/login", { title: "Login", error });
        } 
        //email is found
        else{
            bycrypt.compare(req.body.password,user.password)
            .then(isMatched=>{
                if(isMatched)
                {
                    //create session
                    req.session.userInfo = user;
                    
                   res.redirect("/user/dashboard");
                    
                }
                else{
                    error.push(" Your email and/or password is incorrect");
                    res.render("User/login", { title: "Login", error });
                }
            })
    .catch(err => console.log(`Error happened when compare password: ${err}`));

        }
    })
    .catch(err => console.log(`Error happened when finding user in the database during login: ${err}`));
    

   
})

router.get("/dashboard",isLoggedIn,userDashboard);

router.get("/admin-profile",isLoggedIn,isAdmin,(req,res)=>{
    res.render("User/admin-profile", { title: "Admin-Profile" });

})

router.get("/logout",(req,res)=>{

req.session.destroy();
res.redirect("/user/login");

})

module.exports = router;
