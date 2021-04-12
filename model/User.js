const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require("bcryptjs");


const userSchema = new Schema({
name:{
    type:String,
    required:true
},
email:
{
    type:String,
    required: true,
},
password:
{
    type:String,
    required: true
},
dateCreated:
{
    type: String,
    default:Date.now()

},
type:
{
    type: String,
    default:"user"
}

})

userSchema.pre("save",function(next)
{
    //Salt random generated characters or strings
    bcrypt.genSalt(10)
    .then((salt)=>{
        bcrypt.hash(this.password,salt)
        .then((encryptPassword)=>{
            this.password = encryptPassword;
            next();
        })
.catch(err=>console.log(`Error happened when hashing: ${err}`));

    })
.catch(err=>console.log(`Error happened when salting: ${err}`));




});
const userModel = mongoose.model('User', userSchema);

  module.exports = userModel; 