'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tours', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      enterpriseId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'enterprises',
          key: 'id',
          as: 'enterpriseId'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tours');
  }
};