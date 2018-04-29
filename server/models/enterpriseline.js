'use strict';
module.exports = (sequelize, DataTypes) => {
  var enterpriseLine = sequelize.define('enterpriseLine', {
    lineTitle: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lineType: {
      type: Sequelize.ENUM('group', 'self'),
      allowNull: false
    },
    lineNature: {
      type: Sequelize.ENUM('inner', 'out'),
      allowNull: false
    },
    adultPrice: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    childPrice: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    sendWeek: {
      type: Sequelize.ENUM('MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT', 'SUN'),
      allowNull: false
    },
    sendDate: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    sendTime: {
      type: Sequelize.STRING,
      allowNull: false
    },
    cover: {
      type: Sequelize.STRING(1234),
      allowNull: false
    },
    sort: {
      type: Sequelize.ENUM('time', 'content'),
      allowNull: false
    },
    lineFeature: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    lineNotice: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    Instructions: {
      type: Sequelize.TEXT,
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
    })
  };
  return enterpriseLine;
};