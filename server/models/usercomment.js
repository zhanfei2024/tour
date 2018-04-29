'use strict';
module.exports = (sequelize, DataTypes) => {
  var userComment = sequelize.define('userComment', {
    Accommodation: {
      type: Sequelize.STRING,
      allowNull: false
    },
    stroke: {
      type: Sequelize.STRING,
      allowNull: false
    },
    service: {
      type: Sequelize.STRING,
      allowNull: false
    },
    commentDes: {
      type: Sequelize.TEXT,
      allowNull: false
    },
  }, {});
  userComment.associate = function(models) {
    // associations can be defined here
    userComment.belongsTo(models.User, {
      foreignKey: userId,
      onDelete: 'CASCADE'
    })
  };
  return userComment;
};