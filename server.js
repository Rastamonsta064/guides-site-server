import guidesRouter from './routes/guides.js';
import eventsRouter from './routes/events.js';
import ordersRouter from "./routes/orders.js";
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import {} from 'dotenv/config'


const app = express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.use('/guides', guidesRouter);
app.use('/events', eventsRouter);
app.use('/orders', ordersRouter);

app.listen(port, () => {
    console.log(`Server is running on port:${port}`)
})