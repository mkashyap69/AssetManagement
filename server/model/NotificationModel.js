const mongoose = require('mongoose');

const notificationSchema = mongoose.Schema(
  {
    notificationName: {
      type: String,
      required: [true, 'Notification name is required'],
    },
    description: {
      type: String,
      required: [true, 'Notification description is required'],
    },
    sender: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

const Notification = mongoose.model('Notification', notificationSchema);

export default Notification;
