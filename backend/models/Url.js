const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UrlSchema = new Schema({
    shortUrl: {
        type: String,
        required: true
    },
    originalUrl: {
        type: String,
        required: true
    }
});

const Url = mongoose.model('Url', UrlSchema);

module.exports = Url;