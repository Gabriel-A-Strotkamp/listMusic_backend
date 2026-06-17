const { pool } = require('pg')

const isProduction = process.env.NODE_ENV === 'production'

let pool = null;
if (isProduction) {
  pool = new pool({
    connectionString: process.env.DATABASE_URL, ssl: {
      rejectUnauthorized: false,
    }
  })
} else {
  pool = new pool({
    user: 'postgres',
    host: 'localhost',
    database: 'BD_listMusic',
    password: 'postgres',
    port: 5432
  })
}

module.exports = pool;
