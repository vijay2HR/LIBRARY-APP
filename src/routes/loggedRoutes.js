const express=require('express');
//for express router
const logedRouter=express.Router();
function router(navb){
    var books=[
        {
            title:'Tom and Jerry',
            author:'Joseph Barbera',
            genre:'Cartoon',
            img:"tom.jpg"
            },
        {
            title:'Harry Potter',
            author:'J K Rowling',
            genre:'Fantasy',
            img:"Harry.jpg"
            },
        {
            title:'Pathummayude Aadu',
            author:'Basheer',
            genre:'Drama',
            img:"basheer.jpg"
            }
    ]

    logedRouter.get('/',function(req,res){
            res.render("LIBlogged",
                { navb,
                title:'Library',
                books
    
            });
            });
    return logedRouter;
}

module.exports = router;