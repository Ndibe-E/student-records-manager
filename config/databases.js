import { Sequelize } from 'sequelize'; // Import Sequelize from the sequelize package
import dotenv from 'dotenv'; // Import dotenv to manage environment variables

dotenv.config(); // Load environment variables from .env file
// Initialize Sequelize with database connection details
// Use environment variables for configuration, with defaults if not set
const sequelize = new Sequelize(
  process.env.DB_NAME ,
  process.env.DB_USER ,
  process.env.DB_PASSWORD , // Default to empty string if not set
  
  {
    host: process.env.DB_HOST , // Default to localhost if not set,
    dialect: process.env.DB_DIALECT ,
    port: process.env.DB_PORT  // Default MySQL port
  }
);

export default sequelize;
// This code sets up a connection to a MySQL database using Sequelize ORM.