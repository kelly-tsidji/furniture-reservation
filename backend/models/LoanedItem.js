module.exports = (sequelize, DataTypes) => {
    const LoanedItem = sequelize.define('LoanedItem', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        expectedDeliveryDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        actualDeliveryDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        deliveryRoomId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Rooms',
                key: 'id',
            },
            allowNull: false,
        },
        expectedReturnDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        actualReturnDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        returnRoomId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Rooms',
                key: 'id',
            },
            allowNull: false,
        },
        workOrderId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'WorkOrders',
                key: 'id',
            },
            allowNull: false,
        },
    });

    LoanedItem.associate = (models) => {
        LoanedItem.belongsTo(models.Room, {
            foreignKey: 'deliveryRoomId',
            as: 'deliveryRoom',
        });
        LoanedItem.belongsTo(models.Room, {
            foreignKey: 'returnRoomId',
            as: 'returnRoom',
        });
        LoanedItem.belongsTo(models.WorkOrder, {
            foreignKey: 'workOrderId',
            as: 'workOrder',
        });
    };

    return LoanedItem;
};
