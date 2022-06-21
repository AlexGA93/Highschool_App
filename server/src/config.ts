
import { Config } from './types/type';

// dotenv
require('dotenv').config();

let configuration: Config = {
    MYSQL_USER: process.env.MYSQL_USER,
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
    MYSQL_DATABASE: process.env.MYSQL_DATABASE,
    MYSQL_HOST: process.env.MYSQL_HOST,
    MYSQL_ROOT_PASSWORD: process.env.MYSQL_ROOT_PASSWORD,
    MYSQL_PORT: process.env.MYSQL_PORT,
    NODEPORT: process.env.NODEPORT
};

export default configuration;