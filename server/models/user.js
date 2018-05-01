'use strict';
// library
const _ = require('lodash');
const bcrypt = require('bcryptjs');
const Acl = require('../../modules/acl');
const imageConfig = require('../../config/image');
const commonConfig = require('../../config/common');
const Storage = require('../../modules/storage');


module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('User', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '姓'
    },
    fistName: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '名'
    },
    nickName: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '昵称'
    },
    profilePhoto: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: '用户头像，avatar'
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: '密码'
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: '冻结或拉黑用户'
    },
    birth: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '生日'
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: '邮箱'
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    schema: 'public',
    underscored: true,
    charset: 'utf8',
    paranoid: true,
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {fields: ['phone']}
    ],
    getterMethods: {
      fullName() {
        return `${this.fistName}${this.lastName}`
      }
    },
    hooks: {
      beforeCreate(instance) {
        instance.password = bcrypt.hashSync(instance.password, 10);
      },
      beforeUpdate(instance, options) {
        if (options.fields.includes('passed')) {
          instance.password = bcrypt.hashSync(instance.password, 10);
        }
      },
      async afterDestroy(instance, options) {
        await Storage.disk('local').delete(`uploads/customer/${instance.id}/avatar/${instance.profilePhoto}`);
      }
    },
    setterMethods: {},
    scopes: {
      includeUserSession() {
        return {
          include: {
            model: sequelize.models.UserSession, as: 'userSessions'
          }
        }
      },
    }
  });
  Model.getAttributes = function () {
    return Object.keys(Model.rawAttributes);
  }
  Model.associate = function(models) {
    // associations can be defined here
    Model.hasMany(models.UserSession, {
      targetKey: 'id',
      foreignkey: 'userId',
      onDelete: 'cascade',
      as: 'userSessions'
    })
  };

  Model.protoType.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.password)
  };

  Model.protoType.acl = function () {
    return new Acl(this.roles);
  }

  Model.prototype.toJSON = function () {
    const res = this.dataValues;

    if (!!res.profilePhoto) {
      let url = `${commonConfig.sourceUrl}/customer/${res.id}/avatar/${res.profilePhoto}`;
      this.setDataValue('avatar', url);
    }


    // hide field
    delete res.password;

    return res;
  };
  return Model;
};