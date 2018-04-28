module.exports = function (sequelize, DataTypes) {
    var Destination = sequelize.define('Destination', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            comment: '主键'
        },
        cityId: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '城市id'
        },
    },
        {
            underscore: true,
            timestamps: false,
            freezeTableName: true,
            tableName: 'StartCity',
            comment: '城市列表',
            charset: 'utf8',
            collate: 'utf8_general_ci',
            // indexes: [{
            //     name: 'userAddress_userId',
            //     method: 'BTREE',
            //     fields: ['user_id']
            // }]
        });

    Destination.associate = function (models) {
        // associations can be defined here
        Destination.belongsTo(modals.city, {
            targetKey: 'id',
            foreignKey: 'cityId',
            onDelete: 'cascade',
            hooks: true,
            as: 'city'
        })
    };

    return Destination;
}