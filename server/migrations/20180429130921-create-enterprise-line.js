'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('EnterpriseLines', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lineTitle: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lineType: {
        type: Sequelize.ENUM('group', 'self'),
        allowNull: false
      },
      lineNature: {
        type: Sequelize.ENUM('inner', 'out'),
        allowNull: false
      },
      adultPrice: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      childPrice: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      sendWeek: {
        type: Sequelize.ENUM('MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT', 'SUN'),
        allowNull: false
      },
      sendDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      sendTime: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cover: {
        type: Sequelize.STRING(1234),
        allowNull: false
      },
      sort: {
        type: Sequelize.ENUM('time', 'content'),
        allowNull: false
      },
      lineFeature: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      lineNotice: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      Instructions: {
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
      tourId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'tours',
          key: 'id',
          as: 'tourId'
        }
      },
      commentId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'userComments',
          key: 'id',
          as: 'commentId'
        }
      },
      collectiontId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'userCollections',
          key: 'id',
          as: 'collectiontId'
        }
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('EnterpriseLines');
  }
};