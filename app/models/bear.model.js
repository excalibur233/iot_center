const mongoose = require('mongoose');

const BearSchema = mongoose.Schema({
  name: {type: String, required: true, unique: true},
  color: {type: String, required: true},
  created: {type: Date, default: Date.now()}
});

mongoose.model('Bear', BearSchema);

