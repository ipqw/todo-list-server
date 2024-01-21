import { Sequelize } from 'sequelize'
import pg from 'pg';

const sequelize = new Sequelize('postgres://riwdgmps:dWgNjpiHAx6t00OFKb_181ye4KwLGpx-@manny.db.elephantsql.com/riwdgmps',
    {
        dialect: 'postgres',
        dialectModule: pg,
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
    }
)
export default sequelize