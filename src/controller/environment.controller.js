const express = require('express')
const { getAllEnvironment, getEnvironmentById } = require('../service/environment.service')
const route = express.Router()

route.get('/', async (req, res) => {
    const data = await getAllEnvironment();
    res.send(data)
})

route.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const data = await getEnvironmentById(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports = route