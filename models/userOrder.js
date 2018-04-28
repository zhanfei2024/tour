'use strict';
module.exports = (sequelize, DataTypes) => {
    var UserOrder = sequelize.define('UserOrder', {
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
            lineId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                comment: '线路id'
            },
            travelType: {
                type: DataTypes.ENUM('group', 'self'),
                allowNull: false,
                comment: '产品性质'
            },
            departure: {
                type: DataTypes.DATE,
                allowNull: false,
                comment: '出发日期'
            },
            adultNum: {
                type: DataTypes.INTEGER,
                allowNull: false,
                comment: '成人人数'
            },
            childNum: {
                type: DataTypes.INTEGER,
                allowNull: false,
                comment: '儿童人数'
            },
            price: {
                type: DataTypes.STRING,
                allowNull: false,
                comment: '总价钱'
            },
            contactPerson: {
                type: DataTypes.STRING,
                allowNull: false,
                comment: '联系人'
            },
            contactPhone: {
                type: DataTypes.INTEGER,
                allowNull: false,
                comment: '联系电话'
            },
            profileName: {
                type: DataTypes.STRING,
                allowNull: false,
                comment: '姓名'
            },
            idNumber: {
                type: DataTypes.STRING,
                allowNull: false,
                comment: '身份证'
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                comment: '邮箱'
            }
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
    UserOrder.associate = function (models) {
        // associations can be defined here
        UserOrder.belongsTo(modals.user, {
            targetKey: 'id',
            foreignKey: 'userId',
            onDelete: 'cascade',
            hooks: true,
            as: 'user'
        }),
        UserOrder.belongsTo(models.travelLine, {
            targetKey: 'id',
            foreignKey: 'travelLineId',
            as: 'travelLine'
        })
    };
    return UserOrder;
};