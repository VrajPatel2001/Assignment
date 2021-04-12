const userDashboard = (req,res,next)=>
{
    if(req.session.userInfo.type == "admin")
    {
        res.redirect("/user/admin-profile");
    }
    else
    {
        res.render("User/dashboard.handlebars",{title:"User Profile"});
    }
}

module.exports = userDashboard; 