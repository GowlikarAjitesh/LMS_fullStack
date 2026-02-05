const mongoose = require('mongoose');
const MONGODB_Url = process.env.MONGODB_URL;
async function connectToDB(){
    try {
        await mongoose.connect(MONGODB_Url);
        console.log('MongoDB connected successfully.')
    } catch (error) {
        console.log('MongoDB connection failed');
        process.exit(1);
    }
}

module.exports = connectToDB;