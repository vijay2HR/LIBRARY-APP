const express=require('express');
//for express router
const signupeddRouter=express.Router();
function router(navb){


    signupeddRouter.get('/',function(req,res){
            res.render("LIBlogged",
                { navb,
                title:'Library',
                // books
    
            });
            });
    return signupeddRouter;
}

module.exports = router;