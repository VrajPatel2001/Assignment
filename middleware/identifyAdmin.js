const isAdmin = (req,res,next)=>{
    if(req.session.userInfo.type == "admin")
    {
        next();
    }
    else{
        res.redirect("/user/logout");
    }
}

module.exports = isAdmin;