// load env variables
if (process.env.NODE_ENV != "production") { 
    require("dotenv").config(); 
}
const mongoose = require('mongoose');

async function connectToDb() { 
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('database successfully connected')
        
    } catch (error) {
        console.log(error)
        
    }
}

module.exports = connectToDb; 