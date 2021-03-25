module.exports = (sequelize, Sequelize) => {
  const Notes = sequelize.define('notes', {
    notes_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      notEmpty: true,
      primaryKey: true
    },
    notes_title: {
      type: Sequelize.STRING
      // allowNull: false,
      // unique: true
      // notEmpty: true
    },
    notes_content: {
      type: Sequelize.STRING
      // allowNull: false,
      // notEmpty: true
    },
    notes_delta: {
      type: Sequelize.STRING
      // allowNull: false,
      // notEmpty: true
    }
  })
  return Notes
}
