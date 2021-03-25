module.exports = (sequelize, Sequelize) => {
  const Admin = sequelize.define('admin', {
    admin_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      notEmpty: true,
      primaryKey: true
    },
    fullname: {
      type: Sequelize.STRING
      // allowNull: false,
      // unique: true
      // notEmpty: true
    },
    firstname: {
      type: Sequelize.STRING
      // allowNull: false,
      // notEmpty: true
    },
    surname: {
      type: Sequelize.STRING
      // allowNull: false,
      // notEmpty: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
      // notEmpty: true
    }
  })
  return Admin
}
