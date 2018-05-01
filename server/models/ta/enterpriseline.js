'use strict';
module.exports = (sequelize, DataTypes) => {
  var enterpriseLine = sequelize.define('enterpriseLine', {
    lineTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lineType: {
      type: DataTypes.ENUM('group', 'self'),
      allowNull: false
    },
    lineNature: {
      type: DataTypes.ENUM('inner', 'out'),
      allowNull: false
    },
    adultPrice: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    childPrice: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sendWeek: {
      type: DataTypes.ENUM('MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT', 'SUN'),
      allowNull: false
    },
    sendDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    sendTime: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cover: {
      type: DataTypes.STRING(1234),
      allowNull: false
    },
    sort: {
      type: DataTypes.ENUM('time', 'content'),
      allowNull: false
    },
    lineFeature: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    lineNotice: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Instructions: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {});
  enterpriseLine.associate = function(models) {
    // associations can be defined here
    enterpriseLine.hasMany(models.enterpriseTrip, {
      foreignkey: 'enterpriseLineId',
    }),
    enterpriseLine.belongsTo(models.tour, {
      foreignkey: 'tourId',
    }),
    enterpriseLine.hasMany(models.userCollection, {
      foreignKey: 'collectionId',
      constraints: false,
      scope: {
        commentabel: 'enterpriseLine'
      }
    })
  };
  return enterpriseLine;
};