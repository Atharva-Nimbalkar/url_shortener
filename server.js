// use npm run devStart (script ) to run
const express=require('express');
const mongoose=require('mongoose');
const ShortUrl=require('./models/shortUrl.js')

const app=express();
mongoose.connect('mongodb://localhost/urlShortener',{
    useNewUrlParser: true, useUnifiedTopology: true
})// now we create model to store our urls
const port=5000
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}))
app.get("/",(req,res)=>{
    res.render('index')
})

app.post('/',async(req,res)=>{
    await ShortUrl.create({full: req.body.fullUrl })
    res.redirect('/')
})
app.listen(process.env.PORT || 5000)