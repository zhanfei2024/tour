'use strict';
module.exports = (sequelize, DataTypes) => {
  var enterprise = sequelize.define('enterprise', {
    phone: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    active: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
  }, {});
  enterprise.associate = function(models) {
    // associations can be defined here
    enterprise.hasOne(models.tour, {
      foreignKey: 'enterpriseId',
      as: 'tour'
    })
  };
  return enterprise;
};