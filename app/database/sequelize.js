import { Sequelize } from "sequelize";
import "dotenv/config";
import pg from 'pg';

const sequelize = new Sequelize(`postgresql://${process.env.DBUSER}:${process.env.DBPWD}@localhost/${process.env.DB}`, {
    define: {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

export default sequelize;