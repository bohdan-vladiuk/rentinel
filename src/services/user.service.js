import Router from "next/router";
import axios from "./axios";

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

async function login(email, password) {
  try {
    const { token, user } = await axios.post(`${baseUrl}/login`, {
      email,
      password,
    });
    localStorage.setItem("user", JSON.stringify(user));
  } catch (error) {}
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
