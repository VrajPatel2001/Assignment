const express = require('express')
const router = express.Router();
const userModel = require("../model/User");
const movieModel = require("../model/Movies.js");
require("dotenv").config({ path: 'keys.env' });
const isLoggedIn = require("../middleware/auth.js");
const userDashboard = require("../middleware/authorization.js");
const isAdmin= require("../middleware/identifyAdmin.js");
const isUser= require("../middleware/isUser.js");
const path = require("path");

router.get("/createMovie",isLoggedIn,isAdmin,(req,res)=>{
res.render("Services/createMovie.handlebars");
})

router.post("/createMovie",isLoggedIn,isAdmin,(req,res)=>{

    const newMovie= {
        name:req.body.name,
        description:req.body.description,
        feature: req.body.feature,
        type:req.body.type,
        r_price:req.body.r_price,
        p_price:req.body.p_price,
        
    }

    const errors = [];
    if(newMovie.name=="")
    {
        errors.push("Please Enter a name");
    }

    if(newMovie.description=="")
    {
        errors.push("Please Enter description");
    }

    if(newMovie.r_price=="")
    {
        errors.push("Please Enter a rent price");
    }

    if(newMovie.r_price < 0)
    {
        errors.push("Please Enter a valid rent price");
    }

    if(newMovie.p_price=="")
    {
        errors.push("Please Enter a buy price");
    }

    if(newMovie.p_price < 0)
    {
        errors.push("Please Enter a valid buy price");
    }

    if (!req.files || Object.keys(req.files).length === 0) {
        errors.push("Please insert both images");
        
      }
      else if(Object.keys(req.files).length === 1)
      {
        errors.push("Please insert all required images");

      }
      else{
        //   if(req.files.image.mimetype != ".jpg" && req.files.image.mimetype != ".jpeg" && req.files.image.mimetype != "png" && req.files.image.mimetype != "gif" && req.files.coverImage.mimetype != "jpg" && req.files.coverImage.mimetype != "jpeg" && req.files.coverImage.mimetype != "png" && req.files.coverImage.mimetype != "gif" && req.files.image.mimetype != "JPG" && req.files.image.mimetype != "JPEG" && req.files.image.mimetype != "PNG" && req.files.image.mimetype != "GIF" &&req.files.coverImage.mimetype != "JPG" && req.files.coverImage.mimetype != "JPEG" && req.files.coverImage.mimetype != "PNG" && req.files.coverImage.mimetype != "GIF")
        //   {
        //    errors.push("Please insert only images");
        //   }

          
          if(path.parse(req.files.coverImage.name).ext != ".jpg" && path.parse(req.files.coverImage.name).ext != ".png" && path.parse(req.files.coverImage.name).ext != ".jpeg" && path.parse(req.files.coverImage.name).ext != ".gif" &&
          path.parse(req.files.coverImage.name).ext != ".JPG" && path.parse(req.files.coverImage.name).ext != ".PNG" && path.parse(req.files.coverImage.name).ext != ".JPEG" && path.parse(req.files.coverImage.name).ext != ".GIF" &&
          path.parse(req.files.image.name).ext != ".jpg" && path.parse(req.files.image.name).ext != ".png" && path.parse(req.files.image.name).ext != ".jpeg" && path.parse(req.files.image.name).ext != ".gif" &&
          path.parse(req.files.image.name).ext != ".JPG" && path.parse(req.files.image.name).ext != ".PNG" && path.parse(req.files.image.name).ext != ".JPEG" && path.parse(req.files.image.name).ext != ".GIF")
         {
            errors.push("Please insert only images");
         }
      }


    if(errors.length >0)
    {
        
        res.render("Services/createMovie",{title:"Create Movie",errors});
    }
    else{
        const movie = new movieModel(newMovie);
        movie.save()
        .then((movie)=>{
            req.files.image.name = `${movie._id}${req.files.image.name}${path.parse(req.files.image.name).ext}`;

            req.files.image.mv(`public/images/${req.files.image.name}`)
            .then(()=>{
                    movieModel.updateOne({_id:movie._id},{
                        image: `/images/${req.files.image.name}`
                    })
                    .then(()=>{

                        req.files.coverImage.name = `${movie._id}${req.files.coverImage.name}${path.parse(req.files.coverImage.name).ext}`;

                    req.files.image.mv(`public/images/${req.files.coverImage.name}`)
                    .then(()=>{

                    movieModel.updateOne({_id:movie._id},{
                        b_image: `/images/${req.files.coverImage.name}`
                    })
                    .then(()=>{

                        res.redirect("/moviesAndTv/movies");
                    })
                    .catch(err=>console.log(`Error while updating in creating new movie ${err}`));
            })
            .catch(err=>console.log(`Error while adding image ${err}`));



                  })
                    .catch(err=>console.log(`Error while updating in creating new movie ${err}`));
            })
            .catch(err=>console.log(`Error while adding image ${err}`));

        })
        .catch(err=>console.log(`Error while creating new movie ${err}`));
    }



})

router.get("/updateMovie",isLoggedIn,isAdmin,(req,res)=>{

    movieModel.find()
    .then((items)=>{
   
    
    const movies = new Array;
    let length=0;
    for(var i in items)
    {
    length++;
    }
    for(let i=0;i<length;i++)
    {
        if(items[i].type=='movie')
        {movies.push(items[i]);}
    }

    const tvShows = new Array;
     length=0;
    for(var i in items)
    {
    length++;
    }
    for(let i=0;i<length;i++)
    {
        if(items[i].type=='tv')
        {tvShows.push(items[i]);}
    }
    res.render("Services/listForUpdate.handlebars",{title:"List for Update",movies,tvShows});
})
.catch(err=>console.log(`Error happened when inserting in the database: ${err}`));

})

router.get("/updateMovie/:id",isLoggedIn,isAdmin,(req,res)=>{

    movieModel.findById(req.params.id)
    .then((movie)=>{


        const data ={
            name: movie.name,
            feature: movie.feature,
            type: movie.type,
            description: movie.description,
            _id:movie._id,
            r_price: movie.r_price,
            p_price: movie.p_price,
            isMovie: 0,
            isTv: 0
        }

        
        if(data.type == "movie")
        {
            data.isMovie = 1;
        }
        else{
            data.isTv = 1;
        }
        res.render("Services/updateMovie.handlebars",{data});
    })
    .catch(err=>{`Error during find in update ${err}`});


})

router.put("/updateMovie/:id",isLoggedIn,isAdmin,(req,res)=>{

    const movie= {
        name:req.body.name,
        description:req.body.description,
        feature: req.body.feature,
        type:req.body.type,
        r_price:req.body.r_price,
        p_price:req.body.p_price,
        
    }

    const errors = [];
    if(movie.name=="")
    {
        errors.push("Please Enter a name");
    }

    if(movie.description=="")
    {
        errors.push("Please Enter description");
    }

    if(movie.r_price=="")
    {
        errors.push("Please Enter a rent price");
    }

    if(movie.r_price < 0)
    {
        errors.push("Please Enter a valid rent price");
    }

    if(movie.p_price=="")
    {
        errors.push("Please Enter a buy price");
    }

    if(movie.p_price < 0)
    {
        errors.push("Please Enter a valid buy price");
    }

    if (!req.files || Object.keys(req.files).length === 0) {
        errors.push("Please insert both images");
        
      }
      else if(Object.keys(req.files).length === 1)
      {
        errors.push("Please insert all required images");

      }
      else{
        //   if(req.files.image.mimetype != ".jpg" && req.files.image.mimetype != ".jpeg" && req.files.image.mimetype != "png" && req.files.image.mimetype != "gif" && req.files.coverImage.mimetype != "jpg" && req.files.coverImage.mimetype != "jpeg" && req.files.coverImage.mimetype != "png" && req.files.coverImage.mimetype != "gif" && req.files.image.mimetype != "JPG" && req.files.image.mimetype != "JPEG" && req.files.image.mimetype != "PNG" && req.files.image.mimetype != "GIF" &&req.files.coverImage.mimetype != "JPG" && req.files.coverImage.mimetype != "JPEG" && req.files.coverImage.mimetype != "PNG" && req.files.coverImage.mimetype != "GIF")
        //   {
        //    errors.push("Please insert only images");
        //   }

          
          if(path.parse(req.files.coverImage.name).ext != ".jpg" && path.parse(req.files.coverImage.name).ext != ".png" && path.parse(req.files.coverImage.name).ext != ".jpeg" && path.parse(req.files.coverImage.name).ext != ".gif" &&
          path.parse(req.files.coverImage.name).ext != ".JPG" && path.parse(req.files.coverImage.name).ext != ".PNG" && path.parse(req.files.coverImage.name).ext != ".JPEG" && path.parse(req.files.coverImage.name).ext != ".GIF" &&
          path.parse(req.files.image.name).ext != ".jpg" && path.parse(req.files.image.name).ext != ".png" && path.parse(req.files.image.name).ext != ".jpeg" && path.parse(req.files.image.name).ext != ".gif" &&
          path.parse(req.files.image.name).ext != ".JPG" && path.parse(req.files.image.name).ext != ".PNG" && path.parse(req.files.image.name).ext != ".JPEG" && path.parse(req.files.image.name).ext != ".GIF")
         {
            errors.push("Please insert only images");
         }
      }


    if(errors.length >0)
    {
        
        res.redirect(`/services/updateMovie/${req.params.id}`);
    }
    else{
        
        movieModel.updateOne({_id:req.params.id},movie)
        .then((movie)=>{

            req.files.image.name = `${movie._id}${req.files.image.name}${path.parse(req.files.image.name).ext}`;

            req.files.image.mv(`public/images/${req.files.image.name}`)
            .then(()=>{
                    movieModel.updateOne({_id:req.params.id},{
                        image: `/images/${req.files.image.name}`
                    })
                    .then(()=>{

                        req.files.coverImage.name = `${movie._id}${req.files.coverImage.name}${path.parse(req.files.coverImage.name).ext}`;

                    req.files.image.mv(`public/images/${req.files.coverImage.name}`)
                    .then(()=>{

                    movieModel.updateOne({_id:req.params.id},{
                        b_image: `/images/${req.files.coverImage.name}`
                    })
                    .then(()=>{

                        res.redirect("/moviesAndTv/movies");
                    })
                    .catch(err=>console.log(`Error while updating image in update movie ${err}`));
            })
            .catch(err=>console.log(`Error while adding image ${err}`));



                  })
                    .catch(err=>console.log(`Error while updating image in update movie ${err}`));
            })
            .catch(err=>console.log(`Error while adding image ${err}`));

        })
        .catch(err=>console.log(`Error while updating movie ${err}`));
    }

})

router.get("/deleteMovie",isLoggedIn,isAdmin,(req,res)=>{
    
    movieModel.find()
    .then((items)=>{
   
    
    const movies = new Array;
    let length=0;
    for(var i in items)
    {
    length++;
    }
    for(let i=0;i<length;i++)
    {
        if(items[i].type=='movie')
        {movies.push(items[i]);}
    }

    const tvShows = new Array;
     length=0;
    for(var i in items)
    {
    length++;
    }
    for(let i=0;i<length;i++)
    {
        if(items[i].type=='tv')
        {tvShows.push(items[i]);}
    }
    res.render("Services/listForDelete.handlebars",{title:"List for Update",movies,tvShows});
})
.catch(err=>console.log(`Error happened when inserting in the database: ${err}`));
})


router.get("/deleteMovie/:id",isLoggedIn,isAdmin,(req,res)=>{
        movieModel.deleteOne({_id:req.params.id})
        .then(()=>{
            res.redirect("/moviesAndTv/movies");
            
        })
.catch(err=>console.log(`Error happened during deleting: ${err}`));
        
})

router.get("/search",(req,res)=>{
    const regex = new RegExp(`${req.query.search}`,'i');
    movieModel.find({ "name":{$regex:regex}})
    .then((movies)=>{

       
        res.render("Services/searchedMovies.handlebars",{movies});
    })
    .catch(err=>console.log(`Error happened during searching: ${err}`))
})

router.get("/rentCart/:id",isLoggedIn,isUser,(req,res)=>{
req.session.rentCart.push(req.params.id);
res.redirect("/services/cart");
    
})

router.get("/buyCart/:id",isLoggedIn,isUser,(req,res)=>{

    req.session.buyCart.push(req.params.id);
    res.redirect("/services/cart");
    
    
})


router.get("/cart",isLoggedIn,isUser,(req,res)=>{


})

module.exports = router;
