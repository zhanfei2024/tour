'use strict';
module.exports = (sequelize, DataTypes) => {
  var userCollection = sequelize.define('userCollection', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId'
      }
    },
    collectionTabel: {
      type: DataTypes.STRING
    },
    collected: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
  }, {});
  userCollection.associate = function(models) {
    // associations can be defined here
    userCollection.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    }),
    userCollection.belongsTo(models.tour, {
      foreignKey: 'collectiontId',
      constraints: false,
      scope: {
        commentabel: 'tour'
      }
    }),
    userCollection.belongsTo(models.enterpriseLine, {
      foreignKey: 'collectiontId',
      constraints: false,
      scope: {
        commentabel: 'enterpriseLine'
      }
    })

  };
  return userCollection;
};