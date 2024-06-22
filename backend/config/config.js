// backend/config/config.js
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'postgresql://pern2nd_testdb_user:vzzwENRTNWCgax2rxWz7SlKLUtJd2c2G@dpg-cpnfu408fa8c73b0llo0-a.oregon-postgres.render.com/pern2nd_testdb',
    dialect: 'postgres'
  }
};
