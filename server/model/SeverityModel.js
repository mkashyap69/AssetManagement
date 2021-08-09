const mongoose = require('mongoose');

const severitySchema = mongoose.Schema({
  severityType: {
    type: String,
    required: [true, 'Describe the severity of your asset condition'],
  },
});

const Severity = mongoose.model('Severity', severitySchema);

module.exports = Severity;
