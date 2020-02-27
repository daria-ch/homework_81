const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const urls = require('./app/urls');
const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

const run = async () => {
    await mongoose.connect("mongodb://localhost/links", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    app.use("/links", urls);

    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    });
};

run().catch(e => {
    console.error(e);
});
