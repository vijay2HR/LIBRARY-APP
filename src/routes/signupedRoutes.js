const express=require('express');
//for express router
const signupeddRouter=express.Router();
function router(nav){


    signupeddRouter.get('/',function(req,res){
            res.render("index",
                { nav,
                title:'Library',
                // books
    
            });
            });
    return signupeddRouter;
}

module.exports = router;