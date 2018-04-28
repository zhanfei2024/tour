'use strict';
module.exports = (sequelize, DataTypes) => {
    var UserComment = sequelize.define('UserComment', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            comment: 'id'
        },
        userOrderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: '用户订单id'
        },
        roomBoard: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '食宿评分'
        },
        tripScore: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '行程评分'
        },
        serviceScore: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '服务评分'
        },
        commentDetail: {
            type: DataTypes.TEXT,
            allowNull: false,
            comment: '评价内容'
        }
    },
        {
            timestamps: true,
            underscored: true,
            paranoid: true,
            freezeTableName: true,
            tableName: 'UserComment',
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    UserComment.associate = function (models) {
        // associations can be defined here
        UserComment.belongsTo(modals.userOrder, {
            targetKey: 'id',
            foreignKey: 'userOrderId',
            onDelete: 'cascade',
            hooks: true,
            as: 'userOrder'
        })
    };
    return UserComment;
};