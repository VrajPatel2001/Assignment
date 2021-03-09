const express = require("express");
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');


const app = express();


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static('public'));
const PORT = 3000;

const data = require("./FakeDB");

const featureMovies=data.getFeaturedMovies();
const movies = data.getAllmovies();
const tvShows = data.getAllTvShows();
const featureTvShows = data.getFeaturedTv();
console.log(featureTvShows[0].name);

app.get("/",(req,res)=>
{
    res.render("index",{featureMovies,movies,tvShows,featureTvShows});
})

app.get("/movies",(req,res)=>
{
    res.render("movie",{movies,tvShows});
})



app.get("/SignUp",(req,res)=>
{
    res.render("signUp"); 
})

app.post("/SignUp",(req,res)=>
{
    const nameError = [];

    const name = req.body.name;
    if(name == "")
    {
        nameError.push("You must enter the name");
    }
    else if(name.length <2 || name.length >12)
    {
        nameError.push("Your name must be between 2 and 12 characters long");
    }

    const emailError = [];
    const email = req.body.email;
    if(email == "")
    {
        emailError.push("You must enter the name");
    }


    const passError = [];
    const password = req.body.password;
    const isNumber=0;
    for(let i=0;i<password.length;i++)
    {

        if(password[i] == [0-9])
        {
            isNumber = 1;
        } 
    }
    if(passError == "")
    {
        passError.push("You must enter the name");
    }
    else if(isNumber == 0)
    {
        passError.push("Your password should contain atleast one number");
    }

    if(nameError.length>0 || emailError.length>0 || passError.length>0)
    {
        res.render("signUp",{nameError,emailError,passError}); 
    }
})

app.get("/Login",(req,res)=>
{
    res.render("login");
})

app.get("/description/:id",(req,res)=>
{
    
   let id = req.params.id;
   const movie = data.getAMovieOrTv(id);
    res.render("description",{movie});
})


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
