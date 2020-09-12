const express=require('express');
const path=require('path');
const app=express();

app.use('/static',express.static('static'));
app.use(express.urlencoded())
app.set('view engine','pug');
app.set('views',path.join(__dirname,'view'));
const port=8000;


app.get('/home',(req,res)=>{
    const params={'title': "coffe"}
    res.status(200).render('home.pug',params);
});
app.get('/',(req,res)=>{
    const params={'title': "coffe"}
    res.status(200).render('home.pug',params);
});
app.get('/contact',(req,res)=>{
   
    res.status(200).render('contact.pug');
});
app.get('/menu',(req,res)=>{
   
    res.status(200).render('menu.pug');
});
app.listen(port,()=>{
    console.log("server running");
});