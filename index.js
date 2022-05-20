const express = require("express");
const mongoose = require("mongoose");
const postRouter = require("./router/postRouter");

const app = express();
const DB_URL =
    "mongodb+srv://ilkerogtc:S1j8OQVCpymtH5js@cluster0.mt4n7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3000;

app.use("/api/posts", postRouter);

const startApp = async () => {
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log("MongoDB connected");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};