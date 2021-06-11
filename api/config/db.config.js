module.exports = {
  HOST: process.env.LOCAL_DB_HOST,
  USER: process.env.LOCAL_DB_USER,
  PASSWORD: process.env.LOCAL_DB_PASSWORD,
  DB: process.env.LOCAL_DB,
  dialect: process.env.LOCAL_DB_DIALECT,
  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 1000
  }
}
