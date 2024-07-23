module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item', {
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
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    });

    Item.associate = (models) => {
        Item.hasMany(models.Inventory, {
            foreignKey: 'itemId',
            as: 'inventory',
        });
        Item.hasMany(models.LoanedItem, {
            foreignKey: 'itemId',
            as: 'loanedItem',
        });
    };

    return Item;
};
