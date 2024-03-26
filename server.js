import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import connectToMongodb from './db/connectToMongodb.js';
import authRoutes from './routes/auth.routes.js'
import messagesRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'

const app = express();
const PORT = process.env.PORT || 8000;

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messagesRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, ()=>{
    connectToMongodb();
    console.log(`Server is runnning on port ${PORT}`);
})