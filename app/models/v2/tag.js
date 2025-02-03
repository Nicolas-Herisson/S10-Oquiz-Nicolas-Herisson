import sequelize from "../../database/sequelize.js";
import { DataTypes, Model } from "sequelize";

export default class tag extends Model {};

tag.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize, //establish connection
        tableName: "tag",
    }
);