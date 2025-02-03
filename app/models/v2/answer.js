import sequelize from "../../database/sequelize.js";
import { DataTypes, Model } from "sequelize";

export default class Answer extends Model {};

nswer.init(
    {
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        question_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        is_valid: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }
);