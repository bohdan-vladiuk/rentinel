import axios from "./axios";

const baseUrl = "/api/property";

export const propertyService = {
  create,
  getAll,
  getById,
  update,
  delete: _delete,
};

function create(property) {
  return axios.post(`${baseUrl}`, property);
}

async function getAll() {
  try {
    const res = await axios.get(`${baseUrl}`);
    if (res) {
      return { status: true, data: res.data };
    }
  } catch (error) {
    return { status: false, data: [] };
  }
}

function getById(id) {}

function update(id, params) {}

function _delete(id) {}
