module.exports = (sequelize, DataTypes) => {
    const Room = sequelize.define('Room', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        buildingId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Buildings',
                key: 'id',
            },
            allowNull: false,
        },
    });

    // Define associations
    Room.associate = (models) => {
        Room.belongsTo(models.Building, {
            foreignKey: 'buildingId',
            as: 'building',
        });
    };

    return Room;
};
