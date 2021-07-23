const mongoose = require('mongoose');

const roleSchema = mongoose.Schema(
  {
    roleAuthorization: {
      type: String,
    },
    groupRoleName: {
      type: String,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Role = mongoose.model('Role', roleSchema);

module.exports= Role;
