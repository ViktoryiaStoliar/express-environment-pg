const express = require('express')
const { getAllEnvironment, createEnvironment, updateEnvironment, getEnvironmentById, deleteEnvironmentById, patchEnvironment } = require('../service/environment.service')
const { isValidEnvironmentId, isValidBody } = require('../helper/validation')
const route = express.Router()

route.get('/', async (req, res) => {
    try {
        const data = await getAllEnvironment();
        res.send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.post('/', async (req, res) => {
    try {
        const { label, category, priority } = req.body
        const data = await createEnvironment(label, category, priority);
        res.send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.put('/:id', isValidBody, async (req, res) => {
    try {
        const { id } = req.params
        const { label, category, priority } = req.body
        const data = await updateEnvironment(id, label, category, priority);
        res.send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.get('/:id', isValidEnvironmentId, async (req, res) => {
    try {
        const { id } = req.params
        const data = await getEnvironmentById(id);
        res.send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.delete('/:id', isValidEnvironmentId, async (req, res) => {
    try {
        const { id } = req.params
        const data = await deleteEnvironmentById(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.patch('/:id', isValidEnvironmentId, async (req, res) => {
    try {
        const { id } = req.params
        const clientData = req.body
        const data = await patchEnvironment(id, clientData)
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports = route