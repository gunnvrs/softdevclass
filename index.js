const express = require('express')
const app = express()
const worker = require('./models/worker')

app.get('/', (req, res) => {
    res.send('hello world from express framework')
})

app.get('/about', (req, res) => {
    res.send(worker.Hello())
})

app.get('/product', function(req, res){
    res.sendFile(__dirname + '/public/product.html')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/product.html')
    // return res.redirect('/product')
})

app.listen(3000, () => {
    console.log("start server at port [3000]")
})