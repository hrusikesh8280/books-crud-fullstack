const mongoose = require("mongoose")
require('dotenv').config();
const mongoURI = process.env.DatabaseUrl

const connection = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected...");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports={connection}