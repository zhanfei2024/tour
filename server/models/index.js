'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
require('sequelize-hierarchy')(Sequelize);
// When BIGINT type digital too big,will number convert string type bug.
require('pg').defaults.parseInt8 = true;
const _=require('lodash');

var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var debug     = require('debug')('APP:MODEL');
var db        = {};

config.logging = function (value) {
  if (process.env.NODE_ENV !== 'production') debug(value);
};

config.timezone = '+00:00';
// 关闭使用Op对象提醒
config.operatorsAliases = false;

let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const modelPaths = [path.join(__dirname, 'ta'), __dirname];
_.each(modelPaths, modelPath => {
  fs
    .readdirSync(modelPath)
    .filter((file) => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach((file) => {
      const model = sequelize['import'](path.join(modelPath, file));
      db[model.name] = model;
    });
});


Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
