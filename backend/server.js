require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectToDB = require('./database/db');
const authRoutes = require('./routes/auth-routes');


const app = express();
const PORT = process.env.PORT || 3000;

//db connection
connectToDB();

//cors
app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:5174",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

//middleware
app.use(express.json());


//routes
app.use('/api/auth', authRoutes);

//gloabal error handling
app.use((err, req, res, next) => {
    console.log('Error: ', err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong'
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is listening on the Port ${PORT}`);
})
