// Import necessary modules
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create Armor class, which extends Model
class Armor extends Model { }

// Initialize Armor with column definitions
Armor.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {

            type: DataTypes.STRING,
            allowNull: false,

        },
        defense: {

            type: DataTypes.INTEGER,
            allowNull: false,

        },
        price: {

            type: DataTypes.INTEGER,
            allowNULL: false,
        },
    },

    {
        // Set up sequelize options  
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'armors',
    }
);

// Export Armor model
module.exports = Armor;

