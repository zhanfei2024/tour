'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('EnterpriseTrips', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      breakfastAddress: {
        type: Sequelize.STRING,
        allowNull: false
      },
      breakfastStartTime: {
        type: Sequelize.STRING,
        allowNull: false
      },
      breakfastEndTime: {
        type: Sequelize.STRING,
        allowNull: false
      },
      breakfastDes: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lunchAddress: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lunchStartTime: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lunchEndTime: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lunchDes: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dinnerAddress: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dinnerStartTime: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dinnerEndTime: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dinnerDes: {
        type: Sequelize.STRING,
        allowNull: false
      },
      traffic: {
        type: Sequelize.STRING,
        allowNull: false
      },
      stay: {
        type: Sequelize.STRING,
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
      enterpriseLineId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'EnterpriseLines',
          key: 'id',
          as: 'enterpriseLineId'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('EnterpriseTrips');
  }
};