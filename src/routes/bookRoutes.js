const express=require('express');
//for express router
const bookRouter=express.Router();
function router(navb){


    bookRouter.get('/',function(req,res){
            res.render("LIBbooks",
                { navb,
                title:'Library',
                // books
    
            });
            });
    return bookRouter;
}

module.exports = router;