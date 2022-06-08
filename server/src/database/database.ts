// import { MySQL_config } from "../types/type";
import configuration from "../config";

import mysql, { PoolConfig } from 'mysql';

const config: PoolConfig = {
    host: (configuration.MYSQLHOST) as string,
    port:Number(configuration.MYSQLPORT),
    user: (configuration.MYSQLUSER) as string,
    password: (configuration.MYSQLPASSWORD) as string,
    database: (configuration.MYSQL_DATABASE) as string
};

const conn = mysql.createPool(config);

conn.getConnection((err, connection) => {
    if (err) throw err;
    console.log('connected!');
    
});
export default conn;