const express=require('express');
//for express router
const bookRouter=express.Router();
const Bookdata=require('../model/Bookdata'); //add here
//const { deleteOne } = require('../model/Bookdata');
function router(navb){
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
                    { navb,
                    title:'Book',
                    book
                        
                    });
                });
                
            });
            // bookRouter.get('/delete/:id',function(req,res){
            //     // res.send(req.params.id);
            //     // const id=req.params.id
            //     Bookdata.remove({_id:req.params.id},function(err,delData){
            //         res.redirect('/LIBlogged');
            //     });
            //     // Bookdata.findOne({_id:id})
            //     // .then(function(book){
            //     // Bookdata.deleteOne({_id:id});
            //     // Bookdata.save();
            //     // res.redirect('/LIBbooks');
                
                
            // });
            bookRouter.delete('/delete/:id',function(req,res){
                // res.send(req.params.id);
                const id=req.params.id
                Bookdata.findOneAndRemove({_id:id},function(err){
                    if(err){
                        res.send("could not delete")
                    }
                    res.redirect('/LIBlogged');
                });
                // Bookdata.findOne({_id:id})
                // .then(function(book){
                // Bookdata.deleteOne({_id:id});
                // Bookdata.save();
                // res.redirect('/LIBbooks');
                
                
            });
    return bookRouter;
}

module.exports = router;