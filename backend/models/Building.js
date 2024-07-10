module.exports = (sequelize, DataTypes) => {
    const Building = sequelize.define('Building', {
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
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        // this will be either uphill or downhill
        area: {
            type: DataTypes.STRING, 
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    });

    return Building;
};
