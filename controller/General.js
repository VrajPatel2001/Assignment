const express = require('express')
const router = express.Router();
const movieModel = require("../model/Movies");



/*GENERAL ROUTES*/
//Route to direct user to home page
router.get("/",(req,res)=>
{
    movieModel.find()
    .then((items)=>{

        const featureMovies = new Array;
        let length=0;
        for(var i in items)
        {
    length++;
        }
        for(let i=0;i<length;i++)
        {
    
            if(items[i].feature == '1' && items[i].type=='movie')
            {featureMovies.push(items[i]);}
        }
        
        const featureTvShows = new Array;
        length=0;
        for(var i in items)
        {
    length++;
        }
        for(let i=0;i<length;i++)
        {
    
            if(items[i].feature == '1' && items[i].type=='tv')
            {featureTvShows.push(items[i]);}
        }
       

    res.render("General/index",{title:"V-TV",featureMovies,featureTvShows});

})
.catch(err=>console.log(`Error happened when inserting in the database: ${err}`));

});

module.exports=router;

