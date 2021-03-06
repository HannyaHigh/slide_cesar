const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const connectionBD = async ()=> {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('DB is connected!');
        
    } catch (error) {
        console.log(error);
        process.exit(1);//we stop the app
    }
}

module.exports = connectionBD