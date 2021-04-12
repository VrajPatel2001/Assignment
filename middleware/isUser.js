const isUser = (req,res,next)=>{
    if(req.session.userInfo.type == "user")
    {
        next();
    }
    else{
        res.render("Services/error");
    }
}

module.exports = isUser;