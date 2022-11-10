import Router from "next/router";
import axios from "axios";

const baseUrl = "/api/user";

export const userService = {
  login,
  logout,
  register,
  getAll,
  getById,
  update,
  delete: _delete,
};

function login(email, password) {
  return axios.post(`${baseUrl}/login`, { email, password }).then((user) => {
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  });
}

function logout() {
  localStorage.removeItem("user");
  Router.push("/");
}

function register(user) {
  return axios.post(`${baseUrl}/register`, user);
}

function getAll() {}

function getById(id) {}

function update(id, params) {}

function _delete(id) {}
