const mongoose = require('mongoose');
const db = mongoose.connect(process.env.DB,{
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
console.log(mongoose.connection.readyState);

module.exports = db;