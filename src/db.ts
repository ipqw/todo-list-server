import { Sequelize } from 'sequelize'
import pg from 'pg';

const sequelize = new Sequelize('postgres://tzwihpbi:uBC2F3zcVWVSyOdEBg7KYuA17CAZnv8c@manny.db.elephantsql.com/tzwihpbi',
    {
        dialect: 'postgres',
        dialectModule: pg,
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
    }
)
export default sequelize