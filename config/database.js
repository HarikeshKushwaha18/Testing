const mongoose = require('mongoose');

require("dotenv").config();

const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("Connection Established");
    })
    .catch((err) =>{
        console.log("Connection Failed")
        console.error(err.message);
        process.exit(1);
    })
}

module.exports = dbConnect;