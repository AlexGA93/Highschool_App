
import { Config } from './types/type';

// dotenv
require('dotenv').config();

let configuration: Config = {
    NODEPORT:process.env.NODEPORT,
    MYSQLPORT: process.env.MYSQLPORT,
    MYSQLHOST:process.env.MYSQLHOST,
    MYSQLUSER:process.env.MYSQLUSER,
    MYSQLPASSWORD:process.env.MYSQLPASSWORD,
    MYSQL_ROOT_PASSWORD:process.env.MYSQL_ROOT_PASSWORD,
    MYSQL_DATABASE:process.env.MYSQL_DATABASE
};

export default configuration;