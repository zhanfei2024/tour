'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserProfile = sequelize.define('UserProfile', {
    gender: {
      type: DataTypes.ENUM('M', 'F'),
      allowNull: false
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idNumber: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  UserProfile.associate = function(models) {
    // associations can be defined here
    UserProfile.belongsTo(models.User, {
      foreignKey: userId,
      onDelete: 'CASCADE'
    })
  };
  return UserProfile;
};