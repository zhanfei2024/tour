'use strict';
module.exports = (sequelize, DataTypes) => {
  var userOrder = sequelize.define('userOrder', {
    startDate: {
      type: Sequelize.DATE,
      allowNull: false
    },
    adultNum: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    childNum: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
  }, {});
  userOrder.associate = function(models) {
    // associations can be defined here
    userOrder.belongsTo(models.User, {
      foreignKey: userId,
      onDelete: 'CASCADE'
    })
  };
  return userOrder;
};