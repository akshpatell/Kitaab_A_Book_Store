const mongoose = require('mongoose');

async function connectDB(){
    try {
        await mongoose.connect("mongodb+srv://admin:aksh123@cluster0.xkuefl9.mongodb.net/", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log("Error in Connecting", err);
    }
}

module.exports = connectDB;