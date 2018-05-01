'use strict';
module.exports = (sequelize, DataTypes) => {
  var enterpriseCarouse = sequelize.define('enterpriseCarouse', {
    carouseTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    carousePic: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sort: {
      type: DataTypes.INTEGER,
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