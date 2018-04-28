'use strict';
module.exports = (sequelize, DataTypes) => {
    var Carouse = sequelize.define('Carouse', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            comment: 'id'
        },
        tourId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: '旅行社id'
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '轮播图标题'
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '链接地址'
        },
        pic: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '图片'
        },
        sort: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '排序'
        }
    },
        {
            timestamps: true,
            underscored: true,
            paranoid: true,
            freezeTableName: true,
            tableName: 'Carouse',
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    Carouse.associate = function (models) {
        // associations can be defined here
        Carouse.belongsTo(modals.tour, {
            targetKey: 'id',
            foreignKey: 'tourId',
            onDelete: 'cascade',
            hooks: true,
            as: 'userComment'
        })
    };
    return Carouse;
};