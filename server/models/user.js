'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasOne(models.UserProfile, {
      foreignkey: 'userId',
      as: 'userProfile'
    }),
    User.hasMany(models.userOrder, {
      foreignkey: 'userId',
      as: 'userOrder'
    }),
    User.hasMany(models.userComment, {
      foreignkey: 'userId',
      as: 'userComment'
    })
  };
  return User;
};