const express=require('express');
//for express router
const bookRouter=express.Router();
const Bookdata=require('../model/Bookdata'); //add here
function router(navb){
//r
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
    // ]//r

    bookRouter.get('/',function(req,res){
        Bookdata.find()//addhere
         .then(function(books){
        //  res.render("LIBbooks",
              res.render('LIBbooks', //addhere
                 {
                      navb,
                 title:'Books',
                 books
                });
            });
        });
            
            bookRouter.get('/:id',function(req,res){
                const id=req.params.id
                Bookdata.findOne({_id:id})
                .then(function(book){
                    res.render('book',
                    // {nav:[{link:'./books',name:'Books'},{link:'authors',name:'Authors'}],
                    { navb,
                    title:'Book',
                    book
                        
                    });
                });
                
            });
    return bookRouter;
}

module.exports = router;