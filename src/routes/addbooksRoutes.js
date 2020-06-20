const express=require('express');
//for express router
const addbooksRouter=express.Router();
function router(navb){


    addbooksRouter.get('/',function(req,res){
            res.render("addbooks",
                { navb,
                title:'Library',
                // books
    
            });
            });
    return addbooksRouter;
}

module.exports = router;