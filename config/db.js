// import mysql from "serverless-mysql";
const mysql = require("serverless-mysql");

const pool = mysql({
  config: {
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "landlord",
  },
});

export { pool };
