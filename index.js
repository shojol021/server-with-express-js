const express = require('express')
const products = require('./data.json')
const { param } = require('express/lib/request')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World 5')
})

app.get('/next', (rq, rs) => {
    rs.send('From Next Page 4')
})

app.get('/products', (rq,rs) => {
    rs.send(products)
})

app.get('/products/:id', (req, res) => {
    const id = req.params.id
    const product = products.find(product => product.id == id) || "Didn't find any porduct"
    res.send(product)

})

app.listen(port, () => {
    console.log(`successfully running on port: ${port}`)
})