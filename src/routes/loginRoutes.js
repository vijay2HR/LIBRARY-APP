const express=require('express');
//for express router
const loginRouter=express.Router();
function router(nav){


    loginRouter.get('/',function(req,res){
            res.render("LIBlogin",
                { nav,
                title:'Library',
                // books
    
            });
            });
    return loginRouter;
}

module.exports = router;