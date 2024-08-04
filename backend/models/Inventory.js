module.exports = (sequelize, DataTypes) => {
    const Inventory = sequelize.define('Inventory', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        itemId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Items',
                key: 'id',
            },
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('On Loan', 'Available', 'Broken'), 
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        roomId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Rooms',
                key: 'id',
            },
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        qrCodeUrl: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        freezeTableName: true,  // Prevents Sequelize from pluralizing the table name
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
        Inventory.hasMany(models.LoanedItem, {
            foreignKey: 'inventoryId',
            as: 'inventory',
        });
    };

    return Inventory;
};
