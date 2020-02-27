const express = require("express");
const nanoid = require("nanoid");
const Url = require('../models/Url');

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const urls = await Url.find();
        res.send(urls);
    } catch (error) {
        res.status(404).send({message: "Not found"});
    }
});

router.get("/:shortUrl", async (req, res) => {
    try {
        const item = await Url.findOne({shortUrl: req.params.shortUrl});
        console.log(item);
        if (!item) {
            return res.status(404).send({message: "Url is not found"});
        }
        res.status(301).redirect(item.originalUrl);
    } catch (error) {
        res.status(404).send({message: "Not found"});
    }
});

router.post("/", async (req, res) => {
    const urlData = req.body;

    if (!urlData.originalUrl) {
        return res.status(400).send('URL must be present in the request');
    }

    const url = new Url(urlData);
    url.shortUrl = nanoid(7);
    url.originalUrl = urlData.originalUrl;

    try {
        const result = url.save();
        res.send({_id: url._id, originalUrl: url.originalUrl, shortUrl: url.shortUrl});

    } catch (error) {
        return res.status(400).send(error);
    }
});

module.exports = router;