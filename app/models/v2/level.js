import {DataTypes, Model } from "sequelize";
import sequelize from "../../database/sequelize.js";

export default class Level extends Model {};


Level.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize, //establish connection
        tableName: "level",
    }
);