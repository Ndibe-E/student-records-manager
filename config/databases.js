import { Sequelize } from 'sequelize'; // Import Sequelize from the sequelize package
import dotenv from 'dotenv'; // Import dotenv to manage environment variables

dotenv.config(); // Load environment variables from .env file
// Initialize Sequelize with database connection details
// Use environment variables for configuration, with defaults if not set
const sequelize = new Sequelize(
  process.env.DB_NAME || 'studentsrecord_db',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD,
  process.env.JWT_SECRET , // Default
  {
    host: process.env.DB_HOST || 'localhost', // Default to localhost if not set,
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306, // Default MySQL port
  }
);

export default sequelize;
// This code sets up a connection to a MySQL database using Sequelize ORM.