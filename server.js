const express = require("express");
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');



require("dotenv").config({ path: './config/keys.env' });

//import routes objects

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));



// Express And handlebars
app.engine('handlebars', exphbs());
const Handlebars = require('handlebars');
const expressHandlebars = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');

app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.engine('handlebars', expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));

const generalRoutes = require("./controller/General");
const moviesRoutes = require("./controller/Movies");
const userRoutes = require("./controller/User");



app.use(session({
    secret: `${process.env.SECRET_KEY}`,
    resave: false,
    saveUninitialized: true,
  }))

 app.use((req,res,next)=>{
      res.locals.user = req.session.userInfo;
      next();
  })



app.use("/", generalRoutes);
app.use("/user", userRoutes);
app.use("/moviesAndTv",moviesRoutes);





mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(`Connected to mondoDB`);
    })
    .catch(err => console.log(`Error occured when connecting to database ${err}`));



const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})