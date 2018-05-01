'use strict';
module.exports = (sequelize, DataTypes) => {
  var userComment = sequelize.define('userComment', {
    commentabel: {
      type: DataTypes.STRING,
    },
    Accommodation: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stroke: {
      type: DataTypes.STRING,
      allowNull: false
    },
    service: {
      type: DataTypes.STRING,
      allowNull: false
    },
    commentDes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {});
  userComment.associate = function(models) {
    // associations can be defined here
    userComment.belongsTo(models.User, {
      foreignKey: userId,
      onDelete: 'CASCADE'
    }),
    userComment.belongsTo(models.userOrder, {
      foreignKey: commentId,
      constraints: false,
      onDelete: 'CASCADE'
    }),
    userComment.belongsTo(models.tour, {
      foreignKey: commentId,
      constraints: false,
      onDelete: 'CASCADE'
    }),
    userComment.belongsTo(models.enterpriseReply, {
      foreignKey: enterpriseReplyId,
      onDelete: 'CASCADE'
    })
  };
  return userComment;
};