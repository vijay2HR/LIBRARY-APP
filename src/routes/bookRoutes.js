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
          
            bookRouter.get('/delete/:id',function(req,res){
                // const id=req.params.id
                 var item={
                    _id:req.params.id,
                    title:req.params.title,
                    author:req.params.author,
                    genre:req.params.genre,
                    image:req.params.image
                };
                var book = Bookdata(item);
                book.delete();
                res.redirect('/LIBlogged');
                
            });

           
            bookRouter.get('/book/edit/:id',function(req,res){
                const id=req.params.id
                Bookdata.findOne({_id:id})
                .then(function(book){
                    res.render('editbook',
                    { navb,
                    title:'Edit Book',
                    book
                        
                    });
                });
                
            });
            bookRouter.post('/book/editbook/update/:id',function(req,res){
                // var item={
                //     _id:req.body.id,
                //     title:req.body.title,
                //     author:req.body.author,
                //     genre:req.body.genre,
                //     image:req.body.image
                // };
                const id=req.body.id;
                Bookdata.findOneAndUpdate({_id:id},
                    {$set:{title:req.body.title}},
                    {$set:{author:req.body.author}},
                    {$set:{genre:req.body.genre}},
                    {$set:{image:req.body.image}}
                    // function (err, doc) {

                    //     if (err) {
                    
                    //         console.log("update document error");
                    
                    //     } else {
                    
                    //         console.log("update document success");
                    
                    //         console.log(doc);
                    
                    //     }
                    
                    // }
                    );
                // var book = Bookdata(item);
                // book.update();
                res.redirect('/LIBbooks');
                // const id=req.params.id
                // Bookdata.findOne({_id:id})
                // .then(function(book){
                //     res.render('editbook',
                //     { navb,
                //     title:'Edit Book',
                //     book
                        
                //     });
                // });
                
            });
           
                
    return bookRouter;
}

module.exports = router;