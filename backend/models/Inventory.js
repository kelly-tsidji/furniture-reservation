module.exports = (sequelize, DataTypes) => {
    const Inventory = sequelize.define('Inventory', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0,
            },
        },
        itemId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Items',
                key: 'id',
            },
            allowNull: false,
        },
        roomId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Rooms',
                key: 'id',
            },
            allowNull: false,
        },
    });

    Inventory.associate = (models) => {
        Inventory.belongsTo(models.Item, {
            foreignKey: 'itemId',
            as: 'item',
        });
        Inventory.belongsTo(models.Room, {
            foreignKey: 'roomId',
            as: 'room',
        });
    };

    return Inventory;
};
