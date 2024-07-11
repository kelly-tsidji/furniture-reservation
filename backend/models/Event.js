module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('Event', {
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
        startDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        endDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    });

    Event.associate = (models) => {
        Event.belongsTo(models.Building, {
            foreignKey: 'buildingId',
            as: 'building',
        });
    };

    return Event;
};
