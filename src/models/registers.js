const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    menu: {
        type: String,
        required: true
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        required: true
    }
})

const Contact = new mongoose.model("Contact", contactSchema);
module.exports = Contact;