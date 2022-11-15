// import Router from "next/router";
// import axios from 'axios';
import axios from 'utils/axios';

const baseUrl = '/api/property';

// function create(property) {
//   return axios.post(`${baseUrl}`, property);
// }

const create = async (property) => {
  try {
    const res = await axios.post(`${baseUrl}`, property);
    return { status: true, data: res.data };
  } catch (err) {
    return { status: false, data: err?.message };
  }
};

function getAll() {}

function getById(id) {}

function update(id, params) {}

function _delete(id) {}

export const propertyService = {
  create,
  getAll,
  getById,
  update,
  delete: _delete
};
