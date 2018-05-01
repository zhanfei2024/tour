'use strict';
module.exports = (sequelize, DataTypes) => {
  var tour = sequelize.define('tour', {
    tourName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tourContact: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tourLogo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tourFront: {
      type: DataTypes.STRING,
      allowNull: false
    },
    busniess: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idFace: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idBack: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tourSummary: {
      type: DataTypes.TEXT,
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
    }),
    tour.hasMany(models.userComment, {
      foreignKey: 'commentId',
      constraints: false,
      scope: {
        commentabel: 'tour'
      }
    }),
    tour.hasMany(models.userCollection, {
      foreignKey: 'collectionId',
      constraints: false,
      scope: {
        commentabel: 'tour'
      }
    })
  };
  return tour;
};