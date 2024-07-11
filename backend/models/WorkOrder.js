module.exports = (sequelize, DataTypes) => {
    const WorkOrder = sequelize.define('WorkOrder', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        workOrderId: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            unique: true,
        },
        event: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        startDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        endDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        buildingId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Buildings',
                key: 'id',
            },
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'id',
            },
            allowNull: false,
        },
    });

    WorkOrder.associate = (models) => {
        
        WorkOrder.belongsTo(models.Building, {
            foreignKey: 'buildingId',
            as: 'building',
        });

        WorkOrder.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user',
        });

        WorkOrder.hasMany(models.LoanedItem, {
            foreignKey: 'workOrderId',
            as: 'loanedItems',
        });

    };

    return WorkOrder;
};
