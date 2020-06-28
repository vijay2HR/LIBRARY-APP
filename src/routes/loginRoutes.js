const express=require('express');
//for express router
const loginRouter=express.Router();
const signupdata1=require('../model/Signupdata');
function router(nav){
    loginRouter.get('/',function(req,res){
            res.render("LIBlogin",
                { nav,
                title:'Library',
            });
            });
            loginRouter.get('/LogIn',function(req,res){
                var email1=req.query.email;
                var passid1=req.query.passid;
                signupdata1.find()
                .then(function(signupdatass){
                    for(i=0;i<signupdatass.length;i++){
                        if(signupdatass[i].email===email1&&signupdatass[i].passid===passid1){
                        res.redirect('/LIBlogged');
                        }
                    };
                });
            });
    return loginRouter;
}
module.exports = router;