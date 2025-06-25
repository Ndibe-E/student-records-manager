import { DataTypes } from 'sequelize';
import sequelize from '../config/databases.js';
import bcrypt from 'bcrypt';
// Admin model definition

const Admin = sequelize.define('Admin', {
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
    password: { // ✅ ADD THIS BLOCK
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
  type: DataTypes.STRING,
  defaultValue: 'admin', // or 'Teacher'
},

  },
 {
  tableName: 'admins',
  timestamps: true,
});
// // Hash password before saving
// Admin.beforeCreate(async (admin) => {
//   if (admin.password){ 
//     admin.password = await bcrypt.hash(admin.password, 10);}
// });

// Hash password before updating
Admin.beforeUpdate(async (admin) => {
  if (admin.changed('password')) {
   admin.password = await bcrypt.hash(admin.password, 10);
  }
});

// Method to compare passwords
Admin.prototype.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Ensure that when data is pulled, certain sensitive data are not sent back
Admin.prototype.toJSON = function () {
  const values = { ...this.get() };
  delete values.password;
  delete values.resetPasswordToken;
  delete values.resetPasswordExpires;
  return values;
};


export default Admin;