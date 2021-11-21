const express = require('express')
const app = express()

const port = 3090

const Client = [
    {
        id: 1,
        name: "Dan",
        work: "Workers"
    },
    {
        id: 2,
        name: "Kity",
        work: "Farmer"
    }
]

app.use(express.json())


app.get('/addN', (req, res) => {
    const result = parseInt(req.query.n1) + parseInt(req.query.n2)
    res.json({
        statusCode: 200,
        data: result
    })
})

app.get('/getClients', (req, res) => {
    res.json(Client)
})

app.post('/addN', (req, res) => {
    const result = req.body.n1 + req.body.n2
    res.json({
        statusCode: 200,
        data: result
    })
})

app.post('/addClient', (req, res) => {
    Client.push(req.body)
    res.json({
        statusCode: 200,
        data: Client
    })
})

app.listen(port, () => {
    console.log('-> App is listening to: ', port)
})