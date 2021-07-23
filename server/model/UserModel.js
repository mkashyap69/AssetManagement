const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, 'Username is required'],
      unique: true,
    },
    firstName: {
      type: String,
      required: [true, 'First Name is required'],
    },
    lastName: {
      type: String,
    },
    Address: {
      type: String,
      required: [true, 'Address is required'],
      trim: true,
    },
    role: {
      type: mongoose.Schema.ObjectId,
      ref: 'Role',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
