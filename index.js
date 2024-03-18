import express from "express";
import authRoutes from "./routes/auth.js";
import cors from "cors";
import eventRoutes from './routes/event.js';
import participateRoutes from './routes/participate.js';

import cookieParser from "cookie-parser";
const app = express();

app.use(express.static('public'));

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.get('/', (req, res) => {
    res.send('Welcome');
}
)
app.use('/api/auth', authRoutes);
app.use('/api/',eventRoutes);
app.use("/api/", participateRoutes);   
app.listen(8080,(req,res) => {
     console.log("listening to the port success")
});
