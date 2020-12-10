const mongoose = require("mongoose");

const connectDB = async () => {
   try {
    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Successfully connected to DB");
} catch (error) {
    console.log("Error connecting to DB", error);
    }
};

module.exports = connectDB;
