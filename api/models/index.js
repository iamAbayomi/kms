const Sequelize = require('sequelize')
const config = require('../config/geroku.config')

const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    port: config.PORT,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    },
    dialectOptions: {
      connectTimeout: 60000,
      ssl: {
        rejectUnauthorized: false
      }
    }
  }
)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require('../models/user.model')(sequelize, Sequelize)
db.admin = require('../models/admin.model')(sequelize, Sequelize)
db.notes = require('../models/notes.model')(sequelize, Sequelize)

db.user.hasMany(db.notes, { foreignKey: 'user_id' })
db.user.hasOne(db.admin, { foreignKey: 'user_id' })

module.exports = db
