const express=require('express');
//for express router
const logedRouter=express.Router();
function router(navb){


    logedRouter.get('/',function(req,res){
            res.render("LIBlogged",
                { navb,
                title:'Library',
                // books
    
            });
            });
    return logedRouter;
}

module.exports = router;