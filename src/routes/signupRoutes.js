const express=require('express');
//for express router
const signupRouter=express.Router();

const Signupdata=require("../model/Signupdata");

function router(nav){


    signupRouter.get('/',function(req,res){
            res.render("LIBsignup",
                { nav,
                title:'Library',
                // books
    
            });
            });
            signupRouter.post('/add',function(req,res){
              
                 var item={
                    username:req.body.username,
                    email:req.body.email,
                    address:req.body.address,
                    phno:req.body.phno,
                    passid:req.body.passid,
                    dob:req.body.dob,
                    // gender:req.body.gender,
                    // gender:req.body.gender,
                    // gender:req.body.gender,
                    desc:req.body.desc
                };
                var book = Signupdata(item);
                book.save();
                // res.redirect('/LIBbooks');
                res.redirect('/index');
                
            });
    return signupRouter;
}

module.exports = router;