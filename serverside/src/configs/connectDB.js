const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Clothes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
module.exports = mongoose;
