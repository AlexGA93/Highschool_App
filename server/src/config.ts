
import { Config } from './types/type';

// dotenv
require('dotenv').config();

let configuration: Config = {
    PORT:process.env.PORT,
};

export default configuration;