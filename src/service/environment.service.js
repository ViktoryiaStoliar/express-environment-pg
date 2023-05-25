const {
  getAllEnvironmentDb,
  createEnvironmentDb,
  updateEnvironmentDb,
  getEnvironmentByIdDb,
  deleteEnvironmentByIdDb,
  patchEnvironmentDb,
} = require('../repository/environment.repository');

async function getAllEnvironment() {
  const data = await getAllEnvironmentDb();
  if (!data.length) throw new Error('data are empty');
  return data;
}

async function createEnvironment(label, category, priority) {
  const data = await createEnvironmentDb(label, category, priority);
  if (!data.length) throw new Error('this object is not created');
  return data;
}

async function updateEnvironment(id, label, category, priority) {
  const data = await updateEnvironmentDb(id, label, category, priority);
  if (!data.length) throw new Error('id not found');
  return data;
}

async function getEnvironmentById(id) {
  const data = await getEnvironmentByIdDb(id);
  if (!data.length) throw new Error('id is not found');
  return data;
}

async function deleteEnvironmentById(id) {
  const data = await deleteEnvironmentByIdDb(id);
  if (!data.length) throw new Error('id not found');
  return data;
}

async function patchEnvironment(id, clientData) {
  const data = await patchEnvironmentDb(id, clientData);
  if (!data.length) throw new Error('id not found');
  return data;
}

module.exports = { getAllEnvironment, createEnvironment, updateEnvironment, getEnvironmentById, deleteEnvironmentById, patchEnvironment };
