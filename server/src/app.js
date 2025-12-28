// File: server/src/app.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { globalErrHandling } from './middlewares/ErrorHandling.js';

dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello API!");
});
app.use(globalErrHandling)
export default app;