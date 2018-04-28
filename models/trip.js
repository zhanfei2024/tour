'use strict';
module.exports = (sequelize, DataTypes) => {
    var Trip = sequelize.define('Trip', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            comment: 'id'
        },
        travelLineId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: '线路id'
        },
        breakfastAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '早餐地点'
        },
        breakfastStartTime: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '早餐开始时间'
        },
        breakfastEndTime: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '早餐结束时间'
        },
        breakfastContent: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '早餐包含'
        },
        lunchAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '中餐地点'
        },
        lunchStartTime: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '中餐开始时间'
        },
        lunchEndTime: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '中餐结束时间'
        },
        lunchContent: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '中餐包含'
        },
        dinnerAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '晚餐地点'
        },
        dinnerStartTime: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '晚餐开始时间'
        },
        dinnerEndTime: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '晚餐结束时间'
        },
        dinnerContent: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '晚餐包含'
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
    Trip.associate = function (models) {
        // associations can be defined here
        Trip.belongsTo(modals.travelLine, {
            targetKey: 'id',
            foreignKey: 'travelLineId',
            onDelete: 'cascade',
            hooks: true,
            as: 'user'
        })
    };
    return Trip;
};