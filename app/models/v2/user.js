import { DataTypes, Model } from "sequelize";
import sequelize from "../../database/sequelize.js";

export default class User extends Model {};

User.init(
    {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            isMail: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize, //establish connection
        tableName: "user",
    }
);