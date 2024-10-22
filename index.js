const express = require('express');
const cors = require('cors');
const dotenv=require('dotenv');
const connectDB=require('./config/db');
const searchRoutes=require('./Routes/searchRoute')
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
connectDB();
app.use('/api',searchRoutes)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
