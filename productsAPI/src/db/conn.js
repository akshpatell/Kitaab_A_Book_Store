const mongoose = require('mongoose');

async function connectDB(){
    try {
        await mongoose.connect("mongodb+srv://aksh:admin@cluster0.coce9lz.mongodb.net/", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log("Error in Connecting", err);
    }
}

module.exports = connectDB;