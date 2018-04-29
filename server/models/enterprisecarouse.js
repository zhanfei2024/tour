'use strict';
module.exports = (sequelize, DataTypes) => {
  var enterpriseCarouse = sequelize.define('enterpriseCarouse', {
    carouseTitle: {
      type: Sequelize.STRING,
      allowNull: false
    },
    carousePic: {
      type: Sequelize.STRING,
      allowNull: false
    },
    url: {
      type: Sequelize.STRING,
      allowNull: false
    },
    sort: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
  }, {});
  enterpriseCarouse.associate = function(models) {
    // associations can be defined here
    enterpriseCarouse.belongsTo(models.tour, {
      foreignKey: 'tourId',
      onDelete: 'CASCADE'
    })
  };
  return enterpriseCarouse;
};