'use strict';
module.exports = (sequelize, DataTypes) => {
    var UserProfile = sequelize.define('UserProfile', {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey : true,
            unique : true,
            comment:'id'
        },
        userId:{
            type: DataTypes.INTEGER,
            allowNull: false,
            comment:'用户id'
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: '手机'
        },
        gender: {
            type: DataTypes.ENUM('M', 'F'),
            allowNull: false,
            comment: '性别'
        },
        birthday: {
            type: DataTypes.DATE,
            allowNull: false,
            comment: '出生日期'
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
    }, {
        timestamps: true,
        underscored: true,
        paranoid: true,
        freezeTableName: true,
        tableName: 'UserProfile',
        charset: 'utf8',
        collate: 'utf8_general_ci'
    });
    UserProfile.associate = function(models) {
        // associations can be defined here
        UserProfile.belongsTo(modals.user, {
            targetKey: 'id',
            foreignKey: 'userId',
            onDelete: 'cascade',
            hooks: true,
            as: 'user'
        })
    };
    return UserProfile;
};