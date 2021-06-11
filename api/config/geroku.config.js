module.exports = {
  HOST: process.env.HEROKU_DB_HOST,
  PORT: process.env.HEROKU_DB_PORT,
  USER: process.env.HEROKU_DB_USER,
  PASSWORD: process.env.HEROKU_DB_PASSWORD,
  DB: process.env.HEROKU_DB,
  dialect: process.env.HEROKU_DB_DIALECT,
  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 1000
  }
}
