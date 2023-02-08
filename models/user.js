import Sequelize, { DataTypes } from 'sequelize';
import sequelize from '../sequelize-config.js';

const User = sequelize.define('user', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
  },
  first_name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  name: {
    type: DataTypes.VIRTUAL,
    get() {
      return `${this.first_name} ${this.last_name}`.trim();
    },
  },
  photo: {
    type: DataTypes.TEXT,
    allowNull: true,
    get() {
      const value = this.getDataValue('photo');
      if (!value) {
        return null;
      }
      return `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.S3_REGION}.amazonaws.com/${value}`;
    },
  },
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});


export default User;
