const dotenv = require('dotenv');
const mongoose = require("mongoose");
const path = require("path");
dotenv.config();

const url = "mongodb+srv://user1234:user1234@cluster0.pq6xa.mongodb.net/"; 

// Mongo Connection
const connectDB = async () => {
      try {
            await mongoose.connect(url); 
            console.log("Connection Success MongoDB");
        } catch (err) {
            console.error('Connection failed:', err);
        }
};

module.exports = connectDB;
