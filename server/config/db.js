
const mongoose = require("mongoose");


const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Eccomerce");
        console.log("database connected successfully");
    } catch (error) {
        console.log("Error while connecting the database ", error)
    }
}

module.exports = connectDB;