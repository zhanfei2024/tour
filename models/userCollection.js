'use strict';
module.exports = (sequelize, DataTypes) => {
    var UserCollection = sequelize.define('UserCollection', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            comment: 'id'
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: '用户id'
        },
        tourId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: '旅行社id'
        },
        travelLineId: {
            type: DataTypes.STRING,
            allowNull: false,
            commenelLinet: '线路id'
        }

    },
        {
            timestamps: true,
            underscored: true,
            paranoid: true,
            freezeTableName: true,
            tableName: 'UserCollection',
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    UserCollection.associate = function (models) {
        // associations can be defined here
        UserCollection.belongsTo(modals.user, {
            targetKey: 'id',
            foreignKey: 'userId',
            onDelete: 'cascade',
            hooks: true,
            as: 'user'
        }),
        UserCollection.belongsTo(modals.userOrder, {
            targetKey: 'id',
            foreignKey: 'userOrderId',
            onDelete: 'cascade',
            hooks: true,
            as: 'userOrder'
        }),
        UserCollection.belongsTo(modals.travelLine, {
            targetKey: 'id',
            foreignKey: 'travelLineId',
            onDelete: 'cascade',
            hooks: true,
            as: 'travelLine'
        })
    };
    return UserCollection;
};