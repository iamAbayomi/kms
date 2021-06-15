/* eslint-disable no-console */
const Sequelize = require('sequelize')
let config

// Check if we need to run Nuxt in development mode
const isDev = process.env.NODE_ENV !== 'production'

if (isDev) {
  config = require('../config/db.config')
  console.log('development')
} else {
  config = require('../config/geroku.config')
  console.log('production')
}

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
db.product = require('../models/product.model')(sequelize, Sequelize)
db.stage = require('../models/stage.model')(sequelize, Sequelize)

db.user.hasMany(db.product, { foreignKey: 'user_id' })
db.user.hasMany(db.stage, { foreignKey: 'user_id' })
db.product.hasMany(db.stage, { foreignKey: 'product_id' })

db.user.hasOne(db.admin, { foreignKey: 'user_id' })

module.exports = db
