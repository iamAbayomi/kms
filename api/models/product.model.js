module.exports = (sequlize, Sequelize) => {
  const Product = sequlize.define('product', {
    product_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      notEmpty: true,
      primaryKey: true
    },
    product_name: {
      type: Sequelize.STRING,
      notEmpty: true
    }

  })

  return Product
}
