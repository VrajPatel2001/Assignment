const express = require("express");
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static('public'));

const data = require("./FakeDB");

const featureMovies=data.getFeaturedMovies();
const movies = data.getAllmovies();
const tvShows = data.getAllTvShows();
const featureTvShows = data.getFeaturedTv();
console.log(featureTvShows[0].name);

app.get("/",(req,res)=>
{
    res.render("index",{title:"V-TV",featureMovies,movies,tvShows,featureTvShows});
})

app.get("/movies",(req,res)=>
{
    res.render("movie",{title:"Movies And TV-shows",movies,tvShows});
})



app.get("/signUp",(req,res)=>
{
    res.render("signUp",{title:"SignUP"}); 
})

app.post("/signUp",(req,res)=>
{
    const nameError = [];

    const name = req.body.name;
    
    if(name == "")
    {
        nameError.push("You must enter the name");
    }
    else if(name.length <2 )
    {
        nameError.push("Your name must be between 2 or more characters long");
    }

    const emailError = [];
   const email = req.body.email;
    if(email == "")
    {
        emailError.push("You must enter the email");
    }


    const passError = [];
    const password = req.body.password;
    let isNumber=0;
    for(let i=0;i<password.length;i++)
    {
        console.log(password[i]);
        const patt = /[0-9]/g;
        if(patt.test(password[i]))
        {
            isNumber = 1;
        } 
    }
    if(password == "")
    {
        passError.push("You must enter the password");
    }
    else if(isNumber == 0)
    {
        passError.push("Your password should contain atleast one number");
    }

    if(nameError.length>0 || emailError.length>0 || passError.length>0)
    {
        
        for(let i=0;i<passError.length;i++)
        {
            console.log(passError[i]);
        }
        
        res.render("signUp",{title:"SignUP",nameError,emailError,passError}); 
    }
    else{


        const sgMail = require('@sendgrid/mail')
        //('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')
 sgMail.setApiKey('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')
const msg = {
  to: email, // Change to your recipient
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
        res.render("dashboard",{title:"Dashboard",name:name});
    }
})

app.get("/login",(req,res)=>
{
    res.render("login",{title:"Login"});
})

app.post("/login",(req,res)=>
{
    const nameError = [];

    const name = req.body.username;
    
    if(name == "")
    {
        nameError.push("You must enter the name");
    }
   


    const passError = [];
    const password = req.body.password;
    
    if(password == "")
    {
        passError.push("You must enter the password");
    }
    

    if(nameError.length>0 || passError.length>0)
    {
        res.render("login",{title:"Login",nameError,passError}); 
    }
    else{
        res.render("index",{title:"V-TV"});
    }
})

app.get("/description/:id",(req,res)=>
{
    
   let id = req.params.id;
   const movie = data.getAMovieOrTv(id);
    res.render("description",{title:"Description",movie});
})

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
