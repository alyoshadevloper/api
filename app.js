const express  = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const rIndex = require('./routers/index')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb+srv://user:123asd123asdw@cluster0.p2hq4.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection

db.on('open', () => {
    console.log('MongoDb Running')
})

db.on('error', (err) => {
    console.log('MongoDb ERROR Running', err)
})

/// Static Folder

app.use(express.static(path.join(__dirname , 'public')))

/// Pug

app.set('view engine' , 'pug')
app.set('views' , path.join(__dirname , 'views'))

//// bodyParser

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

/// routers

app.use(rIndex)

app.listen(3000 , () => {
    console.log('server 3000 port running')
})