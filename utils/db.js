import mysql from 'mysql2/promise';

const dbPool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'login_schema',
});

export default dbPool;
