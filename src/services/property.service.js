// import Router from "next/router";
import axios from 'axios';

const baseUrl = '/api/property';

export const propertyService = {
  create,
  getAll,
  getById,
  update,
  delete: _delete
};

function create(property) {
  return axios.post(`${baseUrl}`, property);
}

function getAll() {}

function getById(id) {}

function update(id, params) {}

function _delete(id) {}
