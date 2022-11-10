import { BehaviorSubject } from "rxjs";
import Router from "next/router";
import axios from "axios";

const baseUrl = "/api/user";
const userSubject = new BehaviorSubject(
  process.browser && JSON.parse(localStorage.getItem("user"))
);

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
    // userSubject.next(user);
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  });
}

function logout() {
  localStorage.removeItem("user");
  // userSubject.next(null);
  Router.push("/account/login");
}

function register(user) {
  return axios.post(`${baseUrl}/register`, user);
}

function getAll() {}

function getById(id) {}

function update(id, params) {}

function _delete(id) {}
