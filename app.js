const express=require('express');
const app=new express();
const nav=[
    {
        link:'./index',name:'HOME'
    },
    {
        link:'./LIBsignup',name:'SIGN UP'
    },
    {
        link:'./LIBlogin',name:'LOG IN'
    }
];

const navb=[
    {
        link:'./LIBlogged',name:'MAIN PAGE'
    },
    {
        link:'./LIBbooks',name:'BOOKS'
    },
    {
        link:'./author',name:'AUTHOR'
    },
    {
        link:'./addbooks',name:'ADD BOOKS'
    },
    {
        link:'./index',name:'LOG OUT'
    }
];
const signupRouter = require('./src/routes/signupRoutes')(nav);
const loginRouter = require('./src/routes/loginRoutes')(nav);
const signupedRouter = require('./src/routes/signupedRoutes')(nav);
const logedRouter = require('./src/routes/loggedRoutes')(navb);
const bookRouter = require('./src/routes/bookRoutes')(navb);
const authorRouter = require('./src/routes/authorRoutes')(navb);
const addbooksRouter = require('./src/routes/addbooksRoutes')(navb);
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
app.use('/addbooks',addbooksRouter);
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