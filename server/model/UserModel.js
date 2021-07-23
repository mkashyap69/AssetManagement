const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, 'Username is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Username is required'],
      select: false,
    },
    firstName: {
      type: String,
      //required: [true, 'First Name is required'],
    },
    lastName: {
      type: String,
    },
    Address: {
      type: String,
      //required: [true, 'Address is required'],
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

userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 12);

  next();
});

userSchema.methods.comparePassword = async (inputPassword, userPassword) => {
  return await bcrypt.compare(inputPassword, userPassword);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
