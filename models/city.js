module.exports = function (sequelize, DataTypes) {
    return sequelize.define('City', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            comment: '主键'
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '城市'
        },
    },
        {
            underscore: true,
            timestamps: false,
            freezeTableName: true,
            tableName: 'City',
            comment: '城市列表',
            charset: 'utf8',
            collate: 'utf8_general_ci',
            // indexes: [{
            //     name: 'userAddress_userId',
            //     method: 'BTREE',
            //     fields: ['user_id']
            // }]
        });
    return City;
}