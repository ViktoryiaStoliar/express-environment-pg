const { getAllEnvironmentDb, getEnvironmentByIdDb } = require('../repository/environment.repository')

async function getAllEnvironment() {
    const data = await getAllEnvironmentDb()
    return data
}

async function getEnvironmentById(id) {
    const data = await getEnvironmentByIdDb(id)
    return data
}

module.exports = { getAllEnvironment, getEnvironmentById }