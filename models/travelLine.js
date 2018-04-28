'use strict';
module.exports = (sequelize, DataTypes) => {
    var TravelLine = sequelize.define('TravelLine', {
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
        tripId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: '行程id'
        },
        lineType: {
            type: DataTypes.ENUM('group', 'self'),
            allowNull: false,
            comment: '线路类型'
        },
        lineFeature: {
            type: DataTypes.ENUM('inner', 'out'),
            allowNull: false,
            comment: '产品性质'
        },
        startCityId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: '出发城市id'
        },
        destinationId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: '目的地id'
        },
        adultPrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: '成人价'
        },
        childPrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: '儿童价'
        },
        weekStart: {
            type: DataTypes.ENUM('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'),
            allowNull: false,
            comment: '发团日期'
        },
        startDate: {
            type: DataTypes.DATE,
            allowNull: false,
            comment: '发团时间'
        },
        startTime: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '发团点数'
        },
        cover: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '封面图'
        },
        sort: {
            type: DataTypes.ENUM('content', 'time'),
            allowNull: false,
            comment: '身份证'
        },
        feature: {
            type: DataTypes.TEXT,
            allowNull: false,
            comment: '线路特色'
        },
        costDescription: {
            type: DataTypes.TEXT,
            allowNull: false,
            comment: '费用说明'
        },
        notice: {
            type: DataTypes.TEXT,
            allowNull: false,
            comment: '预定须知'
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