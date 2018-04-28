'use strict';
module.exports = (sequelize, DataTypes) => {
    var Tour = sequelize.define('Tour', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            comment: 'id'
        },
        enterPriseId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: '企业id'
        },
        cityId: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '旅行社所在地'
        },
        tourTitle: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '旅行社名称'
        },
        tourContact: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '旅行社联系人'
        },
        tourPhone: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '旅行社电话'
        },
        tourAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '旅行社地址'
        },
        tourSummary: {
            type: DataTypes.TEXT,
            allowNull: false,
            comment: '旅行社简介'
        },
        tourLogo: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '旅行社logo'
        },
        shopFront: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '旅行社门脸'
        },
        busniessPic: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '营业执照照片',
        },
        idFacePic: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '身份证正面'
        },
        idBackPic: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '身份证反面'
        },
    },
    {
        timestamps: true,
        underscored: true,
        paranoid: true,
        freezeTableName: true,
        tableName: 'UserOrder',
        charset: 'utf8',
        collate: 'utf8_general_ci'
    });
    Tour.associate = function (models) {
        // associations can be defined here
        Tour.belongsTo(modals.city, {
            targetKey: 'id',
            foreignKey: 'cityId',
            onDelete: 'cascade',
            hooks: true,
            as: 'city'
        }),
        Tour.belongsTo(models.enterprise, {
            targetKey: 'id',
            foreignKey: 'enterpriseId',
            as: 'enterprise'
        })
    };
    return Tour;
};