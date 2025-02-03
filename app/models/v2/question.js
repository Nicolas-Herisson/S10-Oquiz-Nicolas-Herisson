import sequelize from "../../database/sequelize.js";
import { DataTypes, Model } from "sequelize";

export default class Question extends Model {};

Question.init( 
    {
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        anecdote: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        wiki: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        level_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quiz_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize, //establish connection
        tableName: "question",
    }
);