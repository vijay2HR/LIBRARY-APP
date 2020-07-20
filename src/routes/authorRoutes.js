const express=require('express');
//for express router
const authorRouter=express.Router();
const Bookdata=require('../model/Bookdata'); //add here
function router(navb){
    // var books=[
    //     {
    //         title:'Tom and Jerry',
    //         author:'Joseph Barbera',
    //         genre:'Cartoon',
    //         img:"tom.jpg"
    //         },
    //     {
    //         title:'Harry Potter',
    //         author:'J K Rowling',
    //         genre:'Fantasy',
    //         img:"Harry.jpg"
    //         },
    //     {
    //         title:'Pathummayude Aadu',
    //         author:'Basheer',
    //         genre:'Drama',
    //         img:"basheer.jpg"
    //         }
    // ]

    authorRouter.get('/',function(req,res){
        Bookdata.find()//addhere
        .then(function(books){
            res.render("author",
                { navb,
                title:'Author',
                books
            });
        });
    });
    return authorRouter;
}

module.exports = router;