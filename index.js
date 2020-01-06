const express = require('express')

const server = express()

const users = ['Tipscode', 'Dukeza', 'Tux']

server.get('/users', (req, res) =>{
    return res.json(users)
})

server.get('/users/:index', (req, res) =>{
    const { index } = req.params

    return res.json(users[index])
})

server.listen(3000)