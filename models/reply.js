'use strict';
module.exports = (sequelize, DataTypes) => {
    var Reply = sequelize.define('Reply', {
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
        userCommentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: '用户评价id'
        },
        replyContent: {
            type: DataTypes.TEXT,
            allowNull: false,
            comment: '回复内容'
        }
    },
        {
            timestamps: true,
            underscored: true,
            paranoid: true,
            freezeTableName: true,
            tableName: 'Reply',
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    Reply.associate = function (models) {
        // associations can be defined here
        Reply.belongsTo(modals.userComment, {
            targetKey: 'id',
            foreignKey: 'userCommentId',
            onDelete: 'cascade',
            hooks: true,
            as: 'userComment'
        }),
        Reply.belongsTo(modals.tour, {
            targetKey: 'id',
            foreignKey: 'tourId',
            onDelete: 'cascade',
            hooks: true,
            as: 'tour'
        })
    };
    return Reply;
};