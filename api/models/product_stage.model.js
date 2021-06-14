module.exports = (sequelize, Sequelize) => {
  const Stage = sequelize.define('stage', {
    stage_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      notEmpty: true,
      primaryKey: true
    },
    stage_title: {
      type: Sequelize.STRING
      // allowNull: false,
      // unique: true
      // notEmpty: true
    },
    stage_contents: {
      type: Sequelize.STRING
      // allowNull: false,
      // notEmpty: true
    },
    stage_delta: {
      type: Sequelize.STRING
      // allowNull: false,
      // notEmpty: true
    }
  })
  return Stage
}
