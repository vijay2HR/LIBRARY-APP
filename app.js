const express=require('express');
const app=new express();
const nav=[
    {link:'./index',name:'HOME'},
    {link:'./LIBsignup',name:'SIGN UP'},
    {link:'./LIBlogin',name:'LOG IN'} ];

const navb=[
    {  link:'http://localhost:5001/LIBlogged',name:'MAIN PAGE'    },
    {  link:'http://localhost:5001/LIBbooks',name:'BOOKS'    },
    // {  link:'./author',name:'AUTHOR'    },
    {  link:'http://localhost:5001/author',name:'AUTHOR'    },
    {  link:'http://localhost:5001/addbooks',name:'ADD BOOKS'    },
    {  link:'http://localhost:5001/index',name:'LOG OUT'    } ];
    
const signupRouter = require('./src/routes/signupRoutes')(nav);
const loginRouter = require('./src/routes/loginRoutes')(nav);
const signupedRouter = require('./src/routes/signupedRoutes')(nav);
const logedRouter = require('./src/routes/loggedRoutes')(navb);
const bookRouter = require('./src/routes/bookRoutes')(navb);
const authorRouter = require('./src/routes/authorRoutes')(navb);
const adminRouter = require('./src/routes/adminRoutes')(navb);
// const bookeditRouter = require('./src/routes/bookeditRoutes')(navb);
// to use mongodb
app.use(express.urlencoded({extended:true}));
// to use static css and js 
app.use(express.static('./public'));
//for ejs
app.set('view engine','ejs');
// app.set('views','./src/views');
app.set('views',__dirname+'/src/views');
//for express router
app.use('/LIBsignup',signupRouter);
app.use('/LIBlogin',loginRouter);
app.use('/index',signupedRouter);
app.use('/LIBlogged',logedRouter);
app.use('/LIBbooks',bookRouter);
app.use('/author',authorRouter);
app.use('/addbooks',adminRouter);
// app.use('http://localhost:5001/LIBbooks/book/editbook/update',bookeditRouter);
//router create
app.get('/',function(req,res){
res.render("index",
    // {nav:[{link:'./books',name:'Books'},{link:'authors',name:'Authors'}],
    {
        nav,
    title:'Library'
});
});
app.listen(5001); 