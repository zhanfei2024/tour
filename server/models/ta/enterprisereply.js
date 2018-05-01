'use strict';
module.exports = (sequelize, DataTypes) => {
  var enterpriseReply = sequelize.define('enterpriseReply', {
    replyContent: {
      type: DataTypes.STRING
    },
  }, {});
  enterpriseReply.associate = function(models) {
    // associations can be defined here
    enterpriseReply.belongsTo(models.userComment, {
      foreignKey: 'enterpriseReplyId',
      as: 'userComment'
    })
  };
  return enterpriseReply;
};