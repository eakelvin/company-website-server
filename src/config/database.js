require('dotenv').config()
const mongoose = require('mongoose')
const uri = process.env.MONGO_DATABASE

const connectDatabase = async() => {
    try {
        const connect = await mongoose.connect(uri)
        console.log(`Databased Connected to ${connect.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}

module.exports = connectDatabase