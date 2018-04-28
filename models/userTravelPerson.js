'use strict';
module.exports = (sequelize, DataTypes) => {
    var UserTravelPerson = sequelize.define('UserTravelPerson', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            comment: 'id'
        },
        orderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: '订单id'
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '姓名'
        },
        idType: {
            type: DataTypes.ENUM('id', 'passport'),
            allowNull: false,
            comment: '证件类型'
        },
        Number: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '证件号码'
        },
        phoneNum: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '手机号码'
        }
    },
        {
            timestamps: true,
            underscored: true,
            paranoid: true,
            freezeTableName: true,
            tableName: 'UserTravelPerson',
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    UserTravelPerson.associate = function (models) {
        // associations can be defined here
    };
    return UserTravelPerson;
};