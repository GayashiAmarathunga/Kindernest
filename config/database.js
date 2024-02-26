import mysql from "mysql2";

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "POIU098qwerty7654321MNB",
  database: "kindergarten_management",
});

export default pool;
