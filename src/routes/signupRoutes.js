const express=require('express');
//for express router
const signupRouter=express.Router();
function router(nav){


    signupRouter.get('/',function(req,res){
            res.render("LIBsignup",
                { nav,
                title:'Library',
                // books
    
            });
            });
    return signupRouter;
}

module.exports = router;