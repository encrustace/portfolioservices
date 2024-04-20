import express from "express";
import messageRouter from "./controller/messageController.js";
import config from "./config.js";
import { connect } from "./connection.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded(
    {
        extended: true
    }
))
app.use(messageRouter);

connect()
    .then(() => {
        app.listen(config.port, () => {
            console.log(`Server started at port: ${config.port}`);
        })
    }).catch(error => {
        console.error('Error connecting to MongoDB:', error);
    })