const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World 2')
})

app.get('/next', (rq, rs) => {
    rs.send('From Next Page')
})

app.listen(port, () => {
    console.log(`successfully running on port: ${port}`)
})