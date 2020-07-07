const express=require('express');
//for express router
const adminRouter=express.Router();

const Bookdata=require("../model/Bookdata");

// function router(navb){
//     adminRouter.get('/',function(req,res){
//             res.render("addbooks",
//                 { navb,
//                 title:'Add Books',
//                 // books
//             });
//             });
    //  addbooksRouter.get('/add',function(req,res){
        bookeditRouter.post('/add',function(req,res){
        // var item={
        //     title:req.query.title,
        //     author:req.query.author,
        //     genre:req.query.genre,
        //     image:req.query.image
        // };
        // var book = Bookdata(item);
        // book.save();
        // res.redirect('/LIBbooks');
        // const id=req.params.id
         var item={
            _id:id,
            title:req.body.title,
            author:req.body.author,
            genre:req.body.genre,
            image:req.body.image
        };
        var book = Bookdata(item);
        book.save();
        res.redirect('/LIBbooks');
        
    });
    return adminRouter;
}
module.exports = router;