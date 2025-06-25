// models/Student.js

import { DataTypes } from 'sequelize';
import sequelize from '../config/databases.js';

const Student = sequelize.define('Student', {

  regNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
 level: {
  type: DataTypes.INTEGER,
  allowNull: false,
  validate: {
    isIn: {
      args: [[100, 200, 300, 400, 500]],
      msg: 'Level must be one of: 100, 200, 300, 400, or 500',
    },
  },
}
  
},
   { timestamps: true,
    tableName: 'students', 
    }
);

export default Student;