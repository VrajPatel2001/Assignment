const express = require("express");
var exphbs  = require('express-handlebars');
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
