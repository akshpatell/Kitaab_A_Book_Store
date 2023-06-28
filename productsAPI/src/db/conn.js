const mongoose = require('mongoose');

async function connectDB(){
    try {
        await mongoose.connect("mongodb+srv://dharmik:admin@cluster0.rv5fxew.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log("Error in Connecting", err);
    }
}

module.exports = connectDB;