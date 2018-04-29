'use strict';
module.exports = (sequelize, DataTypes) => {
  var tour = sequelize.define('tour', {
    tourName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    tourContact: {
      type: Sequelize.STRING,
      allowNull: false
    },
    phone: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    tourLogo: {
      type: Sequelize.STRING,
      allowNull: false
    },
    tourFront: {
      type: Sequelize.STRING,
      allowNull: false
    },
    busniess: {
      type: Sequelize.STRING,
      allowNull: false
    },
    idFace: {
      type: Sequelize.STRING,
      allowNull: false
    },
    idBack: {
      type: Sequelize.STRING,
      allowNull: false
    },
    tourSummary: {
      type: Sequelize.TEXT,
      allowNull: false
    },
  }, {});
  tour.associate = function(models) {
    // associations can be defined here
    tour.belongsTo(models.enterprise, {
      foreignKey: 'enterpriseId',
      onDelete: 'CASCADE'
    }),
    tour.hasMany(models.enterpriseCarouse, {
      foreignKey: 'tourId',
      onDelete: 'CASCADE'
    }),
    tour.hasMany(models.enterpriseLine, {
      foreignKey: 'tourId',
      onDelete: 'CASCADE'
    })
  };
  return tour;
};