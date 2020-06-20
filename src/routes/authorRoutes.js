const express=require('express');
//for express router
const authorRouter=express.Router();
function router(navb){


    authorRouter.get('/',function(req,res){
            res.render("author",
                { navb,
                title:'Library',
                // books
    
            });
            });
    return authorRouter;
}

module.exports = router;