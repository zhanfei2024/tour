'use strict';
module.exports = (sequelize, DataTypes) => {
  var userOrder = sequelize.define('userOrder', {
    startDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    adultNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    childNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {});
  userOrder.associate = function(models) {
    // associations can be defined here
    userOrder.belongsTo(models.User, {
      foreignKey: userId,
      onDelete: 'CASCADE'
    }),
    userOrder.hasMany(models.userComment, {
      foreignKey: 'commentId',
      constraints: false,
      scope: {
        commentabel: 'userOrder'
      }
    })
  };
  return userOrder;
};