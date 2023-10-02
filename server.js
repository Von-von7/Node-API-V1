require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const productRoute=require('./routes/productRoute');
const errorMiddleware=require('./middleware/errorMiddleware');
var cors = require('cors')

const app = express()

const PORT=process.env.PORT || 3000
const MONGO_URL=process.env.MONGO_URL

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
app.use('/api/products',productRoute);


app.get('/',(req,res)=>{
    res.send('Hello NODE API')
})

app.get('/blog',(req,res)=>{
    res.send('Hello Blog, My name is Yvonne')
})


app.use(errorMiddleware);

mongoose.
connect(MONGO_URL)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Node API app is running on port ${PORT}`)
    });
    
    console.log('connected to MongoDB')
})
.catch((error)=>{
    console.log(error)
})