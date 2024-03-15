const mongoose = require('mongoose');
require('dotenv').config();

const { MONGODB_USERNAME, MONGODB_PASSWORD } = process.env;
const uri = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@ticketmanagement.zlajnid.mongodb.net/`;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB Connection Failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
