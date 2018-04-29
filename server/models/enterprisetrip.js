'use strict';
module.exports = (sequelize, DataTypes) => {
  const enterpriseTrip = sequelize.define('enterpriseTrip', {
    breakfastAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    breakfastStartTime: {
      type: DataTypes.STRING,
      allowNull: false
    },
    breakfastEndTime: {
      type: DataTypes.STRING,
      allowNull: false
    },
    breakfastDes: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lunchAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lunchStartTime: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lunchEndTime: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lunchDes: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dinnerAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dinnerStartTime: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dinnerEndTime: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dinnerDes: {
      type: DataTypes.STRING,
      allowNull: false
    },
    traffic: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stay: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  enterpriseTrip.associate = function(models) {
    // associations can be defined here
    enterpriseTrip.belongsTo(models.enterpriseLine, {
      foreignKey: 'enterpriseLineId',
      onDelete: 'CASCADE',
      as: 'enterpriseLine'
    })
  };
  return enterpriseTrip;
};