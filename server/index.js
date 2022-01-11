const express = require('express');
const connectionBD = require('./config/db');
const cors = require('cors');

//Server Created
const app = express();

//DB Connection
connectionBD();
//Middleware
app.use(cors());

app.use(express.json());

app.use('/api/users', require('./routes/user'));
// //main route
// app.get('/', (req,res) => {
//     res.send('Hello world');
// })

app.listen(4000, () => {
    console.log('Server is running correctly!');
})